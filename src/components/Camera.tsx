import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const CameraComponent = () => {
  const router = useRouter();

  const uploadFile = (endPoint: string, formData: FormData) => {
    fetch(endPoint, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  };

  const handleAction = useCallback(async () => {
    console.log("Opening camera");
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Upload video to backend
      uploadVideo(result.assets?.[0].uri);
    }
  }, [router]);

  const uploadVideo = async (uri: string) => {
    console.log("Uploading video url :", uri);
    const formData = new FormData();
    formData.append("video", {
      uri: uri,
      name: "measurement.mp4",
      type: "video/mp4",
    });

    console.log("Uploading video");
    try {
      uploadFile(
        "http://192.168.1.7:8000/measurement/process-video/",
        formData
      );
    } catch (error: any) {
      console.error("Error uploading video:", error?.message);
      if (error?.message === "Network request failed") {
        console.error(
          "Network error. Make sure your Django server is running and accessible."
        );
      }
    }
  };

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAction}>
            <Text style={styles.text}>Record</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

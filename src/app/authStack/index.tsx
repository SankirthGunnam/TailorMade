import { useEffect, useState } from "react";
import Home from "../../screens/home";
import OnboardingScreen from "@/src/screens/onboarding";
import axios from "axios";
import { server_url } from "@/src/constants/constants";
import { useAtomValue } from "jotai";
import { accessTokenAtom } from "@/src/atoms/auth";

const HomeLayout = () => {
  const [user, setUser] = useState(null);
  const accessToken = useAtomValue(accessTokenAtom);

  console.log("access token :", accessToken);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${server_url}/login/get-user-details/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("User data:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // if (!user) {
  //   return null;
  // }

  // if (!user.is_signed_up) {
  //   return <OnboardingScreen />;
  // }

  return <Home />;
};

export default HomeLayout;

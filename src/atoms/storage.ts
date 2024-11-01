import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { AsyncStorage as JotaiAsyncStorage } from "jotai/vanilla/utils/atomWithStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

export const atomWithAsyncStorage = (key: string, initialValue: any) => {
  return atomWithStorage(key, initialValue, storage as JotaiAsyncStorage<any>, {
    getOnInit: true,
  });
};

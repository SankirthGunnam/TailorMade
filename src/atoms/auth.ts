import { atom } from "jotai";
import { atomWithAsyncStorage } from "./storage";

export const accessTokenAtom = atomWithAsyncStorage("accessToken", "");
export const refreshTokenAtom = atomWithAsyncStorage("refreshToken", "");
export const isSignedInAtom = atom<boolean>(false);
export const isIntroCompleteAtom = atomWithAsyncStorage(
  "isIntroComplete",
  false
);

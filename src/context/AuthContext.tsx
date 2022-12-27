import axios from 'axios';
import { ResponseType } from 'expo-auth-session';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import React, { createContext } from 'react';

import { api } from '../services/api';

WebBrowser.maybeCompleteAuthSession();

interface IAuthContext {
  SingUpWithGoogle: () => void;
  isAuthenticate: boolean;
  isUserLoading: boolean;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
interface IUser {
  id: string;
  googleId?: string;
  givenName: string;
  familyName: string;
  picture?: string;
  password?: string;
  nickName: string;
  birthDate?: Date;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  phoneNumber?: number;
  countryCode?: number;
  email: string;
  verifiedEmail: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export const AuthContext = createContext(
  {} as IAuthContext
);
interface IAuthContextProvider {
  children: React.ReactNode;
}
export const AuthContextProvider = ({
  children
}: IAuthContextProvider) => {
  const [isUserLoading, setIsUserLoading] =
    useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticate, setIsAuthenticate] =
    useState<boolean>(false);
  const [requestGoogle, responseGoogle, promptAsyncGoogle] =
    Google.useAuthRequest({
      clientId:
        '395821495385-ifp9rpjl4cnl55t84f47198pnpd9navn.apps.googleusercontent.com',
      redirectUri: AuthSession.makeRedirectUri({
        useProxy: true
      }),
      scopes: ['profile', 'email']
    });

  async function SingUpWithGoogle() {
    try {
      setIsUserLoading(true);
      await promptAsyncGoogle();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
    }
  }

  useEffect(() => {
    async function SingUp() {
      if (
        responseGoogle?.type === 'success' &&
        responseGoogle.authentication?.accessToken
      ) {
        try {
          setIsUserLoading(true);
          const { data } = await api.post(
            '/createUserWithGoogleProvider',
            {
              access_token:
                responseGoogle?.authentication?.accessToken
            }
          );
          setUser(data);
        } finally {
          setIsUserLoading(false);
        }
      }
    }
    SingUp();
  }, [responseGoogle]);
  return (
    <AuthContext.Provider
      value={{
        SingUpWithGoogle,
        isAuthenticate,
        isUserLoading,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, ReactNode, useContext } from 'react';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthProviderProps {
  children: ReactNode;
}

interface UserInterface {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: UserInterface;
}

function AuthProvider({ children }: AuthProviderProps) {
  const user: UserInterface = {
    id: '123123123',
    name: 'Leonardo',
    email: 'leodeesign@gmail.com',
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

async function signInWithGoogle() {
  try {
    // GoogleSignin.configure();
  } catch (error) {
    console.log(error);
  }
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

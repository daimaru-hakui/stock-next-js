import { useState,useEffect } from "react";
import { auth } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  title: string;
  id: string;
};

const Login: React.FC = (props) => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('')
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.500");
  const signup = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
  }

  return (
    <div>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="example@gmail.com"
            variant="filled"
            mb={3}
            type="email"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
          />
          <Input
            placeholder="************"
            variant="filled"
            mb={6}
            type="password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
          />
          <Button onClick={signup} colorScheme="teal" mb={3}>login</Button>
          <Button onClick={toggleColorMode}>mode</Button>
        </Flex>
      </Flex>
    </div>
  );
};
export default Login;

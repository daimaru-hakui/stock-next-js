import { useState,useEffect } from "react";
import { auth } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import {
  onAuthStateChanged,
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
  const [ password, setPassword ] = useState('');
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.500");
  useEffect(()=>{
    if(user) {
      router.push('/');
    }
  },[router, user])
  const signup = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user)
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="ログインID"
            variant="Outline"
            mb={3}
            background={"white"}
            type="email"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
          />
          <Input
            placeholder="パスワード"
            variant="Outline"
            mb={6}
            background={"white"}
            type="password"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
          />
          <Button onClick={signup} colorScheme="teal" mb={3}>login</Button>
          {/* <Button onClick={toggleColorMode}>mode</Button> */}
        </Flex>
      </Flex>
    </div>
  );
};
export default Login;

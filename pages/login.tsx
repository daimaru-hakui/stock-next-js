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
const Login: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.500");
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
          />
          <Input
            placeholder="************"
            variant="filled"
            mb={6}
            type="password"
          />
          <Button colorScheme="teal">login</Button>
          <Button onClick={toggleColorMode}>color</Button>
        </Flex>
      </Flex>
    </div>
  );
};
export default Login;

import { auth } from "../firebase/auth";
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const router = useRouter();
  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    router.push('login');
  }
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          DAIMARU HAKUI
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="right"
        // flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        
        <Link textColor={"white"} onClick={logout} >ログアウト</Link>
      </Stack>
{/* 
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      ></Box> */}
   
    </Flex>
    
  );
};

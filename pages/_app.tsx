import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <html lang="ja" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

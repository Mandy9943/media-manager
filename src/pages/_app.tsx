import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/theme/themeMain";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;

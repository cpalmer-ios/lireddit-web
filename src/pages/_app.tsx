import React from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }: any) {
  
       // notice the space after %c
       console.log('%c ', 'line-height: 10px; padding: 150px 200px; background-size: 150px; background: url("https://logodix.com/logo/1931235.png") no-repeat center center');

  return (
    <ChakraProvider resetCSS theme={theme}>
      <CSSReset/>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider> 
  )
}

export default MyApp

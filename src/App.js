import { ChakraProvider } from '@chakra-ui/react'

import Character from "./components/character";

function App() {
  return (
    <ChakraProvider>
      <Character
        id={1}
      />
    </ChakraProvider>
  );
}

export default App;

import { ChakraProvider } from '@chakra-ui/react'

import CharactersPage from './components/pages/characters/CharactersPage';

function App() {
  return (
    <ChakraProvider>
      <CharactersPage
        ids={[1, 2, 3, 4, 5]}
      />
    </ChakraProvider>
  );
}

export default App;

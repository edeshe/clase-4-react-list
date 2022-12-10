import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CharactersPage from './components/pages/characters/CharactersPage';
import Error from './components/pages/errors/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharactersPage
          ids={[1, 2, 3, 4, 5]}
        />,
    errorElement: <Error />
  },
  {
    path: "characters/:id",
    element: <CharactersPage />
  }

]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

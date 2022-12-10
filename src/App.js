import Character from "./components/Character";

function App() {
  return (
    <>
      <Character
        name="Unknow"
        image="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
        episode={[
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2", 
        ]}
      />
    </>
  );
}

export default App;

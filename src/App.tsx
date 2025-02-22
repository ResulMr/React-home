import  { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
 



  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
         
      })
      
  }, []); 





  return (
    <div className="min-h-screen bg-black p-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
          <div className="bg-black rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 border-2 border-gray-600 border-solid">
            <img 
              src={character.image}
              alt={character.name}
              className=" rounded-full h-48 m-auto object-cover"
            />
              <h2 className="text-xl font-semibold text-white">{character.name}</h2>
              <p className="text-sm text-white">Species: {character.species}</p>
              <p className="text-sm text-white">Status: {character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

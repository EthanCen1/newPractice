
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

function FavoritePerson(){
  const[name, setName] = useState("Ethan");
  return(
    <>
    <h1>My fav person is {name}</h1>
    <button type="button" onClick={() => setName("Ethan")}>Ethan</button>
    <button type = "button" onClick={() => setName("Jack")}>Jack</button>
    <button type = "button" onClick={() => setName("Mary")}>Mary</button>
    <button type="button" onClick={() => setName("Draco")}  >Draco</button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <FavoritePerson />
);
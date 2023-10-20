// SingleFileApp.js
import React, { useEffect, useState, Suspense } from "react";
import "./styles.css";

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState(JSON.parse(localStorage.getItem("favoritos")));


  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const salvar = ()=>{
    console.log("salvando")
    const favoritos = [...jokes]
    favoritos.push(joke)
    const str = JSON.stringify(favoritos)
    
    localStorage.setItem( "favoritos", str)
  }


  return (
    <div className="single-file-app">
      <h1>Chuck Norris jokes</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{joke}</p>
        <button onClick={salvar} className="button"><p>Add fav</p></button>

        
      </Suspense>
    </div>
  );
}

export default App;
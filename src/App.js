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
  // const salvar = () => {
  //   console.log("salvando")
  //   const favoritos = [...jokes]
  //   favoritos.push(joke)
  //   const str = JSON.stringify(favoritos)

  //   localStorage.setItem("favoritos", str)
  // }
  //Por algum motivo o salvar esta quebrando a aplicação

  return (
    <div className="single-file-app">
      <h1>Chuck Norris random jokes</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <iframe className="gif"
        src="https://giphy.com/embed/BIuuwHRNKs15C" 
        width="960" 
        height="540"
        class="giphy-embed"
        >
          </iframe>
          <p>
          <a href="https://giphy.com/gifs/chuck-norris-thumbs-up-BIuuwHRNKs15C"></a>
          </p>
          <p className="joke">{joke}</p>
       <p>
        Modificações em andamento...
       </p>
      </Suspense>
    </div>
  );
}

export default App;
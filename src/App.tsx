import { useState, useEffect } from "react";

import urlBreedExtractor from "./utils/urlBreedExtractor";
import dogImages from "./utils/interfaces";
import axios from "axios";
import { Leaderboard } from "./Leaderboard";
import { backendURL } from "./utils/backendUrl";

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [breedNames, setBreedNames] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

  // let frontendURL: string;
  // process.env.NODE_ENV === "production"
  //   ? (frontendURL = "https://incredible-kulfi-5ae6a9.netlify.app/")
  //   : (frontendURL = "http://localhost:3000/");

  useEffect(() => {
    async function fetchImage() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/2");
      const jsonBody: dogImages = await res.json();
      console.log(jsonBody.message);
      setImages(jsonBody.message);
      setBreedNames(jsonBody.message.map((e) => urlBreedExtractor(e)));
    }
    fetchImage();
  }, [counter]);

  useEffect(() => {
    async function postBreedNames() {
      await axios.post(backendURL, { breedNames });
      console.log(breedNames);
    }
    postBreedNames();
  }, [breedNames]);

  const handleVote = async (breed: string) => {
    console.log("before put request");
    await axios.put(backendURL, { breedName: breed });
    const counterPlusOne = counter + 1;
    setCounter(counterPlusOne);
    console.log("after put request");
  };

  return (
    <>
      <Leaderboard />
      {images.map((e) => (
        <img src={e} key={e} alt="" />
      ))}
      {breedNames.map((e, ix) => (
        <button key={ix} onClick={() => handleVote(e)}>
          {e}
        </button>
      ))}
    </>
  );
}

export default App;

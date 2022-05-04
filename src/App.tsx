import { useState, useEffect } from "react";
import breedDisplay from "./utils/breedDisplay";
import urlBreedExtractor from "./utils/urlBreedExtractor";
import dogImages from "./utils/interfaces";
import axios from "axios";
import './style.css'

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [breedNames, setBreedNames] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const backendURL =
    process.env.NODE_ENV === "production"
      ? "https://dog-breed-voting-backend-c4b3.herokuapp.com/"
      : "http://localhost:4001/";

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
  }, [breedNames, backendURL]);

  const handleVote = async (breed: string) => {
    console.log("before put request");
    await axios.put(backendURL, { breedName: breed });
    const counterPlusOne = counter + 1;
    setCounter(counterPlusOne);
    console.log("after put request");
  };

  const votes = counter === 1? "vote" : "votes"

  return (
    <div className="votingBox">
      {images.map((e) => (
        <img className="image" height="300px" width="300px" src={e} key={e} alt="" />
      ))}
      {breedNames.map((e, ix) => (
        <button className="button-9" key={ix} onClick={() => handleVote(e)}>
          {breedDisplay(e)}
        </button>
      ))}
      <p>You've cast {counter} {votes}</p>
    </div>
  );
}

export default App;

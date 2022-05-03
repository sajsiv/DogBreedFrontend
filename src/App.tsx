import { useState, useEffect } from "react";
import { greet } from "./utils/greet";
import urlBreedExtractor from "./utils/urlBreedExtractor";
import dogImages from "./utils/interfaces";
import axios from "axios";

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [breedNames, setBreedNames] = useState<string[]>([]);

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
  }, []);


  useEffect(() => {
    async function postBreedNames() {
      axios.post(backendURL, {breedNames,
      });
      console.log(breedNames);
    }
    postBreedNames();
  }, [breedNames]);

  return (
    <div>
      {images.map((e) => (
        <img src={e} key={e} />
      ))}
      {breedNames.map((e) => (
        <h1 key={e}>{e}</h1>
      ))}
    </div>
  );
}

export default App;

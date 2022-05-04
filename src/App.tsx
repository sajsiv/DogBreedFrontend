import { useState, useEffect } from "react";
import breedDisplay from "./utils/breedDisplay";
import urlBreedExtractor from "./utils/urlBreedExtractor";
import dogImages from "./utils/interfaces";
import axios from "axios";
import { Leaderboard } from "./Leaderboard";
import { backendURL } from "./utils/backendUrl";
import "./style.css";
import imageURLBreedExtractor from "./utils/imageURLBreedExtractor";

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([]);
  const [breedNames, setBreedNames] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

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

  const votes = counter === 1 ? "vote" : "votes";

 const fetchNewBreedImage = async (imageURL:string, imageStateIndex: number) => {
  const res = await fetch (imageURL)
  const randomImage = await res.json()
   imageStateIndex === 0? setImages([randomImage.message, images[1]]) : setImages([images[0], randomImage.message])
 }

 console.log(images)

  return (
    <div>
      <Leaderboard />
    <div className="votingBox">
      <div className="imageBox">
      {images.map((e, ix) => (
        <img
          className="image"
          height="300px"
          width="300px"
          src={e}
          key={e}
          alt=""
          onClick={() => fetchNewBreedImage(imageURLBreedExtractor(e), ix)}
        />
      ))}
      </div>
      <div className="buttonBox">
      {breedNames.map((e, ix) => (
        <button className="button-9" key={ix} onClick={() => handleVote(e)}>
          {breedDisplay(e)}
        </button>
      ))}
      </div>
      <p>
        You've cast {counter} {votes}
      </p>
    </div>
   </div>
  );
}

export default App;

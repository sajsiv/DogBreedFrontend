import axios from "axios";
import { useEffect, useState } from "react";
import { TopTenList } from "./TopTenList";
import { backendURL } from "./utils/backendUrl";
import { useSound } from "use-sound";
import bark from "./sounds/who-let-the-dogs.mp3";

export interface topTenInterface {
  id: number;
  votes: number;
  breed: string;
  image?: string;
}

export function Leaderboard(): JSX.Element {
  const [topTen, setTopTen] = useState<topTenInterface[]>([]);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [play] = useSound(bark);

  useEffect(() => {
    async function getTopTen() {
      const response = await axios.get(backendURL + "topten");
      await getImages(response.data);
      setTopTen(response.data);
    }
    getTopTen();
  }, [trigger, play]);

  async function getImages(dogItems: topTenInterface[]) {
    for (let i = 0; i < 3; i++) {
      let url;
      const dog = dogItems[i];
      if (dog.breed.split("-").length > 1) {
        const [breed, subreed] = dog.breed.split("-");
        url = `https://dog.ceo/api/breed/${breed}/${subreed}/images/random`;
      } else {
        url = `https://dog.ceo/api/breed/${dog.breed}/images/random`;
      }
      const imageURL = await axios.get(url);
      dog.image = imageURL.data.message;
    }
  }

  return (
    <div className="leaderboard">
      <h1>Top 10 Dog Breeds</h1>
      <TopTenList data={topTen} setTopTen={setTopTen} />
      <button
        id="leaderboard-refresh-button"
        className="button-9"
        onClick={() => setTrigger((x) => !x)}
      >
        REFRESH
      </button>
    </div>
  );
}

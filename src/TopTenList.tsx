import axios from "axios";
import { useState } from "react";
import { topTenInterface } from "./Leaderboard";
import breedDisplay from "./utils/breedDisplay";

interface TopTenListInterface {
  data: topTenInterface[];
  setTopTen: (arg0: topTenInterface[]) => void;
}

export function TopTenList(props: TopTenListInterface): JSX.Element {
  const [, setImageTrigger] = useState<boolean>(true);

  async function getNewImage(dog: topTenInterface) {
    let url;
    if (dog.breed.split("-").length > 1) {
      const [breed, subreed] = dog.breed.split("-");
      url = `https://dog.ceo/api/breed/${breed}/${subreed}/images/random`;
    } else {
      url = `https://dog.ceo/api/breed/${dog.breed}/images/random`;
    }
    const imageURL = await axios.get(url);
    dog.image = imageURL.data.message;
    props.setTopTen(props.data);
    setImageTrigger((x) => !x);
  }

  const arrayOfLeaderboardItems = props.data.map((item) => {
    const cleanName = breedDisplay(item.breed);
    return (
      <section key={item.id}>
        {item.image ? (
          <div>
            <li className="top3Names">
              {cleanName} ({item.votes})
            </li>
            <img
              onClick={() => getNewImage(item)}
              className="top3Image"
              src={item.image}
              alt={cleanName + " image"}
            />
          </div>
        ) : (
          <div>
            <li>
              {cleanName} ({item.votes})
            </li>
          </div>
        )}
      </section>
    );
  });
  return <ol>{arrayOfLeaderboardItems}</ol>;
}

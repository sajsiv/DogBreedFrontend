import { topTenInterface } from "./Leaderboard";
import breedDisplay from "./utils/breedDisplay";

interface TopTenListInterface {
  data: topTenInterface[];
}

export function TopTenList(props: TopTenListInterface): JSX.Element {
  const arrayOfLeaderboardItems: JSX.Element[] = props.data.map((item) => {
    const cleanName = breedDisplay(item.breed);
    console.log(item.image);
    return (
      <li key={item.id}>
        {cleanName} ({item.votes})
        {props.data.indexOf(item) <= 2 && (
          <img className="image" src={item.image} alt={cleanName + " image"} />
        )}
      </li>
    );
  });
  return <ol>{arrayOfLeaderboardItems}</ol>;
}

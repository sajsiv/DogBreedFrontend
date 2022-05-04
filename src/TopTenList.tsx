import { topTenInterface } from "./Leaderboard";
import breedDisplay from "./utils/breedDisplay";


interface TopTenListInterface {
  data: topTenInterface[];
}

export function TopTenList(props: TopTenListInterface): JSX.Element {
  const arrayOfLeaderboardItems: JSX.Element[] = props.data.map((item) => (
    <li key={item.id}>
      {breedDisplay(item.breed)} ({item.votes})
    </li>
  ));

  return <ol>{arrayOfLeaderboardItems}</ol>;
}

import { topTenInterface } from "./Leaderboard";

interface TopTenListInterface {
  data: topTenInterface[];
}

export function TopTenList(props: TopTenListInterface): JSX.Element {
  const arrayOfLeaderboardItems: JSX.Element[] = props.data.map((item) => (
    <li key={item.id}>
      {item.breed} ({item.votes})
    </li>
  ));

  return (
    <>
      <h1>Top 10 Dog Breeds</h1>
      <ol>{arrayOfLeaderboardItems}</ol>
    </>
  );
}

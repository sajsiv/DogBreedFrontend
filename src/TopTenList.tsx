import { topTenInterface } from "./Leaderboard";
import breedDisplay from "./utils/breedDisplay";

interface TopTenListInterface {
  data: topTenInterface[];
}

export function TopTenList(props: TopTenListInterface): JSX.Element {
  const arrayOfLeaderboardItems = props.data.map((item) => {
    const cleanName = breedDisplay(item.breed);
    console.log(item.image);
    return (
      <section key={item.id}>
        {item.image ? (
          <div>
            <li className="top3Names">
              {cleanName} ({item.votes})
            </li>
            <img
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

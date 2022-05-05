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
      <div key={item.id}>
        {item.image ? (
          <div>
            <li>
              {cleanName} ({item.votes})
            </li>

            <img
              className="image"
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
      </div>
    );
  });
  return <ol>{arrayOfLeaderboardItems}</ol>;
}

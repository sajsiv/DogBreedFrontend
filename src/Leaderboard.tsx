import axios from "axios";
import { useEffect, useState } from "react";
import { TopTenList } from "./TopTenList";
import { backendURL } from "./utils/backendUrl";

export interface topTenInterface {
  id: number;
  votes: number;
  breed: string;
}

export function Leaderboard(): JSX.Element {
  const [topTen, setTopTen] = useState<topTenInterface[]>([]);

  async function getTopTen() {
    const response = await axios.get(backendURL + "topten");
    setTopTen(response.data);
  }

  useEffect(() => {
    getTopTen();
  }, []);

  return (
    <div>
      <TopTenList data={topTen} />
      <button onClick={getTopTen}>REFRESH</button>
    </div>
  );
}

/*
fetch top 10 on first render
Display leaderboard
Add exciting refresh button
*/

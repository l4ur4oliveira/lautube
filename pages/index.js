import { useState } from "react";

import config from "../config.json";

import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState("");

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>
        <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
        <main>
          <Header />
          <Timeline searchValue={searchValue} playlists={config.playlists} />
        </main>
      </div>
    </>
  );
}

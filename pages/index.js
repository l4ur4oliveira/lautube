import { useEffect, useState } from "react";

import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

import { videoService } from "../src/services/videoService";

export default function HomePage() {
  const service = videoService();

  const [ searchValue, setSearchValue ] = useState("");
  const [ playlists, setPlaylists ] = useState({});

  useEffect(() => {
    service.getAllVideos()
    .then((response) => {
      const newPlaylists = {...playlists};

      response.data.forEach((item) => {
        if(!newPlaylists[item.playlist]) {
          newPlaylists[item.playlist] = [];
        }
        newPlaylists[item.playlist].push(item);
      })
      setPlaylists(newPlaylists);
    });
  },[]);

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
          <Timeline searchValue={searchValue} playlists={playlists} />
        </main>
      </div>
    </>
  );
}

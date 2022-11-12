import { useEffect, useState } from "react";

import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = "https://wrboteehgyqavoyfqjpq.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl , supabaseKey);

export default function HomePage() {
  const [ searchValue, setSearchValue ] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    console.log("USE EFFECT");

    supabase.from("video")
      .select("*")
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

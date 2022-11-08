import { CSSReset } from "../src/components/CSSReset";

import config from '../config.json';

import Header from '../src/components/Header';
import Menu from "../src/components/Menu";
import Timeline from '../src/components/Timeline';

function HomePage() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>
        <Menu />
        <main>
          <Header />
          <Timeline playlists={config.playlists} />
        </main>
      </div>
    </>
  );
}

export default HomePage;

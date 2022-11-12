import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => { console.log("Config me first!") },
  toggleMode: () => { console.log("Config me first!") }
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if(mode === "dark") setMode("light");
    if(mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

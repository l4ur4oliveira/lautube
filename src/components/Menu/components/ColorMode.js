import { createContext } from 'react';

export const ColorModeContext = createContext({
  mode: "dark"
});

export default function ColorModeProvider(props) {
  return (
    // Value não está sendo setado
    <ColorModeContext.Provider value={{ mode: "light" }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

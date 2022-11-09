import { createContext } from 'react';

export const ColorModeContext = createContext({
  mode: ""
});

export default function ColorModeProvider(props) {
  return (
    // Value não está sendo setado
    <ColorModeContext.Provider value={{ mode: props.initialMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

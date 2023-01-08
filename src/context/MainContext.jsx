import { createContext } from "react";

export const MainContext = createContext();

export function MainContextProvider(props) {
  return (
    <MainContext.Provider>
      <h1>Main Context</h1>
      {props.children}
    </MainContext.Provider>
  );
}

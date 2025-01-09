import { createContext, useReducer, ReactNode, FC, Dispatch } from "react";
import { gameReducer, initialState, GameAction, GameState } from "./reducer";

export type GameContextType = {
  state: GameState;
  dispatch: Dispatch<GameAction>;
};

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

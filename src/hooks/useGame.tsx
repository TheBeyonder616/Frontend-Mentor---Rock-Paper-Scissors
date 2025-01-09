import { useContext } from "react";
import { GameContextType, GameContext } from "../component/context";
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

import {
  LOCAL_STORAGE_KEY,
  ScoreType,
  ValueType,
  WinnerType,
} from "../config/config";
import { GameMethods } from "./method";

export const ACTION = {
  SET_VALUE: "SET_VALUE",
  SET_HOME_VALUE: "SET_HOME_VALUE",
  SET_WINNER: "SET_WINNER",
  UPDATE_SCORE: "UPDATE_SCORE",
  RESET: "RESET",
  RESTART: "RESTART",
} as const;

export type GameState = {
  value: ValueType | undefined;
  homeValue: ValueType | null;
  winner: WinnerType | undefined;
  score: ScoreType;
};

export type GameAction =
  | { type: "SET_VALUE"; value: ValueType }
  | { type: "SET_HOME_VALUE"; homeValue: ValueType }
  | { type: "SET_WINNER"; winner: WinnerType }
  | { type: "UPDATE_SCORE"; player: number; home: number }
  | { type: "RESET" }
  | { type: "RESTART" };

export const initialState: GameState = {
  value: undefined,
  homeValue: null,
  winner: undefined,
  score: JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || '{"home": 0, "player": 0}'
  ),
} as const;

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case ACTION.SET_VALUE:
      return { ...state, value: action.value };

    case ACTION.SET_HOME_VALUE: {
      const { winner, scoreUpdate } = GameMethods.determineWinner(
        state.value!,
        action.homeValue
      );
      return {
        ...state,
        homeValue: action.homeValue,
        winner,
        score: {
          player: state.score.player + scoreUpdate.player,
          home: state.score.home + scoreUpdate.home,
        },
      };
    }

    case ACTION.SET_WINNER:
      return { ...state, winner: action.winner };

    case ACTION.UPDATE_SCORE:
      return {
        ...state,
        score: {
          player: state.score.player + action.player,
          home: state.score.home + action.home,
        },
      };

    case ACTION.RESET:
      return {
        ...state,
        value: undefined,
        homeValue: null,
        winner: undefined,
      };

    case ACTION.RESTART:
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return {
        value: undefined,
        homeValue: null,
        winner: undefined,
        score: { home: 0, player: 0 },
      };
    default:
      return state;
  }
};

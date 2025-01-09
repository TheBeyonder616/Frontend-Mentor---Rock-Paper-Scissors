export const ICONS = {
  IMAGE_RULES_BONUS: "icon-image-rules-bonus",
  LOGO_BONUS: "icon-logo-bonus",
  BG_PENTAGON: "icon-bg-pentagon",
  CLOSE: "icon-icon-close",
  LIZARD: "icon-icon-lizard",
  PAPER: "icon-icon-paper",
  SCISSORS: "icon-icon-scissors",
  SPOCK: "icon-icon-spock",
  ROCK: "icon-icon-rock",
} as const;

//prettier-ignore
export type IconKeys = typeof ICONS[keyof typeof ICONS]

export type PlayContent = Pick<
  typeof ICONS,
  "LIZARD" | "SPOCK" | "ROCK" | "PAPER" | "SCISSORS"
>;

export const playContent: PlayContent = {
  LIZARD: ICONS.LIZARD,
  SPOCK: ICONS.SPOCK,
  ROCK: ICONS.ROCK,
  PAPER: ICONS.PAPER,
  SCISSORS: ICONS.SCISSORS,
};

export const HOME_TIMER: number = 1000;
export const LOCAL_STORAGE_TIMEOUT = 500;
export const LOCAL_STORAGE_KEY = "rock-paper-scissors";

export type ValueType = "lizard" | "paper" | "scissors" | "rock" | "spock";

export const OUTCOME: Record<ValueType, ValueType[]> = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
} as const;

export type WinnerType = "you win" | "you lose" | "draw" | undefined;

export type ScoreType = {
  home: number;
  player: number;
};

export const DELAY_HOME_VALUE = 1000;

export const FRONT_END_MENTOR_URL =
  "https://www.frontendmentor.io?ref=challenge";
export const MY_URL_Link = "https://github.com/TheBeyonder616";

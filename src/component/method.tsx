import {
  ScoreType,
  LOCAL_STORAGE_KEY,
  ValueType,
  WinnerType,
  OUTCOME,
} from "../config/config";

export class GameMethods {
  private static TIMEOUT: number | null = null;
  private static TIMER_HIDE: number = 500;

  public static getLocalStorageScore(): ScoreType {
    try {
      const item = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!item) return { home: 0, player: 0 };
      return JSON.parse(item) as ScoreType;
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return { home: 0, player: 0 };
    }
  }

  public static getRandomValue(): ValueType {
    //prettier-ignore
    const values: ValueType[] = ["lizard", "paper", "scissors", "rock", "spock"];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  public static determineWinner(
    playerChoice: ValueType,
    computerChoice: ValueType
  ): { winner: WinnerType; scoreUpdate: { player: number; home: number } } {
    if (playerChoice === computerChoice) {
      return { winner: "draw", scoreUpdate: { player: 0, home: 0 } };
    }

    const isPlayerWinner = OUTCOME[playerChoice].includes(computerChoice);
    return {
      winner: isPlayerWinner ? "you win" : "you lose",
      scoreUpdate: {
        player: isPlayerWinner ? 1 : 0,
        home: isPlayerWinner ? 0 : 1,
      },
    };
  }

  public static showElement(element: HTMLElement): void {
    if (this.TIMEOUT) clearTimeout(this.TIMEOUT);
    element.classList.remove("hide");

    this.TIMEOUT = setTimeout(() => {
      element.classList.add("show");
    }, 0);
  }

  public static hideElement(element: HTMLElement): void {
    if (this.TIMEOUT) clearTimeout(this.TIMEOUT);
    element.classList.add("hide");
    this.TIMEOUT = setTimeout(() => {
      element.classList.remove("show");
    }, this.TIMER_HIDE);
  }
}

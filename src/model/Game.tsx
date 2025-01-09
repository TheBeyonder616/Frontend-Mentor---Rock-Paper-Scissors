import { useMemo, useEffect, memo } from "react";
import Svg from "../component/Svg";
import Play from "./Play";
import Picked from "./Picked";
import { ACTION } from "../component/reducer";
import {
  LOCAL_STORAGE_TIMEOUT,
  ICONS,
  LOCAL_STORAGE_KEY,
  DELAY_HOME_VALUE,
} from "../config/config";
import { useGame } from "../hooks/useGame";
import { GameMethods } from "../component/method";

const Game = () => {
  const { state, dispatch } = useGame();
  const { value, score } = state;
  const randomHomeValue = useMemo(() => GameMethods.getRandomValue(), []);

  useEffect(() => {
    if (value) {
      let time: number = setTimeout(() => {
        dispatch({ type: ACTION.SET_HOME_VALUE, homeValue: randomHomeValue });
      }, DELAY_HOME_VALUE);
      return () => clearTimeout(time);
    }
  }, [value, randomHomeValue, dispatch]);

  useEffect(() => {
    let timeoutId: number = setTimeout(() => {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(score));
      } catch (error) {
        console.error("Failed to save score to localStorage", error);
      }
    }, LOCAL_STORAGE_TIMEOUT);
    return () => clearTimeout(timeoutId);
  }, [score]);

  const renderPickSection = (
    <section className="game__pick" data-display="pick">
      <Svg id={ICONS.BG_PENTAGON} className="pentagon" alt="Icon Pentagon" />
      <Play />
    </section>
  );

  const renderPickedSection = (
    <>
      <section className="game__picked" data-display="picked">
        <Picked />
      </section>
    </>
  );

  return (
    <main className={`game ${value ? "game--win" : ""}`}>
      {!value ? renderPickSection : renderPickedSection}
    </main>
  );
};

export default memo(Game);

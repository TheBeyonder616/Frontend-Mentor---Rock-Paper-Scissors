import Svg from "../component/Svg";
import { MouseEvent, KeyboardEvent, useCallback, useMemo, memo } from "react";
import { playContent } from "../config/config";
import { useGame } from "../hooks/useGame";
import { ACTION } from "../component/reducer";
import { ValueType } from "../config/config";

const Play = () => {
  const { dispatch } = useGame();

  const handlePick = useCallback(
    (e: MouseEvent | KeyboardEvent) => {
      const target = (e.target as HTMLElement).closest(".game__play");
      if (!target) {
        console.warn("Element not found");
        return;
      }
      const key = target.getAttribute("data-key")?.toLowerCase();
      if (!key) {
        console.warn("Key not found");
        return;
      }

      dispatch({ type: ACTION.SET_VALUE, value: key as ValueType });
    },
    [dispatch]
  );

  const handleKeyboardPick = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Enter" || !e.target) return;
      handlePick(e);
    },
    [handlePick]
  );

  const playElements = useMemo(
    () =>
      Object.entries(playContent).map(([key, icon]) => (
        <div
          key={key}
          className={`game__play play--${key.toLowerCase()}`}
          onClick={handlePick}
          onKeyDown={handleKeyboardPick}
          data-key={key}
          role="button"
          aria-label={`Select ${key.toLowerCase()}`}
          title={`Select ${key.toLocaleLowerCase()}`}
          tabIndex={0}
        >
          <div className="game__play-content">
            <Svg
              id={icon}
              className={`play--container ${key.toLowerCase()}`}
              alt={`An Icon of ${key}`}
            />
          </div>
        </div>
      )),
    [handlePick, handleKeyboardPick]
  );

  return <>{playElements}</>;
};

export default memo(Play);

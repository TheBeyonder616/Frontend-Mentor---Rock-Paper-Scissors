import Value from "./Value";
import { WinnerType } from "../config/config";
import { useGame } from "../hooks/useGame";
import { useCallback } from "react";
import Replay from "./Replay";

type PickWinner = ["game--winner", "winner"] | ["", ""];

const Picked = () => {
  const { state } = useGame();

  const pickWinner = useCallback(
    (value: WinnerType, home: boolean = false): PickWinner => {
      switch (true) {
        case value === "draw":
          return ["game--winner", "winner"];
        case value === "you lose":
          return home ? ["game--winner", "winner"] : ["", ""];
        case value === "you win":
          return home ? ["", ""] : ["game--winner", "winner"];
        default:
          return ["", ""];
      }
    },
    []
  );

  return (
    <>
      <div
        className={`game__picked-container ${
          state.winner ? "winner--picked" : ""
        }`}
      >
        {/*=================Player============*/}
        <section className="picked picked--player">
          <h2 className="heading-secondary heading--picked heading--desktop">
            you picked
          </h2>
          <div className={`picked__value ${pickWinner(state.winner)[0]}`}>
            <div className={pickWinner(state.winner)[1]}>
              <Value value={state.value} />
            </div>
          </div>
          <h2 className="heading-secondary heading--picked heading--mobile">
            you picked
          </h2>
        </section>

        <Replay desktop={true} />
        {/*=================Home============  */}
        <section className="picked picked--home">
          <h2 className="heading-secondary heading--picked heading--desktop">
            the house picked
          </h2>
          <div className={`picked__value ${pickWinner(state.winner, true)[0]}`}>
            {state.homeValue && (
              <>
                <div className={pickWinner(state.winner, true)[1]}>
                  <Value value={state.homeValue} />
                </div>
              </>
            )}
          </div>
          <h2 className="heading-secondary heading--picked heading--mobile">
            the house picked
          </h2>
        </section>
      </div>

      <div className="replay-mobile">
        <Replay />
      </div>
    </>
  );
};

export default Picked;

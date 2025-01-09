import { useGame } from "../hooks/useGame";
import { ACTION } from "../component/reducer";

type ReplayType = {
  desktop?: boolean;
};
const Replay = ({ desktop }: ReplayType) => {
  const { state, dispatch } = useGame();

  const handleReplay = () => {
    dispatch({ type: ACTION.RESET });
  };

  const handleRestart = () => {
    dispatch({ type: ACTION.RESTART });
  };

  return (
    <>
      {state.winner && (
        <div className={`replay ${desktop ? "replay--desktop" : ""}`}>
          <h2 className="heading-secondary heading--winner"> {state.winner}</h2>
          <button
            className="btn btn--play-again"
            onClick={handleReplay}
            aria-label="Play again"
          >
            play again
          </button>

          <button
            className="btn btn--play-again"
            onClick={handleRestart}
            aria-label="Restart"
            title="Restart game"
          >
            Restart
          </button>
        </div>
      )}
    </>
  );
};

export default Replay;

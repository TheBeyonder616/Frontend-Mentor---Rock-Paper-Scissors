import Svg from "../component/Svg";
import { ICONS } from "../config/config";
import { useGame } from "../hooks/useGame";

const Score = () => {
  const { state } = useGame();

  return (
    <header className="heading">
      <div className="heading__logo">
        <Svg id={ICONS.LOGO_BONUS} className={"logo"} alt={"ICON LOGO"} />
      </div>

      <section className="score-wrapper">
        <div className="heading__score">
          <h2 className="heading-secondary heading--score">
            score <span className="span">home</span>
          </h2>
          <h3 className="heading-third">{state.score.home}</h3>
        </div>

        <div className="heading__score">
          <h2 className="heading-secondary heading--score">
            score <span className="span"> player</span>
          </h2>
          <h3 className="heading-third">{state.score.player}</h3>
        </div>
      </section>
    </header>
  );
};

export default Score;

import React, { useMemo } from "react";
import Svg from "../component/Svg";
import { ICONS, ValueType } from "../config/config";

type ValueProp = {
  value: ValueType | undefined;
};

const Value = React.memo(({ value }: ValueProp) => {
  const [icon, cssClass] = useMemo(() => {
    switch (value) {
      case "lizard":
        return [ICONS.LIZARD, "lizard"];
      case "paper":
        return [ICONS.PAPER, "paper"];
      case "scissors":
        return [ICONS.SCISSORS, "scissors"];
      case "rock":
        return [ICONS.ROCK, "rock"];
      case "spock":
        return [ICONS.SPOCK, "spock"];
      case undefined:
        return [ICONS.BG_PENTAGON, ""];
      default:
        throw new Error("Invalid value");
    }
  }, [value]);

  if (!value) return null;

  return (
    <section
      className={`game__play play--${cssClass} play--picked`}
      aria-label={value}
      title={value}
    >
      <div className="game__play-content">
        <Svg
          id={icon}
          className={`play--container ${cssClass}`}
          alt={`An Icon of ${cssClass}`}
        />
      </div>
    </section>
  );
});

export default Value;

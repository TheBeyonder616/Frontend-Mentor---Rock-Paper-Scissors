import { useRef, MouseEvent, useEffect } from "react";
import Svg from "../component/Svg";
import { ICONS } from "../config/config";
import { GameMethods } from "../component/method";

const Rules = () => {
  const rulesRef = useRef<HTMLDivElement | null>(null);

  const showRules = (e: MouseEvent<HTMLElement>): void => {
    if (!rulesRef.current || !e.target) return;
    GameMethods.showElement(rulesRef.current);
  };

  const hideRules = (e: MouseEvent<HTMLElement> | KeyboardEvent): void => {
    if (!rulesRef.current) return;

    if (e.type === "click") {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".rules__wrapper") ||
        target.closest(".btn.btn--close")
      )
        GameMethods.hideElement(rulesRef.current);
    }

    if (e.type === "keydown") {
      const KeyboardEvent = e as KeyboardEvent;
      if (KeyboardEvent.key === "Escape")
        rulesRef.current.classList.remove("show");
      rulesRef.current.classList.add("hide");
    }
  };

  useEffect(() => {
    const handleKeyHideRules = (e: KeyboardEvent) => {
      if (!rulesRef.current?.classList.contains("show") || e.key !== "Escape")
        return;
      hideRules(e);
    };

    document.addEventListener("keydown", handleKeyHideRules);
    return () => document.removeEventListener("keydown", handleKeyHideRules);
  }, []);

  return (
    <article className="footer__rules">
      <section className="rules" ref={rulesRef} onClick={hideRules}>
        <div className="rules__wrapper">
          {/*!=============== Rules Head=============  */}
          <div className="rules__heading">
            <h2 className="heading-secondary heading--rules">rules</h2>
            <button
              className="btn btn--close"
              onClick={hideRules}
              aria-label="Close Rules"
              title="Close Rules"
            >
              <Svg
                id={ICONS.CLOSE}
                className={"close"}
                alt={"Icon close rules"}
              />
            </button>
          </div>
          {/*!=============== Rules Body=============  */}
          <div className="rules__body">
            <Svg
              id={ICONS.IMAGE_RULES_BONUS}
              className={"rules"}
              alt={"The Bonus Rules Icon"}
            />
          </div>
        </div>
      </section>
      {/*!====================[Display Rules]==================*/}

      <div className="rules__container">
        <button className="btn btn--rules" onClick={showRules}>
          Rules
        </button>
      </div>
    </article>
  );
};

export default Rules;

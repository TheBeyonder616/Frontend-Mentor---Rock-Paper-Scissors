import Score from "./model/Score";
import Game from "./model/Game";
import Rules from "./model/Rules";

function App() {
  const content = (
    <>
      <Score />
      <Game />
      <Rules />
    </>
  );
  return content;
}

export default App;

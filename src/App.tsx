import Score from "./model/Score";
import Game from "./model/Game";
import Footer from "./model/Footer";

function App() {
  const content = (
    <>
      <Score />
      <Game />
      <Footer />
    </>
  );
  return content;
}

export default App;

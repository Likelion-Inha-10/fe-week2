import ColorCard from "./component/ColorCard";
import TextBox from "./component/Text";
import MediaCard from "./component/MediaCard";
import GlobalStyle from "./component/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <MediaCard btncolor="blue" src="img/hi.png" title="Heading" internal="This is a short description about the card."> </MediaCard>
      <MediaCard btncolor="pink" src="img/1.png" title="I'm pink" internal="hi"> </MediaCard>
      <MediaCard btncolor="red" src="img/2.png" title="hello" internal="hello"> </MediaCard>
      <MediaCard btncolor="purple" src="img/3.png" title="hi" internal="wow"> </MediaCard>
      <MediaCard btncolor="green" src="img/4.png" title="wow" internal="kuby"> </MediaCard>
      <img src="img/1.png" />
      <img src="img/2.png" />
      <img src="img/3.png" />
      <img src="img/4.png" />
    </>
  );
}

export default App;

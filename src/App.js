import ColorCard from "./component/ColorCard";
import MediaCard from "./component/MediaCard";
import Textbox from "./component/Text";
import Margin from "./component/Margin";

function App() {
  return (
    <>
      <Textbox color="red" fontSize="20" fontWeight="400" letterSpacing="4.4">
        SHIT. This is MEI.
      </Textbox>
      <Margin height="20" />
      <ColorCard
        color="black"
        backgroundColor="black"
        fontSize="48"
        fontWeight="400"
      >
        Black
      </ColorCard>
      <Margin />
      <ColorCard
        color="#1E82CD"
        backgroundColor="#1E82CD"
        fontSize="48"
        fontWeight="400"
      >
        #1E82CD
      </ColorCard>
      <Margin />
      <ColorCard
        color="#FFAAFF"
        backgroundColor="#FFAAFF"
        fontSize="48"
        fontWeight="400"
      >
        #FFAAFF
      </ColorCard>
      <Margin />
      <ColorCard
        color="red"
        backgroundColor="red"
        fontSize="48"
        fontWeight="400"
      >
        RED
      </ColorCard>
      <Margin height="30" />
      <MediaCard></MediaCard>
    </>
  );
}

export default App;

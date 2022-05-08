import ColorCard from "./component/ColorCard";
import MediaCard from "./component/MediaCard";
import TextBox from "./component/Text";


function App() {
  return (
    <>
      <ColorCard  backgroundColor="Black"></ColorCard>
      <ColorCard  backgroundColor="#1E82CD"></ColorCard>
      <ColorCard  backgroundColor="#FFAAFF"></ColorCard>
      <MediaCard  backgroundImage="main_picture.jpg"></MediaCard>
      <MediaCard  backgroundImage="picture1.jpg"></MediaCard>
      <MediaCard  backgroundImage="picture2.jpg"></MediaCard>
      <MediaCard  backgroundImage="picture3.jpg"></MediaCard>
      <MediaCard  backgroundImage="picture4.jpg"></MediaCard>
    </>
    );
  };


export default App;

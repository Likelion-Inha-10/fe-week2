import ColorCard from "./component/ColorCard";
import MediaCard from "./component/MediaCard";
import TextBox from "./component/Text";


function App() {
  return (
    <>
      <ColorCard  backgroundColor="Black"></ColorCard>
      <ColorCard  backgroundColor="#1E82CD"></ColorCard>
      <ColorCard  backgroundColor="#FFAAFF"></ColorCard>
      <MediaCard  backgroundImage="main_picture.jpg" subtext="In InfinityWar">Ironmanpic</MediaCard>
      <MediaCard  backgroundImage="picture1.jpg" subtext ="Take me to the church">Cathedral</MediaCard>
      <MediaCard  backgroundImage="picture2.jpg" subtext="In CivilWar">Ironmanpic2</MediaCard>
      <MediaCard  backgroundImage="picture3.jpg" subtext="In Ironman3">Ironmanpic3</MediaCard>
      <MediaCard  backgroundImage="picture4.jpg" subtext="In The Greatest Showman">The Greatest Showman</MediaCard>
    </>
    );
  };


export default App;

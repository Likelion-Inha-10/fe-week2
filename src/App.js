// import ColorCard from "./component/ColorCard";
// import TextBox from "./component/Text";
import MediaCard from "./component/MediaCard";

function App() {
  return (
    <>
      {/* <TextBox color="red" fontweight="400" fontsize="30px">
        박서정
      </TextBox>
      <TextBox color="black" fontweight="300" fontsize="16px">
        박서정
      </TextBox>
      <TextBox color="yellow" fontweight="500" fontsize="25px">
        박서정
      </TextBox>
      <TextBox color="pink" fontweight="200" fontsize="50px">
        박서정
      </TextBox> */}
      {/* 
      <ColorCard color="pink" />
      <ColorCard color="purple" />
      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="yellow" /> */}
      <MediaCard
        backgroundimage="https://cdn.pixabay.com/photo/2014/09/26/04/59/holiday-complex-461633_960_720.jpg"
        title="Heading"
        content="This is a short description about the card."
        backgroundColor="#b20a2c"
      ></MediaCard>
      <MediaCard
        backgroundimage="https://cdn.pixabay.com/photo/2014/10/10/10/56/boat-483224_960_720.jpg"
        title="First"
        content="This photo makes me go to the sea."
        backgroundColor="#E100FF;"
      ></MediaCard>
      <MediaCard
        backgroundimage="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg"
        title="Dr.Strange 2"
        content="I still don't watch...is it real????? please don't give me spoilers."
        backgroundColor="#86A8E7;"
      ></MediaCard>
      <MediaCard
        backgroundimage="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg"
        title="Vacation"
        content="Please give me a summer vacation...."
        backgroundColor="#FF512F;"
      ></MediaCard>
      <MediaCard
        backgroundimage="https://cdn.pixabay.com/photo/2021/11/16/12/19/tulips-6800875_960_720.jpg"
        title="finish"
        content="React can be confusing to beginners, but you can dooooo it :)"
        backgroundColor="#99f2c8;"
      ></MediaCard>
    </>
  );
}

export default App;

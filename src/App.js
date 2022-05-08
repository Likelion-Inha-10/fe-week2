import ColorCard from "./component/ColorCard";
import MediaCard from "./component/MediaCard";
import Name from "./component/Name";
import TextBox from "./component/Text";
import Button from "./component/Button";

function App() {
  return (
    <>
      <TextBox color="#08DA7C">안녕하세요</TextBox>

      <TextBox color="grey" fontWeight="300" fontSize="20">
        안녕하세요
      </TextBox>

      <ColorCard color="black" backgroundColor="black">
        black
      </ColorCard>
      <ColorCard color=" #1E82CD" backgroundColor="#1E82CD">
        #1E82CD
      </ColorCard>

      <ColorCard color="#FFAAFF" backgroundColor="#FFAAFF">
        #FFAAFF
      </ColorCard>
      <ColorCard color="#08DA7C" backgroundColor="#08DA7C">
        #08DA7C
      </ColorCard>
      <ColorCard color="#FFFC79" backgroundColor="#FFFC79">
        #FFFC79
      </ColorCard>

      <MediaCard picture="img/4.PNG">
        <TextBox>커피프렌즈</TextBox>

        <TextBox fontSize="20" fontWeight="1px">
          COFFEE FRIENDS
        </TextBox>
        <Button color="white" fontSize="100" fontWeight="Bold">
          Action
        </Button>
      </MediaCard>

      <MediaCard picture="img/3.PNG">
        <TextBox>어버이날</TextBox>

        <TextBox fontSize="20" fontWeight="1px">
          2022년 5월 8일
        </TextBox>
        <Button color="white" fontSize="100" fontWeight="Bold">
          Action
        </Button>
      </MediaCard>

      <MediaCard picture="img/5.PNG">
        <TextBox>beverage</TextBox>

        <TextBox fontSize="20" fontWeight="1px">
          laws governing the sale of alcoholic beverages
        </TextBox>
        <Button color="white" fontSize="100" fontWeight="Bold">
          Action
        </Button>
      </MediaCard>

      <MediaCard picture="img/6.PNG">
        <TextBox>SAUL BASS</TextBox>

        <TextBox fontSize="20" fontWeight="1px">
          an American graphic designer and Oscar-winning filmmaker
        </TextBox>
        <Button color="white" fontSize="100" fontWeight="Bold">
          Action
        </Button>
      </MediaCard>

      <MediaCard picture="img/11.PNG">
        <TextBox>circle of life</TextBox>

        <TextBox fontSize="20" fontWeight="1px">
          It's the circle of life
        </TextBox>
        <Button color="white" fontSize="100" fontWeight="Bold">
          Action
        </Button>
      </MediaCard>
    </>
  );
}

export default App;

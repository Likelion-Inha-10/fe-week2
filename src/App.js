import ColorCard from "./component/ColorCard";
import TextBox from "./component/Text";
import MediaCard from "./component/MediaCard";

function App() {
  return (
    <>
      <TextBox color="blue" fontSize="50px" fontWeight="bold">
        첫번째 텍스트 박스
      </TextBox>
      <TextBox color="red" fontSize="30px" fontWeight="lighter">
        두번째 텍스트 박스
      </TextBox>

      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="#FFAAFF" />
      <ColorCard color="#1CE2B4" />
      <ColorCard color="#6B1CE2" />

      <MediaCard
        bImage="https://t4.ftcdn.net/jpg/01/09/88/85/240_F_109888581_d2vqgQnNiNkGRfZPFpIYlS5FIYNBD3ch.jpg"
        title="Heading"
        text="This is a short description about the card."
        backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
      ></MediaCard>

      <MediaCard
        bImage="https://i.pinimg.com/564x/97/bb/0f/97bb0f9dcfb93f4f2f1b1942d5fdbc8a.jpg"
        title="White Puppy"
        text="This is a so much cute puppy."
        backgroundColor="linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
        background-blend-mode: normal, lighten, soft-light;"
      ></MediaCard>

      <MediaCard
        bImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
        title="Sweet Little Kitty"
        text="This is a so much cute cat's foot."
        backgroundColor="linear-gradient(to top, #c79081 0%, #dfa579 100%);"
      ></MediaCard>

      <MediaCard
        bImage="https://i.pinimg.com/736x/3a/24/cf/3a24cf54a17e32ba69455e1034b407d2.jpg"
        title="Sky"
        text="하늘 사진 좋-아."
        backgroundColor="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
      ></MediaCard>

      <MediaCard
        bImage="https://i.pinimg.com/originals/38/02/aa/3802aae574b1a647b7f3ea26b603ca80.jpg"
        title="마지막!"
        text="마참내 마지막 미디어카드네요!"
        backgroundColor="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);"
      />
    </>
  );
}

export default App;

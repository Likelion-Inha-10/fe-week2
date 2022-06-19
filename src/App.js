import TextBox from "./component/Text";
import ColorCard from "./component/ColorCard";
import MediaCard from "./component/MediaCard";
import Display from "./component/Display";

function App() {
  return (
    <>
      <TextBox color="#6666FF" fontWeight="400" fontSize="20px">
        "1번 문제: 1번 문제 끝-"
      </TextBox>
      <br />

      <TextBox color="gray" fontWeight="bold" fontSize="25px">
        "2번 문제: 색상 카드 만들기"
      </TextBox>
      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="#ffd700" />
      <ColorCard color="#FF66FF" />
      <ColorCard color="#40e0d0" />
      <br />

      <TextBox color="#FF9900" fontWeight="600" fontSize="22px">
        "3번 문제: 미디어 카드 만들기"
      </TextBox>
      <Display>
        <MediaCard
          image="image1.jpg"
          link="https://www.pinterest.co.kr/pin/66780006966617762/"
          title="Heading"
          linkStyle="_blank"
          backgroundColor="linear-gradient(90deg, #0080FF, #63b1ff)"
          color="white"
        >
          This is the source of this picture, and it is pinterest.
        </MediaCard>

        <MediaCard
          image="github.jpg"
          link="https://github.com/wlsdk9803"
          linkStyle="_blank"
          title="Github"
          backgroundColor="linear-gradient(90deg, #b0c4de, #CEE3F6)"
          color="black"
        >
          Hello. This is my github.
        </MediaCard>

        <MediaCard
          image="instagram.jpg"
          link="https://www.instagram.com/jin_n__a/"
          linkStyle="_blank"
          title="Instagram"
          backgroundColor="linear-gradient(90deg, #FA5882, #ff87a7)"
          color="white"
        >
          Hello. This is my sns, instagram.
        </MediaCard>

        <MediaCard
          image="timeLapse.jpg"
          link="https://www.youtube.com/watch?v=qDW-sVVtTGk"
          linkStyle="_blank"
          title="Time lapse"
          backgroundColor="linear-gradient(90deg, #F79F81, #f5b49f)"
          color="white"
        >
          This is my favorite song, time lapse. Would you like to hear?
        </MediaCard>

        <MediaCard
          image="dreaming.jpg"
          link="https://www.youtube.com/watch?v=VpzvseMXxko"
          linkStyle="_blank"
          title="Dreaming"
          backgroundColor="linear-gradient(90deg, #48d1cc, #98dad8)"
          color="white"
        >
          Another song?
        </MediaCard>

        <MediaCard
          image="inha.jpg"
          link="https://learn.inha.ac.kr/login.php"
          linkStyle="_self"
          title="Goodbye"
          backgroundColor="linear-gradient(90deg, #BE81F7, #d7b5f8)"
          color="white"
        >
          It's time to study...
          <br />
          goodbye👋
        </MediaCard>
      </Display>
    </>
  );
}
export default App;

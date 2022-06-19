# 멋쟁이 사자처럼 10기 FE 2주차 과제 🦁

# 실습 1번문제

## 📌Text 컴포넌트를 props를 사용하여 재사용 할 수 있는 코드로 만들기.

## < 제한 조건 >

- text-weight, text-size를 props를 통해 입력 받아서 수정

ex) <br>
<img width="538" alt="image" src="https://user-images.githubusercontent.com/77886826/166138795-c60b1f82-9cd7-47fb-835a-04c6e0a4b02b.png"><br>
현재 상태입니다.<br>
<img width="663" alt="image" src="https://user-images.githubusercontent.com/77886826/166138831-708166b3-5251-4956-ba19-f617085ce97e.png"><br>
다음과 같이 입력받을 때 font-weight, font-size 등이 수정되도록 바꾸어 주세요

## 🦁 < 실습 1번 해결방법 >

```javascript
const StyledText = styled.div`
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fWeight};
  padding-left: 10px;
  line-height: 200%;
`;

const TextBox = (props) => {
  return (
    <StyledText
      fcolor={props.color}
      fSize={props.fontSize}
      fWeight={props.fontWeight}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
```

1. 우선 text component를 생성해줍니다. component의 이름은 첫글자는 대문자로 설정해주어야 합니다.

2. styled component를 통해 css style을 적용해줍니다.
   이때 styled component를 사용하려면 다음과 같이 styled를 import 해주어야 합니다.

```javascript
import styled from "styled-components";
```

3. 재사용성을 위해 사용할 때마다 변경해주고자하는 변수들 (ex. 폰트 크기, 색상 굵기 등)을 props로 정의하여 전달받은 값에 따라 변경할 수 있도록 합니다.

   ### (각 변수가 의미하는 값)

   - fcolor: 폰트 색상
   - fSize: 폰트 크기
   - fWeight: 폰트 굵기

4. styled-component를 react-component에서 return 해주고 App.js에서 다음과 같이 작성해주면 원하는 텍스트가 출력됩니다.

```javascript
function App() {
  return (
    <>
      <TextBox color="blue" fontSize="50px" fontWeight="bold">
        첫번째 텍스트 박스
      </TextBox>
      <TextBox color="red" fontSize="30px" fontWeight="lighter">
        두번째 텍스트 박스
      </TextBox>
    </>
  );
}
```

## < 결과 >

<br></br>

# 실습 2번문제

## 📌색상코드를 입력하면 색상과 text가 나오는 카드 만들기!

<br></br>

### (현재 상태)

<img width="366" alt="image" src="https://user-images.githubusercontent.com/77886826/166141001-f3964a02-e290-4a8f-bc6e-ce94962f1b36.png">
<br>

### (목표)

<img width="314" alt="image" src="https://user-images.githubusercontent.com/77886826/166140624-39232d3e-becb-45c9-826c-e42b3698f61e.png">
<img width="336" alt="image" src="https://user-images.githubusercontent.com/77886826/166140681-4c28bf65-0107-4aae-989e-be71e8e176b5.png">
<img width="335" alt="image" src="https://user-images.githubusercontent.com/77886826/166140718-0a4599f1-6b4b-4048-8239-685a207fc5f1.png">
<br></br>
<img width="396" alt="image" src="https://user-images.githubusercontent.com/77886826/166140696-26ece472-220b-450f-90cf-37ac346ee8de.png">
<br>
다음과 같이 입력 받습니다.
<br></br>

### 제한조건

- 빈칸을 채워 다음 사진과 같게 구현합니다!
- ColorCard들 사이 간격은 10px 로 합니다.
- ColorCard를 서로다른 props를 통해서 5개 이상 화면에 출력합니다.
  <br></br>

## 🦁 <실습 2번 해결방법>

```javascript
const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 300px;
  border: 0px;
  border-radius: 20px;
  font-size: 1rem;
  margin-top: 30px;
  background: ${(props) => (props.BColor ? props.BColor : "white")};
  color: ${(props) => (props.color ? props.color : "white")};
`;

const Button = (props) => {
  return (
    <StyledButton BColor={props.bColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
```

1. 1번과 마찬가지로 styled-component를 통해 css style을 적용해주고, 입력받은 값을 통해 변경해주고자 하는 변수들을 props로 정의해줍니다.

   ### (각 변수가 의미하는 값)

   - BColor: color card의 배경 색상
   - color: color card의 폰트 색상

2. App.js에서 다음과 같이 입력하면 ColorCard component에 작성한 return값에 의해 배경색이 다른 color card 5개가 return 됩니다.

```javascript
function App() {
  return (
    <>
      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="#FFAAFF" />
      <ColorCard color="#1CE2B4" />
      <ColorCard color="#6B1CE2" />
    </>
  );
}
```

### < 결과 >

<br></br>

# 실습 3번문제

## 📌 MediaCard 컴포넌트를 제작하기!

<br></br>

### (목표)

<img width="668" alt="image" src="https://user-images.githubusercontent.com/77886826/166138976-2db612eb-7b7a-4a7c-882a-3199b9d55ab7.png">

### 제한조건

- styled-component 를 이용합니다.
- 사진의 1번은 url을 props 로 입력받습니다.
- 사진의 2번은 미디어카드의 제목입니다. props를 통해 입력받습니다.
- 사진의 3번은 미디어 카드의 내용입니다. props를 통해 입력받습니다.
- 사진의 4번은 미디어 카드의 버튼의 색 입니다. props를 통해 입력받습니다.
- 서로 다른 props를 입력받은 미디어 카드를 최소 5개 이상 만듭니다.

## 🦁 < 실습 3번 해결방법 >

- 실습 3번의 경우 각 부분을 나눠서 설명하겠습니다.

1. 먼저 Media Card의 전체적인 구성입니다.

```javascript
const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageWrapper bImage={props.backgroundImage}></ImageWrapper>
      <TextBox fontSize="27px" fontWeight="bold">
        {props.title}
      </TextBox>
      <TextBox color="gray" fontSize="15px" fontWeight="lighter">
        {props.text}
      </TextBox>
      <Button bColor={props.backgroundColor}>Action</Button>
    </CardWrapper>
  );
};
```

#### (각 컴포넌트의 역할)

- CardWrapper: MediaCard를 전체적으로 감싸는 역할을 합니다.
- ImageWrapper: MediaCard의 1번에 해당하는 image를 담는 역할을 합니다.
- TextBox: MediaCard의 2, 3번에 해당하는 text를 담는 역할을 합니다.
- Button: MediaCard의 4번인 버튼의 역할을 합니다.  
  <br>

2. CardWrapper는 5개의 MediaCard 모두 공통으로 사용할 것이기 때문에 다음과 같이 props를 사용하지 않았습니다.

```javascript
const CardWrapper = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0px 0px 50px 1px rgb(0 0 0 / 20%);
  margin: 10px;
  font-size: 45px;
  background-color: white;
  padding: 10px;
  line-height: 120%;
`;
```

3. ImageWrapper에서 배경사진을 모두 변경할 것이기 때문에 background-image를 props를 통해 입력받도록 하였습니다.

```javascript
const ImageWrapper = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 20px;
  margin: auto;
  background-image: url(${(props) => (props.bImage ? props.bImage : "white")});
  background-size: 100% 100%;
`;
```

4. TextBox의 경우 1번에서 사용한 component를 import하여 재사용하였습니다. 따라서 MediaCard component에 해당 component를 다음과 같이 import 해주었습니다.

```javascript
import TextBox from "../Text";
```

5. Button 또한 따로 Button이라는 이름의 component를 생성해 만들어주었고, 해당 component를 MediaCard component에 import 해주었습니다.

```javascript
import Button from "../Button";
```

- Button component의 구성은 다음과 같습니다.

```javascript
const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 300px;
  border: 0px;
  border-radius: 20px;
  font-size: 1rem;
  margin-top: 30px;
  background: ${(props) => (props.BColor ? props.BColor : "white")};
  color: ${(props) => (props.color ? props.color : "white")};
`;

const Button = (props) => {
  return (
    <StyledButton BColor={props.bColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
```

## < 실습 3번 결과 >

<br></br>

# 제출시 필수 사항

- 실습 모든 문제를 포함합니다.
- 실습의 각 문제마다 스크린샷을 포함합니다.
- pr 의 제목은 | [내이름] 제목 |으로 합니다.
  ex) [이성인] 리엑트는 너무 재밋어!

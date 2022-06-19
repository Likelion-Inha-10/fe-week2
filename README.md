# 멋쟁이 사자처럼 10기 FE 2주차 과제 🦁

# 실습 1번문제
 여러분은 프론트 엔드 작업을 진행하시면서 글자에 효과를 어떻게 주셨나요? 매번 id, class를 통해서 받지 않으셨나요?
 Text 컴포넌트를 수정하며 다양한 순간에 재사용성이 뛰어난 코드를 만들어봅시다!

### 제한조건 
 - text-weight , text-size 를 props를 통해서 입력받아서 수정합니다. 
 
ex) <br>
<img width="538" alt="image" src="https://user-images.githubusercontent.com/77886826/166138795-c60b1f82-9cd7-47fb-835a-04c6e0a4b02b.png"><br>
현재 상태입니다.<br>
<img width="663" alt="image" src="https://user-images.githubusercontent.com/77886826/166138831-708166b3-5251-4956-ba19-f617085ce97e.png"><br>
다음과 같이 입력받을 때 font-weight, font-size 등이 수정되도록 바꾸어 주세요

### 해결 방안
 ```JavaScript
 import ColorCard from "./component/ColorCard";
 function App() {
  return (
   <>
    <ColorCard color="black" />
   </>
   );
  }
  
  export default App;
  ```
  
  ```JavaScript
  import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: 10px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const TextBox = (props) => {
  return <StyledText color={props.color}>{props.children}</StyledText>;
};

export default TextBox;
```


# 실습 2번문제 
 색상코드를 입력하면 색상과 text가 나오는 카드를 만들어봅시다! 제한된 조건 속에서 진행해 주시길 바랍니다!!
 <img width="366" alt="image" src="https://user-images.githubusercontent.com/77886826/166141001-f3964a02-e290-4a8f-bc6e-ce94962f1b36.png">
<br>현재 사진입니다! 아래와 같게 만들어주세요!
 ### 목표)
<img width="314" alt="image" src="https://user-images.githubusercontent.com/77886826/166140624-39232d3e-becb-45c9-826c-e42b3698f61e.png">
<img width="336" alt="image" src="https://user-images.githubusercontent.com/77886826/166140681-4c28bf65-0107-4aae-989e-be71e8e176b5.png">
<img width="335" alt="image" src="https://user-images.githubusercontent.com/77886826/166140718-0a4599f1-6b4b-4048-8239-685a207fc5f1.png">
<img width="396" alt="image" src="https://user-images.githubusercontent.com/77886826/166140696-26ece472-220b-450f-90cf-37ac346ee8de.png">
<br>
다음과 같이 입력 받습니다.

### 제한조건 

 - 빈칸을 채워 다음 사진과 같게 구현합니다!
 - ColorCard들 사이 간격은 10px 로 합니다.
 - ColorCard를 서로다른 props를 통해서 5개 이상 화면에 출력합니다.


# 실습 3번문제
 대망의 끝판왕 MediaCard 컴포넌트를 제작합니다!
 무슨 방법을 사용하셔도 괜찮습니다. 최선을 다해서 사진과 유사한 미디어 카드를 만들어주세요! FE는 필수소양은 디자인을 완벽하게 같게 구사하는 능력입니다.<br>
 <img width="668" alt="image" src="https://user-images.githubusercontent.com/77886826/166138976-2db612eb-7b7a-4a7c-882a-3199b9d55ab7.png">

요런 컴포넌트를 만들어 주세요! 

### 제한조건 
 - styled-component 를 이용합니다.
 - 사진의 1번은 url을 props 로 입력받습니다.
 - 사진의 2번은 미디어카드의 제목입니다. props를 통해 입력받습니다.
 - 사진의 3번은 미디어 카드의 내용입니다. props를 통해 입력받습니다.
 - 사진의 4번은 미디어 카드의 버튼의 색 입니다. props를 통해 입력받습니다.
 - 서로 다른 props를 입력받은 미디어 카드를 최소 5개 이상 만듭니다.

# 제출시 필수 사항
- 실습 모든 문제를 포함합니다.
- 실습의 각 문제마다 스크린샷을 포함합니다.
- pr 의 제목은 | [내이름] 제목 |으로 합니다.
ex) [이성인] 리엑트는 너무 재밋어!




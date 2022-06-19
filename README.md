# 멋쟁이 사자처럼 10기 FE 2주차 과제 🦁

반갑습니다 여러분!!☺️ 
2주차부터 약 4주간 함께 진행할 10기 운영진 이성인입니다 ☺️ 
react는 크게 어렵지 않습니다! 다같이 열심히 하시죠 ㅎㅎ

# 실습 진행방법 
기존의 실습들과 동일하게 진행됩니다
 - 이 레포를 fork 한다!
 - fork하여 이동한 자신의 레포에서 깃크라켄을 통해 클론을 받습니다.
 - 클론을 받은 파일을 vs 코드에서 엽니다!
 - vs 코드에서 터미널을 열어서 npm run start 를 입력하면 코드가 실행됩니다!
 
이번 실습은 3차에 걸쳐서 진행됩니다! 마지막까지 열심히 진행해보시죠 ㅎㅎ 

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

<img width="700" alt="image" src="public\image\과제1.jpg"><br>
예를 들어 폰트 사이즈를 props를 통해 받으려면<br>
font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;<br>
이렇게 적는다.<br>
마지막 : 오른쪽에 있는 값은 fontSize로 값을 받지 않았을 때 기본적으로 입력받는 값이다.<br>
props의 이름이라고 해야하나? 저거 받는 거 쨋든 저거 이름은 중간은 대문자로 해놓아야한다.<br>
css를 쓰기 위해서는 const 이름 = styled.div` 를 작성해야 하고 그 전에 import styled from ~ 를 작성해야한다.<br>
component 이름은 대문자로 시작해야한다.<br>
component 를 밖으로 꺼내려면 export default 이름 을 맨 마지막에 써야하며 쓰려는 곳에서 import 해야한다.<br>

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

<img width="700" alt="image" src="public\image\colorcard.jpg" >
<img width="700" alt="image" src="public\image\apps.jpg">
색깔만 props로 받아서 쓸 수 있도록 설계했다.<br>
background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "black")};<br>




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

<img width="700" alt="image" src="public\image\과제2Mediacard.jpg">
<img width="700" alt="image" src="public\image\apps.jpg">
props를 이용해서 이미지의 경로를 받도록 했다.<br>
background-image: url('image/${(props) => (props.backgroundImage ? props.backgroundImage : "green")}');<br>
url(경로)가 이미지 경로를 이용해서 background-image를 받는 방법이므로 url()까지 써놓고 경로만 받을 수 있도록 설계하였다.<br>



# 제출시 필수 사항
- 실습 모든 문제를 포함합니다.
- 실습의 각 문제마다 스크린샷을 포함합니다.
- pr 의 제목은 | [내이름] 제목 |으로 합니다.
ex) [이성인] 리엑트는 너무 재밋어!




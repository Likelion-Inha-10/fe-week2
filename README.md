# 멋쟁이 사자처럼 10기 FE 2주차 과제 🦁
react 실습 첫번째!
props를 통해 컴포넌트에게 값 전달하기!

## 문제 1번 <text를 props로 입력받기>
### 문제?
text-weight , text-size 를 props를 통해서 입력받기<br>

<img width="663" alt="image" src="https://user-images.githubusercontent.com/77886826/166138831-708166b3-5251-4956-ba19-f617085ce97e.png"><br>
위와 같이 text의 color, fontWeight, fontSize 등을 props로 넘겨 받을 수 있도록 코드를 작성한다.


### 나의 구현 방식?
![text_index](https://user-images.githubusercontent.com/103057334/174476406-86a847b2-570d-45d5-b435-85086dba214c.png)<br>
Styled Components를 사용해서 React 컴포넌트를 스타일링하였다.
- 먼저 'div'에 원하는 스타일을 적용한 후 StyledText 변수에 저장하였다.
- 이후 글자 색상, 폰트 두께, 폰트 크기를 props로 넘겨 받을 수 있게 하였다.
- 이때 줄 간격은 1.5로 지정하였고, 글자 색과 폰트 크기의 default 값은 각각 'black', '10px'로 지정하였다.
- 이 스타일을 TextBox 컴포넌트에 적용하였고...
 
![app](https://user-images.githubusercontent.com/103057334/174476455-fb3af228-3e73-4706-84f4-ba718efc10c1.png)<br>
- 이제TextBox 컴포넌트를 App.js 같은 다른 React 컴포넌트에서 사용할 수 있다!<br>
 
 그리고 이제 실행 시켜보면...?!
 <br>
 ![1번 결과](https://user-images.githubusercontent.com/103057334/174474799-1daaf755-6a96-4d35-908c-084d2738ab75.png)<br>
  App.js에서 넘겨준 것대로 실행 완료!<br>
<br>


## 문제 2번 <색상 카드 만들기>
### 문제?
 <img width="396" alt="image" src="https://user-images.githubusercontent.com/77886826/166140696-26ece472-220b-450f-90cf-37ac346ee8de.png">
 이렇게 색상코드를 입력하면 색상과 text가 나오는 카드 만들기!<br>
 
![빈 카드](https://user-images.githubusercontent.com/103057334/174475545-8b661f0f-7000-4bd2-8b5e-3f641269f373.png)

#### 이것이 현재 위치...목표는?
<img width="314" alt="image" src="https://user-images.githubusercontent.com/77886826/166140624-39232d3e-becb-45c9-826c-e42b3698f61e.png">
<img width="336" alt="image" src="https://user-images.githubusercontent.com/77886826/166140681-4c28bf65-0107-4aae-989e-be71e8e176b5.png">
<img width="335" alt="image" src="https://user-images.githubusercontent.com/77886826/166140718-0a4599f1-6b4b-4048-8239-685a207fc5f1.png">
<br>
이렇게 만들기!<br>
단! ColorCard들 사이 간격은 10px 로...!

### 나의 구현 방식?
![color](https://user-images.githubusercontent.com/103057334/174476532-e1916404-4265-476b-a5bc-d0ef2fc31824.png)
- 여기서 CardWrapper는 전체적인 카드의 틀이고, ColorWrapper는 only 색을 표현하는 카드의 윗부분입니다!
- 그리고 카드 아랫부분에 색상 코드를 표시하는 부분은 1번에서 사용했던 TextBox 재사용!<br>
  물론 우리는 색상만 넘겨줄 것이므로 'color'만 props로 넘겨주고 나머지는 그냥 원하는대로 설정...!
- 그리고 ColorWrapper의 배경 색을 props로 받고...나머지 부분은 디테일하게 원하는 스타일대로 설정!

![app 2](https://user-images.githubusercontent.com/103057334/174476524-35c12d75-d53e-4b66-86b3-c8b305ade500.png)<br>
- App.js에서 ColorCard 컴포넌트를 사용한다!<br>

 그리고 이제 실행 시켜보면...?!
 <br>
 ![색상 카드](https://user-images.githubusercontent.com/103057334/174476350-67a7d9a5-6cfd-4024-ba34-25102fd992af.png)
 <br>
  App.js에서 넘겨준 것대로 실행 완료!<br>
<br>

## 문제 3번 <미디어 카드 만들기>
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

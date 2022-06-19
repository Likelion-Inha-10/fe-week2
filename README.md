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
### 문제?
 <img width="668" alt="image" src="https://user-images.githubusercontent.com/77886826/166138976-2db612eb-7b7a-4a7c-882a-3199b9d55ab7.png">
<br>위와 같이 MediaCard 컴포넌트를 제작하기!<br>

#### 단...
 - 사진의 1번은 url을 props 로 입력받는다.
 - 미디어 카드의 제목인 2번 또한 props로 입력받는다.
 - 미디어 카드의 내용인 3번도 props를 통해 입력받는다.
 - 미디어 카드 버튼의 색인 4번 역시 props를 통해 입력받는다.

### 나의 구현 방식?
![mediacard](https://user-images.githubusercontent.com/103057334/174476735-cd0fef1b-2db5-4ba0-95e7-ffafa7b5bcd0.png)
- MediaCardWrapper는 미디어 카드의 배경이 되는 회색 부분
- MediaContentCard는 미디어 카드의 전체적인 틀! <br>
  둥근 테두리, box-shadow 등으로 디테일한 부분을 살려주었다!
- MediaContent는 3번 부분인 카드 내용 부분...! 내용마다 길이의 차이가 있을 수 있으므로 전체적인 사이즈를 설정해주었다.
- MediaImage는 props로 사진을 입력 받는 1번 부분. 둥근 테두리 처리를 해주었고 그 외 부분도 디테일하게 다듬었다.
<br>

![button](https://user-images.githubusercontent.com/103057334/174477743-5604aed9-b91c-43e7-82e3-aed387c1146e.png)
<br>
- 4번 부분의 버튼은 따로 컴포넌터를 만들어서 적용하였다.
- 버튼 색과 버튼의 글자 색을 props로 받을 수 있도록...!
  추가로 버튼 위에 마우스를 대면 마우스 모양이 바뀌도록 스타일을 적용하였다.
<br>

- 그리고 MediaCard에서 이 스타일들을 적용하여 미디어 카드 완성!<br>
  제목은 검정색으로 두껍게, 폰트 크기도 크게 적용하였고, 내용 부분은 글자 색은 회색으로 조금은 얇게, 폰트 크기도 작게 적용하였다.
- 그리고 추가적으로...<br>
  action 버튼을 누르면 연결된 링크로 이동할 수 있는 기능도 추가!
  
  ![media](https://user-images.githubusercontent.com/103057334/174477198-ef303254-f364-4ef0-ba91-a6aaeb710f97.png)
<br>

- App.js에서 MediaCard 컴포넌트를 사용한다!<br>

##### 이제 실행 시켜보면...?!

 
https://user-images.githubusercontent.com/103057334/174477488-2c6c3eea-4c10-484e-be4e-248ce6d2e7f2.mp4

<br>미디어 카드 만들기 성공!

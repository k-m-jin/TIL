### 브라우저 구성

1. 사용자 인터페이스 : 주소표시줄, 이전/다음 버튼, 홈버튼, 새로고침/정지 버튼 등 요청한 페이지를 보여주는 창 외에 사용자가 컨트롤 할 수 있는 부분
2. 브라우저 엔진: 사용자 인터페이스와 렌더링 엔진 사이에 동작 제어
3. 렌더링 엔진 : 요청한 URL를 브라우저 엔진에게 받아서 server 에게 요청
   server 로부터 URL에 해당하는 데이터를 받아서 파싱한 후 렌더링
4. 네트워킹 통신: 렌더링 엔진으로부터 HTTP 요청 등을 받아서 네트워크 처리 후 응답 전달
5. 자바스트립트 해석기 : JS 파싱
6. UI 백엔드 : Render Tree 를 browser에 그리는 역할
7. 자료 저장소 : 쿠키 등의 자료를 컴퓨터 하드디스크에 저장
   1. 자주 받아오는 정보를 저장해두는 캐싱 기법 → 낭비 방지

[browser rendering process](https://davidhwang.netlify.app/Developments/browser-rendering-process/)

### 브라우저 렌더링

사용자가 url 입력 → 브라우저 엔진이 자료 저장소에서 검색 → 자료저장소에 정보가 없다면 렌더링 엔진 통해서 통신에게 사용자가 입력한 값 전달 → 통신이 서버에서 응답받은 데이터를 렌더링 엔진에게 전달 → JS 해석기를 통해 DOM 트리 완성 → UI 백엔드에게 Render Tree 전달

1. html Parsing → Dom Tree 생성

   렌더링 엔진이 스타일 태그를 만난다면 html Parsing 일시정지 → Css Parsing → CSSOM tree 생성

   Script 태그를 만나면 Parsing 을 중지하고 JS 엔진에게 제어 권한을 넘김

   자바스크립트 엔진은 코드를 해석 → 추상 구문 Tree인 AST를 만들고 실행 → Html Parsing 작업완료

2. Dom Tree + CSSOM Tree = Render Tree : 화면에 표시되어야 할 모든 노드의 컨텐츠, 스타일 정보를 포함하는 트리( meta ,display: none; 제외)

   Render Tree 를 생성하는 과정 : Construction

3. Layout(Reflow): Render Tree 의 노드들을 뷰포트 내에 정확한 크기와 올바른 위치에 표시하는 작업 시작

   상대적 단위를 사용했을 경우 뷰포트에 맞춰 픽셀 단위로 변환

   수치변경, 노드 변경, 페이지 초기 렌더링

   너비나 높이 등이 바뀌면 여기부터

4. Paint(Repaint) : Reder Tree에 포함된 요소,텍스트,이미지들을 화면에 실제 픽셀로 그리는 과정

   UI Backend가 Render Tree의 노드들을 돌면서 UI 그림

   색상 등만 바뀔 경우 여기부터

노드들의 레이어를 Z-index 순서대로 구성하는 Composition

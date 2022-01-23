/* Menu Toggle */

$(document).ready(function(){
   $("#toggler").click(function(){
     $("#toggle-nav").fadeToggle(500);
   });
 });

 $('.menu-toggle').on('click', function() {
   $('.wrapper').toggleClass('menu--is-revealed');
 });

 /* Half Page Responsive */

 $(document).ready(function($) {
   var alterClass = function() {
     var ww = document.body.clientWidth;
     if (ww < 1199) {
       $('.LeftContent ').removeClass('LeftContent');
       $('.RightContent ').removeClass('RightContent');
     } else if (ww >= 1200) {
       $('.LeftContent').addClass('LeftContent');
       $('.RightContent ').addClass('RightContent');
     };
   };
});

const homeText = `
      <p id="home">안녕하세요,
          <br>
          저의 소개 페이지에 오신 것을 환영합니다!
          <br>
          <br>
          저는 프로그래밍을 공부하고 활용하는 것을 좋아하는 흔한 공대 졸업생입니다.
          프로그래밍을 통해 제가 상상 속에서만 그렸던 기능이나 제품을 실제로 구현하는 것이 재밌습니다.
          앞으로도 계속 배우고 발전하여, 더 많은 것을 만들 수 있는 개발자가 되고 싶습니다.
          <br>
          <br>
          이 페이지에서는 저의 취미나 프로그래밍 관심사, 그리고 연락처를 알아가실 수 있습니다.
          Gitlab, Github를 통해 작성한 코드를 공유하고, 서로 발전시키면서 소통을 하면 좋을 것 같습니다.
          <br>
          <br>
          앞으로 잘 부탁드립니다.
          <br>
          <br>
          이제 더 자세한 소개를 해 볼게요!
          <br>
          왼쪽 상단의 글씨를 클릭해 보세요 :)
          <br>
          <br>
        </p>
        `

  const hobbyText = `
        <h2 id="hobby">취미</h2>
        <br>
        <p>저의 취미는 농구와 프로그래밍입니다.
            <br>
            <br>
            저는 예전에는 농구를 하는 것을 좋아했고, 지금은 농구를 보는 것을 좋아합니다.
            KBL과 NBA 모두 하이라이트 위주로 보는 편입니다. 예전에는 KBL을 직접 보러 가는 것도
            좋아했는데, 요즘은 아무래도 코로나 때문에 안 가게 되었고, 대신 휴대폰으로 봅니다.
            <br>
            좋아하는 KBL 선수는 오세근, 김선형, 허웅 이고, NBA에서는 르브론입니다.
            <br>
            <br>
            프로그래밍도 취미입니다. 유튜브로 프로그래밍 관련 영상을 종종 보는데, 공부를 하려고
            보기보다는 그냥 신기하고 새로워서 보게 됩니다. 그래서 취미라고 하였습니다. 아무래도
            웹 개발 관련 유튜브 영상이 활발하게 올라오기에 웹 분야를 많이 보게 되는데요, 프론트
            프레임워크가 React, Next 등이 계속 버전 업데이트 되고, 더욱 빠르고 다양한 웹 기능들이
            생겨나는 것이 신기합니다. 한 편으로는 지금은 약간 유행이 지난 듯 하지만 Web Assembly
            관련 영상도 종종 봅니다.
            <br>
            <br>
        </p>
  `

 const programmingText = `
        <h2 id="programming">프로그래밍</h2>
        <br>
        <p>제 프로그래밍 관심사를 설명해 보겠습니다.
            <br>
            <br>
            저는 기본적으로 웹 개발에 관심이 많습니다. 아무래도 개발 분야 중 가장 규모가 크고
            그만큼 활발한 개발 커뮤니티가 구축되어 있고, 하루하루 새로운 프레임워크와 아이디어가
            생겨나고 있어 재밌기 때문입니다.
            <br>
            <br>
            구체적으로는, 저는 프론트엔드와 백엔드 모두에 관심이 많습니다. 두 분야 모두를
            공부하는 과정에서 웹 개발의 전체적인 흐름을 익힐 수 있다고 생각하기 때문입니다.
            백엔드 팀을 이해하는 프론트 개발자 혹은, 프론트 팀을 이해하는 백엔드 개발자가 되고 싶습니다.
            <br>
            <br>
            현재는 React, Typescript, Next를 공부하고 있습니다. 이 기술 스택을 활용하여, 사이드
            프로젝트로 일상생활과 업무를 효율화해 주는 웹 앱을 개발하고 싶습니다.
            <br>
            <br>
            <br>
            <br>
            <br>
        </p>
  `
  const communicationText =
  `
      <h2 id="communication">소통</h2>
      <br>
      <p>제 Guthub 주소는 아래와 같습니다.
         <br>
         <a href="https://github.com/z3zzz" target="_blank">https://github.com/z3zzz</a>
         <br>
         <br>
         괜찮으시다면 팔로우 해주세요. 앞으로도 다양한 웹 관련 개발 코드를 업로드할 계획입니다.
         저도 팔로우를 해드릴게요. 함께 커뮤니티를 만들어 갑시다 :)
         <br>
         <br>
         이제 제 소개를 마치고자 합니다. 마지막으로 왼쪽 사진의 경우는 제가 좋아하는
         사진인데요, 저는 겨울과 눈을 좋아합니다. 코로나가 풀리면 저런 경치가 있는
         해외로 여행을 꼭 떠나고 싶습니다.
         <br>
         <br>
         지금까지 제 소개였습니다!
         <br>
         감사합니다.
         <br>
         <br>
      </p>
  `


const placeForText = document.querySelector('#placeForText')
placeForText.innerHTML = homeText

const homeButton = document.querySelector('#buttonForHome')
const hobbyButton = document.querySelector('#buttonForHobby')
const programmingButton = document.querySelector('#buttonForProgramming')
const communicationButton = document.querySelector('#buttonForCommunication')

homeButton.addEventListener("click", () => {placeForText.innerHTML = homeText})
hobbyButton.addEventListener("click", () => {placeForText.innerHTML = hobbyText})
programmingButton.addEventListener("click", () => {placeForText.innerHTML = programmingText})
communicationButton.addEventListener("click", () => {placeForText.innerHTML = communicationText})

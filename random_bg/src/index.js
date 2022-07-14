const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const randomBtn = document.querySelector("button");
//Html문서에서 button태그를 불러와서 randomBtn로 선언

randomBtn.addEventListener('click', function(){ //선언된 randomBtn클리시 이벤트 발생하도록 함수사용
  const chosenColor1 = colors[Math.floor(Math.random() * colors.length)]; //colors Array의 색상코드 랜덤하게 1개 불러옴
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)]; //colors Array의 색상코드 랜덤하게 1개 불러옴

  if (chosenColor1 !== chosenColor2) { //if문을 사용하여 chosenColor1과 chosenColor2의 값이 같지 않은 경우 실행되도록 설정
    document.body.setAttribute("style", `background:linear-gradient(43deg,${chosenColor1},${chosenColor2})`);
  } else; // 두 값이 같은 경우 기본 배경색 유지
});


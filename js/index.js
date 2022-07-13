const clock = document.querySelector("h2#clock");

function getXmasTimer(){
  const endDate = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`); //타겟인 크리스마스 날짜를 지정
  const nowDate = new Date(); //현재날짜를 불러옴
  
  const dday = endDate - nowDate; // 크리스마스 날짜 - 현재 날짜, 시간이 지날수록 msc 값 감소

  /*
  1초 = 1000(msc)
  1분 = 1000 * 60
  1시간 = 1000 * 60 * 60
  1일 = 1000 * 60 * 60 * 24
  */

  const days = String(Math.floor(dday / (1000 * 60 * 60 * 24))).padStart(3, "0"); 
  const hours = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");

  

  clock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getXmasTimer(); // 화면을 실행시켰을 때 최초로 보여지는 시간 함수
setInterval(getXmasTimer, 1000); //전달받은 getXmasTimer 함수를 1초(1000msc)마다 실행

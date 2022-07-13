const clock = document.querySelector("h2#clock");

function getXmasTimer(){
  // const endDate = new Date('2022-12-25 00:00:00+0900');
  const endDate = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const nowDate = new Date();
  
  const dday = endDate - nowDate;

  const days = String(Math.floor(dday / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const hours = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");

  clock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getXmasTimer();
setInterval(getXmasTimer, 1000);
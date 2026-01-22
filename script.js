// Future enhancements (analytics, animations)
console.log("Gurukul LearnX website loaded");

window.addEventListener("load", function(){
  const loader = document.getElementById("page-loader");
  const percentText = document.getElementById("loader-percent");

  let percent = 0;
  const minTime = 2000; // minimum 2 seconds
  const intervalTime = 20; // speed of counter
  const step = 100 / (minTime / intervalTime);

  const counter = setInterval(()=>{
    percent += step;
    if(percent >= 100){
      percent = 100;
      clearInterval(counter);

      setTimeout(()=>{
        loader.style.opacity = "0";
        setTimeout(()=>{
          loader.style.display = "none";
        }, 600);
      }, 300);
    }
    percentText.innerText = Math.floor(percent) + "%";
  }, intervalTime);
});


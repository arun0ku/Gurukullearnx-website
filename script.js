// Future enhancements (analytics, animations)
console.log("Gurukul LearnX website loaded");

window.addEventListener("load", function(){
  const loader = document.getElementById("page-loader");
  loader.style.opacity = "0";
  setTimeout(()=>{
    loader.style.display = "none";
  }, 600);
});

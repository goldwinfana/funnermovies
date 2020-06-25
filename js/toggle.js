// $('.customs').on('click', function(e){

//   $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
  
// });

function openNav() {
  document.querySelector(".menu-toogle").style.display = "grid";

  var iOS =  
      /iPad|iPhone|iPod/.test(navigator.userAgent) && 
      !window.MSStream;

  if(iOS ==true)
  {
    document.getElementById("sticker_container").style.marginBottom = "200%";
  }

}

function closeNav() {
 
  //document.querySelector(".menu-toogle").style.height = "0%";
  $('.menu-toogle').fadeOut(600);
  document.getElementById("sticker_container").style.marginBottom = "0%";
}


$('img.nivo-main-image').on('load', function(e){
 
  var src = $('img.nivo-main-image').attr('src');
  
  if(src == "images/slides/slide-money-heists.png")
  {
    document.querySelector('.slide-p').innerHTML= "Money Heist (2020)";
  }
  else if(src == "images/slides/slide-see.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "See (2020)";
    
  }
  else if(src == "images/slides/slide-extraction.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "Extraction (2020)";
  }
  else if(src == "images/slides/slide-bloodshot.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "Bloodshot (2020)";
  }
  else if(src == "images/slides/slide-badlands.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "Into The Badlands (2020)";
  }
  else if(src == "images/slides/slide-queen-sono.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "Queen Sono (2020)";
  }
  else if(src == "images/slides/slide-blood&water.jpg")
  {
    document.querySelector('.slide-p').innerHTML= "Blood And Water (2020)";
  }
  else
  {
    document.querySelector('.slide-p').innerHTML= "";
  }
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.intro');
var textMessage = document.querySelector('.message-intro');
textWrapper.innerHTML ="<p>WELCOM TO Funner_Movies</p>";
textMessage.innerHTML ="<p>Watch And Download Your Favourate Movies And Series. Enjoy !!!</p>";
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.intro .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 6200,
    delay: (el, i) => 50 + 30 * i
  }).add({
    targets: '.intro .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


// Get the modal
  
function close() {
  $('#myModal').delay(10000).fadeOut(800);
  
}

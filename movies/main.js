function playVideo(){

  document.getElementById('video-cover').style.display = "none";
  document.getElementById('video-cover-play').style.display = "block";
}

function download(){

  document.getElementById('download-video').click();
}

function downloadSub(){

  document.getElementById('download-sub').click();
}


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
function playVideo(){

  document.getElementById('video-cover').style.display = "none";
  document.getElementById('video-cover-play').style.display = "block";
}

function download(){

  document.getElementById('download-video').click();
}

function postURL(url){

  window.location = url;
}
function downloadSub(){

  document.getElementById('download-sub').click();
}  

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function assignSrc(){
 var urlParams = getUrlVars()["eps"];
 if(urlParams == undefined)
 {
  urlParams = 'e01';
 }
 document.getElementById(urlParams).style.background = "darkgoldenrod";
 var srcName = document.getElementById(urlParams).querySelector('input').value;

 var srcTag = "src='"+srcName+"'"; 
 document.getElementById('video-play').innerHTML ="<source "+srcTag+"  type='video/mp4'>";
 $('#download-video').attr('href',srcName);

}

assignSrc();
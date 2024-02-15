var SpeechRecognition = window.webkitSpeechRecognition;
var recoognition = new SpeechhRecognition();
var textbox = document.getElementById("textbox");
function start(){
    textbox.innerHTML = "";
    recoognition.start();
}

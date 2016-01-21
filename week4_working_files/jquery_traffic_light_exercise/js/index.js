//Implement the red light using jQuery. Don't forget to add the script tags.

//Vanilla JS
// document.getElementByID("stopButton").onclick = illuminateRed;

//Jquery
$("#stopButton").click(illuminateRed);
// $("#slowButton").click(illuminateYellow);
// $("#goButton").click(illuminateGreen);

function illuminateRed() {
  clearLights();

  $("#stopLight").css("backgroundColor", "red");
  // $("slowLight").css("backgroundColor", "yellow");
  // $("goLight").css("backgroundColor", "green");
}

function clearLights() {

  $("#stopLight").css("backgroundColor", "black");
  // $("slowLight").css("backgroundColor", "black");
  // $("goLight").css("backgroundColor", "black");
}

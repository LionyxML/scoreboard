
window.onload = init;

function init() {

    document.getElementById("submit").onclick = function () { doEdit("thetext", "ta1", "editor");}
    document.getElementById("submit2").onclick = function () { doEdit("thetextHome", "ta2", "editorHome");}
    document.getElementById("submit3").onclick = function () { doEdit("thetextVisitor", "ta3", "editorVisitor");}

    document.getElementById("subHome").onclick = function () { counter(-1, "scoreHome"); }
    document.getElementById("addHome").onclick = function () { counter(1, "scoreHome"); }
    document.getElementById("subVisitor").onclick = function () { counter(-1, "scoreVisitor"); }
    document.getElementById("addVisitor").onclick = function () { counter(1, "scoreVisitor"); }

    // Event added not to select when double clicking
    document.getElementById("subVisitor").addEventListener('mousedown', function(e){e.preventDefault();}, false);
    document.getElementById("addHome").addEventListener('mousedown', function(e){e.preventDefault();}, false);
    document.getElementById("subVisitor").addEventListener('mousedown', function(e){e.preventDefault();}, false);
    document.getElementById("addVisitor").addEventListener('mousedown', function(e){e.preventDefault();}, false);

}


function counter(num, target) {
	var score = document.getElementById(target);
  score.innerHTML = parseInt(score.textContent) + num;
}


function toggleEditor(textid, inputid, editorid) {
	var theText = document.getElementById(textid);
  var theEditor = document.getElementById(inputid);
	var editorArea = document.getElementById(editorid);

	var subject = theText.innerHTML;
	theEditor.value = subject;

	theText.style.display = 'none';
	editorArea.style.display = 'inline';
}


function doEdit(textid, inputid, editorid) {
	var theText = document.getElementById(textid);
	var theEditor = document.getElementById(inputid);
	var editorArea = document.getElementById(editorid);

	var subject = theEditor.value;
  subject = sanitize(subject);
  theText.innerHTML = subject;

	theText.style.display = 'inline';
	editorArea.style.display = 'none';
}


function sanitize(message) {
  message = message.replace(new RegExp("<", "g"), ' ');
  message = message.replace(new RegExp(">", "g"), ' ');
  return message
}

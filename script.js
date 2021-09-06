function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
	tpos = (elmnt.offsetTop - pos2);
	if (tpos < 0) tpos = 0;
	lpos = (elmnt.offsetLeft - pos1);
	if (lpos < 0) lpos = 0;
	
	tperc = tpos / document.documentElement.clientHeight;
	lperc = lpos / document.documentElement.clientWidth;
	
	tperc = (tperc * 100);
	
	g_tpos = tperc;
	
    elmnt.style.top = (tperc) + "%";
    elmnt.style.left = (lperc * 100) + "%";
	elmnt.style.position = "absolute";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
	
	if (g_tpos >= 101) {
		elmnt.style.left = elmnt.style.top = elmnt.style.position = "";
	} else {
		elmnt.style.top = g_tpos + "%";
	}
	
  }
};

document.addEventListener("DOMContentLoaded", function(){
	for (let c of document.getElementsByClassName("draggable-items")) {
		for (let e of c.children) {
			dragElement(e);
		}
	}
	
	for (let img of document.getElementsByTagName('img')) {
		if (img.src != undefined) {
			if (img.src.indexOf("Audino") != -1) img.classList.add("audino")
			if (img.src.indexOf("Aipom") != -1) img.classList.add("aipom")
			if (img.src.indexOf("Corphish") != -1) img.classList.add("corphish")
			if (img.src.indexOf("Lillipup") != -1) img.classList.add("lillipup")
			if (img.src.indexOf("Bouffalant") != -1) img.classList.add("bouffalant")
			if (img.src.indexOf("Ludicolo") != -1) img.classList.add("ludicolo")
			if (img.src.indexOf("Vespiquen") != -1) img.classList.add("vespiquen")
			if (img.src.indexOf("Combee") != -1 img.classList.add("combee")
			
			if (img.src.indexOf("Zapdos") != -1) img.classList.add("zapdos")
			if (img.src.indexOf("Rotom") != -1) img.classList.add("rotom")
			if (img.src.indexOf("Dreadnaw") != -1) img.classList.add("dreadnaw")
		}
	}
});
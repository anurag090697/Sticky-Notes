<<<<<<< HEAD
console.log("lillie");
let btn = document.getElementById("btn");
let txt = document.getElementById("textIn");
let bgClr = document.getElementById("colorIn");
let right = document.getElementById("right");
let txtColor = document.getElementById("textColor");

btn.addEventListener("click", () => {
  let color = bgClr.value;
  let text = txt.value;

  if (text.trim().length === 0) return;

  let stickyEle = document.createElement("div");
  let note = document.createElement("span");

  note.innerText = text;
  stickyEle.append(note);

  stickyEle.style.backgroundColor = color;

  right.append(stickyEle);
  stickyEle.classList.add("stickyNote");
  note.classList.add("note");

  let cross = document.createElement("div");
  stickyEle.appendChild(cross);
  cross.innerText = "x";
  cross.classList.add("cross");

  note.style.color = txtColor.value;

  cross.addEventListener("click", closeNote);

  note.addEventListener("click", stickyEdit);
  note.addEventListener("blur", stopEdit);

  txt.value = "";
});

function closeNote(tsk) {
  tsk.target.parentElement.remove();
}
function stickyEdit(tsk) {
  tsk.target.contentEditable = true;
}
function stopEdit(tsk) {
  tsk.target.contentEditable = false;
}
=======
console.log("lillie");
let btn = document.getElementById("btn");
let txt = document.getElementById("textIn");
let bgClr = document.getElementById("colorIn");
let right = document.getElementById("right");
let txtColor = document.getElementById("textColor");

btn.addEventListener("click", () => {
  let color = bgClr.value;
  let text = txt.value;

  if (text.trim().length === 0) return;

  let stickyEle = document.createElement("div");
  let note = document.createElement("span");

  note.innerText = text;
  stickyEle.append(note);

  stickyEle.style.backgroundColor = color;

  right.append(stickyEle);
  stickyEle.classList.add("stickyNote");
  note.classList.add("note");

  let cross = document.createElement("div");
  stickyEle.appendChild(cross);
  cross.innerText = "x";
  cross.classList.add("cross");

  note.style.color = txtColor.value;

  cross.addEventListener("click", closeNote);

  note.addEventListener("click", stickyEdit);
  note.addEventListener("blur", stopEdit);

  txt.value = "";
});

function closeNote(tsk) {
  tsk.target.parentElement.remove();
}
function stickyEdit(tsk) {
  tsk.target.contentEditable = true;
}
function stopEdit(tsk) {
  tsk.target.contentEditable = false;
}
>>>>>>> a659eba759acc44806716b8c494e644ef1db9ba7

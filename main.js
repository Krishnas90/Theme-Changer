let select = document.querySelector("select");
let para = document.querySelector("p");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
}

select.addEventListener('change', () => {
  select.value === "black"
  ? update("black", "white")
  : update("white", "black")
})
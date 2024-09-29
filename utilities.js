function hiddenById(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showById(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabates = "abcdefghijklmnopqrstuvwxyz";
  const alphabate = alphabates.split("");

  const randomNUmber = Math.random() * 25;
  const index = Math.round(randomNUmber);

  return alphabate[index];
}

function setBgColor(element) {
  const currentElement = document.getElementById(element);
  currentElement.classList.add("bg-amber-500");
}

function removeBg(element) {
  const currentElement = document.getElementById(element);
  currentElement.classList.remove("bg-amber-500");
}

function getInnerTextValuById(element) {
  const currentElement = document.getElementById(element);
  const elementText = currentElement.innerText;
  const value = parseInt(elementText);
  return value;
}

function setValueById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

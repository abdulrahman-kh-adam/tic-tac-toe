const title = document.querySelector(".title h2");
const text = ">Tic Tac Toe";
let index = 0;
let typedText = "";

const typeEffect = () => {
  if (index < text.length) {
    typedText += text.charAt(index);
    title.textContent = typedText;
    title.textContent += "_";
    index++;
    setTimeout(typeEffect, 200);
  }
};

typeEffect();

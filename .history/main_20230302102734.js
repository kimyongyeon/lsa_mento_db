const footer__input = document.querySelector(".footer__input");
const footer__button = document.querySelector(".footer__button");
const new__form = document.querySelector(".new-form");

new__form.addEventListener("submit", event => {
  event.preventDefault();
  createItem();
});

function createItem(text) {
  let text = input.value();
  console.log(input);
  console.log("아이템 생성중!");
}

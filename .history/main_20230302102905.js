const footer__input = document.querySelector(".footer__input");
const footer__button = document.querySelector(".footer__button");
const new__form = document.querySelector(".new-form");

new__form.addEventListener("submit", event => {
  event.preventDefault();
  createItem();
});

function createItem() {
  let text = footer__input.value;
  console.log(text);
  console.log("아이템 생성중!");
}

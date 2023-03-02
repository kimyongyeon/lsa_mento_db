const footer__input = document.querySelector(".footer__input");
const footer__button = document.querySelector(".footer__button");
const new__form = document.querySelector(".new-form");
const items = document.querySelector(".items");

new__form.addEventListener("submit", event => {
  event.preventDefault();
  createList();
});

function createList() {
  // 입력값 받기
  let text = footer__input.value;

  // li 생성
  const item = createItem(text);
  items.appendChild(text);

  console.log(text);
  console.log("아이템 생성중!");
}

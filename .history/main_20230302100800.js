const footer__input = document.querySelector(".footer__input");
const footer__button = document.querySelector(".footer__button");
const new__form = document.querySelector(".new-form");

new__form.addEventListener("submit", function () {
  console.log("입력했습니다.");
  createItem();
});

function createItem() {
  console.log("아이템 생성중!");
}

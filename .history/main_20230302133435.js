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
  items.appendChild(item);

  console.log(text);
  console.log("아이템 생성중!");
}

let id = 0;

function createItem(text) {
  const item__row = document.createElement("li");
  item__row.setAttribute("class", "item__row");
  item__row.setAttribute("data-id", id);
  item__row.innerHTML = `
    <div class="item">
    <span class="item__name">${text}</span>
    <button class="item__delete">
      <i class="fa-solid fa-trash-can" data-id="${id}"></i>
    </button>
  </div>
  <div class="item__divider"></div>
  `;
  id++;
}

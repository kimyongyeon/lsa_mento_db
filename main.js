// todo:
/**
 * 1. 중복함수 제거
 * 2. 공통함수 관리
 * 3. 전역 컨텍스트 변수를 일반처리함수에서 모두 제거
 */
const footer__input = document.querySelector(".footer__input");
const footer__button = document.querySelector(".footer__button");
const new__form = document.querySelector(".new-form");
const items = document.querySelector(".items");

new__form.addEventListener("submit", (event) => {
  event.preventDefault();
  createList();
});

items.addEventListener("click", (event) => {
  let id = event.target.dataset.id;
  if (id) {
    let del_item = document.querySelector(`.item__row[data-id="${id}"]`);
    del_item.remove();
  }
});

const list = document.querySelector(".list");
list.addEventListener("");

function createList() {
  // 입력값 받기
  let text = footer__input.value;

  if (!text) {
    alert("텍스트를 입력해주십시요.");
    footer__input.focus();
    return;
  }

  // li(item) 생성
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });

  footer__input.value = "";
}

// 클로저 함수
// 제네릭
let id = 0;

function* 제네릭() {
  for (;;) {
    yield i++;
  }
}

제네릭().next().value();
제네릭().next().value();
제네릭().next().value();
제네릭().next().value();

function modify() {
  id = 0;
}

function 클로저() {
  let id = 0;
  return function () {
    return id++;
  };
}

const closure = new 클로저();
closure();
closure();
closure();
closure();

setTimeout(() => {
  modify();
}, 0);
setTimeout(() => {
  createItem("sdfsdf");
}, 0);

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
  return item__row;
}

// solid : 
// open-closed : 확장은 열려 였고, 변화는 닫혀있다. 
function calc(selector, a, b) {
  if (selector == "+") {
    return a + b;
  } else (selector == "-") {
    return a - b;
  }
}

function newCalc(calcSelector, a, b) {
  return calcSelector(a, b);
}

newCalc((a, b) => a + b, 1, 2);

calc("+", 2, 3);


function dbFile() {
  const db = new MySQLDatabase();
  const member = db.select();
  return member;
}

function dbFileNew(db) {
  const member = db.select();
  return member;
}

dbFileNew(new OracleDatabase());

interface AbsctractGrid {
  list();
  add();
}

class TableGridImple implements AbsctractGrid {

}

class TableGrid {
  grid: AbsctractGrid;
  constructor(grid: AbsctractGrid) {
    this.grid = grid;
  }
}

const tableGrid = new TableGrid(new TableGridImple());

tableGrid.add();
tableGrid.list();

class GalleyGrid {
  grid: AbsctractGrid;
  constructor(grid: AbsctractGrid) {
    this.grid = grid;
  }
}


function config(db) {
  db.addr = 'sdfsfdsf';
  db.name = 'sdfsfsdf';
  return db;
}


function jsp() {
  const db = config(new Database());
  // db.addr = 'sdfsfdsf';
  // db.name = 'sdfsfsdf';

  render() {
    return db;
  }
}
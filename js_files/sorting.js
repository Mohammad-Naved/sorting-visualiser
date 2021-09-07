const bars = document.querySelector(".bars");

const random = () => {
  return Math.floor(Math.random() * 100 + 5);
};
console.log(random());
let array = [];

const createNewArray = () => {
  deleteChild();
  let n = random();
  array = [];
  for (let i = 0; i < n; i++) {
    array.push(random());
  }
  console.log(array);

  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${array[i] * 2}px`;
    bars.appendChild(bar);
  }
};

const deleteChild = () => {
  console.log("Herper Funcytion is called");
  const bars = document.querySelector(".bars");
  bars.innerHTML = "";
};

const newArray = document.querySelector(".newArray");

newArray.addEventListener("click", function () {
  createNewArray();
});

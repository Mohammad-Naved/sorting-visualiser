const bars = document.querySelector(".bars");
const array = [];
const random = () => {
  return Math.floor(Math.random() * 50 + 10);
};
const n = random();

for (let i = 0; i < n; i++) {
  array[i] = random();
}

for (let i = 0; i < n; i++) {
  const element = document.createElement("div");
  element.classList.add("bar");
  element.style.height = `${array[i]}px`;
  bars.appendChild(element);
}
console.log(array);

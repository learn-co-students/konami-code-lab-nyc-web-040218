const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  // your code here
  document.body.addEventListener('keydown', (k) => {
    const key = k.key;
    if (key === codes[index]) {
      index++;
    } else {
      index = 0;
    }
    if (index === codes.length) {
        window.alert("REST 99");
        index = 0;
      }
  })
}

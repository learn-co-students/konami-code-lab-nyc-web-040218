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

  document.body.addEventListener('keydown', (e) => {

    let index = 0;

    if (e === codes[index]) {
      index++
    } else {
      index = 0;
    };

    if (index === codes.length) {
      window.alert("Hurray!");
      index = 0;
    };

  });

}

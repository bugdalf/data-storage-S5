const storageRange = document.getElementById("Storage__range");
const useData = document.getElementById("Use__data");
const leftData = document.getElementById("Left__data");

storageRange.oninput = function () {
  useData.innerHTML = this.value;
  leftData.innerHTML = 1000 - this.value;

  let val = calcPos(this.value);
  let color =
    "linear-gradient(90deg, rgba(237,159,114,1) 0%,  rgba(237,67,174,1)" +
    val +
    "%, rgb(12, 18, 44)" +
    val +
    "%)";

  storageRange.style.background = color;
};

//ajuste de la posicion para pintar correctamente el progress bar
function calcPos(val) {
  val = val / 10;
  console.log(val);

  if (val < 30) {
    val = val + 2;
  }

  if (val > 60) {
    val = val - 2;
  }

  return val;
}

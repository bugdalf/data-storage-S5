const storageRange = document.getElementById("Storage__range");
const useData = document.getElementById("Use__data");
const leftData = document.getElementById("Left__data");

storageRange.oninput = function () {
  useData.innerHTML = this.value;
  leftData.innerHTML = 1000 - this.value;
  let color =
    "linear-gradient(90deg, rgba(237,159,114,1) 0%,  rgba(237,67,174,1)" +
    this.value / 10 +
    "%, rgb(12, 18, 44)" +
    this.value / 10 +
    "%)";

  storageRange.style.background = color;
};

const div1 = document.getElementById("hidden1");
const div2 = document.getElementById("hidden2");
const div3 = document.getElementById("hidden3");
function click1() {
    div1.style.display = "grid";
    div2.style.display = "none";
    div3.style.display = "none";
}
function click2() {
    div2.style.display = "grid";
    div1.style.display = "none";
    div3.style.display = "none";
}
function click3() {
    div3.style.display = "grid";
    div2.style.display = "none";
    div1.style.display = "none";
}
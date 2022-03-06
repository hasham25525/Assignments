
let x = 1;
let arr = [x];
function YourList() {

    arr[x] = document.getElementById("input").value;
    for (let x = 0; x < arr.length; x++) {
        document.getElementById("input").value;
        let list = x + ".    " + arr[x];
        document.getElementById("list").innerText = list;
    }
    x++;
    document.getElementById("text1").value = "";


}
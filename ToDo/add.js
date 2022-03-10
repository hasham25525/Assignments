
let x = 0;
let arr = [x];
function YourList() {

    arr[x] = document.getElementById("input").value;

    x++;
    document.getElementById("input").value = "";

    let list = 0;
    for (let y = 0; y < arr.length; y++) {
        list += y + ". " + arr[y] + "<br/>";
    }
    document.getElementById("list").innerHTML = list;
}

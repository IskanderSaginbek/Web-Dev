function addItem() {
    var container = document.getElementById("items");
    var inp = document.getElementById("inp");
    var item = document.createElement("div");
    var check = document.createElement("input");
    var content = document.createElement("p");
    var delet = document.createElement("img");
    check.type = "checkbox";
    content.innerHTML = inp.value;
    inp.value = "";
    delet.src = "delet.png";
    check.className="chec";
    content.className="conten";
    delet.className="delet";
    item.className="ite";
    check.addEventListener("click",function () {
        if (this.checked)
            this.parentElement.children[1].style.textDecoration="line-through";
        else
            this.parentElement.children[1].style.textDecoration="none";
    });
    delet.addEventListener("click", function () {
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
    check.style.accentColor = "#6495ed";
    item.appendChild(check);
    item.appendChild(content);
    item.appendChild(delet);
    container.appendChild(item);
}

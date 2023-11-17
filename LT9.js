tinhDT.addEventListener("click", function() {
    let a = +document.getElementById("canhA").value;
    let b = +document.getElementById("canhB").value;
    let c = a * b;

    document.getElementById("hienthi").innerHTML="Diện tích hình chữ nhật là: " + c

    alert(c);
})
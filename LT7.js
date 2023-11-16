// tinhCuoc.addEventListener("click" , function(){

//     let soPhut = +document.getElementById("phut").value;
//     let tenHo = document.getElementById("ten").value;
//     let diaChi = document.getElementById("diaChi").value;
//     let coDinh = 50000;
//     let cuocDT;

//     if (soPhut <= 50 ){
//         cuocDT = coDinh + (2000 * soPhut);
//         document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
//     } else if ( 50 < soPhut && soPhut <= 200 ){
//         cuocDT = coDinh + (2000 * soPhut);
//         document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
//     } else {
//         cuocDT = coDinh + (2000 * soPhut);
//         document.getElementById("dT").innerHTML = " Khách hàng: " + tenHo + " Địa chỉ: " + diaChi + " cước điện thoại tháng này là: " + cuocDT + " đồng."
//     }

// })

let sophut = +prompt("Nhập số phút: ");
let cuocDT;

if ( sophut <= 50 ) {
    cuocDT = sophut * 3000;
    alert("tiền cước điện thoại của bạn là: " + cuocDT)
} else if ( 50 < sophut && sophut <= 200 ) {
    cuocDT = sophut * 2000;
    alert("tiền  cước điện thoại của bạn là: " + cuocDT)
} else if ( 200 < sophut && sophut <= 300 ) {
    cuocDT = sophut * 1500;
    alert("tiền cước điện thoại của bạn là: " + cuocDT)
} else {
    cuocDT = sophut * 1000;
    alert ("tiền cước điện thoại của bạn là: " + cuocDT)
}
// let a = +prompt("Nhập a: ");
// let b = +prompt("Nhập b: ");
// let c = +prompt("Nhập c: ");

// if ( a > b ) {
//     if ( a > c ) {
//         alert(a);
//     } else if ( b > a ) {
//         alert(b);
//     }
// } else {
//     alert(c);
// }

let a = parseInt(prompt("Nhập a: "));
let b = parseInt(prompt("Nhập b: "));
let c = parseInt(prompt("Nhập c: "));

let maxNum;

if ( a >= b && a >= c) {
    maxNum = a;
    // alert("a là giá trị lớn nhất");
} else if ( b >= a && b >= c) {
    maxNum = b;
    // alert("b là giá trị lớn nhất");
} else {
    maxNum = c;
    // alert("c là giá trị lớn nhất");
}
// template string
alert(`${maxNum} là giá trị lớn nhất`);
// document.write, document.getElementbyID...



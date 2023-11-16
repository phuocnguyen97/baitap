let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if ( a > b ) {
    if ( a > c ) {
        alert(a);
    } else if ( b > a ) {
        alert(b);
    }
} else {
    alert(c);
}
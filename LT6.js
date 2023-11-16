let doanhso = +prompt("Nhập doanh số: ");
let hoahong1 = 5 / 100;
let hoahong2 = 10 / 100;
let hoahong3 = 20 / 100;

if (doanhso >= 1000000) {
    alert(doanhso *= hoahong1 );
} else if (doanhso >=2000000) {
    alert(doanhso *= hoahong2);
} else if (doanhso >= 3000000) {
    alert(doanhso *= hoahong3);
} else {
    alert("Bạn không đủ doanh số");
}
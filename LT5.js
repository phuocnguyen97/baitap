let diemKT = +prompt("Nhập điểm kiểm tra: ");
let diemGK = +prompt("Nhập điểm kiểm tra giữa kỳ: ");
let diemCK = +prompt("Nhập điểm kiểm tra cuối kỳ: ");
let xephanghocluc = ((diemKT + diemGK + diemCK) / 3);

if ( xephanghocluc >= 8) {
    alert("Học lực giỏi");
} else if ( xephanghocluc < 8 && xephanghocluc >= 6.5 ) {
    alert("Học lực khá");
} else if ( xephanghocluc < 6.5 && xephanghocluc >= 5 ) {
    alert("Học lực trung bình");
} else {
    alert("Học lực yếu");
}

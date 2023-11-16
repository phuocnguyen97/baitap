// let gioitinh = "nam";
// if (gioitinh == "nam"){
//     if (gioitinh == "nam"){
//         console.log("bạn là nam");
//     }
//     else {
//         console.log("bạn là nữ");
//     }
    
// }
// else {
//     console.log("bạn là gtt3");
// }

// let diem = 5;
// if (diem >= 9)
//     console.log("hsg");
// else if (diem >= 8)
//     console.log("hsk");
// else if (diem >= 7)
//     console.log("hstb");
// else 
//     console.log("hsy");


// let xeploai = 5;
// if (xeploai >= 8){
//     if (xeploai >= 9)
//         console.log("A");
//     else {
//         console.log("B");
//     }
// }
// else {
//     console.log("C");
// }


// • switch-case là một cấu trúc điều kiện cho phép lựa chọn thực thi các
// khối lệnh khác nhau dựa trên kết quả của việc so sánh
// • switch-case so sánh giá trị của một biến với lần lượt từng giá trị một,
// nếu có giá trị phù hợp với biến thì khối lệnh tương ứng sẽ được thực
// thi
// • switch-case không thể thay thế if-else trong tất cả các trường hợp

// cú pháp: 

// switch (biểu thức)
// {
//     case giatri_1 : {
//         // khối lệnh sẽ đc thực thi
//         break;
//     }
//     case giatri_2 : {
//         // khối lệnh sẽ đc thực thi
//         break;
//     }
//     default : {
//         // khối lệnh mặc định sẽ được thực thi nếu không chọn được trường hợp nào
        
//     }
// }


// switch-case: Mô tả

// • Giá trị của biểu thức sẽ được so sánh với từng
// trường hợp (case)
// • Nếu có trường hợp bằng nhau thì khối lệnh tương
// ứng sẽ được thực thi
// • Nếu gặp câu lệnh break thì sẽ kết thúc thực thi khối
// switch-case
// • Nếu gặp trường hợp bằng nhau, nhưng sau đó
// không có câu lệnh break thì tất cả những khối lệnh
// phía sau cũng được thực thi
// • Nếu không có trường hợp nào bằng nhau thì khối
// lệnh trong default (nếu có) sẽ được thực thi


// vd1

// // một biến đại diện cho một tháng trong năm (1 đến 12)
// let month = 7;
// // sử dụng switch-case để kiểm tra tháng và xác định mùa
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Mùa Xuân");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Mùa Hạ");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Mùa Thu");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log("Mùa Đông");
//         break;
//     default:
//         console.log("Không có tháng nào trong năm");
// }






function soNT() {
    document.getElementById("ketQua").value = "";
    let n = document.getElementById('soN').value;

    for (i = 1; i <= n; i++) {
        let dem = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                dem++;
                break;
            }
        }
        if (dem == 0 && i != 1) {
            document.getElementById("ketQua").value += i + " ";
        }
        
    }
}
function tinhTong() {
    document.getElementById("ketQua1").value = "";
    let n = Number(document.getElementById('soN1').value);
    document.getElementById("ketQua1").value = (n * (n + 1)) / 2;
}
function tinhTongBP() {
    document.getElementById("ketQua2").value = "";
    let n = Number(document.getElementById('soN2').value);
    let tong = 0;
    for (i = 1; i <= n; i++) {
        tong += i * i;
    }
    document.getElementById("ketQua2").value = tong;
}
function tinhTongLe() {
    document.getElementById("ketQua3").value = "";
    let n = Number(document.getElementById('soN3').value);
    let tong = 0;
    for (i = 1; i <= n; i += 2 ) {
        tong += i;
    }
    document.getElementById("ketQua3").value = tong;
}
function kiemTraSoToanLe() {
    document.getElementById("ketQua4").value = "";
    let n = document.getElementById('soN4').value;
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            document.getElementById("ketQua4").value = "NO";
            return;
        }
    }
    document.getElementById("ketQua4").value = "YES";
}


function kiemTraSoDoiXung(){
    var x = (document.getElementById('soN5').value);
    var text1 = x.split("");
    var text2 = text1.reverse();
    var text3 = text2.join("");
    // document.getElementById('ketquaB9').value =text3;
    var check = 1;
    if(x == text3)
    {
        check = 1;
    }
    else{
        check = 0;
    }
    if(check == 1){
        document.getElementById('ketQua5').value = "YES";
    }
    else{
        document.getElementById('ketQua5').value = "NO";
    }
   
}
function bangCuuChuong() {
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 10; j++) {
            document.getElementById("ketQua6").value += i + " x " + j + " = " + i * j + '\n';
        }
        document.getElementById("ketQua6").value += "------------------------------------------------------" + '\n'
    }
}

// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3
function kiemTraKhoangTrang(){
    document.getElementById("ketQua11").value = "";
    let n = document.getElementById('soN11').value;
    let dem = 0;
    for (i = 0; i < n.length; i++) {
        if (n[i] == ' ') {
            dem ++;
        }
    }
    document.getElementById("ketQua11").value = dem;
}
// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”
// function xoaKhoangTrang(){
//     document.getElementById("ketQua12").value = "";
//     let n = document.getElementById('soN12').value;
//     for (i = 0; i < n.length; i++) {
//         if (n[i] == ' ' || n[i] == '\r' || n[i] == '\n') {
//             for(j=i; j< n.length; j++){
//                 n[j]=n[j+1];
//                 n--;
//             }
//         }
//     }document.getElementById('ketQua12').value = n;
// }
function xoaKhoangTrang(){
    var n = document.getElementById('soN12').value;
    var n = n.split(" ").join("");
    document.getElementById('ketQua12').value = n;
  }
//   13. Hãy viết chương trình đảo ngược sau s.
function daoNguoc(){
    var n = document.getElementById('soN13').value;
    n = n.split(" ");
    n = n.reverse();
    for(let i =0; i<n.length; i++)
    {
        n[i] = n[i].split("");
        n[i] = n[i].reverse();
        n[i] = n[i].join("");
    }
    n = n.join(" ");
    document.getElementById('ketQua13').value = n;
}
// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
function viTriXuatHien(){
    var chuoi1 = document.getElementById('soN14_1').value;
    var chuoi2 = document.getElementById('soN14_2').value;
    chuoi1 = chuoi1.split(" ");
    chuoi2 = chuoi2.split(" ");
    var n = chuoi1.length;
    var x;
    for(let i =0; i<n; i++)
    {
        if(chuoi1[i] == chuoi2[0])
        {
          x = i;
        }
    }
    if(x > 0)
    {
      document.getElementById('ketQua14').value = x + 1;
    }
    else{
      document.getElementById('ketQua14').value = "Chuoi s2 khong co trong chuoi s1";
    }
}
// 15. Viết chương trình chuẩn hóa họ tên.
function chuanHoa(){
    var chuoi = document.getElementById('soN15').value;
    chuoi = chuoi.toLowerCase();
    chuoi = chuoi.split("");
    var n = chuoi.length;
    for(let i =0; i<n; i++)
    {
       if(i == 0)
       {
           chuoi[i] = chuoi[i].toUpperCase();
       }
       if(chuoi[i] == " ")
       {
           chuoi[i + 1] = chuoi[i + 1].toUpperCase();
       }
    }
    chuoi = chuoi.join("");
    document.getElementById('ketQua15').value = chuoi;
}
function layID(){
    var chuoi = document.getElementById('soN16').value;
    chuoi = chuoi.split("");
    var n = chuoi.length;
    var chuoi2 = "";
    for(let i =n - 1; i>=0; i--)
    {
       if(chuoi[i] == '/')
       {
         chuoi2 += chuoi.slice(i + 1, n).join("");
         break;
       }
    }
    document.getElementById('ketQua16').value = chuoi2;
  }
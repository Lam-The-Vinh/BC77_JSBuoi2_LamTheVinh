// bài hiển thị mật khẩu
const batTatMatKhau = document.querySelector(".fa-eye");
const matKhau = document.querySelector("#matKhau");

batTatMatKhau.onclick = function () {
  if (matKhau.type === "password") {
    matKhau.type = "text";
  } else {
    matKhau.type = "password";
  }
};

// bài tập lương nhân viên
let luong1Ngay = 100000;
document.querySelector("#tinhLuongNhanVien").onclick = function () {
  let soNgayLam = +document.querySelector("#soNgayLam").value;
  let result = document.querySelector("#result");
  let luongNhanVien = luong1Ngay * soNgayLam;
  document.querySelector("#luongNhanVien span").innerHTML = luongNhanVien;
};

// bài tập tính điểm trung bình
document.querySelector("#tinhDiemTrungBinh").onclick = function () {
  let diem1 = +document.querySelector("#diem1").value;
  let diem2 = document.querySelector("#diem2").value * 1;
  let diem3 = parseInt(document.querySelector("#diem3").value);
  let diem4 = +document.querySelector("#diem4").value;
  let diem5 = +document.querySelector("#diem5").value;
  let diemTrungBinh = (diem1 + diem2 + diem3 + diem4 + diem5) / 5;
  document.querySelector("#diemTrungBinh span").innerHTML = diemTrungBinh;
};

// bài tập quy đổi tiền tệ
document.querySelector("#tinhTienViet").onclick = function () {
  let giaUSD = +document.querySelector("#giaUSD").value;
  let soLuong = +document.querySelector("#quality").value;
  let tienVietQuyDoi = giaUSD * soLuong;
  document.querySelector("#tienViet span").innerHTML = tienVietQuyDoi;
};

// bài tập tính chu vi và diện tích hình chữ nhật
document.querySelector("#tinhChuViVaDienTich").onclick = function () {
  let chieuDai = +document.querySelector("#chieuDai").value;
  let chieuRong = +document.querySelector("#chieuRong").value;
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.querySelector("#chuVi span").innerHTML = chuVi;
  document.querySelector("#dienTich").innerHTML = dienTich;
};

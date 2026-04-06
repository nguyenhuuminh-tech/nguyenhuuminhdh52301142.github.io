let danhsach = JSON.parse(localStorage.getItem("danhsach")) || [];
let lichsu = JSON.parse(localStorage.getItem("lichsu")) || [];

function load(){
  hienThi(danhsach);
}
load();

function hienThi(list){
  const container = document.getElementById("list");
  container.innerHTML = "";

  list.forEach(s=>{
    container.innerHTML += `
      <div class="card">
        <img src="${s.hinh}">
        <div class="info">
          <h3>${s.ten}</h3>
          <p>${s.khuvuc}</p>
          <p class="price">${Number(s.gia).toLocaleString('vi-VN')} VNĐ</p>
          <button onclick="mo('${s.ten}')">Đặt sân</button>
        </div>
      </div>
    `;
  });
}

// popup
let sanDangDat = "";

function mo(ten){
  sanDangDat = ten;
  document.getElementById("popup").style.display = "flex";
}

function dong(){
  document.getElementById("popup").style.display = "none";
  document.getElementById("pay").style.display = "none";
}

// thanh toán
function thanhtoan(){
  document.getElementById("pay").style.display = "flex";
}

// xác nhận
function xacnhan(){
  let ten = document.getElementById("khach").value;
  let sdt = document.getElementById("sdt").value;
  let ngay = document.getElementById("ngay").value;
  let gio = document.getElementById("gio").value;

  if(!ten || !sdt || !ngay){
    alert("Nhập đủ thông tin!");
    return;
  }

  lichsu.push({
    san: sanDangDat,
    ten: ten,
    sdt: sdt,
    ngay: ngay,
    gio: gio
  });

  localStorage.setItem("lichsu", JSON.stringify(lichsu));

  alert("Đặt thành công 🎉");
  dong();
}

// tìm kiếm
function tim(){
  let t = document.getElementById("ten").value.toLowerCase();
  let kv = document.getElementById("khuvuc").value.toLowerCase();

  let kq = danhsach.filter(s =>
    s.ten.toLowerCase().includes(t) &&
    s.khuvuc.toLowerCase().includes(kv)
  );

  hienThi(kq);
}

// filter
function uudai(){ hienThi(danhsach.filter(s => s.gia < 110000)); }
function datnhanh(){ hienThi(danhsach); }
function giare(){ hienThi(danhsach.filter(s => s.gia <= 100000)); }
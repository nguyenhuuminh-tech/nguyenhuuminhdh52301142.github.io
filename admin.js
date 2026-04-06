// load dữ liệu
let ds = JSON.parse(localStorage.getItem("danhsach")) || [];
let lichsu = JSON.parse(localStorage.getItem("lichsu")) || [];

// hiển thị sân
function load(){
  const div = document.getElementById("danhsach");
  div.innerHTML = "";

  ds.forEach((s, index)=>{
    div.innerHTML += `
      <div style="border:1px solid black; margin:10px; padding:10px;">
        <img src="${s.hinh}" width="150"><br>
        <b>${s.ten}</b><br>
        ${s.khuvuc}<br>
        ${Number(s.gia).toLocaleString('vi-VN')} VNĐ
        <button onclick="xoa(${index})">❌ Xóa</button>
      </div>
    `;
  });
}

// thêm sân
function them(){
  let ten = document.getElementById("ten").value;
  let kv = document.getElementById("khuvuc").value;
  let gia = document.getElementById("gia").value;
  let hinh = document.getElementById("hinh").value;

  if(!ten || !kv || !gia || !hinh){
    alert("Nhập đủ thông tin!");
    return;
  }

  ds.push({
    ten: ten,
    khuvuc: kv,
    gia: parseInt(gia.replace(/\./g, "")),
    hinh: hinh
  });

  localStorage.setItem("danhsach", JSON.stringify(ds));
  alert("Đã thêm!");

  load();
}

// xoá sân
function xoa(index){
  if(confirm("Bạn có chắc muốn xoá?")){
    ds.splice(index, 1);
    localStorage.setItem("danhsach", JSON.stringify(ds));
    load();
  }
}

// hiển thị lịch sử
function loadLichSu(){
  const div = document.getElementById("lichsu");
  div.innerHTML = "";

  lichsu.forEach(l=>{
    div.innerHTML += `
      <p>👤 ${l.ten} đặt <b>${l.san}</b> (${l.ngay} ${l.gio})</p>
    `;
  });
}

// chạy
load();
loadLichSu();
// Simpan data user
let users = [
  { username: "admin", password: "password" },
  { username: "user", password: "password" }
];

// Fungsi login
function login(username, password) {
  for (let user of users) {
      if (user.username === username && user.password === password) {
          return true;
      }
  }
  return false;
}

// Fungsi logout
function logout() {
  document.querySelector(".beranda").style.display = "none";
  document.querySelector(".login-form").style.display = "block";
}

// Event listener untuk tombol login
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (login(username, password)) {
      document.querySelector(".login-form").style.display = "none";
      document.querySelector(".beranda").style.display = "block";
      document.getElementById("username-beranda").textContent = username;
  } else {
      alert("Username atau password salah!");
  }
});

// Event listener untuk tombol logout
document.getElementById("logout-btn").addEventListener("click", logout);

// main.js
document.querySelectorAll('.btnDetail').forEach(item => {
  item.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector('.card-img-top').src;
    let harga = parent.querySelector('.harga').innerHTML;
    let judul = parent.querySelector('.card-text').innerHTML;
    let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>Tidak ada informasi yang tersedia</i>';

    let tombolModal = document.querySelector('.btnModal');
    tombolModal.click();

    // Tambahkan kode untuk memperbarui konten modal
    let modalTitle = document.querySelector('.modalTitle');
    modalTitle.innerHTML = judul;

    let modalImage = document.querySelector('.modalImage');
    modalImage.style.backgroundImage = `url(${gambar})`;

    let modalDeskripsi = document.querySelector('.ModalDeskripsi');
    modalDeskripsi.innerHTML = deskripsi;

    let modalHarga = document.querySelector('.ModalHarga');
    modalHarga.innerHTML = `Harga: ${harga}`;

    // Tambahkan kode untuk menampilkan gambar buku yang berbeda-beda
    let modalGambarBuku = document.querySelector('.ModalGambarBuku');
    modalGambarBuku.src = gambar;

    const nohp = '628973948249';
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Bang, Saya mau pesan produk ini ${judul}`;
    document.querySelector('.btnBeli').href = pesan;
  });
});
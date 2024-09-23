// hamburger
// tangkap elemen hamburgernya terlebih dahulu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// berikan event terhadap elemen, ketika elemen di klik
hamburger.addEventListener("click", function () {
  // add : menambahkan kelas pada elemen
  // remove : menghilangkan kelas pada elemen
  // toggle : melakukan keduanya (menambahkan / menghilangkan)
  hamburger.classList.toggle("hamburger-active");
  // muncul / hilangkan kelas hidden ketika fungsi ini dijalankan
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
// jalankan fungsi berikut hanya ketika window dalam keadaan di scroll
window.onscroll = function () {
  // panggil elemen header
  const header = document.querySelector("header");
  // ambil posisi header terhadap ujung atas dari halamannya / jarak dari posisi header terhadap top nya
  const fixedNav = header.offsetTop;

  // Episode 14
  // Element back to top
  const backToTop = document.querySelector("#backToTop");

  // jika scroll yang sedang saya lakukan lebih besar dari fixed-nav(secara default fixedNav akan bernilai 0) / jika jarak antara window dengan fixedNav nya ada selisih
  if (window.scrollY > fixedNav) {
    // tambahkan kelas navbar-fixed kedalam elemen
    header.classList.add("navbar-fixed");

    // tambahkan kelas flex kedalam elemen
    backToTop.classList.add("flex");

    // hilangkan kelas absolute kedalam elemen
    header.classList.remove("absolute");
    // hilangkan kelas hidden kedalam elemen
    backToTop.classList.remove("hidden");
  } else {
    // lakukan kebalikannya untuk kondisi else
    header.classList.remove("navbar-fixed");
    header.classList.add("absolute");

    // lakukan kebalikannya untuk kondisi else
    backToTop.classList.remove("flex");
    backToTop.classList.add("hidden");
  }
};

// Klik di luar hamburger
// ketika apapun dari halaman di klik, kecuali hamburgernya
// ketika elemen manapun yang ada di halaman di klik, jalankan function berikut(yang menerima event sebagai parameternya)
window.addEventListener("click", function (e) {
  // jika yang kita target bukan hamburger dan bukan juga nav menu (jika yang di klik adalah bagian lain selain daripada hamburger dan nav menu)
  if (e.target != hamburger && e.target != navMenu) {
    // hilangkan kelas hamburger-active
    hamburger.classList.remove("hamburger-active");
    // tambahkan kelas hidden
    navMenu.classList.add("hidden");
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const icnLightMode = document.querySelector("#icn-light-mode");
const icnDarkMode = document.querySelector("#icn-dark-mode");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");

    // toggle button dark mode
    icnLightMode.classList.add("hidden");
    icnLightMode.classList.remove("block");
    icnDarkMode.classList.remove("hidden");
    icnDarkMode.classList.add("block");

    // local storage
    // melakukan pengaturan terkait local storage / menyesuaikan 
    localStorage.theme = 'dark';
  } else {
    html.classList.remove("dark");
    
    // toggle button dark mode
    icnLightMode.classList.add("block");
    icnLightMode.classList.remove("hidden");
    icnDarkMode.classList.remove("block");
    icnDarkMode.classList.add("hidden");
    
    // local storage
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  // ketika elemen dark toggle statusnya di checked, jadi ketika di dalam local storage nya kita memilih dark mode, checked nya set jadi true
  darkToggle.checked = true;
} else {
  document.documentElement.classList.remove('dark');
  // ketika kita memilih mode light
  darkToggle.checked = false;
}

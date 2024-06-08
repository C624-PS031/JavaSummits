window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("fixed"); // Tambahkan kelas 'fixed' saat discroll
  } else {
    navbar.classList.remove("fixed"); // Hapus kelas 'fixed' saat tidak discroll
  }
});

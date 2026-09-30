function toggleMenu() {
  const aba = document.getElementById("minha-aba");
  if (aba.style.width === "250px") {
    aba.style.width = "0";
  } else {
    aba.style.width = "250px"; /* Largura da aba aberta */
  }
}
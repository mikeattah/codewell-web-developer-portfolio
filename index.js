function hiddenNavBar() {
  const headerNav = document.getElementById("header-nav");
  const headerBtn = document.getElementById("header-btn");

  if (headerNav.className === "header-nav") {
    headerNav.className += " responsive";
    headerBtn.className += " responsive";
  } else {
    headerNav.className = "header-nav";
    headerBtn.className = "header-btn";
  }
}

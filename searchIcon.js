document.getElementById("search-icon").addEventListener("click", function (e) {
    e.preventDefault();
    const searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("show");

    // Toggle visibility
  if (searchBar.style.display === "none" || !searchBar.style.display) {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
  });

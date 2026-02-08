// =========================
// Sidebar Toggle Logic
// =========================

// Grab elements from the page
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const toggleButton = document.getElementById("menu-toggle");

// When the menu button is clicked:
// - Toggle the sidebar visibility
// - Expand or contract the main content area
toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("expanded");
});

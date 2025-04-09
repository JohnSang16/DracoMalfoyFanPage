function showSidebar() {
    const sidebar = document.querySelector('.sidebar'); // ✅ Correct variable name
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
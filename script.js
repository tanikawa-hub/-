
function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown-container');
  dropdown.style.display =
    dropdown.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling;
    dropdown.classList.toggle('open');
  });
});

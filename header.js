let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    navlist.classList.toggle('open');
}

// Close mobile menu when clicking on a navigation link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('open');
    });
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navlist.contains(e.target)) {
        navlist.classList.remove('open');
    }
});
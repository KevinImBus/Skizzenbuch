
export function navBar() {

    const toggleButton = document.getElementsByClassName("toggleButton")[0];
    const navLinks = document.getElementsByClassName("navLinks")[0];
    const nav = document.getElementsByClassName("nav")[0];
    const footer = document.getElementsByClassName("footer")[0];

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active")
        nav.classList.toggle("active")
        footer.classList.toggle("active")
    });

};
function togglemenu(){
        const menu=document.querySelector(".menu-links");
        const icon=document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");

}
// script.js
document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('dark-mode-toggle');
        const body = document.body;
        
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
    
            // Toggle dark mode for all elements that need it
            document.querySelectorAll('nav, a, .btn, .btn-color-1, .btn-color-2, .menu-links').forEach(element => {
                element.classList.toggle('dark-mode');
            });
        });
    });
    

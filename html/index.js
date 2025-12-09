const togglebutton = document.querySelector('.toggle-theme');

const toggletheme = () => {
    document.body.classList.toggle('dark-theme');
}

togglebutton.addEventListener('click',toggletheme);

console.log('Theme toggle script loaded.');
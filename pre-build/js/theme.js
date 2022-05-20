let choiceTheme = localStorage.getItem('theme');
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const domBody = document.body;
let setMode = prefersTheme ? 'dark' : 'light';

window.onload = () => {
    if (choiceTheme === 'dark') {
        domBody.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        domBody.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
};

const darkActive = () => {
    domBody.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

const darkDeactive = () => {
    domBody.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

window.addEventListener('DOMContentLoaded', () => {

    choiceTheme = localStorage.getItem('theme');
    if (choiceTheme === 'light') {
        darkActive();
    } else {
        darkDeactive();
    }
});
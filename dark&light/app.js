let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// ! steps
// check if the darkmode css is on
// if it on turn it off
// if it is off the turn it on

const enableDarkMode = () => {
    // add the darkmode class
    document.body.classList.add('darkmode');
    // update darkmode to the const: this means the darkmode is enabled on the localstorage 
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
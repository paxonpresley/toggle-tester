const styles = ['red.css', 'blue.css', 'green.css'
];

const swapTheme = document.getElementById('switch-btn');

swapTheme.addEventListener('click', toggleTheme);

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'red.css') {
        theme.setAttribute('href', 'blue.css');
    } else {
        theme.setAttribute('href', 'green.css');
    } 
};

function toggleStyles(styles) {
    var styleArray = 
}
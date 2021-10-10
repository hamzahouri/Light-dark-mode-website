const toggleSwitch = document.querySelector('input[type="checkbox"]');

// swicth theme dynamically
function switchTheme (event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// event listner
toggleSwitch.addEventListener('change', switchTheme)
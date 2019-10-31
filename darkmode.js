const checkbox = document.querySelector('input[name="theme"]');
let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.setAttribute('checked', true);
};

checkbox.addEventListener('change', function() {
    if(this.checked){
        addTransition();
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        addTransition();
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', null);
    }
});


let addTransition = () => {
    /*  - add transition class to html element which applies a transition to
    each element that has its css properties changed 
        - the transition takes about 750ms, remove the class when done  */
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};


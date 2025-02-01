function swapTheme() {
    //write your code
        const app = document.getElementById('app');
        const button = document.getElementById('swap');
    
        if (app.classList.contains('day')) {
            app.classList.remove('day');
            app.classList.add('night');
            button.classList.remove('button_day');
            button.classList.add('button_night');
        } else {
            app.classList.remove('night');
            app.classList.add('day');
            button.classList.remove('button_night');
            button.classList.add('button_day');
        }
    
    }
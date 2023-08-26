const input = document.querySelector(".login-input");
const btn = document.querySelector(".login-submit");
const form = document.querySelector(".login-form");

const validateInput = ({target}) => {
    if(target.value.length > 2){
        btn.removeAttribute('disabled');
        return;
        //return finaliza a função, logo, se não entrar no if(), a função usa o setAttribute em vez do removeAttribute
    };

    btn.setAttribute('disabled', '');
};

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem("player", input.value);
    window.location = 'paginas/game.html'
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
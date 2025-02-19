let but1 = document.getElementById("cam")
let but2 = document.getElementById("noj")
let but3 = document.getElementById("bum")
let res1 = document.getElementById("res")
let h11 = document.getElementById("player")
let h12 = document.getElementById("bot")
let playerscore = 0;
let botscore = 0;
//0 камень
//1 ножницы
//2 бумага
but1.addEventListener("click",()=>{
    let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
    if(rand == 1){
        res1.textContent = "Бот выбрал ножницы, вы победили!"
        playerscore += 1;
        h11.textContent = "Игрок: " + playerscore
    }
    else if(rand == 0){
        res1.textContent = "Бот выбрал камень, ничья!"
    }
    else {
        res1.textContent = "Бот выбрал бумагу, вы проиграли(!"
        botscore += 1;
        h12.textContent = "Компьютер: " + botscore
    }
})
but2.addEventListener("click",()=>{
    let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
    if(rand == 1){
        res1.textContent = "Бот выбрал ножницы, ничья!"
        playerscore += 1;
        h11.textContent = "Игрок: " + playerscore
    }
    else if(rand == 0){
        res1.textContent = "Бот выбрал камень, вы проиграли(!"
        botscore += 1;
        h12.textContent = "Компьютер: " + botscore
    }
    else {
        res1.textContent = "Бот выбрал бумагу, вы победили!"
        playerscore += 1;
        h11.textContent = "Игрок: " + playerscore
    }
})
but3.addEventListener("click",()=>{
    let rand = Math.floor(0 + Math.random() * (2 + 1 - 0));
    if(rand == 1){
        res1.textContent = "Бот выбрал ножницы, вы проиграли(!"
        botscore += 1;
        h12.textContent = "Компьютер: " + botscore
    }
    else if(rand == 0){
        res1.textContent = "Бот выбрал камень, вы победили!"
        playerscore += 1;
        h11.textContent = "Игрок: " + playerscore
    }
    else {
        res1.textContent = "Бот выбрал бумагу, ничья!"
    }
})

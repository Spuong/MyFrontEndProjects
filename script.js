let firstbuttons = document.querySelectorAll("dialog > button.firstbut");
let firstanswer;
console.log(firstbuttons)
firstbuttons.forEach(but =>{
    but.addEventListener("click",() =>{
        document.getElementById("h1").textContent = "Ты все еще самая лучшая у меня)"
        if(but == firstbuttons[0]){
            document.getElementById("h2").textContent = "Хорошо, теперь выбери кино, на которое ты хочешь пойти, или же оставь выбор за мной "
            firstanswer = 0;
        }
        else if(but == firstbuttons[1]){
             document.getElementById("h2").textContent = "В какой парк ты хотела бы пойти? "
             firstanswer = 1;
             
        }
        else if(but == firstbuttons[2]){
            document.getElementById("h2").textContent = "Музей? В для тебя милая, выбирай какой? "
            firstanswer = 2;
            
       }
       else if(but == firstbuttons[3]){
        document.getElementById("h2").textContent = "Выставка это прикольно, на какую хочешь? "
        firstanswer = 3;}
    
        else if(but == firstbuttons[4]){
            document.getElementById("h2").textContent = "Будем культурно образовываться! "
            firstanswer = 4;}
        
        else if(but == firstbuttons[5]){
                document.getElementById("h2").textContent = "В центре вайбово)"
                firstanswer = 5;}  
        for(let i in firstbuttons){
            firstbuttons[i].parentNode.removeChild(firstbuttons[i])
        }
    })
})
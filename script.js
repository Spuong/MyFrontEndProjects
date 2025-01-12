const arr = ["0","1","2","3","4","5","6","7","8","9","a","s","d","f","g",
    "h","j","k","l","z","x","c","v","b","n","m","q","w","e","r","t","y","u","i","o","p",".",",","?","!",":",";","remove","removeall"]
function buttons(){
    for(let i = 0; i<arr.length;i++){
        const but = document.createElement("button")
        const br = document.createElement("br")
        if((i+1) % 10 == 0){
        but.innerHTML = `${arr[i]}`
        document.body.append(but);
        document.body.append(br);
        }
        else{
            but.textContent = `${arr[i]}`
            document.body.append(but);
        }
    }
}
buttons();
let input1 = document.getElementById("out");

const buttonsused = document.querySelectorAll("button")
console.log(buttonsused)

buttonsused.forEach(button1 => {
    button1.addEventListener("click", function(){
        let sim = String(button1.textContent)
        let string = "";
        if(String(button1.textContent) == "remove"){
            input1.value = String(input1.value).slice(0,-1)
        }
        else if(String(button1.textContent) == "removeall"){
            string = " ";
            input1.value = string;
        }
        else{
            string += String(button1.textContent)
            input1.value += string;
        }
    })

})
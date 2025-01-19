
let currentDate = new Date();
let currentMonth = currentDate.getMonth(); // Месяц (0-11)
let currentYear = currentDate.getFullYear(); // Год

const buttonnext = document.getElementById("next")
const buttonprev = document.getElementById("prev")
// Получаем количество дней в текущем месяце
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();



// Получаем элемент списка
const numberList = document.getElementById('numberList');

const arrmonths = ["Январь","Февраль","Март","Апрель","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",]
document.getElementById("hs").textContent = arrmonths[currentDate.getMonth()] + " " + currentDate.getFullYear() ;

console.log(daysInMonth)
buttonnext.addEventListener("click", () =>{
    if(currentMonth == 10){
        currentMonth = 0;
        currentYear = currentYear + 1;
        document.getElementById("hs").textContent = arrmonths[currentMonth] + " " + currentYear ;
        daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    else{
        currentMonth += 1
        document.getElementById("hs").textContent = arrmonths[currentMonth] + " " + currentYear ;
        daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
    }
    document.getElementById('numberList').innerHTML = "";
    asd();
})

buttonprev.addEventListener("click", () =>{
    if(currentMonth == 0){
        currentMonth = 10;
        currentYear = currentYear - 1;
        document.getElementById("hs").textContent = arrmonths[currentMonth] + " " + currentYear ;
        daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    else{
        currentMonth -=1
        document.getElementById("hs").textContent = arrmonths[currentMonth] + " " + currentYear ;
        daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    document.getElementById('numberList').innerHTML = "";
    asd();
})


// Заполняем список числами
function asd(){
for (let day = 1; day <= daysInMonth; day++) {
    const listItem = document.createElement('li');
    if(day == currentDate.getDate()){
        listItem.textContent = day;
        listItem.style.color = "green"
        numberList.appendChild(listItem);
    }
    else{
        listItem.textContent = day;
        numberList.appendChild(listItem); // Добавляем элемент в список
    }
}
}
asd();

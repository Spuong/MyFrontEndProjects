// square
document.getElementById("squarearc").addEventListener("click",()=>{
    document.getElementById("squareres").textContent = `Результат: Площадь квадрата равна 
    ${parseInt(document.getElementById("square").value) * parseInt(document.getElementById("square").value)}`
})

document.getElementById("squareper").addEventListener("click",()=>{
    document.getElementById("squareres").textContent = `Результат: Периметр квадрата равен  ${parseInt(document.getElementById("square").value) * 4}`
})

//rectangle

document.getElementById("rectangleper").addEventListener("click",()=>{
    document.getElementById("rectangleres").textContent = `Результат: Периметр прямоугольника равен  ${parseInt(document.getElementById("rectangle1").value) * 2 + parseInt(document.getElementById("rectangle1").value) * 2 }`
})

document.getElementById("rectanglearc").addEventListener("click",()=>{
    document.getElementById("rectangleres").textContent = `Результат: Площадь прямоугольника равна  ${parseInt(document.getElementById("rectangle1").value) * parseInt(document.getElementById("rectangle2").value)}`
})

///circle

document.getElementById("circledlina").addEventListener("click",()=>{
    document.getElementById("circleres").textContent = `Результат: Длина окружности равна ${ 2 * 3.14 * parseInt(document.getElementById("circle").value)}`
})

document.getElementById("circlearc").addEventListener("click",()=>{
    document.getElementById("circleres").textContent = `Результат: Площадь круга равна  ${Math.floor(parseInt(document.getElementById("circle").value) * parseInt(document.getElementById("circle").value) * 3.14)}`
})

//treangle
document.getElementById("treangleper").addEventListener("click",()=>{
    document.getElementById("treangleres").textContent = `Результат: Периметр треугольника равен ${parseInt(document.getElementById("treangle1").value) + parseInt(document.getElementById("treangle2").value)+ parseInt(document.getElementById("treangle3").value)}`
})

document.getElementById("treanglearc").addEventListener("click",()=>{
    const st1 = parseInt(document.getElementById("treangle1").value)
    const st2 = parseInt(document.getElementById("treangle2").value)
    const st3 = parseInt(document.getElementById("treangle3").value)
    const per = st1 + st2 + st3
    document.getElementById("treangleres").textContent = `Результат: Площадь треугольника равна ${Math.floor(Math.sqrt(per*(per-st1)*(per-st2)*(per-st3)))}`
})

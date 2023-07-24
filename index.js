// const selector = document.querySelector("#valued")
// // console.log(typeof selector.innerText)
// const button3 = document.querySelector("#increase")

// const button1 = document.querySelector("#decrease")
// // console.log(typeof button.innerText)

// const button2 = document.querySelector("#reset")




//chnging string value to number
// let num = Number(selector.innerText)
// console.log(typeof num)

// button3.addEventListener("click",()=>{
//     if(num==0){
//         valued.innerText++
//         valued.style.color="green"
//     }
// })

// button1.addEventListener("click",()=>{
//     if(num==0){
//         valued.innerText--
//         valued.style.color="red"
//     }
// })

// button2.addEventListener("click",()=>{
//     if(num==0){
//         valued.innerText=0
//         valued.style.color="black"
//     }
// })

// for (let i=0;i<button2.length;i++){
//     function loop (){
//         if(button2 === "0"){
//             return button2[i]++
//         }
//     }
// }
// button2.addEventListener("click",loop)




// const result = document.querySelector(".value")
// // console.log(result)
// const btns = document.querySelectorAll(".btn")
// // console.log(btns)

// for(let i=0; i<btns.length; i++){

// // let value = 0
//     btns[i].addEventListener("click",(e)=>{
//         // console.log(e.target)
//         if(e.target.classList.contains("increase")){
//             // console.log("akash")         
//             result.innerText++
//         }
//         if(e.target.classList.contains("decrease")){
//         //    console.log("decrease")
//             result.innerText--
//         }
//         if(e.target.classList.contains("reset")){
//             // console.log("reset")
//             result.innerText=0
//         }
//         if(result.innerText > "0"){
//             result.style.color= "green"

//         }
//         if(result.innerText === String(0)){
//             result.style.color= "black"

//         }
//         if(result.innerText < "0"){
//             result.style.color= "red"

//         }
//     })
//     }
    // console.log(typeof result.innerText)


// const select = document.querySelector(".value");

// const selecting = document.querySelectorAll(".btn")

// for(let i=0;i<selecting.length;i++){

// selecting[i].addEventListener("click",(e)=>{
    
//     if(e.target.classList.contains("increase")){
//         select.innerText++;
//     }
//     else if(e.target.classList.contains("decrease")){
//         select.innerText--;
//     }
//     else if(e.target.classList.contains("reset")){
//         select.innerText=0;
//     }
//     if(select.innerText > "0"){
//         select.style.color = "green";
//     }
//     else if(select.innerText<"0"){
//         select.style.color="red"
//     }
//     else if(select.innerText = String(0)){
//         select.style.color="black"
//     }
// })

// }

const number = document.querySelector(".value")
// console.log(number)
const btns = document.querySelectorAll(".btn")
// console.log(btns)

for(let i=0;i<btns.length; i++){
    btns[i].addEventListener("click",(e)=>{
        if(e.target.classList.contains("increase")){
            number.innerText++;
        }
        else if(e.target.classList.contains("decrease")){
            number.innerText--;
        }
        else if(e.target.classList.contains("reset")){
            number.innerText = "0";
        }
        if (number.innerText > "0"){
            number.style.color="green"
        }
        else if(number.innerText < "0"){
            number.style.color="red"
        }
        else if(number.innerText = String(0)){
            number.style.color="black"
        }
    })
}
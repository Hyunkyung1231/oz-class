const todaySpan = document.querySelector("#today")
const numberDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

let now = new Date()

let year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()

todaySpan.textContent = `${year}년 ${month}월 ${day}일 로또 추첨`



let lottonumbers = [];

drawButton.addEventListener("click", drawNembers)

function drawNembers (){
    while(lottonumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1

        if (lottonumbers.indexOf(rn) === -1){
            lottonumbers.push(rn);
            const p = document.createElement("p")
            p.textContent = rn;
            numberDiv.append(p)
        }
        
    }
}


resetButton.addEventListener("click", function(){
    lottonumbers.splice(0,6)
    numberDiv.innerHTML= ""

})





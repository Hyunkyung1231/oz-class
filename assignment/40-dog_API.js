// 이미지 얻는 서버 https://dog.ceo/api/breeds/image/random/42
// 견종 얻는 주소 https://dog.ceo/api/breeds/list/all

const apiRandomDog = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")

const currentDogs = []

function displayDogs(item){
    const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item") 
    dogImgDiv.innerHTML = `
    <img src=${item}>
    `
    main.appendChild(dogImgDiv)
}

// 갱얼지 42마리 요청
window.addEventListener("load", function(){
    request1.open("get", apiRandomDog)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
    })
    request1.send()

// 견종에 대한 요청
    request2.open("get", apiAllBreeds)
    request2.addEventListener("load",function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        })
    })

    request2.send()

})

//필터링 작업 - 검색
button.addEventListener("click", function(){
    main.innerHTML = ""
    let filterdDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    })

    input.value = ""

    filterdDogs.forEach(function(item){
        displayDogs(item)
    })
})


//필터링 작업 - 옵션에서 골랐을때
select.addEventListener("change", function(){
    main.innerHTML = ""
    let filterdDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
    })

    filterdDogs.forEach(function(item){
        displayDogs(item)
    })
})


//more와 tothetop버튼
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")


more.addEventListener("click", function(){
    request1.open("get", apiRandomDog)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
            })
})
request1.send()

})

tothetop.addEventListener("click", function(){
    window.scrollTo({ top : 0 })
    // scrollTo : 주어진 위치소 스크롤을 이동한다...!
})
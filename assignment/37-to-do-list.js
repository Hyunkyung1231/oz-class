const todoList = document.getElementById("todo-list")
const todoForm = document.getElementById("todo-form")
let todoArr = [];

//로컬저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}

//로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos)
        displayTodos()
        }
}
loadTodos()


//할일 삭제하기
    function handleTodoDelBtnClick (clickedId){
       todoArr = todoArr.filter(function(aTodo){
            return aTodo.todoId !== clickedId
        })
        displayTodos()
        saveTodos()
    }


//할일 보여주기
function displayTodos(){
    todoList.innerHTML = ""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement("li")
        const tododelBtn = document.createElement("span")

        tododelBtn.textContent = "X"
        todoItem.textContent = aTodo.todoText

        todoItem.title = "클릭하면 완료됨"
        tododelBtn.title = "클릭하면 삭제"

        if(aTodo.todoDone){
            todoItem.classList.add("done")
        }else {
            todoItem.classList.add("yet")
        }

        todoList.appendChild(todoItem)
        todoItem.appendChild(tododelBtn)

        tododelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })
        

    })
}

//할일 추가하기
todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const toBeAdded = {
        todoText : todoForm.todo.value,
        todoId : new Date().getTime(),
        todoDone : false
    }
    todoForm.todo.value = ""
    todoArr.push(toBeAdded)
    console.log(todoArr)
    displayTodos()
    saveTodos()

})



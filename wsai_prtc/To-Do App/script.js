// It ensures that the script id loaded after all the html content/DOM content are loaded (doesn't wait for images and all but the contents)
document.addEventListener
("DOMContentLoaded", () => {
    //Step1: selection/accessing of element
    const taskInput = document.getElementById("new-task")
    const addTaskBtn = document.getElementById("add-task-button")
    const apiUrl = "https://jsonplaceholder.typicode.com/todos"
    const taskList = document.getElementById("task-list")

    // Step2: Event listener to add an element
    addTaskBtn.addEventListener("click", () => {
        let taskText = taskInput.value.trim()       //  trim removes the last and start space/s from the content
        // console.log(taskText);
        // guard block
        if(taskText !== "") {
            addTask(taskText)
            taskInput.value = ""
        }
    })
    // addTaskBtn.addEventListener("click", function () {
    //     let taskText = taskInput.value
    // })

    // function to add that element
    function addTask(taskText) {
        const newTask = {title: taskText,
            completed: false
        }
        // fetch is fetching the data using api url
        // since fetch is an async function, it will return a promise
        fetch(apiUrl, {
            method: "POST", // Create of CRUD
            headers: {
                "Content-Type": "application/json",     //  means they are accepting the json format
            },
            body: JSON.stringify(newTask)       // JSON: js object notation ~string~
        }
        // this part is adding data to the database
    )
        .then(response => response.json())
        .then(task => {console.log(task)
            displayTask(task.title, task.id)
        })                   //  this json format also returns a promise, which we will have to handle            // then with the 'response' or any keyword we will handle the promise returened
        .catch((error) => console.error("Failed during task", error))
        // API URL + Data   ----------------->    Updated Data
    }

    // add function
    function displayTask(title, id) {
        const li = document.createElement('li')
        li.setAttribute("data-id", id)

        const span = document.createElement('span')
        span.textContent = title

        const editBtn = document.createElement('button')
        editBtn.setAttribute("class", "edit-btn")
        editBtn.textContent = 'Edit'
        // editBtn.addEventListener("click", () => editTask(id, span))
        editBtn.addEventListener("click", () => editTask(id, span))

        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute("class", "delete-btn")
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => deleteTask(id, li))

        li.appendChild(span)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)

        taskList.appendChild(li)
    }

    function editTask(id, span) {
        // let newText = prompt('Edit your task', title)
        let newText = prompt('Edit your task', span.textContent)
        if(newText !== null && newText !== "") {
            const updateTask = {
                title: newText,
                completed: false
            }
            fetch(`${apiUrl}/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateTask)
            }).then(response => {
                console.log(response)
                if (response.ok === false) {
                    throw new Error("Failed to edit")
                }
                return response.json()
            }).then(() => {
                span.textContent = newText
            }).catch(error => console.error("error in editing task", error))
        }

        // we doing all this fetch operation because we need to update the databasea to, else it will be updated only here
    }

    function deleteTask(id, li) {
        let deleteTaskItem = document.querySelectorAll('li')
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        }).then(response => {
            console.log(response)
            if (response.ok === true) {
                taskList.removeChild(li)
            } else {
                throw new Error("Failed to delete")
            }
        }).catch(error => console.error("error in deleting task", error))
    }
})

// let pragraphs = document.querySelectorAll("p")
//             console.log(pragraphs)
//             if (pragraphs.length > 0) {
//                 document.body.removeChild(pragraphs[pragraphs.length - 1])
//             }

// {
//     document.li.re
// }
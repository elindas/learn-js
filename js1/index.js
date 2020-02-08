

// const submitForm = event => {
//     event.preventDefault()
// }
/*
function submitForm(event) {
    event.preventDefault()

    const firstNameValue = document.getElementById("firstName").value
    const lastNameValue = document.getElementById("lastName").value

    // console.log(firstNameValue);
    // console.log(lastNameValue);

    const registerData = {
        firstName: firstNameValue,
        lastName: lastNameValue
    }
    //simpan object jadi JSON di localStorage
    localStorage.setItem("registerData", JSON.stringify(registerData))


    // memunculkan welcome+ nama, parsing object registerDataataUser ke getDataUser, munculkan nama dg key getDataUser.firstname
    const getDataUser = JSON.parse(localStorage.getItem("registerData"))
    // console.log(getDataUser);

    let addName = document.getElementById('welcome')
    addName.innerText = `Welcome ${getDataUser.firstName}`
}


const deleteData = () => {
    localStorage.removeItem('registerData')
    // localStorage.clear
}
*/
const get = () => {
    const todos = localStorage.getItem("todos")

    if (todos !== null) {
        return JSON.parse(todos)
    } else {
        localStorage.setItem("todos", "[]")
        return []
    }
}

const set = todos => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const templateTodos = (index, todo) => {
    if (todo.text === null) {
        todo.text = "[false]"
    } else {
        return `<span id=todo-${index} class="todo">
        ${todo.text}</span>
        <span id="destroy-${index}" class="delete" onclick="destroy(event)">X</span>`
    }
}


const addTodo = event => {
    event.preventDefault()

    const todos = get()
    const text = document.getElementById("todos").value

    if (text) {
        todos.push({ text: text })
    } else {
        alert("Your input is empty")
    }
}

const showTodo = (todos = get()) => {
    const listTodos = document.getElementById("output-todos")
    listTodos.innerHTML= ""

    todos.forEach((todo, index) => {
        const element = document.createElement("div")
        element.innerHTML = templateTodos(index, todo)

        listTodos.append(element)
    });
}

const destroy = event => {
    if (event.target.matches(".delete")) {
        const id = event.target.id.replace("destroy-", "")
        const todos = get()
        
        todos.splice(id, 1)
        set(todos)
        showTodo()
    }    

}

const edit = event => {
    if (event.target.matches(".todo")) {
        const id = event.target.id.replace("todo-", "")
        const todos = get()
        const text = prompt(`Update Todo: ${todos[id].text}`)
        
        if (text) {
            todos[id] = { text: text }
            
        }


        todos.splice(id, 1)
        set(todos)
        showTodo()
    } 
}








/*
function register() {
    // di html typenya sebaiknya button, onclick= "register()"
    let name= document.getElementById("exampleInputName").value
    let email = document.getElementById("exampleInputEmail").value
    let password = document.getElementById("exampleInputpassword").value

    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("Password", password)

    let successMessage= alert("Registrasi sukses")
}


function login() {
    // type nya sebaiknya button,,, onclick= "login()"
    let email = document.getElementById("exampleInputEmail").value
    let password = document.getElementById("exampleInputpassword").value

    let emailRegistered = localStorage.getItem('Email')
    let passwordRegistered = localStorage.getItem('Password')


    // console.log('kepanggil');
    if (email === emailRegistered && password === passwordRegistered) {
        // console.log('Login sukses');
        let successMessage = alert('login sukse')
        window.location= '#'
    } else {
        // let errorMesage= alert('login gagal')
        document.getElementById('error-message').innerHTML = 'Login gagal'
        // di html kasih elemen misal <p></p> dengan id error-message
    }
}

function logout() {
    localStorage.removeItem('Name')
    localStorage.removeItem('Email')
    localStorage.removeItem('Password')

    let successMessage= alert('logout sukses')

    window.location= 'index.html'

}
*/


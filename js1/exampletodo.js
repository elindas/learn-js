
const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

// -----------------------------------------------------------------------------

const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        // console.log(`[${index + 1}] ${item}`)

        return `[${index + 1}] ${item}`
    }
}

// -----------------------------------------------------------------------------

const searchTodos = (data, textToSearch) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItem = item.toLowerCase()
        const lowerCasedText = textToSearch.toLowerCase()

        if (lowerCasedItem.includes(lowerCasedText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

// -----------------------------------------------------------------------------

showTodos(todos)

// -----------------------------------------------------------------------------

const textInput = prompt('What todo do you want to search?')
const foundTodos = searchTodos(todos, textInput)

// showTodos(foundTodos)

// jika ditampilkan di element html
window.console = {
    log: function (str) {
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").appendChild(node);
    }
}
console.log(showTodos(foundTodos));


// function countBMI(event) {
    
//     let bodyWeight = document.getElementById('body-weight').value
    
//     let bodyHeight = document.getElementById('body-height').value

//     document.getElementById
// }
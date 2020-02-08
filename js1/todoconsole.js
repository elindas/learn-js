// Show Todo Texts
const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        console.log(`[${index + 1}] ${item}`)
    }
}

console.log(showTodos(todos));
console.log('=======================');
//Search Todo Texts
// const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

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

// CALL search todo
const foundTodos = searchTodos(todos, 'run') // ['Run around the city']
console.log(showTodos(foundTodos));
console.log('============================');



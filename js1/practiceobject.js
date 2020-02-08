// SHOW NAMES
// Experiments to store people's names
const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

// Experiments to manage the names
const showNames = names => {
    // loop over the names array
    for (let index = 0; index < names.length; index++) {
        // name and names are different
        const name = names[index]

        // log the name and index at the same time
        console.log(`[${index + 1}] ${name}`)
    }
}

// execute or call the function
console.log(showNames(names))
console.log('===========================================');
// FILTER NAMES

const filterNames = (names, minimumLength) => {
    let newNames = []

    for (let index = 0; index < names.length; index++) {
        const name = names[index]

        if (name.length >= minimumLength) {
            newNames.push(name)
        }
    }

    // return the filtered names
    return newNames
}

// filteredNames and filterNames are different
const filteredNames = filterNames(names, 12) // [ 'Alpha Avalon', 'Gamma Gacurio' ]

console.log(showNames(filteredNames));
console.log('==================================');
// ARRAY OF OBJECTS
const myContacts = [
    {
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    },
    {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    },
    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev'
    }
]
// SHOW CONTACTS function
const showContacts = contacts => {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]
        console.log(
            `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
        )
    }
}
// call show contacts  
console.log(showContacts(myContacts));
console.log('===============================');
// Filter contact
const filterContacts = (contacts, minimumNameLength) => {
    let newContacts = []

    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]

        if (contact.name.length >= minimumNameLength) {
            newContacts.push(contact)
        }
    }

    return newContacts
}
// call filter contacts
const filteredContacts = filterContacts(myContacts, 12)
console.log(showContacts(filteredContacts));


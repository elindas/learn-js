// // ajax

// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/herdanuyp");

// xhr.send();

// xhr.onload = function () {
//     if (xhr.status != 200) {
//         // analyze HTTP status of the response
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//     } else {
//         // show the result
//         // alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
//         const data = JSON.parse(xhr.response)
//         const name = document.getElementById("welcome")
//         name.innerText = data.login;


//         const profileImage = document.getElementById('image')
//         const image = document.createElement("img")
//         image.setAttribute("src", data.avatar_url);

//         profileImage.appendChild(image)
//     }
// };

// FETCH

fetch("https://api.github.com/users/herdanuyp")
    .then(response => {
        return response.json()
    })
    .then(result => {
        const name = document.getElementById("welcome")
        name.innerText = result.login;

        const profileImage = document.getElementById('image')
        const image = document.createElement("img")
        image.setAttribute("src", result.avatar_url);

        profileImage.appendChild(image)
    })


const fetchData = async () => {
    const response = await fetch("https://api.github.com/users");

    const datas = await response.json()

    const list = document.getElementById("list-person")
    datas.forEach((data, index) => {
        const person = document.createElement("p")
        person.innerText = data.login
        list.appendChild(person);
    });

}

fetchData();
const people = []



// people.forEach((x, index) => {
//     document.getElementById('newUserTable').innerHTML += `<li class="list-item" data-index=${index}>'` + x.firstName + ' ' + x.lastName + ' ' + x.age + `<button class="update" onclick="updateBtn(${index})">Update</button>` + `<button class="delete" id="delete" onclick="deleteBtn()" + >Delete</button> ` + '</li>';
// })


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function addUser() {

    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let age = document.getElementById('age')
    let id = random(1, 100)
    let userPush = {
        "id": id,
        "firstName": firstName.value,
        "lastName": lastName.value,
        "age": age.value
    }
    people.push(userPush);
    // let pers = people.filter((person) => person.id == userPush.id)



    // console.log("inde", index)
    document.getElementById("newUserTable").innerHTML += `<li class="list-item" data-index=${userPush.id}>${userPush.firstName} ${userPush.lastName} ${userPush.age} <button class="update" onclick="updateBtn(${userPush.id})">Update</button>  
        <button class="delete" id="delete" onclick="deleteBtn()">Delete</button> </li>`;
    firstName.value = ""
    lastName.value = ""
    age.value = ""

}

function deleteBtn() {
    let elem = document.getElementById("delete");
    elem.parentNode.remove(elem);
    return false;
}

function updateBtn(id) {
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let age = document.getElementById('age')

    let peop = people.filter((val) => val.id === id)
        // console.log(peop[0])
        // console.log(people)

    firstName.value = peop[0].firstName
    lastName.value = peop[0].lastName
    age.value = peop[0].age

    let userTable = document.querySelectorAll(".list-item")
    userTable.forEach(el => {
        if (el.dataset.index == id) {
            el.remove()
        }
    })

    let uptbtn = document.getElementById("uptBtn")
    uptbtn.classList.add("show")
    uptbtn.classList.remove("dnone")
    uptbtn.dataset.id = id

    let removeBtn = document.getElementById("button")
    removeBtn.classList.add("dnone")
    removeBtn.dataset.id = id

}

function userUpdate(e) {
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let age = document.getElementById('age')
    let id = e.target.dataset.id

    people.map(val => {
        if (val.id == id) {
            val.firstName = firstName.value
            val.lastName = lastName.value
            val.age = age.value
            return val
        }
    })

    let userTable = document.querySelectorAll(".list-item")
    userTable.forEach(el => {
        if (el.dataset.index == id) {
            el.innerText = firstName.value + " " + lastName.value + " " + "yaşı:" + age.value
        }
    })

    let uptbtn = document.getElementById("uptBtn")
    uptbtn.classList.add("dnone")
    uptbtn.classList.remove("show")
    uptbtn.dataset.id = id

    let removeBtn = document.getElementById("button")
    removeBtn.classList.remove("dnone")
    removeBtn.dataset.id = id
}

let uptbtn = document.getElementById("uptBtn")
uptbtn.addEventListener('click', (e) => {
    console.log("eee", e)
    userUpdate(e)
})
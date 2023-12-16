// let pr
// let form = document.getElementById("form");
// let Name = document.getElementById("name");
// let Surname = document.getElementById("surname");
// let Email = document.getElementById("mail");
// let getForm = document.getElementById("getForm")
// let Name1 = document.getElementById("name1");
// let Surname1 = document.getElementById("surname1");
// let Email1 = document.getElementById("mail1");

// let form1 = document.getElementById("form1")


// async function formPost(event) {
//     event.preventDefault();

//     try {
//         let users = {
//             name: Name.value,
//             surname: Surname.value,
//             email: Email.value
//         };

//         const response = await axios.post('https://655e4b479f1e1093c59add07.mockapi.io/users/', users);
//         getData()


//         console.log('Başarıyla gönderildi:', response.data);
//     } catch (error) {
//         console.error('Gönderme işlemi sırasında bir hata oluştu:', error.message);
//     }
// }

// form.addEventListener('submit', formPost);

// /////////////////////////
// let userID = document.getElementById("id")
// let idValue = userID.value
// async function formPatch(event, idValue) {
//     event.preventDefault();

//     try {
      

//         const response = await axios.patch(`https://655e4b479f1e1093c59add07.mockapi.io/users/${idValue}`, {
//             name: Name1.value,
//             surname: Surname1.value,
//             email: Email1.value

//         });
//         getData();

//         console.log('Başarıyla güncellendi:', response.data);
//     } catch (error) {
//         console.error('Güncelleme işlemi sırasında bir hata oluştu:', error.message);
//     }
// }
// form1.addEventListener("submit", formPatch)


// function getData() {
//     axios.get(`https://655e4b479f1e1093c59add07.mockapi.io/users`)
//         .then(res => {

//             pr = res.data
//             getForm.innerHTML = ""
//             console.log(pr);
//             pr.forEach(user => {
//                 let cardBox = document.createElement("div")
//                 cardBox.className = 'getCart'
//                 cardBox.innerHTML = `   
                

//                         <p>name:${user.name} </p>
//                         <p>surname:${user.surname} </p>
//                         <p>email: ${user.email}</p>
//                         <p>id: ${user.id}</p>
//                         <button onclick="sil(${user.id})">sil</button>


//                 `
//                 getForm.appendChild(cardBox)
//             });

//         })
// }

// async function sil(id) {
//     try {
//         await axios.delete(`https://655e4b479f1e1093c59add07.mockapi.io/users/${id}`);
//         getData();
//     } catch (error) {
//         console.error('Error deleting data:', error);
//     }
// }

// getData()










let pr;
let form = document.getElementById("form");
let Name = document.getElementById("name");
let Surname = document.getElementById("surname");
let Email = document.getElementById("mail");
let getForm = document.getElementById("getForm");
let Name1 = document.getElementById("name1");
let Surname1 = document.getElementById("surname1");
let Email1 = document.getElementById("mail1");

let form1 = document.getElementById("form1");

async function formPost(event) {
    event.preventDefault();

    try {
        let users = {
            name: Name.value,
            surname: Surname.value,
            email: Email.value,
        };

        const response = await axios.post(
            "https://655e4b479f1e1093c59add07.mockapi.io/users/",
            users
        );
        getData();

        console.log("Başarıyla gönderildi:", response.data);
    } catch (error) {
        console.error("Gönderme işlemi sırasında bir hata oluştu:", error.message);
    }
}

form.addEventListener("submit", formPost);

/////////////////////////

async function formPatch(event) {
    event.preventDefault();

    try {
        let userID = document.getElementById("id");
        let idValue = userID.value;

        const response = await axios.patch(
            `https://655e4b479f1e1093c59add07.mockapi.io/users/${idValue}`,
            {
                name: Name1.value,
                surname: Surname1.value,
                email: Email1.value,
            }
        );
        getData();

        console.log("Başarıyla güncellendi:", response.data);
    } catch (error) {
        console.error("Güncelleme işlemi sırasında bir hata oluştu:", error.message);
    }
}

form1.addEventListener("submit", formPatch);

function getData() {
    axios.get(`https://655e4b479f1e1093c59add07.mockapi.io/users`).then((res) => {
        pr = res.data;
        getForm.innerHTML = "";
        console.log(pr);
        pr.forEach((user) => {
            let cardBox = document.createElement("div");
            cardBox.className = "getCart";
            cardBox.innerHTML = `
                <p>name:${user.name} </p>
                <p>surname:${user.surname} </p>
                <p>email: ${user.email}</p>
                <p>id: ${user.id}</p>
                <button onclick="sil(${user.id})">sil</button>
            `;
            getForm.appendChild(cardBox);
        });
    });
}

async function sil(id) {
    try {
        await axios.delete(`https://655e4b479f1e1093c59add07.mockapi.io/users/${id}`);
        getData();
    } catch (error) {
        console.error("Veri silme hatası:", error);
    }
}

getData();

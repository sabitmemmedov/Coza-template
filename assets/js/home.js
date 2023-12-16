let productsDiv = document.getElementById("products")
let pr 
let limit = 3
let page = 1

let inpAx = document.getElementById("inpAx")
let btnAx = document.getElementById("btnAx")


function getData() {
    let skip = (page-1)*limit
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products?limit=${limit}&page=${page}&skip=${skip}`)
    .then(res =>{
        pr = res.data
        pr.forEach(product => {
            let productDiv = document.createElement("div")
            productDiv.className = "cardBox"
            productDiv.innerHTML = `
            <div class="imgDiv">
            <img src=${product.avatar} alt="">
            </div>
            <div class="textDiv">
            <div class="textDivv">
                <p>${product.name} </p> <button onclick="postApi(${product.id})"><i
                        class="fa-solid fa-cart-shopping"></i>Ad Cart</button>
            </div>
            <span>$ ${product.price}</span>
            </div>




            `
            productsDiv.appendChild(productDiv)
        });
        page++
    })
}

async function postApi(id) {
    let datalar = []
    datalar.push(pr.find(product => product.id == id))
    await axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`, datalar)
}

document.getElementById('loadMore').addEventListener("click",getData)    

getData()


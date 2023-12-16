let productsDiv = document.getElementById("products")
let pr 


function getData() {
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
    .then(res =>{
        pr = res.data
        productsDiv.innerHTML = ''
        pr.forEach(product => {
            let productDiv = document.createElement("div")
            productDiv.className = "cardBox"
            productDiv.innerHTML = `
            <div class="imgDiv">
            <img src=${product["0"].avatar} alt="">
        </div>
        <div class="textDiv">
            <div class="textDivv">
                <p>${product["0"].name} </p> 
                <button onclick="sil(${product.id})">Remove Cart</button>
            </div>
            <span>$${product["0"].price} </span>
        </div>









            
            `
            productsDiv.appendChild(productDiv)
        });
    })
}


async function sil(id) {
    try {
        await axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`);
        getData();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}



    getData();


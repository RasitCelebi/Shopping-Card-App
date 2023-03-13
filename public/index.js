
const products = [
    {
        id: 0,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/0a6753bc44bc636a_1024x1024@2x.jpg?v=1622798607' ,
        title: 'GİYİLEBİLİR DÖVME TATTOO SLEEVES',
        price: 100
    },

    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/a74907e725-2904_1024x1024@2x.jpg?v=1622799292' ,
        title: '6 GÖZLÜ PRATİK ÇANTA ORGANİZER',
        price: 200
    },

    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/d197dd1872aaf505_1024x1024@2x.jpg?v=1643968718' ,
        title: 'GEYİK TASARIMLI TAKI, MÜCEVHER STANDI',
        price: 300
    },

    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/c0ff25fffc46c767_1024x1024@2x.jpg?v=1622799071' ,
        title: 'AKILLI TELEFONLARLA UYUMLU SERİNLETİCİ FAN',
        price: 400
    },

    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/58be763fba-415_1024x1024@2x.jpg?v=1625232265' ,
        title: 'IŞIKLI KİTAP AYRACI',
        price: 500
    },

    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/79a56a7dbfe0022a_1024x1024@2x.jpg?v=1622798894' ,
        title: 'DELİK KOVA GÖRÜNÜMLÜ KALEMLİK',
        price: 600
    },

    {
        id: 6,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/4295fcb7ff-1729_1024x1024@2x.jpg?v=1622798630' ,
        title: 'BALANS BİLYE',
        price: 700
    },

    {
        id: 7,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/860d5e617048eae0_1024x1024@2x.jpg?v=1618823650' ,
        title: 'LED IŞIKLI KİTAP OKUMA GÖZLÜĞÜ',
        price: 800
    },

    {
        id: 8,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/e86b447a7eb55931_1024x1024@2x.jpg?v=1622799574' ,
        title: 'DOĞAL KÜTÜK BARDAK ALTLIĞI (6 ADET)',
        price: 900
    },

    {
        id: 9,
        image: 'https://cdn.shopify.com/s/files/1/0557/8414/5067/products/41e56e2925a94e30_1024x1024@2x.jpg?v=1622799129' ,
        title: 'EVCİL HAYVAN TÜY TOPLAMA ELDİVENİ',
        price: 1000
    }
]

let addCartButton = document.querySelectorAll(".button-primary");
let itemCount = document.querySelector("#count");
let cardContainer = document.querySelector("#cardContainer");
let selectedCardContainer = document.querySelector("#selectedCardContainer");
let itemContainer = document.querySelector("#itemContainer");
let delAllItem = document.querySelector("#delAllItem");

let userForm = document.querySelector("#userForm");
let score = document.querySelector("#score");
userForm.addEventListener("submit", searchCart);



let card = document.querySelectorAll(".card");
let selectedItemCount = 0;

products.forEach((item, index) => {
     card[index].querySelector('img').src = item.image;
     card[index].querySelector('div h2').textContent= item.title;
     card[index].querySelectorAll('div div span')[2].textContent= "₺ " + item.price + ".00";
     let x = parseInt(item.price, 10);
     card[index].querySelectorAll('div div span')[3].textContent= "₺ " + (x*1.25) + ".00";
});

cardContainer.addEventListener("click", toggleShoppingCard);
delAllItem.addEventListener("click", delAllElement);


function toggleShoppingCard(e) {
    selectedCardContainer.classList.toggle('hidden');
    selectedCardContainer.classList.toggle('flex');
    itemContainer.classList.toggle('w-[100%]');
    itemContainer.classList.toggle('w-[65%]');
};

let i = 0;

addCartButton.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        selectedItemCount++;
        itemCount.textContent = selectedItemCount;
        addtocart(index)

    });
});

const categories = [...new Set(products.map((item) => { return item }))]

/* document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('') */

let cart = [];

function addtocart(a) {
    cart.unshift({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();

}

function delAllElement () {
    cart.splice(0, cart.length);
    displaycart();

}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        //toggleShoppingCard();
    }
    else {

        let parentElement = document.querySelector("#cartItem");
        parentElement.textContent = "";

        cart.map((items) => {
            let { image, title, price } = items;
            total = total + price;

            let classAttrCardItem = document.createAttribute('class');
            let classAttrRowImg = document.createAttribute('class');
            let classAttrRowImgChild = document.createAttribute('class');
            let classAttrIcon = document.createAttribute('class');

            let srcAttrRowImgChild = document.createAttribute('src');

            let styleAttrP = document.createAttribute('style');
            let styleAttrH2 = document.createAttribute('style');

            let onClickAttrIcon = document.createAttribute('onclick');

            let newDivElementCardItem = document.createElement('div');
            let newDivElementRowImg = document.createElement('div');

            let newImgElement = document.createElement('img');
            let newPElement = document.createElement('p');
            let newH2Element = document.createElement('h2');
            let newIElementRowImg = document.createElement('i');

            classAttrCardItem.value = "cart-item"; // +
            classAttrRowImg.value = "row-img";
            classAttrRowImgChild.value = "rowimg";
            classAttrIcon.value = "fa-solid fa-trash";

            srcAttrRowImgChild.value = image;

            styleAttrP.value = "font-size: 12px;";
            styleAttrH2.value = "font-size: 15px;";

            onClickAttrIcon.value = "delElement(" + (j++) + ")";

            newDivElementCardItem.setAttributeNode(classAttrCardItem);
            newDivElementRowImg.setAttributeNode(classAttrRowImg);
            newImgElement.setAttributeNode(classAttrRowImgChild);
            newImgElement.setAttributeNode(srcAttrRowImgChild);
            newDivElementCardItem.setAttributeNode(classAttrCardItem);

            newPElement.setAttributeNode(styleAttrP);
            newH2Element.setAttributeNode(styleAttrH2);
            newIElementRowImg.setAttributeNode(onClickAttrIcon);
            newIElementRowImg.setAttributeNode(classAttrIcon);
            //total = total + cart[0].price;
            document.getElementById("total").textContent = "₺ " + total + ".00";
            newPElement.textContent = title;
            newH2Element.textContent = "₺ " + price + ".00";

            newDivElementRowImg.appendChild(newImgElement);

            newDivElementCardItem.appendChild(newDivElementRowImg);
            newDivElementCardItem.appendChild(newPElement);
            newDivElementCardItem.appendChild(newH2Element);
            newDivElementCardItem.appendChild(newIElementRowImg);

            parentElement.appendChild(newDivElementCardItem);
        });


        /* document.getElementById("cartItem").innerHTML = cart.map((items) => {
            let { image, title, price } = items;
            total = total + price;
            document.getElementById("total").textContent = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join(''); */

    }
}

function searchCart(event){
    event.preventDefault();
    console.log("a");

    let x = score.value;
    console.log(x);

    
    console.log();

    let filteredItem = cart.filter(item => item.title===x);

    cart = filteredItem;
    displaycart();

    if(filteredItem.length<1){score.value="";};




}
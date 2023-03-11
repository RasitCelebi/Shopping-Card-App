
let addCartButton = document.querySelectorAll(".button-primary");
let itemCount = document.querySelector("#count");
let cardContainer = document.querySelector("#cardContainer");
let selectedCardContainer = document.querySelector("#selectedCardContainer");
let itemContainer = document.querySelector("#itemContainer");
let selectedItemCount = 0;

cardContainer.addEventListener("click", toggleShoppingCard)

function toggleShoppingCard(e) {
    selectedCardContainer.classList.toggle('hidden');
    selectedCardContainer.classList.toggle('flex');
    itemContainer.classList.toggle('w-[100%]');
    itemContainer.classList.toggle('w-[70%]');
};

let i=0;

addCartButton.forEach((btn, index) => {
  btn.addEventListener("click", function(e) {
    selectedItemCount++;
    itemCount.textContent= selectedItemCount;
    console.log(e.target, index);
    addtocart(index%4)

  });
});

const product = [
    {
        id: 0,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 150,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 180,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 210,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    
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

let cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
    
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        toggleShoppingCard();
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }}
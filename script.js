//кнопка город
function changeCity(city) {
    document.querySelector('.city-button').textContent = city;
  }

//слайдер2
let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter = 0;

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    })
}

leftBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0){
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

rightBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})


function slowSlider () {
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
}

let seconds = 5000
let TimerImage = setInterval(()=>slowSlider(), seconds)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover',()=>{
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave',()=>{
    TimerImage = setInterval(()=>slowSlider(), seconds)
})

//cart
let cartItems = [];
let cartTotal = 0;

const addToCart = (productName, productPrice, productImage) => {
    cartItems.push({ name: productName, price: productPrice, image: productImage });
    updateCart();
};

const updateCart = () => {
    const cartList = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total-price span');

    cartList.innerHTML = '';
    cartTotal = 0;

    cartItems.forEach((item, index) => {
        cartTotal += item.price;
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.width = 50;
        img.height = 50;
        listItem.appendChild(img);
        const text = document.createElement('span');
        text.textContent = ` ${item.name} - ${item.price}₽`;
        listItem.appendChild(text);
        cartList.appendChild(listItem);
    });
    totalElement.textContent = `${cartTotal}₽`;
};

const toggleCart = () => {
    const cartOverlay = document.querySelector('.cart-overlay');
    const cart = document.querySelector('.cart');
    cartOverlay.classList.toggle('show');
    cart.classList.toggle('show');
};

const closeCart = () => {
    const cartOverlay = document.querySelector('.cart-overlay');
    const cart = document.querySelector('.cart');
    cartOverlay.classList.remove('show');
    cart.classList.remove('show');
};

const initiateCart = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productName = button.parentElement.parentElement.querySelector('.product-title').textContent;
            const productPrice = parseFloat(button.parentElement.parentElement.querySelector('.price-toggle h3').textContent.match(/\d+(\.\d+)?/)[0]);
            const productImage = button.parentElement.parentElement.querySelector('.product-image').src; 
            addToCart(productName, productPrice, productImage);
        });
    });
};

initiateCart();






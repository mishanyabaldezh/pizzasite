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

let second = 1000*2
let TimerImage = setInterval(()=>slowSlider(), second)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover',()=>{
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave',()=>{
    TimerImage = setInterval(()=>slowSlider(), second)
})

//cart
let cartItems = [];
let cartTotal = 0;

const addToCart = (productName, productPrice) => {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
};

const removeFromCart = (index) => {
    cartItems.splice(index, 1); // Удаляем товар из массива корзины по индексу
    updateCart(); // Обновляем отображение корзины
};

const updateCart = () => {
    const cartList = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total-price span');

    cartList.innerHTML = '';
    cartTotal = 0;

    cartItems.forEach((item, index) => {
        cartTotal += item.price;
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item.name} - $${item.price}`;
        
        // Добавляем кнопку "удалить" для каждого элемента корзины
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => {
            removeFromCart(index); // Вызываем функцию удаления товара из корзины по индексу
        });
        listItem.appendChild(removeButton);

        cartList.appendChild(listItem);
    });

    totalElement.textContent = `$${cartTotal}`;
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
            event.preventDefault(); // предотвращаем действие по умолчанию (переход по ссылке)
            const productName = button.parentElement.parentElement.querySelector('.product-title').textContent; // изменено
            const productPrice = parseFloat(button.parentElement.parentElement.querySelector('.price').textContent.replace('$', '')); // изменено
            addToCart(productName, productPrice);
        });
    });
};

initiateCart();




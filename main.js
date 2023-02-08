const menuEmail = document.querySelector('.navar-email'); //seleccionar elemento al que le vamos a adr click
const desktopMenu = document.querySelector('.desktop-menu');//llamamos al elemento que va a desaparecer
const menuCarritoIcon = document.querySelector('.navbar-shoping-cart');//llamamos al elemento que va a desaparecer
const menuHamburgesa = document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu')
const aside= document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')




menuEmail.addEventListener('click', toggleDesktopMenu); //que hacer cuando le den click
menuHamburgesa.addEventListener('click', toggleMenuHamburgesa);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() { //funcion que hace desaparezca el menuDesktop
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');//llamamos a desktop menu y le decimos que dependiendo de si estatactivado lo desactive y viceversa
}
function toggleMenuHamburgesa() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Motocycle',
    price:   12000.00,
    image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="product',
});
productList.push({
    name: 'Tv',
    price:   600.00,
    image: 'https://media.istockphoto.com/id/1308343280/es/foto/mockup-tv-en-el-armario-en-la-habitaci%C3%B3n-vac%C3%ADa-moderna-con-detr%C3%A1s-de-la-pared-azul-oscuro.jpg?b=1&s=612x612&w=0&k=20&c=Fj75EDG_kYvXkzS95W4GOvadx2gVHnRfs0ATpZz6T9I=',
});
productList.push({
    name: 'Estufa',
    price:   1000.00,
    image: 'https://www.venta.com.mx/sh-img/Vintage_Stoves00003_estufa%2Bvintage.jpg',
});
productList.push({
    name: 'Sofa',
    price:   1500.00,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
    name: 'Cafetera Roja',
    price:   800.00,
    image: 'https://images.pexels.com/photos/2147683/pexels-photo-2147683.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
    name: 'Camara',
    price:   1800.00,
    image: 'https://images.pexels.com/photos/15001898/pexels-photo-15001898.jpeg?auto=compress&cs=tinysrgb&w=800',
});

/* <!-- <div class="product-card">
<img src="https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="product">
<div class="product-info">
    <div>
        <p> $ 120,00</p>
        <p>Motorcycle</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>  
</div>  -->  */

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        console.log("productImg", productImg)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        //console.log(productInfoDiv,'product Info dif si sirve');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
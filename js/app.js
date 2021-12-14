//oldalsó menü kezelése*********
const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')


/*Klikkre 'CSS'-osztályokat cserélünk */
hamburger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active')
    hamburger.classList.toggle('fi-align-justify')
    hamburger.classList.toggle('fi-arrow-left')
})
//termékek beillesztése******
//ez általában backendről jön 
const products = [
    {
        id: 1,
        name: 'málna',
        picture: 'málna.jpg',
        description: 'Kézzel termelt',
        price: 3800,
        inStock: true,
    },
    {
        id: 2,
        name: 'áfonya',
        picture: 'áfonya.jpg',
        description: 'Kézzel termelt',
        price: 5000,
        inStock: true,
    },
    {
        id: 3,
        name: 'szeder',
        picture: 'szeder.jpg',
        description: 'Kézzel termelt',
        price: 3000,
        inStock: true,
        variations: ['fehér', 'fekete']
    },
    {
        id: 4,
        name: 'szeder',
        picture: 'szeder.jpg',
        description: 'Kézzel termelt',
        price: 3000,
        inStock: true,
        variations: ['fehér', 'fekete']
    },
]

const productsSection = document.getElementById('productsId')

//TODO inStock, variations

products.forEach(product => {
    productsSection.innerHTML += `<div>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <img src="./img/${product.picture}">
    <h3>${product.price} Ft</h3>
    <a id="${product.id} class="addToCart">Kosárba</a>
    </div>`
})

//kosár kezelése******
const cart = {}
//Gyűjtsük ki az addToCart css class-ú elemket,
const addToCartButtons = document.getElementsByClassName('addToCart')
//nézzük meg hogy mennyi van belőle
const buttonCount = addToCartButtons.length
//lépegessünk végig rajta
for (let i = 0; i < buttonCount; i++) {
    cartIcon.classList.toggle('menu-active')
//click figyelő hozzáadása
    addToCartButtons[i].addEventListener('click', function (event) {
//ha a kosár üres akkor adjuk hozzá 1 db
      if(cart[event.target.id] == undefined){
        cart[event.target.id] = 1
//ha benne van a db szám növelése
      }else{
        cart[event.target.id]++
      }    
    })
}

//kosár ikon clickk event
const cartIcon = document.getElementById('cart-icon')
cartIcon.addEventListener('click', function (event){
    for(const id in cart){
      products.find(product => product.id == id).name
      cart[id]
      products.find(product => product.id == id).price
    }

})

//kosár tartalma 


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
//ez általában backendről jön todo
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
    <a href="#" class="addCart">Kosárba</a>
    </div>`
})

//kosár kezelése******
const cart ={}




const contenido = document.getElementById("contentApple");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"; 
    content.innerHTML =  `
    
    <h3 class= "content-h3">${product.nombre}</h3>
    <p class= "content-p">$${product.precio}</p> 
    <img class="content-img" src="./assets/img/${product.img}">`;

    contentApple.append(content);


    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    contentApple.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito)
    });

});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class="modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {

    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="./assets/img/${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;

        modalContainer.append(carritoContent);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div0");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total}$`;

    modalContainer.append(totalBuying);
    
});
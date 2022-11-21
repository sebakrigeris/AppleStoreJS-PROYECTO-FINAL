const contenido = document.getElementById("contentApple");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];

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
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        }else{ 
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    
    carritoCounter();
    saveLocal();
    }
    });

});


// set item 
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

};

// get item 



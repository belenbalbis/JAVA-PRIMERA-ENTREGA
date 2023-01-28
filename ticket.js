let productos = [];

fetch("tickets.json")
.then(response=>response.json())
.then(data=>{
    productos=data;
    cargarProductos(productos);
})

const contenedorProductos=document.querySelector("#contenedor-productos");
let botonesAgregar=document.querySelectorAll(".producto-agregar");
const numerito=document.querySelector("#numerito");

function cargarProductos(){
productos.forEach(producto=>{
    const div=document.createElement("div");
    div.classList.add("producto");
    div.innerHTML=`
    <i class="producto-imagen bi bi-ticket-perforated"></i>
    <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">U$S ${producto.precio}</p>
            <button class="producto-agregar" id=${producto.id}>ADD</button>
    </div>
    `;

    contenedorProductos.append(div);

})
actualizarBotonesAgregar();
}


function actualizarBotonesAgregar(){
    botonesAgregar=document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton=>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS=localStorage.getItem("productos-en-carrito")

if (productosEnCarritoLS){
    productosEnCarrito=JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito=[];
}


function agregarAlCarrito(e){
const idBoton = e.currentTarget.id;
const productoAgregado= productos.find(producto=>producto.id===idBoton);

if(productosEnCarrito.some(producto=>producto.id===idBoton)){
const index=productosEnCarrito.findIndex(producto=>producto.id===idBoton)
productosEnCarrito[index].cantidad++;
}else{
    productoAgregado.cantidad=1;
    productosEnCarrito.push(productoAgregado)
}
actualizarNumerito();

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito(){
    let nuevoNumerito=productosEnCarrito.reduce((acc, producto)=> acc+producto.cantidad, 0);
    numerito.innerText=nuevoNumerito;
}
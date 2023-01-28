let productosEnCarrito=localStorage.getItem("productos-en-carrito");
productosEnCarrito=JSON.parse(productosEnCarrito);
const contenedorCarritoVacio=document.querySelector("#carrito-vacio");
const contenedorCarritoProductos=document.querySelector("#carrito-productos");
const contenedorCarritoAcciones=document.querySelector("#carrito-acciones");
const contenedorCarritoComprado=document.querySelector("#carrito-comprado");
let botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar=document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal=document.querySelector("#total");
const botonComprar=document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length>0){


        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML="";
    
        productosEnCarrito.forEach(producto=>{
            const div=document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML=`
            <i class="carrito-producto-imagen bi bi-ticket-perforated"></i>
    <div class="carrito-producto-titulo">
        <small>Título</small>
        <h3>${producto.titulo}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
    </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>U$S ${producto.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>U$S ${producto.precio*producto.cantidad}</p>
    </div>
    <button id= ${producto.id} class="carrito-producto-eliminar">
        <i class="bi bi-trash3-fill"></i>
    </button>
            `;
    
            contenedorCarritoProductos.append(div);
    
        })
    
        actualizarBotonesEliminar();
        actualizarTotal();
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
}

cargarProductosCarrito();



function actualizarBotonesEliminar(){
    botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton=>{
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton=e.currentTarget.id;
    const index=productosEnCarrito.findIndex(producto=>producto.id===idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify (productosEnCarrito))
}

botonVaciar.addEventListener ("click", vaciarCarrito);

function vaciarCarrito (){

    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}


function actualizarTotal(){
    const totalCalculado=productosEnCarrito.reduce((acc, producto)=>acc+(producto.precio*producto.cantidad), 0);

    total.innerText= `U$S ${totalCalculado}`;
}


botonComprar.addEventListener ("click", comprarCarrito);

function comprarCarrito (){

    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    Swal.fire({
        title: 'Thank you!',
        text: 'We hope you have fun.',
        icon: 'success',
        confirmButtonText: 'Cool'

 }).finally(()=>{
    vaciarCarrito()
 })
}
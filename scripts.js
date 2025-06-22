let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito() {
  carrito = [{ nombre: 'Cable USB tipo C', precio: 'Q79.99', imagen: 'src/cable.png' }];
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
}

function mostrarCarrito() {
  const contenedor = document.getElementById('contenido-carrito');
  if (!carrito || carrito.length === 0) {
    contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
  } else {
    contenedor.innerHTML = `
      <div class="item-carrito" style="display:flex; align-items:center; gap:15px;">
        <img src="${carrito[0].imagen}" alt="Producto" style="width:100px" />
        <div>
          <h3>${carrito[0].nombre}</h3>
          <p>${carrito[0].precio}</p>
          <button onclick="eliminarProducto()">Eliminar del carrito</button>
        </div>
      </div>`;
  }
}

function eliminarProducto() {
  carrito = [];
  localStorage.removeItem('carrito');
  mostrarCarrito();
}

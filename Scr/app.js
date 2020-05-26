class Producto {
    constructor(Nombre, Precio, year){
        this.Nombre = Nombre;
        this.Precio = Precio;
        this.year = year;
    }
}

class UI{
    agregarProducto(producto) {
        const listaDeProductos = document.getElementById("listaDeProductos");
        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre del producto</strong>: ${producto.Nombre} -
                <strong>Precio del producto</strong>: ${producto.Precio} -
                <strong>Año del producto</strong>: ${producto.year} 
            </div>
        </div>
        `;

    listaDeProductos.appendChild(elemento);
}

    resetFormulario(){
        document.getElementById("formularioProductos").reset();

        
    }

    borrarProducto(){

    }

    verMensajes(){

    }
};

//DOM EVENTOS + Obtener valores por ID
document.getElementById("formularioProductos").addEventListener
("submit", function(e){
const nombreDelProducto = document.getElementById("Nombre").value;
const precioDelProducto = document.getElementById("Precio").value;
const yearDelProducto = document.getElementById("year").value;  

const product = new Producto(nombreDelProducto, precioDelProducto, yearDelProducto);

const ui =  new UI();
ui.agregarProducto(product);
ui.resetFormulario();

e.preventDefault();

});
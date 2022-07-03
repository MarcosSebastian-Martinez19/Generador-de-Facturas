// Ejercicio 2: Generando facturas
/* En tu negocio necesitas emitir facturas que indiquen el nombre del cliente,
número de identificación, teléfono, dirección, nombre del producto o servicio,
cantidad, valor unitario, valor total por cada producto y valor total a pagar. */

let comienzo = prompt("Para comenzar escriba y", "y")
let nombreCliente
let idCliente
let telefonoCliente
let direccionCliente
let nombreProducto
let cantidadPorProducto
let valorPorUnidad
let valorTotalPorProducto
let valorTotal
let nuevaFactura
let emisorFactura = []

class Factura{
    constructor(clienteNombre, clienteID, clienteTel, clienteDire, nombreProdServ, cantidadProducto, valorUnitario, valorTotalPCProducto, valorTotal) {
        this.nombreCliente = clienteNombre,
        this.idCliente = clienteID,
        this.telefonoCliente = clienteTel,
        this.direccionCliente = clienteDire,
        this.nombreProducto = nombreProdServ,
        this.cantidadPorProducto = cantidadProducto,
        this.valorPorUnidad = valorUnitario,
        this.valorTotalPorCadaProducto = valorTotalPCProducto,
        this.valorTotal = valorTotal
    }
}


while (comienzo === "y") {
    nombreCliente = prompt("Ingrese el nombre")
    idCliente = prompt("Ingrese ID")
    telefonoCliente = prompt("Ingrese el nro de teléfono")
    direccionCliente = prompt("Ingrese la dirección")
    nombreProducto = prompt("Ingrese el nombre del producto")
    cantidadPorProducto = parseInt(prompt("Ingrese la cantidad"))
    valorPorUnidad = parseInt(prompt("Ingrese el precio"))
    valorTotalPorProducto = parseInt(cantidadPorProducto * valorPorUnidad)
    valorTotal = valorTotalPorProducto
    
    nuevaFactura = new Factura(
        nombreCliente,
        idCliente,
        telefonoCliente,
        direccionCliente,
        nombreProducto,
        cantidadPorProducto,
        valorPorUnidad,
        valorTotalPorProducto,
        valorTotal
    )
    emisorFactura.push(nuevaFactura)
    comienzo = prompt("Para hacer otra factura y / Mostrar m", "y")
}

console.log(emisorFactura)
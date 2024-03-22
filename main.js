let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let iphone13 = new Producto("Iphone 13", 900)
let iphone12 = new Producto("Iphone 12", 750)
let iphone11 = new Producto("Iphone 11", 600)
let iphoneX = new Producto("Iphone X", 500)
let iphone8 = new Producto("Iphone 8", 380)

const arrayCelulares = [iphone13,iphone12,iphone11,iphoneX,iphone8]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayCelulares[0].nombre} por $${arrayCelulares[0].precio}\nPulse 2 si desea llevar un ${arrayCelulares[1].nombre} por $${arrayCelulares[1].precio}\nPulse 3 si desea llevar un ${arrayCelulares[2].nombre} por $${arrayCelulares[2].precio}\nPulse 4 si desea llevar un ${arrayCelulares[3].nombre} por $${arrayCelulares[3].precio}\nPulse 5 si desea llevar un ${arrayCelulares[4].nombre} por $${arrayCelulares[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 6){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayCelulares[0].nombre} por $${arrayCelulares[0].precio}\nPulse 2 si desea llevar un ${arrayCelulares[1].nombre} por $${arrayCelulares[1].precio}\nPulse 3 si desea llevar un ${arrayCelulares[2].nombre} por $${arrayCelulares[2].precio}\nPulse 4 si desea llevar un ${arrayCelulares[3].nombre} por $${arrayCelulares[3].precio}\nPulse 5 si desea llevar un ${arrayCelulares[4].nombre} por $${arrayCelulares[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayCelulares[0]
        totalCarrito += arrayCelulares[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayCelulares[1]
        totalCarrito += arrayCelulares[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayCelulares[2]
        totalCarrito += arrayCelulares[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayCelulares[3]
        totalCarrito += arrayCelulares[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayCelulares[4]
        totalCarrito += arrayCelulares[4].precio
    }
    else if (opciones == 6){
        arrayCelulares.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayCelulares[0].nombre} por $${arrayCelulares[0].precio}\nPulse 2 si desea llevar un ${arrayCelulares[1].nombre} por $${arrayCelulares[1].precio}\nPulse 3 si desea llevar un ${arrayCelulares[2].nombre} por $${arrayCelulares[2].precio}\nPulse 4 si desea llevar un ${arrayCelulares[3].nombre} por $${arrayCelulares[3].precio}\nPulse 5 si desea llevar un ${arrayCelulares[4].nombre} por $${arrayCelulares[4].precio}`))
        while (opciones < 1 || opciones > 6){
            opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${arrayCelulares[0].nombre} por $${arrayCelulares[0].precio}\nPulse 2 si desea llevar un ${arrayCelulares[1].nombre} por $${arrayCelulares[1].precio}\nPulse 3 si desea llevar un ${arrayCelulares[2].nombre} por $${arrayCelulares[2].precio}\nPulse 4 si desea llevar un ${arrayCelulares[3].nombre} por $${arrayCelulares[3].precio}\nPulse 5 si desea llevar un ${arrayCelulares[4].nombre} por $${arrayCelulares[4].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayCelulares[0]
            totalCarrito += arrayCelulares[0].precio
        }
        else if (opciones == 2){
            productoElegido = arrayCelulares[1]
            totalCarrito += arrayCelulares[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayCelulares[2]
            totalCarrito += arrayCelulares[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayCelulares[3]
            totalCarrito += arrayCelulares[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayCelulares[4]
            totalCarrito += arrayCelulares[4].precio
    }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert("Gracias por su compra")
            } else{
                alert("Ok, nos vemos pronto!")
            }
        }
    } else{
        let confirmacion4 = confirm("Va a seguir comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Ok, nos vemos pronto!")
        }
    }
}

comprar()
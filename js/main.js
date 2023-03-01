function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.imprimirProducto = function () {
        return "Este es el modeo " + (this.nombre) + " su precio es "(this.precio);
    }
}
let productos = []
productos.push(new Producto("Denim Celeste", 4700))
productos.push(new Producto("Denim Azul", 4700))
productos.push(new Producto("Denim Blanco", 4700))
productos.push(new Producto("Denim Negro", 4700))
productos.push(new Producto("Azul Marino", 3900))
productos.push(new Producto("Borravino", 3900))
productos.push(new Producto("Skinny", 3900))
productos.push(new Producto("Oliva", 3900))
productos.push(new Producto("Mel Medio", 4800))
productos.push(new Producto("Mel Claro", 4800))
productos.push(new Producto("Mel Crudo", 4800))
productos.push(new Producto("Negro Viscosa", 5200))
productos.push(new Producto("Negro Flame", 5200))
productos.push(new Producto("Petroleo", 3900))
productos.push(new Producto("Nevado", 4500))
productos.push(new Producto("Topo", 4500))


let carrito = []
let total = 0

let filtrado = prompt("Hola, desea ver los productos de menor precio, ¿si o no?");

while (filtrado != "si" && filtrado != "no") {
    alert("Por favor ingresa si o no");
    filtrado = prompt("Desea ver los productos de menor precio, ¿si o no?");
}
if (filtrado == "si") {

    let min = Infinity;
    let minimoPrecio = []
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio == min){
            minimoPrecio.push(productos[i]);
            
        } else if (productos[i].precio < min){
            minimoPrecio = [];
            minimoPrecio.push(productos[i]);
            min = productos[i].precio
           
        }
    }
    alert("A continuacion nuestra lista de productos de menor precio.");
    let productosString = "";
    for (let i = 0; i < minimoPrecio.length; i++) {
        productosString += minimoPrecio[i].nombre + " $" + minimoPrecio[i].precio + "\n";
    }
    minimoPrecio.splice(-1);
    alert(productosString);
}

    let seleccion = prompt("Hola, desea comprar algun producto, ¿si o no?")

    while (seleccion != "si" && seleccion != "no") {
        alert("Por favor ingresa si o no")
        seleccion = prompt("Hola desea comprar algo ¿si o no?")
    }

    if (seleccion == "si") {
        alert("A continuacion nuestra lista de productos.")
        let productosString = "";
        for (let i = 0; i < productos.length; i++) {
            productosString += productos[i].nombre + " $" + productos[i].precio + "\n";
        }
        productos.splice(-1);
        alert(productosString);
    } else if (seleccion == "no") {
        alert("¡Gracias por visitarnos, hasta pronto!")

    }

    while (seleccion != "no") {
        let precio = 0
        let notFound = true;
        while (notFound) {
            let producto = prompt("Agrega un producto a tu carrito")
            switch (producto.toLowerCase()) {

                case "denim celeste":
                    precio = 4700
                    notFound = false;
                    break
                case "denim azul":
                    precio = 4700
                    notFound = false;
                    break
                case "denim blanco":
                    precio = 4700
                    notFound = false;
                    break
                case "denim negro":
                    precio = 4700
                    notFound = false;
                    break
                case "azul marino":
                    precio = 3900
                    notFound = false;
                    break
                case "borravino":
                    precio = 3900
                    notFound = false;
                    break
                case "skinny":
                    precio = 3900
                    notFound = false;
                    break
                case "oliva":
                    precio = 3900
                    notFound = false;
                    break
                case "mel medio":
                    precio = 4800
                    notFound = false;
                    break
                case "mel claro":
                    precio = 4800
                    notFound = false;
                    break
                case "mel crudo":
                    precio = 4800
                    notFound = false;
                    break
                case "negro viscosa":
                    precio = 5200
                    notFound = false;
                    break
                case "negro flame":
                    precio = 5200
                    notFound = false;
                    break
                case "petroleo":
                    precio = 3900
                    notFound = false;
                    break
                case "nevado":
                    precio = 4500
                    notFound = false;
                    break
                case "topo":
                    precio = 4500
                    notFound = false;
                    break
                default:
                    notFound = true;
                    alert("No tenemos ese producto")
            }

            if (notFound) {
                break;
            }

            let talle = Number(prompt("¿Qué talle desea?\n¿1, 2, 3, 4 o 5?"))

            while (!Number.isInteger(talle) || talle < 1 || talle > 5) {
                alert("Por favor ingresa un talle entre 1 y 5")
                talle = Number(prompt("¿Qué talle desea?\n¿1, 2, 3, 4 o 5?"))
            }

            let unidades = Number(prompt("¿Cuántas unidades desea?"))

            while (!Number.isInteger(unidades) || unidades < 1) {
                alert("No es un valor válido. Por favor ingresa la cantidad ")
                unidades = Number(prompt("¿Cuántas unidades desea?"))
            }

            carrito.push({
                producto,
                talle,
                unidades,
                precio
            })
            total += precio * unidades;
            console.log(carrito)

            seleccion = prompt("¿Desea seguir comprando?")

            while (seleccion === "no") {
                alert("¡Gracias por la compra, hasta pronto!")
                carrito.forEach((item) => {
                    console.log(`producto: ${capitalize(item.producto)}, talle: ${item.talle}, unidades: ${item.unidades}, total a pagar por producto ${item.unidades * item.precio}`)
                })
                break;
            }

        }
    }

    console.log(`El total a pagar por su compra es: ${total}`)

    function capitalize(str) {
        const lowerStr = str.toLowerCase();
        const words = lowerStr.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }
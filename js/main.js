const productos = [{
        nombre: "Denim Celeste",
        precio: 4700
    },
    {
        nombre: "Denim Azul",
        precio: 4700
    },
    {
        nombre: "Denim Blanco",
        precio: 4700
    },
    {
        nombre: "Denim Negro",
        precio: 4700
    },
    {
        nombre: "Azul Marino",
        precio: 3900
    },
    {
        nombre: "Borravino",
        precio: 3900
    },
    {
        nombre: "Skinny",
        precio: 3900
    },
    {
        nombre: "Oliva",
        precio: 3900
    },
    {
        nombre: "Mel Medio",
        precio: 4800
    },
    {
        nombre: "Mel Claro",
        precio: 4800
    },
    {
        nombre: "Mel Crudo",
        precio: 4800
    },
    {
        nombre: "Negro Viscosa",
        precio: 5200
    },
    {
        nombre: "Negro Flame",
        precio: 5200
    },
    {
        nombre: "Petroleo",
        precio: 3900
    },
    {
        nombre: "Nevado",
        precio: 4500
    },
    {
        nombre: "Topo",
        precio: 4500
    },

];

let carrito = []
let total = 0

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
    


    let talle = Number(prompt("¿Qué talle desea?\n¿1, 2, 3, 4 o 5?"))

    while (!Number.isInteger(talle) || talle < 1 || talle > 5) {
        alert("Por favor ingresa un talle entre 1 y 5")
        talle = Number(prompt("¿Qué talle desea?\n¿1, 2, 3, 4 o 5?"))
    }

    let unidades = Number(prompt("¿Cuántas unidades desea?"))

    while (!Number.isInteger(unidades) || unidades < 1 ) {
        alert("No es un valor válido. Por favor ingresa la cantidad ")
        unidades = Number(prompt("¿Cuántas unidades desea?"))
    }

    carrito.push({producto, talle, unidades, precio})
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

}}

console.log(`El total a pagar por su compra es: ${total}`)

function capitalize(str) {
    const lowerStr = str.toLowerCase();
    const words = lowerStr.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}
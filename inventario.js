//william Alexander Chavez Marquez CM18064
var camisa = document.querySelector('#camisa').value;
var pantalon = document.querySelector('#pantalon').value;
var zapato = document.querySelector('#zapato').value;
var pago = document.querySelector('#pago').value;
let pagar = []


const tienda = () => {
    let inventario = [
        {id:1, name:"Camisa", price:5.99, stock:2},
        {id:2, name:"Pantalon", price:9.99, stock:2},
        {id:3, name:"Zapatos", price:9.30, stock:2}
    ];

    let carritodecompras = [];

    function agregarProducto() {
        document.getElementById("camisa").setAttribute("onclick","")
        if (inventario.name == "camisa") {
            if (inventario.stock >= 1) {
                
            }  
        }
        document.getElementById("pantalon").setAttribute("onclick","")
        if (inventario.name == "pantalon") {
            if (inventario.stock >= 1) {
                
            }  
        }
        document.getElementById("zapato").setAttribute("onclick","")
        if (inventario.name == "zapato") {
            if (inventario.stock >= 1) {
                
            }  
        }
    }
    function realizarPago() {

        
    }

    function actualizarinventario() {
        
        
    }

    return inventario, carritodecompras;

}

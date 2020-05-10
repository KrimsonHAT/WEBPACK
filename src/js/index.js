import '../css/style.css'

class Cliente{
    constructor(nombre,telefono,saldo){
        this.nombre = nombre;
        this.telefono = telefono;
        this.saldo = saldo;
    }
    saldoTotal(){
        console.log(`Nuestro cliente ${this.nombre} Tel: ${this.telefono} tiene
        un saldo de: $${this.saldo}
        `)
    }
}

const cliente1 = new Cliente("Fabian",4737365219,800)
const cliente2 = new Cliente("Fabian",4545653,900)
console.log(cliente1)

cliente2.saldoTotal()
const BD = [
    {
      name: "Victor Hugo",
      apellido:"Ruidiaz",
      edad: 30,
      cargo: "Gerente",
      rh: "b+",
      id: "100001",
      phone: 3003876534,
    },
    {
        name: "Carlos",
        apellido:"Pertuz",
        edad: 25,
        cargo: "Auxiliar",
        rh: "a+",
        id: "100002",
        phone: 3005002100,
    },
    {
        name: "Brayan",
        apellido:"Afanador",
        edad: 28,
        cargo: "Conductor",
        rh: "o-",
        id: "100003",
        phone: 3005002200,
    },
    {
        name: "Alfredo",
        apellido:"Gutierrez",
        edad: 25,
        cargo: "Diseñador",
        rh: "ab+",
        id: "100004",
        phone: 3005002300,
    },
  ];

  function carnet(){

    let id = document.getElementById("id").value

    for(let user of BD){
        if(id === user.id){
            return alert("el usuario ya existe")
        }
    }

    let user = {
        name: document.getElementById("firstName").value,
        apellido: document.getElementById("lastName").value,
        edad: document.getElementById("age").value,
        cargo: document.getElementById("cargo").value,
        rh: document.getElementById("rh").value,
        id: id,
        phone: document.getElementById("phone").value,
    }

    
    console.log(user)
    return

}

const botonNumeros = document.getElementsByName("number")
const botonOpera = document.getElementsByName("opera")
const botonIgual = document.getElementsByName("igual")[0]
const botonDelete = document.getElementsByName("delete")[0]
let result = document.getElementById("resultado")
let opeActual = ""
let opeAnterior = ""
let operacion = ""

botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText)

    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText)
    })
})


botonIgual.addEventListener("click" , function(){
    calcular()
    Display()
})

botonDelete.addEventListener("click", function(){
    clear()
    Display()
})

function selectOperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular()
    }
   operacion = op.toString()
   opeAnterior = opeActual
   opeActual =""
}

function calcular(){
    let calcu
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    if(isNaN(anterior) || isNaN(actual)) return
    switch(operacion){
        case "+":
        calcu = anterior + actual
        break;
        case "-":
            calcu = anterior - actual
            break;
            case "X":
            calcu = anterior * actual
            break;
            case "/":
                calcu = anterior / actual
                break;
                default:
                    return;
                    
    }
    opeActual = calcu
    operacion = undefined
    opeAnterior =  ""
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString()
    Display();

}

function clear(){
    opeActual = ""
    opeAnterior = ""
    operacion = undefined
}


function Display(){
    result.value = opeActual;
}
 clear()












//INÍCIO DO LOOP
var Info_Pacientes = document.querySelectorAll(".pacientes");
console.log(Info_Pacientes);

var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Nutrição - Pacientes";

titulo.addEventListener("click", function() {
    console.log("Olá, eu fui clicado!")
});



var i;

for (i = 0; i < Info_Pacientes.length; i++) {
    var pacientes = Info_Pacientes[i];

    var TDpeso = pacientes.querySelector(".info-peso");
    var peso = TDpeso.textContent;
    console.log(peso)

    var TDaltura = pacientes.querySelector(".info-altura");
    var altura = TDaltura.textContent;
    console.log(altura)

    var PesoValido = true;
    var AlturaValida = true;

    if (peso <= 0 || peso >= 500) {
        PesoValido = false;
        TDpeso.textContent = "Peso Inválido";
        pacientes.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        AlturaValida = false;
        TDaltura.textContent = "Altura Inválida";
        pacientes.classList.add("paciente-invalido");

    }


    if (PesoValido && AlturaValida) {
        var conta = peso / (altura * altura);
        var imc = pacientes.querySelector(".info-imc");
        imc.textContent = conta.toFixed(2);
        console.log(imc)
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Oi, cliquei no botão");
});
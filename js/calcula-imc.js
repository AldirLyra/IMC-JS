var ListaPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < ListaPacientes.length; i++) {
    var paciente = ListaPacientes[i];
    var TDpeso = paciente.querySelector(".info-peso");
    var peso = TDpeso.textContent;

    var TDaltura = paciente.querySelector(".info-altura");
    var altura = TDaltura.textContent;

    var PesoValido = true;
    var AlturaValida = true;

    if (peso <= 0 || peso >= 500) {
        PesoValido = false;
        TDpeso.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }
    if (altura <= 0 || altura >= 3.00) {
        AlturaValida = false;
        TDaltura.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido")
    }
    if (PesoValido && AlturaValida) {
        var imc = calculaImc(peso, altura);
        var tdimc = paciente.querySelector(".info-imc");
        tdimc.textContent = imc;
    }
}

function calculaImc(p, a) {
    var imc = p / (a * a);
    return imc.toFixed(2);
}
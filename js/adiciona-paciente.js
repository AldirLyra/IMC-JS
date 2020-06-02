var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    var pacienteTr = montaTr(paciente);


    var  tbody  =  document.querySelector("#tabela-pacientes");    
    tbody.appendChild(pacienteTr);

    form.reset();

});

function  montaTr(paciente)  {    
    var  pacienteTr  =  document.createElement("tr");    
    pacienteTr.classList.add("paciente");     

    pacienteTr.appendChild(montaTd(paciente.nome,  "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,  "info-peso"));    
    pacienteTr.appendChild(montaTd(paciente.altura,  "info-altura"));    
    pacienteTr.appendChild(montaTd(paciente.gordura,  "info-gordura"));    
    pacienteTr.appendChild(montaTd(paciente.imc,  "info-imc"));    

    return  pacienteTr;
}

function  montaTd(dado,  classe)  {    
    var  td  =  document.createElement("td");    
    td.classList.add(classe);    
    td.textContent  =  dado;    
    return  td;
}
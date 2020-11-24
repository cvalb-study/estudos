var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = parseInt(tdPeso.textContent);

var tdAltura = paciente.querySelector(".info-altura");
var altura = parseInt(tdAltura.textContent);

var tdImc = paciente.querySelector(".info-imc");

if(peso > 1000 || peso < 0){

}

var calculoImc = peso / (altura * altura);

tdImc.textContent = calculoImc;
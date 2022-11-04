var botao = document.querySelector("#calcular");
botao.addEventListener("click", function(event) {

	event.preventDefault();

	var form = document.querySelector("#form");

	var pessoa = obtemPessoaDoFormulario(form);

	document.getElementById("resultado").innerHTML = pessoa.nome + " seu IMC é " + pessoa.imc + ", você está com " + calculaSituacao(pessoa.imc) + ".";

	form.reset();

});

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function obtemPessoaDoFormulario(form) {

	var pessoa = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		imc: calculaImc(form.peso.value, form.altura.value),
	}

	console.log(pessoa.peso);
	console.log(pessoa.altura);

	return pessoa;

}

function calculaSituacao(imc) {
	if (imc < 18.5) {
		situacao("baixo-peso");
		return "baixo peso";
	} else if (imc >= 18.5 && imc <= 24.9) {
		situacao("peso-normal");
		return "peso normal";
	} else if (imc >= 25 && imc <= 29.9) {
		situacao("excesso-peso");
		return "excesso de peso";
	} else if (imc >= 30 && imc <= 34.9) {
		situacao("obesidade-1");
		return "obesidade de Classe 1";
	} else if (imc >= 35 && imc <= 39.9) {
		situacao("obesidade-2");
		return "obesidade de Classe 2";
	} else {
		situacao("obesidade-3");
		return "obesidade de Classe 3";
	}
}

function situacao(id) {
	var indices = document.querySelectorAll(".indice");
	for (let i; i < indices.length; i++) {
		indices[i].style.backgroundColor = '#FFFFFF';
	}
	document.getElementById(id).style.backgroundColor = '#90ee90';
}

function myFunction(x) {
	x.style.background = "#ffcbdb";
  }

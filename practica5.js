$("#numero").change(function(){
	if(parseInt(this.value) <20) {
		$('#numero').val('');

		
	}})
var x;
var buttons;
x = document.getElementById("numero").value;




function ingresar() {
	$( "#pulsar").empty();
	x = document.getElementById("numero").value;

for (var i = 1; i <= x; i++ ){
	buttons = $('<button id="numeros" class='+i+'>'+ i + '</button>')
	buttons.appendTo('#pulsar');

}}

function multiplos2() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%2==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos3() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%3==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos4() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%4==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos5() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%5==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos6() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%6==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos7() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%7==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos8() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%8==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}

function multiplos9() {
	for (var i = 1; i <= x; i++) {
		$("."+i+"").css("background-color","Red");
	}

	var multiplos=[];
	for (var i = 1; i <= x; i++) {
		if (i%9==0) {
			multiplos.push(i)
		}}
	multiplos.forEach(function(element){
		$("."+element+"").css("background-color","Blue");

	});}
function limpiar(){
	$("#pulsar").empty();
}


function numprimos(){
var multiplos=[];
for (var i = 1; i <= x; i++) {
  $("."+i+"").css("background-color", "#9218B7");}
 var c = x;
 var j = 2;
 var numerosPrimos = [];

 for (; j < c; j++) {

   if (primo(j)) {
     numerosPrimos.push(j);
   }

 }

 //console.log(numerosPrimos);

 function primo(numero) {

   for (var i = 2; i < numero; i++) {

     if (numero % i === 0) {
       return false;
     }

   }

   return numero !== 1;
 }
 numerosPrimos.forEach(function(element) {
   $("."+element+"").css("background-color", "Orange");
 });
      //console.log(multiploss);
}
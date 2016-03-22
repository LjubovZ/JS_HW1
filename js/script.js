



function calculate(){
	var number = prompt('укажите число', '');
	var raise = prompt('укажите степень', '');
	var result = Math.pow(number, raise);
	console.log('ответ = ', result );
	alert(result);

}
calculate();

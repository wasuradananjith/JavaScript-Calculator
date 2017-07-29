function Calculator(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
}

Calculator.prototype.add = function() {
	return this.number1+this.number2
};

Calculator.prototype.sub = function() {
	return this.number1-this.number2
};

Calculator.prototype.mult = function() {
	return this.number1*this.number2
};

Calculator.prototype.divide = function() {
	return this.number1/this.number2
};

Calculator.prototype.mod = function() {
	return this.number1%this.number2
};

function choose(num1, num2, op){
			var n1 = parseFloat(document.getElementById("number1").value);
			var n2 = parseFloat(document.getElementById("number2").value);
			var obj = new Calculator(n1,n2);
			switch(op){
				case '+':
					document.getElementById("answer").innerHTML = obj.add();
					break
				case '-':
					document.getElementById("answer").innerHTML = obj.sub();
					break
				case 'x':
					document.getElementById("answer").innerHTML = obj.mult();
					break
				case '/':
					document.getElementById("answer").innerHTML = obj.divide();
					break
				case '%':
					document.getElementById("answer").innerHTML = obj.mod();
					break

				default : alert("Failed");
			}
		}
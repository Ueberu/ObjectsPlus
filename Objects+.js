// Math
Math.root = function (n,a) {
	return Math.pow(a,1/n)
}
Math.logb = function (b,a) {
	return Math.log(a)/Math.log(b)
}
Math.rnd = function (a,b) {
	return Math.round(Math.random()*(b-a))+a
}
Math.divisors = function (n) {
	var arr = new Array();
	for (i=1;i<=n;i++) {if (n%i==0) {arr.push(i)} }
	return arr
}
Math.sum = function () {
	var sum = 0 ;
	for (var i = 0 ;i < arguments.length ;i++) {sum += arguments[i] }
	return sum ;
}
Math.product = function () {
	var product = 1 ;
	for (var i = 0 ;i < arguments.length ;i++) {product *= arguments[i] }
	return product ;
}
Math.average = function () {
	var sum = 0 ;
	for (var i = 0 ;i < arguments.length ;i++) {sum += arguments[i] }
	return sum/arguments.length ;
}
Math.geomean = function () {
	var product = 1 ;
	for (var i = 0 ;i < arguments.length ;i++) {product *= arguments[i] }
	return Math.pow(product,1/arguments.length) ;
}
Math.harmean = function () {
	var sum = 0 ;
	for (var i = 0 ;i < arguments.length ;i++) {sum+= (1/arguments[i]) }
	return arguments.length/sum ;
}
Math.gcd = function () {
	var A = arguments;
	var n = A.length, x = A[0] < 0 ? -A[0] : A[0];
    for (var i = 1; i < n; i++) {
		var y = A[i] < 0 ? -A[i] : A[i];
		while (x && y){ x > y ? x %= y : y %= x; }
		x += y;
    }
	return x;
}
Math.lcm = function () {
	var A = arguments;
	var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++) {
		var b = Math.abs(A[i]), c = a;
		while (a && b){ a > b ? a %= b : b %= a; } 
		a = Math.abs(c*A[i])/(a+b);
    }
    return a;
}
Math.factorial = function (n) {
	product = 1;
	for(i=1;i<=n;i++) {product*=i}
	return product
}
Math.combination = Math.binomial = function (n,k) {
	if(k<=n) {return Math.factorial(n)/(Math.factorial(k)*Math.factorial(n-k)) } else {return 0}
}
Math.variation = function (n,k) {
	if(k<=n) {return Math.factorial(n)/Math.factorial(n-k) } else {return 0}
}
// Math Bonus
Math.lotto = function (chose,numbers) {
	for (pool=[],a=1;a<=numbers;a++) {pool.push(a)};
	pool.shuffle();
	for (draw=[],i=0;i<chose;i++) {draw.push(pool[i])}
	return draw.sort();
}
Math.dice = function (dices,sides,mod) {
	if(!dices) {dices=1};if(!sides) {sides=6};if(!mod) {mod=0};sum=0;
	for (i=1;i<=dices;i++) {sum+=Math.ceil(Math.random()*sides)+mod }
	return sum ;
}
Math.easter = function (y) {
	a=y%19;b=y%4;c=y%7;k=parseInt(y/100);q=parseInt(k/4);p=parseInt((8*k+13)/25);
	if (y<=1582) {M=15;N=6;} else {M=(15+k-p-q);N=(4+k-q)%7}
	d=(19*a+M)%30;e=(2*b+4*c+6*d+N)%7;o= 22+d+e;
	if (o<=31) {return o+".03."+y} else {{return o-31+".04."+y}}
}
Math.convert = function(number,from,to) {
	if (from<2||from>36) {return "Ungültiger Ursprung"}
	if (to<2||to>36) {return "Ungültiges Ziel"}
	digit=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	if (typeof(number)=="number") {number = number.toString()};dec=0;string="";
	for (i=number.length-1;i > -1;i--) {a = parseInt(digit.indexOf(number[i]));b = Math.pow(from,number.length-(i+1)) ;dec+=(a*b);}
	while (dec>0) {mod=dec%to;string=digit[mod]+string;dec=parseInt(dec/to);}
	return string;
}
// Array
Array.prototype.shuffle = function() {
	var i = len = this.length;
	while (i--) {
		var p = parseInt(Math.random()*len);
		var t = this[i];
		this[i] = this[p];
		this[p] = t;
 	}
};

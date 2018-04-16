/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */
function leet(input) {
	input = input.replace(/t/gi, '7')
	input = input.replace(/i/gi, '1')
	input = input.replace(/s/gi, '5')
	input = input.replace(/e/gi, '3')
	input = input.replace(/g/gi, '6')
	input = input.replace(/o/gi, '0')
	input = input.replace(/b/gi, '8')
	input = input.replace(/a/gi, '4')
	return input.trim()
}

/* Testing Part */

var str1 = ' this is the 42 string'
var str2 = 'this is the string containing foo bar '
					
if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}

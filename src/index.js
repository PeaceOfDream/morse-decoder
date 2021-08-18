const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let exprStr = expr.toString();
	let i = 0;
	let code = '';
	let item = '';
	while (i <= exprStr.length - 1) {
		if ((exprStr[i] == '0') && (exprStr[i + 1] == '0')) item = ' ';
		else if ((exprStr[i] == '1') && (exprStr[i + 1] == '0')) item = '.';
		else if ((exprStr[i] == '1') && (exprStr[i + 1] == '1')) item = '-';
		else if (exprStr[i] == '*') {
			item = ' +';
			i = i + 8;
		}
		code = code + item;
		i = i + 2;
	}
	let codeArr = code.split(' ').filter(it => it.length > 0).map(it => it == '+' ? it = ' ' : it).join(' ');
	let result = codeArr.split('   ')
		.map(
			a => a
				.split(' ')
				.map(
					b => MORSE_TABLE[b]
				).join('')
		).join(' ');

	return result;
}

module.exports = {
    decode
}





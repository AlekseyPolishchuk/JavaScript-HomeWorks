function padString(str, length, symbol, side = true) {
  if (typeof str !== 'string') return 'String error';
  if (typeof length !== 'number' || isNaN(length)) return 'Length error';
  if (typeof symbol !== 'string' || symbol.length !== 1) return 'Symbol error';
  if (typeof side !== 'boolean') return 'Side error';

  if (length < str.length) return str.substr(0, length);
  const lengDiff = length - str.length;
  for (let i = 0; i < lengDiff; i++) {
    side ? (str += symbol) : (str = symbol + str);
  }
  return str;
}

console.log(padString('hello', 8, '*', true));

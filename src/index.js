module.exports = function reverse(n) {
  let i = n.toString().length
  let s = '';
  while (i--) {
    s += n.toString()[i];
  }

  return parseInt(s, 10);
}
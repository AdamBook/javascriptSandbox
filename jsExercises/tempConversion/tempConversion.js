const ftoc = function(f) {

  let cRaw = ((f-32)*(5/9));
  let c = Math.round(cRaw*10)/10;
  return c;

}

const ctof = function() {

}

module.exports = {
  ftoc,
  ctof
}

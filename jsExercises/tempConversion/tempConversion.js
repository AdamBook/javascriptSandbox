const ftoc = function(f) {

  let cRaw = ((f-32)*(5/9));
  let c = Math.round(cRaw*10)/10;
  return c;

}

const ctof = function(c) {

let fRaw = (c*(9/5)+32);
let f = Math.round(fRaw*10)/10;
return f;

}

module.exports = {
  ftoc,
  ctof
}

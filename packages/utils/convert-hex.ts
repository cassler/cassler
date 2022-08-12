let convertHex = (hex: string) => {
  let raw = hex.replace('#',''); //?
  let len = raw.length; //?
  let channels = len%3===0 ? 3 : 4 //?
  let depth = len/channels;

  let hexVals = ['r','g','b','a'].map((_, x) => {
    let val = raw.slice(depth*x,depth*(x+1));
    if (val === '') return 'ff';
    return val.length === 1 ? val + val : val;
  })
  let [r,g,b,a] = hexVals.map(x => parseInt(x, 16)) //?
  return {
    r,g,b,a,
    rgba: `rgba(${r},${g},${b},${a})`,
    hex: `#${hexVals.join('')}`,
  }
}

let toRgba = (hex: string) => convertHex(hex).rgba;
let redOf = (hex: string) => convertHex(hex).r;
let greenOf = (hex: string) => convertHex(hex).g;
let blueOf = (hex: string) => convertHex(hex).b;
let alphaOf = (hex: string) => ((convertHex(hex).a)/255).toFixed(2);

export {
  convertHex,
  toRgba,
  redOf,
  greenOf,
  blueOf,
  alphaOf
}

const crypto = require("crypto")
module.exports = {
  getRandomNumber: (min, max, secure = false) => secure ? min + (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] % (max + 1 - min)) : Math.floor( Math.random() * (max + 1 - min) ) + min,
  choice: (arr, secure = false) => arr[secure ? 0 + (crypto.webcrypto.getRandomValues(new Uint32Array(1))[0] % (arr.length - 1 + 1 - 0)) : Math.floor( Math.random() * (arr.length - 1 + 1 - 0) ) + 0],
  getRandomChars: (len, type = "ascii") => {
    const getAscii = (start, end) => String.fromCharCode(...[...Array(end + 1).keys()].slice(start))
    const chars = {
      ascii: getAscii(32, 127),
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      number: "1234567890",
      alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
      symbol: getAscii(33, 47) + getAscii(58, 64) + getAscii(91, 96) + getAscii(123, 126)
    }
    const target = chars[type.toLowerCase()]
    return Array.from(Array(len)).map(()=>target[Math.floor(Math.random()*target.length)]).join('')
  },
  getRandomNumberBySeed: (min, max, seed, s1 = 4545191945, s2 = 8101145145, s3 = 5642194810, s4 = 4519451945) => {
    for (let i = 0, k; i < seed.length; i++) {
      k = seed.charCodeAt(i);
      s1 = s2 ^ Math.imul(s1 ^ k, 597399067);
      s2 = s3 ^ Math.imul(s2 ^ k, 2869860233);
      s3 = s4 ^ Math.imul(s3 ^ k, 951274213);
      s4 = s1 ^ Math.imul(s4 ^ k, 2716044179);
    }
    s1 = Math.imul(s3 ^ (s1 >>> 18), 597399067);
    s2 = Math.imul(s4 ^ (s2 >>> 22), 2869860233);
    s3 = Math.imul(s1 ^ (s3 >>> 17), 951274213);
    s4 = Math.imul(s2 ^ (s4 >>> 19), 2716044179);
    return min + ((s1^s2^s3^s4)>>>0) % (max + 1 - min)
  }
}

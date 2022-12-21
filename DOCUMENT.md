# util-random
A Node.js library for simple random.
# usage
- [getRandomNumber](#getRandomNumber)
- [getRandomNumberBySeed](#getRandomNumberBySeed)
- [getRandomChars](#getRandomChars)
- [choice](#choice)

### getRandomNumber
- `min` {Number} Minimum value of random numbers
- `max` {Number} Maximum value of random numbers
- ?`secure` {Boolean} Whether to generate secure random numbers (optional)

Whether to generate secure random numbers (optional)

### getRandomNumberBySeed
- `min` {Number} Minimum value of random numbers
- `max` {Number} Maximum value of random numbers
- `seed` {String} String that will be the seed of the random number

Generate random numbers by seeding

### getRandomChars
- `length` {Number} Length of string to be generated
- `type` {String} Options for what kind of string to generate. Default is `ascii`  
useable: `ascii`, `lowercase`, `uppercase`, `alphabet`, `number`, `alphanumeric`, `symbol`

Generate a random string

### choice
- `arr` {Array} Selection target array
- `secure` {Boolean} Whether to select by secure random numbers

Selects a random element from an array

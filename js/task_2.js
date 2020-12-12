const calculateEngravingPrice = function (message, pricePerWord) {
  let count = 0
  message = message.split(" ")

  for (let i = 0; i < message.length; i++) {
    if (message[i] != " ") {
      count += 1 * pricePerWord
    }
  }

  return count
}

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)) // 80

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)) // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)) // 240

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)) // 120

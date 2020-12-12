let input = prompt("Введите число!")
const numbers = []
let total = 0

while (true) {
  if (Number.isNaN(Number(input))) {
    alert(`Вы ввели не число, введите число!`)
  } else {
    numbers.push(Number(input))
  }
  for (const number of numbers) {
    total += number
    console.log(`"Общая сумма чисел равна ${total}"`)
  }
}

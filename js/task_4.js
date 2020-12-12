const formatString = function (string) {
  let newString = string.split("")
  if (newString.length <= 40) {
    console.log(newString.join(""))
  }
  if (newString.length > 40) {
    let updaitedString = string.slice(0, 40) + "..."
    console.log(updaitedString)
  }
}

// const someString = "..."
// const maxLength = 40

// const formatString = function (string) {
//   if (string.length > maxLength) {
//     let updaitedString = string.split("").splice(0, maxLength, "...").join("") + someString
//     return updaitedString
//   }
//   return string
// }

formatString("Curabitur ligula sapien, tincidunt non.")
// вернется оригинальная строка

formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// вернется форматированная строка

formatString("Curabitur ligula sapien.")
// вернется оригинальная строка

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// вернется форматированная строка

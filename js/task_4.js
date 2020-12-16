const formatString = function (string) {
  // if (string.length <= 40) {
  //   return string;
  // }
  // return string.slice(0, 40) + "...";

  return string.length > 40 ? string.slice(0, 40) + "..." : string
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

console.log(formatString("Curabitur ligula sapien, tincidunt non."))
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."))
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."))
// вернется оригинальная строка

console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."))
// formatString("Curabitur ligula sapien, tincidunt non.")
// // вернется оригинальная строка

// formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// // вернется форматированная строка

// formatString("Curabitur ligula sapien.")
// // вернется оригинальная строка

// formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// // вернется форматированная строка

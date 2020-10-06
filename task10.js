const numbers = function (array) {
  let message = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      message.push('Foobar');
    } else if (array[i] % 3 === 0) {
      message.push('Foo');
    } else if (array[i] % 5 === 0) {
      message.push('bar');
    } else {
      message.push(array[i]);
    }
  }
  return message;
};
console.log(numbers([1, 2, 45, 20, 3, 4, 5, 15]));

// дан массив чисел, допустим от 1 до 100.
// Нужно сделать так, что бы числа, делящиеся на 3 без остатка принимали значения Foo,
//   а числа, делящиеся на 5 принимали значение Bar, а числа делящиеся на 3 и на 5 принимали значение Foobar.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть ваш вік: ', (age) => {
  const lastDigit = parseInt(age) % 10;
  let yearWord;

  if (lastDigit === 1) {
    yearWord = 'рік';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    yearWord = 'роки';
  } else {
    yearWord = 'років';
  }

  console.log(`Вам ${age} ${yearWord}.`);
  rl.close();
});

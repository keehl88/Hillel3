function doubleLetter(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    
    return result;
  }
  
  const inputStr = prompt('Введіть рядок:');
  const doubledStr = doubleLetter(inputStr);
  console.log(doubledStr);
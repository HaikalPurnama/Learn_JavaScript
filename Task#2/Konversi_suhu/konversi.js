  let fahrenheit = 50;
  let celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit} derajat Fahrenheit sama dengan ${celsius} derajat Celsius`);

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

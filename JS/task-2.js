const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};
console.log(
  'Full cost: ',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  'Full cost: ',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  'Full cost: ',
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  'Full cost: ',
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);

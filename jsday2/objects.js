let biscuit = {
  name: "McVities",
  price: 1.99,
  flavour: "Milk Chocolate",
  weight: "200g"
};

let newBiscuit = {
    name: "Biscuit",
    price: 3.99,
    flavour: "Chocolate",
    weight: "100g",

    calculatePriceVat: function(){
        return this.price * 1.175
    }
  };

  alert(newBiscuit.calculatePriceVat())

  biscuit.calculatePriceVat = newBiscuit.calculatePriceVat;
  alert(biscuit.calculatePriceVat())


console.log(biscuit.flavour);

let biscuits = [
  {
    biscuit
  },
  {
    name: "McVities",
    price: 1.49,
    flavour: "Dark Chocolate",
    weight: "200g"
  },
  {
    name: "Maryland",
    price: 0.99,
    flavour: "Chocolate chip",
    weight: "100g"
  },
  {
    name: 'Nestle',
    price: 1.29,
    flavour: 'White Chocolate',
    weight: '200g'
  }
];

for(let product of biscuits){
    document.write(`<p>Biscuit type: ${product.name}<br>${product.price}<br>
        ${product.flavour}<br>${product.weight}<p>`)
}

console.log('this\nis\na\ntest')


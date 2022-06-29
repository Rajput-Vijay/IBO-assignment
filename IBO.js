const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(e) {
  let finalObj = {};
  for (let i = 0; i < e.length; i++) {
    if (finalObj[e[i].productName] == undefined) {
      finalObj[e[i].productName] = 1;
    } else {
      finalObj[e[i].productName] += 1;
    }
  }
  return finalObj;
}
console.log(getUniqueProductCount(listOfProducts));

function getUniqueProducts() {
  let arr = [];
  listOfProducts.reduce(function (res, value) {
    if (!res[value.productName]) {
      res[value.productName] = {
        productName: value.productName,
        quantity: 0,
        description: value.description,
      };
      arr.push(res[value.productName]);
    }
    res[value.productName].quantity += value.quantity;
    return res;
  }, {});
  return arr;
}
console.log(getUniqueProducts());

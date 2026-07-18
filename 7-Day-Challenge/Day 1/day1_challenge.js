const burgerPrice = 120;
const friesPrice = 60;
const colaPrice = 40;

const totalAmt = burgerPrice + friesPrice + colaPrice;

const gstPrice = ((burgerPrice + friesPrice + colaPrice) * 18) / 100;

const totalPrice = burgerPrice + friesPrice + colaPrice + gstPrice;

console.log(
  `The price of Burger is ${burgerPrice} INR and price of Fries is ${friesPrice} INR and price of Cola is ${colaPrice} INR. So the total amount is ${totalAmt} INR and the GST is 18% that is about ${gstPrice} INR. So your total payable price is ${totalPrice} INR!`,
);

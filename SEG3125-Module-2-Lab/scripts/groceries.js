	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yogurt",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		price: 1.99
	},
	{
		name: "almond granola",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: true,
		price: 2.19
	},
	{
		name: "salmon",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: false,
		price: 4.29
	},
	{
		name: "walnut",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_products: true,
		price: 7.79
	},
	{
		name: "pumpkin",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: true,
		price: 5.9
	},
	{
		name: "milk",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_products: false,
		price: 0.99
	},
	{
		name: "bread",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: true,
		price: 2.99
	},
	{
		name: "Sausage",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: false,
		price: 3.99
	},
	{
		name: "potato",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: true,
		price: 4.99
	},
	{
		name: "egg",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_products: false,
		price: 5.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, restriction2) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, organic:prods[i].organic_products});
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == true)){
			product_names.push({name:prods[i].name, price:prods[i].price, organic:prods[i].organic_products});
		}
		else if (restriction == "None"){
			product_names.push({name:prods[i].name, price:prods[i].price, organic:prods[i].organic_products});
		}
	}
	product_names.sort((a,b)=>{return a.price - b.price;});
	let products = [];
	
	if(restriction2=="yes"){
		console.log(restriction2)
		products = product_names.filter((item)=>{return item.organic==true});
	}else if(restriction2=="no"){
		products = product_names.filter((item)=>{return item.organic==false});
	}else{
		products = product_names;
	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

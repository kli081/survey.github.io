	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yogurt",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 1.99
	},
	{
		name: "almond granola",
		lactose_intolerant: true,
		nut_allergies: false,
		electronic_product: false,
		Tik_Tok_Same_Style: true,
		organic_product: true,
		price: 2.19
	},
	{
		name: "salmon",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 4.29
	},
	{
		name: "walnut",
		lactose_intolerant: true,
		nut_allergies: false,
		organic_product: true,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 7.79
	},
	{
		name: "pumpkin",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_product: true,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 5.9
	},
	{
		name: "milk",
		lactose_intolerant: false,
		nut_allergies: true,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 0.99
	},
	{
		name: "Sausage",
		lactose_intolerant: true,
		nut_allergies: true,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: false,
		price: 3.99
	},
	{
		name: "keyboard",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_product: false,
		electronic_product: true,
		Tik_Tok_Same_Style: false,
		price: 20.99
	},
	{
		name: "headset",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_product: false,
		electronic_product: true,
		Tik_Tok_Same_Style: true,
		price: 15.99
	},
	{
		name: "dress",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: true,
		price: 25.99
	},
	{
		name: "perfume",
		lactose_intolerant: false,
		nut_allergies: false,
		organic_product: false,
		electronic_product: false,
		Tik_Tok_Same_Style: true,
		price: 12.99
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if(restriction=="None"){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}else if(prods[i][restriction]){
			product_names.push({name:prods[i].name, price:prods[i].price});
		}
	}
	product_names.sort((a,b)=>{return a.price - b.price;});
	return product_names;
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

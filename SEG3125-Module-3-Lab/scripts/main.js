
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
    var s2 = document.getElementById("displayProduct");
	var s1 = document.getElementsByName("category");
	var s1_value = '';
	for(let i=0;i<s1.length;i++){
		if(s1[i].checked){
			s1_value = s1[i].value;
			break;
		}
	}
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1_value);
	

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;

		var label = document.createElement("label");
		label.className = "boxcontainer";

		var text = document.createTextNode(productName+": "+productPrice);
		label.appendChild(text);

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		label.appendChild(checkbox);

		var span = document.createElement("span");
		span.className = "boxcheckmark";
		label.appendChild(span);

		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	var ul = document.createElement("ul");
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(ele[i].value));
			ul.appendChild(li);
			chosenProducts.push(ele[i].value);
		}
	}
	para.appendChild(ul);
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

function openCity(evt, cityName) {
	var i, navcontent, navlinks;
	navcontent = document.getElementsByClassName("navcontent");
	for (i = 0; i < navcontent.length; i++) {
	  navcontent[i].style.display = "none";
	}
	navlinks = document.getElementsByClassName("navlinks");
	for (i = 0; i < navlinks.length; i++) {
	  navlinks[i].className = navlinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
document.getElementById("home").click();

populateListProductChoices();

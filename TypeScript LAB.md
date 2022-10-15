
# LAB - Typescript

  
  
Typescript is a superset of Javascript, it enables developers to detect errors early, have better code readability and better tool support than Javascript.
In this lab, you will learn how to use Typescript language along with client-side apps, and how to compile it into JS code that can be run by the browser.

The starter code consists of a **Toy Store** application, the user can select a **category** then choose a **product**, enter **quantity** and submit to add to the **cart**.

The project structure contains only a web page `index.html`  and a JS script `index.js` inside the folder `scripts`


	├── index.html 
	└── scripts/
		└── index.js

  

  

## Enable Typescript

Before starting to use typescript, you will need it to be installed in your machine along with the typescript compiler.

1. First, run the following command to install Typescript

		npm install -g typescript

2. To use typescript in any directory a Typescript compiler configuration file (`tsconfig.json`) must be created, go to the starter project directory and run the following command to initialize it as a Typescript project directory:
	
		tsc --init
		
## Interfaces 
In this section, we'll be creating the models of the app: **Category**, **Product** and **OrderDetail**  to do so we will use interfaces to enable type checking.

1. Create a new file `models.ts` inside `scripts` folder and add a new interface `Product` with the following properties: `id`, `name`, `price`, `description`

  
		interface  Product {
			id: number;
			name: string;
			description: string;
			price: number;
		}
2. In the same file (`models.ts`) add another interface `Category` with the following properties: `id`, `name`,  `description` and a list of `products`

		interface  Category {
			id: number;
			name: string;
			description: string;
			products: Product[];
		}
3. In the same file (`models.ts`) add another interface `OrderDetail` with the following properties: `product` and `quantity`

		interface  OrderDetail {
			product: Product;
			quantity: number;
		}

## Classes 
For the shopping cart, we will use class rather than an interface since it will contain some logic.

1. In the file `models.ts`, create a class named `ShoppingCart`
		
		class  ShoppingCart {
		}
2. Add a private member `-items` that will hold the list of order details initialized to empty

		private  _items : OrderDetail[] = []
3. Add a getter method called for that property, call it `items`

		get items() {
			return  this._items
		}
4. Add a public method `addItem` , that accept one parameter of type `OrderDetail` and return a `number` (items count)

		public  addItem(item: OrderDetail): number {
			//TODO implement
		}
5. Implement the `addItem` method

## Modules
Now that all our models are ready, we will need some of data to test our page, in this section we'll create and initialize some fake data.

1. Create a new file `data.ts` inside `scripts` folder
2. Create a class `Data`  that contains one `static` member `CATEGORIES` of type `Category[]`
	
		export class  Data {
			static  CATEGORIES : Category[]
		}

	> Note that `models.ts` and `data.ts` are two different modules, so in order to use one module inside another, you'll need to add export and import statements.

3. Go to `models.ts` and add `export` keyword to every type (interface or class) declaration
4. Go to `data.ts` and add the missing imports
		
		import { Category } from  "./models"
5. Initialize the `CATEGORIES` field with some dummy data

## Type annotations
In this section, we'll add type annotations to functions and variables in the entry script `index.js`

1. First convert `index.js` to `index.ts` to use Typescript instead of Javascript
2. Fix all the errors shown in the file
	- Add type annotations to `categories` and `shoppingCart` variables
	- Add missing imports
	- Add  annotations to all functions parameters and return types in the file
	- Add missing cast to HTML elements, example:
	
			<HTMLSelectElement>document.getElementById("categories"); 
			//OR
			document.getElementById("categories") as HTMLSelectElement
	- Add type-safe annotations to nullable objects, example:
	
			category?.products!  //products could be undefined
 
3. Initialize `categories` and `shoppingCart` variables with the created fake data

		var  categories: Category[] = Data.CATEGORIES
		var  shoppingCart: ShoppingCart = new  ShoppingCart()
4. Implement the `addToCart` method to it creates an object of type `OrderDetail` and add it to `ShoppingCart` 
		


## Bundling and Running
Typescript cannt be run on the browser directly, we need to compile it first into Javascript and use the output scripts withing our HTML page.

1. In the project directory, run the following command to compile every TS file into JS file
			
		tsc

	> This command compiles all typescript files into javascript files, the issue is that the browser cannot load modules (files) from scripts, as a result we'll need to bundle all the scripts into one JS file.
	
2. To bundle all the JS outputs, we can use web bundler like **browserify** (you can use others like Webpack, Gulf or Grunt)
Run the following command to install browserify
		
		npm install -g browserify

3. Run the following command  in the project directory to bundle all ur JS files

		browserify  scripts/index.js -o main.js
		

	> This will load all the dependencies of the entry file `index.js` and bundle them into one output file `main.js`.
	
4. Now in `index.html` file, in the `<script>` tag in the body change the source into `main.js` 
	
		<script  src="main.js"></script>

6. Open index.html in the browser and test the page !
 

 




var productsContainer ;
// Clear form after regesreration//
var inputs=document.getElementsByClassName("form-control");


// h3ml check lw el user awl mara yft7 wl site w y4t8l 3le7 f kda el storage fadya 
if(localStorage.getItem("productsX") == null)
{
    productsContainer = [];
}
//lw el user m4 awl mara yd5ol 3la el site f e3rdlo el data el adema elly kan msgl7a f el storage
else
{
    //json.parse de bt7wly elly rag3 mn el storage elly howa string l array
    productsContainer = JSON.parse(localStorage.getItem("productsX"));
    displayProducts();//7tet7a hena 34an t3ml call automatic ll data mn 8er ma ados 3la el button

}

//RADIO BUTTON//
var radioButtons  = document.getElementsByName("sale");
var categories = ["mobiles" , "computers" , "tvs" , "tablets" , "tables"];

function displayCategoris()
{
    var temp = "";

    for(var i =0 ; i <categories.length ; i++)
    {
        temp +="<option value='"+categories[i]+"'>"+categories[i]+"</option>" ;
    }
    document.getElementById("productCategory").innerHTML = temp;
}
displayCategoris();

//Real Time Search//
function searchProducts(term)//term de el param elly hyd5l7a el user elly hya btsawy(this.value)
{
    var temp="";
    for(var i =0 ;i < productsContainer.length ; i++)
    {       
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        
            temp +=`
            <div class="col-md-3">
                    <h2 class="text-center">`+productsContainer[i].price+`</h2>
                <div class="product">
                <div class="price">`+productsContainer[i].price+`</div>
                    <img src="images/1.jpg" class="img-fluid">
                    <h5>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span> </h5>
               <p>`+productsContainer[i].desc+`</p>`;

            if(productsContainer[i].sale == true)
            {
                temp +=`<div class="sale">sale</div>`;

            }
               
               
                    temp +=`</div>
            </div>`;
    }

    document.getElementById("productsRow").innerHTML = temp;
}
//product//
//CREATE OPERATION//
function addProduct()
{   
    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productDesc = document.getElementById("productDescInp").value;
    var productCategory = document.getElementById("productCategory").value;
    var onsale;

    if(radioButtons[0].checked == true)
    {
        onsale = true;   
    }
    else
    {
        onsale =false;
    }


    var product = 
    {
        name:productName,
        price:productPrice,
        category:productCategory,
        desc:productDesc,
        sale:onsale
    }

    
    productsContainer.push(product);//defly el data

    //localstorage de elly b5zn fe7a el data w lazm tkon string w 34an a7wl7a l string by function called json
    localStorage.setItem("productsX" ,JSON.stringify(productsContainer));

    displayProducts();//m3 kol mlwa e3rd7oly
    clearForm();


}

///////el display//////

//RETRIEVE OPERATION//

function displayProducts()
{
    var temp = ``;

    for(var i =0 ;i < productsContainer.length ; i++)
    {
            temp +=`
            <div class="col-md-3">
            
                <h2 class="text-center">`+productsContainer[i].price+`</h2>
                    
                <div class="product">
                <div class="price">`+productsContainer[i].price+`</div>
                    <img src="images/1.jpg" class="img-fluid">
                    <h5>`+productsContainer[i].name+`<span class="ml-3 badge badge-primary">`+productsContainer[i].category+`</span> </h5>
               <p>`+productsContainer[i].desc+`</p>`;

            if(productsContainer[i].sale == true)
            {
                temp +=`<div class="sale">sale</div>`;

            }
               
               
                    temp +=`</div>
                    <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm mb-4">delete</button>
                    <button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm mb-4">update</button>

            </div>`;
    }

    document.getElementById("productsRow").innerHTML = temp;//kda hy7ot el data f div row 34an tt3rd
}

//delete operation//
function deleteProduct(index)
{
   //window.alert(index)
    //splice de function bt remove element from array (rl index de el div elly 3ayz ams7a w el 1 de b2olo eny 3ayz 3nsr wahd ytms7)
    var deleted=productsContainer.splice(index,1);
    // lazm el steps de 34am ams7 el data mn local storage 
    localStorage.setItem("productsX" ,JSON.stringify(productsContainer));

    displayProducts();

}
// Clear form after regesreration//
function clearForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value=""
    }
  
  }


  //update operation//
  function updateProduct(td)
  {  document.getElementById("productNameInp").value=productsContainer[td].name;
   document.getElementById("productPriceInp").value=productsContainer[td].price;
 document.getElementById("productDescInp").value=productsContainer[td].desc;
 document.getElementById("productCategory").value=productsContainer[td].category;


//  document.getElementById("add-btn").addEventListener("click",function(){


//     productsContainer[td].name= document.getElementById("productNameInp").value;
//     productsContainer[td].price= document.getElementById("productPriceInp").value;
//     productsContainer[td].desc=document.getElementById("productDescInp").value;
//     productsContainer[td].category= document.getElementById("productCategory").value;

//     alert(  productsContainer[td].name);

// //     localStorage.setItem("productsX" ,JSON.stringify(productsContainer));

// //     displayProducts();//m3 kol mlwa e3rd7oly
// //   //  clearForm();


//  })

document.getElementById("add-btn").onclick=function(){
    
    productsContainer[td].name= document.getElementById("productNameInp").value;
    productsContainer[td].price= document.getElementById("productPriceInp").value;
    productsContainer[td].desc=document.getElementById("productDescInp").value;
    productsContainer[td].category= document.getElementById("productCategory").value;

    //alert(  productsContainer[td].name);

    localStorage.setItem("productsX" ,JSON.stringify(productsContainer));

    displayProducts();//m3 kol mlwa e3rd7oly
   clearForm();



}



  

  
  }

const productsApi ="https://afternoon-falls-30227.herokuapp.com/api/v1/products/";


showHome();

function showHome(){
const xhr = new XMLHttpRequest();
xhr.open("GET",productsApi);
xhr.send();
xhr.onload = function(){


    const products = JSON.parse(xhr.response).data;
    console.log(products);
    const productsList = document.getElementById("productsList");

        products.forEach(product => {

            var productDiv = document.createElement('div');
            var productNames = document.createElement('h1');
            var productImg = document.createElement('img');
            var productPrices = document.createElement('p');
            var productAdd = document.createElement('p');
            var addBtn = document.createElement('button');
            var a = product.ProductId;


            productDiv.classList.add("card");
            productDiv.classList.add("mt-3");
            productPrices.classList.add("price");
            addBtn.classList.add('add-cart');
            productImg.src = product.ProductPicUrl;
            productNames.innerText = product.Name;
            productPrices.innerText = `$${product.Price}`;
            addBtn.innerText = "Add to Cart"


            productDiv.appendChild(productImg);
            productDiv.appendChild(productNames);
            productDiv.appendChild(productPrices);
            productDiv.appendChild(productAdd);
            productAdd.appendChild(addBtn);
            productsList.appendChild(productDiv);


            
        addBtn.addEventListener('click',function(){
            cartNumbers();
            addProduct();
        })

        function addProduct(){

            let productId = localStorage.getItem(product.ProductId);
            console.log(productId);

            if(productId){
                const productItem = JSON.parse(localStorage.getItem(product.ProductId));
                productItem.inCart++;
                localStorage.setItem(product.ProductId,JSON.stringify(productItem));
            } else {
                product.inCart=1;
                localStorage.setItem(product.ProductId,JSON.stringify(product));
                // document.getElementById().innerText = 1;
            }

        }

        

        function cartNumbers(){
            let productNumbers = localStorage.getItem('cartNumber');
            productNumbers = parseInt(productNumbers);

            if(productNumbers){
                localStorage.setItem('cartNumber',productNumbers + 1);
                document.getElementById('lblCartCount').innerText = productNumbers + 1;
        
            } else {
                localStorage.setItem('cartNumber',1);
                document.getElementById('lblCartCount').innerText = 1;
            }
        }

        
            productImg.addEventListener('click',function(){
            
                var xhr2=new XMLHttpRequest();
                
                xhr2.open('GET',"https://afternoon-falls-30227.herokuapp.com/api/v1/products/"+a+"")
                xhr2.send();
                
                let singleProduct='';
                xhr2.onload=function(){
                    var data2=xhr2.response
                    var id=JSON.parse(data2).data
                    console.log(id)
    
                    singleProduct+=`
                        <div class="container px-4 px-lg-5 my-5">
                            <div class="row gx-4 gx-lg-5 align-items-center shadow-lg p-3 mb-5 rounded" style="background: white;">
                                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${id.ProductPicUrl}" alt="..." /></div>
                                <div class="col-md-6">
                                    <div class="small mb-1">${id.ProductId}</div>
                                    <h1 class="display-5 fw-bolder">${id.Name}</h1>
                                    <div class="fs-5 mb-5">
                                        <span>$ ${id.Price}</span>
                                    </div>
                                    <p class="lead">${id.Description}</p>
                                    <div class="d-flex">
                                        <input class="form-control text-center me-3" id="inputQuantity" type="number" value="1" min="1" max="${id.Quantity}" style="max-width: 5rem" />
                                        <button id="addcart" class="add-cart btn btn-outline-dark flex-shrink-0" type="button">
                                            <i class="bi-cart-fill me-1"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `  
                    productsList.innerHTML=singleProduct
                    
                    const add = document.getElementById("addcart");
                    add.addEventListener('click',function(){
                        cartNumbers();
                        addProduct();
                    })

                    function cartNumbers(){
                        let productNumbers = localStorage.getItem('cartNumber');
                        productNumbers = parseInt(productNumbers);
                        if(productNumbers){
                            localStorage.setItem('cartNumber',productNumbers + 1);
                            document.getElementById('lblCartCount').innerText = productNumbers + 1;
                    
                        } else {
                            localStorage.setItem('cartNumber',1);
                            document.getElementById('lblCartCount').innerText = 1;
                        }
                    }


                    function addProduct(){

                        let productId = localStorage.getItem(product.ProductId);
            
                        if(productId){
                            const productItem = JSON.parse(localStorage.getItem(product.ProductId));
                            console.log(productId);
                            productItem.inCart++;
                            localStorage.setItem(product.ProductId,JSON.stringify(productItem));
                        } else {
                            product.inCart=1;
                            localStorage.setItem(product.ProductId,JSON.stringify(product));
                            console.log(productId);

                            // document.getElementById().innerText = 1;
                        }
            
                    }
            

                }
    
                
    
    
                
            })
        })




        cont2.style.display = "none"
        cont3.style.display = "none"
        cont4.style.display = "none"
}
}




const itemBody = document.getElementById('itemBody');
const cartTotal  = document.getElementById('cartPrice');



function allStorage(){

    var values = [],
        items = Object.keys(localStorage),
        i = items.length;

    while ( i-- ) {
        values.push( localStorage.getItem(items[i]) );
    }

    return values;

}


// $(document).ready(function() {  
//     $('#cartModal').modal('show');
//   });







var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

var homePage = document.getElementById("productsList");
var aboutPage = document.getElementById("about");
var contactUsPage = document.getElementById("contactus");
var cartPage = document.getElementById("cart");
var cont1=document.getElementById("cont1");
var cont2=document.getElementById("cont2");
var cont3=document.getElementById("cont3");
var cont4=document.getElementById("cont4");


function changeColor(){
    btn1.style.color = "#000"
    btn2.style.color = "#808080"
    btn3.style.color = "#808080"
    btn4.style.color = "#808080"
    cont1.style.display = "flex"
    cont2.style.display = "none"
    cont3.style.display = "none"
    cont4.style.display = "none"
    homePage.innerHTML="";

}

function changeColor2(){
    btn1.style.color = "#808080"
    btn2.style.color = "#000"
    btn3.style.color = "#808080"
    btn4.style.color = "#808080"
    cont1.style.display = "none"
    cont2.style.display = "flex"
    cont3.style.display = "none"
    cont4.style.display = "none"
}

function changeColor3(){
    btn1.style.color = "#808080"
    btn2.style.color = "#808080"
    btn3.style.color = "#000"
    btn4.style.color = "#808080"
    cont1.style.display = "none"
    cont2.style.display = "none"
    cont3.style.display = "flex"
    cont4.style.display = "none"
}

function changeColor4(){
    btn1.style.color = "#808080"
    btn2.style.color = "#808080"
    btn3.style.color = "#808080"
    btn4.style.color = "#000"
    cont1.style.transform = "none"
    cont2.style.transform = "none"
    cont3.style.transform = "none"
    cont4.style.transform = "flex"
}


btn5.addEventListener('click',function(){
    changeColor();
    showHome();
})

btn7.addEventListener('click',function(){
    changeColor();
    showHome();
})

btn6.addEventListener('click',function(){
    changeColor();
    showHome();
})



btn1.addEventListener('click',function(){
    changeColor();
    showHome();
})

btn2.addEventListener('click',function(){
    changeColor2();
})

btn3.addEventListener('click',function(){
    changeColor3();
})

btn4.addEventListener('click',loadItems);

function loadItems(){
    changeColor4();
    let store = allStorage();
    itemBody.innerHTML="";
    let total = 0;
    for(let i=0;i<store.length-1;i++){
        let itemObj = JSON.parse(store[i]);

        const item = `<tr>
                <td class="w-25">
                    <img src="${itemObj.ProductPicUrl}" class="img-fluid img-thumbnail">
                </td>
                <td id="${itemObj.productId}">${itemObj.Name}</td>
                <td>$${itemObj.Price}</td>
                <td class="qty">${itemObj.inCart}</td>
                <td>$${itemObj.inCart*itemObj.Price}</td>
                <td>
                    <a href="#" id="rmv" class="btn btn-danger btn-sm">
                        <i class="fa fa-times"></i>
                    </a>
                </td>
            </tr>`

            itemBody.innerHTML += item;
            let removeBtn = document.getElementById("rmv");
            removeBtn.addEventListener('click',function(){
                const productItem = JSON.parse(localStorage.getItem(itemObj.ProductId));
                let cartNumber = Number(localStorage.getItem('cartNumber'));
                cartNumber -= productItem.inCart;
                localStorage.setItem('cartNumber',cartNumber);
                localStorage.removeItem(itemObj.ProductId);
                cartNumbers();
                loadItems();

            })

            function cartNumbers(){
                let productNumbers = localStorage.getItem('cartNumber');
                productNumbers = parseInt(productNumbers);
                if(productNumbers){
                    localStorage.setItem('cartNumber',productNumbers + 1);
                    document.getElementById('lblCartCount').innerText = productNumbers + 1;
            
                } else {
                    document.getElementById('lblCartCount').innerText = productNumbers;
                }
            }


            total+=itemObj.inCart*itemObj.Price;
            
            
    }

    cartTotal.innerText=`$${total}`;
}




/********************************validate********************/
function validateForm() {
    var contactName = document.forms["contactForm"]["name"].value;
    var contactSubject = document.forms["contactForm"]["subject"].value;
    var contactEmail = document.forms["contactForm"]["email"].value;
    var contactMessage = document.forms["contactForm"]["message"].value;

    if (contactName == "") {
      alert("Name must be filled out");
      return false;
    }if ( contactSubject == ""){
        alert("Subject must be filled out");
        return false
    }if(contactEmail == ""){
        alert("Email must be filled out");
        return false
    }if(contactMessage == ""){
        alert("Message must be filled out");
        return false
    }if(contactName !== "" && contactSubject !=="" && contactEmail !== "" && contactMessage !== ""){
        alert("Thank you for contacting us !");
        return true
    }
  }
//-----------------------------Contact Us-----------------------------//

var userApi2= "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us"

var contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    var name = document.getElementById('cname');
    var email = document.getElementById('cemail');
    var subject = document.getElementById('csubject');
    var message = document.getElementById('cmessage');

 const contactData={
    name : name.value,
    email : email.value,
    subject : subject.value,
    message : message.value,
 };

  // Send request

 var xhrPost=new XMLHttpRequest();
 xhrPost.open("post",userApi2 )
 xhrPost.setRequestHeader("Content-Type", "application/json");
 xhrPost.send(JSON.stringify(contactData))

 console.log(xhrPost.response);
  // Recieve Response and reset the form

 xhrPost.onload =function(){
    console.log("request accepted" );
    contactForm.reset();
 }





})


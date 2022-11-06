const saveBtn = document.querySelector('.save_btn');
const typeSwitcher = document.getElementById('productType');

const sku = document.getElementById('sku');
const name = document.getElementById('name');
const price = document.getElementById('price');

//DVD
const size = document.getElementById('size');
//Furniture
const height = document.getElementById('height');
const width = document.getElementById('width');
const length = document.getElementById('length');
//Book
const weight = document.getElementById('weight');


typeSwitcher.addEventListener('click',function(){
    if(this.value === 'Furniture'){
        document.querySelector('.dvd_form').style.display = 'none';
        document.querySelector('.book_form').style.display = 'none';
        document.querySelector('.furniture_form').style.display = 'block';
        document.querySelector('.foo').style.paddingTop = '230px';
    }
    if(this.value === 'Book'){
        document.querySelector('.dvd_form').style.display = 'none';
        document.querySelector('.furniture_form').style.display = 'none';
        document.querySelector('.book_form').style.display = 'block';
        document.querySelector('.foo').style.paddingTop = '160px';
    }
    if(this.value === 'DVD'){
        document.querySelector('.dvd_form').style.display = 'block';
        document.querySelector('.furniture_form').style.display = 'none';
        document.querySelector('.book_form').style.display = 'none';
        document.querySelector('.foo').style.paddingTop = '160px';
    }
    // console.log('I selected:'+ this.value);
});


saveBtn.addEventListener('click', function(){
    if(!!saveBtn){
        if(sku !== null && name !== null && price !== null){
            //if selected DVD
            if(typeSwitcher.value === 'DVD'){
                if(size !== null){
                    //create block createElement and adding to the end
                   
                    const newUl = document.createElement('ul');
                    const newLi = document.createElement('li');
                    newUl.style.display ='flex';
                    newUl.style.flexDirection ='row';

                    newLi.id = 'new_product';
                    newLi.style.border = '1px solid black';
                    newLi.style.width = '300px';
                    newLi.style.height = '200px';
                    
                    newLi.textContent = `${sku.value}
                                          ${name.value}
                                          ${price.value}
                                          ${size.value}
                                          `;
                    newLi.style.padding = '50px 80px 50px 80px';
                    
                    

                    newLi.style.color = 'red';
                    newLi.style.fontSize = '16px';
                    
                    newUl.appendChild(newLi);
                    document.appendChild(newLi);
                } 
            }
            //if selected Furniture
            if(typeSwitcher.value === 'Furniture'){
                if(size !== null){
                    //create block createElement and adding to the end
                   
                    const newDiv = document.createElement('li');
                    newDiv.id = 'new_product';
                    newDiv.style.border = '1px solid black';
                    newDiv.style.width = '300px';
                    newDiv.style.height = '200px';
                    
                    newDiv.textContent = `${sku.value}
                                          ${name.value}
                                          ${price.value}
                                          ${height.value}
                                          ${width.value}
                                          ${length.value}`;
                    newDiv.style.padding = '50px 80px 50px 80px';
                    
                    

                    newDiv.style.color = 'red';
                    newDiv.style.fontSize = '18px';
                    
                    document.body.appendChild(newDiv);
                } 
            }
            //if selected Book
            if(typeSwitcher.value === 'Book'){
                if(size !== null){
                    //create block createElement and adding to the end
                   
                    const newDiv = document.createElement('li');
                    newDiv.id = 'new_product';
                    newDiv.style.border = '1px solid black';
                    newDiv.style.width = '300px';
                    newDiv.style.height = '200px';
                    
                    newDiv.textContent = `${sku.value}
                                          ${name.value}
                                          ${price.value}
                                          ${weight.value}`;
                    newDiv.style.padding = '50px 80px 50px 80px';
                    
                    

                    newDiv.style.color = 'red';
                    newDiv.style.fontSize = '16px';
                    
                    document.body.appendChild(newDiv);
                } 
            }
        }
        else {
            alert('Firstly enter below values: sku, name, price!');
        }
    }
});
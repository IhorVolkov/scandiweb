

const massRemove = document.querySelector('.delete_product_button');
const Allli = document.querySelectorAll('li');
const checkboxes = document.querySelectorAll('.delete_checkbox');




checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(e){
        let choosen = e.target.checked;
        if(choosen){
            console.log('Checked!');
            // console.log(choosen);
            massRemove.addEventListener('click', function(){
                if(!!massRemove){
                    Allli.forEach(li => {
                        if(li.children[0].checked){
                            li.remove(li);
                        }
                        // if(li.children[0].checked && document.querySelector('.box_container').children[0]){
                        //     document.querySelector('.box_container').children[1].style.paddingTop = '0px';
                        //     document.querySelector('.box_container').children[2].style.paddingTop = '50px';
                        // }
                        // if(li.children[0].checked && document.querySelector('.box_container').children[1]){
                        //     document.querySelector('.box_container').children[0].style.paddingTop = '0px';
                        //     document.querySelector('.box_container').children[1].style.paddingTop = '0px';
                        //     document.querySelector('.box_container').children[2].style.paddingTop = '50px';
                        // }
                        // if(li.children[0].checked && document.querySelector('.box_container').children[2]){
                        //     document.querySelector('.box_container').children[0].style.paddingTop = '0px';
                        //     document.querySelector('.box_container').children[1].style.paddingTop = '50px';
                        //     document.querySelector('.box_container').children[2].style.paddingTop = '0px';
                        // }
                    });
                }
            });
        }
        if(!choosen) {
            console.log('Unchecked');
            console.log(choosen);
            }
    });
});

//alert('Firstly choose the block, which you want to delete!');


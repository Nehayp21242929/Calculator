let string="";
let buttons= document.querySelectorAll('.plate');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string+=e.target.innerHTML;
        document.querySelector('input').value=string;
       }
     

    })

})
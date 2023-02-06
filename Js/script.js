let img_slider= document.getElementsByClassName('img_slider');

let etape = 0;

let nbr_img = img_slider.length;

let precedent= document.querySelector('.precedant');
let suivant = document.querySelector('.suivant');


var PRS = Array.from(document.querySelectorAll('.Produit'));
var moins=Array.from(document.querySelectorAll('.minus'));
var plus=Array.from(document.querySelectorAll('.plus'));

var qtes = Array.from(document.querySelectorAll('.quantite'));
var prixs = Array.from(document.querySelectorAll('.Tarif'));



var envoyer = document.getElementById('submit');






function enleverActiveImages()
{
    for(let i=0 ; i<nbr_img ; i++){
        img_slider[i].classList.remove('active');

    }
} 

suivant.addEventListener('click', function(){
    
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})


precedent.addEventListener('click', function(){
    
    etape--;
    if(etape < 0){
        etape=nbr_img-1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

setInterval(function(){
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');

},3000)


// Produit--------------------------




for (let m of moins ) // reduire nbre de produit 
{
    

    m.addEventListener("click",function() {


        m.nextElementSibling.innerHTML==0?
        null :
      
        m.nextElementSibling.innerHTML--;

       total();
    })
}

for (let p of plus) // Ajout nbre de  produit
{
    p.addEventListener("click",function() {
        
        p.previousElementSibling.innerHTML++;
        total();
        console.log(  document.getElementById("Total").innerHTML)
        
      
    })
}


function total(){
    let s = 0;

    for( let i=0 ; i < qtes.length ; i++)
    {
        s=s+qtes[i].innerHTML*prixs[i].innerHTML; }

        document.getElementById("Total").innerHTML = s;



}




// Form --------------------------------------------------------

envoyer.addEventListener("click",function(){

    alert(" Envoi avec Succée . . . ")
})

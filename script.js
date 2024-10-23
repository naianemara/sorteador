function sortear() {
    const min = Math.ceil( document.querySelector(".input-left").value);
    const max = Math.floor( document.querySelector(".input-right").value);

    if(max <= min){
        alert("O valor minino tem que ser MENOR que o valor maximo")
    } else {
       const result =  Math.floor (Math.random() * ( max - min + 1)) + min

       alert (result)
    }
    
   
         
}
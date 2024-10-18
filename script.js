function sortear() {
    const min = Math.ceil( document.querySelector(".input-left").value);
    const max = Math.floor( document.querySelector(".input-right").value);
    
    alert ( Math.floor (Math.random() * ( max - min + 1) + min))
         
}
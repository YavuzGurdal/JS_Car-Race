function move() {  

    var carr1 = document.getElementById("car1");
    var carr2 = document.getElementById("car2");

    var position1 = 0;
    var position2 = 0; 

    var sonuc = document.getElementById("p1")

    var idVar = setInterval(change, 10);  
    
    

    function change() { 
        
        position1 += Math.floor(Math.random() * 5) + 1;
        position2 += Math.floor(Math.random() * 5) + 1;

        carr1.style.left = `${10 + position1}px`;
        carr2.style.left = 10 + position2 + "px";
        // ikisi de aynı işi yapiyor
      
        if ( position1 >= 1000){
                clearInterval(idVar);
                sonuc.style.color = "red";
                sonuc.innerHTML = "Kırmızı araba kazandı";
        } else if ( position2 >= 1000) {
            clearInterval(idVar);
            sonuc.innerHTML = "Sarı araba kazandı";
            sonuc.style.color = "#bdac13";
        } else if (position1 >= 1000 && position2 >= 1000 && position1 == position2) {
            clearInterval(idVar)
            sonuc.innerHTML = "Berabere";
        }
        
    } 
}

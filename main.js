
function move() {  

    var x = Math.floor(Math.random() * 5) + 1;

    var y = Math.floor(Math.random() * 5) + 1;
    
    var carr1 = document.getElementById("car1");   
    var car1Margin = x; 

    var carr2 = document.getElementById("car2");   
    var car2Margin = y;  

    var sonuc = document.getElementById("p1")

    var sayac = 0;

    var idVar = setInterval(change, 40);  
    
    

    function change() {    
      
        if (sayac == 80){
            if ( x > y) {
                sonuc.style.color = "red";
                sonuc.innerHTML = "Kırmızı araba kazandı";
            } else if ( x < y) {
                sonuc.innerHTML = "Sarı araba kazandı";
                sonuc.style.color = "#bdac13";
            } else {
                sonuc.innerHTML = "Berabere";
            }

            clearInterval(idVar)
        } else {      
            car1Margin++;        
            carr1.style.marginLeft = car1Margin + "1px";

            car2Margin++;        
            carr2.style.marginLeft = car2Margin + "1px";
  
            sayac = sayac + 1;
        }  
    }
}
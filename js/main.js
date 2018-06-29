var nome = 'Jedi';
var sobreNome = 'Pm';
var colors = ["aliceBlue","antiqueWhite","aqua","aquamarine","azure","beige","bisque","black"];
const changeColor = () => {
    
    var last;
     
    if(this.colors.indexOf(document.getElementById('title').style.color) != -1){
        last = this.colors.indexOf(document.getElementById('title').style.color); 
    }else{
        last = 2;
    }
    
    if(last == (this.colors.length-1)){
        last = 0;
    }else{
        last+= 1;
    }
       
    document.getElementById('title').style.color = colors[last];
    
}


document.getElementById('ss').innerHTML = "Mestre " + this.nome;


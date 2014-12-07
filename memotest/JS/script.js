window.onload = principal;
var datoid;
var datosrc;
var dato2id;
var dato2src;
var suma = 0;
var cont = 0;
var cont2=0;
var igual;
var time=0;
var cuentaaciertos =18;
var intentos =0;
var puntos=0;
var juego=0;
var aSRC = new Array("<img width='100px' heigth='100px' src='imgs/1.jpg' />", "<img width='100px' heigth='100px' src='imgs/2.jpg' />", "<img width='100px' heigth='100px' src='imgs/3.jpg' />",
"<img width='100px' heigth='100px' src='imgs/4.jpg' />", "<img width='100px' heigth='100px' src='imgs/5.jpg' />", "<img width='100px' heigth='100px' src='imgs/6.jpg' />", 
"<img width='100px' heigth='100px' src='imgs/7.jpg' />", "<img width='100px' heigth='100px' src='imgs/8.jpg' />", "<img width='100px' heigth='100px' src='imgs/9.jpg' />", 
"<img width='100px' heigth='100px' src='imgs/10.jpg' />", "<img width='100px' heigth='100px' src='imgs/11.jpg' />", "<img width='100px' heigth='100px' src='imgs/12.jpg' />", 
"<img width='100px' heigth='100px' src='imgs/13.jpg' />", "<img width='100px' heigth='100px' src='imgs/14.jpg' />", "<img width='100px' heigth='100px' src='imgs/15.jpg' />", 
"<img width='100px' heigth='100px' src='imgs/16.jpg' />", "<img width='100px' heigth='100px' src='imgs/17.jpg' />", "<img width='100px' heigth='100px' src='imgs/18.jpg' />"); 
var gdatos = new Array ();
var Asrc = new Array();

function principal(){
	cargaarrayimg();
	$("emp").onclick = empieza;
	$("resultado").style.zIndex = -1;
}
function empieza(){
	idTimer = setInterval(tiempo,1000);
	$('emp').style.zIndex = -1;
	for (var y=0; y<36; y++){
		$(y).onclick = verimg;
	}
}
function cargaarrayimg(){
	var f=-1;
    do{
        var Rsrc = aSRC[Math.floor(Math.random()*aSRC.length)];
        for (var y=0; y<aSRC.length; y++){
                if (Rsrc == aSRC[y]){
                    var posicion = y;
					if(Rsrc != undefined){
					gdatos[cont] = aSRC[y];}
                    delete aSRC[y];
                }
        }
        if(Rsrc != undefined){
            cont++;
        }
    }while(cont<18)
	
    
    
	for (var x=18; x<36; x++){
		 gdatos[x] = gdatos[x-18];
	}

	do{           
		var longitud = Math.floor(Math.random()*gdatos.length);
		if(gdatos[longitud] != undefined){
			Asrc[cont2] = gdatos[longitud];
			delete gdatos[longitud];
			cont2++;
		}
	}while(cont2<36)
}
function verimg(){
	id1 = (this.id);
	if (suma%2==0){
		if (igual == "no" && datoid != "a"){
			$(datoid).removeChild($(datoid).lastChild);
			$(dato2id).removeChild($(dato2id).lastChild);
		}
		$(id1).innerHTML = Asrc[id1];
		suma++;
		datoid=id1;
		datosrc=Asrc[id1];
	}
	else
	{	
		$(id1).innerHTML = Asrc[id1];
		suma++;
		dato2id=id1;
		dato2src=Asrc[id1];
		compara();
	}
	if (datoid==id1 && dato2id==id1){
		$(datoid).style.zIndex = 1;
		$(datoid).removeChild($(datoid).lastChild);
		datoid="a";
		dato2id="b";
		suma=0;
	}
}

function compara(){
	if (datosrc == dato2src && datoid != dato2id){
		igual="si";
		intentos++;
		cuentaaciertos--;
		$(dato2id).style.zIndex = -1;
		$(datoid).style.zIndex = -1;
		suma=0;
	}
	else {
		intentos++;
		igual="no";
	}

}

function tiempo(){
	if(juego==0){
		time++;
		aciertosrestantes = 18- cuentaaciertos;
		if (time>0 && time<=100 &&aciertosrestantes>0){
			puntos=aciertosrestantes*100;
		}
		if (time>100 && time<=200 &&aciertosrestantes>0){
			puntos=aciertosrestantes*50;
		}
		if (time>200 && time<=300 &&aciertosrestantes>0){
			puntos=aciertosrestantes*25;
		}
		if (time>300 && time<=500 &&aciertosrestantes>0){
			puntos=aciertosrestantes*10;
		}
		if (time>500 &&aciertosrestantes>0){
			puntos=aciertosrestantes*5;
		}
		$("datosjuego").innerHTML = "<p>Tiempo Transcurrido: "+time+" segundos</p>";
		$("datosjuego").innerHTML += "<p>Imagenes Restantes: "+cuentaaciertos+"</p>";
		$("datosjuego").innerHTML += "<p>Pares de Vueltas: "+intentos+"</p>";
		$("datosjuego").innerHTML += "<p><b>Puntos:"+puntos+"</b></p>";
	}
	if (cuentaaciertos==0){
		$("resultado").style.zIndex = 10;
		$("resultado").innerHTML ="<h1>GANASTE!</h1>";
		$("resultado").innerHTML +="<p>Tu puntaje es: "+puntos+"</p>";
		$("resultado").innerHTML +="<a href='javascript:location.reload()'>Volver a jugar</a>";
		juego=1;
	}
}



function $(nombre){
	return document.getElementById(nombre);
}
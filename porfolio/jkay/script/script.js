
window.onload = principal;

function principal()
{
	$("Div1").style.zIndex = 6;
	$("Div2").style.zIndex = 5;
	$("Div3").style.zIndex = 4;
	$("Div4").style.zIndex = 3;
	$("Div5").style.zIndex = 2; 
	$("Div6").style.zIndex = 1; 
	$("b1").onclick = subir;
	$("b2").onclick = subir;
	$("b3").onclick = subir;
	$("b4").onclick = subir;
	$("b5").onclick = subir;
	$("b6").onclick = subir;
	$("c1").onclick = subirbanda;
	$("c2").onclick = subirbanda;
	$("c3").onclick = subirbanda;
	$("c4").onclick = subirbanda;
	$("c5").onclick = subirbanda;
	$("c6").onclick = subirbanda;
	$("gimg").innerHTML = "<img src='images/gallery/gimg1.jpg'/>";
	$("gimg1").onclick = mostrarimg;
	$("gimg2").onclick = mostrarimg;
	$("gimg3").onclick = mostrarimg;
	$("gimg4").onclick = mostrarimg;
/*	$("gprev").onclick = previmg;
	$("gnext").onclick = nextimg;	*/	
}

function $(parametro){
	return document.getElementById(parametro);
}


function subir(){
	id1 = (this.id).split(/ */);
	$("Div1").style.zIndex = 1;
	$("Div2").style.zIndex = 2;
	$("Div3").style.zIndex = 3;
	$("Div4").style.zIndex = 4;
	$("Div5").style.zIndex = 5; 
	$("Div6").style.zIndex = 6; 
	$("Div" + id1[1]).style.zIndex = 10;
	 
}

function subirbanda(){
	idb = (this.id).split(/ */);
	 $("integrante1").style.zIndex = 1;
	 $("integrante2").style.zIndex = 2;
	 $("integrante3").style.zIndex = 3;
	$("integrante4").style.zIndex = 4;
	$("integrante5").style.zIndex = 5; 
	$("integrante6").style.zIndex = 6; 
	 $("integrante" + idb[1]).style.zIndex = 10;
	 
}
function mostrarimg(){
	var idg = this.src;
	$("gimg").innerHTML = "<img src="+idg+" />";
}
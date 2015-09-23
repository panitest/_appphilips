function alerta(mje,w){
	var ww=w || 466;
	ventana(ww,70);
	$('qq').innerHTML='<div class="cajaalert" style="width:'+ww+'px;  text-align:center;padding: 30px 0"><a onclick="cerrar();return false;" href="" style="display:block;width:15px;height:15px;position:absolute; background:url(images/bt_cerrar_2.png);right: 10px;top: 10px;"></a>'+mje+'</div>';
}
/*---*/
function error(el,desde, hasta,t){
	if(desde[0]!=hasta[0] || desde[1]!=hasta[1] || desde[2]!=hasta[2]){
		desde[0]=(desde[0]+3)<hasta[0]?desde[0]+3:hasta[0];
		desde[1]=(desde[1]+3)<hasta[1]?desde[1]+3:hasta[1];
		desde[2]=(desde[2]+3)<hasta[2]?desde[2]+3:hasta[2];
		el.style.backgroundColor='rgb('+desde[0]+','+desde[1]+','+desde[2]+')';
		setTimeout(function(){error(el,desde, hasta,t)},30);
	}else{
		if(t){
			el.style.backgroundColor='transparent';
		}
	}
}
/*---*/
function maxCaracteres(txt,mx){
	if(txt.length>mx){
		var length1=Math.floor(mx/2),length2=mx-length1;
		return txt.substr(0,length1)+'...'+txt.substr(-length2);
	}
	return txt;
}
if(!String.prototype.trim){  
  String.prototype.trim = function(){  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
}
function ver(e,callback){ 
    var t=e.keyCode || e.wich; 
    if(t==13){ 
        callback();
        return false; 
    } 
    return true; 
}
function solonro(e) { // 1
	/*uso  onkeypress="return solonro(event)"*/
    tecla = e.keyCode || e.which; // 2
    if (tecla==8 || tecla==0 || tecla==9  || tecla==46) return true; // 3
    patron =/\d/; // Solo acepta n?meros
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
} 
function sololetra(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8 || tecla==0 || tecla==9 || tecla==46) return true; // 3
    //if (tecla==32) return true; // espacio
    //if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
    //if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
    //if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
 
    patron = /[a-zA-Z]/; //patron
 
    te = String.fromCharCode(tecla); 
    return patron.test(te); // prueba de patron
} 
function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function cerrarInitLoading(){
	if($('initloading')){
		$('initloading').style.display='none';
	}
}
function rat(){
	request(
			'proceso.php',
				function(r){
					
				},
				{'proceso':'rat'}
	);
	setTimeout(rat,300000);
}

function pil1(){
	ventana(500,330);
	request('pil1.php',function(r){$('qq').innerHTML=r;},{});
}
function pil2(){
	ventana(770,530);
	request('pil2.php',function(r){$('qq').innerHTML=r;},{});
}
function pil3(){
	ventana(770,530);
	request('pil3.php',function(r){$('qq').innerHTML=r;},{});
}
function pil4(){
	ventana(770,530);
	request('pil4.php',function(r){$('qq').innerHTML=r;},{});
}
function pil5(){
	ventana(770,530);
	request('pil5.php',function(r){$('qq').innerHTML=r;},{});
}
function pil6(){
	ventana(770,530);
	request('pil6.php',function(r){$('qq').innerHTML=r;},{});
}
function pil_lola(){
	ventana(385,390);
	request('pil_lola.php',function(r){$('qq').innerHTML=r;},{});
}
function pil_atenti(){
	ventana(385,390);
	request('pil_atenti.php',function(r){$('qq').innerHTML=r;},{});
}
// ANIMATION DES SECTIONS POUR OUVERTURE
function openPage(page) {
	// suppression class open à toutes les sections de main remplacée par la classe close
	var allsections = document.querySelectorAll("main > section");
	for (var i = 0; i < allsections.length; ++i) { 
			allsections[i].classList.remove('open');
			allsections[i].classList.add('close');
	}
	// ajout de la classe open à la page
	document.getElementById(page).classList.add('open');
	document.getElementById(page).classList.remove('close');
	return false; 
}


// Variables
let liNav0 = document.getElementById("liNav0");
let liNav1 = document.getElementById("liNav1");
let liNav2 = document.getElementById("liNav2");
let liNav3 = document.getElementById("liNav3");
let liNav4 = document.getElementById("liNav4");
let liNav5 = document.getElementById("liNav5");
let liNav6 = document.getElementById("liNav6");

let profil = document.getElementById("profil");
let photoMin = document.getElementById("photoMin");

let expPro = document.getElementById("expPro");
let formPro = document.getElementById("formPro");
let comp = document.getElementById("comp");
let projPerso = document.getElementById("projPerso");
let hob = document.getElementById("hob");

let expProOpen = document.getElementById("expProOpen");
let formProOpen = document.getElementById("formProOpen");
let compOpen = document.getElementById("compOpen");
let projPersoOpen = document.getElementById("projPersoOpen");
let hobOpen = document.getElementById("hobOpen");


// Faire une fonction pour la gestion de tout les boutons
// Bouton profil MIN
liNav0.addEventListener("click",function(){
	profil.style='display:block';
	photoMin.src='assets/profil.jpg';
	photoMin.style='box-shadow: 0px 0px 5px 2px black';

	expPro.style='display:none';
	expProOpen.src='assets/menu/expProClose.png';
	expProOpen.removeAttribute("style", "box-shadow");

	formPro.style='display:none';
	formProOpen.src='assets/menu/formProClose.png';
	formProOpen.removeAttribute("style", "box-shadow");

	comp.style='display:none';
	compOpen.src='assets/menu/compClose.png';
	compOpen.removeAttribute("style", "box-shadow");

	projPerso.style='display:none';
	projPersoOpen.src='assets/menu/projPersoClose.png';
	projPersoOpen.removeAttribute("style", "box-shadow");

	hob.style='display:none';
	hobOpen.src='assets/menu/hobClose.png';
	hobOpen.removeAttribute("style", "box-shadow");
},false);

// Bouton profil MAX
liNav1.addEventListener("click",function(){
	profil.style='display:block';
	profilOpen.src='assets/menu/profilOpen.png';
	profilOpen.style='box-shadow: 0px 0px 5px 4px black';

	expPro.style='display:none';
	expProOpen.src='assets/menu/expProClose.png';
	expProOpen.removeAttribute("style", "box-shadow");

	formPro.style='display:none';
	formProOpen.src='assets/menu/formProClose.png';
	formProOpen.removeAttribute("style", "box-shadow");

	comp.style='display:none';
	compOpen.src='assets/menu/compClose.png';
	compOpen.removeAttribute("style", "box-shadow");

	projPerso.style='display:none';
	projPersoOpen.src='assets/menu/projPersoClose.png';
	projPersoOpen.removeAttribute("style", "box-shadow");

	hob.style='display:none';
	hobOpen.src='assets/menu/hobClose.png';
	hobOpen.removeAttribute("style", "box-shadow");
},false);

// Bouton expPro
liNav2.addEventListener("click",function(){
	document.getElementById("profil").style='display:none';
	document.getElementById("photoMin").src='assets/menu/profilClose.png';
	document.getElementById("photoMin").removeAttribute("style", "box-shadow");

	document.getElementById("profilOpen").src='assets/menu/profilClose.png';
	document.getElementById("profilOpen").removeAttribute("style", "box-shadow");

	document.getElementById("expPro").style='display:block';
	document.getElementById("expProOpen").src='assets/menu/expProOpen.png';
	document.getElementById("expProOpen").style='box-shadow: 0px 0px 5px 4px black';

	document.getElementById("formPro").style='display:none';
	document.getElementById("formProOpen").src='assets/menu/formProClose.png';
	document.getElementById("formProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("comp").style='display:none';
	document.getElementById("compOpen").src='assets/menu/compClose.png';
	document.getElementById("compOpen").removeAttribute("style", "box-shadow");

	document.getElementById("projPerso").style='display:none';
	document.getElementById("projPersoOpen").src='assets/menu/projPersoClose.png';
	document.getElementById("projPersoOpen").removeAttribute("style", "box-shadow");

	document.getElementById("hob").style='display:none';
	document.getElementById("hobOpen").src='assets/menu/hobClose.png';
	document.getElementById("hobOpen").removeAttribute("style", "box-shadow");
},false);

// Bouton formPro
liNav3.addEventListener("click",function(){
	document.getElementById("profil").style='display:none';
	document.getElementById("photoMin").src='assets/menu/profilClose.png';
	document.getElementById("photoMin").removeAttribute("style", "box-shadow");

	document.getElementById("profilOpen").src='assets/menu/profilClose.png';
	document.getElementById("profilOpen").removeAttribute("style", "box-shadow");

	document.getElementById("expPro").style='display:none';
	document.getElementById("expProOpen").src='assets/menu/expProClose.png';
	document.getElementById("expProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("formPro").style='display:block';
	document.getElementById("formProOpen").src='assets/menu/formProOpen.png';
	document.getElementById("formProOpen").style='box-shadow: 0px 0px 5px 4px black';

	document.getElementById("comp").style='display:none';
	document.getElementById("compOpen").src='assets/menu/compClose.png';
	document.getElementById("compOpen").removeAttribute("style", "box-shadow");

	document.getElementById("projPerso").style='display:none';
	document.getElementById("projPersoOpen").src='assets/menu/projPersoClose.png';
	document.getElementById("projPersoOpen").removeAttribute("style", "box-shadow");

	document.getElementById("hob").style='display:none';
	document.getElementById("hobOpen").src='assets/menu/hobClose.png';
	document.getElementById("hobOpen").removeAttribute("style", "box-shadow");
},false);

// Bouton comp
liNav4.addEventListener("click",function(){
	document.getElementById("profil").style='display:none';
	document.getElementById("photoMin").src='assets/menu/profilClose.png';
	document.getElementById("photoMin").removeAttribute("style", "box-shadow");

	document.getElementById("profilOpen").src='assets/menu/profilClose.png';
	document.getElementById("profilOpen").removeAttribute("style", "box-shadow");

	document.getElementById("expPro").style='display:none';
	document.getElementById("expProOpen").src='assets/menu/expProClose.png';
	document.getElementById("expProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("formPro").style='display:none';
	document.getElementById("formProOpen").src='assets/menu/formProClose.png';
	document.getElementById("formProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("comp").style='display:block';
	document.getElementById("compOpen").src='assets/menu/compOpen.png';
	document.getElementById("compOpen").style='box-shadow: 0px 0px 5px 4px black';

	document.getElementById("projPerso").style='display:none';
	document.getElementById("projPersoOpen").src='assets/menu/projPersoClose.png';
	document.getElementById("projPersoOpen").removeAttribute("style", "box-shadow");

	document.getElementById("hob").style='display:none';
	document.getElementById("hobOpen").src='assets/menu/hobClose.png';
	document.getElementById("hobOpen").removeAttribute("style", "box-shadow");
},false);

// Bouton projPerso
liNav5.addEventListener("click",function(){
	document.getElementById("profil").style='display:none';
	document.getElementById("photoMin").src='assets/menu/profilClose.png';
	document.getElementById("photoMin").removeAttribute("style", "box-shadow");

	document.getElementById("profilOpen").src='assets/menu/profilClose.png';
	document.getElementById("profilOpen").removeAttribute("style", "box-shadow");

	document.getElementById("expPro").style='display:none';
	document.getElementById("expProOpen").src='assets/menu/expProClose.png';
	document.getElementById("expProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("formPro").style='display:none';
	document.getElementById("formProOpen").src='assets/menu/formProClose.png';
	document.getElementById("formProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("comp").style='display:none';
	document.getElementById("compOpen").src='assets/menu/compClose.png';
	document.getElementById("compOpen").removeAttribute("style", "box-shadow");

	document.getElementById("projPerso").style='display:block';
	document.getElementById("projPersoOpen").src='assets/menu/projPersoOpen.png';
	document.getElementById("projPersoOpen").style='box-shadow: 0px 0px 5px 4px black';

	document.getElementById("hob").style='display:none';
	document.getElementById("hobOpen").src='assets/menu/hobClose.png';
	document.getElementById("hobOpen").removeAttribute("style", "box-shadow");
},false);


// Bouton hob
liNav6.addEventListener("click",function(){
	document.getElementById("profil").style='display:none';
	document.getElementById("photoMin").src='assets/menu/profilClose.png';
	document.getElementById("photoMin").removeAttribute("style", "box-shadow");

	document.getElementById("profilOpen").src='assets/menu/profilClose.png';
	document.getElementById("profilOpen").removeAttribute("style", "box-shadow");

	document.getElementById("expPro").style='display:none';
	document.getElementById("expProOpen").src='assets/menu/expProClose.png';
	document.getElementById("expProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("formPro").style='display:none';
	document.getElementById("formProOpen").src='assets/menu/formProClose.png';
	document.getElementById("formProOpen").removeAttribute("style", "box-shadow");

	document.getElementById("comp").style='display:none';
	document.getElementById("compOpen").src='assets/menu/compClose.png';
	document.getElementById("compOpen").removeAttribute("style", "box-shadow");

	document.getElementById("projPerso").style='display:none';
	document.getElementById("projPersoOpen").src='assets/menu/projPersoClose.png';
	document.getElementById("projPersoOpen").removeAttribute("style", "box-shadow");

	document.getElementById("hob").style='display:block';
	document.getElementById("hobOpen").src='assets/menu/hobOpen.png';
	document.getElementById("hobOpen").style='box-shadow: 0px 0px 5px 4px black';

},false);
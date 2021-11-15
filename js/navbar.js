// ANIMATION DES SECTIONS POUR OUVERTURE
function openPage(page) {
	// suppression class open à toutes les sections de main remplacée par la classe close
	var allsections = document.querySelectorAll("main > section");
	for (var i = 0; i < allsections.length; ++i) { 
			allsections[i].classList.remove('open');
	}
	// ajout de la classe open à la page
	document.getElementById(page).classList.add('open');
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
liNav0.addEventListener("click", () => {
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
liNav1.addEventListener("click", () => {
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
liNav2.addEventListener("click", () => {
	profil.style='display:none';
	photoMin.src='assets/menu/profilClose.png';
	photoMin.removeAttribute("style", "box-shadow");

	profilOpen.src='assets/menu/profilClose.png';
	profilOpen.removeAttribute("style", "box-shadow");

	expPro.style='display:block';
	expProOpen.src='assets/menu/expProOpen.png';
	expProOpen.style='box-shadow: 0px 0px 5px 4px black';

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

// Bouton formPro
liNav3.addEventListener("click", () => {
	profil.style='display:none';
	photoMin.src='assets/menu/profilClose.png';
	photoMin.removeAttribute("style", "box-shadow");

	profilOpen.src='assets/menu/profilClose.png';
	profilOpen.removeAttribute("style", "box-shadow");

	expPro.style='display:none';
	expProOpen.src='assets/menu/expProClose.png';
	expProOpen.removeAttribute("style", "box-shadow");

	formPro.style='display:block';
	formProOpen.src='assets/menu/formProOpen.png';
	formProOpen.style='box-shadow: 0px 0px 5px 4px black';

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

// Bouton comp
liNav4.addEventListener("click", () => {
	profil.style='display:none';
	photoMin.src='assets/menu/profilClose.png';
	photoMin.removeAttribute("style", "box-shadow");

	profilOpen.src='assets/menu/profilClose.png';
	profilOpen.removeAttribute("style", "box-shadow");

	expPro.style='display:none';
	expProOpen.src='assets/menu/expProClose.png';
	expProOpen.removeAttribute("style", "box-shadow");

	formPro.style='display:none';
	formProOpen.src='assets/menu/formProClose.png';
	formProOpen.removeAttribute("style", "box-shadow");

	comp.style='display:block';
	compOpen.src='assets/menu/compOpen.png';
	compOpen.style='box-shadow: 0px 0px 5px 4px black';

	projPerso.style='display:none';
	projPersoOpen.src='assets/menu/projPersoClose.png';
	projPersoOpen.removeAttribute("style", "box-shadow");

	hob.style='display:none';
	hobOpen.src='assets/menu/hobClose.png';
	hobOpen.removeAttribute("style", "box-shadow");
},false);

// Bouton projPerso
liNav5.addEventListener("click", () => {
	profil.style='display:none';
	photoMin.src='assets/menu/profilClose.png';
	photoMin.removeAttribute("style", "box-shadow");

	profilOpen.src='assets/menu/profilClose.png';
	profilOpen.removeAttribute("style", "box-shadow");

	expPro.style='display:none';
	expProOpen.src='assets/menu/expProClose.png';
	expProOpen.removeAttribute("style", "box-shadow");

	formPro.style='display:none';
	formProOpen.src='assets/menu/formProClose.png';
	formProOpen.removeAttribute("style", "box-shadow");

	comp.style='display:none';
	compOpen.src='assets/menu/compClose.png';
	compOpen.removeAttribute("style", "box-shadow");

	projPerso.style='display:block';
	projPersoOpen.src='assets/menu/projPersoOpen.png';
	projPersoOpen.style='box-shadow: 0px 0px 5px 4px black';

	hob.style='display:none';
	hobOpen.src='assets/menu/hobClose.png';
	hobOpen.removeAttribute("style", "box-shadow");
},false);


// Bouton hob
liNav6.addEventListener("click", () => {
	profil.style='display:none';
	photoMin.src='assets/menu/profilClose.png';
	photoMin.removeAttribute("style", "box-shadow");

	profilOpen.src='assets/menu/profilClose.png';
	profilOpen.removeAttribute("style", "box-shadow");

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

	hob.style='display:block';
	hobOpen.src='assets/menu/hobOpen.png';
	hobOpen.style='box-shadow: 0px 0px 5px 4px black';

},false);
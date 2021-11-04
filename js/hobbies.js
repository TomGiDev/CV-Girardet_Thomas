	let liHob1 = document.getElementById("liHob1");
  let liHob2 = document.getElementById("liHob2");
  let liHob3 = document.getElementById("liHob3");
  let liHob4 = document.getElementById("liHob4");
  let liHob5 = document.getElementById("liHob5");
  let liHob6 = document.getElementById("liHob6");

  let imageGif = document.getElementById("imageGif");

  
  liHob1.addEventListener("mouseout", () => {
    // ajouter une classe showGif ou je reprend imageGif.classList.toggle('showGif')
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob1.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/musique.gif';
  },false);

  liHob2.addEventListener("mouseout", () => {
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob2.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/vtt.gif';
  },false);

  liHob3.addEventListener("mouseout", () => {
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob3.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/voyage.gif';
  },false);

  liHob4.addEventListener("mouseout", () => {
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob4.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/rando.gif';
  },false);

  liHob5.addEventListener("mouseout", () => {
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob5.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/lecture.gif';
  },false);

  liHob6.addEventListener("mouseout", () => {
	  imageGif.src='assets/gif/image.jpeg';
  },false);
  liHob6.addEventListener("mouseover", () => {
    imageGif.src='assets/gif/zen.gif';
  },false);
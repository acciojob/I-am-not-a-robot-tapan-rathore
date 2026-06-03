//your code here
const container = document.getElementById("container");
const para = document.getElementById("para");

const classes = ["img1", "img2", "img3", "img4", "img5"];

const duplicateIndex = Math.floor(Math.random()*5);

let images = [...classes, classes[duplicateIndex]];

//suffle 
for(let i=images.length-1; i>0; i--){
	let j=Math.floor(Math.random()*(i+1));
	[images[i], images[j]] = [images[j], images[i]];
}

//create image
let selected = [];

images.forEach((cls, index) => {
	const img = document.createElement("img");

	img.classList.add(cls);
	img.dataset.type = cls;
	img.id = `img${index}`

	img.addEventListener("click", ()=> selectImage(img))
	
	container.appendChild(img)
});

function selectImage(img){
	if(selected.includes(img) || selected.length === 2) return;
	
	img.classList.add("selected");
	selected.push(img)

	showReset();
	
	if(selected.length === 2){
		showVerify();
	}
}

function showReset() {
	if(document.getElementById("reset")) return;

	const btn = document.createElement("button");
	btn.id="reset";
	btn.innerText="Reset";
	document.body.appendChild(btn);

	btn.addEventListener("click", resetGame);
}

function showVerify() {
	if(document.getElementById("verify")) return;

	const btn = document.createElement("button");
	btn.id="verify";
	btn.innerText="Verify";
	document.body.appendChild(btn);
	
	btn.addEventListener("click", verifyHuman);	
}

function verifyHuman() {
	const verifyBtn = document.getElementById("verify");
	verifyBtn.remove();

	if(selected[0].dataset.type === selected[1].dataset.type){
		para.innerText = "You are a human. Congratulations!";
	}else{
		para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
	}
}

function resetGame() {
	selected.forEach(img => img.classList.remove("selected"));

	selected=[];

	para.innerText = "";

	const resetBtn = document.getElementById("reset");
	if(resetBtn) resetBtn.remove();

	const verifyBtn = document.getElementById("verify");
	if(verifyBtn) verifyBtn.remove();
}
















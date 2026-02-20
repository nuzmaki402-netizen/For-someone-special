

let image =[
    "photo/64ef9efe0703f196e3146739e84bbadf.gif",
    "photo/h.gif",
    "photo/kittycass-peachcat.gif",
   
];

let image1 =[
    "photo/60b4f9c20f6b6536bc232355030c4b7a.gif",
]
let texts1=[
    "Hehehehe, I knew it!😘"
]
let texts =[
    "Manja na! Kitna bhav khaegi 😭",
"Soch le ache sa!🙄",
"Ek aur baar Soch le!😣",

]

let index = 0;
let noclickcount = 0;

let yesbtn = document.getElementById('yes')
let noBtn= document.getElementById('next');
let img = document.getElementById('img');
let line = document.getElementById('line');

function changecontent (){
   index = (index + 1 ) % image.length;
   img.src = image[index];
   line.innerText = texts[index];
};

yesbtn.addEventListener("click", ()=>{
     img.src = image1[index];
   line.innerText = texts1[index];
   yesbtn.remove();
   noBtn.remove();
createbtn();

   
})


noBtn.addEventListener("click",()=>{
noclickcount++;
if (noclickcount <= 3) {
    changecontent();
}

if (noclickcount > 3) {
    movenobtn();
}
});



function movenobtn() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.position = 'absolute';
      noBtn.style.left = randomX + 'px';
      noBtn.style.top = randomY + 'px';
         

     
};

function createbtn() {

  let btnbox = document.getElementById("buttons");

  // duplicate se bachao
  if (document.getElementById("newbtn")) return;

  let newbtn = document.createElement("button"); // ✅ fixed
  newbtn.id = "newbtn";
  newbtn.innerText = "Message 💌";

  newbtn.style.marginTop = "20px";

  btnbox.appendChild(newbtn);

  // click event
  newbtn.addEventListener("click", () => {
    Message();
  });
}

    
function Message() {
    
let body = document.body;
// romantic background
body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
body.style.minHeight ="100vh";
// remove massage btn
let newbtn = document.getElementById('newbtn');
if (newbtn) newbtn.remove(); 
// creat paragraph
let para = document.createElement("p");

para.innerText= "tum meri life ka sabsa cute surprise ho 💖🥰 main hamesha tumhare sath rahna chahta hoon 💖✨"

    //  styling
    para.style.color = "white";
    para.style.fontSize = "22px";
    para.style.maxWidth = "600px";
    para.style.margin= "40px auto";
    para.style.padding = "25px";
    para.style.borderRadius = "20px";
    para.style.background = "rgba(255,255,255,0.2)";
    para.style.backdropFilter = "blur(10px)";
    para.style.boxShadow = " 0 0 20px rgba(0, 0, 0, 0.2)";
    para.style.fontFamily= "cursive";

    // add to page
    body.appendChild(para);
        
    
    };
let image =[
    "./64ef9efe0703f196e3146739e84bbadf.gif",
    "./h.gif",
    "./kittycass-peachcat.gif",
   
];

let image1 =[
    "./60b4f9c20f6b6536bc232355030c4b7a.gif",
    "/pic/yes1.gif",
    "/pic/yes2.gif",
]

let texts1=[
    "ek baar aur soch la",
    "sure?",
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
   // First confirmation question
   showConfirmation(0);
   yesbtn.remove();
   noBtn.remove();
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
}

function showConfirmation(questionIndex) {

    // ✅ CHANGE 1: Image ko center karo
    let imgBox = document.querySelector(".index");
    imgBox.style.display = "flex";
    imgBox.style.flexDirection = "column";
    imgBox.style.alignItems = "center";
    imgBox.style.justifyContent = "center";

    img.style.display = "block";
    img.style.margin = "0 auto";

    img.src = image1[questionIndex];
    line.innerText = texts1[questionIndex];

    let btnbox = document.getElementById("buttons");

    let confirmBtn = document.createElement("button");
    confirmBtn.id = "confirmBtn";
    confirmBtn.innerText = "yes";

    // ✅ CHANGE 2: No button add kiya
    let noConfirmBtn = document.createElement("button");
    noConfirmBtn.id = "noConfirmBtn";
    noConfirmBtn.innerText = "no";

    btnbox.innerHTML = "";
    btnbox.appendChild(confirmBtn);
    btnbox.appendChild(noConfirmBtn);

    confirmBtn.addEventListener("click", () => {
        if (questionIndex === 0) {
            showConfirmation(1);
        } else {
            img.src = image1[0];
            line.innerText = texts1[2];
            confirmBtn.remove();
            noConfirmBtn.remove();   // ✅ no button bhi hata do
            createbtn();
        }
    });

    // ✅ No button click -> wapas start se
    noConfirmBtn.addEventListener("click", () => {
        location.reload();
    });
}

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

    
// function Message() {
    
// let body = document.body;
// // romantic background
// body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
// body.style.minHeight ="100vh";
// // remove massage btn
// let newbtn = document.getElementById('newbtn');
// if (newbtn) newbtn.remove(); 
// // creat paragraph
// let para = document.createElement("p");

// para.innerText= "Tum Meri Life Ka Sabsa Cute Surprise Ho 💖🥰 Main Hamesha Tumhare Sath Rahna Chahta Hoon 💖✨"

//     //  styling
//     para.style.color = "white";
//     para.style.fontSize = "22px";
//     para.style.maxWidth = "600px";
//     para.style.margin= "40px auto";
//     para.style.padding = "25px";
//     para.style.borderRadius = "20px";
//     para.style.background = "rgba(255,255,255,0.2)";
//     para.style.backdropFilter = "blur(10px)";
//     para.style.boxShadow = " 0 0 20px rgba(0, 0, 0, 0.2)";
//     para.style.fontFamily= "cursive";

//     // add to page
//     body.appendChild(para);
        
    

// };

function Message() {
    
let body = document.body;
// romantic background
body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
body.style.minHeight ="100vh";
// remove massage btn
let newbtn = document.getElementById('newbtn');
if (newbtn) newbtn.remove(); 

// ✅ NEW: "For You" heading
let heading = document.createElement("h1");
heading.innerText = "For You 💌";
heading.style.color = "white";
heading.style.fontSize = "40px";
heading.style.fontFamily = "cursive";
heading.style.textAlign = "center";
heading.style.margin = "30px auto 15px auto";
heading.style.textShadow = "0 0 10px rgba(0,0,0,0.3)";

// ✅ NEW: Music player
let audio = document.createElement("audio");
audio.src = "/pic/nazar.m4a";      // 👈 apni music file ka naam yaha likho
audio.controls = true;           // play/pause button dikhega
audio.autoplay = true;           // click karte hi music start
audio.loop = true;               // music repeat hogi
audio.style.display = "block";
audio.style.margin = "0 auto 25px auto";

// page par add karo
body.appendChild(heading);
body.appendChild(audio);

// creat paragraph
let para = document.createElement("p");

para.innerText= "Tum Meri Life Ka Sabsa Cute Surprise Ho 💖🥰 Main Hamesha Tumhare Sath Rahna Chahta Hoon 💖✨"

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
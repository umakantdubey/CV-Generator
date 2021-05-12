const inputfield = document.querySelector('.input-fields');
const output= document.querySelector('.output');
let inputshow=true;
async function TextEditor(element){
    
    const newEditor= await ClassicEditor
    .create(element ,{
        toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ]

    })
    return newEditor;
}
let workdetail;
TextEditor(inputfield['workexp']).then(newEditor=>{
    workdetail=newEditor;
})
let academics;
TextEditor(inputfield['academics']).then(newEditor=>{
    academics=newEditor;
})

let projects;
TextEditor(inputfield['projects']).then(newEditor=>{
    projects=newEditor;
})

   
    

function toggle()
{
if(inputshow==true)
{
inputfield.style.display="none"
inputshow=false;
output.innerHTML=`
<div class="hero">
<h1>${inputfield['name'].value}</h1>
<h3>${inputfield['title'].value}</h3>
</div>
<div class="main">
               <div>
                 <h2>OBJECTIVE</h2>
                 <p>${inputfield["objective"].value}</p>
                 <h2>SKILLS</h2>
                 <p>${inputfield["skills"].value}</p>
                 <h2>ACHIEVEMENTS</h2>
                 <p>${inputfield["achievements"].value}</p>
                 <h2>CONTACT</h2>
                 <p>${inputfield["contact"].value}</p>
               </div>
               <div>
               <h2>WORK EXPERIENCE</h2>
               ${workdetail.getData()}
               <h2>ACEMEDIC DETAILS</h2>
               ${academics.getData()}
               <h2>PROJECTS</h2>
               ${projects.getData()}
              </div>
           </div>
           <div class="btn">
           <button onclick="print()">Print Resume </button>
           </div>

`

}
else
{
    inputfield.style.display="block"
    inputshow=true;
    output.innerHTML="";
}

}

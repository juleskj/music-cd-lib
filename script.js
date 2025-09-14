
const addBTN = document.getElementById("add");

//function run on submit
function formSubmit(){
   console.log("submitet");

   creatTemplate();

   addBTN.textContent = "Added";
      setTimeout(() => {
         addBTN.textContent = 'Add';
   }, 2000);

}


const tBody = document.getElementById("music_tbody");
const template = document.getElementById("trTemplate");
  

//HTML creating from template
function creatTemplate(){

   

   let authorInput = document.getElementById("author").value;
   let titleInput = document.getElementById("title").value;
   let yearInput = document.getElementById("year").value;

   console.log(authorInput);

   const clone = template.content.cloneNode(true);
   

   let td = clone.querySelectorAll("td");
   td[0].textContent= `${authorInput}`|| "author";
   td[1].textContent= `${titleInput}` || "year";
   td[2].textContent = `${yearInput}` || "year";   

   authorInput.value ="";
   titleInput.value ="";
   yearInput.value = "";

   tBody.appendChild(clone);
};



// event delegation on delete BTN
tBody.addEventListener("click", (e) =>{
   if( e.target.matches("#delete")){
     const closestRow = e.target.closest("tr");
     if (closestRow){
      closestRow.remove();
     }
   }
})



//form reset, submit and reload prevantion
const musicForm = document.querySelector("form");

musicForm.addEventListener("submit", (e)=> {
   e.preventDefault(); 
   formSubmit();
   musicForm.reset();
});
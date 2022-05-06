const mainBtn = document.querySelector(".main-btn")



const primary = document.querySelector(".btn btn-primary")
const secondary = document.querySelector(".btn-secondary")
const success = document.querySelector(".btn-success")
const danger = document.querySelector(".btn-danger")
const warning = document.querySelector(".btn-warning")
const info = document.querySelector(".btn-info")


const result =document.querySelector(".result")
const clear = document.querySelector(".btn-dark")
const speace = "    "



// const dark = document.querySelectorAll(".btn")
// console.table(dark)

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }



mainBtn.addEventListener("click",
(eo)=>{

  if (eo.target.className=="btn btn-primary") {
    result.innerHTML += `primary ${speace}`
  }
  else if (eo.target.className=="btn btn-secondary") {
    result.innerHTML += `secondary ${speace}`
  }
  else if (eo.target.className=="btn btn-success") {
    result.innerHTML += `success ${speace}`
  }
  else if (eo.target.className=="btn btn-danger") {
    result.innerHTML += `danger ${speace}`
  }
  else if (eo.target.className=="btn btn-warning") {
    result.innerHTML += `warning  ${speace}`
  }
  else if (eo.target.className=="btn btn-info") {
    result.innerHTML += `info  ${speace}`
  }
  
  

})

clear.addEventListener("click",
()=>{

  result.innerText = ``

})
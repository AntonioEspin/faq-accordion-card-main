let iconArrow = document.querySelectorAll('.icon-arrow')
let para = document.querySelectorAll('.question-para')
let title = document.querySelector('.question-title')



// iconArrow.addEventListener('click', ()=>{
//   alert('funciona')
// })

iconArrow.forEach((icon, index1)=>{
  return icon.addEventListener('click',()=>{
    para.forEach((paraphrase, index2)=>{
      if(index1 === index2) {
        let ocultar = paraphrase.classList.toggle('is-active')
        return ocultar
      }
    })
  })
})
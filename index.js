const main =document.querySelector("#main")
const paragraph = document.querySelector('p')

main.addEventListener('click',(event) => {
  console.log('I was clicked')
  alert ('hey you clicked me')
})

paragraph.addEventListener('click', (event) =>{
  alert("you clicked the p!!!")
  paragraph.style.backgroundColor = 'yellow'
})
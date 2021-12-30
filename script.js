function priceChange() {

  fetch("./price.json")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      addPrice(data)
    })
    .catch((err) => {
      return console.error(err)
    })

}

function addPrice(data) {
  
  let basic = document.getElementById("basic-price")
  
  let prof = document.getElementById("prof-price")
  
  let master = document.getElementById("master-price")
  
  const check = document.querySelector('input')
  
  const dollar = document.createElement('span')
  
  dollar.className = 'dollar';
  
  dollar.append('$')
  
  addDollar(basic, prof, master, dollar)


  if (check.checked) {

    basic.append(`${data.monthly.basic}`)

    prof.append(`${data.monthly.prof}`);
    
    master.append(`${data.monthly.master}`);
  }
  else {
    basic.append(`${data.annual.basic}`)

    prof.append(`${data.annual.prof}`);
    
    master.append(`${data.annual.master}`);
  }
}

function addDollar(basic, prof, master, dollar) {
  basic.innerHTML = ''
  
  basic.appendChild(dollar.cloneNode(true))
  
  prof.innerHTML = ''
  
  prof.appendChild(dollar.cloneNode(true))
  
  master.innerHTML = ''
  
  master.appendChild(dollar.cloneNode(true))
}

function changeColor(){
  let prof=document.getElementById('professional')
  prof.style.backgroundColor="white";
  prof.style.color="black"
  let white=document.querySelector(".white")
  white.style.color="white"
  white.style.backgroundColor="hsl(237, 63%, 64%)"
}

let white=document.querySelector(".white")
white.addEventListener('mouseover',()=>{
  white.style.color="hsl(237, 63%, 64%)"
  white.style.backgroundColor="white"
  
})

white.addEventListener('mouseout',()=>{
  white.style.color="white"
  white.style.backgroundColor="hsl(237, 63%, 64%)"
})

function revertColor(){
  let prof=document.getElementById('professional')
  prof.style.backgroundColor="hsl(237, 63%, 64%)";
  prof.style.color="white"
  let white=document.querySelector(".white")
  white.style.color="hsl(237, 63%, 64%)"
  white.style.backgroundColor="white"
}

let basic=document.getElementById('basic')

let master=document.getElementById('master')

basic.addEventListener('mouseover',changeColor)

master.addEventListener('mouseover',changeColor)

basic.addEventListener('mouseout',revertColor)

master.addEventListener('mouseout',revertColor)

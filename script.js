function priceChange() {

    let basic = document.getElementById("basic-price")
    let prof = document.getElementById("prof-price")
    let master = document.getElementById("master-price")

    fetch("./price.json")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      const check=document.querySelector('input')
      if(check.checked){
        
        basic.innerHTML = `<span class="dollar">&dollar;</span>${data.monthly.basic}`;
        prof.innerHTML = `<span class="dollar">&dollar;</span>${data.monthly.prof}`;
        master.innerHTML = `<span class="dollar">&dollar;</span>${data.monthly.master}`;
      }
      else{
        basic.innerHTML = `<span class="dollar">&dollar;</span>${data.annual.basic}`;
        prof.innerHTML = `<span class="dollar">&dollar;</span>${data.annual.prof}`;
        master.innerHTML = `<span class="dollar">&dollar;</span>${data.annual.master}`;
      }
    })
    .catch((err)=>{
      return console.error(err)
    })

    // if (basic.innerHTML == '<span class="dollar">$</span>199.99') {

    //   basic.innerHTML = '<span class="dollar">&dollar;</span>19.99';
    // }
    // else {
    //   basic.innerHTML = '<span class="dollar">&dollar;</span>199.99';
    // }
    // if (prof.innerHTML == '<span class="dollar">$</span>249.99') {
    //   prof.innerHTML = '<span class="dollar">&dollar;</span>24.99';
    // }
    // else {
    //   prof.innerHTML = '<span class="dollar">&dollar;</span>249.99'
    // }

    // if (master.innerHTML == '<span class="dollar">$</span>399.99') {
    //   master.innerHTML = '<span class="dollar">&dollar;</span>39.99';
    // }
    // else {
    //   master.innerHTML = '<span class="dollar">&dollar;</span>399.99'
    // }
    
  }
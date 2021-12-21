function priceChange() {

    let basic = document.getElementById("basic-price")
    let prof = document.getElementById("prof-price")
    let master = document.getElementById("master-price")

    if (basic.innerHTML == '<span class="dollar">$</span>199.99') {

      basic.innerHTML = '<span class="dollar">&dollar;</span>19.99';
    }
    else {
      basic.innerHTML = '<span class="dollar">&dollar;</span>199.99';
    }
    if (prof.innerHTML == '<span class="dollar">$</span>249.99') {
      prof.innerHTML = '<span class="dollar">&dollar;</span>24.99';
    }
    else {
      prof.innerHTML = '<span class="dollar">&dollar;</span>249.99'
    }

    if (master.innerHTML == '<span class="dollar">$</span>399.99') {
      master.innerHTML = '<span class="dollar">&dollar;</span>39.99';
    }
    else {
      master.innerHTML = '<span class="dollar">&dollar;</span>399.99'
    }
  }
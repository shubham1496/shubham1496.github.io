var actual_amount = 0;
var interest = 0;
var years = 0;
var incidential_charges = 0


document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#actual_amount').onchange = () => {
    actual_amount = parseFloat(document.querySelector('#actual_amount').value)
    console.log(actual_amount)
  }

  document.querySelector('#interest').onchange = () => {
    interest = parseFloat(document.querySelector('#interest').value)
    console.log(interest)
  }

  document.querySelector('#years').onchange = () => {
    years = parseFloat(document.querySelector('#years').value)
    console.log(years)
  }

  document.querySelector('#incidential_charges').onchange = () => {
    incidential_charges = parseFloat(document.querySelector('#incidential_charges').value)
    console.log(incidential_charges)
  }



  document.querySelector('form').onsubmit = () => {

    var interest_amt = actual_amount * (interest / 100)
    var total_interest = interest_amt * years
    var total_outstanding = total_interest + actual_amount + incidential_charges
    var instalment = (total_outstanding / (years * 12))
    document.querySelector('#instalment_display').textContent = `(${actual_amount} + ${interest_amt} + ${incidential_charges}) / ${years * 12}`
    document.querySelector('#result').innerHTML = `<h5>${instalment}</h5>`
    return false
  }
})

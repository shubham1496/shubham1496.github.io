var principal = 0
var rate = 0
var time = 0
var incidental = 0

var simple_interest = 0
var amount = 0
var monthly_instalment = 0



function calculateInstalment() {
  var remainder = amount % (time * 12)
  var instalment_value = (amount - remainder) / (time * 12)
  var zero = "0"

  instalment_value = instalment_value.toString()
  len = instalment_value.length
  zero = zero.repeat(len - 1)
  var first_instalment = instalment_value[0] + zero;
  first_instalment = parseInt(first_instalment)
  var last_instalment = amount - (first_instalment * ((time * 12) - 1))
  if (last_instalment % (time * 12) === 0) {
    remaining_value = last_instalment / (time * 12);
    first_instalment += remaining_value
    extra_value = first_instalment % 1000
    first_instalment = first_instalment - extra_value
    last_instalment = (amount - (first_instalment * ((time * 12) - 1)))
  }

  return [first_instalment, last_instalment];

}



document.addEventListener('DOMContentLoaded', function () {
  function setValue(input) {
    input.value = ""
  }
  // document.querySelectorAll('.form-control').forEach(setValue)

  document.querySelector('#reset').onclick = function () {
    document.querySelectorAll('.form-control').forEach(setValue)
  }
  document.querySelector('#principal_input').onchange = function () {
    principal = parseFloat(document.querySelector('#principal_input').value);
  }

  document.querySelector('#interest_input').onchange = function () {
    rate = parseFloat(document.querySelector('#interest_input').value);
  }

  document.querySelector('#incidental_charges_input').onchange = function () {
    incidental = parseFloat(document.querySelector('#incidental_charges_input').value);
  }

  document.querySelector('#years_input').onchange = function () {
    time = parseFloat(document.querySelector('#years_input').value);
  }

  document.querySelector('#interest_range').onchange = function () {
    document.querySelector('#interest_input').value = (document.querySelector('#interest_range').value) / 2
    rate = parseFloat((document.querySelector('#interest_range').value) / 2)
  }

  document.querySelector('#years_range').onchange = function () {
    document.querySelector('#years_input').value = (document.querySelector('#years_range').value) / 5
    time = parseFloat((document.querySelector('#years_range').value) / 5)
  }


  document.querySelector('form').onsubmit = function () {

    simple_interest = (principal * rate * time) / 100
    amount = simple_interest + principal + incidental
    monthly_instalment = amount / (time * 12)
    var instalments = calculateInstalment();
    var instalment_total = (instalments[0] * ((time * 12) - 1)) + (instalments[1])
    document.getElementById('monthly_instalment').innerHTML = `&#8377; ${monthly_instalment.toFixed(2)}`
    document.getElementById('total_interest_payable').innerHTML = `&#8377; ${simple_interest.toFixed(2)}`
    document.getElementById('total_payment').innerHTML = `&#8377; ${amount.toFixed(2)}`
    document.getElementById('interest_rate').innerHTML = `@${rate}%`
    document.getElementById('instalment_plan_1').innerHTML = `<strong>${(time * 12) - 1}</strong> instalments of <strong>&#8377;${instalments[0]}</strong> each = <strong>&#8377;${instalments[0] * ((time * 12) - 1)}</strong>`
    document.getElementById('instalment_plan_2').innerHTML = `<strong>1</strong> instalment of <strong>&#8377;${instalments[1].toFixed(2)}</strong>`
    document.getElementById('instalment_plan_total').innerHTML = `&#8377;${instalments[0] * ((time * 12) - 1)} + &#8377;${instalments[1].toFixed(2)} = &#8377;${instalment_total} `
    document.getElementById('text_display').textContent = "Instalment Plan";
    // document.getElementById('first_instalment').innerHTML = instalments[0]
    // document.getElementById('last_instalment').innerHTML = instalments[1]

    return false

  }





})
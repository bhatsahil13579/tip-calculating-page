const totalBill = document.querySelector("#inputFirst")
const button = document.querySelectorAll(".btn")
const custom = document.getElementById("custom")
const sameThree = document.querySelectorAll(".sameThree")
const numberOfPeople = document.querySelector("#inputPeople")
const amount = document.querySelector(".Amount")
const total = document.querySelector(".total")
const reset = document.querySelector(".realButton")
const add = document.getElementById("add")
const sameTwo = document.querySelectorAll(".sameTwo")


button.forEach(element => {

   element.addEventListener("click", () => {

      calculate(element);
      check();
     
     
 })

});

sameThree.forEach(input => {
   input.addEventListener("input", () => {
      
      calculate(custom);
      
     
      
     
});

sameTwo.forEach(checkTwo => {
   checkTwo.addEventListener("input", () => {
      check();
   })

});


reset.addEventListener("click", () => {
   amount.textContent = "$0.00"
   total.textContent = "$0.00"
   add.style.display = "none"
   sameThree.forEach(InputReset => {
      InputReset.value = ""
   })

})

add.style.display = "none"

})


function check() {
   if (numberOfPeople.value === "" || numberOfPeople.value === "0") {
      add.style.display = "block"
   } else {
      add.style.display = "none"
   }
}

function calculate(commit) {
   const tipPercentage = (commit.value / 100) * totalBill.value

   const tipPerPerson =  tipPercentage / numberOfPeople.value

   const totalPerPerson = totalBill.value / numberOfPeople.value + tipPerPerson

   amount.textContent =   `$${(tipPerPerson).toFixed(2)}` 
   total.textContent =  `$${(totalPerPerson).toFixed(2)}`

   if (tipPerPerson == Infinity || totalPerPerson == Infinity ){
      amount.textContent = "$0.00"
      total.textContent = "$0.00"
}else  if(isNaN(tipPerPerson) || isNaN(totalPerPerson)){
   amount.textContent = "$0.00"
   total.textContent = "$0.00"

}}


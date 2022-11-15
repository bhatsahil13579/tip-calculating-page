let totalBill = document.querySelector("#inputFirst")
let button = document.querySelectorAll(".btn")
let custom = document.getElementById("custom")
let sameThree = document.querySelectorAll(".sameThree")
let numberOfPeople = document.querySelector("#inputPeople")
let amount = document.querySelector(".Amount")
let total = document.querySelector(".total")
let reset = document.querySelector(".realButton")
let add = document.getElementById("add")
let sameTwo = document.querySelectorAll(".sameTwo")



button.forEach(element => {

   element.addEventListener("click", () => {

      calculate(element);
      btn();
      check();
 })

});

sameThree.forEach(input => {
   input.addEventListener("input", () => {
      
      calculate(custom);
      watch();
})
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


function calculate(commit) {
   let tipPercentage = (commit.value / 100) * totalBill.value

   let tipPerPerson = tipPercentage / numberOfPeople.value

   let totalPerPerson = totalBill.value / numberOfPeople.value + tipPerPerson

   amount.textContent = (tipPerPerson).toFixed(2)
   total.textContent = (totalPerPerson).toFixed(2)

}


function watch() {
   if (numberOfPeople.value === "0" || numberOfPeople.value === "" || custom.value === "") {
      amount.textContent = "$0.00"
      total.textContent = "$0.00"
   }


}


function btn() {
   if (numberOfPeople.value === "0" || numberOfPeople.value === "") {
      amount.textContent = "$0.00"
      total.textContent = "$0.00"

   }
}

function check() {
   if (numberOfPeople.value === "" || numberOfPeople.value === "0") {
      add.style.display = "block"
   } else {
      add.style.display = "none"
   }
}













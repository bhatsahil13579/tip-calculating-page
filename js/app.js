const totalBill = document.querySelector("#inputFirst")
const button = document.querySelectorAll(".btn")
const custom = document.getElementById("custom")
const sameThree = document.querySelectorAll(".sameThree")
const numberOfPeople = document.querySelector("#inputPeople")
const amount = document.querySelector(".Amount")
const total = document.querySelector(".total")
const reset = document.querySelector(".button")
const add = document.getElementById("add")
const sameTwo = document.querySelectorAll(".sameTwo")

console.log (custom)

button.forEach(element => {

   element.addEventListener("click" , () =>{
    
   calculate(element)
   btn();
   check();
})

});

sameThree.forEach(input =>{
    input.addEventListener("input" , () =>{
      
       calculate(input)
       watch();
      
})
});

sameTwo.forEach(checkTwo =>{
   checkTwo.addEventListener("input" , () =>{
      check();
   })});
   


   reset.addEventListener("click" , ()=>{
   amount.textContent = "$0.00"
   total.textContent = "$0.00"
   add.style.display = "none"
   sameThree.forEach(InputReset =>{
      InputReset.value = ""
   }) 
  

})

   totalBill.addEventListener("keypress" , ()=>{
      // sameTwo.forEach(inputTaken =>{
      //   inputTaken.value = ""
      // })

   custom.value = ""
     
   })

add.style.display = "none"

function calculate(event) {
   amount.textContent = ( event.value  / 100 * totalBill.value /numberOfPeople.value ).toFixed(2)

   total.textContent = ( event.value / 100 * totalBill.value /numberOfPeople.value + totalBill.value / numberOfPeople.value ).toFixed(2)  
}


function watch() {
   if (numberOfPeople.value === "0" ||  numberOfPeople.value === "" || custom.value === "" ){
      amount.textContent = "$0.00"
      total.textContent = "$0.00"
   } else if (totalBill.value === "" || totalBill.value === "0") {}
  

}


function btn(){
   if (numberOfPeople.value === "0" ||  numberOfPeople.value === "" ){
      amount.textContent = "$0.00"
      total.textContent = "$0.00"
     
   }
}


function check(){
   if (numberOfPeople.value === "" || numberOfPeople.value === "0"){
      add.style.display = "block"
   }else{
      add.style.display = "none"
   }
}

   












fetch('http://localhost:3000/rooms', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));






function bookRoom() {
let button = document.querySelector("#book")
button.addEventListener("click", () => {


if(number >=1){
 currentListing.textContent = currentListing.textContent -1}
 else {document.querySelector("#book").textContent = "No More Reservations"
   alert("No More Reservations")}
}
)
}

bookRoom();

function cancelRoom() {
   let button = document.querySelector("#cancel")
   button.addEventListener("click", () => {
   
   
   if(number >=1){
    currentListing.textContent = currentListing.textContent +1}
     {document.querySelector("#cancel").textContent = "No More Reservations"
      alert("Booking Canceled")}
   }
   )
   }
   
   cancelRoom();

   function checkoutRoom() {
      let button = document.querySelector("#Check-out")
      button.addEventListener("click", () => {
      
      
      if(number >=1){
       currentListing.textContent = currentListing.textContent +1}
       }
      
      )
   }
      
      checkoutRoom();
   

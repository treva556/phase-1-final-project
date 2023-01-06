
document.addEventListener('DOMContentLoaded', () => {

fetch('http://phase-1-final-project-eta.vercel.app/db.json', {
  method: 'FETCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  function roomsRemaining(rooms) {
           

   let roomRem = document.getElementById('room-no')
   // tickets available would be film.capacity string minus film.tickets_sold
   let capacityConvert = parseInt(rooms.roomAmount, 10)
   roomRem.textContent = capacityConvert - rooms.roomAmount


}







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

      roomsRemaining()
})

   

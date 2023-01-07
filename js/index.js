

document.addEventListener('DOMContentLoaded', () => {

   // fetch all available rooms
   fetch('https://phase-1-final-project-eta.vercel.app/db.json')
   .then(res => res.json())
   .then(data =>{ console.log(data.rooms[0])
   
      document.getElementById('room-no').textContent = data.rooms[0].roomAmount})


   
     function roomsRemaining(rooms) {
              
   
      let roomRem = document.getElementById('room-no')
      // tickets available would be film.capacity string minus film.tickets_sold
      let capacityConvert = parseInt(rooms.roomAmount, 10)
      roomRem.textContent = capacityConvert - rooms.roomAmount
   
   
   }
   
   document.querySelector('#hotel-form')
   
   
   function bookRoom() {
      let button = document.querySelector("#book")
      button.addEventListener("click", () => {
         let currentListing = document.querySelector("#room-no")
         let number = parseInt(currentListing.textContent)
         console.log(currentListing.textContent)
      
      
      if(number >=1){
       currentListing.textContent = currentListing.textContent -1}
        {document.querySelector("#book").textContent = "No More Reservations"
         alert("Booked")}
      }
      )
  
   }
   
bookRoom();
   
   function cancelRoom() {
      let button = document.querySelector("#cancel")
      button.addEventListener("click", () => {
         let currentListing = document.querySelector("#room-no")
         let number = parseInt(currentListing.textContent)
         console.log(currentListing.textContent)
      
      
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
            let currentListing = document.querySelector("#room-no")
            let number = parseInt(currentListing.textContent)
            console.log(currentListing.textContent)
         
         
         if(number >=1){
          currentListing.textContent = currentListing.textContent +1}
          }
         
         )
      }
         
        checkoutRoom();
   
         roomsRemaining()

   })
   
 
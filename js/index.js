

document.addEventListener('DOMContentLoaded', () => {

   // fetch all available rooms
   fetch('https://phase-1-final-project-eta.vercel.app/db.json')
   .then(res => res.json())
   .then(data =>{ console.log(data.rooms[0])
   
      document.getElementById('room-no').textContent = data.rooms[0].roomAmount})

//display remaining rooms function
   
     function roomsRemaining(rooms) {
              
   
     let roomRem = document.getElementById('room-no')
     //tickets available would be film.capacity string minus film.tickets_sold
     let capacityConvert = parseInt(rooms.roomAmount, 10)
      roomRem.textContent = capacityConvert - rooms.roomAmount
   
   
}
   
       //book room function
function bookRoom() {
   let button = document.querySelector("#book")
   button.addEventListener("click", () => {
      let currentListing = document.querySelector("#room-no")
      let number = parseInt(currentListing.textContent)
      console.log(currentListing.textContent)
   
   
   if(number >=1){
    currentListing.textContent = currentListing.textContent -1
    alert("Booked")}else
     {document.querySelector("#book").textContent = "No More Reservations"
      }
   }
   )

}

bookRoom();
  
//cancel room function
   function cancelRoom() {
      let button = document.querySelector("#cancel")
      button.addEventListener("click", () => {
         let currentListing = document.querySelector("#room-no")
         let number = parseInt(currentListing.textContent)
        
      
      
      if(number >=1){
       currentListing.textContent = parseInt(currentListing.textContent) +1
       alert("Booking Canceled")
      }
       
         
      }
      )
      }
      
      cancelRoom();
   //checkout room function
      function checkoutRoom() {
         let button = document.querySelector("#Check-out")
         button.addEventListener("click", () => {
            let currentListing = document.querySelector("#room-no")
            let number = parseInt(currentListing.textContent)
           
         
         
         if(number >=1){
          currentListing.textContent = parseInt(currentListing.textContent) +1
          alert("Check out")
         }
          
          }
         
         )
      }
         
        checkoutRoom();
   
         roomsRemaining();

   })
   
 
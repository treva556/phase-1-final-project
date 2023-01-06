

document.addEventListener('DOMContentLoaded', () => {

   fetch('https://phase-1-final-project-eta.vercel.app/db.json').then((response) => {
      return response.json();                
    
})
   const headers = {'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'PATCH'}
const response = {
    statusCode: 200,
    headers:headers,
    body: JSON.stringify({ token: params.token})
};
return response;
   
   
   
     function roomsRemaining(rooms) {
              
   
      let roomRem = document.getElementById('room-no')
      // tickets available would be film.capacity string minus film.tickets_sold
      let capacityConvert = parseInt(rooms.roomAmount, 10)
      roomRem.textContent = capacityConvert - rooms.roomAmount
   
   
   }
   
   
   function bookRoom() {
   let button = document.querySelector("#book")
   button.addEventListener("click", () => {
      let currentListing = document.querySelector("#room-no")
      let number = parseInt(currentListing.textContent)
      console.log(currentListing.textContent)
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
   
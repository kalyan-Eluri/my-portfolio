const selectElement = (element) => {
    return document.querySelector(element)
   }
   
   selectElement('.hamburger').addEventListener('click', () => {
       selectElement('.hamburger').classList.toggle('active')
       selectElement('.navbar-list').classList.toggle('active')
   })
  
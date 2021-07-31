// function getDataValue(event) {
//   event.preventDefault()
//   const editfirstName = document.getElementById('frstName')
//   const editlastName = document.getElementById('lstName')
//   .fetch('http://book.alitechbot.uz/api/authors/60ce04ef005628ca1ca9a63b')
//   .then(response => response.json())
//   .then(result => {
//    console.log(result);
//   })
//   .catch(err =>console.error('Error', err))
// }



// function getMyBooks(event) {
//   event.preventDefault();
//   const myBooksBlock = document.getElementById('contentBookBlock')
//   fetch('http://book.alitechbot.uz/api/books/my-books', {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${localStorage.token}`,
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(result => {
//     console.log(result);
//     result.forEach(item => {
//       myBooksBlock.innerHTML += `
//       <div class="book my-2">
//       <div class="d-flex align-items-center">
//        <div class="img-book">
//          <a href="#!">
//            <img src="${item.imageLink}" alt="${item.title}">
//          </a>
//        </div>
//        <div class="info-book ms-2">
//          <h4>${item.title}</h4>
//          <p><span>by</span>${item.author.firstName} ${item.author.lastName}</p>
//          <p>${published}</p>
//        </div>
//       </div>
//        <div class="edit-book">
//         <div class="edit"> <img src="assets/img/edit.png" alt=""></div>
//         <div class="delete"> <img src="assets/img/delete.png" alt=""></div>
//        </div>
//      </div>
//       `
//     });
//   })
//   .catch(err => console.error('error', err))
// }

function getMyBook() {
  fetch('http://book.alitechbot.uz/api/books/60d1fec868990590246098d4')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(err => console.error('error', err))
}


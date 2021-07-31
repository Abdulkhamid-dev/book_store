// function createBook(event) {
//   event.preventDefault();
//   const bookForm = document.getElementById("bookFormValue");
//   const { title, pages, author, year, country, price } = bookForm;
//   let bookFile = document.querySelector("#imageFile");
//   console.log(bookFile);

//   const book = {
//     title: title.value,
//     pages: pages.value,
//     imageLink: bookFile.files[0],
//     author: author.value,
//     year: year.value,
//     country: country.value,
//     price: price.value,
//   };

//   let bookData = new FormData();

//   bookData.append("image", bookFile.files[0]);
//   bookData.append("title", title.value);
//   bookData.append("pages", pages.value);
//   bookData.append("price", price.value);
//   bookData.append("year", year.value);
//   bookData.append("country", country.value);
//   bookData.append("author", author.value);

//   console.log(Array.from(bookData));
//   console.log(book.imageLink);
//   fetch("http://book.alitechbot.uz/api/books", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${localStorage.token}`,
//     },
//     body: bookData,
//     redirect: "follow",
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result.payloda);
//       if (result.payloda.success === true) {
//         window.Swal.fire({
//           title: "Good job",
//           text: "The book you provided has been created",
//           icon: "success",
//           showCloseButton: true,
//           timer: 3000,
//         });
//         location.pathname = "/D:/dasturlash/Javascript/book-stoer/index.html";
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: result.msg,
//           icon: "The book you provided was not created",
//           showCloseButton: true,
//           timer: 5000,
//         });
//       }
//     })
//     .catch((error) => console.log("error", error));
// }

// function createAuthor(event) {
//   event.preventDefault();
//   const authorForm = document.getElementById("add-author-form");
//   const { lastName, firstName } = authorForm;
//   const authorData = {
//     firstName: firstName.value,
//     lastName: lastName.value,
//   };
//   console.log(authorData);
//   var requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.token}`,
//     },
//     body: JSON.stringify(authorData),
//   };

//   fetch("http://book.alitechbot.uz/api/authors", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       if (result.success === true) {
//         window.Swal.fire({
//           title: "Kitob muallifi yuklandi",
//           text: "Siz taqdim qilgan muallif yaratildi",
//           icon: "success",
//           showCloseButton: true,
//           timer: 3000,
//         });
//         location.pathname = "/D:/dasturlash/Javascript/book-stoer/authors.html";
//       } else {
//         Swal.fire({
//           title: "Hatolik",
//           text: result,
//           icon: "error",
//           showCloseButton: true,
//           timer: 5000,
//         });
//       }
//     })
//     .catch((error) => console.log("error", error));
// }

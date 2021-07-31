const defaultAuthorImg = "./assets/img/writer.jpg";
const defaultBookImg = "./assets/img/book.jpg";
const defaultEachAuthorImg = "./assets/img/author.jpg";

let smth = document.getElementsByClassName("page-links");
console.log(smth);

function fetchBooks() {
  // let pageSize = document.getElementById("pageSize").value;
  // let pageNum = 3;
  displayLoader(true);
  fetch("https://book.alitechbot.uz/api/books?pageSize=100")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.payload.docs.forEach((item) => {
        console.log(item);
        const { _id, title, year, imageLink = defaultBookImg } = item;
        let imageFinalLink = `http://book.alitechbot.uz/${imageLink}`;
        if (imageLink.startsWith("http")) {
          imageFinalLink = imageLink;
        }
        let titleShort = `${title}`;
        if (titleShort.length >= 30) {
          let replaceShort = titleShort.slice(25, titleShort.length);
          var rep = titleShort.replace(replaceShort, "...");
          titleShort = rep;
        }
        const bookBlock = document.getElementById("content");
        bookBlock.innerHTML += `
        <div class="card border-0 m-3" style="width: 10rem">
        <img
          id="imageSrc"
          src="${imageFinalLink}"
          class="card-img-top"
          alt="${imageFinalLink}"
        />
        <div class="card-body p-0 pt-2 lh-1">
          <p>
            <span style="font-size: 13px"
              ><i
                class="fas fa-star text-warning"
                style="font-size: 11px"
              ></i>
              4.1</span
            >
          </p>
          <h5 class="card-title fs-6 ms-1">
            ${titleShort}
          </h5>
          <p class="card-text fw-bold">${year}</p>
          <p class="fs-6" style="font-weight: 500; color: #aeaeae; margin-bottom: 30px;">
            ${item.author.firstName} ${item.author.lastName}
          </p>
          <p class="card-text fw-bold">$21.6</p>
          <a href='/D:/dasturlash/Javascript/book-stoer/each_book.html?id=${_id}' class="btn btn-warning fw-bold buy-btn"
            ><i class="far fa-bookmark me-3"></i>Read more</a
          >
        </div>
      </div>
        `;
        displayLoader(false);
      });
    });
}

function fetchAuthors() {
  displayLoader(true);
  fetch("https://book.alitechbot.uz/api/authors")
    .then((res) => res.json())
    .then((dataBase) => {
      console.log(dataBase);
      dataBase.payload.forEach((item) => {
        const authorsBlock = document.getElementById("authors-content");
        authorsBlock.innerHTML += `
        <div class="author-each mt-2">
        <span class="d-flex">
          <span>
            <a href="/D:/dasturlash/Javascript/book-stoer/each_author.html?id=${
              item._id
            }">
              <div class="author-img">
                <img
                  src="${(item.imageLink = defaultAuthorImg)}"s
                  alt=""
                />
              </div>
            </a>
          </span>
          <span style="margin-left: 10px; width: 400px; line-height: 14px">
            <a href="/D:/dasturlash/Javascript/book-stoer/each_author.html?id=${
              item._id
            }" class="author_name">${item.firstName} ${item.lastName}</a>
            <br />Author of<a href="#!" style="margin-left: 5px"
              ></a
            ><br />and <a href="#!">1708 more books</a> <br />
            <a href="#!">16 books shelved</a><br /><a href="#!"
              >2469 friends</a
            >
          </span>
        </span>
        <span style="width: 120px; font-size: 12px; color: #999999">
          27,486,497 member reviews
          <br />
          771,824 followers
        </span>
      </div>
        `;
        displayLoader(false);
      });
    })
    .catch((err) => {
      console.log(err);
      displayLoader(false);
    });
}

function fetchAuthorById() {
  var queryauthor = new URLSearchParams(location.search);
  const id = queryauthor.get("id");
  displayLoader(true);
  fetch(`https://book.alitechbot.uz/api/authors/${id}`)
    .then((result) => result.json())
    .then((authorData) => {
      const { firstName, lastName } = authorData.payload;
      const authorBlock = document.getElementById("auth_block");
      authorBlock.innerHTML = `
      <div class="mt-4 author-block">
      <div class="text-block">
        <h6>- Book Author</h6>
        <h2>${firstName} ${lastName}</h2>
        <p class="fw-bold" style="color: #ffd767">
          A room without books is like a body without a soul
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          velit sunt tenetur illo recusandae quidem eos aliquam repudiandae
          laudantium laboriosam. Sequi dolorum sapiente quasi cum molestias
          nulla quod voluptate autem!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          velit sunt tenetur illo recusandae quidem eos aliquam repudiandae
          laudantium laboriosam. Sequi dolorum sapiente quasi cum molestias
          nulla quod voluptate autem!
        </p>
        <button class="btn btn-warning">Read full biography</button>
      </div>
      <div class="img-block">
        <img
          src="${defaultEachAuthorImg}"
          alt=""
        />
      </div>
    </div>
      `;
      displayLoader(false);
    })
    .catch((err) => {
      console.log(err, "Error");
      displayLoader(false);
    });
}

function fetchBookById() {
  var query = new URLSearchParams(location.search);
  const id = query.get("id");
  displayLoader(true);
  fetch(`https://book.alitechbot.uz/api/books/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { imageLink = defaultBookImg, title, author } = data.payload.book;
      let imageFinalLink = `https://book.alitechbot.uz/${imageLink}`;
      if (imageLink.startsWith("http")) {
        imageFinalLink = imageLink;
      }
      const bookBlock = document.getElementById("book_block");
      bookBlock.innerHTML = `
     <div class="book">
  <div class="left-content">
    <a href="#!">
      <img
        src="${imageFinalLink}"
        alt="${imageFinalLink}"
      />
    </a>
    <button class="btn btn-outline-warning mt-2" onclick='wantRead()'>Want to read</button>
  </div>
  <div class="right-content">
    <h1 class="book-title fw-bold">${title}</h1>
    <p class="book-author">by <strong>${author.firstName} ${author.lastName}</strong></p>
    <p class="description" id="description">
      Throughout my life I have achieved many remarkable things. In
      Screw It, Let's Do It, I will share with you my ideas and the
      secrets of my success, but not simply because I hope they'll help
      you achieve your individual goals. 
    </p>
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Comments
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <form class="d-flex align-items-stretch" onsubmit="addCommit(event)">
    <input
      required
      type="text"
      placeholder="Add comment"
      class="me-2"
      id="commentText"
    />
    <button class="btn btn-warning" type="submit">Add</button>
  </form>
    </div>
  </div>
  </div>
</div>
     `;
      data.payload.comment.forEach((item) => {
        const { text, user, _id } = item;
        console.log(item);
        const commentBlock = document.getElementById("flush-collapseOne");
        commentBlock.innerHTML += `
        <div class="accordion-body fs-6 fw-bold" id='${_id}'>${text} <small>by ${user.firstName}</small><div></div></div>
        `;
      });
      console.log(data);
      displayLoader(false);
    })
    .catch((err) => {
      console.log(err);
      displayLoader(false);
    });
}

function displayLoader(loading = true) {
  const loader = `
  <div class="wrap" id='spinner-wrap'>
  <div class="loading">
    <div class="bounceball"></div>
    <div class="text">NOW LOADING</div>
  </div>
</div> `;
  const spinner = document.getElementById("spinner-wrap");
  if (loading) {
    document.body.innerHTML += loader;
  } else {
    spinner.style.display = "none";
  }
}

function updateBook(event) {
  event.preventDefault();
  var editBookId = new URLSearchParams(location.search);
  const bookId = editBookId.get("id");
  console.log(bookId);
  var bookdata = {
    title: document.getElementById("edit-title").value,
    year: document.getElementById("edit-year").value,
    price: document.getElementById("edit-price").value,
    pages: document.getElementById("edit-pages").value,
  };
  console.log(bookdata);
  fetch(`https://book.alitechbot.uz/api/books/${bookId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(bookdata),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success === true) {
        Swal.fire({
          title: "Saved changes",
          text: "You have successfully modified the book",
          icon: "success",
          showCloseButton: true,
          timer: 5000,
        });
        setTimeout(
          back("/D:/dasturlash/Javascript/book-stoer/my_books.html"),
          5000
        );
      } else {
        Swal.fire({
          title: "Error",
          text: "You have not modified the book",
          icon: "error",
          showCloseButton: true,
          timer: 5000,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
      Swal.fire({
        title: "Error",
        text: result.msg,
        icon: "error",
        showCloseButton: true,
        timer: 5000,
      });
    });
}

function editBookData() {
  displayLoader(true);
  var editBookId = new URLSearchParams(location.search);
  const bookId = editBookId.get("id");
  console.log(bookId);
  fetch(`https://book.alitechbot.uz/api/books/${bookId}`)
    .then((reponsev) => reponsev.json())
    .then((element) => {
      console.log(element);
      const { imageLink, title, year, author, price, pages } =
        element.payload.book;
      let imageFinalLink = `https://book.alitechbot.uz/${imageLink}`;
      if (imageLink.startsWith("http")) {
        imageFinalLink = imageLink;
      }
      const bookBlock = document.getElementById("EditBookBlock");
      const editBookModal = document.getElementById("editmodal");
      bookBlock.innerHTML = `
      <div
      class="bookcontent d-flex align-items-center justify-content-between"
    >
      <div class="d-flex">
        <div>
          <img
          style="object-fit: cover;"
            width="100px"
            height="140px"
            src="${imageFinalLink}"
            alt="${imageFinalLink}"
          />
        </div>
        <div class="ms-3">
          <h4>${title}</h4>
          <p>by<strong class="ms-1">${author.firstName} ${author.lastName}</strong></p>
          <p>published<strong class="ms-1">${year}</strong></p>
        </div>
      </div>
      <div>
        <div class="m-2">
          <a class="fs-5" onclick="displayBlock()"><i class="far fa-edit"></i></a>
        </div>
        <div class="m-2">
          <a class="fs-5" onclick="deleteBook()"><i class="far fa-trash-alt"></i></a>
        </div>
      </div>
    </div>
   `;
      editBookModal.innerHTML = `   <div class="editcontent">
   <div class="d-flex justify-content-between edit-modal-header">
     <h3>Edit Book</h3>
     <a
       class="edit-close"
       onclick="document.getElementById('editmodal').style.display = 'none'"
       ><i class="fas fa-times"></i
     ></a>
   </div>
   <div class="edit-modal-body">
     <form onsubmit="updateBook(event)">
       <input type="text" name="edit-title" id="edit-title" value="${title}" />
       <input type="number" name="edit-price" id="edit-price" value="${price}" />
       <input type="number" name="edit-pages" id="edit-pages" value="${pages}" />
       <input type="number" name="edit-year" id="edit-year" value="${year}" />
       <button type="submit" class="btn btn-success">Save Changes</button>
     </form>
   </div>
 </div>
   `;
      displayLoader(false);
    })
    .catch((err) => console.error(err));
  displayLoader(false);
}
function deleteBook() {
  displayLoader(true);
  var editBookId = new URLSearchParams(location.search);
  const bookId = editBookId.get("id");
  console.log(bookId);
  fetch(`https://book.alitechbot.uz/api/books/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        Swal.fire({
          title: "Deleted",
          text: "You have successfully deleted the book",
          icon: "success",
          showCloseButton: true,
          timer: 5000,
        });
        setTimeout(
          back("/D:/dasturlash/Javascript/book-stoer/my_books.html"),
          5000
        );
      } else {
        Swal.fire({
          title: "Error",
          text: "You have not deleted the book",
          icon: "error",
          showCloseButton: true,
          timer: 5000,
        });
      }
    })
    .catch((err) => console.log("Error", err));
  displayLoader(false);
}
function getMyBooks() {
  displayLoader(true);
  const myBooksBlock = document.getElementById("contentBookBlock");
  fetch("https://book.alitechbot.uz/api/books/my-books", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.payload.forEach((item) => {
        const { imageLink, title, _id, author, year } = item;
        let imageFinalLink = `https://book.alitechbot.uz/${imageLink}`;
        if (imageLink.startsWith("http")) {
          imageFinalLink = imageLink;
        }
        myBooksBlock.innerHTML += `
      <div class="book my-2">
      <div class="d-flex align-items-center">
       <div class="img-book">
         <a href="/D:/dasturlash/Javascript/book-stoer/edit_book.html?id=${_id}">
           <img src="${imageFinalLink}" alt="${imageFinalLink}">
         </a>
       </div>
       <div class="info-book ms-2">
         <h4>${title}</h4>
         <p><span>by</span>${author.firstName} ${author.lastName}</p>
         <p>${year}</p>
       </div>
       </div>
     </div>
      `;
      });
      displayLoader(false);
    })
    .catch((err) => {
      console.error("error", err);
      displayLoader(false);
    });
}

function getWantBook() {
  displayLoader(true);
  fetch("https://book.alitechbot.uz/api/users/shelf", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const wantGroup = document.getElementById("card_group");
      result.payload.shelf.forEach((item) => {
        const { imageLink, title, year, _id } = item;
        let imageFinalLink = `https://book.alitechbot.uz/${imageLink}`;
        if (imageLink.startsWith("http")) {
          imageFinalLink = imageLink;
        }
        wantGroup.innerHTML += `
<div class="card m-2" style="width: 18rem;">
  <img src="${imageFinalLink}" class="card-img-top" alt="${imageFinalLink}">
  <div class="card-body" id='${_id}'>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${year}</p>
    <a onclick='removeWantBook(this)' class="btn btn-warning removeBtn">Remove</a>
  </div>
</div>
     `;
        displayLoader(false);
      });
    })
    .catch((err) => {
      console.error("Error", err);
      displayLoader(false);
    });
}

function wantRead() {
  var queryauthor = new URLSearchParams(location.search);
  const id = queryauthor.get("id");
  fetch("https://book.alitechbot.uz/api/users/shelf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({ bookId: id }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        Swal.fire({
          title: "Success",
          text: "You add to want list this book",
          icon: "success",
          showCloseButton: true,
          timer: 5000,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "You have not add this book",
          icon: "error",
          showCloseButton: true,
          timer: 5000,
        });
      }
      console.log(result, "Hello");
    });
}

function removeWantBook(e) {
  let parentId = e.parentElement.id;
  fetch(`https://book.alitechbot.uz/api/users/shelf/${parentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err, "Error");
    });
}

function addCommit(event) {
  event.preventDefault();
  var query = new URLSearchParams(location.search);
  const id = query.get("id");
  const commentBtn = document.getElementById("commentText").value;
  fetch("https://book.alitechbot.uz/api/books/comment", {
    method: "POST",
    body: JSON.stringify({ bookId: id, text: commentBtn }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        Swal.fire({
          title: "Succes",
          text: "Commit added",
          icon: "success",
          showCloseButton: true,
          timer: 5000,
        });
        setTimeout(back(location.pathname), 5000);
      } else {
        Swal.fire({
          title: "Error",
          text: "Did not commit",
          icon: "error",
          showCloseButton: true,
          timer: 5000,
        });
      }
      console.log(result.payload);
      console.log(commentBtn);
    });
}

function editAccount(event) {
  event.preventDefault();
  let form = document.getElementById("edit-account-form");
  const {
    firstname,
    lastname,
    password,
    email,
    phonenumber,
    lang,
    fileImgUpload,
  } = form;

  const myAccount = {
    email: email.value,
    password: password.value,
    firstName: firstname.value,
    lastName: lastname.value,
    lang: lang.value,
    image: fileImgUpload.value,
    phone: phonenumber.value,
  };
  console.log(myAccount);
  // let accountData = new FormData();
  // accountData.append("email", email.value);
  // accountData.append("password", password.value);
  // accountData.append("firstName", firstname.value);
  // accountData.append("lastName", lastname.value);
  // accountData.append("phone", phonenumber.value);
  // accountData.append("image", fileImg.files[0]);
  // accountData.append("lang", lang.value);

  // console.log(Array.from(accountData));

  fetch("https://book.alitechbot.uz/api/users", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      Accept: `application/json`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(myAccount),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

function getMyAccount() {
  fetch("https://book.alitechbot.uz/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
getMyAccount();

window.onload = function () {
  let currentpage = location.pathname;
  if (currentpage === "/D:/dasturlash/Javascript/book-stoer/index.html") {
    fetchBooks();
  } else if (
    currentpage === "/D:/dasturlash/Javascript/book-stoer/each_author.html"
  ) {
    fetchAuthorById();
  } else if (
    currentpage === "/D:/dasturlash/Javascript/book-stoer/each_book.html"
  ) {
    fetchBookById();
  } else if (
    currentpage === "/D:/dasturlash/Javascript/book-stoer/my_books.html"
  ) {
    getMyBooks();
  } else if (
    currentpage == "/D:/dasturlash/Javascript/book-stoer/edit_book.html"
  ) {
    editBookData();
  } else if (
    currentpage == "/D:/dasturlash/Javascript/book-stoer/profile.html"
  ) {
    getWantBook();
    getDataUser();
  } else {
    fetchAuthors();
  }
};

function back(str) {
  location.pathname = str;
}
function authorsId() {
  fetch("https://book.alitechbot.uz/api/authors")
    .then((response) => response.json())
    .then((data) => {
      data.payload.forEach((item) => {
        const selectBlock = document.getElementById("select");
        const { _id, firstName, lastName } = item;
        selectBlock.innerHTML += `
      <option value="${_id}">${firstName} ${lastName}</option>
      `;
      });
    })
    .catch((err) => console.error("Error", err));
}
authorsId();

function createBook(event) {
  event.preventDefault();
  const bookForm = document.getElementById("bookFormValue");
  const { title, pages, author, year, country, price } = bookForm;
  let bookFile = document.querySelector("#imageFile");
  console.log(bookFile);

  // const book = {
  //   title: title.value,
  //   pages: pages.value,
  //   imageLink: bookFile.files[0],
  //   author: author.value,
  //   year: year.value,
  //   country: country.value,
  //   price: price.value,
  // };

  let bookData = new FormData();

  bookData.append("image", bookFile.files[0]);
  bookData.append("title", title.value);
  bookData.append("pages", pages.value);
  bookData.append("price", price.value);
  bookData.append("year", year.value);
  bookData.append("country", country.value);
  bookData.append("author", author.value);

  console.log(Array.from(bookData));
  fetch("https://book.alitechbot.uz/api/books", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: bookData,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if ((result.success = true)) {
        Swal.fire({
          title: "Good job",
          text: "The book you provided has been created",
          icon: "success",
          showCloseButton: true,
          timer: 3000,
        });
        setTimeout(
          back("/D:/dasturlash/Javascript/book-stoer/index.html"),
          3000
        );
      } else {
        Swal.fire({
          title: "Error",
          text: result.msg,
          icon: "The book you provided was not created",
          showCloseButton: true,
          timer: 5000,
        });
      }
    })
    .catch((error) => console.log("error", error));
}

function createAuthor(event) {
  event.preventDefault();
  const authorForm = document.getElementById("add-author-form");
  const { lastName, firstName } = authorForm;
  const authorData = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  console.log(authorData);
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(authorData),
  };

  fetch("https://book.alitechbot.uz/api/authors", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success === true) {
        window.Swal.fire({
          title: "Kitob muallifi yuklandi",
          text: "Siz taqdim qilgan muallif yaratildi",
          icon: "success",
          showCloseButton: true,
          timer: 3000,
        });
        setTimeout(
          back("/D:/dasturlash/Javascript/book-stoer/authors.html"),
          3000
        );
      } else {
        Swal.fire({
          title: "Hatolik",
          text: result,
          icon: "error",
          showCloseButton: true,
          timer: 5000,
        });
      }
    })
    .catch((error) => console.log("error", error));
}

function getDataUser() {
  document.getElementById("firstname").value = localStorage.userFirstname;
  document.getElementById("lastname").value = localStorage.userLastname;
  document.getElementById("phonenumber").value = localStorage.userPhone;
  document.getElementById("email").value = localStorage.userEmail;
  document.getElementById("lang").value = localStorage.userLang;
  document.getElementById("lang").value = localStorage.userLang;
  document.getElementById("password").value = "something";
  document.getElementById("fileImgUpload").value = localStorage.accountImage;
}

function locationPath() {
  location.pathname = location.pathname;
}
function timeChecker() {
  let now = new Date().getHours();
  let shelfLife = now - localStorage.time;
  if (shelfLife >= 10) {
    localStorage.removeItem("token");
  }
}

function showHiden() {
  document.getElementById("password").type = "text";
}
function hiden() {
  document.getElementById("password").type = "password";
}
function refresh() {
  setTimeout(function () {
    location.reload();
  }, 2000);
}
timeChecker();
// function getCooment() {
//   fetch("https://book.alitechbot.uz/api/books/comment")
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result);
//     });
// }
// getCooment();

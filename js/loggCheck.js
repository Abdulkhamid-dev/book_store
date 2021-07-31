function checkLogIn() {
  const btnGroup = document.getElementById("btn_group");
  let myImg = localStorage.accountImage;
  if (myImg === "") {
    myImg = '"./assets/img/profile.png"';
  }
  if (!localStorage.token) {
    btnGroup.innerHTML = `
        <a href="log_in.html" class="btn btn-outline-warning">Sign in</a>
        <a href="sign_up.html" class="btn btn-warning">Sign up</a>
        `;
  } else {
    btnGroup.innerHTML = `
         <button type="button" id="add_book_btn" class="btn btn-outline-warning me-2" onclick="document.getElementById('myModal').style.display='block'" >
         Add Book
         </button>
         <button type="button" id="add_book_btn" class="btn btn-warning" onclick="document.getElementById('authorModal').style.display='block'" >
         Add Author
         </button>
         <div class="dropdown">
         <button class="dropbtn btn" onclick="myFunction()">
         <img  src="${myImg}" alt="">
         </div>
         <div id="myDropdown" class="dropdown-content">
         <a href="profile.html">Profile</a>
         <a href="my_books.html">My books</a>
         <a href="#">Groups</a>
         <a onclick="logOut()">Sign Out</a>
         </div>
         </div>    
         `;
  }
  var imges = document.getElementById("accountimg");
  imges.src = myImg;
}

setInterval(checkLogIn(), 2000, window);

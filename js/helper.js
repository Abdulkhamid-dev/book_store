function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function logOut() {
  localStorage.clear();
  if ((location.pathname = "/D:/dasturlash/Javascript/book-stoer/index.html")) {
    location.reload();
  } else {
    location.pathname = "/D:/dasturlash/Javascript/book-stoer/index.html";
  }
}

// var editmodal = document.getElementById("editmodal");

// var editbtn = document.getElementById("editBtn");
// var editspan = document.getElementsByClassName("edit-close");
// editbtn.onclick = function () {
//   editmodal.style.display = "block";
// };
// editspan.onclick = function () {
//   editmodal.style.display = "none";
// };
// window.onclick = function (event) {
//   if (event.target == editmodal) {
//     editmodal.style.display = "none";
//   }
// };

function displayBlock() {
  document.getElementById("editmodal").style.display = "block";
}

// function editBookData() {
//   var editBookId = new URLSearchParams(location.search);
//   const bookId = editBookId.get("id");
//   fetch(`http://book.alitechbot.uz/api/books/${bookId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       const { imageLink, title, price, pages, year } = data;
//       const bookbyIdBlock = document.getElementById("editmodal");
//       bookbyIdBlock.innerHTML = `
//    <div class="editcontent">
//         <div class="d-flex justify-content-between edit-modal-header">
//           <h3>Edit Book</h3>
//           <a
//             class="edit-close"
//             onclick="document.getElementById('editmodal').style.display = 'none'"
//             ><i class="fas fa-times"></i
//           ></a>
//         </div>
//         <div class="edit-modal-body">
//           <form>
//             <input type="text" name="edit-title" value="${title}" />
//             <input type="number" name="edit-price" value="${price}" />
//             <input type="number" name="edit-pages" value="${pages}" />
//             <input type="number" name="edit-year" value="${year}" />
//             <input type="text" name="edit-imageLink"  value="${imageLink}"/>
//             <button type="submit" class="btn btn-success">Save Changes</button>
//           </form>
//         </div>
//       </div>
//    `;
//     })
//     .catch((err) => console.error(err));
// }

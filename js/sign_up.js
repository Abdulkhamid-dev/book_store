function signUp(event) {
  event.preventDefault();

  const bookForm = document.getElementById("sign-up-form");
  const { email, password, phone, firstName, lastName, country } = bookForm;
  // const imgFile = document.getElementById("imgfile")[0];
  const user = {
    email: email.value,
    password: password.value,
    phone: phone.value,
    firstName: firstName.value,
    lastName: lastName.value,
  };
  console.log(user);

  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  // const userData = new FormData();

  // userData.append("image", imgFile);
  // userData.append("email", email.value);
  // userData.append("password", password.value);
  // userData.append("firstName", firstName.value);
  // userData.append("lastName", lastName.value);
  // userData.append("country", country.value);
  // userData.append("phone", phone.value);
  // userData.append("language", language.value);

  fetch("https://book.alitechbot.uz/api/sign-up", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success === true) {
        Swal.fire({
          title: "Logged in",
          text: "Your are logged in successfully",
          icon: "success",
          showCancelButton: true,
          showCloseButton: true,
          timer: 3000,
        });
        setTimeout(
          (location.pathname =
            "/D:/dasturlash/Javascript/book-stoer/index.html"),
          3000
        );
        localStorage.setItem("token", result.token);
        localStorage.setItem("accountImage", result.user.image);
        localStorage.setItem("userFirstname", result.user.firstName);
        localStorage.setItem("userLastname", result.user.firstName);
        localStorage.setItem("userPhone", result.user.phone);
        localStorage.setItem("userLang", result.user.lang);
        localStorage.setItem("userEmail", result.user.email);
      } else {
        Swal.fire({
          title: "Hatolik",
          text: JSON.stringify(result.msg),
          icon: "error",
          showCancelButton: true,
          showCloseButton: true,
          timer: 5000,
        });
      }
    })
    .catch((error) => console.log("error", error));
}

function login(event) {
  event.preventDefault();

  const bookForm = document.getElementById("login");
  const { email, password } = bookForm;
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);

  // var requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(user),
  // };

  fetch("https://book.alitechbot.uz/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success === true) {
        Swal.fire({
          title: "Logged in",
          text: "Your are logged in successfully",
          icon: "success",
          showCancelButton: true,
          showCloseButton: true,
          timer: 3000,
        });

        localStorage.setItem("token", result.token);
        localStorage.setItem("accountImage", result.user.image);
        localStorage.setItem("userFirstname", result.user.firstName);
        localStorage.setItem("userLastname", result.user.firstName);
        localStorage.setItem("userPhone", result.user.phone);
        localStorage.setItem("userLang", result.user.lang);
        localStorage.setItem("userEmail", result.user.email);
        // localStorage.setItem("time", new Date().getHours());
        // setTimeout(function () {
        //   location.pathname = "/D:/dasturlash/Javascript/book-stoer/index.html";
        // }, 1500);
        setTimeout(
          (location.pathname =
            "/D:/dasturlash/Javascript/book-stoer/index.html"),
          3000
        );
      } else {
        Swal.fire({
          title: "An error in your password or email",
          text: "You can't logged in",
          icon: "error",
          showCancelButton: true,
          showCloseButton: true,
          timer: 3000,
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Hatolik",
        text: error.message,
        icon: "error",
        showCancelButton: true,
        showCloseButton: true,
        timer: 5000,
      });
    });
}

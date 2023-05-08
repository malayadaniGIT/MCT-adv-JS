document.getElementById("RightcontainerTOP").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;
  fetch("https://api.github.com/users/" + username)
    .then(function(response) {
        console.log(response);
        return response.json();
        // window.location.href = "Homepage.html";
    })
    .then(function(data) {
      localStorage.setItem("userData", JSON.stringify(data));
      window.location.href = "Homepage.html";
    })
    .catch(function(error) {
      console.error(error);
    });
})
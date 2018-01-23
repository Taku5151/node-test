function login() {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const expressString = `http://localhost:3000/login/${calcMD5(userName)}-${calcMD5(password)}`
  fetch(expressString, {
    method: "GET"
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    document.querySelector("section").innerHTML = `Login: ${data.login}<br />Password: ${data.password}`
  })
}

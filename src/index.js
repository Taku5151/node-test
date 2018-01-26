function login() {
  const login = calcMD5(document.getElementById("username").value);
  const password = calcMD5(document.getElementById("password").value);
  const expressString = `http://localhost:3000/login/`
  fetch(expressString, {
    method: "POST",
    body: JSON.stringify({login, password}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    document.querySelector("section").innerHTML = `Login: ${data.login}<br />Password: ${data.password}`
  })
}

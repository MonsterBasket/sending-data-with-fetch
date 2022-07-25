let dummyObject = {
    Name: "James",
    Email: "James@blaskett.com"
  };
  
  function submitData(name, email){
    let user = {"name":name, "email":email}
    let config = {
        method: "PORST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    };

    return fetch("http://localhost:3000/users", config)
            .then(response => response.json())
            .then(object => document.querySelector('body').appendChild(document.createElement('h1')).innerText= "POST Successful: " + object.id)
            .catch(error => document.querySelector('body').appendChild(document.createElement('h1')).innerText= "Unauthorized Access" + JSON.stringify(error.message));
  }

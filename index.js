function submitData(username, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then(function (response) {
         return response.json();
     })
     .then(function (object) {
        document.body.innerHTML = object["id"]
     })
     .catch(function (error) {
        document.body.innerHTML = error.message
         console.log(error);
     });
  
}

//= Line 1 is the Function Definition and Parameters.
//= Line 1: The function accepts two parameters, username and email, which will be sent as the data in the POST request.

//= Lines 2-3 are the Fetch Request.
//= Line 2: The request is made to the URL http://localhost:3000/users.
//= Line 3: the method 'POST' specifies that we’re creating a new user.

//= Line 4-6 are the Headers.
//= Line 5: 'Accept': 'application/json': Indicates that the response should be in JSON format.
//= Line 6: 'Content-Type': 'application/json': Specifies that the request body will be in JSON format.

//= in Lines 8-10, Body: JSON.stringify({ name: username, email: email }) converts the data object into a JSON string. 
//= It includes the name and email data passed in as arguments.

//= Lines 13-14: converts the response into a JSON object, allowing us to work with the data returned by the server in the next .then block.

//= Lines 16-17:Takes the JSON response, object, and sets the content of document.body.innerHTML to display the id property from the server response.
//= Assumes that the server response contains an id property, which represents the newly created user’s ID.

//= Lines 19-21: This block handles any errors that occur during the fetch request.
//= error.message is added to document.body.innerHTML if an error occurs, providing a user-visible message.
//= console.log(error); logs the error to the console for debugging purposes.

//= Summary: The submitData function sends a POST request to create a new user. If successful, it displays the new user’s ID on the page; 
//= if there’s an error, it displays the error message. Each section of the code serves a purpose in handling data submission and response management.
var letterSubmit = document.getElementById('submit'); // get id submit button from html
letterSubmit.addEventListener('click', function(e) { //event listener for click of submit button

  var inputString = e.target.value.toLowerCase().trim();

  var url = '/jumble?q=' + inputString;
  var xhr = new XMLHttpRequest(); //create new xhr request
  xhr.open('GET', url); //open GET request
  xhr.send(); // send request

  xhr.addEventListener('load', function(loadEvent) {
    //render(loadEvent, inputString);
    console.log(loadEvent);
  });
});

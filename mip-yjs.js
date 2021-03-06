let eventTarget = document.getElementById('mip-sjh-submit');
console.log(eventTarget);
console.log("loading mip-yjs.js sucessful");


function getInputValue() {
    var inputVal = document.getElementById("myInput").value;
    // console.log(inputVal);
    return inputVal;

}

eventTarget.addEventListener('click', function() {
  console.log("you hit the button exactly");
    fetch('http://api-to-call-com/endpoint', {
        method: 'POST',
        body: JSON.stringify({name: getInputValue()})
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed');
    }, networkError => console.log(networkError.message)
    );
  console.log("POST");
});
'use strict'

const apiKey = 'bbQf5Ran9PVbhWpElDfZjEz8hTtJPvS1PmXg8xZz';
const searchURL = 'https://developer.nps.gov/api/v1/parks'

const options = {
headers: new Headers({
"X-Api-Key": apiKey})
};


function displayResults(response,maxResults) {
    console.log(response)
    $('#results-list').empty();
    for (let i = 0; i < responseJson.data.length & i<maxResults; i++){
        $('#results-list').append(
            `<li>
                <h3><a href="${responseJson.data[i].url}">${responseJson.data[i].title}</a></h3>
                <p>${responseJson.data[i].fullName}</p>
                <p>${responseJson.data[i].description}</p>
                <p>${responseJson.data[i].url}</p>
            </li>`
          )}; 
        $('#results').removeClass('hidden');
      };

function getParks (){
    fetch(searchURL + "?api_key=" + apiKey, options)
    .then(response => {
        console.log(response);
        if (response.ok) {
            return response.json();
          }
        })
        .then(responseJson => displayResults(responseJson, maxResults))
        .catch(err => {
          $('#js-error-message').text(`Something went wrong, please try again later.`);
    });
}

function watchForm() {
    $('#js-form').submit(function(event){
        event.preventDefault();
        console.log('button working')
        getParks()
    });
}

$(watchForm);




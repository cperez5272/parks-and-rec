'use strict'

const apiKey = 'bbQf5Ran9PVbhWpElDfZjEz8hTtJPvS1PmXg8xZz';
const searchURL = 'https://developer.nps.gov/api/v1/parks';

const options = {
headers: new Headers({
"X-Api-Key": apiKey})
};

function getParks (){
    fetch(searchURL,options)
    .then(response => {
        console.log(response)
    });
}

function watchForm() {
    $('#js-form').submit(function(event){
        event.preventDefault();
        console.log('button working')
        getParks()
    })
}

$(watchForm)
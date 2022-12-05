async function getCatFact() { 
    $.ajax({
        url: 'https://catfact.ninja/fact',
        type: 'GET',
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function (xhr) {
            httpResponseCodeControl(statusCode, additionalTitle, additionalMessage)
        }
    });
 }

 async function getAllCatFacts() { 
    $.ajax({
        url: 'https://catfact.ninja/facts',
        type: 'GET',
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function (xhr) {
            httpResponseCodeControl(statusCode, additionalTitle, additionalMessage)
        }
    });
 }

 async function getCatFBreeds() { 
    $.ajax({
        url: 'https://catfact.ninja/breeds',
        type: 'GET',
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function (xhr) {
            httpResponseCodeControl(statusCode, additionalTitle, additionalMessage)
        }
    });
 }




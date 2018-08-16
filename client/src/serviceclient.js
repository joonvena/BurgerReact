export function fetchall(callback) {
    fetch('/ravintolat', {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchone(id, callback) {
    fetch('/ravintolat/'+id, {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

// palauttaa promisen, eikä kutsu callbackiä
export function deletequote(id/*, callback*/) {
    return fetch('/ravintolat/'+id, {method: 'DELETE'})
        .then(function(response){
            //callback();
        })
}

export function createquote(quote, callback) {
    fetch('/ravintolat',  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(quote)
    })
        .then((function(response) {
            callback();
        }));
}

export function updatequote(quote, callback) {
    fetch('/ravintolat/'+quote.id,  {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(quote)
    })
        .then((function(response) {
            callback();
        }));
}
let remote = (() => {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_HyRSDAfB7';
    const appSecret = '4df32817f1d94270b27b6299a5b1c660';

    function makeAuth(type) {
        if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
        else return 'Kinvey ' + localStorage.getItem('authtoken');
    }

    function makeRequest(method, module, url, auth) {
        return req = {
            url: baseUrl + module + '/' + appKey + '/' + url,
            method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };
    }

    function get(module, url, auth) {
        return $.ajax(makeRequest('GET', module, url, auth));
    }

    function post(module, url, data, auth) {
        let req = makeRequest('POST', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function update(module, url, data, auth) {
        let req = makeRequest('PUT', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function remove(module, url, auth) {
        return $.ajax(makeRequest('DELETE', module, url, auth));
    }

    return {
        get, post, update, remove
    }
})();
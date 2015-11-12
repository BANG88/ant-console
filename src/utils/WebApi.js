// https://github.com/ded/reqwest

import reqwest from 'reqwest'


export default function request(form) {
    // Uses XMLHttpRequest2 credentialled requests (cookies, HTTP basic auth) if supported

    var options = Object.assign({
        type: 'json',
        method: 'post',
        contentType: 'application/json',
        error: function (err) {
        }
    }, form);

    //development
    if (__DEVELOPMENT__) {
        options.url = '/api' + options.url;
    }

    return reqwest(options)

}

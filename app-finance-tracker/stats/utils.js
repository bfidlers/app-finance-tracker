/**
 * Get the session ID from the request headers
 * 
 * @return {string} The session ID from the request headers
*/
const getSessionIdHeader = function (request) {
    return request.get('mu-session-id');
};

export {
    getSessionIdHeader
}
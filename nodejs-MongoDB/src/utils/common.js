
// module.exports.MAIN_ROUTES_PATH = {
//     AUTH: '/auth',
//     ACCESSTOKEN: '/accessToken'
// }

module.exports.ROUTES_PATH = {
    USER: {
        ROOT: "/auth",
        SIGNUP: '/signup',
        LOGIN: '/login',
        UPDATE: '/updateUser/:id',
        DELETE: '/deleteUser/:id',
        LOGOUT: '/logout',
        REFRESHTOKEN: '/refreshToken'
    }
}


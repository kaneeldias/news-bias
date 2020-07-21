var axios = require("axios");
var environment = require("../environment.js");

/*const stringifiedParams = queryString.stringify({
    client_id: "472942420517-5h7r67cpinkijshh58j0abgsqeicestr.apps.googleusercontent.com",
    redirect_uri: 'http://localhost:4200/auth',
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '), // space seperated string
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
console.log(googleLoginUrl);
*/

module.exports = {

    getAccessTokenFromCode: async function(code) {
        const { data } = await axios({
            url: `https://oauth2.googleapis.com/token`,
            method: 'post',
            data: {
                client_id: environment.googleAuth.clientId,
                client_secret: environment.googleAuth.clientSecret,
                redirect_uri: environment.clientUrl+'/auth',
                grant_type: 'authorization_code',
                code,
            },
        });
        return data;
    },

    getInfo: async function(access_token) {
        const { data } = await axios({
            url: 'https://www.googleapis.com/oauth2/v2/userinfo',
            method: 'get',
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        //console.log(data); // { id, email, given_name, family_name }
        return data;
    }
}
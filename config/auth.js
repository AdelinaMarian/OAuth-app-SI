// config/auth.js

module.exports = {
    'facebookAuth' : {
        'clientID'        : '186619198586648', //  App ID
        'clientSecret'    : 'be054ded47c5d94717bff6d440e6a182', //  App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'googleAuth' : {
        'clientID'         : '468277629894-9hibrq1pip4jfp39748c2dke48puert0.apps.googleusercontent.com',
        'clientSecret'     : 'b56Y9xFM9j9MV2aWqoWSGsZ0',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }
};

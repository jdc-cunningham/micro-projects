const dotenv = require("dotenv");
dotenv.config({ path: '/home/pi/down-detector/.env' });
// dotenv.config({ path: "./.env" }); // dev
const axios = require('axios').default;
const twilio = require('./sendSms.js');
const siteToCheck = process.env.SITE;

axios.get(siteToCheck)
    .then(function (response) {
        if (
            !response.status === 200 ||
            !response.data.indexOf(process.env.TEST_CONTENT_STR)
        ) {
            twilio.sendMessage("Somethings' wrong with " + process.env.SITE_NAME);
        }
    })
    .catch(function (error) {
        twilio.sendMessage("Daily request to " + process.env.SITE_NAME + " failed");
    });
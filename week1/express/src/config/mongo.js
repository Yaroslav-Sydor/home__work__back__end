const mongoose = require('mongoose');

module.exports = {
    init() {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /* useCreateIndex: true,
            useFindAndModify: false, */

        }).then(() => {
            console.log('Successfully connected to database');
        }).catch((error) => {
            console.log('database connection failed. exiting now...');
            console.error(error);
            /*
            process.exit(1);
*/
        });
    },
};

//Add events when mongo connected: 'connected', 'error', 'open'?    
const mongoose = require('mongoose');

module.exports = {
    init() {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        

        }).then(() => {
            mongoose.connection
            .on('error', err => {
              console.error(err);
            })
            .on('open', err => {
              console.log(`DB connected`);
            })            
        }).catch((error) => {
            handleError(error);
           
        });
    },
};

const mongoose = require ('mongoose');


const dbConnect = () => {
//connect DB
mongoose.connect('mongodb+srv://Gina:gina5555@cluster0.bchtk.mongodb.net/test', {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser:true,
})
.then (() => console.log('DB connected'))
.catch(err => console.log(err));
};

module.exports = dbConnect
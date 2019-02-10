let mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'bloopr';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

let EmailModel = require('./models/email')
// let msg = new EmailModel(
//   {
//     email: 'test4@GMAIL.COM'
// })
// msg.save()
//    .then(doc => {
//      console.log("Saving new :",doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })

   EmailModel
  .find({
    // email: 'ada.lovelace@gmail.com'   // search query
  })
  .then(doc => {
    console.log("Email Model : \n",doc)
  })
  .catch(err => {
    console.error(err)
  })

  EmailModel
  .findOneAndUpdate(
    {
      email: 'ada.lovelace@gmail.com'  // search query
    }, 
    {
      email: 'theoutlander@live.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
module.exports = new Database()
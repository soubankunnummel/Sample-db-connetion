const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type:Number,
    min: 1,
    max: 100
},
  email: {
    type:String,
    required:true,
    lowercase:true,

},
  createAt: {
   type: Date,
   default: () => Date.now()
},
  updateAt: {
    type: Date,
    default: () => Date.now()
 },
  bestFriend: { 
    type:mongoose.SchemaTypes.ObjectId,
    ref: "User"

},
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHI = function( ) {
    console.log(`hi my name is ${this.name}`);
}

userSchema.static.findByName = function () {
    return this.find({name: new RegExp(this.name,"i")})
}

userSchema.query.ByName = function () {
    return this.find({name: new RegExp(this.name,"i")})
}

module.exports = mongoose.model("User", userSchema); 

const mongoos = require("mongoose")
const User = require("./User")

mongoos.connect("mongodb://localhost/testdb")

run()

async  function run(){

    try{

    //     const user = await User
    //     .where("age")
    //     .gt(12)
    //     .where("name")
    //     .equals("souban")
    //     .populate("bestFriend")
    //    .limit(1)
        
    //    const text = await User.where().ByName()
    //    console.log(text);

    //    text.sayHI()
       
       
       const user = await User.find() 
      
       console.log(user);
    //    const update = await User.updateOne({age:25})
    //   const delet = await User.deleteMany({age:33})  
    
        // const user = await User.deleteMany({name:"souban"})
        
        // const user = await User.create({
        //     name:"souban",
        //     age:33,
        //     email:"San@gmail.com",
        //     hobbies:["Playing footbal","wactching anime"],
        //     address: {
        //         street:"tvr " 
        //     }
        // })


        // const user2 = await User.create({
        //     name:"saan",
        //     age:20,
        //     email:"san@gmail.com",
        //     hobbies:["Playing footbal","wactching anime"],
          
        //     address: {
        //         street:"tvr " 
        //     }


        // })

       
        console.log("user creatd");
        // console.log(user);
        // console.log(user2);

    } catch (e) {
        console.log(e.message);
    }

   

}

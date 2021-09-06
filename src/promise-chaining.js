const mongoose = require('./db/mongoose')
const Task = require('./models/task');



Task.findByIdAndDelete("61129cbb1b873b571c0c021d").then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})

}).then((tasks)=>{
    console.log("incomplete tasks left: " + tasks)
}).catch((e)=>{
    console.log(e);
})



const deleteTaskAndUpdate = async (id)=>{
    const delete_id = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;

}

deleteTaskAndUpdate("6115961fa38ddf13dce22d4b").then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})

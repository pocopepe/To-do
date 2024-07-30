const mongo=require('mongoose');
mongo.connect(*add your own mongodb url*);

const todo= mongo.model('ToDo', {title: String, description: String, completed: Boolean});

module.exports={
    todo
}

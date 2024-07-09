const mongo=require('mongoose');
mongo.connect('mongodb+srv://pocopepe:LdD17HW6csr8qwOs@meh.s7ipmyl.mongodb.net/ToDo_App');

const todo= mongo.model('ToDo', {title: String, description: String, completed: Boolean});

module.exports={
    todo
}
const z=require('zod');
const initial=z.object({"title":z.string(), "description": z.string()});
const update=z.object({id: z.string()});

module.exports={
    createToDo: initial,
    updateToDo: update
}
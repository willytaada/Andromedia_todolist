import { api } from 'web-init'

export default api('/api/create', async ({ req, reply, db, ext }) => {
    const {done, title} = req.body;
    const todo = await db.todo.create({
        data : {
            done: done,
            title: title,
        },
    });
    reply.send(todo);
});

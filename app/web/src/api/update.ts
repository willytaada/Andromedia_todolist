import { api } from 'web-init'

export default api('/api/update', async ({ req, reply, db, ext }) => {
  const {id} : any = req.query; 
  const {title, done} : any = req.body;
  await db.todo.update({
      where: {
          id: Number(id)
      },
      data: {
          title: title,
          done: done
      },
  });
  reply.send({message:"terupdate"});
});
import { api } from 'web-init'

export default api('/api/delete', async ({ req, reply, db, ext }) => {
  const {id}: any = req.query;
  await db.todo.delete({
      where: {
          id: Number(id),
      },
  });
  reply.send({message: "Data terhapus"})
});

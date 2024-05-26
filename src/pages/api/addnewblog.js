import { connectDatabase, insertDocument } from "@/helpers/db-util";



async function handler(req, res) {
    if (req.method === 'POST') {
      const blog = req.body.blog;
  
     
  
      let client;
  
      try {
        client = await connectDatabase();
      } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;
      }
  
      try {
        await insertDocument(client, 'newblogs', { blog: blog });
        client.close();
      } catch (error) {
        res.status(500).json({ message: 'Inserting data failed!' });
        return;
      }
  
      res.status(201).json({ message: 'blog added' });
    }
  }
  
  export default handler;
  



import { connectDatabase, insertDocument,getAllDocuments } from "@/helpers/db-util";



async function handler(req, res) {
    if (req.method === 'POST') {
     
  
     
  
      let client;
  
      try {
        client = await connectDatabase();
      } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;
      }

      try {
        const documents = await getAllDocuments(client, 'newblogs', { _id: -1 });
        res.status(200).json({ blogs: documents });
        client.close();
      } catch (error) {
        res.status(500).json({ message: 'Getting comments failed.' });
      }


  
     /*  try {
        await insertDocument(client, 'newblogs', { blog: blog });
        client.close();
      } catch (error) {
        res.status(500).json({ message: 'Inserting data failed!' });
        return;
      }
  
      res.status(201).json({ message: 'blog added' }); */
    }
  }
  
  export default handler;
  
import { connectDatabase, getSingleDocuments } from "@/helpers/db-util";



async function handler(req, res) {

 
  
    if (req.method === 'POST') {
     
      const eventId = req.body.blogId
      
     
  
      let client;
  
       try {
        client = await connectDatabase();
      } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;
      }

      try {
        const documents = await getSingleDocuments(client, 'newblogs', eventId);
        res.status(200).json({ blogs: documents });
        client.close();
        console.log(documents)
      } catch (error) {
        res.status(500).json({ message: 'Getting comments failed.' });
      } 


  

    }
  }
  
  export default handler;
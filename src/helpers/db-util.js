import { MongoClient, ObjectId } from "mongodb";
import { object } from "yup";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://rhitesh:Realitylapse01@blogcluster.37lnt3a.mongodb.net/events?retryWrites=true&w=majority&appName=blogCluster"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}

export async function getSingleDocuments(client, collection, eventId) {
  const db = client.db();

  console.log(eventId, "this is the event id");

  const documents = await db
    .collection(collection)
    .find({ _id: new ObjectId(eventId) }).toArray();

  return documents;
}


export async function deleteDocuments(client, collection, eventId) {
  const db = client.db();

  console.log(eventId, "this is the delete id");

  const documents = await db
    .collection(collection)
    .deleteOne({ _id: new ObjectId(eventId) })

  return documents;
}

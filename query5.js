/**
 * Write the instructions that will separate the Users information into a different collection
 * - Create a user collection that contains all the unique users.
 * - Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id
 */
import { connectToDatabase } from './dbConnection.js';

const pipeline = [];

const main = async () => {
  const { tweetCollection, client } = await connectToDatabase();

  try {
    let result = tweetCollection.aggregate(pipeline);
    console.log('prompt');
    for await (const doc of result) {
      console.log(doc);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

main();

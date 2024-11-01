/**
 * How many tweets are not retweets or replies?
 * ??? how to know whether a tweet is a reply?
 *
 * ??? Loads the data - Provides instructions on how to load the data with Node.js
 */
import { connectToDatabase } from './dbConnection.js';

const main = async () => {
  const { tweetCollection, client } = await connectToDatabase();

  try {
    // Get query results
    let result = await tweetCollection.countDocuments({
      retweeted_status: { $exists: false },
      in_reply_to_status_id: null,
    });
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

main();

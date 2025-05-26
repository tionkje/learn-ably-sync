import type { PageServerLoad } from './$types';
import collection from '$lib/server/db.js';

export const load: PageServerLoad = async ({ params }) => {
  const data = await collection.find({}).toArray();

  data.forEach((data) => {
    data._id = data._id.toString();
  });

  console.log(data);

  return { data };
};

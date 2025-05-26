import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import collection from '$lib/server/db';

export  const GET: RequestHandler = async ({ url }) => {
  await collection.updateOne({}, { $inc:{test:1} });
	return new Response(String('OK'));
};

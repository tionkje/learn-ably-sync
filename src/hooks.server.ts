import { error, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.endsWith('favicon.ico')) error(404, 'Favicon not found');
  if (event.url.pathname.startsWith('/.well-known/')) error(404, 'not well-known');

  return await resolve(event);
};

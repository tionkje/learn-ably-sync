import { PUBLIC_ABLY_API_KEY } from '$env/static/public';
import Ably from 'ably';

// Instantiate the Realtime SDK
const ably = new Ably.Realtime(PUBLIC_ABLY_API_KEY);


// Get the channel to subscribe to
const channel = ably.channels.get('myDocuments');

// console.log('channel', channel);

// Subscribe to messages on the 'myDocuments' channel
await channel.subscribe((message) => {
  console.log('Received a change event in realtime: ' , message.data)
});


export async function handler(message) {
  console.log("Message 1 processed!", JSON.stringify(message, null, 2));
  return {};
}

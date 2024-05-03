export function getFirstWord(text: string): string {
   const match = text.match(/^\w+/);

   return match ? match[0] : '';
}

export function truncateText(text: string, maxLength: number): string {
   if (text.length > maxLength) {
      return `${text.slice(0, maxLength - 3)}...`;
   }
   return text;
}

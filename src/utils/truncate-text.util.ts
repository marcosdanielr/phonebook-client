export function truncateText(text: string, maxLength: number): string {
   const maxLengthWithEllipsis = maxLength - 3;

   if (text.length > maxLength) {
      return `${text.slice(0, maxLengthWithEllipsis)}...${text.length - maxLength}`;
   }
   return text;
}

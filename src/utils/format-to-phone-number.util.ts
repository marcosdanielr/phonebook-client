export function formatToPhoneNumber(phoneNumber: string): string {
   const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
   const phoneNumberRegex = /^(\d{2})(\d{1,5})(\d{4})$/;
   const match = cleanedPhoneNumber.match(phoneNumberRegex);

   if (match) {
      const formattedNumber = `(${match[1]}) ${match[2]}-${match[3]}`;
      return formattedNumber;
   }

   return '';
}

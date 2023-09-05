export const formatDate = (inputDateStr: Date): string => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const date = new Date(inputDateStr);
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
  
    const formattedDate = `${month} ${day}, ${formattedHours}:${(minutes < 10 ? '0' : '') + minutes} ${period}`;
    return formattedDate;
  }
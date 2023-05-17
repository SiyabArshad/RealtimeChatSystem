export default function formatTime(dateString) {
    // Create a new Date object using the input string
    const date = new Date(dateString);
  
    // Get the individual time components
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
  
    // Convert the hours to 12-hour format
    const hours12 = hours % 12 || 12;
  
    // Determine if it's AM or PM
    const period = hours < 12 ? 'AM' : 'PM';
  
    // Format the time as 'h:mm AM/PM'
    const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  
    // Return the formatted time
    return formattedTime;
  }
  
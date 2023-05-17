export default function formatDate(dateString) {
    // Create a new Date object using the input string
    const date = new Date(dateString);
  
    // Get the individual date components
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
  
    // Format the date as 'MM/DD/YYYY'
    const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  
    // Return the formatted date
    return formattedDate;
  }

  
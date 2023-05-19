export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
  
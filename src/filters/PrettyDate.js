
export default function(value) { 
  const date = new Date(value)
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const hours = date.getHours() < 10 ? '0' + date.getHours() :  date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() :  date.getMinutes();

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hours}:${minutes}`;
}

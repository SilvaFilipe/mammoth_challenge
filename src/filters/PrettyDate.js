
export default function(value) { 
    const date = new Date(value)
    const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.toLocaleTimeString()}`;
}

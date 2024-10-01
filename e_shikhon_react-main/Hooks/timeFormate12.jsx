// Exporting the function to convert 24-hour time to 12-hour time with AM/PM
export function timeFormat12(time24) {
    // Split hours and minutes from the input time
    let [hours, minutes] = time24.split(':');
    
    // Determine AM/PM
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // Handle midnight (0 hours)
    
    // Construct and return the formatted time
    return `${hours}:${minutes} ${ampm}`;
}

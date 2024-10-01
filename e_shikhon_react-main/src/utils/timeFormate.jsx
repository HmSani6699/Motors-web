export const secondToFormatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600); // Get the number of hours
  const minutes = Math.floor((totalSeconds % 3600) / 60); // Get the remaining minutes
  const seconds = totalSeconds % 60; // Get the remaining seconds

  // Format with leading zeros if needed
  const formattedHours = hours > 0 ? String(hours).padStart(2, "0") : "00";
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export const getDurationInSeconds = (
  quiz_duration,
  quiz_duration_parameter
) => {
  const duration = parseInt(quiz_duration); // Parse quiz_duration to an integer
  switch (quiz_duration_parameter) {
    case "Minute":
      return duration * 60; // 1 minute = 60 seconds
    case "Day":
      return duration * 24 * 60 * 60; // 1 day = 24 hours * 60 minutes * 60 seconds
    case "Second":
      return duration; // Already in seconds
    default:
      return 0; // Return 0 if the parameter doesn't match any known value
  }
};

export const truncateText = (text: string, maxLength: number): string => {
  // Check if the text exceeds the maxLength, if so, truncate it and append "..."
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Append "..." to the truncated text
  }
  return text; // Return the original text if it doesn't exceed the maxLength
};

// event.js
// Simple helper for the Event Calendar feature

function addEvent(title, date) {
  return {
    success: true,
    title,
    date,
    message: `Event '${title}' added on ${date}`
  };
}

module.exports = { addEvent };

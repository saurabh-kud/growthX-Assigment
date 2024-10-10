// Function to get uptime
const getUptime = (startTime) => {
  return (Date.now() - startTime) / 1000; // Convert from milliseconds to seconds
};

module.exports = getUptime;

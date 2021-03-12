const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

exports.lastUpdated = `Last updated on ${date} at ${time}`;

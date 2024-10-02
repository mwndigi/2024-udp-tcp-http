const http = require('http');

// Define an array of target hosts
// ['Asmterdam', 'San Francisco', 'Sydney']
const targetHosts = [
  'http://161.35.150.176:8000/ping',
  'http://24.144.85.4:8000/ping',
  'http://170.64.223.30:8000/ping'
];

function pingAllServers() {
  targetHosts.forEach((targetHost) => {
    pingServer(targetHost);
  });
}

function pingServer(targetHost) {
  const startTime = Date.now();

  const req = http.get(targetHost, (res) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`Ping to ${targetHost} took ${responseTime}ms`);
  });

  req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });
}

// Øvelse 3 - fjern kommentaren og kald pingAllServers
// Start packet capture i Wireshark og se trafikken med filter på HTTP med 'http' og/eller 'ip.addr == <server-ip>'
// pingAllServers();

const axios = require('axios');

// 🔥 SUA URL
const URL = 'https://e-caderninho-1.onrender.com/usuarios/keepalive';

// intervalo aleatório entre 2 e 5 minutos
function randomInterval() {
  const min = 2 * 60 * 1000;
  const max = 5 * 60 * 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function ping(retry = 0) {
  try {
    const start = Date.now();

    const response = await axios.get(URL, { timeout: 30000 });

    const duration = Date.now() - start;

    console.log(`[${new Date().toISOString()}] ✅ Ping OK | Status: ${response.status} | Tempo: ${duration}ms`);
  } catch (err) {
    console.log(`[${new Date().toISOString()}] ❌ Erro: ${err.message}`);

    if (retry < 2) {
      console.log('🔁 Tentando novamente em 10s...');
      return setTimeout(() => ping(retry + 1), 10000);
    }
  }

  const next = randomInterval();
  console.log(`⏱ Próximo ping em ${(next / 60000).toFixed(2)} minutos\n`);

  setTimeout(ping, next);
}

// starta
console.log('🚀 KeepAlive iniciado...');
ping();
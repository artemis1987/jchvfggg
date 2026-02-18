function log(message) {
    const consoleDiv = document.getElementById('console');
    const entry = document.createElement('div');
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    consoleDiv.prepend(entry);
}

function sendCommand(cmd) {
    log(`Команда отправлена: ${cmd.toUpperCase()}`);
    // Здесь можно интегрировать fetch к вашему API или GitHub Actions
}

function updateStats() {
    document.getElementById('proc-count').textContent = Math.floor(Math.random() * 50);
    document.getElementById('cpu-load').textContent = Math.floor(Math.random() * 100) + '%';
    document.getElementById('ram-usage').textContent = Math.floor(Math.random() * 8192) + ' MB';
}

setInterval(updateStats, 2000);
log('Система инициализирована. Подключено к Nexus Orchestrator.');
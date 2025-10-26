// Vereinfachte Game Engine - Führt direkt JS Code aus
class GameEngine {
  constructor() {
    this.output = [];
    this.inputQueue = [];
    this.waitingForInput = false;
    this.inputType = 'String';
    this.currentVersion = null;
  }

  // Hauptmethode: Startet das Spiel
  async start() {
    this.reset();

    // Hole die neueste Version
    if (!window.versionsData || window.versionsData.length === 0) {
      this.println('Keine Versionen verfügbar!');
      return;
    }

    // Neueste Version (höchste ID)
    this.currentVersion = window.versionsData.reduce((max, v) =>
      v.id > max.id ? v : max
    );

    this.showVersionInfo();

    // Prüfe ob JS Code vorhanden ist
    if (!this.currentVersion.js_code) {
      this.println('\n❌ Für diese Version ist noch kein JavaScript-Code verfügbar!');
      this.println('Bitte füge ein "js_code" Feld zur Version hinzu.');
      return;
    }

    // Führe JavaScript Code direkt aus
    try {
      await this.executeJSCode(this.currentVersion.js_code);
    } catch (error) {
      this.println(`\n❌ Fehler beim Ausführen: ${error.message}`);
      console.error(error);
    }
  }

  showVersionInfo() {
    const info = document.getElementById('version-info');
    info.innerHTML = `
      <h3>Version ${this.currentVersion.id}: ${this.currentVersion.change}</h3>
      <div>Thema: ${this.currentVersion.topic} | Datum: ${this.currentVersion.date}</div>
    `;
  }

  reset() {
    this.output = [];
    this.inputQueue = [];
    this.waitingForInput = false;
    this.updateOutput();
  }

  // JavaScript Code direkt ausführen
  async executeJSCode(jsCode) {
    // Erstelle eine async Funktion aus dem Code
    const gameFunc = new AsyncFunction('game', jsCode);

    // Führe aus
    await gameFunc(this);
  }

  // Ausgabe-Methoden
  println(text) {
    this.output.push(String(text));
    this.updateOutput();
  }

  print(text) {
    if (this.output.length === 0) {
      this.output.push('');
    }
    this.output[this.output.length - 1] += String(text);
    this.updateOutput();
  }

  // Eingabe-Methode (asynchron)
  async input(type = 'String') {
    this.inputType = type;
    return new Promise((resolve) => {
      this.waitingForInput = true;
      this.inputResolver = resolve;

      // Aktiviere Eingabefeld
      const inputField = document.getElementById('game-input');
      const submitBtn = document.getElementById('submit-btn');
      inputField.disabled = false;
      submitBtn.disabled = false;
      inputField.focus();
    });
  }

  // Verarbeite Benutzereingabe
  processInput(value) {
    if (!this.waitingForInput) return;

    let processedValue = value;

    // Konvertiere basierend auf Typ
    switch(this.inputType) {
      case 'int':
        processedValue = parseInt(value);
        if (isNaN(processedValue)) {
          this.println('Exception in thread "main" java.util.InputMismatchException');
          return;
        }
        break;
      case 'double':
        processedValue = parseFloat(value);
        if (isNaN(processedValue)) {
          this.println('Exception in thread "main" java.util.InputMismatchException');
          return;
        }
        break;
      case 'boolean':
        if (value !== 'true' && value !== 'false') {
          this.println('Exception in thread "main" java.util.InputMismatchException');
          return;
        }
        processedValue = value.toLowerCase() === 'true';
        break;
      case 'char':
        if (value.length !== 1) {
          this.println('Exception in thread "main" java.util.InputMismatchException');
          return;
        }
        processedValue = value.charAt(0);
        break;
      case 'String':
      default:
        processedValue = value;
        break;
    }

    // Zeige Eingabe im Output
    this.println(`${value}`);

    // Deaktiviere Eingabe
    const inputField = document.getElementById('game-input');
    const submitBtn = document.getElementById('submit-btn');
    inputField.disabled = true;
    submitBtn.disabled = true;
    inputField.value = '';

    this.waitingForInput = false;

    // Löse Promise auf
    if (this.inputResolver) {
      this.inputResolver(processedValue);
      this.inputResolver = null;
    }
  }

  updateOutput() {
    const outputDiv = document.getElementById('game-output');
    outputDiv.textContent = this.output.join('\n');
    outputDiv.scrollTop = outputDiv.scrollHeight;
  }
}

// AsyncFunction Constructor (für async/await Support)
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

// Globale Game-Instanz
let gameEngine = null;

// Initialisiere wenn Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
  gameEngine = new GameEngine();
  gameEngine.start();

  // Enter-Taste im Eingabefeld
  document.getElementById('game-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      submitInput();
    }
  });
});

// Globale Funktionen für Buttons
function submitInput() {
  const input = document.getElementById('game-input').value;
  if (input && gameEngine) {
    gameEngine.processInput(input);
  }
}

function restartGame() {
  if (gameEngine) {
    gameEngine.start();
  }
}

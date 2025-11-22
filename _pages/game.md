---
layout: single
title: "Avernus"
permalink: /game/
---

<style>
#game-container {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
}

#game-output {
  background: #mix(#000, 252a34, 15%) !default;
  color: #00adb5;
  padding: 15px;
  border-radius: 4px;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
  white-space: pre-wrap;
}

#game-input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

#game-input {
  flex: 1;
  background: #2d2d2d;
  color: #fff;
  border: 1px solid #eaeaea;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

#game-input:focus {
  outline: none;
  border-color: #00adb5;
}

.game-btn {
  background: #00adb5;
  color: #eaeaea;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.game-btn:hover {
  background: #00adb5;
}

.game-btn:disabled {
  background: #555;
  color: #eaeaea;
  cursor: not-allowed;
}

#version-info {
  background: #2d2d2d;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  color: #eaeaea;
  font-size: 12px;
}

#version-info h3 {
  margin: 0 0 5px 0;
  color: #00adb5;
  font-size: 14px;
}

.loading {
  text-align: center;
  color: #00adb5;
  font-style: italic;
}
</style>

<div id="game-container">
  <div id="version-info">
    <h3>Lade aktuelle Version...</h3>
  </div>

  <div id="game-output" class="loading">
    Initialisiere Spiel...
  </div>

  <div id="game-input-container">
    <input type="text" id="game-input" placeholder="Deine Eingabe..." disabled />
    <button class="game-btn" id="submit-btn" onclick="submitInput()" disabled>Absenden</button>
  </div>

  <button class="game-btn" id="restart-btn" onclick="restartGame()">Neustart</button>
</div>

<script>
// Versionen aus Jekyll verfügbar machen
window.versionsData = {{ site.data.versions.versions | jsonify }};
</script>
<script src="/assets/js/game-engine.js"></script>

---
layout: single
title: "Code Versionen"
permalink: /version/
---

## Version updaten

<form id="version-form">
  <h3>🚀 Code-Version</h3>


  <div>
    <label for="demo-topic"><strong>Thema:</strong></label><br>
    <select id="demo-topic">
      {% for tag in site.tags %}
        <option value="{{ tag[0] | slugify }}">{{ tag[0] }}</option>
      {% endfor %}
    </select>
  </div>

  <div>
    <label for="demo-code"><strong>Code:</strong></label><br>
    <textarea id="demo-code" rows="10" placeholder="Java Code hier einfügen..."></textarea>
  </div>

  <div>
    <label for="demo-notes"><strong>Was wurde geändert:</strong></label><br>
    <input type="text" id="demo-notes" placeholder="z.B. Ausgabetext geändert">
  </div>

  <a href="#" onclick="addLiveVersion(); return false;" class="btn btn--primary">
    Version updaten
  </a>
</form>

## Aktueller Code-Stand

<!-- Prism.js für Syntax Highlighting -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />

<div id="versions-container">
<!-- Versionen werden dynamisch aus _data/versions.yml geladen -->
</div>

<script>
// Versionen aus Jekyll verfügbar machen
window.versionsData = {{ site.data.versions.versions | jsonify }};
</script>
<script src="/assets/js/version-manager.js"></script>

<!-- Prism.js Bibliotheken -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>

<style>
@keyframes slideIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.temp-version {
  position: relative;
}

.code-view pre,
.diff-view pre {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.code-view pre::-webkit-scrollbar,
.diff-view pre::-webkit-scrollbar {
  width: 8px;
}

.code-view pre::-webkit-scrollbar-track,
.diff-view pre::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.code-view pre::-webkit-scrollbar-thumb,
.diff-view pre::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.code-view pre::-webkit-scrollbar-thumb:hover,
.diff-view pre::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>





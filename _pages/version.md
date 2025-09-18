---
layout: single
title: "Code Versionen"
permalink: /version/
header:
  teaser: /assets/images/version.png
  image: /assets/images/version.png
---

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





// Version Manager für Code-Versionen
class VersionManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.versions = [];
        this.loadVersions();
    }

    // Versionen aus _data/versions.yml laden (wird von Jekyll als JSON verfügbar gemacht)
    loadVersions() {
        // Versionen werden über Jekyll template in die Seite eingebettet
        if (window.versionsData) {
            this.versions = window.versionsData.sort((a, b) => b.id - a.id);
            this.renderVersions();
        }
    }

    // Alle Versionen rendern
    renderVersions() {
        this.container.innerHTML = '';
        this.versions.forEach((version, index) => {
            const previousVersion = this.versions[index + 1] || null;
            const diff = this.calculateDiff(version.code, previousVersion ? previousVersion.code : '');
            this.renderVersion(version, diff);
        });
    }

    // Einzelne Version rendern
    renderVersion(version, diff) {
        const versionElement = document.createElement('div');
        versionElement.className = 'version-entry';

        versionElement.innerHTML = `
            <div>
                <h3>${version.topic} - ${version.change}</h3>
                <p><strong>Datum:</strong> ${version.date} | <strong>Thema:</strong> <a href="#${version.topic_link}">${version.topic}</a> | <strong>Änderung:</strong> ${version.change}</p>
            </div>

            <a href="#" id="toggle-btn-${version.id}" onclick="versionManager.toggleVersion(${version.id}); return false;" class="btn btn--primary" style="margin-bottom: 10px;">
                📊 Änderungen anzeigen
            </a>

            <div class="code-version" data-version="${version.id}">
                <div class="code-view">
                    <pre><code class="language-java">${this.escapeHtml(version.code)}</code></pre>
                </div>

                <div class="diff-view" style="display: none;">
                    <pre><code class="language-diff">${this.escapeHtml(diff)}</code></pre>
                </div>
            </div>

            <hr>
        `;

        this.container.appendChild(versionElement);

        // Prism.js Syntax Highlighting für neue Elemente aktivieren
        if (window.Prism) {
            Prism.highlightAllUnder(versionElement);
        }
    }

    // Diff zwischen zwei Code-Versionen berechnen
    calculateDiff(currentCode, previousCode) {
        if (!previousCode || previousCode.trim() === '') {
            // Erste Version - alles ist neu
            return currentCode.split('\n').map(line => `+ ${line}`).join('\n');
        }

        const currentLines = currentCode.split('\n');
        const previousLines = previousCode.split('\n');
        const diff = [];

        const maxLines = Math.max(currentLines.length, previousLines.length);

        for (let i = 0; i < maxLines; i++) {
            const currentLine = currentLines[i] || '';
            const previousLine = previousLines[i] || '';

            if (currentLine === previousLine) {
                // Unveränderte Zeile
                diff.push(`  ${currentLine}`);
            } else if (!previousLine && currentLine) {
                // Neue Zeile hinzugefügt
                diff.push(`+ ${currentLine}`);
            } else if (previousLine && !currentLine) {
                // Zeile entfernt
                diff.push(`- ${previousLine}`);
            } else if (currentLine !== previousLine) {
                // Zeile geändert
                diff.push(`- ${previousLine}`);
                diff.push(`+ ${currentLine}`);
            }
        }

        return diff.join('\n');
    }

    // Version Toggle zwischen Code und Diff
    toggleVersion(versionId) {
        const version = document.querySelector(`.code-version[data-version="${versionId}"]`);
        const codeView = version.querySelector('.code-view');
        const diffView = version.querySelector('.diff-view');
        const button = document.getElementById(`toggle-btn-${versionId}`);

        if (codeView.style.display !== 'none') {
            // Zu Diff-Ansicht wechseln
            codeView.style.display = 'none';
            diffView.style.display = 'block';
            button.innerHTML = '💻 Code anzeigen';
        } else {
            // Zu Code-Ansicht wechseln
            codeView.style.display = 'block';
            diffView.style.display = 'none';
            button.innerHTML = '📊 Änderungen anzeigen';
        }
    }

    // HTML escaping für Sicherheit
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Alle Versionen auf Code-Ansicht zurücksetzen
    resetAllToCodeView() {
        this.versions.forEach(version => {
            const versionElement = document.querySelector(`.code-version[data-version="${version.id}"]`);
            if (versionElement) {
                const codeView = versionElement.querySelector('.code-view');
                const diffView = versionElement.querySelector('.diff-view');
                const button = document.getElementById(`toggle-btn-${version.id}`);

                if (codeView && diffView && button) {
                    codeView.style.display = 'block';
                    diffView.style.display = 'none';
                    button.innerHTML = '📊 Änderungen anzeigen';
                }
            }
        });
    }
}

// Globale Instanz
let versionManager;

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('versions-container')) {
        versionManager = new VersionManager('versions-container');
    }
});

// Legacy-Funktion für bestehende onclick-Handler
function toggleVersion(versionId) {
    if (versionManager) {
        versionManager.toggleVersion(versionId);
    }
}
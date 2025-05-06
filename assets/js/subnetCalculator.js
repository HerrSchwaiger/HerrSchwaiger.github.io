document.getElementById('subnetSlider').addEventListener('input', updateSubnetInfo);

const colors = [
    '#0092ca', // $primary-color
    '#005f73', // Dunkleres Blau (Komplementärfarbe)
    '#90e0ef', // Sehr helles Blau (Analoge Farbe)
    '#ff6f61'  // Korallenrot (Komplementärfarbe)
]; // Vordefinierte Farben passend zum Theme


function updateSubnetInfo() {
    const networkBits = document.getElementById('subnetSlider').value;
    const subNetworkBits = networkBits - 24;
    const hostBits = 32 - networkBits;

    if (window.jekyllData.difficulty == 'hard') {
        document.getElementById('sliderValue').textContent = `Prefix Length (Bits): ` + networkBits;
    } else {
        document.getElementById('sliderValue').textContent = `Präfixlänge (Bits): ` + networkBits;
    }

    const numberOfSubNetworks = Math.pow(2, subNetworkBits);
    const hostsPerSubNetwork = Math.pow(2, hostBits) - 2; // -2 für Netzwerk- und Broadcast-Adresse

    // Berechne die Anzahl der Spalten basierend auf der Anzahl der Netzwerkbits
    let numColumns = 1;
    let numRows = 1;
    if (subNetworkBits > 0) {
        numColumns = Math.pow(2, Math.ceil(subNetworkBits / 2));
        numRows = Math.pow(2, Math.floor(subNetworkBits / 2));
    }

    // Berechne die gap basierend auf der Anzahl der Netze
    const maxGap = 4; // Maximale gap in Pixeln
    const minGap = 1; // Minimale gap in Pixeln
    const gap = Math.max(minGap, maxGap - Math.floor(numberOfSubNetworks / 10));
    document.getElementById('result').style.gap = `${gap}px`;

    const maxRadius = 10;
    const minRadius = 1;
    const radius = Math.max(minRadius, maxRadius - Math.floor(numberOfSubNetworks / 10));

    // Berechne die Breite der Blöcke basierend auf der Anzahl der Spalten
    const containerWidth = document.getElementById('result').offsetWidth;
    const blockWidth = (containerWidth / numColumns) - gap; // 4px für den Rand (2px links + 2px rechts)
    const containerHeight = document.getElementById('result').offsetHeight;
    const blockHeight = (containerHeight / numRows) - gap;

    let resultHtml = ``; //`<p>Anzahl der Netze: ${numberOfSubNetworks}</p>`;

    for (let i = 0; i < numberOfSubNetworks; i++) {
        const color = colors[i % colors.length]; // Zyklisches Durchlaufen der Farben
        resultHtml += `<div class="block" style="background-color: ${color}; width: ${blockWidth}px; height: ${blockHeight}px; border-radius: ${radius}px;"></div>`;
    }

    //resultHtml += '</div>';

    document.getElementById('result').innerHTML = resultHtml;
    
    // Update the slider background gradient
    const slider = document.getElementById('subnetSlider');
    const sliderValue = slider.value;
    const sliderMax = slider.max;
    const sliderMin = slider.min;
    const sliderRange = sliderMax - sliderMin;
    const sliderPercentage = ((sliderValue - sliderMin) / sliderRange) * 100;
    slider.style.background = `linear-gradient(to right, #0092ca ${sliderPercentage}%, #d3d3d3 ${sliderPercentage}%)`;
}

// Initialaufruf, um die Anzeige beim Laden der Seite zu aktualisieren
updateSubnetInfo();

document.addEventListener('DOMContentLoaded', function () {
    const svg = document.getElementById('frequencySvg');
    const frequencyBands = {
        '2.4GHz': { start: 2412, step_size: 5, channel_n: 13, channel_width: 20 },
        // Additional bands can be added here
    };

    // Track objects
    let semicircles = [];
    let tickPositions = [];
    let currentBand = '2.4GHz';

    // Constants
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;
    const offset = svgWidth / 7;
    const width = svgWidth - 2 * offset;
    const scaleX = width / frequencyBands[currentBand].channel_n;
    const semicircleOffset = 50;
    const lineOffsetTop = 45;
    const lineOffsetBottom = 30;

    // Function to draw the frequency range
    function drawFrequencyRange() {
        svg.innerHTML = '';
        tickPositions = [];

        // Draw the number line
        for (let i = 0; i < frequencyBands[currentBand].channel_n; i++) {
            const x = i * scaleX + offset;

            // Draw tick mark
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x);
            line.setAttribute("y1", svgHeight - lineOffsetBottom);
            line.setAttribute("x2", x);
            line.setAttribute("y2", svgHeight - lineOffsetTop);
            line.setAttribute("stroke", "black");
            svg.appendChild(line);

            tickPositions.push(x);

            // Add numbering to the ticks
            const channelText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            channelText.setAttribute("x", x);
            channelText.setAttribute("y", svgHeight - 15);
            channelText.setAttribute("text-anchor", "middle");
            channelText.setAttribute("font-size", "12px");
            channelText.setAttribute("fill", "black");
            channelText.textContent = (i + 1).toString();
            svg.appendChild(channelText);

            const frequencyText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            frequencyText.setAttribute("x", x);
            frequencyText.setAttribute("y", svgHeight - 5);
            frequencyText.setAttribute("text-anchor", "middle");
            frequencyText.setAttribute("font-size", "10px");
            frequencyText.setAttribute("class", "frequency-label");
            frequencyText.setAttribute("fill", "black");
            frequencyText.textContent = (frequencyBands[currentBand].start + i * frequencyBands[currentBand].step_size).toString();
            svg.appendChild(frequencyText);
        }
        // Redraw existing semicircles
        // Redraw existing semicircles

        let correct = 0;
        semicircles.forEach(semicircle => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const startAngle = 0;
            const endAngle = Math.PI;
            const x = semicircle.x;
            const y = semicircle.y;
            const r = semicircle.r;

            const startX = x-r;
            const startY = y;
            const endX = x + r;
            const endY = y;

            //const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";

            const d = [
                "M", startX, startY,
                "A", r, r, 0, 0, 1, endX, endY,
                "L", startX, startY
            ].join(" ");

            path.setAttribute("d", d);
            path.setAttribute("fill", semicircle.color);
            path.setAttribute("fill-opacity", "0.7");
            svg.appendChild(path);

            if (semicircle.color == 'green') {
                correct++;
            }
        });

        if (correct == 4) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

    }

    // Function to check for overlaps
    function checkOverlaps() {
        let noise = 0.0001;
        for (let i = 0; i < semicircles.length; i++) {
            let overlap = false;
            for (let j = 0; j < semicircles.length; j++) {
                if (i !== j) {
                    const dx = Math.abs(semicircles[i].x - semicircles[j].x);
                    if (dx < 2* semicircles[i].r - noise) {
                        overlap = true;
                    }
                }
            }
            semicircles[i].color = overlap ? 'red' : 'green';
        }
        drawFrequencyRange();
    }

    // Event listener for clicks on the SVG
    svg.addEventListener('click', function (event) {
        const rect = svg.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const y = svgHeight - semicircleOffset; // Fixed y position for semicircles
        const r = (frequencyBands[currentBand].channel_width / frequencyBands[currentBand].step_size) / 2 * scaleX; // Radius of semicircles

        // Find the nearest tick position to the clicked x-coordinate
        const nearestTickX = tickPositions.reduce((prev, curr) => {
            return (Math.abs(curr - clickX) < Math.abs(prev - clickX) ? curr : prev);
        });

        // Check if a semicircle already exists near the nearest tick position
        const existingSemicircleIndex = semicircles.findIndex(sc => Math.abs(sc.x - nearestTickX) < r / 4);

        if (existingSemicircleIndex !== -1) {
            // Remove the existing semicircle
            semicircles.splice(existingSemicircleIndex, 1);
        } else {
            // Add a new semicircle
            semicircles.push({ x: nearestTickX, y, r, color: 'green' });
        }

        checkOverlaps();
    });

    // Initial call to draw the frequency range
    drawFrequencyRange();
});
document.getElementById('copyButton').addEventListener('click', function() {

    const cmf = document.getElementById('cmf').value;
    const salesforceCase = document.getElementById('salesforceCase').value;
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const deviceAddress = document.getElementById('deviceAddress').value;
    const deviceLocation = document.getElementById('deviceLocation').value;
    const problem = document.getElementById('problem').value;
    const troubleshooting = document.getElementById('troubleshooting').value;

    const copiedNotes = `
        <p><strong>CMF:</strong> ${cmf}</p>
        <p><strong>Salesforce Case #:</strong> ${salesforceCase}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Contact Phone #:</strong> ${contactPhone}</p>
        <p><strong>Device Address:</strong> ${deviceAddress}</p>
        <p><strong>Device Location:</strong> ${deviceLocation}</p>
        <p><strong>Problem:</strong> ${problem}</p>
        <p><strong>Troubleshooting & Diagnosis:</strong><br><pre><code>${troubleshooting}</code></pre></p>
    `;

    document.getElementById('copiedNotes').innerHTML = copiedNotes;

    // Copy the formatted notes to the clipboard
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = copiedNotes;
    document.body.appendChild(tempDiv);
    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(tempDiv);

})

document.getElementById('copyButton').addEventListener('click', function() {
    const cmf = document.getElementById('cmf').value;
    const accountName = document.getElementById('accountName').value;
    const salesforceCase = document.getElementById('salesforceCase').value;
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const problem = document.getElementById('problem').value;
    const troubleshooting = document.getElementById('troubleshooting').value;

    const copiedNotes = `
        <p><strong>CMF:</strong> ${cmf}</p>
        <p><strong>Account Name:</strong> ${accountName}</p>
        <p><strong>Salesforce Case #:</strong> ${salesforceCase}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Contact Phone #:</strong> ${contactPhone}</p>
        <p><strong>Problem:</strong> ${problem}</p>
        <p><strong>Troubleshooting & Diagnosis:</strong><br><pre><code>${troubleshooting}</code></pre></p>
    `;

    document.getElementById('copiedNotes').innerHTML = copiedNotes;

    // Copiar las notas formateadas al portapapeles
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = copiedNotes;
    document.body.appendChild(tempDiv);
    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(tempDiv);

    // Mostrar notificación de copia como un diálogo en la parte superior
    const notification = document.getElementById('copyNotification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});

document.addEventListener('paste', function(event) {
    const clipboardItems = event.clipboardData.items;
    for (let item of clipboardItems) {
        if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageHtml = `<p><strong>Attached Image:</strong><br><img src="${e.target.result}" alt="Pasted Image" style="max-width: 100%;"></p>`;
                document.getElementById('copiedNotes').innerHTML += imageHtml;
            };
            reader.readAsDataURL(file);
        }
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('cmf').value = '';
    document.getElementById('accountName').value = '';
    document.getElementById('salesforceCase').value = '';
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('problem').value = '';
    document.getElementById('troubleshooting').value = '';
    document.getElementById('copiedNotes').innerHTML = '';
});

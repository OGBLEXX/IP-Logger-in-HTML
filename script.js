

function  ip_seen() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        alert(`Twój adres IP to: ${data.ip}`)
        })
        .catch(error => {
            console.error('Błąd przy pobieraniu adresu IP:', error);
            document.getElementById('ip').textContent = 'Nie udało się pobrać adresu IP';
            });
}

    

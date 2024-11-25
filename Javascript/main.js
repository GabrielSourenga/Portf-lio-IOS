
const toggleButton = document.getElementById('toggle-button');
const body = document.body;


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Mudar o tema';
    } else {
        toggleButton.textContent = 'Mudar o tema';
    }
});

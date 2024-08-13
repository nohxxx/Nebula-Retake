setTimeout(function() {
    window.close();
}, 3500);
function redirectToSteam() {
    // Tenta redirecionar para o servidor do Steam
    window.location.href = "steam://connect/131.196.196.196:27330";
    
    // Caso o redirecionamento falhe, o código continua e exibe uma mensagem de erro após um tempo.
    setTimeout(function() {
        alert("Não foi possível redirecionar para o servidor automaticamente. Certifique-se de que o Steam está instalado e tente novamente.");
    }, 1000); // Ajuste o tempo conforme necessário
}

window.onload = redirectToSteam;
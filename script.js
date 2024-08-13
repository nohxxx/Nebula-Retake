setTimeout(function() {
    window.close();
}, 3500);
function redirectToSteam() {
    // Tenta redirecionar para o servidor do Steam
    window.location.href = "steam://connect/131.196.196.196:27330";
    
    // Caso o redirecionamento falhe, o código continua e exibe uma mensagem de erro após um tempo.
    setTimeout(function() {
        alert("Certifique-se que o CS:GO esteja aberto.");
    }, 1000); // Ajuste o tempo conforme necessário
}

window.onload = redirectToSteam;

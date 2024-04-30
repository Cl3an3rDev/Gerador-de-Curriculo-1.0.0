document.getElementById('gerar-curriculo').addEventListener('click', function() {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const experiencia = document.getElementById('experiencia').value;
    const educacao = document.getElementById('educacao').value;
    const skills = document.getElementById('skills').value;

    
    const curriculo = `
        <h2>${nome}</h2>
        <p>${email}</p>
        <p>${celular}</p>
        <h3>Experiência:</h3>
        <p>${experiencia}</p>
        <h3>Educação:</h3>
        <p>${educacao}</p>
        <h3>Habilidades:</h3>
        <p>${skills}</p>
    `;


    document.getElementById('curriculo').innerHTML = curriculo;
});
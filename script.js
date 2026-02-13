function verificar(){

    var data = new Date() // Pega a data do pc
    var ano = data.getFullYear() // Guarda o ANO da data do pc na variável
    var anoForm = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    
    // Se o Lenght do Valor do Ano do Formulário for = 0 ou Maior que o ano atual:
    if (anoForm.value.length == 0 || anoForm.value > ano){
        window.alert('Erro: verifique os dados e tente novamente.')

    } else {
        var sexoForm = document.getElementsByName('radsex')
        var idade = ano - anoForm.value
        var genero = ''
        var img = document.createElement('img') // Cria uma tag
        img.setAttribute('id', 'foto') // Na tag criada, coloca o id = "foto"
        
        if (sexoForm[0].checked) { // Se o Form de Sexo estiver marcado na primeira opção
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute ('src', 'foto-bebe-h.png') // seta o atributo src = 'foto...'
            } else if (idade < 18) {
                //Jovem
                img.setAttribute ('src', 'foto-jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'foto-adulto-h.png')
            } else {
                //Idoso
                img.setAttribute ('src', 'foto-idoso-h.png')
            }

        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute ('src', 'foto-bebe-m.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute ('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute ('src', 'foto-idoso-m.png')
            }
        }
        
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        resultado.appendChild(img) // Adiciona a img criada anteriormente na 'resultado'
    } 

}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'img/crianca-menino.png')
            } else if (idade < 21 ) {
                // Jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'img/crianca-menina.png')
            } else if (idade < 21 ) {
                // Jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosa.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
        res.appendChild(img)
        
        
    }
}
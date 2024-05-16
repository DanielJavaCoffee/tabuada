function calcular(){

    const num = window.document.getElementById('num')
    const end = window.document.getElementById('end')
    const res = window.document.getElementById('resposta')

    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO] Confira os dados :(')
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
    
        var conta = 0
    
        res.innerHTML = `A tabuada do ${n} é: <br>`
        for(var i = 0; i <= e; i++){
         
            conta = i * n
            res.innerHTML += `${i} X ${n} = ${conta} <br>`
        }
    }
}
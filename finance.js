function calc(){
	let t1 = document.getElementById('val')
	let t2 = document.getElementById('tempo')
	let t3 = document.getElementById('sal')
	let valor = Number(t1.value)
	let parc = Number(t2.value)
	let saldo = Number(t3.value)
	let resultado = document.getElementById('r')
	let parcelas = valor / (parc * 12)
	let img = document.createElement('img')
	img.setAttribute('id', 'foto')
	if (t1.value.length == 0 || t2.value.length == 0 || t3.value.length == 0){
		alert('Tente novamente, preencha todos os campos corretamente')
	}else{
		if (parcelas > saldo * 0.30){
			resultado.innerHTML = `Seu peddo foi negado`
			img.setAttribute('src', 'negado.png')
		}else{
			resultado.innerHTML = `Pedido aprovador valor das parcelas R$: ${parcelas.toFixed(2)}`
			img.setAttribute('src', 'aprovador.png')
		}
	}
	img.style.width = '150px'
	img.style.display = 'block'
	img.style.margin = 'auto'
	r.appendChild(img)



}
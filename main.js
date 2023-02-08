function vari() {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById("age")
	var res = document.getElementById("resp")

	if (Number(fano.value) == 0 || Number(fano.value) > ano)
	{
		window.alert("Ta fazendo merda")
	}else{
		var fsex = document.getElementsByName('rad')
		var idade = ano - Number(fano.value)
		var gen = ""
		var img = document.createElement('img')
		
		img.setAttribute('id', 'foto')
		
		if (fsex[0].checked)
		{
			gen = 'Homen'
			if(idade >= 0 && idade < 10)
			{
				//kid
				img.setAttribute('src',"img/kid_male.png")
				
			}else if(idade < 21)
			{
				//aborrecent	
				img.setAttribute('src',"img/jovem_male.png")

			}else if(idade < 50){
				//adulto
				img.setAttribute('src',"img/adult_male.png")
			}else{
				//veio
				img.setAttribute('src',"img/velho_male.png")
			}
		}else if (fsex[1].checked)
		{
			gen = 'Mulher'
			if(idade >= 0 && idade < 10)
			{
				//kid
				img.setAttribute('src',"img/kid_feam.png")
			}else if(idade < 21)
			{
				//aborrecente
				img.setAttribute('src',"img/jovem_feam.png")
			}else if(idade < 50){
				//adulto
				img.setAttribute('src',"img/adult_feam.png")
			}else{
				//Velha
				img.setAttribute('src',"img/velha_feam.png")
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${gen} com ${idade}`
		res.appendChild(img)
	
	}
}

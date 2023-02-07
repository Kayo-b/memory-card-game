
  let teste = [11,3,7,2,8,4]

  const pushShift = () => { 
    for(let x = 0; x < teste.length; x++) {
      let random = Math.floor(Math.random() * 6);
      teste[x] = teste[random]

    }
    console.log(teste)
    
  }
  pushShift()
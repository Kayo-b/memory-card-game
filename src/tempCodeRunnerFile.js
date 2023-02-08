  const randomArray = (randomArr = []) => {
    let random = Math.floor(Math.random() * 5)

    
    if(randomArr.length === 0) {
      randomArr.push(random)
    }
    if(randomArr.length >= 5) return ;
    // console.log(randomArr)
    
    for(let x = 0; x < randomArr.length; x++) {
      if(randomArr[x] === random) {
        randomArray(randomArr)
      }
      
    }
    randomArr.push(random)
    randomArray(randomArr)

    return randomArr.slice(0,5)
  }
  console.log(randomArray())

  let teste = [11,3,7,2,8]
  let newTeste = []
  console.log(newTeste)
  let random = randomArray()
  const pushShift = () => { 
    for(let x = 0; x < teste.length; x++) {
      
      newTeste[random[x]] = teste[x]

    }
    
    return newTeste
  }
console.log(pushShift())

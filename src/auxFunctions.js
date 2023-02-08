
export const randomizer = (array) => {
      
      let newArr = []
      let x = array.length
      let random = randomArray()
      for(let i = 0; i < x; i++) {
        // let random2 = Math.floor(Math.random() * array.length);
        // eleArr = [...eleArr, eleArr[random]];
        newArr.push(array[random[i]])
        // eleArr.splice(random, 1);
        // array[i] = array[random[i]]
  
      }
      // for(let x = 0; x < array.length; x++) {
      
      //   newArr[random[x]] = array[x]
  
      // }
   
      return newArr
      
    }

export  const randomArray = (randomArr = []) => {
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

  

  // function randomizer() {
  //   let newArr = []
  //   let x = eleArray.length
  //   let random = randomArray()
  //   for(let i = 0; i < x; i++) {
  //     // let random2 = Math.floor(Math.random() * eleArray.length);
  //     // eleArr = [...eleArr, eleArr[random]];
  //     newArr.push(eleArray[random[i]])
  //     // eleArr.splice(random, 1);

  //   }

  //   return newArr;
  // }

  

  let eleArr2 = []

  // const randomArray = (randomArr = []) => {
  //   let random = Math.floor(Math.random() * 5)

    
  //   if(randomArr.length === 0) {
  //     randomArr.push(random)
  //   }
  //   if(randomArr.length >= 5) return ;
  //   // console.log(randomArr)
    
  //   for(let x = 0; x < randomArr.length; x++) {
  //     if(randomArr[x] === random) {
  //       randomArray(randomArr)
  //     }
      
  //   }
  //   randomArr.push(random)
  //   randomArray(randomArr)

  //   return randomArr.slice(0,5)
  // }
  // console.log(randomArray())

  // let teste = [11,3,7,2,8]
  // let newTeste = []
  // console.log(newTeste)
  // let random = randomArray()

  // const pushShift = () => { 
    // for(let x = 0; x < teste.length; x++) {
      
    //   newTeste[random[x]] = eleArray[x]

    // }
  //   setArr(newTeste)
  //   return newTeste
  // }
  



  // eleArr.forEach(item => eleArr2.push(item))

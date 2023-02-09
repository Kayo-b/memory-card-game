
export const randomizer = (array) => {
      
      let newArr = []
      let x = array.length
      let random = randomArray()
      for(let i = 0; i < x; i++) {
        newArr.push(array[random[i]])
      }
   
      return newArr
    }

export  const randomArray = (randomArr = []) => {
    let random = Math.floor(Math.random() * 14)

    if(randomArr.length === 0) {
      randomArr.push(random)
    }
    if(randomArr.length >= 14) return ;
    
    for(let x = 0; x < randomArr.length; x++) {
      if(randomArr[x] === random) {
        randomArray(randomArr)
      }
      
    }
    randomArr.push(random)
    randomArray(randomArr)

    return randomArr.slice(0,14)
  }


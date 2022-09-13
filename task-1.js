
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

const getSumFactorial = (no) => {
    const noString = `${no}`
    let sum = 0
    for (let i = 0; i < noString.length; i++) {
        const element = noString.charAt(i);
        sum += factorialize(element)
    }
    console.log(sum)
    return sum
}

getSumFactorial(9602)



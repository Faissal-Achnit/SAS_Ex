const isEmpty = (str) => {
  let space = " ";
  if (str.length === 0){
    return true;
  }
  for (let i = 0; i < str.length; i++){
    if(str[i] === space){
        return false;
    }
  }
  return true
}


console.log(isEmpty(" khf"));

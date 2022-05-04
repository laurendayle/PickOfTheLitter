export function filter(selectedParams, list) {
  const filtered = list.filter((pet) => {
    for (let i = 0; i < selectedParams.length; i++) {
      var property = selectedParams[i].split('.')[0]
      var input = selectedParams[i].split('.')[1];


      if (property === 'attributes' || property === 'environment') {
        if (pet[property][input]) {
          return pet;
        }
      } else {
        if (pet[property] === input) {
          return pet;
        }
      }
    }
  })
  return filtered;
}



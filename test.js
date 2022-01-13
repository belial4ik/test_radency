function chooseOptimalDistance(t, k, ls) {
  let result =  ls.reduce((acum, value) => acum.concat(acum.filter(num => num.length < k).map(num => num.concat([value]))), [[]])
      .filter(num => num.length === k)
      .map(num => num.reduce((i, y) => i + y))
      .filter(num => num <= t)
      .sort((x, y) => y - x)[0]
  return result ? result : null
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]))

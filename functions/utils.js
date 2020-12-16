exports.unwrap = collection => {
  var result = []

  collection.forEach(doc => result.push(doc.data()))

  return result
}

exports.combine = (obj, obj2) => Object.assign({}, obj, obj2)
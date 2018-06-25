function createCollection() {

  const items = []
  let nextId = 1

  return {
    create(item) {
      item['id'] = nextId
      nextId++
      items.push(item)
      return item
    },
    findById(id) {
      let found = items.find(function(obj) {
        return obj.id === id
      })
      if (!found) return null
      return found
    },
    updateById(id, updates) {
      let key = Object.keys(updates)
      let value = Object.values(updates)
      let found = items.find(function(obj) {
        return obj.id === id
      })
      if (!found) return null
      found[key[0]] = value[0]
      return found
    },
    findWhere(query) {
      let key = Object.keys(query)
      let value = Object.values(query)
      let isEmpty = !Object.keys(query).length
      if (isEmpty) {
        return items
      }
      else {
        let filtered = items.filter(function (item) {
          return item[key[0]] === query[key[0]]
        })
        return filtered
      }
    },
    deleteById(id) {
      let found = items.find(function(obj) {
        return obj.id === id
      })
      if (!found) return null
      items.splice(found.id - 1, 1)
      return found
    }
  }
}

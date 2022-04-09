function listWithConstantLength(maxSize, initList = []) {
    
    const preList = [...initList]
    while(preList.length > maxSize) {
        preList.shift()
    }

    // Properties
    this.items = [...preList]
  
    this.append = function(item) {
      if(this.items.length == maxSize) {
        this.items.shift()
      }
      this.items.push(item)
      return this
    }
    
    this.avg = function() {
      if (this.items.length == 0) {
          return undefined
      }

      const theSum = this.items.reduce((acc, curr) => acc+curr)
      return theSum/this.items.length
    }

    this.toJSON = function() {
        return [...this.items]
    }

}

module.exports = listWithConstantLength
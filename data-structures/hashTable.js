function hashTable (size){
    this.size = size;
    this.keys = initTable(size);
    this.values = initTable(size)
    this.limit = 0;
}

hashTable.prototype.put = function(key, value){
    if(this.limit >= this.size){
        throw 'size limit reached';
    }

    var hashedIndex = this.hash(key);

    while(this.keys[hashedIndex] != null){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashIndex] = value;
    this.limit++
}
hashTable.prototype.get = function(key){
    var hashIndex = this.hash(key);
    
    while(this.keys[hashedIndex] != key){
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}

hashTable.prototype.initTable = function(size){
    var arr = [];
    for(var i = 0; i < size; i++){
        arr.push(null);
    }
    return arr;
}

hashTable.prototype.hash = function(key){
    if(!Number.isInteger(key)) throw 'not int';
    return this.key % this.size;
}
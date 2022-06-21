class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // La hash function muy dificilmente lo haras tú
  // Mayormente la copias de algun lado. Pero debes entender de que trata.
  // Generará a partir del key una direccion alatoria.
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Ingresaremos datos al hash table.
  set(key, value) {
    const address = this.hashMethod(key); // Generamos la dirección con nuestra key.
    if (!this.data[address]) {
      this.data[address] = []; // Si no hay valores en esa dirección genera un nuevo array.
    }
    this.data[address].push([key, value]); // Si hay valores entonces solo agrega los nuevos.
    // Asi evitamos que sobreescriba los datos.
    return this.data;
  }

  // Nos regresará el valor pasandole la key.
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address]; // Almacenamos el bucket a dende hace refenrecia nuestra key.
    if (currentBucket) {
      // Busca el valor a pesar de que hubiera una colision.
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined; // Si no lo encuentra retorna undefined.
  }

  // Eliminará el valor dando la key.
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // Busca el valor a pesar de que hubiera una colision.
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          this.data[address].splice(i, 1);
        }
      }
    }
    return this.data;
  }
}

const myHashTable = new hashTable(50); // Generamos mi hashtable con 50 espacios.

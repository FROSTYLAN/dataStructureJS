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
      hash = (hash + key.charCodeAr(i) * i) % this.data.length;
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
  }
}

const myHashTable = new hashTable(50); // Generamos mi hashtable con 50 espacios.

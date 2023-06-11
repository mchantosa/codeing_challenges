class Heap {
  constructor(type = "min", arr) {
    this.type = type;
    this.storage = [];
    if (arr) {
      arr.forEach((element) => {
        this.add(element);
      });
    }
  }

  static _getChild(arr, type, index, endIndex) {
    const child1 = 2 * index + 1;
    const child2 = 2 * index + 2;
    if (child1 > endIndex && child2 > endIndex) return -1;

    let child;
    if (child2 > endIndex) {
      child = child1;
    } else {
      if (type === "min") {
        child = arr[child1] < arr[child2] ? child1 : child2;
      } else {
        child = arr[child1] > arr[child2] ? child1 : child2;
      }
    }
    return child;
  }

  static _bubbleDown(arr, type, index = 0, endIndex = arr.length - 1) {
    /**
     * get child index
     * if parent element > child element and type === min
     *  or parent element < child element and type === max
     *    swap
     *    bubbleDown child
     */

    const child = this._getChild(arr, type, index, endIndex);
    if (child < 0) return;
    if (
      (arr[index] > arr[child] && type === "min") ||
      (arr[index] < arr[child] && type === "max")
    ) {
      [arr[index], arr[child]] = [arr[child], arr[index]];
      this._bubbleDown(arr, type, child, endIndex);
    }
  }

  static _getParent(index) {
    if (index === 0) return -1;
    else if (index % 2 === 0) return (index - 2) / 2;
    return (index - 1) / 2;
  }

  static _bubbleUp(arr, type, index = arr.length - 1) {
    /**
     * get parent element
     * if type === min and parent element > child element
     *  or type === max and parent element < child element
     *    swap elements
     *    bubble up parent
     */
    let parent = this._getParent(index);
    if (parent === -1) return;
    if (
      (type === "min" && arr[parent] > arr[index]) ||
      (type === "max" && arr[parent] < arr[index])
    ) {
      [arr[parent], arr[index]] = [arr[index], arr[parent]];
      this._bubbleUp(arr, type, parent);
    }
  }

  static heapify(arr, type) {
    /**
     * iterate from floor(len/2) to start of array
     * for each index
     *  bubble down
     */
    for (let index = Math.floor(arr.length / 2) - 1; index >= 0; index--) {
      this._bubbleDown(arr, type, index);
    }
    return arr;
  }

  static sortify(arr, type) {
    /**
     * iterate from arr.len-1 to 1
     *  swap 0 with index
     *  bubble down from 0 to index-1
     */
    for (let index = arr.length - 1; index > 0; index--) {
      [arr[0], arr[index]] = [arr[index], arr[0]];
      this._bubbleDown(arr, type, 0, index - 1);
    }
    return arr;
  }

  static add(arr, type, element) {
    /**
     * push to arr
     * bubbleUp end element
     * return arr
     */
    arr.push(element);
    this._bubbleUp(arr, type);
    return arr;
  }

  static remove(arr, type) {
    /**
     * swap 0 with end
     * pop end and reserve to return
     * bubble down 0 element
     * return popped element
     */

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    const head = arr.pop();
    this._bubbleDown(arr, type);
    return head;
  }

  swap(index1, index2) {
    [this.storage[index1], this.storage[index2]] = [
      this.storage[index2],
      this.storage[index1],
    ];
  }

  getParent(index) {
    if (index === 0) return -1;
    else if (index % 2 === 1) return (index - 1) / 2;
    else return (index - 2) / 2;
  }

  bubbleUp(index = this.storage.length - 1) {
    /**
     * get parent index
     * if type min and parent element is > index element
     *  swap
     *  bubble up parent index
     * if type max and parent element < index element
     *  swap
     *  bubble up parent index
     */
    const parent = this.getParent(index);
    if (parent === -1) return;
    if (
      (this.type === "min" && this.storage[parent] > this.storage[index]) ||
      (this.type === "max" && this.storage[parent] < this.storage[index])
    ) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }
  }

  getTargetChild(index) {
    const len = this.storage.length;
    let child1 = 2 * index + 1;
    let child2 = 2 * index + 2;
    if (child1 < len && child2 < len) {
      if (this.type === "min") {
        return this.storage[child1] < this.storage[child2] ? child1 : child2;
      } else {
        return this.storage[child1] > this.storage[child2] ? child1 : child2;
      }
    } else if (child1 < len) {
      return child1;
    } else {
      return -1;
    }
  }

  bubbleDown(index) {
    /**
     * set child to max child for max, min child for min
     * compare index to child
     *  if min and index element > child element
     *    or if max and index element < child element
     *      swap index and child
     *      bubble down child
     */
    const child = this.getTargetChild(index);
    if (
      (this.type === "min" && this.storage[index] > this.storage[child]) ||
      (this.type === "max" && this.storage[index] < this.storage[child])
    ) {
      this.swap(index, child);
      this.bubbleDown(child);
    }
  }

  add(element) {
    /**
     * push element to heap
     * bubble up
     */
    this.storage.push(element);
    this.bubbleUp();
  }

  remove() {
    /**
     * swap index with end element
     * pop
     * bubble down index
     */
    this.swap(0, this.storage.length - 1);
    const head = this.storage.pop();
    this.bubbleDown(0);
    return head;
  }
}

/**
 ***************************** TESTING *****************************
 */

const minHeap = new Heap();
console.log(`minHeap.type === "min":\n=> ${minHeap.type === "min"}\n`);

minHeap.add(1);
minHeap.add(3);
minHeap.add(5);
minHeap.add(2);
minHeap.add(2);
minHeap.add(100);
minHeap.add(99);
console.log(
  `minHeap.storage === '1,2,5,3,2,100,99':\n=> ${
    minHeap.storage.join(",") === "1,2,5,3,2,100,99"
  }\n`
);

const minHeap2 = new Heap("min", [1, 3, 5, 2, 2, 100, 99]);
console.log(
  `minHeap2.storage === '1,2,5,3,2,100,99':\n=> ${
    minHeap2.storage.join(",") === "1,2,5,3,2,100,99"
  }\n`
);

minHeap2.remove();
console.log(
  `minHeap2.storage.join(',') === '2,2,5,3,99,100':\n=> ${
    minHeap2.storage.join(",") === "2,2,5,3,99,100"
  }\n`
);

const maxHeap = new Heap("max");
console.log(`maxHeap.type === "max":\n=> ${maxHeap.type === "max"}\n`);

maxHeap.add(1);
maxHeap.add(3);
maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(2);
maxHeap.add(100);
maxHeap.add(99);
console.log(
  `maxHeap.storage === '100,2,99,1,2,3,5':\n=> ${
    maxHeap.storage.join(",") === "100,2,99,1,2,3,5"
  }\n`
);

const maxHeap2 = new Heap("max", [1, 3, 5, 2, 2, 100, 99]);
console.log(
  `minHeap2.storage === '100,2,99,1,2,3,5':\n=> ${
    maxHeap2.storage.join(",") === "100,2,99,1,2,3,5"
  }\n`
);

maxHeap2.remove();
console.log(
  `maxHeap2.storage.join(',') === '99,2,5,1,2,3':\n=> ${
    maxHeap2.storage.join(",") === "99,2,5,1,2,3"
  }\n`
);

const arrMin = [1, 3, 5, 2, 2, 100, 99];
console.log(
  `Heap.heapify(arrMin, "min").join(',') === '1,2,5,2,3,100,99':\n=> ${
    Heap.heapify(arrMin, "min").join(",") === "1,2,5,2,3,100,99"
  }\n`
);

const arrMax = [1, 3, 5, 2, 2, 100, 99];
console.log(
  `Heap.heapify(arrMax, "max").join(',') === '100,3,99,2,2,5,1':\n=> ${
    Heap.heapify(arrMax, "max").join(",") === "100,3,99,2,2,5,1"
  }\n`
);

console.log(
  `Heap.sortify(arrMin, "min").join(',') === '100,99,5,3,2,2,1':\n=> ${
    Heap.sortify(arrMin, "min").join(",") === "100,99,5,3,2,2,1"
  }\n`
);
console.log(
  `Heap.sortify(arrMax, "max").join(',') === '1,2,2,3,5,99,100':\n=> ${
    Heap.sortify(arrMax, "max").join(",") === "1,2,2,3,5,99,100"
  }\n`
);

Heap.heapify(arrMin, "min");
Heap.add(arrMin, "min", -10);
Heap.add(arrMin, "min", 50);
console.log(
  `arrMin add -10 add 50 === '-10,1,2,2,99,100,5,3,50':\n=> ${
    arrMin.join(",") === "-10,1,2,2,99,100,5,3,50"
  }\n`
);

Heap.heapify(arrMax, "max");
Heap.add(arrMax, "max", -10);
Heap.add(arrMax, "max", 50);
console.log(
  `arrMax add -10 add 50 === '100,50,99,5,2,1,2,-10,3':\n=> ${
    arrMax.join(",") === "100,50,99,5,2,1,2,-10,3"
  }\n`
);

console.log(
  `Heap.remove(arrMin, min) === -10:\n=> ${
    Heap.remove(arrMin, "min") === -10
  }\n`
);

console.log(
  `arrMin after remove === '1,2,2,3,99,100,5,50':\n=> ${
    arrMin.join(",") === "1,2,2,3,99,100,5,50"
  }\n`
);

console.log(
  `Heap.remove(arrMax, max) === 100:\n=> ${
    Heap.remove(arrMax, "max") === 100
  }\n`
);

console.log(
  `arrMax after remove === '99,50,3,5,2,1,2,-10':\n=> ${
    arrMax.join(",") === "99,50,3,5,2,1,2,-10"
  }\n`
);

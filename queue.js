class Queue {
    constructor(){
        this.queue = [];
        this.start = 0;
        this.end = 0;
    }
    enqueue(item){
        this.queue.push(item);
        this.end++;
    }
    dequeue(){
        const head = this.queue[this.start];
        this.queue[this.start] = undefined;
        this.start++;
        return head;
        
    }
    isEmpty(){
        return this.start === this.end;
    }
}

module.exports = {Queue}
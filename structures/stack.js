module.exports =  class Stack {
    constructor(size) {
        this.stack = new Array(size)
        this.top = -1
    }

    isFull() {
        return this.top == this.stack.length - 1
    }
    
    isEmpty() {
        return this.top == -1
    }

    push(element) {
        console.log(`Pushing ${element} into the stack`)
        if(this.isFull()) {
            console.log(`Stack is full, unable to add ${element} to the stack`)
        } else {
            this.stack[++this.top] = element
        }
    }

    pop() {
        console.log('Popping the stack')
        if(!this.isEmpty()) {
            return this.stack[this.top--]
        } else {
            console.log('Stack is empty, nothing to pop')
        }
    }

    showStack() {
        if(this.top == -1) {
            console.log('Stack is empty')
            return
        }

        for(let i = 0; i <= this.top; i++) {
            console.log(`[${i}] = ${this.stack[i]}`)
        }
    }
}


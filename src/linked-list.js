const Node = require('./node');

class LinkedList {
 
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;
        }

    append(data) { 

      var node = new Node(data);

        if(this.length == 0){
            this._head = node;
            this._tail = node;
        } 
          else { 
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;}

        this.length++;

        return this;

   }

    head() { 

  if (this._head === null){return null;}
  else{
    return this._head.data;}

    }

    tail() {

     if (this._tail === null){return null;}
  else{
        return this._tail.data;
    }
}
    at(index) {
       if (index >= 0 && index< this.length)
        { var state=this._head, i = 0;
            while (i++ < index){
                    state=state.next;
            }

            return state.data;
        }
        else return null;
    }

    insertAt(index, data) {
        var node = new Node(data);
         if(index===0)
            { if (this._head == null) { this._head=this.tail=node;}
                else { node.next = this._tail;
                    this._head=node;
                    node.next.prev=this._head;}

            }else{

    var ix = index - 1;
    var state = this._head, i=0;
    while (i++ < ix){state=state.next;}
        node.next=state.next;
        state.next = node;
  }   
this.length++;
     return this;

  
    }

    isEmpty() {
        if(!this._head)return true;
        else{ return false; }
    }

    clear() {

  this._tail=null;
  this._head=null;
  this.length=0;
     
    return this;
 
}
    

    deleteAt(index) {
        if (index > -1 && index< this.length){

            var state = this._head,i=0;

            if (index === 0){
                this._head = state.next;
            
                if (!this._head){this._tail=null;}
                else{this._head.prev=null;}
            } else if (index === this.length-1)
                { state=this._tail;
                    this._tail=state.prev;
                    this._tail.next=null;
            } else{
                 while (i++ < index){
                state=state.next;
                 }
                 state.prev.next=state.next;
            }

            this.length--;
                   }
        return this;
    }

    reverse() {

        if (this._head === this._tail) {
        return this;
    }
else{
        this._tail = this._head;
         let node = this._head.next;
         let prev = this._head;
        while (node != null) {

        if (node.next === null) {
            this._head = node;
        }
        var current = node;
        node = node.next;
        current.next=current.prev;
        prev=current;}


        return this;
}
           }

    indexOf(data) {
        var state=this._head, i=0;
        while(state !=null){

            if(state.data === data) {return i;}
                state=state.next;
                i++;
        }
        return -1;
    }
}

module.exports = LinkedList;

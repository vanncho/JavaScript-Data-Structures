function Node(value) {
    this.value = value;
    this.next = null;
}
  
function LinkedList() {
    this.head = null;
    this.size = 0;
}
  
LinkedList.prototype.addLast = function(data) {
    
    var current = new Node(data);
    
    if (!this.head) {
      this.head = current;
      this.size = 1;
    } else {
      
      current = this.head;
      
      while (current.next) {
        current = current.next;
      }
      
      current.next = new Node(data);
      this.size++;
    }
}
  
LinkedList.prototype.addFirst = function(data) {
   
    if (!this.head) {
      this.head = new Node(data);
      this.size = 1;
    } else {
      
      var current = new Node(data);
      current.next = this.head;
      this.head = current;
      this.size++;
    }
}
  
LinkedList.prototype.remove = function(data) {
    
    if (!this.head) {
        return;
    }

    var removed = false;

    if (this.head.value === data) {
        this.head = this.head.next;
        removed = true;

    } else {

        var prevNode = this.head;
        var currentNode = this.head.next;

        while (currentNode) {

            if (currentNode.value === data) {

                prevNode.next = currentNode.next;
                currentNode = currentNode.next;
                removed = true;
                break;
            } else {

                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    if (removed) {
        this.size--;
    }
}

LinkedList.prototype.getFirst = function() {

    if (this.head) {
        return this.head.value;
    }

    return null;
}

LinkedList.prototype.getLast = function() {

    var current = this.head;

    if (current) {

        while (current.next) {

            current = current.next;
        }

        return current.value;
    }

    return null;
}

LinkedList.prototype.indexOf = function(data) {

    var index = 0;
    var notFound = true;
    var current = this.head;

    while (current) {

        if (current.value === data) {
            notFound = false;
            return index;
        }

        current = current.next;
        index++;
    }

    if (notFound) {
        return -1;
    }
}

LinkedList.prototype.lastIndexOf = function(data) {

    var index = 0;
    var lastIndex = 0;
    var notFound = true;
    var current = this.head;

    while (current) {

        if (current.value === data) {
            notFound = false;
            lastIndex = index;
        }

        current = current.next;
        index++;
    }

    if (notFound) {
        return -1;
    } else {
        return lastIndex;
    }
}

LinkedList.prototype.contains = function(data) {

    var current = this.head;

    while (current) {

        if (current.value === data) {
            return true;
        }

        current = current.next;
    }

    return false;
}


var list = new LinkedList();

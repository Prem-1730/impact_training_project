class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    insertAtPosition(data, position) {
        if (position < 0) {
            alert("Invalid position");
            return;
        }
        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }
        const newNode = new Node(data);
        let temp = this.head;
        let prev = null;
        let count = 0;
        while (temp && count < position) {
            prev = temp;
            temp = temp.next;
            count++;
        }
        if (count < position) {
            alert("Position out of bounds");
            return;
        }
        prev.next = newNode;
        newNode.next = temp;
    }

    deleteAtBeginning() {
        if (!this.head) {
            alert("List is empty");
            return;
        }
        this.head = this.head.next;
    }

    deleteAtEnd() {
        if (!this.head) {
            alert("List is empty");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let temp = this.head;
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
    }

    deleteByValue(value) {
        if (!this.head) {
            alert("List is empty");
            return;
        }
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let prev = null;
        while (temp && temp.data !== value) {
            prev = temp;
            temp = temp.next;
        }
        if (!temp) {
            alert("Value not found");
            return;
        }
        prev.next = temp.next;
    }

    search(value) {
        let temp = this.head;
        while (temp) {
            if (temp.data === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    display() {
        const result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        return result.join(" -> ") || "List is empty";
    }
}

const linkedList = new LinkedList();

function updateDisplay() {
    const linkedListElement = document.getElementById("linked-list");
    linkedListElement.textContent = linkedList.display();
}

function getValue() {
    const value = document.getElementById("value").value;
    if (!value) {
        alert("Enter a valid value");
        return null;
    }
    return value;
}

function getPosition() {
    const position = document.getElementById("position").value;
    return position ? parseInt(position) : null;
}

function addAtBeginning() {
    const value = getValue();
    if (value) {
        linkedList.insertAtBeginning(value);
        updateDisplay();
    }
}

function addAtEnd() {
    const value = getValue();
    if (value) {
        linkedList.insertAtEnd(value);
        updateDisplay();
    }
}

function addAtPosition() {
    const value = getValue();
    const position = getPosition();
    if (value !== null && position !== null) {
        linkedList.insertAtPosition(value, position);
        updateDisplay();
    }
}

function deleteBeginning() {
    linkedList.deleteAtBeginning();
    updateDisplay();
}

function deleteEnd() {
    linkedList.deleteAtEnd();
    updateDisplay();
}

function deleteByValue() {
    const value = getValue();
    if (value) {
        linkedList.deleteByValue(value);
        updateDisplay();
    }
}

function searchValue() {
    const value = getValue();
    if (value) {
        const found = linkedList.search(value);
        alert(found ? "Value found" : "Value not found");
    }
}

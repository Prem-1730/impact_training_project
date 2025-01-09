class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Insertion
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new_node

    def insert_at_position(self, data, position):
        if position < 0:
            print("Invalid position.")
            return
        if position == 0:
            self.insert_at_beginning(data)
            return

        new_node = Node(data)
        count = 0
        temp = self.head
        prev = None
        while temp and count < position:
            prev = temp
            temp = temp.next
            count += 1

        if count < position:
            print("Position out of bounds.")
        else:
            prev.next = new_node
            new_node.next = temp

    # Deletion
    def delete_at_beginning(self):
        if self.head is None:
            print("List is empty.")
            return
        self.head = self.head.next

    def delete_at_end(self):
        if self.head is None:
            print("List is empty.")
            return
        if self.head.next is None:
            self.head = None
            return
        temp = self.head
        while temp.next.next:
            temp = temp.next
        temp.next = None

    def delete_by_value(self, value):
        if self.head is None:
            print("List is empty.")
            return
        if self.head.data == value:
            self.head = self.head.next
            return
        temp = self.head
        prev = None
        while temp and temp.data != value:
            prev = temp
            temp = temp.next
        if temp is None:
            print("Value not found.")
        else:
            prev.next = temp.next

    # Traversal
    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

    # Searching
    def search(self, value):
        temp = self.head
        while temp:
            if temp.data == value:
                return True
            temp = temp.next
        return False

# Example usage
if __name__ == '__main__':
    linked_list = LinkedList()
    linked_list.insert_at_end(1)
    linked_list.insert_at_beginning(2)
    linked_list.insert_at_end(3)
    linked_list.insert_at_position(4, 2)
    linked_list.print_list()  # Output: 2 1 4 3

    linked_list.delete_at_beginning()
    linked_list.delete_at_end()
    linked_list.print_list()  # Output: 1 4

    print(linked_list.search(1))  # Output: True
    print(linked_list.search(3))  # Output: False
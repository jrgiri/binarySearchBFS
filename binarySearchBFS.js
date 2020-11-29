class Node{
    constructor(value){
        this.value = value
        this.left = this.right = null;
    }
}
class BST {
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++

        let newNode = new Node(value);
        const searchTree = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchTree(node.left);
                }
            }
            if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
    }

    print(){
        console.log(JSON.stringify(bst))
    }
}

const bst = new BST(15);
bst.insert(30)
bst.insert(2)
bst.insert(10)
bst.insert(45)
bst.insert(14)
bst.insert(35)

bst.print()


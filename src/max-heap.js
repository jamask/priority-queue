const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let tmp = new Node(data, priority);
		this.insertNode(tmp);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}


	insertNode(node) {
		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			let parn = this.parentNodes[0];
			parn.appendChild(node);
			this.parentNodes.push(node);

			if (parn.right != null){
        this.parentNodes.shift();
      }
		}

	}

	shiftNodeUp(node) {
		
			// let tmp = this.parentNodes.pop();
			if (node.parent && node.priority>node.parent.priority ) {
				
				node.swapWithParent();
				this.shiftNodeUp(node);
			} else {
				return;
			}
			// this.parentNodes.unshift(tmp);
		
		

		
		}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

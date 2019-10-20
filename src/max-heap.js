const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		let tmp = new Node(data, priority);
		this.insertNode(tmp);
		this.shiftNodeUp(tmp);
		this.length++;
	}

	pop() {
		this.detachRoot();
		if (this.length>0) {
			this.length--;
		}
	}

	detachRoot() {
		let tmp = this.root;
		this.root = null;
		return tmp;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		if (this.length == 0) {
			return true;
		} else {
			return false;
		}
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
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
		if (node.left && node.priority<node.left.priority ) {
				
			node.left.swapWithParent();
			this.shiftNodeDown(node);
			
		} else {
			return;
		}
	}
}

module.exports = MaxHeap;

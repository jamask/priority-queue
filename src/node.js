class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			node.parent = this;
		} else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
		} else if (this.right == node) {
			this.right = null;
			node.parent = null;
		} else {
			throw Error();
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			let ll = this.left;
			let rr = this.right;
			this.left = null;
			this.right = null;
			let parn = this.parent;
			parn.removeChild(this);
			
			if (parn.parent) {
				let grandparn = parn.parent;
				parn.parent.removeChild(parn);
				grandparn.appendChild(this);
			} else {
				this.parent = null;
			}
			if (parn.left) {
				this.appendChild(parn.left);
				parn.left = null;
			}
			let parright = null;
			if (parn.right) {
				parright = parn.right;
				parn.right = null;
			}
			if (ll) parn.appendChild(ll);
			if (rr) parn.appendChild(rr);
			this.appendChild(parn);
			if (parright) this.appendChild(parright);
		
		}
	}
}

module.exports = Node;

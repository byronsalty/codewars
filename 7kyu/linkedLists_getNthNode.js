function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  
  console.log("index: " + index);
  console.log("node:  " + JSON.stringify(node));
  
  if (node === null) {
    throw 'Invalid index';
  } else if (index === 0) {
    return node;
  } else {
    return getNth(node.next, index-1);
  }
}


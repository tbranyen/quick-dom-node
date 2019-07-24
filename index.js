exports.makeDOMNode = props => ({
  ...props,

  childNodes: [],
  parentNode: null,

  appendChild(newNode) {
    newNode.parentNode = this;

    this.childNodes.push(newNode);
    this.length = this.childNodes.length;

    return newNode;
  },

  insertBefore(newNode, referenceNode) {
    newNode.parentNode = this;

    if (!referenceNode) {
      return this.appendChild(newNode);
    }

    const index = this.childNodes.indexOf(referenceNode);

    this.childNodes.splice(index, 0, newNode);
    this.length = this.childNodes.length;

    return newNode;
  },

  replaceChild(newNode, referenceNode) {
    newNode.parentNode = this;

    const index = this.childNodes.indexOf(referenceNode);

    this.childNodes.splice(index, 1, newNode);
    this.length = this.childNodes.length;

    return newNode;
  },

  removeChild(referenceNode) {
    const index = this.childNodes.indexOf(referenceNode);

    this.childNodes.splice(index, 1);
    this.length = this.childNodes.length;
  },
});

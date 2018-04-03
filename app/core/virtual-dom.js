const createElement = (vNode) => {
  if (!vNode) { return }

  const newNode = document.createElement(vNode.tag)
  if (vNode.text) {
    newNode.appendChild(document.createTextNode(vNode.text))
  }

  Object.entries(vNode.attrs).forEach(([key, value]) => {
    newNode[key] = value;
  })

  return vNode.children
    .map(createElement)
    .reduce((acc, child) => {
      if (child) {
        acc.appendChild(child)
      }
      return acc;
    }, newNode)
}
const areNodesDifferent = (parentNode, oldVNode, newVNode, index = 0) => {
  if (!oldVNode) {
    parentNode.appendChild(createElement(newVNode))
    return;
  }

  if (!newVNode) {
    parentNode.removeChild(createElement(newVNode))
    return;
  }

  if ((oldVNode.tag !== newVNode.tag) ||
    (oldVNode.text !== newVNode.text)) {
    parentNode.replaceChild(
      createElement(newVNode),
      parentNode.childNodes[index])
  }

  // if(nodesAreDifferent(oldNode, newNode)) {
  //   updateNodes(parentNode, oldNode, newNode)
  // }

  // const nodesAreDifferent = (oldNode, newNode) => {
  //   return oldVNode.tag !== newVNode.tag
  // }

  const oldLength = oldVNode.children.length
  const newLength = newVNode.children.length

  for (let i = 0; i < newLength || i < oldLength; i++) {
    areNodesDifferent(
      parentNode.childNodes[index],
      oldVNode.children[i],
      newVNode.children[i],
      i
    )
  }
}
const createRootNode = (vNode, targetNode) => {
  let currentHTML = null;
  return {
    update: (state = {}) => {
      const newHtml = vNode(state)
      areNodesDifferent(targetNode, currentHTML, newHtml)
      currentHTML = newHtml
    }
  }
}

const virtualNodeFactory = ({ tag, text = '', attrs = {}, children = [] }) => ({
  tag,
  text,
  children,
  attrs
})

const createVirtualElement = tag => (attrs, ...children) => {
  const text =
    typeof children[0] === 'string'
      ? children[0]
      : typeof attrs === 'string'
        ? attrs
        : ''

  if (text) {
    return virtualNodeFactory({ tag, attrs, text })
  }
  if (attrs === undefined) {
    return virtualNodeFactory({ tag, attrs: {}, children: [...children] })
  }
  return virtualNodeFactory({ tag, attrs, children })
}

const div = createVirtualElement('div')
const p = createVirtualElement('p')
const input = createVirtualElement('input')
const button = createVirtualElement('button')
const h1 = createVirtualElement('h1')

export { div, p, input, button, h1, createRootNode }


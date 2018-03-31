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
  console.log(oldVNode, newVNode)
  if (oldVNode.tag !== newVNode.tag) {
    parentNode.replaceChild(
      createElement(newVNode),
      parentNode.childNodes[index])
  } else if (oldVNode.text !== newVNode.text) {
    parentNode.replaceChild(
      createElement(newVNode),
      parentNode.childNodes[index])
  }

  const oldLength = oldVNode.children.length
  const newLength = newVNode.children.length

  for (let i = 0; i < newLength || i < oldLength; i++) {
    areNodesDifferent(
      parentNode,
      oldVNode.children[i],
      newVNode.children[i],
      i
    )
  }
}
const createRootNode = (vNode, targetNode) => {
  let currentHTML = vNode()
  const html = createElement(vNode({}))
  targetNode.appendChild(html)
  return {
    update: (state = {}) => {
      areNodesDifferent(html, currentHTML, vNode(state))
      currentHTML = vNode(state)
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

export { div, p, input, button, createRootNode }

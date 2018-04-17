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

const areAttrsDifferent = (oldVNode, newVNode) => {
  let areDifferent = false;
  if (oldVNode.attrs.length !== newVNode.attrs.length) {
    areDifferent = true
  }

  const oAttrsArray = Object.entries(oldVNode.attrs)
  const nAttrsArray = Object.entries(newVNode.attrs)
  const oldLength = oAttrsArray.length
  const newLength = nAttrsArray.length
  for (let i = 0; i < newLength || i < oldLength; i++) {
    const [oAttr, oAttrValue] = oAttrsArray[i]
    const [nAttr, nAttrValue] = nAttrsArray[i]

    // this needs further testing. Could callback change in runtime?
    if ((typeof oAttrValue === 'function') && (typeof nAttrValue === 'function')) {
      continue
    }

    if ((oAttr !== nAttr) || (oAttrValue !== nAttrValue)) {
      areDifferent = true
      break
    }
  }

  return areDifferent
}

const areNodesDifferent = (oldVNode, newVNode) => {
  return (oldVNode.tag !== newVNode.tag) ||
    (oldVNode.text !== newVNode.text)
}

const difftingDOM = (parentNode, oldVNode, newVNode, index = 0) => {
  if (!oldVNode) {
    parentNode.appendChild(createElement(newVNode))
    return;
  }

  if (!newVNode) {
    parentNode.removeChild(createElement(newVNode))
    return;
  }

  if (areNodesDifferent(oldVNode, newVNode) ||
    areAttrsDifferent(oldVNode, newVNode)) {
    parentNode.replaceChild(
      createElement(newVNode),
      parentNode.childNodes[index])
    return;
  }

  const oldLength = oldVNode.children.length
  const newLength = newVNode.children.length

  for (let i = 0; i < newLength || i < oldLength; i++) {
    difftingDOM(
      parentNode.childNodes[index],
      oldVNode.children[i],
      newVNode.children[i],
      i
    )
  }
}

const createApp = ({ view, rootNode }) => {
  let currentHTML = null;
  return {
    render: (state = {}) => {
      const newHtml = view()
      difftingDOM(rootNode, currentHTML, newHtml)
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

export { div, p, input, button, h1, createApp }


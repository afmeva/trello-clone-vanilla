import { div, empty, button } from '_core/virtual-dom'

export default ({ name, url }) => (
  button({
    className: 'board-btn'
  }, `${name} - ${url}`)
)
import { div, empty, button } from '_core/virtual-dom'
import { link } from '_components/router/router'

export default ({ name, url }) => (
  link({
    className: 'board-btn',
    },{
    route: url,
    content: name
  })
)
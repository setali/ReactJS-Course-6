const root = $('#root')

const counter = $('<span>0</span>')
const increase = $('<button>Increase</button>')
  .css('margin', '10px')
  .click(() => counter.text(+counter.text() + 1))

const decrease = $('<button>Decrease</button>').click(() =>
  counter.text(+counter.text() - 1)
)

root.append(counter)
root.append(increase)
root.append(decrease)

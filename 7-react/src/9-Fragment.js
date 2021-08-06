import React, { Component } from 'react'

const data = [
  { name: 'Azam', family: 'Golestan' },
  { name: 'Elham', family: 'Bastami' },
  { name: 'Elnaz', family: 'Faghihi' },
  { name: 'Fateme', family: 'Ghiasi' },
  { name: 'Kosar', family: 'Mohammad' },
  { name: 'Mohammad', family: 'Zeinali' }
]

export default class Table extends Component {
  render () {
    return (
      <div>
        <table border={1}>
          {data.map(el => (
            <tr key={`${el.name}-${el.family}`}>
              <Columns el={el} />
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { el: record } = this.props

    return (
      <>
        <td>{record.name}</td>
        <td>{record.family}</td>
      </>
    )
    // return (
    //   <React.Fragment>
    //     <td>{el.name}</td>
    //     <td>{el.family}</td>
    //   </React.Fragment>
    // )
  }
}

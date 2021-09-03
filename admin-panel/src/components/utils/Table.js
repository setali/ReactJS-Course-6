import { Table as AntTable } from 'antd'
import { useState } from 'react'

const convertColumns = columns => columns.map(c => ({ ...c, dataIndex: c.key }))

export default function Table ({ columns, data, rowKey = 'id', ...props }) {
  const [tableCoulmns] = useState(() => convertColumns(columns))

  return (
    <AntTable
      dataSource={data}
      columns={tableCoulmns}
      rowKey={rowKey}
      {...props}
    />
  )
}

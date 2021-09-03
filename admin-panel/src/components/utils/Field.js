import React from 'react'
import { Form, Input, Checkbox as AntCheckbox, Button } from 'antd'

export { Form } from 'antd'

export function Text ({ label, name, required }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `${label} اجباری است` }]}
    >
      <Input />
    </Form.Item>
  )
}

export function Checkbox ({ label, name }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  )
}

export function Submit ({ label, ...props }) {
  return (
    <Form.Item>
      <Button type='primary' htmlType='submit' {...props}>
        {label}
      </Button>
    </Form.Item>
  )
}

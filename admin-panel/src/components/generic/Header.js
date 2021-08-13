import { Layout } from 'antd'
import '../../assets/scss/header.scss'

const { Header: AntHeader } = Layout

export default function Header () {
  return <AntHeader className={'header'}>داشبورد مدیریت</AntHeader>
}

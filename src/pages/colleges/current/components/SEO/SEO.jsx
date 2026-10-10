import { useEffect } from 'react'
import { setHead } from '../../seo.js'

export default function SEO(props) {
  useEffect(() => { setHead(props) }, [props.title, props.description, props.canonical, props.robots, props.image, JSON.stringify(props.schema)])
  return null
}

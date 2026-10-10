import { Link } from 'react-router-dom'
export default function Breadcrumbs({ items }) { return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/colleges/">Colleges</Link>{items.map((x,i)=><span key={`${x.name}-${i}`}>{i>0 && ' / '}{x.path ? <Link to={x.path}>{x.name}</Link> : <span aria-current="page">{x.name}</span>}</span>)}</nav> }

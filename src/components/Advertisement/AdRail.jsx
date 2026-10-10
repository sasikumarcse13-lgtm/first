import React from 'react'
import './AdRail.css'
const DEFAULT_ADS=[
 {src:'https://collegeshine.com/wp-content/uploads/2026/02/collegeshine-college-ad-5-1.webp',alt:'CollegeShine advertisement'},
 {src:'https://collegeshine.com/wp-content/uploads/2026/02/collegeshine-college-ad-1.webp',alt:'CollegeShine advertisement'}
]
export default function AdRail({ads=DEFAULT_ADS,href='/advertise-with-us/'}){return <aside className="global-ad-rail" aria-label="Advertisement">{ads.map(ad=><a className="global-ad-rail__item" href={href} key={ad.src}><img src={ad.src} alt={ad.alt} width="300" height="250" loading="lazy" decoding="async"/></a>)}<a className="global-ad-rail__place" href={href}><span>PLACE<br/>YOUR<br/>AD</span></a></aside>}

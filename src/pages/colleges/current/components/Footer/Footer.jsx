import React from 'react'

const FOOTER_NAV = [
  { label: 'About Us', href: '/about/' },
  { label: 'Advertisement', href: '/advertisement/' },
  { label: 'Career', href: '/career/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Partner With Us', href: '/partner-with-us/' },
]

const FOOTER_SECTIONS = [
  {
    title: 'Courses',
    links: [
      ['Engineering Course','/course/engineering/'],['Agriculture Course','/course/agriculture/'],['Arts & Science Course','/course/arts-science/'],['Diploma / Polytechnic Course','/course/diploma/'],['Architecture & Design Course','/course/architecture-design/'],['Fishery Science Course','/course/fishery-science/'],['Management & MBA Course','/course/management-mba/'],['MBBS Medical Course','/course/mbbs/'],['BDS Course','/course/bds/'],['Allied Health Science Course','/course/allied-health-science/'],['Veterinary Science Course','/course/veterinary-science/'],['Pharmacy Course','/course/pharmacy/'],['Nursing Course','/course/nursing/'],['Physiotherapy Course','/course/physiotherapy/'],['Occupational Therapy Course','/course/occupational-therapy/'],['Ayurveda Course','/course/ayurveda/'],['Homeopathy Course','/course/homeopathy/'],['Unani Medicine Course','/course/unani/'],['Marine & Nautical Course','/course/marine-nautical/'],['Teacher Education Course','/course/teacher-education/'],['Hotel Management Course','/course/hotel-management/'],['Law (LLB, BA-LLB) Course','/course/law/'],['Psychology Course','/course/psychology/'],['Aviation Course','/course/aviation/'],['Media, Journalism & Visual Communication','/course/media-journalism-visual-communication/'],['Sports & Physical Education Course','/course/sports-physical-education/'],['Fine Arts & Performing Arts Course','/course/fine-arts-performing-arts/'],['Commerce, Finance & Accounting','/course/commerce-finance-accounting/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Entrance Exams',
    links: [
      ['IMU CET','/entrance-exam/imu-cet/'],['JEE Main','/entrance-exam/jee-main-entrance-examination/'],['JEE Advanced','/entrance-exam/jee-advanced-entrance-examination/'],['MAT','/entrance-exam/mat-entrance-examination/'],['NATA','/entrance-exam/nata-entrance-examination/'],['NIFT','/entrance-exam/nift-entrance-examination/'],['TANCET','/entrance-exam/tancet-management-computer-application-entrance-exam/'],['NEET - UG','/entrance-exam/neet-entrance-examination-ug/'],['NEET - PG','/entrance-exam/neet-pg-entrance-examination/'],['AIIMS & JIPMER','/entrance-exam/aiims-jipmer-via-neet/'],['GATE','/entrance-exam/gate-entrance-examination/'],['CAT','/entrance-exam/cat-entrance-examination/'],['AME CET','/entrance-exam/ame-cet/'],['CMAT','/entrance-exam/cmat-entrance-examination/'],['CEED','/entrance-exam/ceed-entrance-examination/'],['UCEED','/entrance-exam/uceed-entrance-examination/'],['CLAT','/entrance-exam/clat-entrance-examination/'],['LSAT','/entrance-exam/lsat-entrance-examination-lsat-india/'],['CUET','/entrance-exam/cuet-entrance-examination-ug/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Counselling',
    links: [
      ['Law Counselling','/counselling/law-counselling/'],['Agriculture Counselling','/counselling/agriculture-counselling/'],['Paramedical Counselling','/counselling/paramedical-counselling/'],['Arts & Science Counselling','/counselling/arts-and-science-counselling/'],['Diploma / Polytechnic Counselling','/counselling/diploma-polytechnic-counselling/'],['MBA & MCA Counselling (TANCET)','/counselling/mba-mca-counselling-tancet/'],['Engineering Counselling (TNEA)','/counselling/engineering-counselling-tnea/'],['Medical Counselling (MBBS / BDS & More)','/counselling/medical-counselling-mbbs-bds-more/'],['Teacher Education Counselling','/counselling/teacher-education-counselling/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Scholarships',
    links: [
      ['7.5 Reservation Scheme','/scholarship/7-5-reservation-scheme/'],['First Graduate Scholarship','/scholarship/first-graduate-scholarship/'],['BC / MBC / DNC Scholarship','/scholarship/bc-mbc-dnc-scholarship/'],['Post-Matric Scholarship','/scholarship/post-matric-scholarship/'],["Chief Minister's Merit Award",'/scholarship/chief-ministers-merit-award/'],['Pudhumai Penn Scheme','/scholarship/pudhumai-penn-scheme/'],['Differently-Abled Scholarship','/scholarship/differently-abled-scholarship/'],['Tamizh Pudhalvan Scheme','/scholarship/tamizh-pudhalvan-scheme/'],['Central Sector Scholarship Scheme','/scholarship/central-sector-scholarship-scheme/'],['Single Parent/Orphan Scholarship','/scholarship/single-parent-or-orphan-scholarship/'],['National Means-cum-Merit Scholarship','/scholarship/national-means-cum-merit-scholarship/'],['AICTE Pragati & Saksham Scholarship','/scholarship/aicte-pragati-saksham-scholarship/'],['Adi Dravidar & Tribal Welfare Scholarship','/scholarship/adi-dravidar-tribal-welfare-scholarship/'],['Minority Scholarship (Muslim / Christian)','/scholarship/minority-scholarship-muslim-christian/'],['Nalavariyam Scholarship Scheme','/scholarship/nalavariyam-scholarship-scheme/'],['Sports Scholarship','/scholarship/sports-scholarship/'],['Perasiriyar Anbazhagan Teacher Education Scholarship','/scholarship/perasiriyar-anbazhagan-teacher-education-scholarship/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Our Services',
    links: [
      ['Direct College Admissions','/services/direct-college-admission-india/'],['Online UG / PG Admissions','/services/online-ug-pg-admissions/'],['Distance Education Admissions','/services/distance-education-admissions/'],['Abroad Admissions','/services/abroad-admission/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Colleges',
    links: [
      ['Engineering Colleges','/colleges/engineering/'],['Agriculture Colleges','/colleges/agriculture/'],['Arts & Science Colleges','/colleges/arts-science/'],['Diploma Colleges','/colleges/diploma/'],['MBA Colleges','/colleges/management-mba/'],['Pharmacy Colleges','/colleges/pharmacy/'],['Nursing Colleges','/colleges/nursing/'],['Physiotherapy Colleges','/colleges/physiotherapy/'],['Allied Health Science Colleges','/colleges/allied-health-science/'],['Teacher Education Colleges','/colleges/teacher-education/'],['Hotel Management Colleges','/colleges/hotel-management/'],['Ayurveda Colleges','/colleges/ayurveda/'],['Law Colleges','/colleges/law/'],['BDS Colleges','/colleges/bds/'],['Veterinary Science Colleges','/colleges/veterinary-science/'],['Physical Education Colleges','/colleges/sports-physical-education/'],['MBBS Colleges','/colleges/mbbs/'],['Fishery Science Colleges','/colleges/fishery-science/'],['Marine & Nautical Colleges','/colleges/marine-nautical/'],['Homeopathy Colleges','/colleges/homeopathy/'],['Architecture & Design Colleges','/colleges/architecture-design/'],['Occupational Therapy Colleges','/colleges/occupational-therapy/'],['Unani Medicine Colleges','/colleges/unani/'],['Psychology Colleges','/colleges/psychology/'],['Media, Journalism & Visual Communication Colleges','/colleges/media-journalism-visual-communication/'],['Fine Arts & Performing Arts Colleges','/colleges/fine-arts-performing-arts/'],['Aviation Colleges','/colleges/aviation/'],['Commerce, Finance & Accounting Colleges','/colleges/commerce-finance-accounting/']
    ].map(([label,href])=>({label,href}))
  },
  {
    title: 'Our Tools',
    links: [
      ['Career Path Generator','/tools/career-path-generator/'],['Scholarship Finder','/tools/scholarship-finder-tool/'],['Cutoff Calculator','/tools/collegeshine-com-cut-off-calculator-tamil-nadu/'],['College Fee Viewer','/tools/college-fee-viewer/'],['Skill Recommendation','/tools/skill-recommentation-tool/'],['Blog','/blog/'],['Featured Colleges','/tools/featured-colleges/'],['Admission Helpline','/tools/admission-helpline/']
    ].map(([label,href])=>({label,href}))
  },
]


function FooterStyles() {
  return (
    <style>{`
/* ===============================
   PREMIUM MEGA FOOTER
================================ */

.mega-footer{
  font-family:'Poppins',sans-serif;
}

.mega-container{
  max-width:1500px;
  margin:0 auto;
  padding:70px 40px;
}

/* ---------- TOP BAR ---------- */

.mega-top{
  display:grid;
  grid-template-columns:220px 1fr 220px;
  align-items:center;
  margin-bottom:70px;
  gap:20px;
}

/* LOGO FIX */
.mega-logo img{
  max-width:180px;
  height:auto;
  display:block;
}

/* NAV */

.mega-nav{
  text-align:center;
}

.mega-nav a{
  margin:0 18px;
  font-size:16px;
  font-weight:800;
  text-decoration:none;
  color:#c9d6e2;
  transition:.3s ease;
}

.mega-nav a:hover{
  color:#ffffff;
}

/* SOCIAL */

.mega-social{
  display:flex;
  justify-content:flex-end;
  gap:15px;
}

.mega-social a{
  width:50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:.3s;
}

.mega-social img{
  width:32px;
  height:32px;
}

.mega-social a:hover{
  background:#1a3d6b;
  transform:translateY(-3px);
}

/* ---------- ROW STRUCTURE ---------- */

.mega-row{
  margin-bottom:55px;
}

.mega-title{
  color:#ffffff;
  font-size:25px;
  font-weight:600;
  margin-bottom:22px;
  position:relative;
}

.mega-title::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-8px;
  width:50px;
  height:2px;
  background:#1e4f86;
}

/* GRID LINKS */

.mega-links{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  column-gap:60px;
  row-gap:12px;
}

/* MULTI-LINE SAFE ARROW ALIGNMENT */

.mega-links a{
  display:flex;
  align-items:flex-start;
  gap:8px;
  font-size:19px;
  text-decoration:none;
  color:#b8c7d6;
  line-height:1.5;
  transition:.3s;
}

.mega-links a::before{
  content:"➢";
  font-size:17px;
  margin-top:0px;
  transition:.3s;
}

.mega-links a:hover{
  color:#ffffff;
  transform:translateX(4px);
}

.mega-links a:hover::before{
  transform:translateX(4px);
  color:#ffffff;
}

/* ---------- BOTTOM ---------- */

.mega-bottom{
  border-top:1px solid rgba(255,255,255,0.08);
  padding-top:25px;
  margin-top:50px;
}

.mega-bottom-inner{
  display:grid;
  grid-template-columns:1fr auto auto auto;
  gap:40px;
  align-items:center;
  font-size:17px;
  color:#9fb3c8;
}

.mega-bottom-inner a{
  text-decoration:none;
  color:#9fb3c8;
  transition:.3s;
}

.mega-bottom-inner a:hover{
  color:#ffffff;
}

/* ===============================
   ALL COURSE PAGES INTERNAL LINK HUB
================================ */

.all-course-pages{
  margin: 65px 0 55px;
}

.course-link-hub{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:42px 32px;
}

.course-link-group{
  min-width:0;
}

.course-category-link{
  display:block;
  color:#ffffff !important;
  font-size:20px !important;
  font-weight:700;
  line-height:1.35;
  text-decoration:none;
  margin-bottom:13px;
  border-bottom:1px solid rgba(255,255,255,.08);
  padding-bottom:9px;
}

.course-link-list{
  display:flex;
  flex-direction:column;
  gap:6px;
}

.course-link-list a{
  display:block;
  color:#b8c7d6;
  font-size:15px;
  line-height:1.45;
  text-decoration:none;
  transition:.25s ease;
}

.course-link-list a::before{
  content:'➢';
  margin-right:6px;
  font-size:12px;
}

.course-link-list a:hover{
  color:#ffffff;
  transform:translateX(3px);
}

/* ===============================
   TABLET RESPONSIVE (1024px)
================================ */

@media (max-width:1024px){

  .mega-container{
    padding:60px 30px;
  }

  .mega-top{
    grid-template-columns:1fr;
    text-align:center;
    gap:30px;
  }

  .mega-logo{
    display:flex;
    justify-content:center;
  }

  .mega-social{
    justify-content:center;
  }

  .mega-nav{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
  }

  .mega-links{
    grid-template-columns:repeat(3,1fr);
    column-gap:30px;
  }

  .course-link-hub{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:32px 24px;
  }

  .mega-bottom-inner{
    grid-template-columns:1fr 1fr;
    text-align:center;
  }

}

/* ===============================
   MOBILE RESPONSIVE (768px)
================================ */

@media (max-width:768px){

  .mega-container{
    padding:50px 20px;
  }

  .mega-nav{
    flex-direction:column;
    align-items:center;
    gap:10px;
  }

  .mega-links{
    grid-template-columns:repeat(2,1fr);
    column-gap:20px;
  }

  .course-link-hub{
    grid-template-columns:1fr;
    gap:28px;
  }

  .mega-bottom-inner{
    grid-template-columns:1fr;
    gap:12px;
    text-align:center;
  }

}

/* ===============================
   SMALL MOBILE (480px)
================================ */

@media (max-width:480px){

  .mega-links{
    grid-template-columns:1fr;
  }

  .mega-title{
    font-size:20px;
  }

}



/* ===============================
   FOOTER CONTACT SECTION
================================ */



.footer-contact-section{
  
  padding:70px 20px;
  color:#ffffff;
  font-family:'Poppins',sans-serif;
}

.footer-contact-container{
  max-width:1200px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;
}

.footer-title{
  font-size:26px;
  font-weight:600;
  margin-bottom:35px;
  color: white;
}

/* Contact Item */
.contact-item{
  display:flex;
  align-items:center;
  gap:18px;
  margin-bottom:25px;
  text-decoration:none;
  color:#ffffff;
  transition:all .3s ease;
}

.contact-item:hover{
  transform:translateX(5px);
  color: white;
}

/* Icon Circle */
.icon-circle{
  width:55px;
  height:55px;
  background:rgba(255,255,255,0.08);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:.3s;
}

.icon-circle img{
  width:35px;
  height:35px;
  object-fit:contain;
}

.contact-item:hover .icon-circle{
  background:#1f5ec9;
}

/* Text */
.contact-text{
  display:flex;
  flex-direction:column;
  line-height:1.6;
}

.label{
  font-size:19px;
  opacity:.8;
}

.value{
  font-size:20px;
  font-weight:500;
}

.office-item{
  align-items:flex-start;
}

.office-item p{
  margin:5px 0 0 0;
  font-size:16px;
  line-height:1.7;
}

/* Tablet */
@media (max-width:1024px){
  .footer-contact-container{
    gap:50px;
  }
}

/* Mobile */
@media (max-width:768px){

  .footer-contact-container{
    grid-template-columns:1fr;
    gap:50px;
  }

  .footer-title{
    font-size:22px;
  }

  .value{
    font-size:16px;
  }

  .icon-circle{
    width:45px;
    height:45px;
  }

  .icon-circle img{
    width:22px;
    height:22px;
  }

}

/* Small Mobile */
@media (max-width:480px){

  .footer-contact-section{
    padding:50px 15px;
  }

  .contact-item{
    gap:12px;
  }

}

`}</style>
  )
}

export default function Footer() {
  return (
    <footer className="mega-footer" style={{ marginTop: -30 }}>
      <FooterStyles />
      <div className="mega-container">

        {/* TOP SECTION */}
        <div className="mega-top">
          <div className="mega-logo">
            <img
              height="80px"
              src="/assets/collegeshine-footer-logo.svg"
              alt="CollegeShine"
            />
          </div>

          <nav className="mega-nav" aria-label="Footer navigation">
            {FOOTER_NAV.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mega-social">
            <a href="https://instagram.com/collegeshine">
              <img src="/assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://facebook.com/collegeshine">
              <img
                style={{ borderRadius: '50%' }}
                src="/assets/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://www.youtube.com/@collegeshine">
              <img src="/assets/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* LINK SECTIONS: Courses, Entrance Exams, Counselling, Scholarships, Our Services, Colleges, Our Tools */}
        {FOOTER_SECTIONS.map((section) => (
          <div className="mega-row" key={section.title}>
            <div className="mega-title">{section.title}</div>
            <div className="mega-links">
              {section.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* CONTACT SECTION */}
        <section className="footer-contact-section" style={{ marginTop: -60 }}>
          <div className="footer-contact-container">

            <div className="footer-contact-left">
              <h3 className="footer-title">Contact Us</h3>

              <a
                href="https://wa.me/919543854321"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="icon-circle">
                  <img
                    src="/assets/whatsapp.svg"
                    alt="WhatsApp"
                  />
                </div>
                <div className="contact-text">
                  <span className="label">WhatsApp</span>
                  <span className="value">+91 95438 54321</span>
                </div>
              </a>

              <a href="tel:+919865553629" className="contact-item">
                <div className="icon-circle">
                  <img
                    src="/assets/phone.svg"
                    style={{ fill: 'white' }}
                    alt="Call"
                  />
                </div>
                <div className="contact-text">
                  <span className="label">Helpline</span>
                  <span className="value">+91 98655 53629</span>
                </div>
              </a>

              <a href="mailto:info@collegeshine.com" className="contact-item">
                <div className="icon-circle">
                  <img
                    src="/assets/mail.svg"
                    alt="Email"
                  />
                </div>
                <div className="contact-text">
                  <span className="label">Email</span>
                  <span className="value">info@collegeshine.com</span>
                </div>
              </a>
            </div>

            <div className="footer-contact-right">
              <h3 className="footer-title">Our Office</h3>
              <div className="contact-item office-item">
                <div className="icon-location" style={{ height: 30, marginTop: 8, fontSize: 28 }}>
                  <img
                    src="/assets/location.svg"
                    style={{ width: 24, height: 24, borderRadius: '40%' }}
                    alt="collegeshine"
                  />
                </div>
                <div className="contact-text">
                  <strong style={{ fontSize: 25 }}>CollegeShine</strong>
                  <p style={{ fontSize: 19, color: 'white' }}>
                    Registered Office: 1st Floor , Aandavar & Co Building ,<br />
                    RAS & Lakshmi Theatre, Backside, Salem Main Road,<br />
                    Komarapalayam(PO), Namakkal(DT) , Tamil Nadu 638183
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM BAR */}
        <div className="mega-bottom" style={{ marginTop: -50 }}>
          <div className="mega-bottom-inner">
            <div>
              Copyright © 2026 <a href="/">CollegeShine.com</a> All Rights Reserved.
            </div>
            <a href="/sitemap.xml">Site Map</a>
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-condition/">Terms & Condition</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

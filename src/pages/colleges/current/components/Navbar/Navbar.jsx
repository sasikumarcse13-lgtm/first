import { useEffect, useRef, useState } from 'react'

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Courses', href: '/course/', children: [
      { label: 'Engineering', href: '/course/engineering/' },
      { label: 'Agriculture', href: '/course/agriculture/' },
      { label: 'Arts & Science', href: '/course/arts-science/' },
      { label: 'Diploma / Polytechnic', href: '/course/diploma/' },
      { label: 'Architecture & Design', href: '/course/architecture-design/' },
      { label: 'Fishery Science', href: '/course/fishery-science/' },
      { label: 'Management & MBA', href: '/course/management-mba/' },
      { label: 'MBBS', href: '/course/mbbs/' },
      { label: 'BDS', href: '/course/bds/' },
      { label: 'Allied Health Science', href: '/course/allied-health-science/' },
      { label: 'Veterinary Science', href: '/course/veterinary-science/' },
      { label: 'Pharmacy', href: '/course/pharmacy/' },
      { label: 'Nursing', href: '/course/nursing/' },
      { label: 'Physiotherapy', href: '/course/physiotherapy/' },
      { label: 'Occupational Therapy', href: '/course/occupational-therapy/' },
      { label: 'Ayurveda', href: '/course/ayurveda/' },
      { label: 'Homeopathy', href: '/course/homeopathy/' },
      { label: 'Unani Medicine', href: '/course/unani/' },
      { label: 'Teacher Education', href: '/course/teacher-education/' },
      { label: 'Marine & Nautical', href: '/course/marine-nautical/' },
      { label: 'Hotel Management', href: '/course/hotel-management/' },
      { label: 'Law (LLB, BA-LLB)', href: '/course/law/' },
      { label: 'Psychology', href: '/course/psychology/' },
      { label: 'Aviation', href: '/course/aviation/' },
      { label: 'Sports & Physical Education', href: '/course/sports-physical-education/' },
      { label: 'Commerce, Finance & Accounting', href: '/course/commerce-finance-accounting/' },
      { label: 'Media, Journalism & Visual Communication', href: '/course/media-journalism-visual-communication/' },
      { label: 'Fine Arts & Performing Arts', href: '/course/fine-arts-performing-arts/' },
    ],
  },
  {
    label: 'Colleges', href: '/colleges/', children: [
      { label: 'Engineering Colleges', href: '/colleges/engineering/' },
      { label: 'Agriculture Colleges', href: '/colleges/agriculture/' },
      { label: 'Arts & Science Colleges', href: '/colleges/arts-science/' },
      { label: 'Diploma Colleges', href: '/colleges/diploma/' },
      { label: 'MBA Colleges', href: '/colleges/management-mba/' },
      { label: 'Pharmacy Colleges', href: '/colleges/pharmacy/' },
      { label: 'Nursing Colleges', href: '/colleges/nursing/' },
      { label: 'Physiotherapy Colleges', href: '/colleges/physiotherapy/' },
      { label: 'Allied Health Science Colleges', href: '/colleges/allied-health-science/' },
      { label: 'Teacher Education Colleges', href: '/colleges/teacher-education/' },
      { label: 'Hotel Management Colleges', href: '/colleges/hotel-management/' },
      { label: 'Ayurveda Colleges', href: '/colleges/ayurveda/' },
      { label: 'Law Colleges', href: '/colleges/law/' },
      { label: 'BDS Colleges', href: '/colleges/bds/' },
      { label: 'Veterinary Science Colleges', href: '/colleges/veterinary-science/' },
      { label: 'Physical Education Colleges', href: '/colleges/sports-physical-education/' },
      { label: 'MBBS Colleges', href: '/colleges/mbbs/' },
      { label: 'Fishery Science Colleges', href: '/colleges/fishery-science/' },
      { label: 'Marine & Nautical Colleges', href: '/colleges/marine-nautical/' },
      { label: 'Homeopathy Colleges', href: '/colleges/homeopathy/' },
      { label: 'Architecture & Design Colleges', href: '/colleges/architecture-design/' },
      { label: 'Occupational Therapy Colleges', href: '/colleges/occupational-therapy/' },
      { label: 'Unani Medicine Colleges', href: '/colleges/unani/' },
      { label: 'Psychology Colleges', href: '/colleges/psychology/' },
      { label: 'Media, Journalism & Visual Communication Colleges', href: '/colleges/media-journalism-visual-communication/' },
      { label: 'Fine Arts & Performing Arts Colleges', href: '/colleges/fine-arts-performing-arts/' },
      { label: 'Aviation Colleges', href: '/colleges/aviation/' },
      { label: 'Commerce, Finance & Accounting Colleges', href: '/colleges/commerce-finance-accounting/' },
    ],
  },
  {
    label: 'Services', href: '/services/', children: [
      { label: 'Direct College Admissions', href: '/services/direct-college-admission-india/' },
      { label: 'Online UG / PG Admissions', href: '/services/online-ug-pg-admissions/' },
      { label: 'Distance Education Admissions', href: '/services/distance-education-admissions/' },
      { label: 'Abroad Admissions', href: '/services/abroad-admission/' },
    ],
  },
  {
    label: 'Counselling', href: '/counselling/', children: [
      { label: 'Engineering Counselling (TNEA)', href: '/counselling/engineering-counselling-tnea/' },
      { label: 'Medical Counselling (MBBS / BDS & More)', href: '/counselling/medical-counselling-mbbs-bds-more/' },
      { label: 'Agriculture Counselling', href: '/counselling/agriculture-counselling/' },
      { label: 'MBA & MCA Counselling (TANCET)', href: '/counselling/mba-mca-counselling-tancet/' },
      { label: 'Paramedical Counselling', href: '/counselling/paramedical-counselling/' },
      { label: 'Arts & Science Counselling', href: '/counselling/arts-and-science-counselling/' },
      { label: 'Diploma / Polytechnic Counselling', href: '/counselling/diploma-polytechnic-counselling/' },
      { label: 'Teacher Education Counselling', href: '/counselling/teacher-education-counselling/' },
      { label: 'Law Counselling', href: '/counselling/law-counselling/' },
    ],
  },
  {
    label: 'Entrance Exams', href: '/entrance-exam/', children: [
      { label: 'NEET (UG)', href: '/entrance-exam/neet-entrance-examination-ug/' },
      { label: 'JEE Main', href: '/entrance-exam/jee-main-entrance-examination/' },
      { label: 'GATE', href: '/entrance-exam/gate-entrance-examination/' },
      { label: 'JEE Advanced', href: '/entrance-exam/jee-advanced-entrance-examination/' },
      { label: 'NEET (PG)', href: '/entrance-exam/neet-pg-entrance-examination/' },
      { label: 'TANCET', href: '/entrance-exam/tancet-management-computer-application-entrance-exam/' },
      { label: 'NATA', href: '/entrance-exam/nata-entrance-examination/' },
      { label: 'MAT', href: '/entrance-exam/mat-entrance-examination/' },
      { label: 'CAT', href: '/entrance-exam/cat-entrance-examination/' },
      { label: 'CMAT', href: '/entrance-exam/cmat-entrance-examination/' },
      { label: 'CLAT', href: '/entrance-exam/clat-entrance-examination/' },
      { label: 'LSAT', href: '/entrance-exam/lsat-entrance-examination-lsat-india/' },
      { label: 'UCEED', href: '/entrance-exam/uceed-entrance-examination/' },
      { label: 'CEED', href: '/entrance-exam/ceed-entrance-examination/' },
      { label: 'CUET', href: '/entrance-exam/cuet-entrance-examination-ug/' },
      { label: 'NIFT', href: '/entrance-exam/nift-entrance-examination/' },
      { label: 'AME CET', href: '/entrance-exam/ame-cet/' },
      { label: 'IMU CET', href: '/entrance-exam/imu-cet/' },
      { label: 'AIIMS / JIPMER', href: '/entrance-exam/aiims-jipmer-via-neet/' },
    ],
  },
  {
    label: 'Scholarships', href: '/scholarship/', children: [
      { label: '7.5% Reservation Scheme', href: '/scholarship/7-5-reservation-scheme/' },
      { label: 'Pudhumai Penn Scheme', href: '/scholarship/pudhumai-penn-scheme/' },
      { label: 'Post-Matric Scholarship', href: '/scholarship/post-matric-scholarship/' },
      { label: 'Sports Scholarship', href: '/scholarship/sports-scholarship/' },
      { label: 'First Graduate Scholarship', href: '/scholarship/first-graduate-scholarship/' },
      { label: 'Adi Dravidar & Tribal Welfare Scholarship', href: '/scholarship/adi-dravidar-tribal-welfare-scholarship/' },
      { label: 'Tamizh Pudhalvan Scheme', href: '/scholarship/tamizh-pudhalvan-scheme/' },
      { label: 'BC MBC DNC Scholarship', href: '/scholarship/bc-mbc-dnc-scholarship/' },
      { label: 'Minority Scholarship', href: '/scholarship/minority-scholarship-muslim-christian/' },
      { label: 'AICTE Pragati & Saksham Scholarship', href: '/scholarship/aicte-pragati-saksham-scholarship/' },
      { label: "Chief Minister's Merit Award", href: '/scholarship/chief-ministers-merit-award/' },
      { label: 'Nalavariyam Scholarship Scheme', href: '/scholarship/nalavariyam-scholarship-scheme/' },
      { label: 'Central Sector Scholarship Scheme', href: '/scholarship/central-sector-scholarship-scheme/' },
      { label: 'Single Parent / Orphan Scholarship', href: '/scholarship/single-parent-or-orphan-scholarship/' },
      { label: 'Differently-Abled Scholarship', href: '/scholarship/differently-abled-scholarship/' },
      { label: 'National Means-Cum-Merit Scholarship', href: '/scholarship/national-means-cum-merit-scholarship/' },
      { label: 'Perasiriyar Anbazhagan Teacher Education Scholarship', href: '/scholarship/perasiriyar-anbazhagan-teacher-education-scholarship/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  {
    label: 'Our Tools', href: '/tools/', children: [
      { label: 'Career Path Generator', href: '/tools/career-path-generator/' },
      { label: 'Scholarship Finder', href: '/tools/scholarship-finder-tool/' },
      { label: 'Cutoff Calculator', href: '/tools/collegeshine-com-cut-off-calculator-tamil-nadu/' },
      { label: 'College Fee Viewer', href: '/tools/college-fee-viewer/' },
      { label: 'Skill Recommendation', href: '/tools/skill-recommentation-tool/' },
      { label: 'Featured Colleges', href: '/tools/featured-colleges/' },
      { label: 'Admission Helpline', href: '/tools/admission-helpline/' },
    ],
  },
]


const LOGO_URL = '/assets/collegeshine-logo.svg'


function NavbarStyles() {
  return (
    <style>{`
/* ===== Extracted style block 1 ===== */
.ht-ctc-chat{--side:right}
@keyframes ctcBounce{0%{opacity:0;transform:scale(0)}60%{opacity:1;transform:scale(1.3)}to{opacity:1;transform:scale(1)}}
@keyframes ctc_fadeIn{0%{opacity:0}to{opacity:1}}
@keyframes ht_ctc_cta_stick{0%{opacity:0;transform:translateX(6px) scaleX(.6)}to{opacity:1;transform:translateX(0) scaleX(1)}}



img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}



:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(body) { margin: 0; }
body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}



@keyframes spin {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}
@keyframes blink {
	from {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}



.form-group {
    margin-bottom: 15px;
}
.form-group input,
.form-group select {
    width: 100%;
    padding: 10px 12px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}



:root{--tutor-text-size:16px;--tutor-color-white:#fff;--tutor-color-success:#24a148;--tutor-color-success-rgb:36,161,72;--tutor-color-warning:#ed9700;--tutor-color-warning-rgb:237,151,0;--tutor-color-danger:#f44337;--tutor-color-danger-rgb:244,67,55;--tutor-color-secondary:#41454f;--tutor-color-subdued:#5b616f;--tutor-color-hints:#767c8e;--tutor-color-muted:#757c8e;--tutor-color-gray:#e3e5eb;--tutor-color-gray-10:#eff1f6}
.clearfix:after{clear:both;content:"";display:block}
.d-block,.tutor-profile-badge img{display:block}
.align-items-center,.tutor-profile-badge,.tutor-instructor-card .tutor-name,.tutor-instructor-card{align-items:center}
@keyframes rotateSpinner{to{transform:rotate(360deg)}}
@keyframes pulse-animation{0%{box-shadow:0 0 rgba(0,0,0,.1)}to{box-shadow:0 0 0 6px transparent}}



:root{--tutor-text-size:16px;--tutor-color-white:#fff;--tutor-color-success:#24a148;--tutor-color-success-rgb:36,161,72;--tutor-color-warning:#ed9700;--tutor-color-warning-rgb:237,151,0;--tutor-color-danger:#f44337;--tutor-color-danger-rgb:244,67,55;--tutor-color-secondary:#41454f;--tutor-color-subdued:#5b616f;--tutor-color-hints:#767c8e;--tutor-color-muted:#757c8e;--tutor-color-gray:#e3e5eb;--tutor-color-gray-10:#eff1f6}
body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
@keyframes spinner{to{transform:rotate(360deg)}}
@media (min-width:768px) and (max-width:991px){.tutor-checkout-billing .tutor-billing-fields .tutor-col-12:first-of-type .tutor-form-control{border-top-right-radius:6px}}



:root{--tutor-color-primary:#3e64de;--tutor-color-primary-rgb:62, 100, 222;--tutor-color-primary-hover:#395bca;--tutor-color-primary-hover-rgb:57, 91, 202;--tutor-body-color:#212327;--tutor-body-color-rgb:33, 35, 39;--tutor-border-color:#cdcfd5;--tutor-border-color-rgb:205, 207, 213;--tutor-color-gray:#e3e5eb;--tutor-color-gray-rgb:227, 229, 235;}



@keyframes a{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}



:root{--direction-multiplier:1}
.elementor-screen-only,.screen-reader-text,.screen-reader-text span,.ui-helper-hidden-accessible{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;top:-10000em;width:1px;clip:rect(0,0,0,0);border:0}
.elementor *,.elementor :after,.elementor :before{box-sizing:border-box}.elementor a{box-shadow:none;text-decoration:none}
.elementor img{border:none;border-radius:0;box-shadow:none;height:auto;max-width:100%}
.elementor-element{--flex-direction:initial;--flex-wrap:initial;--justify-content:initial;--align-items:initial;--align-content:initial;--gap:initial;--flex-basis:initial;--flex-grow:initial;--flex-shrink:initial;--order:initial;--align-self:initial;align-self:var(--align-self);flex-basis:var(--flex-basis);flex-grow:var(--flex-grow);flex-shrink:var(--flex-shrink);order:var(--order)}.elementor-element:where(.e-con-full,.elementor-widget){align-content:var(--align-content);align-items:var(--align-items);flex-direction:var(--flex-direction);flex-wrap:var(--flex-wrap);gap:var(--row-gap) var(--column-gap);justify-content:var(--justify-content)}
:root{--page-title-display:block}
@keyframes eicon-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}
.elementor-section{position:relative}.elementor-section .elementor-container{display:flex;margin-inline:auto;position:relative}
@media (max-width:1024px){.elementor-section .elementor-container{flex-wrap:wrap}}.elementor-section.elementor-section-boxed>.elementor-container{max-width:1140px}
.elementor-widget-wrap{align-content:flex-start;flex-wrap:wrap;position:relative;width:100%}.elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap{display:flex}.elementor-widget-wrap>.elementor-element{width:100%}
.elementor-widget{position:relative}
.elementor-column{display:flex;min-height:1px;position:relative}
.elementor-inner-section .elementor-column-gap-no .elementor-element-populated{padding:0}
@media (min-width:768px){}@media (min-width:768px){.elementor-column.elementor-col-50,.elementor-column[data-col="50"]{width:50%}}@media (min-width:768px){.elementor-column.elementor-col-100,.elementor-column[data-col="100"]{width:100%}}@media (max-width:767px){}@media (max-width:767px){.elementor-column{width:100%}}@media (min-width:1025px){#elementor-device-mode:after{content:"desktop"}}@media (max-width:1024px){#elementor-device-mode:after{content:"tablet"}}@media (max-width:767px){#elementor-device-mode:after{content:"mobile"}}@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}.elementor-element:where(:not(.e-con)):where(:not(.e-div-block-base)) .elementor-widget-container,.elementor-element:where(:not(.e-con)):where(:not(.e-div-block-base)):not(:has(.elementor-widget-container)){transition:background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration,.4s)}



.elementor-kit-8{--e-global-color-primary:#6EC1E4;--e-global-color-secondary:#54595F;--e-global-color-text:#7A7A7A;--e-global-color-accent:#61CE70;--e-global-typography-primary-font-family:"Roboto";--e-global-typography-primary-font-weight:600;--e-global-typography-secondary-font-family:"Roboto Slab";--e-global-typography-secondary-font-weight:400;--e-global-typography-text-font-family:"Roboto";--e-global-typography-text-font-weight:400;--e-global-typography-accent-font-family:"Roboto";--e-global-typography-accent-font-weight:500;}.elementor-section.elementor-section-boxed > .elementor-container{max-width:1404px;}
.elementor-element{--widgets-spacing:0px 0px;--widgets-spacing-row:0px;--widgets-spacing-column:0px;}
@media(max-width:1024px){.elementor-section.elementor-section-boxed > .elementor-container{max-width:1024px;}}@media(max-width:767px){.elementor-section.elementor-section-boxed > .elementor-container{max-width:540px;}}


.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}
.elementor-widget-image img{display:inline-block;vertical-align:middle}



.elementor-17627 .elementor-element.elementor-element-2d3d7e1{margin-top:-121px;margin-bottom:0px;}.elementor-17627 .elementor-element.elementor-element-326f311{margin-top:-113px;margin-bottom:0px;z-index:3;}.elementor-17627 .elementor-element.elementor-element-e118827 > .elementor-element-populated{padding:0px 12px 0px 12px;}.elementor-17627 .elementor-element.elementor-element-edfe3ee{overflow:hidden;transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:0px;margin-bottom:0px;padding:50px 0px 50px 0px;}
.elementor-17627 .elementor-element.elementor-element-196b921 > .elementor-element-populated{padding:0px 12px 0px 12px;}.elementor-17627 .elementor-element.elementor-element-1878a9a .title-area{text-align:left;}.elementor-17627 .elementor-element.elementor-element-0f06a47 > .elementor-element-populated{padding:0px 12px 0px 12px;}.elementor-17627 .elementor-element.elementor-element-42bf079 > .elementor-widget-container{padding:20px 0px 0px 0px;}.elementor-17627 .elementor-element.elementor-element-42bf079 .btn-wrapper{text-align:right;}.elementor-17627 .elementor-element.elementor-element-b426304 > .elementor-element-populated{padding:0px 12px 0px 12px;}.elementor-17627 .elementor-element.elementor-element-83d490b > .elementor-element-populated{padding:0px 12px 0px 12px;}
@media(max-width:1024px){.elementor-17627 .elementor-element.elementor-element-326f311{margin-top:90px;margin-bottom:0px;}.elementor-17627 .elementor-element.elementor-element-e118827 > .elementor-element-populated{padding:0px 36px 0px 36px;}}@media(max-width:767px){.elementor-17627 .elementor-element.elementor-element-e118827 > .elementor-element-populated{padding:0px 12px 0px 12px;}}@media(min-width:768px){.elementor-17627 .elementor-element.elementor-element-196b921{width:60%;}.elementor-17627 .elementor-element.elementor-element-0f06a47{width:40%;}.elementor-17627 .elementor-element.elementor-element-b426304{width:80%;}.elementor-17627 .elementor-element.elementor-element-83d490b{width:20%;}}


:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))}*,:after,:before{box-sizing:border-box}
@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}
.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}
@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}
@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}
@media (min-width:1200px){.h3,h3{font-size:1.75rem}}p{margin-top:0;margin-bottom:1rem}
ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}
b,strong{font-weight:bolder}
a{color:#0d6efd;text-decoration:underline}
img,svg{vertical-align:middle}
button{border-radius:0}
button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}
[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}
[type=search]{outline-offset:-2px;-webkit-appearance:textfield}
.img-fluid,.img-thumbnail{max-width:100%;height:auto}
.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}
@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x)/ -2);margin-left:calc(var(--bs-gutter-x)/ -2)}.row>*{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)/ 2);padding-left:calc(var(--bs-gutter-x)/ 2);margin-top:var(--bs-gutter-y)}
.col-auto,.row-cols-6>*{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-auto{width:auto}
.g-2,.gy-2{--bs-gutter-y:0.5rem}
.g-4,.gy-4{--bs-gutter-y:1.5rem}
@media (min-width:768px){}@media (min-width:768px){.col-md-5,.col-md-6{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-md-6{width:50%}}@media (min-width:992px){}@media (min-width:992px){.col-lg-3,.col-lg-4{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-lg-4{width:33.3333333333%}}@media (min-width:992px){.col-lg-5,.col-lg-6{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-lg-6{width:50%}}@media (min-width:992px){.col-lg-11,.col-lg-12{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-lg-12{width:100%}}@media (min-width:1200px){}@media (min-width:1200px){.col-xl-auto,.row-cols-xl-6>*{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.col-xl-auto{width:auto}}@media (min-width:1200px){.col-xl-3{width:25%}.col-xl-3,.col-xl-4{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}}@-webkit-keyframes a{0%{background-position-x:1rem}}
@keyframes a{0%{background-position-x:1rem}}
@-webkit-keyframes b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
@keyframes b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
@-webkit-keyframes c{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}
@keyframes c{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1;-webkit-transform:none;transform:none}}
.clearfix:after{display:block;clear:both;content:""}
.d-block{display:block!important}
.d-none{display:none!important}
.justify-content-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}
.align-items-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}
.me-2{margin-right:.5rem!important}
.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}
.text-end{text-align:right!important}.text-center{text-align:center!important}
@media (min-width:992px){}@media (min-width:992px){.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}}@media (min-width:992px){.d-lg-none{display:none!important}}@media (min-width:992px){.justify-content-lg-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}}@media (min-width:1200px){}@media (min-width:1200px){.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}}


.fa,.fa-brands,.fa-duotone,.fa-light,.fa-regular,.fa-solid,.fa-thin,.fab,.fad,.fal,.far,.fas,.fat{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}
@-webkit-keyframes a{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}
@keyframes a{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}
@-webkit-keyframes b{50%{opacity:var(--fa-fade-opacity,.4)}}
@keyframes b{50%{opacity:var(--fa-fade-opacity,.4)}}
@-webkit-keyframes c{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}
@keyframes c{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}
@-webkit-keyframes d{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}
@keyframes d{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}
@-webkit-keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
@keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}
.fa-arrow-right:before{content:"\\f061"}
.fa-bars:before,.fa-navicon:before{content:"\\f0c9"}
.fa-book:before{content:"\\f02d"}
.fa-envelope:before{content:"\\f0e0"}
.fa-magnifying-glass:before,.fa-search:before{content:"\\f002"}
.fa-phone:before{content:"\\f095"}
.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:"\\f00d"}
:host,:root{--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}
.fa-brands,.fab{font-family:Font Awesome\\ 6 Brands;font-weight:400}
.fa-facebook-f:before{content:"\\f39e"}
.fa-instagram:before{content:"\\f16d"}
.fa-youtube:before{content:"\\f167"}
:host,:root{--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone"}
:host,:root{--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro"}
.fa-light,.fal{font-family:Font Awesome\\ 6 Pro;font-weight:300}:host,:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Pro"}
.fa-regular,.far{font-family:Font Awesome\\ 6 Pro;font-weight:400}:host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Pro"}
.fa-solid,.fas{font-family:Font Awesome\\ 6 Pro;font-weight:900}:host,:root{--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro"}








:root {
  --theme-color: #0D5EF4;
  --theme-color2: #F20F10;
  --title-color: #0F2239;
  --body-color: #4D5765;
  --smoke-color: #F3F7FB;
  --black-color: #000000;
  --white-color: #ffffff;
  --light-color: #72849B;
  --yellow-color: #FFB539;
  --success-color: #28a745;
  --error-color: #dc3545;
  --border-color: #ecf1f9;
  --title-font: 'Jost', sans-serif;
  --body-font: 'Roboto', sans-serif;
  --icon-font: "Font Awesome 6 Pro";
  --main-container: 1380px;
  --container-gutters: 24px;
  --section-space: 120px;
  --section-space-mobile: 80px;
  --section-title-space: 70px;
  --ripple-ani-duration: 5s;
}
html,
body {
  scroll-behavior: auto !important;
}
body {
  font-family: var(--title-font);
  font-size: 16px;
  font-weight: 400;
  color: var(--body-color);
  line-height: 26px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  /***scroll-bar***/
}
body::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 20px;
}
.slick-slide:focus,
button:focus,
a:focus,
a:active,
input,
input:hover,
input:focus,
input:active,
textarea,
textarea:hover,
textarea:focus,
textarea:active {
  outline: none;
}
img:not([draggable]),
embed,
object,
video {
  max-width: 100%;
  height: auto;
}
ul {
  list-style-type: disc;
}
a {
  color: var(--theme-color);
  text-decoration: none;
  outline: 0;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
a:active, a:focus, a:hover, a:visited {
  text-decoration: none;
  outline: 0;
}
button {
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
img {
  border: none;
  max-width: 100%;
}
p {
  font-family: var(--body-font);
  margin: 0 0 18px 0;
  color: var(--body-color);
  line-height: 1.75;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a,
p a,
span a {
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
}
.h1,
h1,
.h2,
h2,
.h3,
h3,
.h4,
h4,
.h5,
h5,
.h6,
h6 {
  font-family: var(--title-font);
  color: var(--title-color);
  text-transform: none;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 15px 0;
}
.h1,
h1 {
  font-size: 60px;
  line-height: 1.167;
}
.h2,
h2 {
  font-size: 44px;
  line-height: 1.208;
}
.h3,
h3 {
  font-size: 36px;
  line-height: 1.278;
}
@media (max-width: 1399px) {.h1,
  h1 {
    font-size: 48px;
  }}@media (max-width: 1199px) {.h1,
  h1 {
    font-size: 40px;
  }}@media (max-width: 1199px) {.h3,
  h3 {
    font-size: 30px;
  }}@media (max-width: 767px) {.h1,
  h1 {
    font-size: 40px;
  }}@media (max-width: 767px) {.h3,
  h3 {
    font-size: 26px;
  }}@media (max-width: 575px) {.h1,
  h1 {
    font-size: 34px;
    line-height: 1.3;
  }}.page-links,
.clearfix {
  clear: both;
}
.page--item {
  margin-bottom: 30px;
}
.page--item p {
  line-height: 1.8;
}
@media (max-width: 1399px) {:root {
    --main-container: 1250px;
  }}@media only screen and (min-width: 1300px) {.container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: calc(var(--main-container) + var(--container-gutters));
    padding-left: calc(var(--container-gutters) / 2);
    padding-right: calc(var(--container-gutters) / 2);
  }}@media (min-width: 1700px) {
  .th-container {
    --main-container: 1450px;
    -webkit-transform: translateX(-115px);
        -ms-transform: translateX(-115px);
            transform: translateX(-115px);
  }
  .th-container3 {
    --main-container: 1710px;
  }
}
@media (min-width: 1600px) {
  .th-container {
    --main-container: 1350px;
    -webkit-transform: translateX(-65px);
        -ms-transform: translateX(-65px);
            transform: translateX(-65px);
  }
  .th-container2 {
    --main-container: 1680px;
  }
}
select,
.form-control,
.form-select,
textarea,
input {
  height: 55px;
  padding: 0 25px 0 25px;
  padding-right: 45px;
  border: 1px solid transparent;
  color: var(--body-color);
  background-color: var(--smoke-color);
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  font-family: var(--body-font);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
select::-webkit-input-placeholder,
.form-control::-webkit-input-placeholder,
.form-select::-webkit-input-placeholder,
textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder {
  color: var(--body-color);
}
select::-webkit-input-placeholder, .form-control::-webkit-input-placeholder, .form-select::-webkit-input-placeholder, textarea::-webkit-input-placeholder, input::-webkit-input-placeholder {
  color: var(--body-color);
}
select::placeholder,
.form-control::placeholder,
.form-select::placeholder,
textarea::placeholder,
input::placeholder {
  color: var(--body-color);
}
.form-group {
  margin-bottom: var(--bs-gutter-x);
  position: relative;
  display: inline-block;
  width: 100%;
}
.form-group > i {
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 19px;
  font-size: 16px;
  color: #93a5be;
}
.th-menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999999;
  width: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all ease 0.8s;
  transition: all ease 0.8s;
  opacity: 0;
  visibility: hidden;
}
.th-menu-wrapper .mobile-logo {
  padding-bottom: 30px;
  padding-top: 40px;
  display: block;
  text-align: center;
  background-color: rgba(28, 185, 200, 0.1);
}
.th-menu-wrapper .th-menu-toggle {
  border: none;
  font-size: 22px;
  position: absolute;
  right: -16.5px;
  top: 25px;
  padding: 0;
  line-height: 1;
  width: 33px;
  height: 33px;
  line-height: 35px;
  font-size: 18px;
  z-index: 1;
  color: var(--white-color);
  background-color: var(--theme-color);
  border-radius: 50%;
}
.th-menu-wrapper .th-menu-area {
  width: 100%;
  max-width: 310px;
  background-color: #fff;
  border-right: 3px solid var(--theme-color);
  height: 100%;
  position: relative;
  left: -110%;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all ease 1s;
  transition: all ease 1s;
  z-index: 1;
}
.th-mobile-menu {
  overflow-y: scroll;
  max-height: calc(100vh - 200px);
  padding-bottom: 40px;
  margin-top: 33px;
  text-align: left;
}
.th-mobile-menu ul {
  margin: 0;
  padding: 0 0;
}
.th-mobile-menu ul li {
  border-bottom: 1px solid #fdedf1;
  list-style-type: none;
}
.th-mobile-menu ul li a {
  display: block;
  position: relative;
  padding: 12px 0;
  line-height: 1.4;
  font-size: 16px;
  text-transform: capitalize;
  color: var(--title-color);
  padding-left: 18px;
}
.th-mobile-menu ul li a:before {
  content: '\\203A';
  font-family: inherit;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 12px;
  margin-right: 10px;
  display: inline-block;
}
.th-mobile-menu ul .th-item-has-children > a .th-mean-expand {
  position: absolute;
  right: 0;
  top: 50%;
  font-weight: 400;
  font-size: 12px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-top: -12.5px;
  display: inline-block;
  text-align: center;
  background-color: var(--smoke-color);
  color: var(--title-color);
  box-shadow: 0 0 20px -8px rgba(173, 136, 88, 0.5);
  border-radius: 50%;
}
.th-mobile-menu ul .th-item-has-children > a .th-mean-expand:before {
  content: '+';
  font-family: inherit;
  font-weight: 700;
}
.th-mobile-menu ul .th-item-has-children > a:after {
  content: "+";
  font-family: inherit;
  font-weight: 700;
  width: 22px;
  height: 22px;
  line-height: 22px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  border-radius: 50px;
  background-color: var(--smoke-color);
  float: right;
  margin-top: 1px;
}
.th-mobile-menu > ul {
  padding: 0 40px;
}
.th-mobile-menu > ul > li:last-child {
  border-bottom: none;
}
.th-menu-toggle {
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 20px;
  border: none;
  background-color: var(--theme-color);
  color: var(--white-color);
  display: inline-block;
  border-radius: 5px;
}
.preloader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--title-color);
}
.preloader .th-btn {
  padding: 15px 20px;
  border-radius: 0;
  font-size: 14px;
}
.preloader-inner {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
}
.preloader-inner img {
  display: block;
  margin: 0 auto 10px auto;
}
@-webkit-keyframes rotationBack {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}
@keyframes rotationBack {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}
.th-btn {
  position: relative;
  z-index: 2;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  text-align: center;
  background-color: var(--theme-color);
  color: var(--white-color);
  font-family: var(--title-font);
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding: 20.5px 29px;
  box-shadow: 0px 6px 16px rgba(13, 94, 244, 0.24);
  border-radius: 5px;
}
.th-btn:before {
  content: "";
  position: absolute;
  height: 0%;
  left: 50%;
  top: 50%;
  width: 600%;
  background-color: var(--title-color);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(60deg);
      -ms-transform: translateX(-50%) translateY(-50%) rotate(60deg);
          transform: translateX(-50%) translateY(-50%) rotate(60deg);
  z-index: -1;
  -webkit-transition: 0.7s ease;
  transition: 0.7s ease;
}
.th-btn:hover, .th-btn.active {
  color: var(--white-color);
}
.th-btn:hover::before, .th-btn.active::before {
  height: 560%;
}
.th-btn.style3 {
  box-shadow: none;
}
.th-btn.style3:hover {
  color: var(--title-color);
}
.th-btn.style3:before {
  background-color: var(--white-color);
}
.scroll-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  z-index: 10000;
  opacity: 1;
  visibility: hidden;
  -webkit-transform: translateY(45px);
      -ms-transform: translateY(45px);
          transform: translateY(45px);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.scroll-top:after {
  content: "\\f062";
  font-family: var(--icon-font);
  position: absolute;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: var(--theme-color);
  left: 0;
  top: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: block;
  z-index: 1;
  border: 2px solid var(--theme-color);
  box-shadow: none;
  border-radius: 50%;
}
.scroll-top svg {
  color: var(--theme-color);
  border-radius: 50%;
  background: var(--white-color);
}
.scroll-top svg path {
  fill: none;
}
.scroll-top .progress-circle path {
  stroke: var(--theme-color);
  stroke-width: 20px;
  box-sizing: border-box;
  -webkit-transition: all 400ms linear;
  transition: all 400ms linear;
}
.sec-title {
  margin-bottom: calc(var(--section-title-space) - 12px);
  margin-top: -0.23em;
}
.sub-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--theme-color);
  font-family: var(--title-font);
  text-transform: uppercase;
  margin-top: -0.41em;
  margin-bottom: 22px;
  display: block;
}
.title-area {
  margin-bottom: calc(var(--section-title-space) - 12px);
  position: relative;
  z-index: 2;
}
.title-area .sec-title {
  margin-bottom: 15px;
}
.z-index-common {
  position: relative;
  z-index: 3;
}
.background-image,
[data-bg-src] {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.text-theme {
  color: var(--theme-color) !important;
}
[data-overlay] {
  position: relative;
  z-index: 2;
}
@-webkit-keyframes ripple {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes ripple {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    opacity: 0;
  }
}
@-webkit-keyframes movingX {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes movingX {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
.jump {
  -webkit-animation: jumpAni 7s linear infinite;
          animation: jumpAni 7s linear infinite;
}
@-webkit-keyframes jumpAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes jumpAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes jumpReverseAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes jumpReverseAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
.spin {
  -webkit-animation: spin 15s linear infinite;
          animation: spin 15s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
}
@-webkit-keyframes animate-positive {
  0% {
    width: 0;
  }
}
@keyframes animate-positive {
  0% {
    width: 0;
  }
}
@-webkit-keyframes slideinup {
  0% {
    opacity: 0;
    -webkit-transform: translateY(70px);
            transform: translateY(70px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes slideinup {
  0% {
    opacity: 0;
    -webkit-transform: translateY(70px);
            transform: translateY(70px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes slideinright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(70px);
            transform: translateX(70px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slideinright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(70px);
            transform: translateX(70px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@-webkit-keyframes slideindown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-70px);
            transform: translateY(-70px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes slideindown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-70px);
            transform: translateY(-70px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes slideinleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-70px);
            transform: translateX(-70px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slideinleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-70px);
            transform: translateX(-70px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@-webkit-keyframes slidebottomright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px) translateY(100px);
            transform: translateX(100px) translateY(100px);
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
}
@keyframes slidebottomright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px) translateY(100px);
            transform: translateX(100px) translateY(100px);
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
}
@-webkit-keyframes slidetopleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px) translateY(-100px);
            transform: translateX(-100px) translateY(-100px);
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
}
@keyframes slidetopleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px) translateY(-100px);
            transform: translateX(-100px) translateY(-100px);
  }
  100% {
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
}
@-webkit-keyframes scalein {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
            transform: scale(0.3);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scalein {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
            transform: scale(0.3);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@-webkit-keyframes rollinleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
            transform: translateX(-100%) rotate(-120deg);
  }
  to {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
  }
}
@keyframes rollinleft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
            transform: translateX(-100%) rotate(-120deg);
  }
  to {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
  }
}
@-webkit-keyframes rollinright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
            transform: translateX(100%) rotate(120deg);
  }
  to {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
  }
}
@keyframes rollinright {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
            transform: translateX(100%) rotate(120deg);
  }
  to {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
  }
}
@-webkit-keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
@-webkit-keyframes jumpIcon {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes jumpIcon {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes lineMove {
  0% {
    left: 0px;
  }
  50% {
    left: calc(100% - 50px);
  }
  100% {
    left: 0px;
  }
}
@keyframes lineMove {
  0% {
    left: 0px;
  }
  50% {
    left: calc(100% - 50px);
  }
  100% {
    left: 0px;
  }
}
.th-header {
  position: relative;
  z-index: 1100;
}
.sticky-wrapper {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1200;
}

/* CollegeShine scroll header:
   The contact/social bar remains in normal flow and scrolls away.
   JavaScript adds .js-pinned to the main navigation after the top bar
   leaves the viewport, making the navigation genuinely fixed. */
.th-header .sticky-wrapper {
  position: relative !important;
  top: auto !important;
  z-index: 1200 !important;
  width: 100%;
  background: #fff;
}

.th-header .sticky-wrapper.js-pinned {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 99999 !important;
  background: #fff !important;
  box-shadow: 0 4px 18px rgba(8, 28, 54, 0.14);
  animation: csNavPin .18s ease-out;
}

.th-header .sticky-wrapper .menu-area {
  box-shadow: 0 4px 18px rgba(8, 28, 54, 0.08);
}

@keyframes csNavPin {
  from { transform: translateY(-8px); opacity: .96; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .th-header .sticky-wrapper,
  .th-header .sticky-wrapper.js-pinned {
    animation: none !important;
    transition: none !important;
  }
}
@-webkit-keyframes stickyAni {
  0% {
    -webkit-transform: translate3d(0, -40px, 0) scaleY(0.8);
            transform: translate3d(0, -40px, 0) scaleY(0.8);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scaleY(1);
            transform: translate3d(0, 0, 0) scaleY(1);
    opacity: 1;
  }
}
@keyframes stickyAni {
  0% {
    -webkit-transform: translate3d(0, -40px, 0) scaleY(0.8);
            transform: translate3d(0, -40px, 0) scaleY(0.8);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scaleY(1);
            transform: translate3d(0, 0, 0) scaleY(1);
    opacity: 1;
  }
}
.main-menu a {
  display: block;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  color: var(--title-color);
  text-transform: uppercase;
}
.main-menu > ul > li {
  margin: 0 13px;
}
.main-menu > ul > li > a {
  padding: 36.5px 0;
}
.main-menu ul {
  margin: 0;
  padding: 0;
}
.main-menu ul li {
  list-style-type: none;
  display: inline-block;
  position: relative;
}
.main-menu ul li.menu-item-has-children > a:after {
  content: "\\f107";
  position: relative;
  font-family: var(--icon-font);
  margin-left: 5px;
  top: 1px;
}
.main-menu ul li:last-child {
  margin-right: 0 !important;
}
.main-menu ul li:first-child {
  margin-left: 0 !important;
}
.main-menu ul.sub-menu,
.main-menu ul.mega-menu {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background-color: var(--white-color);
  visibility: hidden;
  min-width: 190px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  padding: 7px;
  left: -14px;
  opacity: 0;
  z-index: -1;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  -webkit-transform: scaleY(0);
      -ms-transform: scaleY(0);
          transform: scaleY(0);
  -webkit-transform-origin: top center;
      -ms-transform-origin: top center;
          transform-origin: top center;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.main-menu ul.sub-menu a,
.main-menu ul.mega-menu a {
  font-size: 16px;
  line-height: 30px;
}
.main-menu ul.sub-menu {
  padding: 18px 20px;
  left: -27px;
}
.main-menu ul.sub-menu li {
  display: block;
  margin: 0 0;
  padding: 0px 9px;
}
.main-menu ul.sub-menu li a {
  position: relative;
  padding-left: 23px;
  text-transform: capitalize;
}
.main-menu ul.sub-menu li a:before {
  content: "\\f02d";
  position: absolute;
  top: 8px;
  left: 0;
  font-family: var(--icon-font);
  width: 11px;
  height: 11px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  font-size: 0.9em;
  line-height: 1;
  color: var(--theme-color);
  font-weight: 700;
}
.main-menu.hide-icon ul.sub-menu li a {
  padding-left: 0;
}
.main-menu.hide-icon ul.sub-menu li a:before {
  display: none;
}
.category-menu-wrap {
  position: relative;
  height: 100%;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid #D0DBE9;
  border-radius: 5px;
}
.header-button {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 15px;
  margin-left: 15px;
}
.header-links ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.header-links li {
  display: inline-block;
  position: relative;
  font-size: 16px;
  font-weight: 400;
}
.header-links li:not(:last-child) {
  padding: 0 20px 0 0;
  margin: 0 17px 0 0;
}
.header-links li:not(:last-child):before {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  width: 1px;
  height: 16px;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.header-links li > i {
  margin-right: 10px;
}
.header-links li,
.header-links span,
.header-links p,
.header-links a {
  font-family: var(--body-font);
  color: var(--body-color);
}
.header-links i {
  color: var(--body-color);
}
.header-social a {
  font-size: 14px;
  display: inline-block;
  color: var(--body-color);
  margin: 0 15px 0 0;
}
.header-social a:last-child {
  margin-right: 0;
}
.header-logo {
  padding-top: 20px;
  padding-bottom: 20px;
}
.header-layout-default .header-top {
  --body-color: #fff;
  background-color: var(--theme-color);
  padding: 9px 88px 9px 300px;
  position: relative;
  z-index: 3;
  /* Hight Resoulation devices */
  /* Medium Large devices */
}
@media (min-width: 1922px) {
  .header-layout-default .header-top {
    padding: 9px 188px 9px 400px;
  }
}
@media (max-width: 1600px) {.header-layout-default .header-top {
    padding: 9px 30px 9px 265px;
  }}@media (max-width: 1299px) {.header-layout-default .header-top {
    padding: 9px 30px;
  }}.header-layout-default .header-top .header-links.header-right li:first-child {
  padding-right: 60px;
  /* Hight Resoulation devices */
}
@media (min-width: 1922px) {
  .header-layout-default .header-top .header-links.header-right li:first-child {
    padding-right: 0;
  }
}
@media (max-width: 1355px) {.header-layout-default .header-top .header-links.header-right li:first-child {
    padding-right: 0px;
  }}.header-layout-default .header-top .header-links.header-right li {
  /* Medium devices */
}
.header-layout-default .header-top .header-links.header-right li a i {
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
@media (max-width: 991px) {.header-layout-default .header-top .header-links.header-right li {
    display: none;
  }}@media (max-width: 991px) {.header-layout-default .header-top .header-links.header-right li:first-child {
    display: block;
    margin: 0;
    padding: 0;
  }}.header-layout-default .header-top:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(100% - 267px);
  border-radius: 0 0 50px 0;
  background: var(--title-color);
  z-index: -1;
  /* Hight Resoulation devices */
  /* Extra large devices */
  /* Medium Large devices */
  /* Medium devices */
}
@media (min-width: 1922px) {
  .header-layout-default .header-top:after {
    width: calc(100% - 757px);
  }
}
@media (max-width: 1600px) {.header-layout-default .header-top:after {
    width: calc(100% - 207px);
  }}@media (max-width: 1500px) {.header-layout-default .header-top:after {
    width: calc(100% - 205px);
  }}@media (max-width: 1399px) {.header-layout-default .header-top:after {
    width: calc(100% - 220px);
  }}@media (max-width: 1355px) {.header-layout-default .header-top:after {
    width: 100%;
    border-radius: 0;
  }}@media (max-width: 991px) {.header-layout-default .header-top:after {
    width: 100%;
    border-radius: 0;
  }}.header-layout-default .menu-area {
  background-color: var(--white-color);
  position: relative;
  z-index: 2;
  padding: 0 88px 0 30px;
  /* Hight Resoulation devices */
  /* Extra small devices */
}
@media (min-width: 1922px) {
  .header-layout-default .menu-area {
    padding: 0 188px 0 130px;
  }
}
@media (max-width: 1600px) {.header-layout-default .menu-area {
    padding: 0 30px 0 10px;
  }}@media (max-width: 575px) {.header-layout-default .menu-area {
    padding: 0;
  }}.header-layout-default .menu-area .header-logo {
  margin-top: -29px;
  /* Medium Large devices */
}
@media (max-width: 1299px) {.header-layout-default .menu-area .header-logo {
    margin-top: 0;
  }}.header-layout-default .menu-area .main-menu {
  margin-left: 60px;
}
@media (max-width: 1600px) {.header-layout-default .menu-area .main-menu {
    margin-left: 50px;
  }}.header-layout-default .menu-area .logo-bg {
  position: absolute;
  height: 100%;
  width: 270px;
  border-radius: 0 0px 0 0;
  background: var(--theme-color);
  bottom: 0;
  left: 0;
  z-index: -1;
  /* Hight Resoulation devices */
  /* Extra small devices */
}
@media (min-width: 1922px) {
  .header-layout-default .menu-area .logo-bg {
    width: 370px;
  }
}
@media (max-width: 1600px) {.header-layout-default .menu-area .logo-bg {
    width: 240px;
  }}@media (max-width: 575px) {.header-layout-default .menu-area .logo-bg {
    width: 220px;
  }}.header-layout-default .main-menu > ul > li > a {
  padding: 31.5px 0;
}
.header-layout-default .header-button {
  margin-left: 0;
}
@media (min-width: 1921px) and (max-width: 1963px) {
  .header-layout-default .menu-expand {
    display: none;
  }
}
.header-layout-default .category-menu-wrap {
  /* Extra large devices */
}
@media (max-width: 1510px) {.header-layout-default .category-menu-wrap {
    display: none;
  }}@media (max-width: 1500px) {.header-layout-default .category-menu-wrap {
    display: none;
  }}.header-layout-default .logo-bg-half {
  position: absolute;
  height: 29px;
  width: 270px;
  border-radius: 0 50px 0 0;
  background: var(--theme-color);
  top: 16px;
  left: 0;
  z-index: 4;
  /* Hight Resoulation devices */
  /* Medium Large devices */
}
@media (min-width: 1922px) {
  .header-layout-default .logo-bg-half {
    width: 370px;
  }
}
@media (max-width: 1600px) {.header-layout-default .logo-bg-half {
    width: 240px;
  }}@media (max-width: 1299px) {.header-layout-default .logo-bg-half {
    display: none;
  }}@media (min-width: 1922px) {
  .admin-bar .header-layout-default .header-top:after {
    width: calc(100% - 327px);
  }
}
@media (min-width: 1921px) and (max-width: 2520px) {
  .header-layout1 .header-top .header-links.header-right li:first-child {
    padding-right: 0;
  }
}
@media (min-width: 1601px) and (max-width: 1870px) {
  .header-layout1 .header-top .header-links.header-right li:first-child {
    padding-right: 0;
  }
}
@media (min-width: 1501px) and (max-width: 1550px) {
  .header-layout1 .header-top .header-links.header-right li:first-child {
    padding-right: 0;
  }
}
@media (min-width: 1055px) and (max-width: 1199px) {
  .header-layout1 .header-top .header-links.header-right li:first-child {
    padding-right: 0;
  }
}
@media (min-width: 1922px) {
  .header-layout1 .header-top:after {
    width: calc(100% - 757px);
  }
}
@media (min-width: 1921px) and (max-width: 2520px) {
  .header-layout1 .header-top:after {
    width: 100%;
    border-radius: 0;
  }
}
@media (min-width: 1601px) and (max-width: 1870px) {
  .header-layout1 .header-top:after {
    width: 100%;
    border-radius: 0;
  }
}
@media (min-width: 1501px) and (max-width: 1550px) {
  .header-layout1 .header-top:after {
    width: 100%;
    border-radius: 0;
  }
}
@media (min-width: 1055px) and (max-width: 1199px) {
  .header-layout1 .header-top:after {
    width: 100%;
    border-radius: 0;
  }
}
@media (min-width: 1922px) {
  .header-layout1 .menu-area:after {
    width: calc(100% - 500px);
  }
}
@media (min-width: 1921px) and (max-width: 2520px) {
  .header-layout1 .menu-area:after {
    width: 100%;
  }
}
@media (min-width: 1601px) and (max-width: 1870px) {
  .header-layout1 .menu-area:after {
    width: 100%;
  }
}
@media (min-width: 1501px) and (max-width: 1550px) {
  .header-layout1 .menu-area:after {
    width: 100%;
  }
}
@media (min-width: 1922px) {
  .admin-bar .header-layout1 .header-top:after {
    width: calc(100% - 727px);
  }
}
@media (min-width: 1922px) {
  .header-layout3 .logo-bg {
    width: 720px;
    background-position: 0 -18px;
  }
}
@media (min-width: 2400px) and (max-width: 2522px) {
  .header-layout3 .logo-bg {
    width: 660px;
    background-position: right -12px;
  }
}
@media (min-width: 2380px) and (max-width: 2399px) {
  .header-layout3 .logo-bg {
    width: 640px;
    background-position: right -8px;
  }
}
@media (min-width: 2340px) and (max-width: 2379px) {
  .header-layout3 .logo-bg {
    width: 600px;
    background-position: right -8px;
  }
}
@media (min-width: 2300px) and (max-width: 2339px) {
  .header-layout3 .logo-bg {
    width: 540px;
    background-position: right -8px;
  }
}
@media (min-width: 2280px) and (max-width: 2299px) {
  .header-layout3 .logo-bg {
    background-position: -122px -16px;
  }
}
@media (min-width: 2230px) and (max-width: 2279px) {
  .header-layout3 .logo-bg {
    background-position: -150px -18px;
  }
}
@media (min-width: 2150px) and (max-width: 2229px) {
  .header-layout3 .logo-bg {
    background-position: -190px -18px;
  }
}
@media (min-width: 2090px) and (max-width: 2149px) {
  .header-layout3 .logo-bg {
    background-position: -220px -18px;
  }
}
@media (min-width: 2000px) and (max-width: 2089px) {
  .header-layout3 .logo-bg {
    background-position: -220px -18px;
  }
}
@media (min-width: 1970px) and (max-width: 1999px) {
  .header-layout3 .logo-bg {
    background-position: -120px -6px;
    width: 500px;
  }
}
@media (min-width: 1940px) and (max-width: 1969px) {
  .header-layout3 .logo-bg {
    background-position: -180px -10px;
    width: 600px;
  }
}
@media (min-width: 1922px) and (max-width: 1939px) {
  .header-layout3 .logo-bg {
    background-position: -210px -10px;
    width: 600px;
  }
}
@media (min-width: 1800px) and (max-width: 1879px) {
  .header-layout3 .logo-bg {
    background: var(--theme-color);
    width: 400px;
  }
}
@media (min-width: 1780px) and (max-width: 1799px) {
  .header-layout3 .logo-bg {
    background-position: -50px 0px;
  }
}
@media (min-width: 1720px) and (max-width: 1779px) {
  .header-layout3 .logo-bg {
    background-position: -80px 0px;
  }
}
@media (min-width: 1700px) and (max-width: 1719px) {
  .header-layout3 .logo-bg {
    background-position: -100px 0px;
  }
}
@media (min-width: 1601px) and (max-width: 1699px) {
  .header-layout3 .logo-bg {
    background-position: -100px 0px;
  }
}
@media (min-width: 1550px) and (max-width: 1599px) {
  .header-layout3 .logo-bg {
    width: 410px;
  }
}
@media (min-width: 1501px) and (max-width: 1549px) {
  .header-layout3 .logo-bg {
    width: 400px;
  }
}
@media (min-width: 1270px) and (max-width: 1299px) {
  .header-layout3 .logo-bg {
    width: 300px;
  }
}
@media (min-width: 1100px) and (max-width: 1199px) {
  .header-layout3 .logo-bg {
    width: 360px;
  }
}
@media (min-width: 1601px) and (max-width: 1638px) {
  .header-layout3 .category-menu-wrap {
    display: none;
  }
}
@media (min-width: 1922px) {
  .header-layout3 .menu-area:after {
    left: -110px;
    width: calc(100% + 110px);
  }
}
@media (min-width: 2460px) and (max-width: 2523px) {
  .header-layout3 .menu-area:after {
    left: -100px;
    width: calc(100% + 100px);
  }
}
@media (min-width: 2300px) and (max-width: 2459px) {
  .header-layout3 .menu-area:after {
    left: -70px;
    width: calc(100% + 70px);
  }
}
@media (min-width: 1922px) and (max-width: 2089px) {
  .header-layout3 .menu-area:after {
    left: -50px;
    width: calc(100% + 50px);
  }
}
@media (min-width: 1922px) {
  .header-layout3 .menu-area {
    margin: 0;
  }
}
@media (min-width: 1501px) and (max-width: 1599px) {
  .header-layout3 .header-button .icon-btn:nth-child(1),
  .header-layout3 .header-button .icon-btn:nth-child(2) {
    display: none;
  }
}
@media (min-width: 1922px) {
  .header-layout5 .menu-area .container {
    margin-right: auto;
  }
}
@media (min-width: 1922px) {
  .header-layout6 {
    --main-container: 1440px;
  }
  .header-layout6 .logo-shape {
    width: 34%;
  }
}
@media (min-width: 1922px) {
  .header-layout8::before {
    width: 30%;
  }
}
@media (min-width: 1700px) {
  .header-layout13 {
    --main-container: 1620px;
  }
}
@media (min-width: 1922px) {
  .header-layout14 .logo-bg {
    width: 34%;
  }
}
.breadcumb-wrapper {
  background-color: var(--title-color);
  padding: 155px 0;
  text-align: center;
  overflow: hidden;
}
@media (max-width: 1199px) {.breadcumb-wrapper {
    padding: 120px 0;
  }}@media (max-width: 991px) {.breadcumb-wrapper {
    padding: 100px 0;
  }}@media (max-width: 767px) {.breadcumb-wrapper {
    padding: 80px 0;
  }}.th-hero-wrapper {
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.hero-shape {
  position: absolute;
}
@-webkit-keyframes heroripple {
  0% {
    -webkit-transform: translate3d(-50%, 50%, 0);
            transform: translate3d(-50%, 50%, 0);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: translate3d(-50%, 50%, 0);
            transform: translate3d(-50%, 50%, 0);
    opacity: 0;
    width: 310px;
    height: 310px;
  }
}
@keyframes heroripple {
  0% {
    -webkit-transform: translate3d(-50%, 50%, 0);
            transform: translate3d(-50%, 50%, 0);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: translate3d(-50%, 50%, 0);
            transform: translate3d(-50%, 50%, 0);
    opacity: 0;
    width: 310px;
    height: 310px;
  }
}
.th-hero-bg {
  position: absolute;
  inset: 0;
}
.hero-subtitle {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.hero-text {
  font-size: 18px;
  margin-bottom: 35px;
}
@media (min-width: 1922px) {
  .hero-slider-1 .slick-dots {
    right: 30.5%;
  }
}
.hero-4 {
  overflow: hidden;
  background-color: #EAF2FD;
}
.hero-4 .shape1 {
  top: 70px;
  right: 170px;
  z-index: 3;
  /* Large devices */
  /* Extra small devices */
}
@media (max-width: 1199px) {.hero-4 .shape1 {
    top: 50px;
    right: 100px;
  }}@media (max-width: 575px) {.hero-4 .shape1 {
    display: none;
  }}.hero-4 .hero-img4 {
  margin-right: -165px;
  text-align: end;
  position: relative;
  display: inline-block;
  /* Extra large devices */
  /* Medium Large devices */
  /* Medium Large devices */
  /* Medium devices */
}
.hero-4 .hero-img4 .img2 {
  position: absolute;
  left: -30px;
  bottom: 100px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
}
@media (max-width: 1600px) {.hero-4 .hero-img4 {
    margin-right: 0;
    height: 100%;
  }}@media (max-width: 1600px) {.hero-4 .hero-img4 img {
    height: 100%;
    object-fit: cover;
  }}@media (max-width: 1500px) {.hero-4 .hero-img4 {
    margin-right: 75px;
  }}@media (max-width: 1399px) {.hero-4 .hero-img4 {
    margin-right: 50px;
  }}@media (max-width: 1299px) {.hero-4 .hero-img4 {
    margin-left: 30px;
  }}@media (max-width: 991px) {.hero-4 .hero-img4 {
    display: none;
  }}.hero-4 .hero-social {
  position: absolute;
  z-index: 3;
  top: 50%;
  right: -183px;
  -webkit-transform: translate(0, -50%) rotate(-90deg);
      -ms-transform: translate(0, -50%) rotate(-90deg);
          transform: translate(0, -50%) rotate(-90deg);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  gap: 52px;
  /* Medium Large devices */
  /* Small devices */
}
.hero-4 .hero-social a {
  display: inline-block;
  color: var(--title-color);
  font-weight: 500;
  font-size: 16px;
  font-family: var(--title-font);
  text-transform: uppercase;
  position: relative;
}
.hero-4 .hero-social a:after {
  content: '';
  position: absolute;
  left: -12px;
  top: 50%;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
          transform: translate(0, -50%);
  background: var(--theme-color);
}
@media (max-width: 1600px) {.hero-4 .hero-social {
    right: -180px;
  }}@media (max-width: 1299px) {.hero-4 .hero-social {
    right: -185px;
  }}@media (max-width: 767px) {.hero-4 .hero-social {
    display: none;
  }}.hero-style4 {
  padding: 210px 0;
  /* Medium Large devices */
  /* Large devices */
  /* Small devices */
  /* Extra small devices */
}
.hero-style4 .hero-subtitle {
  color: var(--theme-color);
  margin-bottom: 2px;
  font-size: 44px;
  font-weight: 400;
  text-transform: capitalize;
  line-height: normal;
  margin-top: -0.3em;
  /* Medium Large devices */
  /* Medium Large devices */
  /* Large devices */
  /* Small devices */
  /* Extra small devices */
}
@media (max-width: 1399px) {.hero-style4 .hero-subtitle {
    font-size: 38px;
  }}@media (max-width: 1299px) {.hero-style4 .hero-subtitle {
    font-size: 34px;
  }}@media (max-width: 1199px) {.hero-style4 .hero-subtitle {
    font-size: 30px;
    margin-bottom: 8px;
  }}@media (max-width: 767px) {.hero-style4 .hero-subtitle {
    font-size: 24px;
  }}@media (max-width: 575px) {.hero-style4 .hero-subtitle {
    font-size: 20px;
  }}.hero-style4 .hero-title {
  margin-bottom: 15px;
  font-size: 74px;
  /* Medium Large devices */
  /* Medium Large devices */
  /* Large devices */
  /* Small devices */
  /* Extra small devices */
  /* Extra small devices */
}
@media (max-width: 1399px) {.hero-style4 .hero-title {
    font-size: 68px;
  }}@media (max-width: 1299px) {.hero-style4 .hero-title {
    font-size: 60px;
  }}@media (max-width: 1199px) {.hero-style4 .hero-title {
    font-size: 54px;
  }}@media (max-width: 767px) {.hero-style4 .hero-title {
    font-size: 46px;
  }}@media (max-width: 575px) {.hero-style4 .hero-title {
    font-size: 40px;
  }}.hero-style4 .hero-text {
  max-width: 597px;
  margin-bottom: 30px;
  /* Large devices */
}
@media (max-width: 1199px) {.hero-style4 .hero-text {
    font-size: 16px;
  }}.hero-style4 .search-form {
  position: relative;
  max-width: 597px;
}
.hero-style4 .search-form .form-group {
  margin-bottom: 0;
}
.hero-style4 .search-form .form-group input {
  border-radius: 5px;
  background: var(--white-color);
  box-shadow: 0px 7px 35px 0px #E8F2FD;
  height: 70px;
  padding: 0 200px 0 60px;
  /* Extra small devices */
}
@media (max-width: 575px) {.hero-style4 .search-form .form-group input {
    padding: 0 30px 0 60px;
  }}.hero-style4 .search-form .form-group i {
  position: absolute;
  left: 30px;
  top: 26px;
  right: auto;
}
.hero-style4 .search-form .th-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 18px 29px;
  /* Extra small devices */
}
@media (max-width: 575px) {.hero-style4 .search-form .th-btn {
    position: inherit;
    margin-top: 20px;
  }}@media (max-width: 1399px) {.hero-style4 {
    padding: 160px 0;
  }}@media (max-width: 1199px) {.hero-style4 {
    padding: 120px 0;
  }}@media (max-width: 767px) {.hero-style4 {
    text-align: center;
  }}@media (max-width: 575px) {.hero-style4 {
    padding: 100px 0;
  }}@media (min-width: 1922px) {
  .hero-8 .slick-dots {
    right: 20%;
  }
}
.popup-search-box {
  position: fixed;
  top: 0;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.95);
  height: 0;
  width: 0;
  overflow: hidden;
  z-index: 99999;
  opacity: 0;
  visibility: hidden;
  border-radius: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
.popup-search-box button.searchClose {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 40px;
  right: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--theme-color);
  background-color: transparent;
  font-size: 22px;
  border-radius: 50%;
  -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
          transform: rotate(0);
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
  color: var(--theme-color);
}
.popup-search-box form {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  padding-bottom: 40px;
  cursor: auto;
  width: 100%;
  max-width: 700px;
  -webkit-transform: translate(-50%, -50%) scale(0);
      -ms-transform: translate(-50%, -50%) scale(0);
          transform: translate(-50%, -50%) scale(0);
  -webkit-transition: -webkit-transform ease 0.4s;
  transition: -webkit-transform ease 0.4s;
  transition: transform ease 0.4s;
  transition: transform ease 0.4s, -webkit-transform ease 0.4s;
  /* Large devices */
}
@media (max-width: 1199px) {.popup-search-box form {
    max-width: 600px;
  }}.popup-search-box form input {
  font-size: 18px;
  height: 70px;
  width: 100%;
  border: 2px solid var(--theme-color);
  background-color: transparent;
  padding-left: 30px;
  color: #fff;
  border-radius: 50px;
}
.popup-search-box form input::-webkit-input-placeholder {
  color: #fff;
}
.popup-search-box form input::placeholder {
  color: #fff;
}
.popup-search-box form button {
  position: absolute;
  top: 0px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  right: 12px;
  color: var(--white-color);
  cursor: pointer;
  width: 70px;
  height: 70px;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
  -webkit-transform: scale(1.001);
      -ms-transform: scale(1.001);
          transform: scale(1.001);
}
@media (min-width: 1922px) {
  .img-box2 {
    margin-left: 300px;
  }
}
@media (min-width: 1922px) {
  .img-box2 .img1 img {
    border-radius: 10px;
  }
}
@media (min-width: 1922px) {
  .testi-slider-3 .slick-arrow {
    right: 590px;
  }
  .testi-slider-3 .slick-arrow.slick-prev {
    right: calc(590px + 80px);
  }
}
.category-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 5px;
  border-radius: 10px;
  border: 1px solid #D0DBE9;
  background: var(--white-color);
  border-radius: 10px;
  margin-left: 30px;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  position: relative;
  z-index: 2;
}
.category-list:before {
  content: '';
  background-color: var(--theme-color);
  width: 0;
  height: 0;
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transition: 0.4s linear;
  transition: 0.4s linear;
  z-index: -1;
}
.category-list_content {
  position: relative;
  overflow: hidden;
  padding: 26px 26px 26px 0;
  width: 100%;
  border-radius: 10px;
}
.category-list_title {
  font-size: 24px;
  font-weight: 500;
  margin-top: -0.23em;
  margin-bottom: 2px;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  /* Medium Large devices */
  /* Medium Large devices */
}
.category-list_title a {
  color: inherit;
  -webkit-transition: 0s;
  transition: 0s;
}
.th-btn {
  position: relative;
  z-index: 2;
  overflow: hidden;
  vertical-align: middle;
  display: inline-block;
  border: none;
  text-transform: uppercase;
  text-align: center;
  background-color: var(--theme-color);
  color: var(--white-color);
  font-family: var(--title-font);
  box-shadow: 0px 6px 16px rgba(13, 94, 244, 0.24);
  border-radius: 5px;
}
.service-card {
  border-radius: 10px;
  background: var(--white-color);
  box-shadow: 0px 6px 20px 0px rgba(40, 55, 82, 0.07);
  padding: 0 30px 30px;
  margin-top: 40px;
}
.service-card-icon {
  height: 85px;
  width: 80px;
  line-height: 80px;
  border-radius: 50%;
  background: var(--white-color);
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.13);
  text-align: center;
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: -15px;
  -webkit-transform: translate(0, -40px);
      -ms-transform: translate(0, -40px);
          transform: translate(0, -40px);
  border-top: 5px solid var(--theme-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.service-card-text {
  margin-bottom: 20px;
}
.service-card.style2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 30px;
  border-radius: 15px;
  background: var(--white-color);
  box-shadow: 0px 13px 30px 0px rgba(206, 211, 230, 0.3);
  padding: 40px;
  margin: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  /* Medium Large devices */
  /* Medium Large devices */
  /* Medium devices */
}
.service-card.style2 .service-card-icon {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  width: auto;
  height: auto;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  border: 0;
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
}
.service-card.style2 .service-card-icon img {
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.service-card.style2 .service-card-title {
  font-size: 20px;
  font-weight: 500;
  margin-top: -0.25em;
  margin-bottom: 12px;
}
.service-card.style2 .service-card-title a {
  color: var(--title-color);
}
.service-card.style2 .service-card-title a span {
  color: var(--theme-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.service-card.style2 .service-card-text {
  margin-bottom: -0.3em;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.service-card.style2.service-card2-active, .service-card.style2:hover {
  background: var(--theme-color);
}
.service-card.style2.service-card2-active .service-card-icon, .service-card.style2:hover .service-card-icon {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
.service-card.style2.service-card2-active .service-card-text,
.service-card.style2.service-card2-active .service-card-title a, .service-card.style2:hover .service-card-text,
.service-card.style2:hover .service-card-title a {
  color: var(--white-color);
}
@media (max-width: 1399px) {.service-card.style2 {
    padding: 30px;
  }}@media (max-width: 1299px) {.service-card.style2 {
    display: block;
    text-align: center;
  }}@media (max-width: 1299px) {.service-card.style2 .service-card-icon {
    margin-bottom: 25px;
  }}@media (max-width: 991px) {.service-card.style2 {
    box-shadow: 0px 0px 30px 0px rgba(206, 211, 230, 0.3);
  }}.mb-50 {
  margin-bottom: 50px;
}
.mr-5 {
  margin-right: 5px;
}
.space,
.space-top {
  padding-top: var(--section-space);
}
.space-extra,
.space-extra-bottom {
  padding-bottom: calc(var(--section-space) - 30px);
}
@media (max-width: 991px) {.space,
  .space-top {
    padding-top: var(--section-space-mobile);
  }}@media (max-width: 991px) {.space-extra,
  .space-extra-bottom {
    padding-bottom: calc(var(--section-space-mobile) - 30px);
  }}@media (min-width: 1922px) {
  [dir="rtl"] .header-layout-default .header-top {
    padding: 9px 400px 9px 188px;
  }
}
@media (min-width: 1922px) {
  [dir="rtl"] .header-layout-default .menu-area {
    padding: 0 130px 0 188px;
  }
}
@media (min-width: 1922px) {
  [dir="rtl"] .header-layout3 .menu-area:after {
    right: -110px;
    left: auto;
  }
}
@media (min-width: 1922px) {
  [dir="rtl"] .hero-slider-1 .slick-dots {
    left: 30.5%;
  }
}
@media (min-width: 1922px) {
  [dir="rtl"] .testi-slider-3 .slick-arrow {
    left: 590px;
  }
  [dir="rtl"] .testi-slider-3 .slick-arrow.slick-next {
    left: calc(590px + 80px);
  }
}
@-webkit-keyframes movingX-reverse {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes movingX-reverse {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@-webkit-keyframes headerShapeAnim {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top left 2000px;
  }
}
@keyframes headerShapeAnim {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top left 2000px;
  }
}
@-webkit-keyframes cloudAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes cloudAni {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: translateY(-300px);
            transform: translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}



:root {
			  --theme-color: rgb(13,49,110);
			}:root {
			  --theme-color2: rgb(0,124,86);
			}body{
    margin:0;
    padding:0;
}
.container{
  max-width: 1300px;
}
.preloader { background-color: #fff !important; }
.header-links ul li a.admission_enquiry { 
    border: 1px solid #fff; 
    padding: 10px; 
    background: #fff; 
    color: #000; 
    border-radius: 10px; 
}
body.home header.th-header + .breadcumb-wrapper {
  display: none !important;
}



header img {
    max-height: 190px !important;
    width: 150px !important;
}
.container,
.tutor-container,
.elementor-section.elementor-section-boxed > .elementor-container {
    max-width: 1600px !important;
    width: 100%;
}
html, body, p, span, li, div {
    font-family: 'Noto Sans Tamil', 'Inter', sans-serif !important;
    font-size: 18px !important;
    line-height: 1.6;
    font-weight: 400;
}
h1 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 36px;
    font-weight: 700 !important;
    line-height: 1.3;
}
h2 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 28px;
    font-weight: 600 !important;
    line-height: 1.35;
}
h3 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 22px;
    font-weight: 600 !important;
    line-height: 1.4;
}
.th-header .main-menu > ul > li > a {
    font-family:'Poppins', sans-serif !important;
    color: #03398f !important;
    font-weight: 700 !important;
}
.th-header .main-menu > ul > li.menu-item-has-children {
    position: static !important;
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu {
    position: absolute !important;
    left: 50% !important;
    transform: translateX(-50%) translateY(15px) !important;
    top: 100% !important;

    width: 90vw !important;
    max-width: 1400px !important;
    background: #ffffff !important;
    padding: 15px 5% !important;

    display: grid !important;
    gap: 10px 30px !important;

    border: 2px solid #222 !important;
    border-radius: 10px !important;
    box-shadow: 0 25px 60px rgba(0,0,0,0.25) !important;

    opacity: 0 !important;
    visibility: hidden !important;
    transition: all 0.35s ease !important;

    list-style: none !important;
    margin: 0 !important;
    z-index: 9999 !important;
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu {
    grid-template-columns: repeat(1, 1fr) !important;
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu:has(li:nth-child(6)) {
    grid-template-columns: repeat(2, 1fr) !important;
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu:has(li:nth-child(16)) {
    grid-template-columns: repeat(4, 1fr) !important;
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li {
    position: relative !important;
    padding: 10px 16px 10px 42px !important;
    margin-bottom: px !important;
    border-radius: 8px !important;
    background: #ffffff !important;
    border: 1px solid rgba(0,0,0,0.06) !important;
    transition: all 0.35s ease !important;
}
/* =========================================================
   FIX DROPDOWN ARROW
   ========================================================= */

.th-header .main-menu ul li.menu-item-has-children > a:after {

    /* Remove the text arrow */
    content: "" !important;

    /* Create a CSS chevron */
    display: inline-block !important;

    width: 7px !important;
    height: 7px !important;

    /* Space between menu text and arrow */
    margin-left: 8px !important;

    /* Chevron */
    border-right: 2px solid #03398f !important;
    border-bottom: 2px solid #03398f !important;

    /* Important: don't use relative positioning */
    position: static !important;

    /* Down arrow */
    transform: rotate(45deg) !important;

    /* Prevent theme/font interference */
    font-family: Arial, sans-serif !important;
    font-size: 0 !important;
    line-height: 0 !important;

    background: transparent !important;

    transition: transform 0.25s ease !important;
}


/* =========================================================
   ARROW WHEN DROPDOWN IS OPEN
   ========================================================= */

.th-header .main-menu ul li.menu-item-has-children:hover > a:after,
.th-header .main-menu ul li.menu-item-has-children.th-touch-active > a:after {

    transform: rotate(225deg) !important;
}
}
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li a {
    display: block !important;
    font-weight: 600 !important;
    font-size: 17px !important;
    color: navy !important;
    text-decoration: none !important;
    letter-spacing: 0.3px !important;
    transition: all 0.3s ease !important;
}



.header-logo .logo img{width:210px;}.header-logo .logo img{margin-top:20px;}.prebuilt .logo-bg-half, .prebuilt .logo-bg {--theme-color:transparent;}.prebuilt .main-menu > ul li a{color:#010b68;}



@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}
@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}



.ht_ctc_entry_animation{animation-duration:0.4s;animation-fill-mode:both;animation-delay:0s;animation-iteration-count:1;}
@keyframes ht_ctc_anim_corner {0% {opacity: 0;transform: scale(0);}100% {opacity: 1;transform: scale(1);}}
.ht_ctc_an_entry_corner {animation-name: ht_ctc_anim_corner;animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);transform-origin: bottom var(--side, right);}



@keyframes wc-skeleton-shimmer{to{transform:translateX(100%)}}
.screen-reader-text{clip:rect(1px,1px,1px,1px);word-wrap:normal!important;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;overflow-wrap:normal!important;padding:0;position:absolute!important;width:1px}
@keyframes wc-skeleton-shimmer{to{transform:translateX(100%)}}



img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */



	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */


/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */


:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:root :where(.wp-block-icon svg){width: 24px;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */


.mce-notification.mce-notification-error{display: none !important;}
:root{--tutor-color-primary:#3e64de;--tutor-color-primary-rgb:62, 100, 222;--tutor-color-primary-hover:#395bca;--tutor-color-primary-hover-rgb:57, 91, 202;--tutor-body-color:#212327;--tutor-body-color-rgb:33, 35, 39;--tutor-border-color:#cdcfd5;--tutor-border-color-rgb:205, 207, 213;--tutor-color-gray:#e3e5eb;--tutor-color-gray-rgb:227, 229, 235;}
/*# sourceURL=tutor-frontend-inline-css */


.woocommerce form .form-row .required { visibility: visible; }
/*# sourceURL=woocommerce-inline-inline-css */


:root {
			  --theme-color: rgb(13,49,110);
			}:root {
			  --theme-color2: rgb(0,124,86);
			}body{
    margin:0;
    padding:0;
}


.tutor-form-check-input {
    visibility: visible !important;
    opacity: 1 !important;
    display: inline-block !important;
    width: 20px !important;
    height: 20px !important;
    padding: 0 !important;
}
.tutor-form-check-input:focus {
    box-shadow: none !important;
}

.container{
  max-width: 1300px;
}

.preloader { background-color: #fff !important; }
.student-testimonial .slick-track .testi-box .testi-box_img img { width: 150px !important; }
.header-links ul li a.admission_enquiry { 
    border: 1px solid #fff; 
    padding: 10px; 
    background: #fff; 
    color: #000; 
    border-radius: 10px; 
}
.latest-news-category .recent-post-wrap .recent-post .recent-post-meta {
    font-size: 12px !important;
}
.home-admission-form .course-form .wpcf7-form-control-wrap select.wpcf7-form-control,
.home-admission-form .course-form .wpcf7-form-control-wrap select.wpcf7-form-control:focus {
    background-color: #00112a !important;
}
body.home header.th-header + .breadcumb-wrapper {
  display: none !important;
}

.college-filter-portfolio-section .tlp-portfolio-isotope .tlp-single-item.tlp-isotope-item .tlp-portfolio-item,
.tlp-portfolio-container.tlp-single-detail .tlp-portfolio-detail-wrap .tlp-portfolio-image .portfolio-feature-img {
    border: 2px solid #000 !important;
}

@media (max-width: 767px) {
    .admin-bar .th-header .sticky-wrapper.sticky {
        top: 0px !important;
    }
}
/*# sourceURL=edura-color-schemes-inline-css */


					.tlp-team .short-desc, .tlp-team .tlp-team-isotope .tlp-content, .tlp-team .button-group .selected, .tlp-team .layout1 .tlp-content, .tlp-team .tpl-social a, .tlp-team .tpl-social li a.fa,.tlp-portfolio button.selected,.tlp-portfolio .layoutisotope .tlp-portfolio-item .tlp-content,.tlp-portfolio button:hover {
						background: #0d316e ;
					}
					.tlp-portfolio .layoutisotope .tlp-overlay,.tlp-portfolio .layout1 .tlp-overlay,.tlp-portfolio .layout2 .tlp-overlay,.tlp-portfolio .layout3 .tlp-overlay, .tlp-portfolio .slider .tlp-overlay {
						background: rgba(13,49,110,0.8);
					}
									

				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			

header img {
    max-height: 190px !important;
    width: 150px !important;
}





/* ===== FORCE CENTER Tutor LMS Breadcrumb (FINAL FIX) ===== */

body .tutor-wrap,
body .tutor-container,
body .tutor-page-header,
body .tutor-course-details-page {
    text-align: center !important;
}

/* Main header wrapper */
body .tutor-page-header {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
}

/* Breadcrumb block */
body .tutor-breadcrumb,
body .tutor-breadcrumbs {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-wrap: wrap !important;
}

/* If breadcrumb is inside list */
body .tutor-breadcrumb ul,
body .tutor-breadcrumbs ul {
    display: flex !important;
    justify-content: center !important;
    padding: 0 !important;
    margin: 0 auto !important;
}
.tutor-course-header,
.entry-header,
.course-header {
    text-align: center !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
}
.page-id-17837 .container {
    max-width: 1200px !important;
}


/* Increase overall website container width */

.container,
.tutor-container,
.elementor-section.elementor-section-boxed > .elementor-container {
    max-width: 1600px !important;
    width: 100%;
}


/* ------------- */

/* ===== Layout ===== */
.a{
    display:flex;
    flex-wrap:wrap;
    gap:24px;
}

.b{
    width:calc(50% - 12px);
}

.c{
		background :bule !important;
    width:100%;
}

/* ===== Wrapper ===== */
.d{
    position:relative;
}

/* Important Fix for CF7 wrapper */
.d .wpcf7-form-control-wrap{
    display:block;
    position:relative;
}

/* ===== Inputs ===== */
.d .h{
    width:100%;
    padding:14px 16px 14px 45px;
    border:1px solid #dcdcdc;
    border-radius:8px;
    font-size:15px;
    transition:0.3s;
    background:#1a1a1a;        /* FIXED */
    color:#fff;                /* FIXED */
}

/* Placeholder color */
.d .h::placeholder{
    color:#bbb;
}

/* Focus */
.d .h:focus{
    border-color:#0066ff;
    box-shadow:0 0 0 3px rgba(0,102,255,0.15);
    outline:none;
    background:#1a1a1a;
    color:#fff;
}

/* ===== Icons ===== */
.d i{
    position:absolute;
    left:15px;
    top:50%;
    transform:translateY(-50%);
    color:#fff;
    font-size:14px;
    pointer-events:none;
    z-index:2;  /* FIX for error shifting */
}

/* Textarea Fix */
.e i{
    top:20px;
    transform:none;
}

/* ===== Select ===== */
.f select{
    appearance:none;
    background:#1a1a1a;
    color:#fff;
}

/* Arrow icon */
.f i{
    right:15px;
    left:auto;
}

/* ===== Error Fix ===== */
.wpcf7-not-valid{
    border-color:red !important;
}

.wpcf7-not-valid-tip{
    font-size:12px;
    margin-top:5px;
}

/* ===== Button ===== */
.g{
    width:100%;
    padding:15px;
    border:none;
    border-radius:8px;
    background:#033a91 !important;
    color:#fff;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    transition:0.3s;
}

.g:hover{
    background:#004bcc;
}

/* Responsive */
@media(max-width:768px){
    .b{
        width:100%;
    }
}


/* Change overall font family */
/* ===============================
   Noto Sans Tamil Font Face
================================= */
@font-face {
    font-display: swap;
    font-family: 'Noto Sans Tamil';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/notosanstamil/v27/ieVp2YdFI3GCY6SyQy1KfStzYKZgzN1z4LKDbeZce-048cFpwFNLIdyzxg.woff2) format('woff2');
}

/* ===============================
   Force Body Font
================================= */
html, body, p, span, li, div {
    font-family: 'Noto Sans Tamil', 'Inter', sans-serif !important;
    font-size: 18px !important;
    line-height: 1.6;
    font-weight: 400;
}

/* ===============================
   Force Headings
================================= */
h1 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 36px;
    font-weight: 700 !important;
    line-height: 1.3;
}

h2 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 28px;
    font-weight: 600 !important;
    line-height: 1.35;
}

h3 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 22px;
    font-weight: 600 !important;
    line-height: 1.4;
}

h4 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 18px;
    font-weight: 600 !important;
    line-height: 1.4;
}

h5 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 16px;
    font-weight: 600 !important;
    line-height: 1.5;
}

h6 {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif !important;
    font-size: 14px;
    font-weight: 600 !important;
    line-height: 1.5;
}


/* Import Poppins font */
400;500;600;700&display=swap');

/* =========================================
   INDUSTRY LEVEL BOXED MEGA MENU
========================================= */

/* Main Menu Text */
.th-header .main-menu > ul > li > a {
    font-family:'Poppins', sans-serif !important;
    color: #03398f !important;
    font-weight: 700 !important;
}

/* Parent LI */
.th-header .main-menu > ul > li.menu-item-has-children {
    position: static !important;
}

/* =========================================
   MEGA MENU CONTAINER
========================================= */

.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu {
    position: absolute !important;
    left: 50% !important;
    transform: translateX(-50%) translateY(15px) !important;
    top: 100% !important;

    width: 90vw !important;
    max-width: 1400px !important;
    background: #ffffff !important;
    padding: 15px 5% !important;

    display: grid !important;
    gap: 10px 30px !important;

    border: 2px solid #222 !important;
    border-radius: 10px !important;
    box-shadow: 0 25px 60px rgba(0,0,0,0.25) !important;

    opacity: 0 !important;
    visibility: hidden !important;
    transition: all 0.35s ease !important;

    list-style: none !important;
    margin: 0 !important;
    z-index: 9999 !important;
}

/* Show on Hover */
.th-header .main-menu > ul > li.menu-item-has-children:hover > ul.sub-menu {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) translateY(0) !important;
}

/* =========================================
   GRID COLUMN LOGIC
========================================= */

.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu {
    grid-template-columns: repeat(1, 1fr) !important;
}

.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu:has(li:nth-child(6)) {
    grid-template-columns: repeat(2, 1fr) !important;
}

.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu:has(li:nth-child(16)) {
    grid-template-columns: repeat(4, 1fr) !important;
}

/* =========================================
   RICH & ELITE PREMIUM DESIGN
========================================= */

.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li {
    position: relative !important;
    padding: 10px 16px 10px 42px !important;
    margin-bottom: px !important;
    border-radius: 8px !important;
    background: #ffffff !important;
    border: 1px solid rgba(0,0,0,0.06) !important;
    transition: all 0.35s ease !important;
}

/* Elegant Gold Accent Line */
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li::before {
    content: "" !important;
    position: absolute !important;
    left: 18px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    height: 14px !important;
    width: 2px !important;
    background: #ffd806 !important;
    border-radius: 2px !important;
    transition: 0.3s ease !important;
}

/* Link Style */
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li a {
    display: block !important;
    font-weight: 600 !important;
    font-size: 17px !important;
    color: navy !important;
    text-decoration: none !important;
    letter-spacing: 0.3px !important;
    transition: all 0.3s ease !important;
}

/* Premium Hover Background */
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li:hover {
    background: #0f41a3 !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25) !important;
    transform: translateY(-2px) !important;
}

/* Hover Text */
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li:hover a {
    color: white !important;
}

/* Gold Glow Line on Hover */
.th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu li:hover::before {
    height: 20px !important;
    background: #ffd806  !important;
}

/* =========================================
   RESPONSIVE FIX
========================================= */

@media (max-width: 991px) {
    .th-header .main-menu > ul > li.menu-item-has-children > ul.sub-menu {
        position: relative !important;
        width: 100% !important;
        padding: 20px !important;
        grid-template-columns: 1fr !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
        opacity: 1 !important;
        visibility: visible !important;
    }
}




/* ===== Career Form Clean Compact Design ===== */

.zxqf91-wrapper {
    max-width: 700px;
    margin: 30px auto;
    padding: 30px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    font-family: 'Poppins', sans-serif;
}

/* Remove extra spacing */
.zxqf91-wrapper p {
    margin: 0 0 14px 0 !important;
}

.zxqf91-wrapper label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin: 0 0 6px 0 !important;
    color: #333;
}

/* Remove unwanted line break spacing */
.zxqf91-wrapper br {
    display: none;
}

/* Input fields */
.zxqf91-wrapper input,
.zxqf91-wrapper select,
.zxqf91-wrapper textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    background: #f9f9f9;
    transition: all 0.3s ease;
    margin: 0;
}

/* Focus effect */
.zxqf91-wrapper input:focus,
.zxqf91-wrapper select:focus,
.zxqf91-wrapper textarea:focus {
    border-color: #0056d2;
    background: #fff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0,86,210,0.1);
}

/* Textarea height */
.zxqf91-wrapper textarea {
    min-height: 110px;
    resize: vertical;
}

/* Submit button */
.zxqf91-wrapper input[type="submit"] {
      background: linear-gradient(135deg, #003f9e, #002f75);
    color: #fff;
    font-weight: 600;
    border: none;
    padding: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.zxqf91-wrapper input[type="submit"]:hover {
    background: linear-gradient(135deg, #003f9e, #002f75);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

/* Validation messages */
.zxqf91-wrapper .wpcf7-not-valid-tip {
    font-size: 12px;
    margin-top: 4px;
}

.zxqf91-wrapper .wpcf7-response-output {
    margin-top: 12px;
    border-radius: 6px;
}

/*Scholarship Finder Tool*/

.sf_results{
margin-top:40px !important;
display:block !important;
}

.sf_card_wrap{
display:grid !important;
grid-template-columns:1fr 1fr;
gap:14px;
}










.header-logo .logo img{width:210px;}.header-logo .logo img{margin-top:20px;}.prebuilt .logo-bg-half, .prebuilt .logo-bg {--theme-color:transparent;}.prebuilt .main-menu > ul li a{color:#010b68;}.footer-custom{background-repeat:no-repeat;background-position:center center;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAwIDYwOCIgYnYtaW1nLXVybD0iaHR0cHM6Ly9jb2xsZWdlc2hpbmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9hbF9vcHRfY29udGVudC9JTUFHRS9jb2xsZWdlc2hpbmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA3L2Zvb3Rlci1iZy5wbmciIGJ2LXJlc2l6ZWQtaW5mb3M9Ik5EZ3dMbkJ1WnpvME9EQXFNVGd5T3pneU1DNXdibWM2T0RJd0tqTXhNanN4TlRNMkxuQnVaem94TlRNMktqVTROQT09Ij48L3N2Zz4=");background-size:cover;}


*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

/* HERO SECTION */

.cs-hero{
  position:relative;
  min-height:50vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:40px 20px;
  overflow:hidden;
  background:linear-gradient(135deg,#0d2a63,#1b4fb3);
  color:#fff;
}

/* Animated Glow Background */

.cs-hero::before{
  content:"";
  position:absolute;
  width:700px;
  height:700px;
  background:radial-gradient(circle,#f5b82033,transparent 70%);
  animation:floatBg 8s infinite alternate ease-in-out;
  top:-150px;
  left:-150px;
}

@keyframes floatBg{
  0%{transform:translateY(0px);}
  100%{transform:translateY(50px);}
}

/* HEADING */

.typing-text{
  font-size:60px;
  font-weight:800;
  margin-bottom:25px;
  line-height:1.2;
  color:#fff;
  min-height:72px; /* prevents layout jump */
}

/* blinking cursor */

.typing-text::after{
  content:"|";
  margin-left:6px;
  animation:blink 1s infinite;
}

@keyframes blink{
  0%,100%{opacity:1;}
  50%{opacity:0;}
}

/* SUBTEXT */

.cs-hero p{
  font-size:20px;
  max-width:800px;
  margin-bottom:40px;
  line-height:1.7;
  color:#eaeaea;
}

/* BUTTON GROUP */

.cs-btn-group{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  justify-content:center;
  margin-bottom:30px;
}

/* BUTTONS */

.cs-btn{
  padding:18px 40px;
  border-radius:60px;
  text-decoration:none;
  font-weight:700;
  font-size:18px;
  transition:0.3s ease;
}

.primary-btn{
  background:#f5b820;
  color:#000;
  box-shadow:0 15px 35px rgba(0,0,0,0.3);
}

.primary-btn:hover{
  background:#ffcc33;
  transform:translateY(-3px);
}

.secondary-btn{
  border:2px solid #fff;
  color:#fff;
}

.secondary-btn:hover{
  background:#fff;
  color:#000;
}

/* TRUST LINE */

.cs-trust{
  font-size:14px;
  opacity:0.9;
}

/* RESPONSIVE */

/* ================================
   TABLETS (≤1024px)
================================ */
@media (max-width:1024px){

  .cs-hero{
    padding:60px 30px;
    min-height:60vh;
  }

  .typing-text{
    font-size:48px;
    line-height:1.25;
  }

  .cs-hero p{
    font-size:18px;
    max-width:650px;
  }

  .cs-btn{
    font-size:16px;
    padding:16px 32px;
  }
}


/* ================================
   MOBILE (≤768px)
================================ */
@media (max-width:768px){

  .cs-hero{
    padding:50px 20px;
    min-height:auto; /* prevent overflow issues */
  }

  .typing-text{
    font-size:34px;
    line-height:1.3;
    min-height:auto;
  }

  .cs-hero p{
    font-size:15.5px;
    line-height:1.6;
    max-width:100%;
  }

  .cs-btn-group{
    flex-direction:column;
    gap:14px;
    width:100%;
  }

  .cs-btn{
    width:100%;              /* full width buttons */
    text-align:center;
    font-size:15px;
    padding:14px;
    border-radius:12px;      /* modern look */
  }

  .cs-trust{
    font-size:13px;
    margin-top:10px;
  }
}


/* ================================
   SMALL MOBILE (≤480px)
================================ */
@media (max-width:480px){

  .cs-hero{
    padding:40px 16px;
  }

  .typing-text{
    font-size:28px;
    line-height:1.35;
  }

  .cs-hero p{
    font-size:14px;
    line-height:1.6;
  }

  .cs-btn{
    font-size:14px;
    padding:13px;
  }

  .cs-trust{
    font-size:12px;
  }

  /* Reduce glow for performance */
  .cs-hero::before{
    width:400px;
    height:400px;
    opacity:0.5;
  }
}


/* ================================
   EXTRA SMALL DEVICES (≤360px)
================================ */
@media (max-width:360px){

  .typing-text{
    font-size:24px;
  }

  .cs-hero p{
    font-size:13px;
  }

  .cs-btn{
    font-size:13px;
    padding:12px;
  }
}


  :root{
    --zq8-blue: #1340e0;
    --zq8-blue-bright: #3a63ff;
    --zq8-gold: #f4c400;
    --zq8-bg: #ffffff;
    --zq8-bg-soft: #f6f8ff;
    --zq8-ink: #101832;
    --zq8-ink-soft: #5b6480;
    --zq8-line: #e3e7f5;
    --zq8-segment: 4s;
  }

  .zq8vt-wrap *{ box-sizing:border-box; }

  .zq8vt-wrap{
    margin:0;
    background: var(--zq8-bg);
    font-family:'Inter', sans-serif;
    color: var(--zq8-ink);
    -webkit-font-smoothing:antialiased;
  }

  .zq8vt-wrap{
    position:relative;
    padding: 100px 24px 100px;
    overflow:hidden;
    background:
      radial-gradient(1000px 480px at 12% -10%, rgba(19,64,224,0.06), transparent 60%),
      radial-gradient(800px 460px at 92% 100%, rgba(244,196,0,0.10), transparent 55%),
      var(--zq8-bg);
  }

  .zq8vt-gridbg{
    position:absolute; inset:0;
    background-image: radial-gradient(rgba(19,64,224,0.10) 1px, transparent 1px);
    background-size: 26px 26px;
    -webkit-mask-image: radial-gradient(700px 420px at 50% 10%, #000 30%, transparent 75%);
    mask-image: radial-gradient(700px 420px at 50% 10%, #000 30%, transparent 75%);
    opacity:0.7;
  }

  .zq8vt-head{
    position:relative;
    z-index:2;
    max-width:720px;
    margin: 0 auto 80px;
    text-align:center;
  }

  .zq8vt-headline{
    font-family:'Sora', sans-serif;
    font-weight:800;
    color: var(--zq8-blue);
    line-height:1.2;
    margin:0;
    letter-spacing:-0.01em;
    text-align:center;
  }
  .zq8vt-headline.zq8vt-h-caps{
    font-size: clamp(26px, 3.6vw, 38px);
    text-transform:uppercase;
    letter-spacing:0.02em;
  }
  .zq8vt-headline.zq8vt-h-big{
    font-size: clamp(32px, 5vw, 50px);
    margin-top: 10px;
  }

  .zq8vt-sub{
    font-size:16.5px;
    color: var(--zq8-ink-soft);
    line-height:1.6;
    margin:0;
  }

  .zq8vt-stage{
    position:relative;
    z-index:2;
    max-width:1180px;
    margin: 0 auto;
    perspective: 1500px;
  }

  .zq8vt-cards{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 26px;
    align-items: stretch;
    transform-style: preserve-3d;
  }

  .zq8vt-card{
    position:relative;
    transform-style: preserve-3d;
    transform-origin: center bottom;
    opacity:0;
    height: 100%;
  }

  /* idle: each card rests at a slight, alternating 3D tilt and gently
     wobbles on its own — like cards fanned out on a table */
  .zq8vt-card[data-index="0"]{ --zq8-idleA: -7deg; --zq8-idleB: -3deg; }
  .zq8vt-card[data-index="1"]{ --zq8-idleA: -3deg; --zq8-idleB: 1deg; }
  .zq8vt-card[data-index="2"]{ --zq8-idleA: 1deg; --zq8-idleB: -3deg; }
  .zq8vt-card[data-index="3"]{ --zq8-idleA: 3deg; --zq8-idleB: 7deg; }

  .zq8vt-card.zq8vt-is-in{
    animation: zq8vt-dropIn .7s cubic-bezier(.2,.9,.3,1.2) forwards;
  }
  @keyframes zq8vt-dropIn{
    from{ opacity:0; transform: translateY(40px) rotateX(-25deg) rotateY(var(--zq8-idleA)) scale(.9); }
    to{ opacity:1; transform: translateY(0) rotateX(0deg) rotateY(var(--zq8-idleA)) scale(1); }
  }

  .zq8vt-card.zq8vt-idle .zq8vt-inner{
    animation: zq8vt-wobble 5s ease-in-out infinite;
  }
  @keyframes zq8vt-wobble{
    0%, 100%{ transform: rotateY(var(--zq8-idleA)) rotateX(1deg); }
    50%{ transform: rotateY(var(--zq8-idleB)) rotateX(-1deg); }
  }

  .zq8vt-card.zq8vt-idle{ opacity:0.7; }

  /* active: full coin-flip rotation on entry, then settles facing forward */
  .zq8vt-card.zq8vt-focus .zq8vt-inner{
    animation: zq8vt-coinFlip .9s cubic-bezier(.3,.4,.25,1) forwards;
  }
  @keyframes zq8vt-coinFlip{
    0%{ transform: rotateY(0deg) scale(1); }
    45%{ transform: rotateY(200deg) scale(1.02); }
    100%{ transform: rotateY(360deg) scale(1.07) translateY(-8px); }
  }
  .zq8vt-card.zq8vt-focus{ opacity:1; z-index:2; }

  .zq8vt-inner{
    position:relative;
    background: var(--zq8-bg);
    border:1px solid var(--zq8-line);
    border-radius: 18px;
    padding: 22px 20px 24px;
    text-align:left;
    backface-visibility:hidden;
    height: 100%;
    min-height: 230px;
    display:flex;
    flex-direction:column;
    transition: box-shadow .5s ease, border-color .5s ease;
  }

  .zq8vt-card.zq8vt-focus .zq8vt-inner{
    border-color: rgba(19,64,224,0.28);
    box-shadow: 0 26px 50px -20px rgba(19,64,224,0.34);
  }

  .zq8vt-badgering{
    position:relative;
    width:48px; height:48px;
    margin-bottom:18px;
    flex-shrink:0;
  }
  .zq8vt-badgering::before{
    content:'';
    position:absolute; inset:-6px;
    border-radius:16px;
    background: conic-gradient(from 0deg, var(--zq8-blue), var(--zq8-gold), var(--zq8-blue-bright), var(--zq8-blue));
    opacity:0;
    transition: opacity .4s ease;
  }
  .zq8vt-card.zq8vt-focus .zq8vt-badgering::before{
    opacity:1;
    animation: zq8vt-spinRing 2.6s linear infinite;
  }
  @keyframes zq8vt-spinRing{ to{ transform: rotate(360deg); } }

  .zq8vt-badge{
    position:relative;
    width:48px;height:48px;
    border-radius:13px;
    display:flex;align-items:center;justify-content:center;
    background: var(--zq8-bg-soft);
    border:1px solid var(--zq8-line);
    transition: background .45s ease, border-color .45s ease;
  }
  .zq8vt-badge svg{ width:23px;height:23px; stroke:var(--zq8-ink-soft); transition: stroke .4s ease; }

  .zq8vt-card.zq8vt-focus .zq8vt-badge{
    background: linear-gradient(150deg, var(--zq8-blue), var(--zq8-blue-bright));
    border-color: transparent;
  }
  .zq8vt-card.zq8vt-focus .zq8vt-badge svg{ stroke:#fff; }

  .zq8vt-stepnum{
    position:absolute;
    top:22px; right:20px;
    font-family:'JetBrains Mono', monospace;
    font-size:12px;
    color: #c3c9e2;
    transition: color .4s ease;
  }
  .zq8vt-card.zq8vt-focus .zq8vt-stepnum{ color: var(--zq8-gold); }

  .zq8vt-card h3{
    font-family:'Sora', sans-serif;
    font-size:18px;
    font-weight:700;
    margin: 14px 0 8px;
    color: var(--zq8-ink);
    flex-shrink:0;
    transition: color .4s ease;
  }
  .zq8vt-card.zq8vt-focus h3{ color: var(--zq8-blue); }

  .zq8vt-card p{
    font-size:14px;
    line-height:1.62;
    color: var(--zq8-ink-soft);
    margin:0;
    flex:1;
    overflow:hidden;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }

  .zq8vt-bartrack{
    position:absolute;
    left:20px; right:20px; bottom:16px;
    height:3px;
    background: var(--zq8-line);
    border-radius:3px;
    overflow:hidden;
  }
  .zq8vt-barfill{ height:100%; width:0%; background: linear-gradient(90deg, var(--zq8-blue), var(--zq8-gold)); border-radius:3px; }
  .zq8vt-card.zq8vt-focus .zq8vt-barfill{ animation: zq8vt-fillBar var(--zq8-segment) linear forwards; }
  @keyframes zq8vt-fillBar{ from{ width:0%; } to{ width:100%; } }
  .zq8vt-inner{ padding-bottom: 40px; }

  @media (max-width: 900px){
    .zq8vt-stage{ perspective:none; }
    .zq8vt-cards{ grid-template-columns:1fr; grid-auto-rows:auto; gap:16px; }
    .zq8vt-card{ transform:none !important; height:auto; }
    .zq8vt-inner{ height:auto; min-height:200px; }
    .zq8vt-card.zq8vt-is-in{ animation: zq8vt-fadeUpSimple .6s ease forwards; }
    @keyframes zq8vt-fadeUpSimple{ from{ opacity:0; transform:translateY(20px);} to{ opacity:1; transform:translateY(0);} }
    .zq8vt-card.zq8vt-idle .zq8vt-inner{ animation:none; }
    .zq8vt-card.zq8vt-focus .zq8vt-inner{ animation:none; }
  }

  @media (prefers-reduced-motion: reduce){
    .zq8vt-wrap *, .zq8vt-wrap *::before, .zq8vt-wrap *::after{
      animation: none !important;
      transition-duration: 0.01ms !important;
    }
    .zq8vt-card{ opacity:1; transform:none !important; }
  }



    /* Fix dropdown option colors */

#wrbk9_scope .wrbk9_select{
color:#fff;
background:rgba(255,255,255,0.05);
}

/* dropdown list items */

#wrbk9_scope .wrbk9_select option{
background:#ffffff;
color:#1e293b;
}

/* Make result section full width */

#wrbk9_scope .cpgx_result{
grid-column:1 / -1;
width:100%;
}

#wrbk9_scope{
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
font-family:'Poppins',sans-serif;
padding:0px 20px;
background:linear-gradient(135deg,#0f172a,#1e40af,#4338ca);
background-size:200% 200%;
animation:wrbk9bg 10s ease infinite;
}

@keyframes wrbk9bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}


/* container */

#wrbk9_scope #wrbk9_tool{
max-width:1200px;
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
align-items:center;
}


/* hero text */

#wrbk9_scope .wrbk9_intro{
color:#fff;
padding:20px;
}

#wrbk9_scope .wrbk9_intro h2{
font-size:46px;
font-weight:800;
line-height:1.2;
margin-bottom:18px;
background:linear-gradient(90deg,#fff,#c7d2fe);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

#wrbk9_scope .wrbk9_intro p{
font-size:18px;
color:#e0e7ff;
line-height:1.8;
max-width:480px;
}


/* form card */

#wrbk9_scope .wrbk9_card{
background:rgba(255,255,255,0.08);
backdrop-filter:blur(18px);
border-radius:22px;
padding:42px;
border:1px solid rgba(255,255,255,0.15);
box-shadow:0 25px 70px rgba(0,0,0,0.45);
transition:.35s;
}

#wrbk9_scope .wrbk9_card:hover{
transform:translateY(-6px);
}


/* title */

#wrbk9_scope .wrbk9_title{
font-size:26px;
font-weight:700;
text-align:center;
margin-bottom:26px;
color:#ffffff;
}


/* grid */

#wrbk9_scope .wrbk9_grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

@media(max-width:900px){

#wrbk9_scope #wrbk9_tool{
grid-template-columns:1fr;
}

#wrbk9_scope{
min-height:auto;
padding:60px 20px;
}

#wrbk9_scope .wrbk9_grid{
grid-template-columns:1fr;
}

}


/* field */

#wrbk9_scope .wrbk9_field{
display:flex;
flex-direction:column;
}


/* label */

#wrbk9_scope .wrbk9_label{
font-size:17px;
font-weight:600;
margin-bottom:6px;
color:#c7d2fe;
}


/* inputs */

#wrbk9_scope .wrbk9_input,
#wrbk9_scope .wrbk9_select {
  padding: 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 15px;
  transition: .25s;

  /* Added fixes */
  width: 100%;             /* always full width */
  white-space: normal;     /* allow text to wrap */
  overflow: visible;       /* prevent clipping */
  text-overflow: clip;     /* no ... truncation */
  word-break: break-word;  /* wrap long words */
}

/* Option padding + wrapping */
#wrbk9_scope .wrbk9_select option {
  padding: 8px 12px;
  white-space: normal;      /* wrap option text */
  word-break: break-word;   /* break long words */
}


/* placeholder */

#wrbk9_scope input::placeholder{
color:#cbd5f5;
}


/* focus */

#wrbk9_scope .wrbk9_input:focus,
#wrbk9_scope .wrbk9_select:focus{
border-color:#60a5fa;
box-shadow:0 0 0 2px rgba(96,165,250,.4);
outline:none;
}


/* button */

#wrbk9_scope .wrbk9_btn{
margin-top:24px;
background:linear-gradient(135deg,#3b82f6,#6366f1);
color:#fff;
border:none;
padding:15px;
border-radius:12px;
font-size:16px;
font-weight:600;
cursor:pointer;
width:100%;
transition:.3s;
box-shadow:0 12px 35px rgba(59,130,246,.45);
}

#wrbk9_scope .wrbk9_btn:hover{
transform:translateY(-3px);
box-shadow:0 18px 50px rgba(99,102,241,.6);
}


/* loading */

#wrbk9_scope .cpgx_loading{
display:none;
text-align:center;
padding:30px;
color:#fff;
}


/* spinner */

#wrbk9_scope .wrbk9_spinner{
width:40px;
height:40px;
border:4px solid rgba(255,255,255,.25);
border-top:4px solid #60a5fa;
border-radius:50%;
animation:wrbk9_spin 1s linear infinite;
margin:auto;
}

@keyframes wrbk9_spin{
100%{transform:rotate(360deg);}
}


/* result */

#wrbk9_scope .cpgx_result{
display:none;
margin-top:25px;
background:#ffffff;
border-radius:14px;
padding:25px;
border:1px solid #e2e8f0;
}

#wrbk9_scope .cpgx_result h3{
margin-top:0;
color:#1e40af;
}

#wrbk9_scope .cpgx_result ul{
padding-left:18px;
line-height:1.8;
}


/* ================================================================
   MEDIA QUERIES — TABLETS & MOBILE
================================================================ */
@media (max-width: 1024px) {
  #wrbk9_scope #wrbk9_tool {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  #wrbk9_scope .wrbk9_intro h2 {
    font-size: 36px;
  }

  #wrbk9_scope .wrbk9_intro p {
    font-size: 16px;
  }

  #wrbk9_scope .wrbk9_card {
    padding: 30px;
  }

  #wrbk9_scope .wrbk9_grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  #wrbk9_scope .wrbk9_title {
    font-size: 24px;
  }

  #wrbk9_scope .wrbk9_input,
  #wrbk9_scope .wrbk9_select {
    font-size: 14px;
    padding: 12px;
  }

  #wrbk9_scope .wrbk9_btn {
    font-size: 15px;
    padding: 14px;
  }

  #wrbk9_scope .cpgx_result {
    padding: 20px;
  }

  #wrbk9_scope .cpgx_result h3 {
    font-size: 20px;
  }

  #wrbk9_scope .cpgx_result ul {
    font-size: 14px;
  }
}

@media (max-width: 768px) {

  /* Stack the main grid into one column */
  #wrbk9_scope #wrbk9_tool {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  /* Intro text adjustments */
  #wrbk9_scope .wrbk9_intro {
    padding: 20px 15px;
  }

  #wrbk9_scope .wrbk9_intro h2 {
    font-size: 28px;
    line-height: 1.3;
    word-break: break-word;       /* allow line breaks on long words */
    overflow-wrap: break-word;    /* fallback */
  }

  #wrbk9_scope .wrbk9_intro p {
    font-size: 15px;
    line-height: 1.7;
    word-break: break-word;       /* handles Tamil + English wrapping */
    overflow-wrap: break-word;
  }

  /* Card adjustments */
  #wrbk9_scope .wrbk9_card {
    padding: 25px 18px;
  }

  #wrbk9_scope .wrbk9_grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  #wrbk9_scope .wrbk9_title {
    font-size: 22px;
  }

  /* Inputs */
  #wrbk9_scope .wrbk9_input,
  #wrbk9_scope .wrbk9_select {
    font-size: 14px;
    padding: 12px;
  }

  

  #wrbk9_scope .wrbk9_btn {
    font-size: 15px;
    padding: 14px;
  }

  /* Result box */
  #wrbk9_scope .cpgx_result {
    padding: 18px;
  }

  #wrbk9_scope .cpgx_result h3 {
    font-size: 20px;
  }

  #wrbk9_scope .cpgx_result ul {
    font-size: 14px;
    line-height: 1.7;
  }
}

/* ==================== MOBILE MEDIA QUERY FIX ==================== */
/* ==================== INDUSTRIAL MOBILE FIX ==================== */
@media (max-width: 480px) {

  /* FULL WIDTH LAYOUT FIX */
  #wrbk9_scope {
    padding: 20px 12px;
    display: block; /* remove flex centering issue */
  }

  #wrbk9_scope #wrbk9_tool {
    display: block;
    width: 100%;
  }

  /* INTRO TEXT */
  #wrbk9_scope .wrbk9_intro {
    padding: 10px 5px;
  }

  #wrbk9_scope .wrbk9_intro h2 {
    font-size: 24px;
    line-height: 1.3;
    word-break: break-word;
  }

  #wrbk9_scope .wrbk9_intro p {
    font-size: 15px;
    line-height: 1.6;
    max-width: 100%;
  }

  /* CARD FIX (IMPORTANT) */
  #wrbk9_scope .wrbk9_card {
    width: 100%;              /* FULL WIDTH */
    padding: 18px;
    border-radius: 16px;
    margin: 0 auto;
  }

  /* GRID */
  #wrbk9_scope .wrbk9_grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  /* INPUTS */
  #wrbk9_scope .wrbk9_input,
  #wrbk9_scope .wrbk9_select {
    font-size: 14px;
    padding: 12px;
    width: 100%;
  }

  /* BUTTON */
  #wrbk9_scope .wrbk9_btn {
    font-size: 14px;
    padding: 13px;
  }

  /* ================= RESULT FIX (MAIN ISSUE) ================= */

  #wrbk9_scope .cpgx_result {
    width: 100%;              /* FULL WIDTH */
    max-width: 100%;
    padding: 16px;
    margin-top: 20px;
    border-radius: 12px;
  }

  #wrbk9_scope .cpgx_result h3 {
    font-size: 18px;
    line-height: 1.4;
  }

  #wrbk9_scope .cpgx_result p,
  #wrbk9_scope .cpgx_result li {
    font-size: 14px;
    line-height: 1.6;

    /* TEXT BREAK FIX (VERY IMPORTANT) */
    word-break: normal;
    overflow-wrap: break-word;
    white-space: normal;
  }

  /* FIX FOR TAMIL + ENGLISH MIX TEXT */
  #wrbk9_scope {
    word-break: break-word;
    overflow-wrap: anywhere;
  }
}


/* ==========================================================================
   CollegeShine — 12th Cutoff & Eligibility Calculator (promo block only)
   Scoped under .csc-widget so it can't leak into or be affected by other
   theme/plugin styles on the WordPress page.
   ========================================================================== */

.csc-widget{
  --csc-navy:#163b75;
  --csc-sky:#2ea3d0;
  --csc-amber:#f2a71b;
  --csc-ink:#1c2733;
  --csc-muted:#5b6b7c;
  --csc-line:#e7ecf2;
  --csc-white:#ffffff;

  font-family: 'Poppins', Arial, sans-serif;
  color: var(--csc-ink);
  max-width: 1080px;
  margin: 40px auto;
  padding: 0 16px;
  box-sizing: border-box;
}

.csc-widget *,
.csc-widget *::before,
.csc-widget *::after{
  box-sizing: border-box;
}

/* ---------- Outer card ---------- */
.csc-promo{
  position: relative;
  background: var(--csc-white);
  border: 1px solid var(--csc-line);
  border-radius: 20px;
  box-shadow: 0 18px 40px rgba(22,59,117,0.08);
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 36px;
}

.csc-promo::before{
  /* soft brand glow, purely decorative */
  content:"";
  position:absolute;
  top:-70px;
  left:-70px;
  width:240px;
  height:240px;
  background: radial-gradient(circle, rgba(46,163,208,0.12), transparent 70%);
  pointer-events:none;
}

/* ---------- Text column (left) ---------- */
.csc-content{
  flex: 1 1 52%;
  min-width: 0;
  padding: 34px 8px 34px 34px;
}

.csc-eyebrow{
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  color:var(--csc-white);
  background: linear-gradient(135deg, var(--csc-amber), #e58f00);
  padding:5px 12px;
  border-radius:999px;
  margin-bottom:14px;
}

.csc-title{
  font-size: 25px;
  line-height:1.3;
  font-weight:800;
  color: var(--csc-navy);
  margin:0 0 4px;
}

.csc-subtitle{
  font-size:16px;
  font-weight:600;
  color: var(--csc-sky);
  margin:0 0 16px;
}

.csc-desc{
  font-size:15px;
  line-height:1.65;
  color: var(--csc-muted);
  margin:0 0 12px;
}

.csc-desc strong{
  color: var(--csc-ink);
}

.csc-benefits{
  list-style:none;
  margin:18px 0 0;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:8px;
}

.csc-benefits li{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:14.5px;
  font-weight:600;
  color: var(--csc-ink);
}

.csc-benefits li::before{
  content:"👉";
  flex-shrink:0;
}

/* ---------- Image column (right) ---------- */
.csc-hero{
  flex: 1 1 48%;
  min-width: 0;
  align-self: stretch;
  display:flex;
}

.csc-hero img{
  display:block;
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
}

/* ==========================================================================
   Responsive
   ========================================================================== */

/* Stack image below content once the two columns get too tight */
@media (max-width: 820px){
  .csc-promo{
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .csc-content{
    padding: 26px 22px 22px;
    flex: 1 1 auto;
  }

  .csc-hero{
    flex: 1 1 auto;
  }

  .csc-hero img{
    border-radius: 0 0 20px 20px;
    max-height: 320px;
  }
}

/* Small tablets */
@media (max-width: 600px){
  .csc-widget{ margin: 28px auto; }
  .csc-promo{ border-radius: 16px; }
  .csc-title{ font-size: 21px; }
  .csc-subtitle{ font-size: 14.5px; }
  .csc-desc{ font-size: 14px; }
  .csc-hero img{ max-height: 260px; border-radius: 0 0 16px 16px; }
}

/* Small phones */
@media (max-width: 420px){
  .csc-widget{ padding: 0 10px; margin: 20px auto; }
  .csc-content{ padding: 20px 16px 18px; }
  .csc-title{ font-size: 18.5px; }
  .csc-subtitle{ font-size: 13.5px; }
  .csc-desc{ font-size: 13px; }
  .csc-benefits li{ font-size: 13.5px; }
  .csc-hero img{ max-height: 220px; border-radius: 0 0 14px 14px; }
}

/* Large desktops */
@media (min-width: 1400px){
  .csc-widget{ max-width: 1200px; }
  .csc-title{ font-size: 28px; }
  .csc-content{ padding: 42px 10px 42px 42px; }
}

@media (prefers-reduced-motion: reduce){
  .csc-widget *{ transition: none !important; }
}



.xk92_wrap *{
box-sizing:border-box;
}

.xk92_wrap{
font-family:'Poppins',sans-serif;
background:#f4f6f9;
}

/* =========================
HERO
========================= */

.xk92_hero{
position:relative;
background:
radial-gradient(circle at 15% 20%,rgba(3,57,143,.06),transparent 45%),
radial-gradient(circle at 85% 15%,rgba(3,57,143,.05),transparent 40%),
#f4f6f9;
padding:90px 40px 170px;
overflow:hidden;
}

.xk92_hero_inner{
position:relative;
max-width:900px;
margin:0 auto;
z-index:2;
}

.xk92_badge{
display:inline-flex;
align-items:center;
gap:8px;
background:rgba(3,57,143,.08);
border:1px solid rgba(3,57,143,.25);
color:#03398f;
font-size:13px;
font-weight:600;
letter-spacing:1px;
text-transform:uppercase;
padding:8px 16px;
border-radius:30px;
margin-bottom:26px;
}

.xk92_title{
font-size:52px;
line-height:1.2;
font-weight:800;
color:#0f172a;
margin:0 0 22px;
letter-spacing:-.5px;
}

.xk92_title em{
font-style:normal;
color:#03398f;
}

.xk92_desc{
color:#5a6472;
font-size:16px;
line-height:1.9;
max-width:640px;
margin:0;
}

/* =========================
FORM CARD (overlaps hero)
========================= */

.xk92_form_outer{
position:relative;
max-width:820px;
margin:-120px auto 80px;
padding:0 24px;
z-index:3;
}

.xk92_card{
background:#ffffff;
border-radius:26px;
padding:50px 44px;
box-shadow:0 30px 80px rgba(15,23,42,.12);
border:1px solid rgba(15,23,42,.06);
position:relative;
overflow:hidden;
}

.xk92_card::after{
content:"";
position:absolute;
top:-80px;
right:-80px;
width:220px;
height:220px;
background:radial-gradient(circle,rgba(3,57,143,.08),transparent 70%);
pointer-events:none;
}

.xk92_card_head{
margin-bottom:32px;
position:relative;
z-index:2;
}

.xk92_card_head h3{
margin:0 0 6px;
font-size:23px;
font-weight:700;
color:#0f172a;
}

.xk92_card_head p{
margin:0;
font-size:14px;
color:#64748b;
}

.xk92_grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:22px;
position:relative;
z-index:2;
}

.xk92_field{
display:flex;
flex-direction:column;
gap:8px;
}

.xk92_field.xk92_full{
grid-column:1 / -1;
}

.xk92_label{
display:flex;
align-items:center;
gap:8px;
font-size:13px;
font-weight:600;
color:#334155;
letter-spacing:.3px;
}

.xk92_icon_badge{
width:26px;
height:26px;
border-radius:8px;
display:inline-flex;
align-items:center;
justify-content:center;
background:#03398f;
color:#fff;
font-size:12px;
flex-shrink:0;
}

.xk92_input,
.xk92_select,
.xk92_textarea{
width:100%;
background:#f4f6f9;
border:1px solid #e2e8f0;
border-radius:12px;
padding:14px 16px;
font-size:14px;
color:#0f172a;
font-family:inherit;
outline:none;
transition:.25s;
}

.xk92_input::placeholder,
.xk92_textarea::placeholder{
color:#94a3b8;
}

.xk92_input:focus,
.xk92_select:focus,
.xk92_textarea:focus{
border-color:#03398f;
background:#ffffff;
box-shadow:0 0 0 4px rgba(3,57,143,.12);
}

.xk92_select{
appearance:none;
cursor:pointer;
background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%2394a3b8' viewBox='0 0 16 16'><path d='M8 11L2 5h12z'/></svg>");
background-repeat:no-repeat;
background-position:right 16px center;
padding-right:40px;
}

.xk92_select option{
background:#ffffff;
color:#0f172a;
}

.xk92_textarea{
resize:vertical;
min-height:100px;
}

.xk92_btn{
width:100%;
margin-top:8px;
padding:16px;
border:none;
border-radius:14px;
background:#03398f;
color:#fff;
font-size:16px;
font-weight:700;
cursor:pointer;
transition:.3s;
letter-spacing:.3px;
display:flex;
align-items:center;
justify-content:center;
gap:10px;
}

.xk92_btn:hover{
transform:translateY(-3px);
box-shadow:0 15px 35px rgba(3,57,143,.3);
}

.xk92_btn:active{
transform:translateY(0);
}

.xk92_btn:disabled{
opacity:.7;
cursor:not-allowed;
transform:none;
box-shadow:none;
}

/* success message below submit button */

.xk92_success{
display:none;
align-items:center;
justify-content:center;
gap:8px;
margin-top:14px;
padding:12px 16px;
border-radius:10px;
background:rgba(22,163,74,.08);
border:1px solid rgba(22,163,74,.25);
color:#15803d;
font-size:14px;
font-weight:600;
text-align:center;
}

.xk92_success.xk92_show{
display:flex;
animation:xk92_fadeIn .35s ease;
}

@keyframes xk92_fadeIn{
from{opacity:0;transform:translateY(-6px);}
to{opacity:1;transform:translateY(0);}
}

/* =========================
LARGE DESKTOP
========================= */

@media(min-width:1440px){

.xk92_hero{
padding:110px 40px 200px;
}

.xk92_title{
font-size:60px;
}

.xk92_hero_inner,
.xk92_form_outer{
max-width:920px;
}

}

/* =========================
LAPTOP
========================= */

@media(max-width:1200px){

.xk92_hero{
padding:80px 32px 160px;
}

.xk92_title{
font-size:46px;
}

}

/* =========================
TABLET
========================= */

@media(max-width:992px){

.xk92_hero{
padding:70px 28px 150px;
}

.xk92_title{
font-size:38px;
}

.xk92_desc{
font-size:15px;
}

.xk92_card{
padding:40px 34px;
}

}

/* =========================
MOBILE LANDSCAPE
========================= */

@media(max-width:768px){

.xk92_hero{
padding:60px 22px 190px;
text-align:center;
}

.xk92_hero_inner{
text-align:center;
}

.xk92_title{
font-size:32px;
}

.xk92_desc{
margin:0 auto;
}

.xk92_form_outer{
margin-top:-160px;
padding:0 18px;
}

.xk92_card{
padding:34px 26px;
border-radius:20px;
}

.xk92_grid{
grid-template-columns:1fr;
}

}

/* =========================
MOBILE
========================= */

@media(max-width:480px){

.xk92_hero{
padding:50px 16px 170px;
}

.xk92_badge{
font-size:11px;
padding:6px 12px;
}

.xk92_title{
font-size:26px;
}

.xk92_desc{
font-size:13px;
line-height:1.8;
}

.xk92_form_outer{
margin-top:-140px;
padding:0 12px;
}

.xk92_card{
padding:26px 20px;
}

.xk92_card_head h3{
font-size:19px;
}

.xk92_grid{
gap:16px;
}

.xk92_btn{
font-size:15px;
padding:14px;
}

}

/* =========================
EXTRA SMALL
========================= */

@media(max-width:360px){

.xk92_title{
font-size:22px;
}

.xk92_card{
padding:22px 16px;
}

}



/* Everything is scoped under .cs-collegeshine-widget so it can never
   leak into (or be overridden by) other theme/plugin elements on the page. */

.cs-collegeshine-widget{
  --cs-primary:#163b75;
  --cs-secondary:#2ea3d0;
  --cs-light:#f8f9fb;
  --cs-white:#ffffff;
  --cs-border:#e6e6e6;

  font-family:Poppins, sans-serif;
  background:var(--cs-light);
}

.cs-collegeshine-widget .cs-container{
  width:95%;
  max-width:1400px;
  margin:auto;
}

.cs-collegeshine-widget .cs-colleges{
  padding:60px 0;
}

/* ===== FILTER BUTTONS (2 ROW LAYOUT) ===== */
.cs-collegeshine-widget .cs-colleges__filters{
  display:flex;
  flex-wrap:wrap;           /* allows 2 rows */
  gap:12px;
  margin-bottom:40px;
}

.cs-collegeshine-widget .cs-filter-btn{
  padding:10px 20px;
  font-size:17px;
  font-weight:700;          /* BOLD TEXT */
  border:none;
  border-radius:25px;
  background:var(--cs-primary);
  color:#fff;
  cursor:pointer;
  transition:.3s ease;
}

.cs-collegeshine-widget .cs-filter-btn:hover,
.cs-collegeshine-widget .cs-filter-btn.active{
  background:var(--cs-secondary);
}

/* ===== GRID ===== */
.cs-collegeshine-widget .cs-colleges__grid{
  display:grid;
  grid-template-columns:repeat(5, 1fr);   /* 5 cards per row */
  gap:25px;
}

/* ===== BIGGER CARD ===== */
.cs-collegeshine-widget .cs-college-card{
  background:#fff;
  border:1px solid var(--cs-border);
  border-radius:8px;
  height:220px;               /* Bigger height */
  display:flex;
  flex-direction:column;
  transition:.3s ease;
}

.cs-collegeshine-widget .cs-college-card:hover{
  transform:translateY(-6px);
  box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

/* IMAGE BACKGROUND WHITE */
.cs-collegeshine-widget .cs-college-card__image{
  height:150px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffffff;       /* pure white */
  padding:10px;
}

.cs-collegeshine-widget .cs-college-card__image img{
  max-width:100%;
  max-height:120px;
  object-fit:contain;
}

/* FOOTER */
.cs-collegeshine-widget .cs-college-card__footer{
  flex:1;
  background:var(--cs-primary);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px;
}

.cs-collegeshine-widget .cs-college-card__footer h3{
  font-size:16px;
  color:#fff;
  text-align:center;
  font-weight:600;
  margin:0;
}

.cs-collegeshine-widget .cs-college-card.cs-hide{
  display:none;
}

/* ===== RESPONSIVE ===== */
@media(max-width:1200px){
  .cs-collegeshine-widget .cs-colleges__grid{
    grid-template-columns:repeat(3,1fr);
  }
}

@media(max-width:768px){
  .cs-collegeshine-widget .cs-colleges__grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:480px){
  .cs-collegeshine-widget .cs-colleges__grid{
    grid-template-columns:1fr;
  }
}



/* =========================
ANIMATED BACKGROUND
========================= */

#sf_tool{

font-family:'Poppins',sans-serif;

width:100%;

min-height:100vh;

padding:90px 40px;

display:flex;

justify-content:center;

align-items:flex-start;

background:linear-gradient(-45deg,#0ea5e9,#2563eb,#7c3aed,#06b6d4);

background-size:400% 400%;

animation:gradientMove 12s ease infinite;

position:relative;

overflow:hidden;

color:#fff;

}

/* gradient animation */

@keyframes gradientMove{

0%{background-position:0% 50%}

50%{background-position:100% 50%}

100%{background-position:0% 50%}

}

/* =========================
FLOATING BUBBLES
========================= */

#sf_tool span{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.15);

animation:float 12s linear infinite;

}

#sf_tool span:nth-child(1){

width:120px;
height:120px;
left:10%;
top:20%;

}

#sf_tool span:nth-child(2){

width:180px;
height:180px;
right:15%;
top:30%;

}

#sf_tool span:nth-child(3){

width:90px;
height:90px;
left:30%;
bottom:10%;

}

@keyframes float{

0%{transform:translateY(0)}

50%{transform:translateY(-40px)}

100%{transform:translateY(0)}

}

/* =========================
MAIN CARD
========================= */

.sf_card{

width:100%;

max-width:1050px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(14px);

padding:45px;

border-radius:20px;

border:1px solid rgba(255,255,255,.25);

box-shadow:0 25px 70px rgba(0,0,0,.25);

}

/* =========================
TITLE
========================= */

.sf_title{

font-size:44px !important;

font-weight:800;

margin-bottom:12px;
text-align: center;

}

.sf_subtitle{
    text-align: center;

font-size:16px;

opacity:.9;

margin-bottom:10px;

}


.sf_desc{
    text-align: center !important;

font-size:15px;

opacity:.9;

line-height:1.7;

margin-bottom:25px;

max-width:650px;

}

/* =========================
FORM GRID
========================= */

.sf_grid{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

margin-top:25px;

}

/* =========================
FIELDS
========================= */

.sf_field{

display:flex;

flex-direction:column;

}

.sf_label{
    font-size: bold;

font-size:17px;

margin-bottom:6px;

color:#e2e8f0;

}

/* input */

.sf_input{

padding:14px;

border-radius:10px;

border:none;

background:#ffffff;

font-size:14px;

color:#0f172a;

transition:.25s;

}

.sf_input:focus{

outline:none;

box-shadow:0 0 0 3px rgba(255,255,255,.35);

}

/* =========================
BUTTON
========================= */

.sf_btn{

margin-top:25px;

width:100%;

padding:16px;

border:none;

border-radius:12px;

background:linear-gradient(135deg,#f59e0b,#f97316);

color:#fff;

font-size:16px;

font-weight:700;

cursor:pointer;

transition:.35s;

}

.sf_btn:hover{

transform:translateY(-4px) scale(1.02);

box-shadow:0 15px 40px rgba(0,0,0,.35);

}

/* =========================
RESULTS
========================= */

.sf_results{

margin-top:40px;

}

.sf_result_title{

font-size:26px;

font-weight:700;

text-align:center;

margin-bottom:25px;

}

/* =========================
RESULT CARDS
========================= */

.sf_card_wrap{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

}


.sf_link{

display:block;

text-align:right;

font-size:15px;

margin-top:10px;

color:#2563eb;

text-decoration:none;

font-weight:600;

}

.sf_link:hover{

text-decoration:underline;

}


.sf_scholar{

background:#ffffff;

color:#0f172a;

padding:20px;

border-radius:14px;

font-size:20px;

transition:.35s;

box-shadow:0 10px 25px rgba(0,0,0,.15);

}

.sf_scholar:hover{

transform:translateY(-6px) scale(1.03);

}

/* =========================
TABLET
========================= */

@media(max-width:992px){

#sf_tool{

padding:70px 30px;

}

.sf_title{

font-size:36px;

}

}

/* =========================
MOBILE
========================= */

@media(max-width:768px){

#sf_tool{

padding:60px 20px;

}

.sf_card{

padding:30px;

}

.sf_grid{

grid-template-columns:1fr;

}

.sf_title{

font-size:30px;

}

}

@media(max-width:480px){

#sf_tool{

padding:50px 15px;

}

.sf_title{

font-size:24px;

}

.sf_desc{

font-size:13px;

}

}



.xp7k2q {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  padding: 40px 0;
}

.qz4m8t {
  display: flex;
  width: max-content;
  animation: mvscroll 27s linear infinite;
}

.xp7k2q:hover .qz4m8t {
  animation-play-state: paused;
}

.qz4m8t img {
  width: 250px;
  height: 130px;
  object-fit: contain;
  margin: 0 40px;
  transition: transform 0.3s ease;
}

.qz4m8t img:hover {
  transform: scale(1.1);
}

/* Infinite smooth scroll */
@keyframes mvscroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .qz4m8t img {
    width: 130px;
    height: 80px;
    margin: 0 20px;
  }
}



600;700&family=Inter:wght@400;500;600&display=swap');

.kz9wrap{
width:100%;
overflow:hidden;
background:#F5F7FB;
padding:56px 20px;
border-radius:14px;
font-family:'Inter',sans-serif;
}

/* TITLE */
.pq8title{
text-align:center;
color:#0d3787;
font-family:'Poppins',sans-serif;
font-size:32px;
font-weight:600;
letter-spacing:-0.02em;
margin-bottom:14px;
}

/* TRUST TEXT */
.ax2trust{
text-align:center;
padding:5px;
margin-bottom:36px;
color:#4B5C7A;
font-size:14px;
font-weight:500;
}

.ax2trust span{
color:#0d3787;
font-weight:600;
}

/* SLIDER */
.rt5slider{
overflow:hidden;
}

/* TRACK */
.mn7track{
display:flex;
width:max-content;
animation:scrollTestimonial 32s linear infinite;
cursor:grab;
}

.rt5slider:hover .mn7track{
animation-play-state:paused;
}

@keyframes scrollTestimonial{
from{ transform:translateX(0); }
to{ transform:translateX(-50%); }
}

/* CARD - enlarged, sized so two are visible per view on the reference viewport */
.zx3box{
position:relative;
flex:0 0 calc(50vw - 44px);
max-width:560px;
min-height:340px;
background:#0d3787;
border-radius:22px;
padding:40px 34px 34px;
border:1px solid #0d3787;
color:#FFFFFF;
text-align:left;
box-shadow:0 1px 2px rgba(13,55,135,0.12), 0 8px 24px rgba(13,55,135,0.20);
transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
margin:8px 14px;
}

.zx3box:hover{
transform:translateY(-6px);
box-shadow:0 4px 10px rgba(13,55,135,0.24), 0 18px 34px rgba(13,55,135,0.32);
border-color:#1c4a9e;
}

/* QUOTE MARK - signature element */
.zx3box::before{
content:"\\201C";
position:absolute;
top:16px;
right:26px;
font-family:'Poppins',sans-serif;
font-size:72px;
line-height:1;
color:rgba(255,255,255,0.12);
font-weight:700;
z-index:0;
}

/* HEADER ROW */
.pf9head{
display:flex;
align-items:center;
gap:16px;
margin-bottom:18px;
position:relative;
z-index:1;
}

/* IMAGE */
.qw1img{
width:64px;
height:64px;
border-radius:50% !important;
object-fit:cover;
border:2px solid rgba(255,255,255,0.35);
flex-shrink:0;
}

.pf9meta{
display:flex;
flex-direction:column;
gap:5px;
}

.ty4name{
font-family:'Poppins',sans-serif;
font-weight:600;
font-size:16px;
color:#FFFFFF;
}

.er6star{
color:#F5A623;
font-size:13px;
letter-spacing:1px;
}

/* TEXT */
.ui2text{
font-size:14.5px;
line-height:1.8;
color:rgba(255,255,255,0.85);
position:relative;
z-index:1;
}

.ui2text b{
display:block;
color:#FFFFFF;
margin-bottom:10px;
}

/* DESKTOP LARGE */
@media(min-width:1440px){
.zx3box{ flex:0 0 calc(50vw - 60px); max-width:620px; }
}

/* LAPTOP / SMALL DESKTOP */
@media(max-width:1024px){
.kz9wrap{ padding:48px 18px; }
.pq8title{ font-size:29px; }
.zx3box{ flex:0 0 calc(50vw - 40px); min-height:320px; padding:34px 28px 28px; }
}

/* TABLET */
@media(max-width:768px){
.kz9wrap{ padding:40px 16px; border-radius:12px; }
.pq8title{ font-size:26px; margin-bottom:12px; }
.ax2trust{ font-size:13px; margin-bottom:28px; }
.zx3box{ flex:0 0 calc(50vw - 32px); min-height:300px; padding:30px 24px 26px; margin:6px 10px; }
}

/* MOBILE LANDSCAPE / LARGE PHONE */
@media(max-width:600px){
.kz9wrap{ padding:32px 14px; }
.pq8title{ font-size:24px; }
.ax2trust{
display:flex;
flex-direction:column;
gap:4px;
font-size:12.5px;
}
.zx3box{
flex:0 0 calc(50vw - 24px);
min-height:auto;
padding:26px 20px 22px;
margin:6px 8px;
}
.qw1img{ width:52px; height:52px; }
.ty4name{ font-size:14.5px; }
.ui2text{ font-size:13px; }
.zx3box::before{ font-size:56px; top:12px; right:20px; }
}

/* SMALL PHONE */
@media(max-width:480px){
.kz9wrap{ padding:28px 12px; }
.pq8title{ font-size:21px; }
.zx3box{
flex:0 0 calc(50vw - 20px);
padding:22px 18px 20px;
margin:5px 6px;
}
.pf9head{ gap:10px; margin-bottom:12px; }
.qw1img{ width:46px; height:46px; }
.ui2text{ font-size:12px; line-height:1.6; }
}

/* NARROW PHONE */
@media(max-width:380px){
.kz9wrap{ padding:24px 10px; }
.pq8title{ font-size:19px; }
.zx3box{
flex:0 0 calc(50vw - 16px);
padding:18px 14px 16px;
margin:4px 5px;
border-radius:16px;
}
.ty4name{ font-size:12.5px; }
.er6star{ font-size:11px; }
.ui2text{ font-size:11.5px; }
.zx3box::before{ font-size:40px; }
}



/* ===============================
   PREMIUM MEGA FOOTER
================================ */

.mega-footer{
  font-family:'Poppins',sans-serif;
  background-color: #00112a;
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



.ht_ctc_entry_animation{animation-duration:0.4s;animation-fill-mode:both;animation-delay:0s;animation-iteration-count:1;}			@keyframes ht_ctc_anim_corner {0% {opacity: 0;transform: scale(0);}100% {opacity: 1;transform: scale(1);}}.ht_ctc_an_entry_corner {animation-name: ht_ctc_anim_corner;animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);transform-origin: bottom var(--side, right);}

/* ===== Extracted style block 2 ===== */
/* =========================================================
   NAV BAR FIX: icon font, mobile off-canvas menu, dropdowns
   ========================================================= */

/* 1) The theme's icons were coded for "Font Awesome 6 PRO",
   but only Font Awesome 6 FREE is loaded on this page, so every
   arrow / plus / bullet icon rendered blank. Point at the Free
   font and force the 900 (solid) weight it requires. */
:root{
  --icon-font: "Font Awesome 6 Free" !important;
}
.main-menu ul li.menu-item-has-children > a:after,
.main-menu ul.sub-menu li a:before,
.th-mobile-menu ul li a:before,
.th-mobile-menu ul .th-item-has-children > a:after,
.th-mobile-menu ul .th-item-has-children > a .th-mean-expand:before,
.scroll-top:after{
  font-weight: 900 !important;
}

/* 2) Desktop dropdown arrow: rotate smoothly on hover/open */
.main-menu ul li.menu-item-has-children > a:after{
  transition: transform .25s ease;
  display: inline-block;
}
.main-menu ul li.menu-item-has-children:hover > a:after,
.main-menu ul li.menu-item-has-children.th-touch-active > a:after{
  transform: rotate(180deg);
}

/* 3) Tablets/touch laptops that are >=992px still see the desktop
   nav (it only switches to the hamburger below 992px). Hover
   doesn't exist on touch, so give the same dropdown a "tap to
   open" state driven by a class toggled in JS. */
.main-menu ul li.menu-item-has-children.th-touch-active > ul.sub-menu,
.th-header .main-menu > ul > li.menu-item-has-children.th-touch-active > ul.sub-menu{
  opacity: 1 !important;
  visibility: visible !important;
  z-index: 9999 !important;
  transform: scaleY(1) !important;
}
.th-header .main-menu > ul > li.menu-item-has-children.th-touch-active > ul.sub-menu{
  transform: translateX(-50%) translateY(0) !important;
}

/* 4) Mobile / tablet off-canvas menu (<992px). The theme shipped
   CSS for .th-menu-wrapper / .th-menu-area / .th-mobile-menu but
   the page never had the matching HTML or the JS to open it -
   this adds the missing "open" states the JS below toggles. */
.th-menu-wrapper{
  pointer-events: none;
}
.th-menu-wrapper.th-menu-opened{
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.th-menu-wrapper.th-menu-opened .th-menu-area{
  left: 0;
  opacity: 1;
  visibility: visible;
}
.th-menu-area{
  overflow-y: auto;
}
.th-menu-area .mobile-logo img{
  max-width: 170px;
}
.th-menu-area .th-menu-toggle{
  cursor: pointer;
}
body.th-menu-open-lock{
  overflow: hidden;
}

/* Nested sub-menus inside the mobile panel: collapsed by default,
   toggled open by tapping the round plus icon. */
.th-mobile-menu ul li{
  position: relative;
}
.th-mobile-menu ul .sub-menu{
  display: none;
  padding: 0 0 0 16px;
  margin: 6px 0 0 0;
}
.th-mobile-menu ul li.th-item-has-children.th-submenu-open > .sub-menu{
  display: block;
}
.th-mobile-menu ul .th-item-has-children > a:after{
  cursor: pointer;
  transition: transform .25s ease;
}
.th-mobile-menu ul li.th-item-has-children.th-submenu-open > a:after{
  transform: rotate(45deg);
}
.th-menu-wrapper *{
  box-sizing: border-box;
}

/* ===== Extracted style block 3 ===== */
/* =========================================================
   FIX: hero "shape" decoration graphics bleeding into header
   (red squiggly line across the top nav bar)

   Cause: .elementor-element-2d3d7e1 and .elementor-element-326f311
   are pulled upward with large negative top margins so they tuck
   in behind the header. The offset is too aggressive and the
   second one also has z-index:3, lifting it above the nav bar,
   so the shape streaks across the header instead of sitting
   behind it.
========================================================= */
.elementor-17627 .elementor-element.elementor-element-2d3d7e1 {
    margin-top: 0 !important;
}

.elementor-17627 .elementor-element.elementor-element-326f311 {
    margin-top: 0 !important;
    z-index: 1 !important;
}

/* Belt-and-braces: keep the header stacked above any hero decoration */
.header-layout-default .header-top,
.header-layout-default .menu-area {
    position: relative;
    z-index: 10;
}

/* =========================================================
   FIX: logo sitting too high/low vs. the menu row

   Cause: two conflicting vertical offsets were fighting each
   other -> .header-logo had margin-top:-29px (pulls block up)
   while .header-logo .logo img had margin-top:20px (pushes
   image back down), leaving a net -9px offset that broke the
   row's flexbox vertical centering (align-items-center).
========================================================= */
.header-layout-default .menu-area .header-logo {
    margin-top: 0 !important;
}
.header-logo .logo img {
    margin-top: 0 !important;
}
.header-logo {
    display: flex;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
}
.header-logo .logo {
    display: flex;
    align-items: center;
}

/* =========================================================
   FIX: nav menu dropping to a new line below the logo

   Cause: the logo + nav sit inside a Bootstrap \`.row\`, which
   wraps by default. The wrapping column (.col-xl-auto) only
   gets its "don't shrink/don't wrap" sizing at 1200px+, so
   between ~992px and 1200px the combined width of the logo
   and the full menu doesn't fit and the nav wraps onto its
   own line underneath the logo instead of sitting beside it.
========================================================= */
.menu-area .col-xl-auto > .row {
    flex-wrap: nowrap !important;
}
.menu-area .header-logo,
.menu-area .main-menu {
    flex-shrink: 0;
}
.menu-area .main-menu {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.menu-area .main-menu::-webkit-scrollbar {
    display: none;
}

/* =========================================================
   FIX: broken icon glyphs showing as empty boxes

   Cause: fa-light is a Font Awesome PRO style, and far (regular)
   isn't bundled for these particular icons in the FREE package
   that's actually loaded (all.min.css). Only fas (solid) and
   fab (brands) are guaranteed to render on the free tier, so
   phone / envelope / bars / times were all showing blank tofu
   boxes instead of their icons.
========================================================= */

/* FIX: mobile menu close button straddled the panel edge
   (right:-16.5px placed it half in / half out). Pull it fully
   onto the panel, inside the top-right corner. */
.th-menu-wrapper .th-menu-toggle {
    right: 15px !important;
    top: 15px !important;
}

/* Keep the new inline-SVG icons aligned with their text/buttons
   the same way the old icon-font <i> tags used to sit */
.icon-svg {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
}
.header-links li .icon-svg {
    margin-right: 6px;
    position: relative;
    top: -1px;
}
.th-menu-toggle .icon-svg {
    display: block;
    margin: 0 auto;
}
.header-social a {
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
}
.header-social .icon-svg {
    display: block;
}

/* ===== Extracted style block 4 ===== */
body, .mega-footer, .footer-contact-section,
  .th-header, .main-menu, .th-mobile-menu, .header-links {
    font-family: 'Poppins', 'Noto Sans Tamil', sans-serif;
  }

/* ===== Extracted style block 5 ===== */
/* =====================================================================
   MASTER RESPONSIVE SYSTEM - HEADER / NAVIGATION (ALL DEVICE TIERS)
   =====================================================================
   Single source of truth for how the header/nav behaves across every
   screen size. Consolidates and replaces the earlier scattered laptop-
   only and gap-only patches. Visual design (colors, fonts, layout
   structure) is unchanged - this only controls spacing, sizing and
   fit at each breakpoint so nothing overlaps, wraps, or leaves dead
   gaps on any device.

   TIERS COVERED:
     1. 1922px and up        - 4K / ultra-wide monitors
     2. 1600px - 1921px      - large desktop
     3. 1400px - 1599px      - standard desktop
     4. 1200px - 1399px      - small desktop
     5. 992px  - 1199px      - laptop (last tier with the full
                                horizontal menu before hamburger mode)
     6. 768px  - 991px       - tablet landscape (hamburger mode begins)
     7. 576px  - 767px       - tablet portrait / large phone
     8. 480px  - 575px       - mobile
     9. 360px  - 479px       - small mobile
    10. below 360px          - extra small / legacy devices
   ===================================================================== */

/* Structural fix kept from the previous gap patch: the menu row must
   stay flex-start (not space-between) now that the old empty column
   has been removed from the HTML, otherwise the browser will still
   try to insert artificial space on the right. */
.menu-area .container-fluid > .row.align-items-center.justify-content-between {
    justify-content: flex-start !important;
}

/* ===========================================================
   TIER 1 - 4K / ULTRA-WIDE (min-width: 1922px)
   =========================================================== */
@media (min-width: 1922px) {
  .header-logo .logo img { width: 200px !important; }
  .header-layout-default .menu-area { padding-right: 188px !important; }
  .header-layout-default .menu-area .main-menu { margin-left: 60px !important; }
  .main-menu > ul > li { margin: 0 16px !important; }
  .main-menu a { font-size: 17px !important; }
  .header-layout-default .header-top { padding-right: 188px !important; }
  .header-links li:not(:last-child) { margin: 0 22px 0 0 !important; padding: 0 24px 0 0 !important; }
}

/* ===========================================================
   TIER 2 - LARGE DESKTOP (1600px - 1921px)
   =========================================================== */
@media (min-width: 1600px) and (max-width: 1921px) {
  .header-logo .logo img { width: 185px !important; }
  .header-layout-default .menu-area { padding-right: 110px !important; }
  .header-layout-default .menu-area .main-menu { margin-left: 50px !important; }
  .main-menu > ul > li { margin: 0 14px !important; }
  .main-menu a { font-size: 16px !important; }
  .header-layout-default .header-top { padding-right: 110px !important; }
}

/* ===========================================================
   TIER 3 - STANDARD DESKTOP (1400px - 1599px)
   =========================================================== */
@media (min-width: 1400px) and (max-width: 1599px) {
  .header-logo .logo img { width: 170px !important; }
  .header-layout-default .menu-area { padding-right: 70px !important; }
  .header-layout-default .menu-area .main-menu { margin-left: 36px !important; }
  .main-menu > ul > li { margin: 0 11px !important; }
  .main-menu a { font-size: 15px !important; }
  .header-layout-default .header-top { padding-right: 70px !important; }
}

/* ===========================================================
   TIER 4 - SMALL DESKTOP (1200px - 1399px)
   =========================================================== */
@media (min-width: 1200px) and (max-width: 1399px) {
  .header-logo .logo img { width: 168px !important; }
  .header-layout-default .menu-area { padding-right: 44px !important; }
  .header-layout-default .menu-area .main-menu { margin-left: 24px !important; }
  .main-menu > ul > li { margin: 0 8px !important; }
  .main-menu a { font-size: 13.5px !important; }
  .header-layout-default .header-top { padding-right: 44px !important; }
}

/* ===========================================================
   TIER 5 - LAPTOP (992px - 1199px)
   Last tier before the hamburger toggle takes over. This site
   has 9 top-level items (Home, Courses, Services, Counselling,
   Entrance Exams, Scholarships, Colleges, Blog, About),
   so spacing is deliberately tight here to keep them on one line.
   =========================================================== */
@media (min-width: 992px) and (max-width: 1199px) {
  .header-logo .logo img { width: 165px !important; }
  .header-layout-default .menu-area { padding-right: 24px !important; padding-left: 10px !important; }
  .header-layout-default .menu-area .main-menu { margin-left: 6px !important; }
  .main-menu > ul > li { margin: 0 3px !important; }
  .main-menu a { font-size: 12px !important; }
  .main-menu ul li.menu-item-has-children > a:after { margin-left: 1px !important; }
  .header-layout-default .header-top { padding: 9px 24px !important; }
  .header-links li:not(:last-child) { margin: 0 10px 0 0 !important; padding: 0 10px 0 0 !important; }
}

/* ===========================================================
   TIER 6 - TABLET LANDSCAPE (768px - 991px)
   Hamburger toggle replaces the horizontal menu below 992px,
   so this tier tunes the collapsed-header layout instead.
   =========================================================== */
@media (min-width: 768px) and (max-width: 991px) {
  .header-logo .logo img { width: 160px !important; }
  .header-layout-default .menu-area { padding: 0 20px !important; }
  .header-layout-default .header-top { padding: 9px 20px !important; }
  .header-links li:not(:last-child) { margin: 0 8px 0 0 !important; padding: 0 8px 0 0 !important; }
  .header-links a, .header-links span, .header-links p { font-size: 14px !important; }
  .th-menu-area { max-width: 320px !important; }
}

/* ===========================================================
   TIER 7 - TABLET PORTRAIT / LARGE PHONE (576px - 767px)
   =========================================================== */
@media (min-width: 576px) and (max-width: 767px) {
  .header-logo .logo img { width: 145px !important; }
  .header-layout-default .menu-area { padding: 0 16px !important; }
  .header-layout-default .header-top { padding: 8px 16px !important; }
  .header-links li:not(:last-child) { margin: 0 6px 0 0 !important; padding: 0 6px 0 0 !important; }
  .header-links a, .header-links span, .header-links p { font-size: 13px !important; }
  .header-links ul li a.admission_enquiry { padding: 7px 10px !important; font-size: 13px !important; }
  .th-menu-area { max-width: 300px !important; }
}

/* ===========================================================
   TIER 8 - MOBILE (480px - 575px)
   =========================================================== */
@media (min-width: 480px) and (max-width: 575px) {
  .header-logo .logo img { width: 125px !important; }
  .header-layout-default .menu-area { padding: 0 12px !important; }
  .header-layout-default .header-top { padding: 8px 12px !important; }
  .header-links.header-right li:first-child { padding-right: 0 !important; }
  .header-links ul li a.admission_enquiry { padding: 6px 9px !important; font-size: 12.5px !important; }
  .th-menu-area { max-width: 280px !important; }
  .th-menu-toggle { width: 42px !important; height: 42px !important; font-size: 16px !important; }
}

/* ===========================================================
   TIER 9 - SMALL MOBILE (360px - 479px)
   =========================================================== */
@media (min-width: 360px) and (max-width: 479px) {
  .header-logo .logo img { width: 108px !important; }
  .header-layout-default .menu-area { padding: 0 10px !important; }
  .header-layout-default .header-top { padding: 7px 10px !important; }
  .header-links li a { font-size: 12px !important; }
  .header-links ul li a.admission_enquiry { padding: 6px 8px !important; font-size: 11.5px !important; }
  .th-menu-area { max-width: 92vw !important; }
  .th-menu-toggle { width: 38px !important; height: 38px !important; font-size: 14px !important; }
}

/* ===========================================================
   TIER 10 - EXTRA SMALL / LEGACY DEVICES (below 360px)
   =========================================================== */
@media (max-width: 359px) {
  .header-logo .logo img { width: 95px !important; }
  .header-layout-default .menu-area { padding: 0 8px !important; }
  .header-layout-default .header-top { padding: 6px 8px !important; }
  .header-links li a { font-size: 11px !important; }
  .header-links ul li a.admission_enquiry { padding: 5px 7px !important; font-size: 11px !important; }
  .th-menu-area { max-width: 100vw !important; }
  .th-menu-toggle { width: 34px !important; height: 34px !important; font-size: 13px !important; }
}

/* ===== Extracted style block 6 ===== */
/* =========================================================
   STICKY MAIN NAV + STICKY SECTION-TABS BAR + HERO BACK BTN
   ========================================================= */
:root{
  --sticky-header-h: 92px; /* fallback until JS measures the real height */
}

/* ---------- 1) Sticky main navigation (logo + menu row) ----------
   Implemented as a JS-toggled position:fixed instead of position:sticky.
   Sticky can silently fail to escape an ancestor that has overflow or a
   transform set somewhere in the site's external stylesheet — fixed +
   a spacer sidesteps that entirely and always works. */
.sticky-wrapper-spacer{
  display: none;
  width: 100%;
}
.sticky-wrapper-spacer.is-active{
  display: block;
}
.th-header .sticky-wrapper.js-pinned{
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 1000 !important;
  background: #fff;
  box-shadow: 0 6px 18px rgba(15, 23, 42, .12);
}

/* ---------- 2) Sticky section-tabs bar (Overview / About / ...) ---------- */
.sec-tabs-spacer{
  display: none;
  width: 100%;
}
.sec-tabs-spacer.is-active{
  display: block;
}
.sec-tabs-wrap.js-pinned{
  position: fixed !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 900 !important;
  background: #fff;
  border-bottom: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 8px 16px rgba(15, 23, 42, .07);
}

/* ---------- 3) "Back to All Colleges" merged into the hero ----------
   Placed in normal flow as the first row of .hero-content (not
   absolutely positioned) so it can never overlap the logo/badge
   row below it, regardless of the hero's own internal padding. */
.back-bar{
  display: none !important; /* replaced by the hero-back-btn below */
}
.college-hero{
  position: relative;
}
.hero-back-btn{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  margin: 0 0 16px 0;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .32);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  white-space: nowrap;
  transition: background .2s ease, transform .2s ease;
}
.hero-back-btn:hover{
  background: rgba(255, 255, 255, .26);
  transform: translateX(-2px);
  color: #fff;
}
.hero-back-btn i{
  font-size: 14px;
}
@media (max-width: 576px){
  .hero-back-btn{
    padding: 7px 12px;
    font-size: 12px;
    margin-bottom: 12px;
  }
}

/* ===== Extracted style block 7 ===== */
.csclg_wrap *{ box-sizing:border-box; }

.csclg_wrap .sblock-hd{ margin-bottom:16px; }

.csclg_sub{
  font-size:13px;
  color:#64748b;
  margin:-8px 0 18px;
  font-family:'Poppins',sans-serif;
}

/* ============ THE FORM ITSELF — clearly framed as a form ============ */

.csclg_formbox{
  background:linear-gradient(180deg,#f7f9fc,#eef2f9);
  border:2px dashed rgba(3,57,143,.25);
  border-radius:16px;
  padding:26px 24px;
  font-family:'Poppins',sans-serif;
}

.csclg_formbox_hd{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:20px;
}

.csclg_formbox_ico{
  width:34px;
  height:34px;
  border-radius:9px;
  background:#03398f;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
  flex-shrink:0;
}

.csclg_formbox_hd h5{
  margin:0;
  font-size:15.5px;
  font-weight:800;
  color:#0f172a;
}

.csclg_formbox_hd span{
  display:block;
  font-size:11.5px;
  font-weight:500;
  color:#64748b;
  margin-top:1px;
}

.csclg_grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}

.csclg_field{ display:flex; flex-direction:column; gap:8px; }
.csclg_field.csclg_full{ grid-column:1 / -1; }

.csclg_label{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:12.5px;
  font-weight:700;
  color:#334155;
  letter-spacing:.2px;
}

.csclg_label_ico{
  width:24px;
  height:24px;
  border-radius:7px;
  background:#03398f;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:11.5px;
  flex-shrink:0;
}

.csclg_input,
.csclg_textarea{
  width:100%;
  background:#ffffff;
  border:1.8px solid #cbd5e1;
  border-radius:11px;
  padding:13px 15px;
  font-size:14px;
  color:#0f172a;
  font-family:'Poppins',sans-serif;
  outline:none;
  transition:.2s;
  box-shadow:0 1px 2px rgba(15,23,42,.04);
}

.csclg_input::placeholder,
.csclg_textarea::placeholder{ color:#9aa5b1; }

.csclg_input:focus,
.csclg_textarea:focus{
  border-color:#03398f;
  background:#fff;
  box-shadow:0 0 0 4px rgba(3,57,143,.12);
}

.csclg_input[readonly]{
  background:linear-gradient(135deg,rgba(3,57,143,.08),rgba(212,175,55,.1));
  border-color:rgba(3,57,143,.35);
  color:#03398f;
  font-weight:700;
  cursor:not-allowed;
  box-shadow:none;
}

.csclg_textarea{ resize:vertical; min-height:80px; }

.csclg_btn{
  width:100%;
  margin-top:6px;
  padding:15px;
  border:none;
  border-radius:12px;
  background:linear-gradient(135deg,#03398f,#052c6e);
  color:#fff;
  font-size:15px;
  font-weight:700;
  cursor:pointer;
  transition:.25s;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  letter-spacing:.2px;
  font-family:'Poppins',sans-serif;
  box-shadow:0 10px 24px rgba(3,57,143,.25);
}

.csclg_btn:hover{ transform:translateY(-2px); box-shadow:0 14px 30px rgba(3,57,143,.32); }
.csclg_btn:disabled{ opacity:.7; cursor:not-allowed; transform:none; box-shadow:none; }

.csclg_note{
  margin-top:10px;
  font-size:11.5px;
  color:#94a3b8;
  text-align:center;
}

.csclg_success{
  display:none;
  align-items:center;
  justify-content:center;
  gap:7px;
  margin-top:12px;
  padding:11px 14px;
  border-radius:10px;
  background:rgba(22,163,74,.08);
  border:1px solid rgba(22,163,74,.25);
  color:#15803d;
  font-size:13px;
  font-weight:600;
  text-align:center;
}
.csclg_success.csclg_show{ display:flex; }

@media(max-width:768px){
  .csclg_grid{ grid-template-columns:1fr; }
  .csclg_formbox{ padding:20px 16px; }
}

@media(max-width:480px){
  .csclg_sub{ font-size:12px; }
  .csclg_formbox_hd h5{ font-size:14px; }
}

/* ===== Extracted style block 8 ===== */
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

/* ===== Extracted style block 9 ===== */
.csclg-float-stack{
  position: fixed;
  right: 20px;
  bottom: 30px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.csclg-float-btn{
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.csclg-float-btn:hover{
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.csclg-float-btn.whatsapp{
  background: #25D366;
}
.csclg-float-btn.whatsapp img{
  width: 30px;
  height: 30px;
}
.csclg-float-btn.form-icon{
  background: var(--theme-color, #0D5EF4);
  color: #fff;
  font-size: 22px;
}
.csclg-float-badge{
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--theme-color2, #F20F10);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  animation: csclgBadgePulse 1.6s ease-in-out infinite;
}
@keyframes csclgBadgePulse{
  0%   { box-shadow: 0 0 0 0 rgba(242,15,16,0.55); }
  70%  { box-shadow: 0 0 0 8px rgba(242,15,16,0); }
  100% { box-shadow: 0 0 0 0 rgba(242,15,16,0); }
}
.csclg-float-btn.scrolltop{
  background: #fff;
  color: var(--theme-color, #0D5EF4);
  font-size: 20px;
  border: 2px solid var(--theme-color, #0D5EF4);
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: opacity 250ms ease, transform 250ms ease, visibility 250ms;
}
.csclg-float-btn.scrolltop.show{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
@media (max-width: 480px){
  .csclg-float-stack{ right: 14px; bottom: 20px; gap: 10px; }
  .csclg-float-btn{ width: 48px; height: 48px; }
  .csclg-float-btn.whatsapp img{ width: 26px; height: 26px; }
  .csclg-float-btn.form-icon{ font-size: 19px; }
  .csclg-float-btn.scrolltop{ font-size: 17px; }
}
`}</style>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null) // mobile accordion: index of open top-level item
  const [touchActive, setTouchActive] = useState(null) // desktop tap-to-open: index of open item
  const [isPinned, setIsPinned] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const wrapperRef = useRef(null)
  const headerTopRef = useRef(null)
  const stickyRef = useRef(null)

  // Lock body scroll while the off-canvas panel is open, close on Escape.
  useEffect(() => {
    document.body.classList.toggle('th-menu-open-lock', mobileOpen)
    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  // Scroll behavior: the contact/social top bar scrolls away, then the
  // main navigation becomes fixed to the viewport. A spacer preserves the
  // document flow so the page never jumps when the nav is pinned.
  useEffect(() => {
    const update = () => {
      const top = headerTopRef.current
      const nav = stickyRef.current
      if (!top || !nav) return
      const threshold = Math.max(1, top.getBoundingClientRect().height - 1)
      const pinned = window.scrollY >= threshold
      setIsPinned((prev) => (prev === pinned ? prev : pinned))
      setNavHeight(nav.offsetHeight || 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Close the desktop tap-to-open dropdown when clicking anywhere else.
  useEffect(() => {
    function onDocClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setTouchActive(null)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  function closeMobile() {
    setMobileOpen(false)
  }

  function handleDesktopParentClick(e, index) {
    // Only intercept on touch/coarse-pointer devices (tablets, touch laptops
    // above the 992px breakpoint where the hamburger hasn't taken over yet).
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (!isTouch || window.innerWidth < 992) return // handled by the mobile panel instead

    if (touchActive !== index) {
      e.preventDefault()
      setTouchActive(index)
    }
    // Second tap while already open: let the link navigate normally.
  }

  function toggleMobileSubmenu(index) {
    setOpenSubmenu((prev) => (prev === index ? null : index))
  }

  return (
    <header className="th-header header-layout-default prebuilt" ref={wrapperRef}>
      <NavbarStyles />
      <div className="logo-bg-half" />

      <div className="header-top" ref={headerTopRef}>
        <div className="container-fluid">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <svg
                      className="icon-svg icon-svg-phone"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20.8c0 .6-.4 1-1 1C10.6 21.8 2.2 13.4 2.2 2.8c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z" />
                    </svg>
                    <a href="tel:9865553629,9543854321">98655 53629 , 95438 54321</a>
                  </li>
                  <li className="d-none d-xl-inline-block">
                    <svg
                      className="icon-svg icon-svg-envelope"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 5.5C2 4.7 2.7 4 3.5 4h17c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5h-17c-.8 0-1.5-.7-1.5-1.5v-13zm2.2.5 7.3 6 7.3-6H4.2zM20 7.9l-7.4 6.1a1 1 0 0 1-1.2 0L4 7.9V18h16V7.9z" />
                    </svg>
                    <a href="mailto:info@collegeshine.com">info@collegeshine.com</a>
                  </li>
                  <li>
                    <a className="admission_enquiry" href="/tools/admission-helpline/">
                      Admission Enquiry
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-auto">
              <div className="header-links header-right">
                <ul>
                  <li>
                    <div className="header-social">
                      <a href="http://facebook.com/collegeshine" aria-label="Facebook">
                        <svg
                          className="icon-svg icon-svg-facebook"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/@collegeshine" aria-label="YouTube">
                        <svg
                          className="icon-svg icon-svg-youtube"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5C1.6 4.3.8 5.1.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                        </svg>
                      </a>
                      <a href="https://instagram.com/collegeshine" aria-label="Instagram">
                        <svg
                          className="icon-svg icon-svg-instagram"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.8.4-1.2.7-.3.3-.6.7-.7 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.7 1.2.3.3.7.6 1.2.7.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.7.3-.3.6-.7.7-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.7-1.2-.3-.3-.7-.6-1.2-.7-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1zm0 4.3a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4zm0 1.8a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8zm6-2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sticky-wrapper-spacer${isPinned ? ' is-active' : ''}`}
        style={{ height: isPinned ? `${navHeight}px` : 0 }}
        aria-hidden="true"
      />
      <div
        className={`sticky-wrapper${isPinned ? ' js-pinned' : ''}`}
        ref={stickyRef}
      >
        <div className="menu-area">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-auto">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a className="logo" href="/">
                        <img
                          alt="logo"
                          className="img-fluid"
                          sizes="(max-width: 480px) 150px, (max-width: 820px) 150px, (max-width: 1536px) 150px, 150px"
                          src={LOGO_URL}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-auto">
                    <nav className="main-menu hide-icon d-none d-lg-inline-block" aria-label="Primary navigation">
                      <ul id="menu-primary-menu-1">
                        {MENU_ITEMS.map((item, index) => (
                          <li
                            key={item.label}
                            className={item.children ? 'menu-item-has-children' : undefined}
                          >
                            <a
                              href={item.href}
                              aria-current={index === 0 ? 'page' : undefined}
                              onClick={
                                item.children ? (e) => handleDesktopParentClick(e, index) : undefined
                              }
                            >
                              {item.label}
                            </a>
                            {item.children && (
                              <ul className="sub-menu">
                                {item.children.map((child) => (
                                  <li key={child.label}>
                                    <a href={child.href}>{child.label}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <button
                      className="th-menu-toggle d-block d-lg-none"
                      type="button"
                      onClick={() => setMobileOpen(true)}
                    >
                      <svg
                        className="icon-svg icon-svg-bars"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <rect x="2" y="5" width="20" height="2.4" rx="1.2" />
                        <rect x="2" y="10.8" width="20" height="2.4" rx="1.2" />
                        <rect x="2" y="16.6" width="20" height="2.4" rx="1.2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>
      </div>

      {/* ===== Mobile / tablet off-canvas menu ===== */}
      <div
        className={`th-menu-wrapper${mobileOpen ? ' th-menu-opened' : ''}`}
        aria-hidden={!mobileOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMobile()
        }}
      >
        <div className="th-menu-area">
          <button
            type="button"
            className="th-menu-toggle"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <svg
              className="icon-svg icon-svg-times"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.3 5.3a1 1 0 0 1 1.4 0L12 10.6l5.3-5.3a1 1 0 1 1 1.4 1.4L13.4 12l5.3 5.3a1 1 0 0 1-1.4 1.4L12 13.4l-5.3 5.3a1 1 0 0 1-1.4-1.4l5.3-5.3-5.3-5.3a1 1 0 0 1 0-1.4z" />
            </svg>
          </button>

          <div className="mobile-logo">
            <a href="/">
              <img alt="logo" src={LOGO_URL} />
            </a>
          </div>

          <div className="th-mobile-menu">
            <ul>
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className={
                    item.children
                      ? `th-item-has-children${openSubmenu === index ? ' th-submenu-open' : ''}`
                      : undefined
                  }
                >
                  <a
                    href={item.href}
                    onClick={
                      item.children
                        ? (e) => {
                            e.preventDefault()
                            toggleMobileSubmenu(index)
                          }
                        : closeMobile
                    }
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="sub-menu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={closeMobile}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

import React from 'react'

const MARKUP = `<div class="sa-wrap">
<div class="sa-hero">
  <div class="sa-badge">
    <svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l7.5 3L14 21l7-18z"/></svg>
    Study Abroad
  </div>
  <h2>Explore. Study.Succeed Globally.</h2>
  <p>Discover popular study destinations, explore your options and get the guidance you need to plan your international education journey.</p>
</div>

<!-- ══ CAROUSEL ══ -->
<div class="sa-section">
  <div class="sa-carousel-wrap">

    <button class="sa-nav sa-prev" id="saPrev" aria-label="Previous" disabled>
      <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="sa-nav sa-next" id="saNext" aria-label="Next">
      <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
    </button>

    <div class="sa-track" id="saTrack">

      <!-- ── Germany ── -->
      <div class="sa-card" data-c="de">
        <div class="sa-photo">
          <img src="https://collegeshine.com/wp-content/uploads/2026/09/germany-collegeshine.webp" alt="Brandenburg Gate, Germany" loading="lazy">
          <div class="sa-icon-ring">
            <svg viewBox="0 0 40 40">
              <path d="M10 30h20M11 30V17M15 30V17M20 30V17M25 30V17M29 30V17M8 17l12-8 12 8M18 9l2-2 2 2"/>
              <circle cx="20" cy="6" r="1.4" fill="currentColor" stroke="none"/>
            </svg>
          </div>
        </div>
        <div class="sa-body">
          <div class="sa-card-title">Study in Germany</div>
          <a class="sa-colleges" href="/services/abroad-admission/">Colleges Available <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a>
          <div class="sa-stats">
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/></svg></div>
              <div><b>138</b><span>No. Of Colleges</span></div>
            </div>
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/></svg></div>
              <div><b>5.25 K USD/Year</b><span> Estimated Study Cost</span></div>
            </div>
          </div>
          <div class="sa-guides-head">Guides</div>
          <ul class="sa-guides">
            <li><a href="/services/abroad-admission/">Why Study in Germany? <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Top Universities in Germany <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">SOP for Germany <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Scholarships in Germany <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
          </ul>
        </div>
      </div>
      
      <!-- ── Ireland ── -->
<div class="sa-card" data-c="ie">

  <div class="sa-photo">
    <img
      src="https://collegeshine.com/wp-content/uploads/2026/09/ireland-abroad-image-collegeshine-1.webp"
      alt="Dublin, Ireland"
      loading="lazy"
    >

    <div class="sa-icon-ring">
      <svg viewBox="0 0 40 40">
        <path d="M10 30h20M11 30V17M15 30V17M20 30V17M25 30V17M29 30V17M8 17l12-8 12 8M18 9l2-2 2 2"/>
        <circle
          cx="20"
          cy="6"
          r="1.4"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </div>
  </div>

  <div class="sa-body">

    <div class="sa-card-title">
      Study in Ireland
    </div>

    <a
      class="sa-colleges"
      href="/services/abroad-admission/"
    >
      Colleges Available

      <svg viewBox="0 0 16 16">
        <path d="M6 3l5 5-5 5"/>
      </svg>
    </a>

    <div class="sa-stats">

      <!-- Number of colleges -->
      <div class="sa-stat">

        <div class="sa-stat-icon">
          <svg viewBox="0 0 24 24">
            <path d="M22 10 12 5 2 10l10 5 10-5Z"/>
            <path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/>
          </svg>
        </div>

        <div>
          <b>17</b>
          <span>No. Of Colleges</span>
        </div>

      </div>


      <!-- Estimated study cost -->
      <div class="sa-stat">

        <div class="sa-stat-icon">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"/>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>
          </svg>
        </div>

        <div>
          <b>6 K USD/ Year</b>
          <span>Estimated Study Cost</span>
        </div>

      </div>

    </div>


    <div class="sa-guides-head">
      Guides
    </div>

    <ul class="sa-guides">

      <li>
        <a href="/services/abroad-admission/">
          Why Study in Ireland?

          <svg viewBox="0 0 16 16">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </a>
      </li>

      <li>
        <a href="/services/abroad-admission/">
          Top Universities in Ireland

          <svg viewBox="0 0 16 16">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </a>
      </li>

      <li>
        <a href="/services/abroad-admission/">
          SOP for Ireland

          <svg viewBox="0 0 16 16">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </a>
      </li>

      <li>
        <a href="/services/abroad-admission/">
          Scholarships in Ireland

          <svg viewBox="0 0 16 16">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </a>
      </li>

    </ul>

  </div>

</div>

      <!-- ── United Kingdom ── -->
      <div class="sa-card" data-c="uk">
        <div class="sa-photo">
          <img src="https://collegeshine.com/wp-content/uploads/2026/09/uk-collegeshine-2.webp" alt="Big Ben and Houses of Parliament, UK" loading="lazy">
          <div class="sa-icon-ring">
            <svg viewBox="0 0 40 40">
              <rect x="16" y="8" width="8" height="24" rx="1"/>
              <path d="M14 8h12M15 12h10M20 5v3M17 32h6"/>
              <circle cx="20" cy="15" r="1.4" fill="currentColor" stroke="none"/>
            </svg>
          </div>
        </div>
        <div class="sa-body">
          <div class="sa-card-title">Study in the UK</div>
          <a class="sa-colleges" href="/services/abroad-admission/">Colleges Available <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a>
          <div class="sa-stats">
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/></svg></div>
              <div><b>210</b><span>No. Of Colleges</span></div>
            </div>
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/></svg></div>
              <div><b>18.5 K USD/Year</b><span> Estimated Study Cost</span></div>
            </div>
          </div>
          <div class="sa-guides-head">Guides</div>
          <ul class="sa-guides">
            <li><a href="/services/abroad-admission/">Why Study in the UK? <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Top Universities in the UK <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">UK Student Visa <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Scholarships in the UK <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
          </ul>
        </div>
      </div>

      <!-- ── France ── -->
      <div class="sa-card" data-c="fr">
        <div class="sa-photo">
          <img src="https://collegeshine.com/wp-content/uploads/2026/09/france-collegeshine.webp" alt="Eiffel Tower, France" loading="lazy">
          <div class="sa-icon-ring">
            <svg viewBox="0 0 40 40">
              <path d="M20 6l-6 24h4l2-9 2 9h4l-6-24zM15 18h10M17 24h6"/>
            </svg>
          </div>
        </div>
        <div class="sa-body">
          <div class="sa-card-title">Study in France</div>
          <a class="sa-colleges" href="/services/abroad-admission/">Colleges Available <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a>
          <div class="sa-stats">
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/></svg></div>
              <div><b>95</b><span>No. Of Colleges</span></div>
            </div>
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/></svg></div>
              <div><b>11.2 K USD/Year</b><span> Estimated Study Cost</span></div>
            </div>
          </div>
          <div class="sa-guides-head">Guides</div>
          <ul class="sa-guides">
            <li><a href="/services/abroad-admission/">Why Study in France? <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Top Universities in France <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">SOP for France <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Scholarships in France <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
          </ul>
        </div>
      </div>

      <!-- ── Australia ── -->
      <div class="sa-card" data-c="au">
        <div class="sa-photo">
          <img src="https://collegeshine.com/wp-content/uploads/2026/09/australia-collegeshine.webp" alt="Sydney Opera House, Australia" loading="lazy">
          <div class="sa-icon-ring">
            <svg viewBox="0 0 40 40">
              <path d="M8 30c2-8 6-13 12-13s10 5 12 13M6 30h28M12 30c1-6 4-10 8-10s7 4 8 10"/>
            </svg>
          </div>
        </div>
        <div class="sa-body">
          <div class="sa-card-title">Study in Australia</div>
          <a class="sa-colleges" href="/services/abroad-admission/">Colleges Available <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a>
          <div class="sa-stats">
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/></svg></div>
              <div><b>175</b><span>No. Of Colleges</span></div>
            </div>
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/></svg></div>
              <div><b>28.9 K USD/Year</b><span> Estimated Study Cost</span></div>
            </div>
          </div>
          <div class="sa-guides-head">Guides</div>
          <ul class="sa-guides">
            <li><a href="/services/abroad-admission/">Why Study in Australia? <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Top Universities in Australia <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Australia Student Visa <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Scholarships in Australia <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
          </ul>
        </div>
      </div>

      <!-- ── Russia ── -->
      <div class="sa-card" data-c="ru">
        <div class="sa-photo">
          <img src="https://collegeshine.com/wp-content/uploads/2026/09/russia-collegeshine-2.webp" alt="Saint Basil's Cathedral, Russia" loading="lazy">
          <div class="sa-icon-ring">
            <svg viewBox="0 0 40 40">
              <path d="M10 30V20a4 4 0 0 1 4-4h1a3 3 0 0 0 3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 0 3 3h1a4 4 0 0 1 4 4v10"/>
              <path d="M8 30h24"/>
              <circle cx="20" cy="10" r="1.4" fill="currentColor" stroke="none"/>
            </svg>
          </div>
        </div>
        <div class="sa-body">
          <div class="sa-card-title">Study in Russia</div>
          <a class="sa-colleges" href="/services/abroad-admission/">Colleges Available <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a>
          <div class="sa-stats">
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/></svg></div>
              <div><b>60</b><span>No. Of Colleges</span></div>
            </div>
            <div class="sa-stat">
              <div class="sa-stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/></svg></div>
              <div><b>4.8 K USD/Year</b><span> Estimated Study Cost</span></div>
            </div>
          </div>
          <div class="sa-guides-head">Guides</div>
          <ul class="sa-guides">
            <li><a href="/services/abroad-admission/">Why Study in Russia? <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Top Universities in Russia <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">MBBS in Russia <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
            <li><a href="/services/abroad-admission/">Scholarships in Russia <svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></a></li>
          </ul>
        </div>
      </div>

    </div><!-- /sa-track -->

    <!-- Dots -->
    <div class="sa-dots" id="saDots">
      <button class="sa-dot active" data-i="0" aria-label="Germany"></button>
      <button class="sa-dot" data-i="1" aria-label="United Kingdom"></button>
      <button class="sa-dot" data-i="2" aria-label="France"></button>
      <button class="sa-dot" data-i="3" aria-label="Australia"></button>
      <button class="sa-dot" data-i="4" aria-label="Russia"></button>
    </div>

  </div>
</div><!-- /sa-section -->

<!-- ══ CTA BANNER ══ -->
<div class="sa-cta-wrap">
  <div class="sa-cta" id="saCtaBanner">
    <div class="sa-cta-left">
      <div class="sa-cta-illo">
        <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
          <circle cx="42" cy="60" r="28" fill="#c5c3f0" opacity=".45"/>
          <circle cx="42" cy="60" r="27" fill="none" stroke="#6c63ff" stroke-width="2"/>
          <ellipse cx="42" cy="60" rx="13" ry="27" fill="none" stroke="#6c63ff" stroke-width="1.5"/>
          <line x1="15" y1="60" x2="69" y2="60" stroke="#6c63ff" stroke-width="1.5"/>
          <rect x="10" y="72" width="36" height="7" rx="2" fill="#6c63ff"/>
          <rect x="8" y="79" width="38" height="6" rx="2" fill="#8d84ff"/>
          <rect x="12" y="85" width="32" height="5" rx="2" fill="#a89cf5"/>
          <polygon points="42,20 62,28 42,36 22,28" fill="#6c63ff"/>
          <rect x="40" y="28" width="4" height="11" fill="#6c63ff"/>
          <circle cx="42" cy="40" r="3.5" fill="#6c63ff"/>
          <rect x="56" y="72" width="20" height="14" rx="3" fill="#5548e0"/>
          <rect x="59" y="75" width="14" height="2" rx="1" fill="#fff" opacity=".6"/>
          <rect x="59" y="79" width="9" height="2" rx="1" fill="#fff" opacity=".4"/>
        </svg>
      </div>
      <div class="sa-cta-text">
        <h3>Planning to Study Abroad?</h3>
        <p>Get expert guidance on universities, applications,<br>visas, scholarships and more.</p>
      </div>
    </div>
    <button type="button" class="sa-cta-btn" id="saOpenModal">
      <svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l7.5 3L14 21l7-18z"/></svg>
      Get Free Counselling
    </button>
  </div>
</div>

<!-- ══ GET FREE COUNSELLING — POPUP FORM ══ -->
<div class="sa-modal-overlay" id="saModalOverlay">
  <div class="sa-modal" role="dialog" aria-modal="true" aria-labelledby="saModalTitle">
    <button type="button" class="sa-modal-close" id="saModalClose" aria-label="Close">
      <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>

    <div class="sa-modal-head">
      <div class="sa-modal-badge">
        <svg viewBox="0 0 24 24"><path d="M21 3L3 10.5l7.5 3L14 21l7-18z"/></svg>
        Free Counselling
      </div>
      <h3 id="saModalTitle">Get Free Study Abroad Counselling</h3>
      <p>Share a few details and our counsellor will reach out with the right options for you.</p>
    </div>

    <form class="sa-modal-form" id="saModalForm">
      <div class="sa-field">
        <label for="saName">Full Name</label>
        <input type="text" id="saName" name="your-name" placeholder="Enter your full name"
               oninput="this.value=this.value.replace(/[^a-zA-Z\\s]/g,'')" required>
      </div>

      <div class="sa-field">
        <label for="saPhone">Mobile Number</label>
        <input type="tel" id="saPhone" name="your-phone" placeholder="Enter your 10-digit mobile number"
               oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,10)" required>
      </div>

      <div class="sa-field">
        <label for="saEmail">Email Address</label>
        <input type="email" id="saEmail" name="your-email" placeholder="Enter your email address"
               oninput="this.value=this.value.toLowerCase().replace(/[^a-z0-9@._-]/g,'')" required>
      </div>

      <div class="sa-field">
        <label for="saCountry">Preferred Country</label>
        <select id="saCountry" name="your-country" required>
          <option value="">Select a country</option>
          <option>Germany</option>
          <option>United Kingdom</option>
          <option>France</option>
          <option>Australia</option>
          <option>Russia</option>
        </select>
      </div>

      <button type="submit" class="sa-modal-btn" id="saModalBtn">Get Free Counselling</button>

      <div class="sa-modal-msg" id="saModalMsg"></div>
    </form>
  </div>
</div>

</div><!-- /sa-wrap -->`

export default function StudyAbroadSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}

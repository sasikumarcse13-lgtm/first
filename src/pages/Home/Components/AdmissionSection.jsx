import React from 'react'

const MARKUP = `<section class="cs-admission">
  <!-- =====================================================
       HEADER
       ===================================================== -->
  <div class="cs-admission__header cs-reveal">
    <div class="cs-admission__eyebrow">
      <div class="cs-admission__eyebrow-mark"></div>
      <div class="cs-admission__eyebrow-text">
        Our Admission Services
      </div>
      <div class="cs-admission__eyebrow-mark"></div>
    </div>
    <h2 class="cs-admission__title">
      Your Future Starts With the Right Admission.
    </h2>
    <p class="cs-admission__desc">
      From choosing the right course and college to completing your admission journey, CollegeShine provides trusted guidance and personalised support every step of the way.
    </p>
  </div>
  <!-- =====================================================
       MAIN LAYOUT
       ===================================================== -->
  <div
    class="cs-admission__layout"
    id="csAdmission"
  >
    <!-- ===================================================
         SERVICE CARDS
         =================================================== -->
    <div
      class="cs-admission__services"
      id="csAdmissionTabs"
    >
      <!-- DIRECT COLLEGE -->
      <button
        type="button"
        class="cs-service-card cs-service-card--green is-active"
        data-target="0"
      >
        <div class="cs-service-card__icon">
          <div class="cs-service-card__icon-ring"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 21h18"/>
            <path d="M5 21V8l7-4 7 4v13"/>
            <path d="M9 21v-5h6v5"/>
            <path d="M8 10h1"/>
            <path d="M12 10h1"/>
            <path d="M16 10h1"/>
          </svg>
        </div>
        <div class="cs-service-card__content">
          <div class="cs-service-card__label">
            Direct College Admissions
          </div>
          <div class="cs-service-card__mini">
            <div class="cs-service-card__mini-dot"></div>
            Personalised admission guidance
          </div>
        </div>
        <div class="cs-service-card__arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m13 6 6 6-6 6"/>
          </svg>
        </div>
        <div class="cs-service-card__progress">
          <div class="cs-service-card__progress-fill"></div>
        </div>
      </button>
      <!-- ONLINE UG PG -->
      <button
        type="button"
        class="cs-service-card cs-service-card--blue"
        data-target="1"
      >
        <div class="cs-service-card__icon">
          <div class="cs-service-card__icon-ring"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m2 8 10-5 10 5-10 5L2 8Z"/>
            <path d="M6 10.5v4.5c0 1.8 2.7 3.5 6 3.5s6-1.7 6-3.5v-4.5"/>
            <path d="M22 8v6"/>
          </svg>
        </div>
        <div class="cs-service-card__content">
          <div class="cs-service-card__label">
            Online UG / PG Admissions
          </div>
          <div class="cs-service-card__mini">
            <div class="cs-service-card__mini-dot"></div>
            Study from anywhere
          </div>
        </div>
        <div class="cs-service-card__arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m13 6 6 6-6 6"/>
          </svg>
        </div>
        <div class="cs-service-card__progress">
          <div class="cs-service-card__progress-fill"></div>
        </div>
      </button>
      <!-- ABROAD -->
      <button
        type="button"
        class="cs-service-card cs-service-card--orange"
        data-target="2"
      >
        <div class="cs-service-card__icon">
          <div class="cs-service-card__icon-ring"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="9"/>
            <path d="M3 12h18"/>
            <path d="M12 3c2.7 2.8 4.2 6 4.2 9s-1.5 6.2-4.2 9"/>
            <path d="M12 3c-2.7 2.8-4.2 6-4.2 9s1.5 6.2 4.2 9"/>
          </svg>
        </div>
        <div class="cs-service-card__content">
          <div class="cs-service-card__label">
            Abroad Admissions
          </div>
          <div class="cs-service-card__mini">
            <div class="cs-service-card__mini-dot"></div>
            International study guidance
          </div>
        </div>
        <div class="cs-service-card__arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m13 6 6 6-6 6"/>
          </svg>
        </div>
        <div class="cs-service-card__progress">
          <div class="cs-service-card__progress-fill"></div>
        </div>
      </button>
      <!-- DISTANCE -->
      <button
        type="button"
        class="cs-service-card cs-service-card--purple"
        data-target="3"
      >
        <div class="cs-service-card__icon">
          <div class="cs-service-card__icon-ring"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 5h6a4 4 0 0 1 4 4v10a4 4 0 0 0-4-3H3V5Z"/>
            <path d="M21 5h-6a4 4 0 0 0-4 4v10a4 4 0 0 1 4-3h6V5Z"/>
            <path d="M7 9h3"/>
            <path d="M14 9h3"/>
          </svg>
        </div>
        <div class="cs-service-card__content">
          <div class="cs-service-card__label">
            Distance Education Admissions
          </div>
          <div class="cs-service-card__mini">
            <div class="cs-service-card__mini-dot"></div>
            Flexible learning options
          </div>
        </div>
        <div class="cs-service-card__arrow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m13 6 6 6-6 6"/>
          </svg>
        </div>
        <div class="cs-service-card__progress">
          <div class="cs-service-card__progress-fill"></div>
        </div>
      </button>
    </div>
    <!-- ===================================================
         DETAIL PANEL
         =================================================== -->
    <div class="cs-admission__detail cs-reveal" style="--reveal-delay:120ms;">
      <!-- GLOWS -->
      <div
        class="cs-detail-glow cs-glow--green is-active"
        data-glow="0"
      ></div>
      <div
        class="cs-detail-glow cs-glow--blue"
        data-glow="1"
      ></div>
      <div
        class="cs-detail-glow cs-glow--orange"
        data-glow="2"
      ></div>
      <div
        class="cs-detail-glow cs-glow--purple"
        data-glow="3"
      ></div>
      <div class="cs-admission__panel-inner">
        <!-- =================================================
             DIRECT COLLEGE
             ================================================= -->
        <div
          class="cs-admission__pane cs-pane--green is-active"
          data-pane="0"
        >
          <div class="cs-pane__badge">
            <div class="cs-pane__badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 21h18"/>
                <path d="M5 21V8l7-4 7 4v13"/>
                <path d="M9 21v-5h6v5"/>
              </svg>
            </div>
            Direct Admission
          </div>
          <h3>
            Get Into The Right
            
              College With Confidence.
          </h3>
          <p class="description">
            
Explore admission opportunities at leading colleges and universities across India with personalised guidance from course and college selection to application and admission.
          </p>
          <ul class="cs-admission__benefits">
            <li
              class="cs-admission__benefit"
              style="--delay:300ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              Verified college & course options
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:360ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              One-on-one course & college guidance
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:420ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              Application to Admission support
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:480ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                </svg>
              </div>
              Admission Process Guidance
            </li>
          </ul>
          <a
            class="cs-admission__cta"
            href="https://collegeshine.com/service/direct-college-admission-india/"
          >
            Explore Direct Admissions
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 8h11"/>
              <path d="m9 4 4 4-4 4"/>
            </svg>
          </a>
        </div>
        <!-- =================================================
             ONLINE
             ================================================= -->
        <div
          class="cs-admission__pane cs-pane--blue"
          data-pane="1"
        >
          <div class="cs-pane__badge">
            <div class="cs-pane__badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m2 8 10-5 10 5-10 5L2 8Z"/>
                <path d="M6 10.5v4.5"/>
                <path d="M22 8v6"/>
              </svg>
            </div>
            Online Education
          </div>
          <h3>
            Learn From Anywhere.
            
              Grow Everywhere.
            
          </h3>
          <p class="description">
           Apply to UGC-entitled online UG, PG and diploma programmes from recognised universities with a smooth, guided admission process you can complete from anywhere.
          </p>
          <ul class="cs-admission__benefits">
            <li
              class="cs-admission__benefit"
              style="--delay:300ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              UGC-entitled online degree programmes
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:360ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              Flexible options for working professionals
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:420ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              Guided application & fee assistance
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:480ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                </svg>
              </div>
               Complete the process conveniently from home
            </li>
          </ul>
          <a
            class="cs-admission__cta"
            href="https://collegeshine.com/service/online-ug-pg-admissions/"
          >
            Explore Online Admissions
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 8h11"/>
              <path d="m9 4 4 4-4 4"/>
            </svg>
          </a>
        </div>
        <!-- =================================================
             ABROAD
             ================================================= -->
        <div
          class="cs-admission__pane cs-pane--orange"
          data-pane="2"
        >
          <div class="cs-pane__badge">
            <div class="cs-pane__badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9"/>
                <path d="M3 12h18"/>
                <path d="M12 3c2.7 2.8 4.2 6 4.2 9s-1.5 6.2-4.2 9"/>
                <path d="M12 3c-2.7 2.8-4.2 6-4.2 9s1.5 6.2 4.2 9"/>
              </svg>
            </div>
            Study Abroad
          </div>
          <h3>
            Take Your Education
          
              Beyond Borders.
            
          </h3>
          <p class="description">
            Explore international study opportunities with personalised guidance on university selection, applications, visa documentation and your journey to studying abroad.
          </p>
          <ul class="cs-admission__benefits">
            <li
              class="cs-admission__benefit"
              style="--delay:300ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              University & course shortlisting
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:360ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
               Application & documentation guidance
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:420ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
             Visa documentation & interview preparation
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:480ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                </svg>
              </div>
             Pre-departure & settling-in guidance
            </li>
          </ul>
          <a
            class="cs-admission__cta"
            href="/services/abroad-admission/"
          >
            Explore Abroad Admissions
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 8h11"/>
              <path d="m9 4 4 4-4 4"/>
            </svg>
          </a>
        </div>
        <!-- =================================================
             DISTANCE
             ================================================= -->
        <div
          class="cs-admission__pane cs-pane--purple"
          data-pane="3"
        >
          <div class="cs-pane__badge">
            <div class="cs-pane__badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 5h6a4 4 0 0 1 4 4v10a4 4 0 0 0-4-3H3V5Z"/>
                <path d="M21 5h-6a4 4 0 0 0-4 4v10a4 4 0 0 1 4-3h6V5Z"/>
              </svg>
            </div>
            Distance Education
          </div>
          <h3>
            Keep Learning.
           
              Keep Moving Forward.
          
          </h3>
          <p class="description">
            Explore recognised distance-learning programmes that fit your schedule and support your academic and career goals.
          </p>
          <ul class="cs-admission__benefits">
            <li
              class="cs-admission__benefit"
              style="--delay:300ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              Recognised distance-learning programmes
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:360ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              UG / PG course guidance
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:420ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
               Study material & exam guidance
            </li>
            <li
              class="cs-admission__benefit"
              style="--delay:480ms;"
            >
              <div class="cs-benefit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                </svg>
              </div>
              Flexible learning for working professionals
            </li>
          </ul>
          <a
            class="cs-admission__cta"
            href="https://collegeshine.com/service/distance-education-admissions/"
          >
            Explore Distance Admissions
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 8h11"/>
              <path d="m9 4 4 4-4 4"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`

export default function AdmissionSection() {
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />
}

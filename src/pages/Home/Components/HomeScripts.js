export default [`
(function () {

  "use strict";


  /* =====================================================
     COLLEGESHINE HERO STATS
     No IntersectionObserver required.
     ===================================================== */

  function initCollegeShineStats() {

    var statsBar =
      document.getElementById("csStatsBar");


    /* Stop if stats section does not exist */
    if (!statsBar) {
      return;
    }


    /* Find all counters */
    var nums =
      statsBar.querySelectorAll(
        ".cs-stat-num[data-count-to]"
      );


    /* Stop if no counters exist */
    if (!nums.length) {
      return;
    }


    /* =====================================================
       FORMAT NUMBER
       4500  -> 4,500
       20000 -> 20,000
       ===================================================== */

    function formatNumber(value) {

      return Number(value).toLocaleString("en-IN");

    }


    /* =====================================================
       GET TARGET NUMBER
       ===================================================== */

    function getTarget(element) {

      var target =
        parseInt(
          element.getAttribute("data-count-to"),
          10
        );


      if (isNaN(target)) {
        return 0;
      }


      return target;

    }


    /* =====================================================
       GET SUFFIX
       ===================================================== */

    function getSuffix(element) {

      return (
        element.getAttribute("data-suffix") || ""
      );

    }


    /* =====================================================
       SET FINAL VALUES
       
       IMPORTANT:
       This immediately removes the possibility of
       the counters remaining at 0.
       ===================================================== */

    function setFinalValues() {

      for (
        var i = 0;
        i < nums.length;
        i++
      ) {

        var element = nums[i];

        var target =
          getTarget(element);

        var suffix =
          getSuffix(element);


        element.textContent =
          formatNumber(target) +
          suffix;

      }

    }


    /* =====================================================
       ANIMATE SINGLE COUNTER
       ===================================================== */

    function animateCounter(element) {

      var target =
        getTarget(element);

      var suffix =
        getSuffix(element);


      var duration = 1400;

      var startTime = null;


      function step(timestamp) {

        if (startTime === null) {
          startTime = timestamp;
        }


        var progress =
          (timestamp - startTime) /
          duration;


        if (progress > 1) {
          progress = 1;
        }


        /*
         * Smooth ease-out effect
         */
        var eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );


        var current =
          Math.round(
            target * eased
          );


        element.textContent =
          formatNumber(current) +
          suffix;


        if (progress < 1) {

          window.requestAnimationFrame(
            step
          );

        } else {

          /*
           * Force exact final value
           */
          element.textContent =
            formatNumber(target) +
            suffix;

        }

      }


      window.requestAnimationFrame(
        step
      );

    }


    /* =====================================================
       ACCESSIBILITY
       ===================================================== */

    var prefersReducedMotion = false;


    if (
      window.matchMedia &&
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {

      prefersReducedMotion = true;

    }


    /* =====================================================
       FIRST SET REAL VALUES
       
       This is the important fix.
       Even if animation has a problem, users will see
       the correct numbers instead of 0.
       ===================================================== */

    setFinalValues();


    /* =====================================================
       IF USER PREFERS REDUCED MOTION
       DON'T ANIMATE.
       ===================================================== */

    if (prefersReducedMotion) {
      return;
    }


    /* =====================================================
       START ANIMATION
       
       We do NOT use IntersectionObserver.
       ===================================================== */

    window.setTimeout(
      function () {

        for (
          var i = 0;
          i < nums.length;
          i++
        ) {

          /*
           * Start from zero
           */
          nums[i].textContent = "0";


          /*
           * Animate
           */
          animateCounter(
            nums[i]
          );

        }

      },
      300
    );

  }


  /* =====================================================
     DOM READY
     ===================================================== */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initCollegeShineStats
    );

  } else {

    initCollegeShineStats();

  }


})();
`,
`
/* =========================================================
   Headline auto-fit — the real fix for the "Easil…" clipping.
   clamp(…vw…) can only scale off the VIEWPORT width, but the
   headline actually needs to fit the LEFT COLUMN's width,
   which is a different, narrower number in a two-column grid.
   This measures the column for real and shrinks font-size
   until the text fits on one line, on load, after webfonts
   swap in, and on resize.
========================================================= */
(function () {
  "use strict";

  var MIN_WIDTH = 992;   // matches the CSS breakpoint that forces nowrap
  var FLOOR_PX  = 18;    // never shrink smaller than this
  var resizeTimer;

  function fitHeadline() {
    var h1 = document.querySelector("h1.cs-headline");
    if (!h1) return;

    if (window.innerWidth < MIN_WIDTH) {
      h1.style.fontSize = ""; // below 992px the CSS lets it wrap instead
      return;
    }

    h1.style.fontSize = ""; // reset to the CSS clamp() value first
    var size = parseFloat(window.getComputedStyle(h1).fontSize);
    h1.style.fontSize = size + "px";

    while (size > FLOOR_PX && h1.scrollWidth > h1.clientWidth) {
      size -= 1;
      h1.style.fontSize = size + "px";
    }
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitHeadline, 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fitHeadline);
  } else {
    fitHeadline();
  }

  // Re-measure once webfonts finish loading — their character
  // widths differ from the fallback font and can shift the fit.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitHeadline);
  }

  window.addEventListener("resize", onResize);
})();
`,
`



    const WEBSITE_URL  = "https://collegeshine.com";
    const COLLEGE_URL  = "https://colleges.collegeshine.com";

    const WP_SEARCH_API   = WEBSITE_URL + "/wp-json/wp/v2/search";
    const COLLEGES_SEARCH_API = COLLEGE_URL + "/wp-json/wp/v2/search";

    const COLLEGES_DB_URL = null;


    const searchData = [

        { title: "Engineering Courses", type: "Course", icon: "🎓", url: WEBSITE_URL + "/course/engineering/", keywords: "engineering engineer be b.e btech b.tech technology mechanical civil computer cse it ece eee" },
        { title: "Agriculture Courses", type: "Course", icon: "🌱", url: WEBSITE_URL + "/course/agriculture/", keywords: "agriculture farming bsc agriculture agri" },
        { title: "Arts and Science Courses", type: "Course", icon: "📚", url: WEBSITE_URL + "/course/arts-science/", keywords: "arts science ba bsc bcom bba ma msc mcom" },
        { title: "Diploma and Polytechnic Courses", type: "Course", icon: "📘", url: WEBSITE_URL + "/course/diploma/", keywords: "diploma polytechnic technical course" },
        { title: "Architecture and Design Courses", type: "Course", icon: "🏛️", url: WEBSITE_URL + "/course/architecture-design/", keywords: "architecture design barch m.arch planning interior design" },
        { title: "Fishery Science Courses", type: "Course", icon: "🐟", url: WEBSITE_URL + "/course/fishery-science/", keywords: "fishery fisheries science aquaculture" },
        { title: "MBA and Management Courses", type: "Course", icon: "💼", url: WEBSITE_URL + "/course/management-mba/", keywords: "mba management bba business administration tancet" },
        { title: "MBBS Courses", type: "Course", icon: "🩺", url: WEBSITE_URL + "/course/mbbs/", keywords: "mbbs medical doctor medicine" },
        { title: "BDS Dental Courses", type: "Course", icon: "🦷", url: WEBSITE_URL + "/course/bds/", keywords: "bds dental dentist dentistry" },
        { title: "Allied Health Science Courses", type: "Course", icon: "🏥", url: WEBSITE_URL + "/course/allied-health-science/", keywords: "allied health paramedical healthcare bsc allied ahs" },
        { title: "Veterinary Science Courses", type: "Course", icon: "🐾", url: WEBSITE_URL + "/course/veterinary-science/", keywords: "veterinary vet animal science" },
        { title: "Pharmacy Courses", type: "Course", icon: "💊", url: WEBSITE_URL + "/course/pharmacy/", keywords: "pharmacy bpharm dpharm pharmd medicine" },
        { title: "Nursing Courses", type: "Course", icon: "👩‍⚕️", url: WEBSITE_URL + "/course/nursing/", keywords: "nursing bsc nursing gnm anm msc nursing" },
        { title: "Physiotherapy Courses", type: "Course", icon: "🧑‍⚕️", url: WEBSITE_URL + "/course/physiotherapy/", keywords: "physiotherapy bpt mpt physio" },
        { title: "Occupational Therapy Courses", type: "Course", icon: "🏥", url: WEBSITE_URL + "/course/occupational-therapy/", keywords: "occupational therapy bot mot therapy" },
        { title: "Ayurveda Courses", type: "Course", icon: "🌿", url: WEBSITE_URL + "/course/ayurveda/", keywords: "ayurveda ayurvedic bams" },
        { title: "Homeopathy Courses", type: "Course", icon: "🌸", url: WEBSITE_URL + "/course/homeopathy/", keywords: "homeopathy homoeopathy bhms" },
        { title: "Unani Medicine Courses", type: "Course", icon: "🌾", url: WEBSITE_URL + "/course/unani/", keywords: "unani medicine bums" },
        { title: "Teacher Education Courses", type: "Course", icon: "👨‍🏫", url: WEBSITE_URL + "/course/teacher-education/", keywords: "teacher education bed m.ed teaching" },
        { title: "Marine and Nautical Courses", type: "Course", icon: "⚓", url: WEBSITE_URL + "/course/marine-nautical/", keywords: "marine nautical shipping maritime dns gp rating eto" },
        { title: "Hotel Management Courses", type: "Course", icon: "🏨", url: WEBSITE_URL + "/course/hotel-management/", keywords: "hotel management hospitality bhm" },
        { title: "Law Courses", type: "Course", icon: "⚖️", url: WEBSITE_URL + "/course/law/", keywords: "law llb ba llb llm legal advocate lawyer" },
        { title: "Psychology Courses", type: "Course", icon: "🧠", url: WEBSITE_URL + "/course/psychology/", keywords: "psychology psychologist bsc psychology" },
        { title: "Aviation Courses", type: "Course", icon: "✈️", url: WEBSITE_URL + "/course/aviation/", keywords: "aviation pilot airport aircraft" },
        { title: "Sports and Physical Education Courses", type: "Course", icon: "🏅", url: WEBSITE_URL + "/course/sports-physical-education/", keywords: "sports physical education bped mped" },
        { title: "Commerce, Finance and Accounting Courses", type: "Course", icon: "💰", url: WEBSITE_URL + "/course/commerce-finance-accounting/", keywords: "commerce finance accounting bcom" },
        { title: "Media, Journalism and Visual Communication Courses", type: "Course", icon: "📰", url: WEBSITE_URL + "/course/media-journalism-visual-communication/", keywords: "media journalism visual communication mass comm" },
        { title: "Fine Arts and Performing Arts Courses", type: "Course", icon: "🎭", url: WEBSITE_URL + "/course/fine-arts-performing-arts/", keywords: "fine arts performing arts music dance theatre" },

        { title: "Engineering Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/engineering/", keywords: "engineering college engineer be btech colleges" },
        { title: "Nursing Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/nursing/", keywords: "nursing college bsc nursing colleges" },
        { title: "Agriculture Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/agriculture/", keywords: "agriculture college colleges" },
        { title: "Arts and Science Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/arts-science/", keywords: "arts science college bsc ba bcom" },
        { title: "Diploma Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/diploma/", keywords: "diploma polytechnic college" },
        { title: "MBA Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/management-mba/", keywords: "mba college management college business school" },
        { title: "Pharmacy Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/pharmacy/", keywords: "pharmacy college bpharm dpharm" },
        { title: "Physiotherapy Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/physiotherapy/", keywords: "physiotherapy college" },
        { title: "Architecture and Design Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/architecture-design/", keywords: "architecture design college" },
        { title: "Allied Health Science Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/allied-health-science/", keywords: "allied health science college ahs" },
        { title: "Teacher Education Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/teacher-education/", keywords: "teacher education bed college" },
        { title: "Hotel Management Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/hotel-management/", keywords: "hotel management college" },
        { title: "Ayurveda Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/ayurveda/", keywords: "ayurveda college bams" },
        { title: "Law Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/law/", keywords: "law college llb legal" },
        { title: "BDS Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/bds/", keywords: "bds dental college" },
        { title: "Veterinary Science Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/veterinary-science/", keywords: "veterinary college" },
        { title: "Physical Education Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/sports-physical-education/", keywords: "physical education sports college" },
        { title: "Occupational Therapy Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/occupational-therapy/", keywords: "occupational therapy college" },
        { title: "Marine and Nautical Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/marine-nautical/", keywords: "marine nautical college maritime" },
        { title: "Homeopathy Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/homeopathy/", keywords: "homeopathy college" },
        { title: "Unani Medicine Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/unani/", keywords: "unani medicine college" },
        { title: "Psychology Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/psychology/", keywords: "psychology college" },
        { title: "Aviation Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/aviation/", keywords: "aviation college" },
        { title: "Media, Journalism and Visual Communication Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/media-journalism-visual-communication/", keywords: "media journalism college" },
        { title: "Fine Arts and Performing Arts Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/fine-arts-performing-arts/", keywords: "fine arts performing arts college" },
        { title: "MBBS Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/mbbs/", keywords: "mbbs medical college" },
        { title: "Fishery Science Colleges", type: "College", icon: "🏫", url: COLLEGE_URL + "/colleges/fishery-science/", keywords: "fishery science college" },

        { title: "Direct College Admissions", type: "Service", icon: "📌", url: WEBSITE_URL + "/services/direct-college-admission-india/", keywords: "direct college admission service" },
        { title: "Online UG / PG Admissions", type: "Service", icon: "📌", url: WEBSITE_URL + "/services/online-ug-pg-admissions/", keywords: "online ug pg admission distance" },
        { title: "Foreign MBBS Admissions", type: "Service", icon: "📌", url: WEBSITE_URL + "/services/foreign-mbbs-admission/", keywords: "foreign mbbs abroad medical admission" },
        { title: "Abroad MS Admissions", type: "Service", icon: "📌", url: WEBSITE_URL + "/services/abroad-ms-admissions/", keywords: "abroad ms study abroad admission" },
        { title: "Distance Education Admissions", type: "Service", icon: "📌", url: WEBSITE_URL + "/services/distance-education-admissions/", keywords: "distance education admission correspondence" },

        { title: "Engineering Counselling (TNEA)", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/engineering-counselling-tnea/", keywords: "tnea engineering counselling anna university admission counselling" },
        { title: "Medical Counselling (MBBS / BDS & More)", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/medical-counselling-mbbs-bds-more/", keywords: "medical counselling mbbs bds neet counselling" },
        { title: "Agriculture Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/agriculture-counselling/", keywords: "agriculture counselling" },
        { title: "MBA / MCA Counselling (TANCET)", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/mba-mca-counselling-tancet/", keywords: "tancet mba mca counselling management" },
        { title: "Paramedical Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/paramedical-counselling/", keywords: "paramedical counselling allied health" },
        { title: "Arts and Science Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/arts-and-science-counselling/", keywords: "arts science counselling" },
        { title: "Diploma / Polytechnic Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/diploma-polytechnic-counselling/", keywords: "diploma polytechnic counselling" },
        { title: "Teacher Education Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/teacher-education-counselling/", keywords: "teacher education counselling bed" },
        { title: "Law Counselling", type: "Counselling", icon: "📋", url: WEBSITE_URL + "/counselling/law-counselling/", keywords: "law counselling llb" },

        { title: "NEET UG", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/neet-entrance-examination-ug/", keywords: "neet ug medical entrance exam mbbs" },
        { title: "NEET PG", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/neet-pg-entrance-examination/", keywords: "neet pg medical postgraduate entrance" },
        { title: "JEE Main", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/jee-main-entrance-examination/", keywords: "jee main engineering entrance exam" },
        { title: "JEE Advanced", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/jee-advanced-entrance-examination/", keywords: "jee advanced iit engineering" },
        { title: "GATE", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/gate-entrance-examination/", keywords: "gate engineering postgraduate entrance" },
        { title: "TANCET", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/tancet-management-computer-application-entrance-exam/", keywords: "tancet mba mca entrance exam" },
        { title: "NATA", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/nata-entrance-examination/", keywords: "nata architecture entrance" },
        { title: "MAT", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/mat-entrance-examination/", keywords: "mat management entrance" },
        { title: "CAT", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/cat-entrance-examination/", keywords: "cat mba management entrance" },
        { title: "CMAT", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/cmat-entrance-examination/", keywords: "cmat management entrance" },
        { title: "CLAT", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/clat-entrance-examination/", keywords: "clat law entrance" },
        { title: "LSAT India", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/lsat-entrance-examination-lsat-india/", keywords: "lsat law entrance india" },
        { title: "UCEED", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/uceed-entrance-examination/", keywords: "uceed design entrance" },
        { title: "CEED", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/ceed-entrance-examination/", keywords: "ceed design entrance" },
        { title: "CUET UG", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/cuet-entrance-examination-ug/", keywords: "cuet university entrance exam" },
        { title: "NIFT", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/nift-entrance-examination/", keywords: "nift fashion design entrance" },
        { title: "AME CET", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/ame-cet-entrance-examination/", keywords: "ame cet aircraft maintenance entrance" },
        { title: "IMU CET", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/imu-cet-entrance-examination/", keywords: "imu cet marine maritime entrance" },
        { title: "AIIMS / JIPMER (via NEET)", type: "Entrance Exam", icon: "📝", url: WEBSITE_URL + "/entrance-exam/aiims-jipmer-via-neet/", keywords: "aiims jipmer medical entrance" },

        { title: "Scholarships Overview", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship", keywords: "scholarship financial aid student money education apply" },
        { title: "7.5 Reservation Scheme", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/7-5-reservation-scheme/", keywords: "7.5 reservation government school quota" },
        { title: "Pudhumai Penn Scheme", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/pudhumai-penn-scheme/", keywords: "pudhumai penn scholarship women girls tamil nadu" },
        { title: "Post-Matric Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/post-matric-scholarship/", keywords: "post matric scholarship" },
        { title: "Sports Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/sports-scholarship/", keywords: "sports scholarship athlete" },
        { title: "First Graduate Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/first-graduate-scholarship/", keywords: "first graduate scholarship" },
        { title: "Adi Dravidar and Tribal Welfare Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/adi-dravidar-tribal-welfare-scholarship/", keywords: "adi dravidar tribal welfare scholarship" },
        { title: "Tamizh Pudhalvan Scheme", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/tamizh-pudhalvan-scheme/", keywords: "tamizh pudhalvan scheme scholarship" },
        { title: "BC / MBC / DNC Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/bc-mbc-dnc-scholarship/", keywords: "bc mbc dnc scholarship" },
        { title: "Minority Scholarship (Muslim & Christian)", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/minority-scholarship-muslim-christian/", keywords: "minority scholarship muslim christian" },
        { title: "AICTE Pragati and Saksham Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/aicte-pragati-saksham-scholarship/", keywords: "aicte pragati saksham scholarship" },
        { title: "Chief Minister's Merit Award", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/chief-ministers-merit-award/", keywords: "chief minister merit award scholarship" },
        { title: "Nalavariyam Scholarship Scheme", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/nalavariyam-scholarship-scheme/", keywords: "nalavariyam scholarship" },
        { title: "Central Sector Scholarship Scheme", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/central-sector-scholarship-scheme/", keywords: "central sector scholarship" },
        { title: "Single Parent Or Orphan Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/single-parent-or-orphan-scholarship/", keywords: "single parent orphan scholarship" },
        { title: "Differently-Abled Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/differently-abled-scholarship/", keywords: "differently abled disability scholarship" },
        { title: "National Means-Cum-Merit Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/national-means-cum-merit-scholarship/", keywords: "national means cum merit scholarship" },
        { title: "Perasiriyar Anbazhagan Teacher Education Scholarship", type: "Scholarship", icon: "🏆", url: WEBSITE_URL + "/scholarship/perasiriyar-anbazhagan-teacher-education-scholarship/", keywords: "perasiriyar anbazhagan teacher education scholarship" },

        { title: "Career Path Generator", type: "Tool", icon: "🧭", url: WEBSITE_URL + "/career-path-generator/", keywords: "career path generator tool 12th" },
        { title: "Scholarship Finder Tool", type: "Tool", icon: "🧭", url: WEBSITE_URL + "/scholarship-finder-tool/", keywords: "scholarship finder tool" },
        { title: "12th Cutoff Calculator", type: "Tool", icon: "🧮", url: WEBSITE_URL + "/collegeshine-com-cut-off-calculator-tamil-nadu/", keywords: "cutoff calculator 12th marks eligibility" },
        { title: "College Fee Viewer", type: "Tool", icon: "🧭", url: WEBSITE_URL + "/college-fee-viewer/", keywords: "college fee viewer fees" },
        { title: "Skill Recommendation Tool", type: "Tool", icon: "🧭", url: WEBSITE_URL + "/skill-recommentation-tool/", keywords: "skill recommendation tool" },
        { title: "Blog", type: "Tool", icon: "📰", url: WEBSITE_URL + "/insight-hub/", keywords: "insight hub news blog articles" },
        { title: "Top Colleges", type: "Tool", icon: "🏫", url: WEBSITE_URL + "/top-colleges/", keywords: "top colleges list ranking" },
        { title: "Admission Helpline", type: "Tool", icon: "📞", url: WEBSITE_URL + "/admission-helpline/", keywords: "admission helpline enquiry contact" },

        { title: "About CollegeShine", type: "Page", icon: "ℹ️", url: WEBSITE_URL + "/about/", keywords: "about us company" },
        { title: "Contact Us", type: "Page", icon: "☎️", url: WEBSITE_URL + "/contact/", keywords: "contact us phone email address" },
        { title: "Careers at CollegeShine", type: "Page", icon: "💼", url: WEBSITE_URL + "/career/", keywords: "career jobs hiring work with us" },
        { title: "Advertise With Us", type: "Page", icon: "📢", url: WEBSITE_URL + "/advertise-with-us/", keywords: "advertise advertisement ad" },
        { title: "Partner With Us", type: "Page", icon: "🤝", url: WEBSITE_URL + "/partner-with-us/", keywords: "partner with us college partnership" },
        { title: "Privacy Policy", type: "Page", icon: "📄", url: WEBSITE_URL + "/privacy-policy/", keywords: "privacy policy" },
        { title: "Terms and Conditions", type: "Page", icon: "📄", url: WEBSITE_URL + "/terms-condition/", keywords: "terms conditions" }

    ];

    let collegeEntries = [];
    let collegesDbLoaded = false;
    let collegesDbLoadPromise = null;

    function loadCollegesDB() {
        // The former implementation downloaded the complete college database
        // on the Home page. That payload was ~11.8 MB in Lighthouse.
        // College search now uses the lightweight WordPress search API and
        // never downloads the full database during navigation.
        collegesDbLoaded = true;
        return Promise.resolve([]);
    }

    function findGlobalCandidate(names) {

        for (let i = 0; i < names.length; i++) {

            const name = names[i];

            if (window[name] !== undefined) return window[name];

            try {
                const value = new Function("return (typeof " + name + " !== 'undefined') ? " + name + " : undefined;")();
                if (value !== undefined) return value;
            } catch (e) {
            }

        }

        return null;

    }

    function finishLoadingColleges(raw, resolve) {

        const list = Array.isArray(raw)
            ? raw
            : (raw.list || raw.data || raw.colleges || []);

        collegeEntries = list
            .map(normalizeCollegeEntry)
            .filter(function (entry) { return entry !== null; });

        collegesDbLoaded = true;

        console.log("[CS Search] Loaded " + collegeEntries.length + " colleges into search.");

        resolve(collegeEntries);

    }

    function normalizeCollegeEntry(raw) {

        if (!raw || typeof raw !== "object") return null;

        const name =
            raw.name || raw.title || raw.collegeName || raw.college_name ||
            raw.collegeTitle;

        if (!name) return null;

        const slug =
            raw.slug || raw.url_slug || raw.urlSlug || raw.id;

        const directUrl = raw.url || raw.link || raw.pageUrl || raw.page_url;

        const url = directUrl
            ? directUrl
            : (slug ? COLLEGE_URL + "/colleges/" + slug : null);

        if (!url) return null;

        const category = raw.category || raw.type || raw.cat || raw.stream || "";
        const district = raw.district || raw.location || raw.city || "";

        return {
            title: name,
            url: url,
            type: "College",
            icon: "🏫",
            keywords: normalizeText([name, category, district].filter(Boolean).join(" ")),
            score: 0,
            source: "college-db"
        };

    }

    function getCollegeResults(query) {

        if (collegeEntries.length === 0) return [];

        return collegeEntries
            .map(function (item) {
                return { ...item, score: getSearchScore(item, query) };
            })
            .filter(function (item) { return item.score > 0; })
            .sort(function (a, b) { return b.score - a.score; })
            .slice(0, 6);

    }


    const input         = document.getElementById("csSearchInput");
    const suggestions    = document.getElementById("csSuggestions");
    const searchButton   = document.getElementById("csSearchButton");
    const clearButton    = document.getElementById("csClearSearch");

    // Search enhancement is optional. Never throw if the widget is absent.
    if (!input || !suggestions || !searchButton || !clearButton) return;

    let activeIndex   = -1;
    let currentResults = [];
    let liveController  = null;
    let debounceTimer   = null;
    let requestToken     = 0;


    function normalizeText(text) {

        return text
            .toLowerCase()
            .trim()
            .replace(/[.-]/g, " ")
            .replace(/\\s+/g, " ");

    }


    function getSearchScore(item, query) {

        const title = normalizeText(item.title);
        const keywords = normalizeText(item.keywords);
        const type = normalizeText(item.type);

        let score = 0;

        if (title === query) score += 100;
        if (title.startsWith(query)) score += 80;
        if (title.includes(query)) score += 60;
        if (keywords.includes(query)) score += 40;
        if (type.includes(query)) score += 20;

        const words = query.split(" ");

        words.forEach(function (word) {
            if (word.length < 2) return;
            if (title.includes(word)) score += 15;
            if (keywords.includes(word)) score += 10;
        });

        return score;

    }

    function getLocalResults(query) {

        return searchData
            .map(function (item) {
                return { ...item, score: getSearchScore(item, query), source: "local" };
            })
            .filter(function (item) {
                return item.score > 0;
            })
            .sort(function (a, b) {
                return b.score - a.score;
            })
            .slice(0, 6);

    }


    function iconForSubtype(subtype) {

        const map = {
            post: "📰",
            page: "📄",
            course: "🎓",
            product: "🛒"
        };

        return map[subtype] || "🔎";

    }

    function typeLabelForSubtype(subtype) {

        const map = {
            post: "Article",
            page: "Page",
            course: "Course Page"
        };

        return map[subtype] || "Result";

    }

    async function getLiveResults(query, signal) {

        try {

            const res = await fetch(
                WP_SEARCH_API +
                "?search=" + encodeURIComponent(query) +
                "&per_page=8&_fields=id,title,url,subtype,type",
                { signal }
            );

            if (!res.ok) return [];

            const data = await res.json();

            if (!Array.isArray(data)) return [];

            return data.map(function (item) {

                return {
                    title: (item.title || "").toString(),
                    url: item.url,
                    type: typeLabelForSubtype(item.subtype || item.type),
                    icon: iconForSubtype(item.subtype || item.type),
                    score: 45,
                    source: "live"
                };

            });

        } catch (err) {

            return [];

        }

    }


    function mergeResults(localResults, liveResults) {

        const seenUrls = new Set(localResults.map(function (r) { return r.url; }));
        const merged = localResults.slice();

        liveResults.forEach(function (item) {
            if (!seenUrls.has(item.url)) {
                seenUrls.add(item.url);
                merged.push(item);
            }
        });

        return merged.slice(0, 10);

    }


    function highlightText(text, query) {

        if (!query) return text;

        const safeQuery = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&");
        const regex = new RegExp("(" + safeQuery + ")", "gi");

        return text.replace(regex, "<strong>$1</strong>");

    }


    function renderResults(results, query, isLoadingLive) {

        suggestions.innerHTML = "";
        activeIndex = -1;
        currentResults = results;

        if (isLoadingLive) {

            const loadingRow = document.createElement("div");
            loadingRow.className = "cs-loading-row";
            loadingRow.innerHTML =
                '<div class="cs-spinner"></div> Searching the full site for "' +
                query + '"...';
            suggestions.appendChild(loadingRow);

        }

        if (results.length === 0 && !isLoadingLive) {

            suggestions.innerHTML += \`
                <div class="cs-no-result">
                    No direct suggestion found for
                    <strong>\${query}</strong>
                </div>
            \`;

        } else {

            results.forEach(function (item) {

                const link = document.createElement("a");

                link.className = "cs-suggestion-item";
                link.href = item.url;

                link.innerHTML = \`
                    <div class="cs-suggestion-icon">\${item.icon}</div>
                    <div class="cs-suggestion-content">
                        <div class="cs-suggestion-title">\${highlightText(item.title, query)}</div>
                        <div class="cs-suggestion-type">\${item.type}</div>
                    </div>
                    <div class="cs-suggestion-arrow">›</div>
                \`;

                suggestions.appendChild(link);

            });

        }

        const viewAll = document.createElement("a");
        viewAll.className = "cs-view-all";
        viewAll.href = WEBSITE_URL + "/?s=" + encodeURIComponent(query);
        viewAll.innerHTML = \`🔍 Search all results for "\${query}"\`;
        suggestions.appendChild(viewAll);

        suggestions.style.display = "block";

    }


    function runSearch(rawQuery) {

        const query = normalizeText(rawQuery);

        if (query.length < 2) {
            suggestions.style.display = "none";
            suggestions.innerHTML = "";
            return;
        }

        if (liveController) liveController.abort();
        clearTimeout(debounceTimer);

        const myToken = ++requestToken;

        const localResults = getLocalResults(query);
        const collegeResults = getCollegeResults(query);
        const instantResults = mergeResults(localResults, collegeResults);

        renderResults(instantResults, query, true);

        debounceTimer = setTimeout(function () {

            liveController = new AbortController();

            getLiveResults(query, liveController.signal).then(function (liveResults) {

                if (myToken !== requestToken) return;

                const freshCollegeResults = getCollegeResults(query);
                const merged = mergeResults(
                    mergeResults(localResults, freshCollegeResults),
                    liveResults
                );

                renderResults(merged, query, false);

            });

        }, 300);

    }


    input.addEventListener("input", function () {

        clearButton.style.display = this.value.length > 0 ? "block" : "none";
        runSearch(this.value);

    });


    function performSearch() {

        const query = input.value.trim();

        if (!query) {
            input.focus();
            return;
        }

        const normalized = normalizeText(query);
        const localResults = getLocalResults(normalized);

        if (localResults.length > 0 && localResults[0].score >= 80) {
            window.location.href = localResults[0].url;
        } else {
            window.location.href = WEBSITE_URL + "/?s=" + encodeURIComponent(query);
        }

    }

    searchButton.addEventListener("click", performSearch);


    input.addEventListener("keydown", function (event) {

        const items = suggestions.querySelectorAll(".cs-suggestion-item");

        if (event.key === "ArrowDown") {
            event.preventDefault();
            activeIndex++;
            if (activeIndex >= items.length) activeIndex = 0;
            updateActiveItem(items);
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            activeIndex--;
            if (activeIndex < 0) activeIndex = items.length - 1;
            updateActiveItem(items);
        }

        if (event.key === "Enter") {
            event.preventDefault();
            if (activeIndex >= 0 && items[activeIndex]) {
                window.location.href = items[activeIndex].href;
            } else {
                performSearch();
            }
        }

        if (event.key === "Escape") {
            suggestions.style.display = "none";
            activeIndex = -1;
        }

    });

    function updateActiveItem(items) {

        items.forEach(function (item) {
            item.classList.remove("active");
        });

        if (items[activeIndex]) {
            items[activeIndex].classList.add("active");
            items[activeIndex].scrollIntoView({ block: "nearest" });
        }

    }


    clearButton.addEventListener("click", function () {

        input.value = "";
        clearButton.style.display = "none";
        suggestions.style.display = "none";
        suggestions.innerHTML = "";
        if (liveController) liveController.abort();
        input.focus();

    });


    document.addEventListener("click", function (event) {

        const searchBox = document.getElementById("csSmartSearch");

        if (searchBox && !searchBox.contains(event.target)) {
            suggestions.style.display = "none";
            activeIndex = -1;
        }

    });


    input.addEventListener("focus", function () {

        if (normalizeText(input.value).length >= 2) {
            runSearch(input.value);
        }

    });





`,
`
(function () {
  "use strict";

  var LISTING_URL = "https://colleges.collegeshine.com/";

  var DISTRICTS = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram",
    "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
    "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
    "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
    "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur",
    "Vellore", "Viluppuram", "Virudhunagar"
  ];

  var COURSES = [
    "Engineering", "Agriculture", "Arts & Science", "Diploma / Polytechnic",
    "Architecture & Design", "Fishery Science", "Management & MBA", "MBBS",
    "BDS", "Allied Health Science", "Veterinary Science", "Pharmacy",
    "Nursing", "Physiotherapy", "Occupational Therapy", "Ayurveda",
    "Homeopathy", "Unani Medicine", "Teacher Education", "Marine & Nautical",
    "Hotel Management", "Law (LLB, BA-LLB)", "Psychology", "Aviation",
    "Sports & Physical Education", "Commerce, Finance & Accounting",
    "Media, Journalism & Visual Comm", "Fine Arts & Performing Arts"
  ];

  function fillSelect(select, items) {
    var frag = document.createDocumentFragment();
    items.forEach(function (item) {
      var opt = document.createElement("option");
      if (typeof item === "string") {
        opt.value = item;
        opt.textContent = item;
      } else {
        opt.value = item.value;
        opt.textContent = item.label;
      }
      frag.appendChild(opt);
    });
    select.appendChild(frag);
  }

  function init() {
    var form = document.getElementById("cfForm");
    var districtSel = document.getElementById("cfDistrict");
    var courseSel = document.getElementById("cfCourse");
    if (!form || !districtSel || !courseSel) return;

    var districtSource = DISTRICTS;
    if (Array.isArray(window.COLLEGES_DB) && window.COLLEGES_DB.length) {
      var fromDb = Array.from(new Set(
        window.COLLEGES_DB.map(function (c) { return c && c.district; }).filter(Boolean)
      )).sort();
      if (fromDb.length) districtSource = fromDb;
    }

    fillSelect(districtSel, districtSource);
    fillSelect(courseSel, COURSES);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var params = new URLSearchParams();
      if (districtSel.value) params.set("district", districtSel.value);
      if (courseSel.value) params.set("type", courseSel.value);
      var query = params.toString();
      window.location.href = LISTING_URL + (query ? "?" + query : "");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
`,
`
(function () {
  "use strict";

  function buildCustomSelect(root) {
    var nativeSelect = root.querySelector(".cf-native-select");
    var trigger = root.querySelector(".cf-select-trigger");
    var valueEl = root.querySelector(".cf-select-value");
    var panel = root.querySelector(".cf-select-panel");
    if (!nativeSelect || !trigger || !panel || !valueEl) return;

    document.body.appendChild(panel);

    var listEl, searchInput;

    function positionPanel() {
      var rect = root.getBoundingClientRect();
      panel.style.position = "fixed";
      panel.style.top = Math.round(rect.bottom + 10) + "px";
      panel.style.left = Math.round(rect.left) + "px";
      panel.style.width = Math.round(rect.width) + "px";
    }

    function reposition() {
      if (root.getAttribute("data-open") === "true") positionPanel();
    }

    function isSearchable() {
      return nativeSelect.options.length > 8;
    }

    function renderPanel() {
      panel.innerHTML = "";
      searchInput = null;

      if (isSearchable()) {
        var searchWrap = document.createElement("div");
        searchWrap.className = "cf-select-search";
        searchWrap.innerHTML =
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';

        searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search...";
        searchInput.setAttribute("aria-label", "Filter options");
        searchWrap.appendChild(searchInput);
        panel.appendChild(searchWrap);

        searchInput.addEventListener("input", function () {
          renderOptions(searchInput.value.trim().toLowerCase());
        });
        searchInput.addEventListener("click", function (e) { e.stopPropagation(); });
      }

      listEl = document.createElement("div");
      listEl.className = "cf-select-list";
      listEl.setAttribute("role", "listbox");
      panel.appendChild(listEl);

      renderOptions("");
    }

    function renderOptions(filter) {
      listEl.innerHTML = "";
      var found = false;

      Array.prototype.forEach.call(nativeSelect.options, function (opt) {
        var label = opt.textContent;
        if (filter && label.toLowerCase().indexOf(filter) === -1) return;
        found = true;

        var row = document.createElement("div");
        row.className = "cf-select-option" + (opt.value === nativeSelect.value ? " is-selected" : "");
        row.setAttribute("role", "option");
        row.setAttribute("aria-selected", opt.value === nativeSelect.value ? "true" : "false");
        row.dataset.value = opt.value;
        row.innerHTML =
          "<div>" + label + "</div>" +
          '<svg class="cf-check" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';

        row.addEventListener("click", function () {
          nativeSelect.value = opt.value;
          nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
          valueEl.textContent = label;
          closePanel();
          trigger.focus();
        });

        listEl.appendChild(row);
      });

      if (!found) {
        var empty = document.createElement("div");
        empty.className = "cf-select-empty";
        empty.textContent = "No matches found";
        listEl.appendChild(empty);
      }
    }

    function openPanel() {
      document.querySelectorAll('.cf-custom-select[data-open="true"]').forEach(function (openRoot) {
        if (openRoot !== root) openRoot.dispatchEvent(new Event("cf-close"));
      });

      renderPanel();
      positionPanel();
      panel.style.display = "block";
      root.setAttribute("data-open", "true");
      trigger.setAttribute("aria-expanded", "true");
      if (searchInput) setTimeout(function () { searchInput.focus(); }, 0);
      document.addEventListener("click", onOutsideClick, true);
      document.addEventListener("keydown", onKeydown, true);
      window.addEventListener("resize", reposition);
      window.addEventListener("scroll", reposition, true);
    }

    function closePanel() {
      panel.style.display = "none";
      root.removeAttribute("data-open");
      trigger.setAttribute("aria-expanded", "false");
      document.removeEventListener("click", onOutsideClick, true);
      document.removeEventListener("keydown", onKeydown, true);
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", reposition, true);
    }

    root.addEventListener("cf-close", closePanel);

    function onOutsideClick(e) {
      if (!root.contains(e.target) && !panel.contains(e.target)) closePanel();
    }

    function onKeydown(e) {
      if (e.key === "Escape") {
        closePanel();
        trigger.focus();
      }
    }

    trigger.addEventListener("click", function () {
      var isOpen = root.getAttribute("data-open") === "true";
      isOpen ? closePanel() : openPanel();
    });

    var observer = new MutationObserver(function () {
      var selectedOpt = nativeSelect.options[nativeSelect.selectedIndex];
      if (selectedOpt) valueEl.textContent = selectedOpt.textContent;
      if (root.getAttribute("data-open") === "true") renderPanel();
    });
    observer.observe(nativeSelect, { childList: true });
  }

  function init() {
    document.querySelectorAll(".cf-custom-select").forEach(buildCustomSelect);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
`,
`


    const WEBSITE_URL = window.location.origin;

    const UPLOADS_URL = "https://collegeshine.com/wp-content/uploads/2026/03/";

    const ICON_URLS = {
        engineering:  UPLOADS_URL + "icons8-engineering-50-1.png",
        agriculture:  UPLOADS_URL + "agriculture-1.png",
        occupational: UPLOADS_URL + "Occupational-Therapy.png",
        management:   UPLOADS_URL + "icons8-time-management-50.png",
        nursing:      UPLOADS_URL + "Nursing-Course.png",
        alliedHealth: UPLOADS_URL + "icons8-pneumonia-50.png",
        pharmacy:     UPLOADS_URL + "Pharmacy-Course.png",
        architecture: UPLOADS_URL + "architecture-design.png",
        bds:          UPLOADS_URL + "icons8-dental-care-50-1.png",
        hotel:        UPLOADS_URL + "Hotel-Management.png",
        sports:       UPLOADS_URL + "Sports.png",
        teacher:      UPLOADS_URL + "icons8-teacher-50.png",
        artsScience:  UPLOADS_URL + "icons8-coder-50.png",
        marine:       UPLOADS_URL + "icons8-marine-50.png",
        diploma:      UPLOADS_URL + "icons8-stationery-50.png",
        physio:       UPLOADS_URL + "Physiotherapy.png"
    };

    const courses = [
        { icon: "engineering",  title: "Engineering Courses",           tags: ["B.E", "B.Tech", "M.E", "M.Tech", "Ph.D"], url: "/course/engineering/" },
        { icon: "agriculture",  title: "Agriculture Courses",           tags: ["B.Sc", "BE", "B.Tech", "M.Sc", "Ph.D"], url: "/course/agriculture/" },
        { icon: "occupational", title: "Occupational Therapy Courses",  tags: ["BOT", "MOT", "Ph.D"], url: "/course/occupational-therapy/" },
        { icon: "management",   title: "Management & MBA Courses",     tags: ["BBA", "BBM", "MBA", "Ph.D"], url: "/course/management-mba/" },
        { icon: "nursing",      title: "Nursing Courses",               tags: ["ANM", "GNM", "B.Sc Nursing", "M.Sc Nursing"], url: "/course/nursing/" },
        { icon: "alliedHealth", title: "Allied Health Science Courses", tags: ["B.Sc AHS", "M.Sc AHS", "Diploma"], url: "/course/allied-health-science/" },
        { icon: "pharmacy",     title: "Pharmacy Courses",              tags: ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"], url: "/course/pharmacy/" },
        { icon: "architecture", title: "Architecture & Design Courses", tags: ["B.Arch", "M.Arch", "Ph.D"], url: "/course/architecture-design/" },
        { icon: "bds",          title: "BDS Courses",                   tags: ["BDS", "MDS", "DDH", "DDM", "PhD"], url: "/course/bds/" },
        { icon: "hotel",        title: "Hotel Management Courses",      tags: ["BHM", "B.Sc", "MHM", "MBA"], url: "/course/hotel-management/" },
        { icon: "teacher",      title: "Teacher Education Course",      tags: ["B.Ed", "M.Ed", "B.P.Ed", "M.P.Ed", "PhD"], url: "/course/teacher-education/" },
        { icon: "artsScience",  title: "Arts & Science",                tags: ["BA", "B.Sc", "B.Com", "BBA", "MA", "M.Sc", "M.Com", "MBA", "PhD"], url: "/course/arts-science/" },
        { icon: "marine",       title: "Marine & Nautical Course",      tags: ["DNS", "B.Sc", "B.Tech", "GP Rating", "ETO", "MBA"], url: "/course/marine-nautical/" },
        { icon: "diploma",      title: "Diploma / Polytechnic Courses", tags: ["Diploma"], note: "(Engineering & Technical Courses)", url: "/course/diploma/" },
        { icon: "physio",       title: "Physiotherapy Courses",         tags: ["BPT", "MPT"], note: "(Orthopaedics, Neurology, Sports, Pediatrics)", noteSuffix: ["Ph.D"], url: "/course/physiotherapy/" }
    ];

    const grid = document.getElementById("csCourseGrid");

    const cardsHtml = courses.map(function (c, i) {

        let tagsHtml = c.tags.join(' <span class="sep">|</span> ');

        if (c.note) {
            tagsHtml += ' <span class="note">' + c.note + '</span>';
            if (c.noteSuffix) {
                tagsHtml += ' <span class="sep">|</span> ' + c.noteSuffix.join(' <span class="sep">|</span> ');
            }
        }

        return \`
            <a class="cs-cat-card" style="--i:\${i}" href="\${WEBSITE_URL}\${c.url}">
                <div class="cs-cat-icon">
                    <img src="\${ICON_URLS[c.icon]}" alt="\${c.title}" loading="lazy" width="44" height="44">
                </div>
                <div class="cs-cat-body">
                    <h2 class="cs-cat-title">\${c.title}</h2>
                    <div class="cs-cat-tags">\${tagsHtml}</div>
                </div>
                <span class="cs-cat-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
            </a>
        \`;

    }).join("");

    grid.innerHTML = cardsHtml;


`,
`
(function(){
  var section = document.querySelector('.cs8x-section');

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          section.classList.add('cs8x-in-view');
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });
    io.observe(section);
  } else {
    section.classList.add('cs8x-in-view');
  }

  // Make the entire card clickable (image, text, icon — anywhere) using its data-href.
  // Clicks that already land on the visible link are left alone (no double navigation).
  document.querySelectorAll('.cs8x-card[data-href]').forEach(function(card){
    var url = card.getAttribute('data-href');
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e){
      if(e.target.closest('a')) return; // let the real link handle its own click
      window.location.href = url;
    });
  });

  document.querySelectorAll('.cs8x-card-img > div').forEach(function(el){
    var img = new Image();
    var bg = el.style.backgroundImage.slice(5, -2);
    img.onerror = function(){
      el.style.backgroundImage = 'none';
      el.style.background = 'linear-gradient(135deg, #ece9f7, #f5f4fb)';
    };
    img.src = bg;
  });
})();
`,
`
(function(){
  var YT_URL = "https://www.youtube.com/embed/RC7xw4TmRN8?autoplay=1&mute=1&rel=0&playsinline=1&modestbranding=1&enablejsapi=1";

  document.querySelectorAll('.csx7q-about').forEach(function(root){
    var trigger = root.querySelector('[data-csx7q-open-video]');
    var overlay = root.querySelector('[data-csx7q-video-modal]');
    var frame   = root.querySelector('[data-csx7q-yt-frame]');
    var closeBtn = root.querySelector('[data-csx7q-close-modal]');

    if(!trigger || !overlay || !frame) return;

    function openModal(){
      frame.setAttribute('src', YT_URL);
      overlay.classList.add('csx7q-open');
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          overlay.classList.add('csx7q-visible');
        });
      });
    }
    function closeModal(){
      overlay.classList.remove('csx7q-visible');
      setTimeout(function(){
        overlay.classList.remove('csx7q-open');
        frame.setAttribute('src','');
      }, 200);
    }

    trigger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e){ if(e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && overlay.classList.contains('csx7q-open')) closeModal();
    });
  });
})();
`,
`

(function(){

  const root =
    document.getElementById("csAdmission");

  if(!root) return;

  const cards =
    Array.from(
      root.querySelectorAll(
        ".cs-service-card"
      )
    );

  const panes =
    Array.from(
      root.querySelectorAll(
        ".cs-admission__pane"
      )
    );

  const glows =
    Array.from(
      root.querySelectorAll(
        ".cs-detail-glow"
      )
    );

  if(!cards.length) return;

  /* =====================================================
     SETTINGS
     ===================================================== */

  const AUTOPLAY = 3200;

  let active = 0;

  let paused = false;

  let startTime =
    performance.now();

  /* =====================================================
     REDUCED MOTION
     ===================================================== */

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  /* =====================================================
     RESET PROGRESS
     ===================================================== */

  function resetProgress(){

    cards.forEach(card => {

      const fill =
        card.querySelector(
          ".cs-service-card__progress-fill"
        );

      if(fill){
        fill.style.width = "0%";
      }

    });

  }

  /* =====================================================
     ACTIVE SERVICE
     ===================================================== */

  function setActive(index){

    if(index === active){

      startTime =
        performance.now();

      resetProgress();

      return;
    }

    const previous =
      active;

    const forward =
      index > previous ||
      (
        previous === cards.length - 1 &&
        index === 0
      );

    /* ---------------------------------------------
       CARD
       --------------------------------------------- */

    cards[previous]
      .classList
      .remove("is-active");

    cards[index]
      .classList
      .add("is-active");

    /* ---------------------------------------------
       GLOW
       --------------------------------------------- */

    glows.forEach(glow => {

      glow.classList.remove(
        "is-active"
      );

    });

    if(glows[index]){

      glows[index]
        .classList
        .add("is-active");

    }

    /* ---------------------------------------------
       PANES
       --------------------------------------------- */

    panes.forEach(pane => {

      pane.classList.remove(
        "is-active"
      );

    });

    const incoming =
      panes[index];

    if(incoming){

      incoming.style.transition =
        "none";

      incoming.style.transform =
        forward
          ? "translateX(45px) scale(.96)"
          : "translateX(-45px) scale(.96)";

      incoming.getBoundingClientRect();

      requestAnimationFrame(() => {

        incoming.style.transition =
          "";

        incoming.style.transform =
          "";

        incoming.classList.add(
          "is-active"
        );

      });

    }

    active = index;

    startTime =
      performance.now();

    resetProgress();

  }

  /* =====================================================
     CLICK
     ===================================================== */

  cards.forEach(
    (card,index) => {

      card.addEventListener(
        "click",
        () => {

          setActive(index);

        }
      );

    }
  );

  /* =====================================================
     AUTOPLAY / RUMMY SHUFFLE
     ===================================================== */

  function animationFrame(now){

    if(
      !paused &&
      !reduceMotion
    ){

      const elapsed =
        now - startTime;

      const percentage =
        Math.min(
          100,
          (
            elapsed /
            AUTOPLAY
          ) * 100
        );

      const activeFill =
        cards[active]
          .querySelector(
            ".cs-service-card__progress-fill"
          );

      if(activeFill){

        activeFill.style.width =
          percentage + "%";

      }

      if(elapsed >= AUTOPLAY){

        setActive(
          (active + 1) %
          cards.length
        );

      }

    }

    requestAnimationFrame(
      animationFrame
    );

  }

  /* =====================================================
     HOVER PAUSE
     ===================================================== */

  root.addEventListener(
    "mouseenter",
    () => {

      paused = true;

    }
  );

  root.addEventListener(
    "mouseleave",
    () => {

      const fill =
        cards[active]
          .querySelector(
            ".cs-service-card__progress-fill"
          );

      const percentage =
        fill
          ? parseFloat(
              fill.style.width
            ) || 0
          : 0;

      startTime =
        performance.now() -
        (
          percentage /
          100
        ) *
        AUTOPLAY;

      paused = false;

    }
  );

  /* =====================================================
     TOUCH PAUSE
     ===================================================== */

  root.addEventListener(
    "touchstart",
    () => {

      paused = true;

    },
    {
      passive:true
    }
  );

  root.addEventListener(
    "touchend",
    () => {

      const fill =
        cards[active]
          .querySelector(
            ".cs-service-card__progress-fill"
          );

      const percentage =
        fill
          ? parseFloat(
              fill.style.width
            ) || 0
          : 0;

      startTime =
        performance.now() -
        (
          percentage /
          100
        ) *
        AUTOPLAY;

      paused = false;

    },
    {
      passive:true
    }
  );

  /* =====================================================
     START
     ===================================================== */

  resetProgress();

  if(!reduceMotion){

    requestAnimationFrame(
      animationFrame
    );

  }

})();

/* =====================================================
   SCROLL-REVEAL OBSERVER (advanced entrance animation)
   ===================================================== */

(function(){

  const targets =
    Array.from(
      document.querySelectorAll(".cs-reveal")
    );

  if(!targets.length) return;

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if(reduceMotion || !("IntersectionObserver" in window)){

    targets.forEach(el => el.classList.add("is-inview"));
    return;

  }

  const io = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);

        }

      });

    },
    {
      threshold:.18,
      rootMargin:"0px 0px -8% 0px"
    }
  );

  targets.forEach(el => io.observe(el));

})();

`,
`
(function(){

  /* =============================================================
     EASY-EDIT SETTINGS — change these, nothing else needed below
     ============================================================= */

  // 1) Where "Show More" sends people
  var SHOW_MORE_URL = "https://collegeshine.com/top-colleges/";

  // 2) The single phone number used by EVERY "Call Now" button.
  //    Change this one line to update the number everywhere.
  var CALL_NUMBER = "9865553629";

  // 3) Contact Form 7 connection settings for the Enquiry popup.
  //    Create a NEW CF7 form in WordPress first (see the Form/Mail
  //    tab code given separately), then paste its numeric ID below.
  var CF7_FORM_ID = "36284";
  var CF7_ENDPOINT = "https://collegeshine.com/wp-json/contact-form-7/v1/contact-forms/" + CF7_FORM_ID + "/feedback";

  /* =============================================================
     CATEGORY LABELS
     ============================================================= */
  var categories = [
    { key:"All",          label:"All Colleges" },
    { key:"Engineering",  label:"Engineering" },
    { key:"Agriculture",  label:"Agriculture" },
    { key:"Arts",         label:"Arts & Science" },
    { key:"Architecture", label:"Architecture & Design" },
    { key:"BDS",          label:"BDS" },
    { key:"Pharmacy",     label:"Pharmacy" },
    { key:"Nursing",      label:"Nursing" },
    { key:"Marine",       label:"Marine" },
    { key:"MBA",          label:"MBA" },
    { key:"Diploma",      label:"Diploma" },
    { key:"Allied",       label:"Allied Health Science" },
    { key:"Occupational", label:"Occupational Therapy" },
    { key:"Physiotherapy",label:"Physiotherapy" },
    { key:"Hotel",        label:"Hotel Management" }
  ];

  /* =============================================================
     COLLEGE DATA
     Each row: [ name, category, imgURL, location, rating, reviews, link ]

     The 7th value ("link") is OPTIONAL and is where "View Details"
     goes. Add it to any row you want to point somewhere specific —
     rows left without a 7th value will fall back to SHOW_MORE_URL.

     Example of adding a link to a row:
       ["Coimbatore Institute of Engineering and Technology","Engineering",
        "https://...webp","Coimbatore, Tamil Nadu",4.6,158,
        "https://collegeshine.com/college/ciet/"]                <-- 7th value = link
     ============================================================= */
  var colleges = [
    // Engineering
    ["Coimbatore Institute of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/cietcollege-300x61.webp","Coimbatore, Tamil Nadu",4.6,158,"https://colleges.collegeshine.com/colleges/coimbatore-institute-of-engineering-and-technology"],
    ["Dr.N.G.P. Institute of Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/dr-ngp-collegeshine-300x71.webp","Coimbatore, Tamil Nadu",4.7,142,"https://colleges.collegeshine.com/colleges/dr-n-g-p-institute-of-technology.html"],
    ["Dr. Mahalingam College of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/drmalingam-collegeshine-300x120.webp","Pollachi, Tamil Nadu",4.5,133,"https://colleges.collegeshine.com/colleges/dr-mahalingam-college-of-engineering-and-technology.html"],
    ["Hindusthan College of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/hidustan-collegeshine-300x82.webp","Coimbatore, Tamil Nadu",4.4,119,"https://colleges.collegeshine.com/colleges/hindusthan-college-of-engineering-and-technology"],
    ["SNS College of Engineering","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/sns-collegeshine-300x118.webp","Coimbatore, Tamil Nadu",4.6,176,"https://colleges.collegeshine.com/colleges/sns-college-of-engineering-autonomous.html"],
    ["Sri Ramakrishna Engineering College","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/SRIRAMAKRISHNA-collegeshine-300x94.webp","Coimbatore, Tamil Nadu",4.7,201,"https://colleges.collegeshine.com/colleges/sri-ramakrishna-college-of-engineering.html"],
    ["PSG College Of Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/PSG-COLLEGESHINE-1-300x169.webp","Coimbatore, Tamil Nadu",4.8,264,"https://colleges.collegeshine.com/colleges/psg-college-of-technology"],
    ["Dhanalakshmi Srinivasan College of Engineering","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/DHANALAKSMI-SRINIVASAN-COLLEGESHINE-300x168.webp","Coimbatore, Tamil Nadu",4.3,97,"https://colleges.collegeshine.com/colleges/dhanalakshmi-srinivasan-college-of-engineering"],
    ["Sri Eshwar College of Engineering","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/srieshwar-college-engineering-collegeshine-300x103.webp","Coimbatore, Tamil Nadu",4.5,128,"https://colleges.collegeshine.com/colleges/sri-eshwar-college-of-engineering.html"],
    ["K.S.R. College of Engineering","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/KSR-COLLEHESHINE-300x169.webp","Tiruchengode, Tamil Nadu",4.4,110,"https://colleges.collegeshine.com/colleges/ksr-college-of-engineering.html"],
    ["Karpagam College of Engineering","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/kharbagam-collegeshine-300x75.webp","Coimbatore, Tamil Nadu",4.5,121,"https://colleges.collegeshine.com/colleges/karpagam-college-of-engineering.html"],
    ["EASA College of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/easacollegeofengineering-300x173.webp","Coimbatore, Tamil Nadu",4.3,88,"https://colleges.collegeshine.com/colleges/easa-college-of-engineering-and-technology.html"],
    ["KPR Institute of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/kpr-collegeshine-300x169.webp","Coimbatore, Tamil Nadu",4.6,154,"https://colleges.collegeshine.com/colleges/kpr-institute-of-engineering-and-technology.html"],
    ["Sri Shanmugha College of Engineering and Technology","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/sri-shanmugha-collegeshine-300x125.webp","Salem, Tamil Nadu",4.3,79,"https://colleges.collegeshine.com/colleges/sri-shanmugha-college-of-engineering-and-technology.html"],
    ["SREE SAKTHI ENGINEERING COLLEGE","Engineering","https://collegeshine.com/wp-content/uploads/2026/02/sri-sakthi-collegeshine-300x55.webp","Coimbatore, Tamil Nadu",4.2,64,"https://colleges.collegeshine.com/colleges/sree-sakthi-engineering-college-coimbatore.html"],

    // BDS
    ["SRM Dental College","BDS","https://collegeshine.com/wp-content/uploads/2026/02/SRM-Collegeshine-300x108.webp","Chennai, Tamil Nadu",4.7,183,"https://colleges.collegeshine.com/colleges/srm-kattankulathur-dental-college.html"],
    ["Dhanalakshmi Srinivasan Dental College","BDS","https://collegeshine.com/wp-content/uploads/2026/02/Dhanalakshmi-Srinivasan-Dental-College-COLLEGESHINE-300x169.webp","Perambalur, Tamil Nadu",4.3,72,"https://colleges.collegeshine.com/colleges/dhanalakshmi-srinivasan-medical-college-perambalur"],
    ["JKKN Dental College and Hospital","BDS","https://collegeshine.com/wp-content/uploads/2026/02/JKKN-COLLEGESHINE-300x185.webp","Namakkal, Tamil Nadu",4.4,95,"https://colleges.collegeshine.com/colleges/j-k-k-n-dental-college-and-hospital.html"],
    ["KSR Institute of Dental Science and Research","BDS","https://collegeshine.com/wp-content/uploads/2026/02/KSR-COLLEGESHINE-300x114.webp","Tiruchengode, Tamil Nadu",4.3,81,"https://colleges.collegeshine.com/colleges/k-s-r-institute-of-dental-science-and-research.html"],
    ["Nandha Dental College and Hospital","BDS","https://collegeshine.com/wp-content/uploads/2026/02/NANDTHA-COLLEGESHINE-300x156.webp","Erode, Tamil Nadu",4.4,102,"https://colleges.collegeshine.com/colleges/k-s-r-institute-of-dental-science-and-research.html"],
    ["RVS Dental College and Hospital","BDS","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHINE-300x147.webp","Coimbatore, Tamil Nadu",4.5,110,"https://colleges.collegeshine.com/colleges/rvs-dental-college-and-hospital.html"],

    // Agriculture
    ["Imayam Institute of Agriculture & Technology","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/IMAYAM-COLLEGESHIN-300x83.webp","Thuraiyur, Tamil Nadu",4.2,58,"https://colleges.collegeshine.com/colleges/imayam-institute-of-agriculture-and-technology.html"],
    ["PGP College of Agricultural Sciences","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/PGP-COLLEGESHIN-300x88.webp","Namakkal, Tamil Nadu",4.3,66,"https://colleges.collegeshine.com/colleges/pgp-college-of-agricultural-sciences.html"],
    ["Adhiyamaan College of Agriculture and Research","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/ADIYAMAAN-COLLEGESHIN-300x127.webp","Hosur, Tamil Nadu",4.2,54,"https://colleges.collegeshine.com/colleges/adhiyamaan-college-of-agriculture-and-research.html"],
    ["Vanavarayar Institute of Agriculture","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/VANAVAIYAR-COLLEGESHINE-300x76.webp","Pollachi, Tamil Nadu",4.4,73,"https://colleges.collegeshine.com/colleges/vanavarayar-institute-of-agriculture.html"],
    ["Kumaraguru Institute Of Agriculture","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/Kumaraguru-COLLEGESHIN-300x113.webp","Coimbatore, Tamil Nadu",4.5,84,"https://colleges.collegeshine.com/colleges/kumaraguru-institute-of-agriculture-erode.html"],
    ["JKK Munirajah College of Agricultural Science","Agriculture","https://collegeshine.com/wp-content/uploads/2026/02/JKK-COLLEGESHIN-300x76.webp","Namakkal, Tamil Nadu",4.3,61,"https://colleges.collegeshine.com/colleges/jkk-munirajah-college-of-agriculture-and-technology"],

    // Arts & Science
    ["Bharathidasan College Of Arts & Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/BHARATHIDASAN-COLLEGESHINE-300x95.webp","Erode, Tamil Nadu",4.3,90],
    ["K.S.R. College of Arts and Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/KSR-COLLEGESHIN-300x113.webp","Tiruchengode, Tamil Nadu",4.4,101,"https://colleges.collegeshine.com/colleges/ksr-college-of-arts-and-science-for-women-tiruchengode.html"],
    ["Hindusthan College of Arts & Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/HINDUSTAN-COLLEGESHIN-300x82.webp","Coimbatore, Tamil Nadu",4.5,118,"https://colleges.collegeshine.com/colleges/hindusthan-college-of-arts-and-science.html"],
    ["Rathinam College Of Arts And Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/RATHINAM-COLLEGESHINE-300x88.webp","Coimbatore, Tamil Nadu",4.4,96,"https://colleges.collegeshine.com/colleges/rathinam-college-of-arts-and-science-ARTS"],
    ["RVS College of Arts and Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHIN-300x149.webp","Coimbatore, Tamil Nadu",4.3,85,"https://colleges.collegeshine.com/colleges/rvs-college-of-arts-and-science.html"],
    ["Nehru Arts and Science College","Arts","https://collegeshine.com/wp-content/uploads/2026/02/NEHRU-COLLEGESHIN-300x146.webp","Coimbatore, Tamil Nadu",4.4,108,"https://colleges.collegeshine.com/colleges/nehru-arts-and-science-college.html"],
    ["Sri Ramakrishna College of Arts & Science","Arts","https://collegeshine.com/wp-content/uploads/2026/02/SRIRAMAKRINA-COLLEGESHINE-150x150.webp","Coimbatore, Tamil Nadu",4.6,124,"https://colleges.collegeshine.com/colleges/sri-ramakrishna-college-of-arts-and-science.html"],

    // Diploma
    ["Kongu Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/KONGUCOLLEGESHINE-259x300.webp","Perundurai, Tamil Nadu",4.4,92,"https://colleges.collegeshine.com/colleges/kongu-polytechnic-college"],
    ["KSR Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/KSRCOLLEGESHINE-150x150.webp","Tiruchengode, Tamil Nadu",4.2,63,"https://colleges.collegeshine.com/colleges/k-s-r-polytechnic-college"],
    ["Hindusthan Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/HINDHUSTAN-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.3,77,"https://colleges.collegeshine.com/colleges/hindusthan-polytechnic-college"],
    ["Sri Ragavendra Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/SRIRAGAVENDRACOLLEGESHIN-300x276.webp","Salem, Tamil Nadu",4.1,48,"https://colleges.collegeshine.com/colleges/sri-ragavendra-polytechnic-college-namakkal"],
    ["Excel Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/EXCELCOLLEGESHINE-300x169.webp","Namakkal, Tamil Nadu",4.2,55,"https://colleges.collegeshine.com/colleges/excel-polytechnic-college"],
    ["Nandha Polytechnic College","Diploma","https://collegeshine.com/wp-content/uploads/2026/02/NANDHACOLLEGESHINE-300x168.webp","Erode, Tamil Nadu",4.3,70,"https://colleges.collegeshine.com/colleges/nandha-polytechnic-college"],

    // Architecture & Design
    ["Excel College of Architecture & Planning","Architecture","https://collegeshine.com/wp-content/uploads/2026/02/EXCEL-COLLEGESHINE-150x150.webp","Namakkal, Tamil Nadu",4.2,52,"https://colleges.collegeshine.com/colleges/excel-college-of-architecture-and-planning"],
    ["J.K.K. Munirajah School of Architecture","Architecture","https://collegeshine.com/wp-content/uploads/2026/02/JKK-COLLEGESHINE-300x169.webp","Namakkal, Tamil Nadu",4.3,60],
    ["Adhiyamaan School of Planning and Architecture","Architecture","https://collegeshine.com/wp-content/uploads/2026/02/S.V.SPOLYTECHNIC-COLLEGESHINE-300x169.webp","Hosur, Tamil Nadu",4.3,65,"https://colleges.collegeshine.com/colleges/adhiyamaan-school-of-architecture.html"],
    ["Nehru School of Architecture","Architecture","https://collegeshine.com/wp-content/uploads/2026/02/NEHRU-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.4,74,"https://colleges.collegeshine.com/colleges/nehru-school-of-architecture"],
    ["Sasi Creative School of Architecture","Architecture","https://collegeshine.com/wp-content/uploads/2026/02/SASI-COLLEGESHINE-300x101.webp","Coimbatore, Tamil Nadu",4.2,49],

    // MBA
    ["PSG Institute of Management","MBA","https://collegeshine.com/wp-content/uploads/2026/02/PSG-COLLEGESHINE.webp","Coimbatore, Tamil Nadu",4.7,168,"https://colleges.collegeshine.com/colleges/psg-institute-of-management"],
    ["CIET MBA","MBA","https://collegeshine.com/wp-content/uploads/2026/02/CIET-COLLEGESHINE-1-300x300.webp","Coimbatore, Tamil Nadu",4.3,71,"https://colleges.collegeshine.com/colleges/coimbatore-institute-of-engineering-and-technology"],
    ["SNS College of Technology","MBA","https://collegeshine.com/wp-content/uploads/2026/02/sns-collegeshine-300x118.webp","Coimbatore, Tamil Nadu",4.5,109,"https://colleges.collegeshine.com/colleges/sns-college-of-engineering-autonomous.html"],
    ["K.S.Rangasamy College of Technology","MBA","https://collegeshine.com/wp-content/uploads/2026/02/KSR-COLLEGESHINE-1-300x76.webp","Tiruchengode, Tamil Nadu",4.4,93,"https://colleges.collegeshine.com/colleges/k-s-rangasamy-college-of-technology.html"],
    ["EXCEL Business School","MBA","https://collegeshine.com/wp-content/uploads/2026/02/EXCEL-COLLEGESHINE--300x169.webp","Namakkal, Tamil Nadu",4.2,58,""],
    ["Muthayammal Engineering College","MBA","https://collegeshine.com/wp-content/uploads/2026/02/MUTHAYAMMAL-COLLEGESHINE-300x169.webp","Namakkal, Tamil Nadu",4.3,80,"https://colleges.collegeshine.com/colleges/muthayammal-engineering-college.html"],
    ["Mahendra Engineering College","MBA","https://collegeshine.com/wp-content/uploads/2026/02/Mahendra-COLLEGESHINE-1-300x274.webp","Namakkal, Tamil Nadu",4.3,76,"https://colleges.collegeshine.com/colleges/mahendra-engineering-college"],
    ["Paavai Engineering College","MBA","https://collegeshine.com/wp-content/uploads/2026/02/paavai-collegeshine-300x89.webp","Namakkal, Tamil Nadu",4.2,63,"https://colleges.collegeshine.com/colleges/paavai-engineering-college"],

    // Allied Health Science
    ["Vivekanandha Allied Health Science","Allied","https://collegeshine.com/wp-content/uploads/2026/02/VIVEKANANDHA-COLLEGESHINE-300x169.webp","Tiruchengode, Tamil Nadu",4.3,68,"https://colleges.collegeshine.com/colleges/vivekanandha-allied-health-science"],
    ["JKKM Institute Of Health Sciences College Of Pharmacy","Allied","https://collegeshine.com/wp-content/uploads/2026/02/JKKM-COLLEGESHINE-300x169.webp","Namakkal, Tamil Nadu",4.2,55,"https://colleges.collegeshine.com/colleges/jkkm-allied-health-science"],
    ["Shanmuga College of Allied Health Science","Allied","https://collegeshine.com/wp-content/uploads/2026/02/SRI-SHANMUGHA-COLLEGESHINE-1-300x169.webp","Salem, Tamil Nadu",4.2,52,"https://colleges.collegeshine.com/colleges/shanmuga-college-of-allied-health-science-salem"],
    ["Nandha College of Allied Health Science","Allied","https://collegeshine.com/wp-content/uploads/2026/02/NANDHA-COLLEGESHINE-300x168.webp","Erode, Tamil Nadu",4.3,64,"https://colleges.collegeshine.com/colleges/nandha-college-of-allied-health-sciences"],
    ["Sri Venkateswaraa Allied Health Sciences","Allied","https://collegeshine.com/wp-content/uploads/2026/02/SHREE-VENKATESHWARPARAMEDICAL-COLLEGE-SHINE-300x169.webp","Chennai, Tamil Nadu",4.2,50,""],
    ["Nehru Institute of Health Science College","Allied","https://collegeshine.com/wp-content/uploads/2026/02/NEHRU-ALLIED-HEALTH-SCIENCE-COLLESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.3,61,"https://colleges.collegeshine.com/colleges/nehru-institute-of-health-sciences"],
    ["Karpagam Allied Health Science","Allied","https://collegeshine.com/wp-content/uploads/2026/02/KARPAGAM-COLLEGE-SHINE-300x169.webp","Coimbatore, Tamil Nadu",4.3,59,"https://colleges.collegeshine.com/colleges/karpagam-faculty-of-medical-sciences-research-coimbatore"],
    ["Sree Abirami College of Allied Health Science","Allied","https://collegeshine.com/wp-content/uploads/2026/02/SREE-ABIRAMI-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.1,44,"https://colleges.collegeshine.com/colleges/sree-abirami-ahs"],

    // Pharmacy
    ["JKK Munirajahh College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/MADRAS-COLLEGESHINE-1-300x169.webp","Namakkal, Tamil Nadu",4.2,57,"https://colleges.collegeshine.com/colleges/jkk-munirajah-institute-of-health-sciences-college-of-pharmacy-erode.html"],
    ["Excel College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/EXCEL-COLLEGESHINE-1-300x169.webp","Namakkal, Tamil Nadu",4.2,53,"https://colleges.collegeshine.com/colleges/excel-college-of-pharmacy"],
    ["Sri Shanmugha College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/SRISHANMUGA-COLLEGESHINE-300x169.webp","Salem, Tamil Nadu",4.2,51,"https://colleges.collegeshine.com/colleges/sri-shanmugha-college-of-pharmacy"],
   
    ["Nandha College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/NANDHA-COLLEGESHINE-3-300x169.webp","Erode, Tamil Nadu",4.3,69,"https://colleges.collegeshine.com/colleges/nandha-college-of-pharmacy"],
    ["Shree Venkateshwara College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/VENGADESHWARA-COLLEGESHINE-300x169.webp","Chennai, Tamil Nadu",4.2,48,"https://colleges.collegeshine.com/colleges/shree-venkateshwara-college-of-pharmacy"],
    ["KMCH College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/KMCH-COLLEGESHINE-1-300x169.webp","Coimbatore, Tamil Nadu",4.5,105,"https://colleges.collegeshine.com/colleges/kmch-college-of-pharmacy"],
    ["Karpagam College of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/KARPAGAM-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.3,72,"https://colleges.collegeshine.com/colleges/karpagam-college-of-pharmacy"],
    ["Dhanalakshmi Srinivasan College Of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/DHANALAKSMI-COLLEGESHINE-300x169.webp","Perambalur, Tamil Nadu",4.1,46,"https://colleges.collegeshine.com/colleges/dhanalakshmi-srinivasan-college-of-pharmacy-perambalur"],
    ["Sree Abirami College Of Pharmacy","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/ABIRAMI-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.1,42,"https://colleges.collegeshine.com/colleges/sree-abirami-college-of-pharmacy"],
    ["RVS Padmavathy Institute of Pharmacy & Research Center","Pharmacy","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHINE-3-300x169.webp","Coimbatore, Tamil Nadu",4.3,74,"https://colleges.collegeshine.com/colleges/rvs-padmavathy-ammal-college-of-pharmacy.html"],

    // Nursing
    ["Sri Shanmuga College Of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/SRI-SHANMUGHA-COLLEGESHINE-2-300x169.webp","Salem, Tamil Nadu",4.2,55,"https://colleges.collegeshine.com/colleges/shanmuga-college-of-nursing.html"],
    
    ["Vivekanandha College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/VIVEKANANDHA-COLLEGESHINE-1-300x169.webp","Tiruchengode, Tamil Nadu",4.3,64,"https://colleges.collegeshine.com/colleges/vivekanandha-college-of-nursing.html"],
    ["JKKN College of Nursing and Research","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/MADRAS-COLLEGESHINE-1-300x169.webp","Namakkal, Tamil Nadu",4.3,61,"https://colleges.collegeshine.com/colleges/j-k-k-nataraja-college-of-nursing-and-research.html"],
    ["Nandha College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/NANDHA-COLLEGESHINE-1-300x169.webp","Erode, Tamil Nadu",4.3,67,"https://colleges.collegeshine.com/colleges/nandha-college-of-nursing"],
    ["Shree Venkateshwara College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/SREE-VENKATESHWARA-COLLEGESHINE-300x169.webp","Chennai, Tamil Nadu",4.2,49,"https://colleges.collegeshine.com/colleges/shree-venkateshwara-college-of-nursing"],
    ["KMCH College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/KMCH-COLLEGESHINE-300x168.webp","Coimbatore, Tamil Nadu",4.6,131,"https://colleges.collegeshine.com/colleges/kmch-college-of-nursing"],
    ["RVS College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHINE-1-300x169.webp","Coimbatore, Tamil Nadu",4.4,79,"https://colleges.collegeshine.com/colleges/rvs-college-of-nursing"],
    ["Sree Abirami College of Nursing","Nursing","https://collegeshine.com/wp-content/uploads/2026/02/SREE-ABIRAMI-COLLEGESHINE-1-300x169.webp","Coimbatore, Tamil Nadu",4.1,40,"https://colleges.collegeshine.com/colleges/sree-abirami-college-of-nursing"],

    // Physiotherapy
    ["Saveetha College of Physiotherapy","Physiotherapy","https://collegeshine.com/wp-content/uploads/2026/02/SAVITHA-COLLEGESHINE-300x169.webp","Chennai, Tamil Nadu",4.4,84,"https://colleges.collegeshine.com/colleges/saveetha-college-of-physiotherapy"],
    ["RVS College of Physiotherapy","Physiotherapy","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHINE-3-300x169.webp","Coimbatore, Tamil Nadu",4.3,66,"https://colleges.collegeshine.com/colleges/r-v-s-college-of-physiotherapy"],
    ["KG College of Physiotherapy","Physiotherapy","https://collegeshine.com/wp-content/uploads/2026/02/KG-COLLEGESHINE-300x169.webp","Coimbatore, Tamil Nadu",4.3,60,"https://colleges.collegeshine.com/colleges/kg-college-of-physiotherapy"],
    ["Nandha College of Physiotherapy","Physiotherapy","https://collegeshine.com/wp-content/uploads/2026/02/NANDHA-COLLEGESHINE-3-300x169.webp","Erode, Tamil Nadu",4.2,54,"https://colleges.collegeshine.com/colleges/nandha-college-of-physiotherapy"],
    ["JKK Munirajah Medical Research Foundation College of Physiotherapy","Physiotherapy","https://collegeshine.com/wp-content/uploads/2026/02/JKK-COLLEGESHINE-4-300x169.webp","Namakkal, Tamil Nadu",4.2,51,"https://colleges.collegeshine.com/colleges/jkk-munirajah-medical-research-foundation-college-of-physiotherapy"],
    

    // Occupational Therapy
    ["JKK Munirajah College Of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/JKK-COLLEGESHINE-4-300x169.webp","Namakkal, Tamil Nadu",4.1,42,"https://colleges.collegeshine.com/colleges/jkk-munirajah-medical-research-foundation-college-of-occupational-therapy-namakkal"],
    ["Shree Venkateshwara College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/SREENARAYANA-COLLEGESHINE-1-300x169.webp","Chennai, Tamil Nadu",4.2,48,"https://colleges.collegeshine.com/colleges/sri-venkateswara-college-of-occupational-therapy-chennai.html"],
    ["SRM College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/SRM-COLLEGESHINE-2-300x169.webp","Chennai, Tamil Nadu",4.4,86,"https://colleges.collegeshine.com/colleges/srm-college-of-occupational-therapy.html"],
    ["Saveetha College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/SAVEETHA-COLLEGESHINE-1-300x169.webp","Chennai, Tamil Nadu",4.3,63,"https://colleges.collegeshine.com/colleges/saveetha-college-of-occupational-therapy-chennai.html"],
    ["Sree Abirami College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/SREE-ABIRAMI-COLLEGESHINE-2-300x169.webp","Coimbatore, Tamil Nadu",4.1,39,"https://colleges.collegeshine.com/colleges/sree-abirami-college-of-occupational-therapy.html"],
    ["PPG College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/PPG-COLLEGESHINE-2-300x169.webp","Coimbatore, Tamil Nadu",4.2,45,"https://colleges.collegeshine.com/colleges/ppg-college-of-occupational-therapy.html"],
    ["KMCH College of Occupational Therapy","Occupational","https://collegeshine.com/wp-content/uploads/2026/02/KMCH-COLLEGESHINE-3-300x169.webp","Coimbatore, Tamil Nadu",4.5,97,"https://colleges.collegeshine.com/colleges/kmch-college-of-occupational-therapy.html"],

    // Marine
   
    ["Amet University","Marine","https://collegeshine.com/wp-content/uploads/2026/02/AMET-COLLEGESHINE-300x169.webp","Chennai, Tamil Nadu",4.5,112,"https://colleges.collegeshine.com/colleges/academy-of-maritime-education-and-training-university-amet-chennai"],
    ["Vels University","Marine","https://collegeshine.com/wp-content/uploads/2026/02/vels-university-collegeshine-300x169.webp","Chennai, Tamil Nadu",4.4,90,""],
    ["SAMS Marine College","Marine","https://collegeshine.com/wp-content/uploads/2026/02/sams-kappal-collegeshine-300x168.webp","Chennai, Tamil Nadu",4.1,41,""],
    ["Indian Maritime University","Marine","https://collegeshine.com/wp-content/uploads/2026/02/indian-maritime-university-collegeshine-300x169.webp","Chennai, Tamil Nadu",4.6,138,"https://colleges.collegeshine.com/colleges/indian-maritime-university-chennai-campus.html"],
    ["PSN College of Engineering and Technology","Marine","https://collegeshine.com/wp-content/uploads/2026/02/psn-collegeshine-300x168.webp","Tirunelveli, Tamil Nadu",4.2,53,"https://colleges.collegeshine.com/colleges/psn-college-of-engineering-and-technology"],
    ["Sri Venkateswara College of Engineering","Marine","https://collegeshine.com/wp-content/uploads/2026/02/svce-collegeshine-300x169.webp","Chennai, Tamil Nadu",4.3,71,"https://colleges.collegeshine.com/colleges/sri-venkateswara-college-of-engineering-marine-engineering"],

    // Hotel Management
    ["Selvamm Arts and Science College","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/SELVAMMARTSANDSCIENCECOLLEGE-COLLEGESHINE-300x169.webp","Namakkal, Tamil Nadu",4.1,40,"https://colleges.collegeshine.com/colleges/selvam-arts-and-science-college"],
    ["VMKV Arts and Science College","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/VINAYAGA-COLLEGESHINE-2-300x169.webp","Salem, Tamil Nadu",4.2,49,"https://colleges.collegeshine.com/colleges/selvam-arts-and-science-college"],
    ["Muthayammal College of Arts and Science","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/MUTHAYAMMAL-COLLEGESHINE-1-300x169.webp","Namakkal, Tamil Nadu",4.2,52,"https://colleges.collegeshine.com/colleges/muthayammal-college-of-arts-and-science.html"],
    ["Dr.N.G.P. Arts and Science College","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/NGP-COLLEGESHINE-1-300x169.webp","Coimbatore, Tamil Nadu",4.5,101,"https://colleges.collegeshine.com/colleges/drngpasc"],
    ["Hindusthan College of Arts & Science","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/HINDUSTAN-COLLEGESHIN-300x82.webp","Coimbatore, Tamil Nadu",4.5,118,"https://colleges.collegeshine.com/colleges/hindusthan-college-of-arts-and-science"],
    ["RVS College of Arts and Science","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/RVS-COLLEGESHIN-300x149.webp","Coimbatore, Tamil Nadu",4.3,85,"https://colleges.collegeshine.com/colleges/rvs-college-of-arts-and-science-coimbatore"],
    ["Nehru Arts and Science College","Hotel","https://collegeshine.com/wp-content/uploads/2026/02/NEHRU-COLLEGESHIN-300x146.webp","Coimbatore, Tamil Nadu",4.4,108,"https://colleges.collegeshine.com/colleges/nehru-arts-and-science-college-coimbatore"]
  ];

  var CARDS_PER_PAGE = 6;
  var currentFilter = "All";

  var filtersEl = document.getElementById("tvm4xFilters");
  var gridEl = document.getElementById("tvm4xGrid");
  var showMoreWrap = document.getElementById("tvm4xShowMoreWrap");
  var showMoreBtn = document.getElementById("tvm4xShowMore");

  var modalOverlay = document.getElementById("tvm4xModalOverlay");
  var modalClose = document.getElementById("tvm4xModalClose");
  var modalCollegeName = document.getElementById("tvm4xModalCollegeName");
  var modalCollegeField = document.getElementById("tvm4x_college");
  var enquiryForm = document.getElementById("tvm4xEnquiryForm");
  var modalSubmitBtn = document.getElementById("tvm4xModalSubmitBtn");
  var modalMsg = document.getElementById("tvm4xModalMsg");

  function starRow(rating){
    var full = Math.round(rating);
    var s = "";
    for(var i=0;i<5;i++){ s += i < full ? "★" : "☆"; }
    return s;
  }

  function pinSVG(){
    return '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.6 11.2 7.3 11.8.4.3 1 .3 1.4 0C13.4 21.2 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 10.8c-1.6 0-2.8-1.3-2.8-2.8S10.4 7.2 12 7.2s2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8z"/></svg>';
  }
  function phoneSVG(){
    return '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4.5c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z"/></svg>';
  }

  function descFor(name){
    return "Discover programs, admissions info, fees, and placement details for " + name + ". Explore courses, campus facilities, and eligibility criteria before you apply.";
  }

  function renderFilters(){
    categories.forEach(function(cat){
      var btn = document.createElement("button");
      btn.className = "tvm4x-filter-btn" + (cat.key === currentFilter ? " active" : "");
      btn.textContent = cat.label;
      btn.dataset.key = cat.key;
      btn.addEventListener("click", function(){
        currentFilter = cat.key;
        filtersEl.querySelectorAll(".tvm4x-filter-btn").forEach(function(b){ b.classList.remove("active"); });
        btn.classList.add("active");
        renderGrid();
      });
      filtersEl.appendChild(btn);
    });
  }

  /* ---------- open / close enquiry popup ---------- */
  function openEnquiryModal(collegeName){
    modalCollegeField.value = collegeName;
    modalCollegeName.textContent = collegeName;
    modalMsg.className = "tvm4x-modal-msg";
    modalMsg.textContent = "";
    enquiryForm.reset();
    modalCollegeField.value = collegeName; // reset() above clears hidden field too, so set again
    modalOverlay.classList.add("tvm4x-open");
  }
  function closeEnquiryModal(){
    modalOverlay.classList.remove("tvm4x-open");
  }
  modalClose.addEventListener("click", closeEnquiryModal);
  modalOverlay.addEventListener("click", function(e){
    if(e.target === modalOverlay){ closeEnquiryModal(); }
  });

  /* ---------- submit enquiry to Contact Form 7 ---------- */
  enquiryForm.addEventListener("submit", function(e){
    e.preventDefault();

    var college = document.getElementById("tvm4x_college").value;
    var name = document.getElementById("tvm4x_a1").value.trim();
    var phone = document.getElementById("tvm4x_c1").value.trim();
    var email = document.getElementById("tvm4x_b1").value.trim();
    var message = document.getElementById("tvm4x_e1").value.trim();

    modalSubmitBtn.disabled = true;
    modalSubmitBtn.textContent = "Sending...";

    var formData = new FormData();
    formData.append("college", college);
    formData.append("a1", name);
    formData.append("b1", email);
    formData.append("c1", phone);
    formData.append("e1", message);

    // required CF7 housekeeping fields
    formData.append("_wpcf7", 36284);
    formData.append("_wpcf7_unit_tag", "contact_form");
    formData.append("_wpcf7_container_post", "0");

    fetch(CF7_ENDPOINT, { method:"POST", body:formData })
      .then(function(res){ return res.json(); })
      .then(function(data){
        modalSubmitBtn.disabled = false;
        modalSubmitBtn.textContent = "Submit Enquiry";
        modalMsg.className = "tvm4x-modal-msg tvm4x-show tvm4x-ok";
        modalMsg.textContent = "Thanks! Our team will contact you shortly.";
        enquiryForm.reset();
      })
      .catch(function(err){
        modalSubmitBtn.disabled = false;
        modalSubmitBtn.textContent = "Submit Enquiry";
        modalMsg.className = "tvm4x-modal-msg tvm4x-show tvm4x-err";
        modalMsg.textContent = "Something went wrong. Please try again.";
      });
  });

  function renderGrid(){
    gridEl.innerHTML = "";
    var list = colleges.filter(function(c){
      return currentFilter === "All" || c[1] === currentFilter;
    });

    var toShow = list.slice(0, CARDS_PER_PAGE);

    toShow.forEach(function(c){
      var name = c[0], img = c[2], loc = c[3], rating = c[4], reviews = c[5];
      var detailsLink = c[6] ? c[6] : SHOW_MORE_URL; // 7th value = per-college link, else fallback

      var card = document.createElement("div");
      card.className = "tvm4x-card";
      card.innerHTML =
        '<div class="tvm4x-card__top">' +
          '<div class="tvm4x-logo"><img src="'+img+'" alt="'+name+'" width="52" height="52" loading="lazy" decoding="async"></div>' +
          '<div class="tvm4x-rating"><span class="tvm4x-stars">'+starRow(rating)+'</span><br>'+rating.toFixed(1)+' ('+reviews+' reviews)</div>' +
        '</div>' +
        '<h3>'+name+'</h3>' +
        '<div class="tvm4x-loc">'+pinSVG()+' '+loc+'</div>' +
        '<p class="tvm4x-desc">'+descFor(name)+'</p>' +
        '<div class="tvm4x-actions">' +
          '<a class="tvm4x-btn tvm4x-btn--primary" href="'+detailsLink+'" target="_blank" rel="noopener">View Details</a>' +
          '<button type="button" class="tvm4x-btn tvm4x-btn--ghost tvm4x-enquiry-btn">Enquiry Now</button>' +
          '<a class="tvm4x-btn tvm4x-btn--call" href="tel:'+CALL_NUMBER+'">'+phoneSVG()+' Call Now</a>' +
        '</div>';

      // wire up "Enquiry Now" -> open popup pre-filled with this college's name
      card.querySelector(".tvm4x-enquiry-btn").addEventListener("click", function(){
        openEnquiryModal(name);
      });

      gridEl.appendChild(card);
    });

    showMoreWrap.classList.remove("tvm4x-hide");
  }

  showMoreBtn.addEventListener("click", function(){
    window.location.href = SHOW_MORE_URL;
  });

  renderFilters();
  renderGrid();

})();
`,
`

function ng72_handleSubmit(e){

e.preventDefault();

const name=document.getElementById("ng72_a1").value.trim();
const email=document.getElementById("ng72_b1").value.trim();
const phone=document.getElementById("ng72_c1").value.trim();
const support=document.getElementById("ng72_d1").value;
const message=document.getElementById("ng72_e1").value.trim();

const btn=document.getElementById("ng72_btn");
const successMsg=document.getElementById("ng72_success");

successMsg.classList.remove("ng72_show");
btn.disabled=true;
btn.innerHTML="<i class=\\"fa fa-spinner fa-spin\\"></i>";

const formData=new FormData();

formData.append("a1",name);
formData.append("b1",email);
formData.append("c1",phone);
formData.append("d1",support);
formData.append("e1",message);

/* Replace with your actual Contact Form 7 form ID */
formData.append("_wpcf7","3775");
formData.append("_wpcf7_unit_tag","contact_form");
formData.append("_wpcf7_container_post","0");

fetch("https://collegeshine.com/wp-json/contact-form-7/v1/contact-forms/3775/feedback",
{
method:"POST",
body:formData
})
.then(res=>res.json())
.then(data=>{
btn.disabled=false;
btn.innerHTML="Send";
successMsg.classList.add("ng72_show");
document.getElementById("ng72_form").reset();
})
.catch(err=>{
btn.disabled=false;
btn.innerHTML="Send";
successMsg.innerHTML="<i class=\\"fa fa-exclamation-circle\\"></i> Something went wrong. Please try again.";
successMsg.style.background="rgba(220,38,38,.08)";
successMsg.style.borderColor="rgba(220,38,38,.25)";
successMsg.style.color="#b91c1c";
successMsg.classList.add("ng72_show");
});

return false;

}

`,
`
(function(){
  var track = document.getElementById('saTrack');
  var prev  = document.getElementById('saPrev');
  var next  = document.getElementById('saNext');
  var dots  = Array.prototype.slice.call(document.querySelectorAll('#saDots .sa-dot'));
  var cta   = document.getElementById('saCtaBanner');
  if (!track) return;

  var cards = Array.prototype.slice.call(track.querySelectorAll('.sa-card'));
  var currentIdx = 0;

  /* ── Entrance animation (IntersectionObserver) ── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('sa-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    cards.forEach(function(c){ io.observe(c); });
    if (cta) io.observe(cta);
  } else {
    cards.forEach(function(c){ c.classList.add('sa-visible'); });
    if (cta) cta.classList.add('sa-visible');
  }

  /* ── How many cards are fully visible at once ── */
  function visibleCount(){
    if (!cards[0]) return 1;
    var trackW = track.clientWidth;
    var cardW  = cards[0].getBoundingClientRect().width;
    var gap    = parseFloat(getComputedStyle(track).gap) || 16;
    return Math.max(1, Math.round(trackW / (cardW + gap)));
  }

  /* ── Scroll track so card[i] is the first visible card ── */
  function goTo(i){
    var total = cards.length;
    var vis   = visibleCount();
    i = Math.max(0, Math.min(total - vis, i));
    i = Math.min(i, total - 1);
    currentIdx = i;

    var card = cards[i];
    var scrollTarget = card.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft || 0);
    track.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    updateUI(i);
  }

  /* ── Detect active index from scroll position ── */
  function idxFromScroll(){
    var best = 0, bestD = Infinity;
    var scrollLeft = track.scrollLeft;
    cards.forEach(function(c, i){
      var d = Math.abs(c.offsetLeft - scrollLeft);
      if (d < bestD){ bestD = d; best = i; }
    });
    return best;
  }

  /* ── Update arrows + dots ── */
  function updateUI(idx){
    if (idx === undefined) idx = idxFromScroll();
    currentIdx = idx;

    if (prev) prev.disabled = (idx <= 0);
    if (next) next.disabled = (idx >= cards.length - visibleCount());

    dots.forEach(function(d, i){ d.classList.toggle('active', i === idx); });
  }

  /* ── Button clicks: step by visibleCount ── */
  if (prev) prev.addEventListener('click', function(){
    goTo(currentIdx - visibleCount());
  });
  if (next) next.addEventListener('click', function(){
    goTo(currentIdx + visibleCount());
  });

  /* ── Dot clicks ── */
  dots.forEach(function(d){
    d.addEventListener('click', function(){
      goTo(parseInt(d.getAttribute('data-i'), 10));
    });
  });

  /* ── Sync after finger/mouse swipe ends ── */
  var scrollTimer = null;
  track.addEventListener('scroll', function(){
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function(){
      updateUI(idxFromScroll());
    }, 120);
  }, { passive: true });

  /* ── Touch swipe detection (belt-and-suspenders for old iOS) ── */
  var touchStartX = 0;
  track.addEventListener('touchstart', function(e){
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', function(e){
    var dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40){
      setTimeout(function(){ updateUI(idxFromScroll()); }, 200);
    }
  }, { passive: true });

  /* ── Keyboard on track ── */
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', function(e){
    if (e.key === 'ArrowRight'){ e.preventDefault(); goTo(currentIdx + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIdx - 1); }
  });

  /* ── Re-sync on resize (orientation change etc.) ── */
  var resizeTimer = null;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
      goTo(currentIdx);
      updateUI(currentIdx);
    }, 150);
  });

  /* ── Init ── */
  updateUI(0);
})();
`,
`
/* ══ GET FREE COUNSELLING — POPUP + CONTACT FORM 7 SUBMIT ══ */
(function(){
  var overlay = document.getElementById('saModalOverlay');
  var openBtn = document.getElementById('saOpenModal');
  var closeBtn = document.getElementById('saModalClose');
  var form  = document.getElementById('saModalForm');
  var btn   = document.getElementById('saModalBtn');
  var msg   = document.getElementById('saModalMsg');
  if (!overlay || !form) return;

  function openModal(){
    overlay.classList.add('sa-modal-open');
    document.body.classList.add('sa-modal-lock');
  }
  function closeModal(){
    overlay.classList.remove('sa-modal-open');
    document.body.classList.remove('sa-modal-lock');
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeModal(); });

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var name    = document.getElementById('saName').value.trim();
    var phone   = document.getElementById('saPhone').value.trim();
    var email   = document.getElementById('saEmail').value.trim();
    var country = document.getElementById('saCountry').value;

    msg.classList.remove('sa-show');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    var formData = new FormData();
    formData.append('your-name', name);
    formData.append('your-phone', phone);
    formData.append('your-email', email);
    formData.append('your-country', country);

    /* ─────────────────────────────────────────────────────────
       Replace 1234 in BOTH places below with your real
       Contact Form 7 form ID (Contact > Contact Forms > open
       the form > the ID shown next to the shortcode, e.g.
       [contact-form-7 id="1234" title="Study Abroad Counselling"])
    ───────────────────────────────────────────────────────── */
    formData.append('_wpcf7', '1234');
    formData.append('_wpcf7_unit_tag', 'sa_counselling_form');
    formData.append('_wpcf7_container_post', '0');

    fetch('https://collegeshine.com/wp-json/contact-form-7/v1/contact-forms/1234/feedback', {
      method: 'POST',
      body: formData
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
      btn.disabled = false;
      btn.textContent = 'Get Free Counselling';
      msg.textContent = 'Thank you! Our counsellor will contact you shortly.';
      msg.style.background = 'rgba(22,163,74,.08)';
      msg.style.borderColor = 'rgba(22,163,74,.25)';
      msg.style.color = '#15803d';
      msg.classList.add('sa-show');
      form.reset();
      setTimeout(closeModal, 1800);
    })
    .catch(function(err){
      btn.disabled = false;
      btn.textContent = 'Get Free Counselling';
      msg.textContent = 'Something went wrong. Please try again.';
      msg.style.background = 'rgba(220,38,38,.08)';
      msg.style.borderColor = 'rgba(220,38,38,.25)';
      msg.style.color = '#b91c1c';
      msg.classList.add('sa-show');
    });
  });
})();
`,
`
(function(){
  const cs7data = [
    // {
    //   type:"video",
    //   name:"Watch: Student Video Review",
    //   role:"Video Testimonial",
    //   videoId:"RC7xw4TmRN8",
    //   img:"https://img.youtube.com/vi/RC7xw4TmRN8/hqdefault.jpg"
    // },
    {
      name:"Karuppannan",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Arunraj-Karuppannan.jpeg",
      native:"CollegeShine மாணவர்களுக்கு admission தொடர்பான முழுமையான தகவல்களை வழங்கும் ஒரு சிறந்த platform. course selection, college details, scholarship information மற்றும் admission guidance அனைத்தும் ஒரே இடத்தில் கிடைப்பது மிகவும் பயனுள்ளதாக உள்ளது.",
      quote:"CollegeShine is an excellent platform that provides complete information related to admissions. Course selection, college details, scholarship information, and admission guidance are all available in one place, which is very helpful for students."
    },
    {
      name:"ShanmugaSundaram",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Bharathkumar-ShanmugaSundaram-scaled.jpeg",
      native:"CollegeShine website-ல் உள்ள tools மிகவும் பயனுள்ளதாக இருந்தது. Cutoff calculator மூலம் college வாய்ப்புகளை அறிந்து கொள்ள முடிந்தது. Career map generator மற்றும் scholarship finder tools admission planning செய்ய மிகவும் உதவியாக இருந்தது.",
      quote:"The tools available on the CollegeShine website are extremely useful. The cutoff calculator helped me understand my college options, while the career map generator and scholarship finder tools made my admission planning much easier."
    },
    {
      name:"Hariprasath Saravanan",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Hariprasath-Saravanan.jpeg",
      native:"UG admission process பற்றி CollegeShine மிகவும் தெளிவாக வழிகாட்டியது. எந்த colleges-ல் apply செய்ய வேண்டும், application process எப்படி செய்ய வேண்டும் என்பதையும் அவர்கள் விளக்கினர். Online admission process எளிதாக முடிக்க உதவியது.",
      quote:"CollegeShine provided clear guidance about the UG admission process. They explained where to apply and how to complete the application process. Their support made the online admission process very easy."
    },
    {
      name:"Varatharasu",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Kathiravan-Varatharasu.jpeg",
      native:"CollegeShine website மிகவும் user-friendly ஆக உள்ளது. colleges, courses, scholarship மற்றும் admission தொடர்பான தகவல்கள் அனைத்தும் ஒரே இடத்தில் தெளிவாக கிடைக்கிறது. இந்த website மாணவர்களுக்கு admission planning செய்ய மிகவும் உதவியாக உள்ளது.",
      quote:"The CollegeShine website is very user-friendly and informative. All details about colleges, courses, scholarships, and admissions are available in one place. It makes admission planning much easier for students."
    },
    {
      name:"Kasi",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Kaviyarasu-Kasi.jpeg",
      native:"12ம் வகுப்பு முடிந்த பிறகு என்ன course தேர்வு செய்ய வேண்டும் என்று தெரியாமல் இருந்தேன். அந்த நேரத்தில் CollegeShine career guidance மிகவும் உதவியாக இருந்தது. அவர்கள் எனது interest மற்றும் future opportunities-ஐ கருத்தில் கொண்டு சரியான course மற்றும் college தேர்வு செய்ய உதவினர்.",
      quote:"After completing 12th standard, I was unsure about which course to pursue. CollegeShine's career guidance helped me understand my options clearly. They guided me based on my interests and future opportunities to choose the right course and college."
    },
    {
      name:"Dinesh",
      img:"https://collegeshine.com/wp-content/uploads/2025/11/Perumal-Dinesh.jpeg",
      native:"CollegeShine மூலம் scholarship வாய்ப்புகள் பற்றிய சரியான தகவல்களை தெரிந்து கொள்ள முடிந்தது. அவர்கள் scholarship apply செய்ய வேண்டிய process மற்றும் eligibility பற்றியும் தெளிவாக விளக்கினர். அதன் மூலம் எனக்கு கல்வி செலவை குறைக்க உதவியாக இருந்தது.",
      quote:"Through CollegeShine, I was able to learn about various scholarship opportunities available for students. They explained the scholarship application process and eligibility clearly, which helped me reduce my educational expenses."
    }
  ];

  const wrap = document.getElementById('cs7slidewrap');
  const avatar = document.getElementById('cs7avatar');
  const nameEl = document.getElementById('cs7name');
  const roleEl = document.getElementById('cs7role');
  const starsEl = document.getElementById('cs7stars');
  const dotsEl = document.getElementById('cs7dots');

  cs7data.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'cs7slide' + (i === 0 ? ' cs7active' : '');
    slide.dataset.index = i;

    if (t.type === 'video') {
      slide.innerHTML =
        '<div class="cs7videolabel">' +
          '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' +
          'Video Review' +
        '</div>' +
        '<div class="cs7videowrap">' +
          '<iframe src="https://www.youtube.com/embed/' + t.videoId + '" ' +
          'title="' + t.name + '" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
          'referrerpolicy="strict-origin-when-cross-origin" ' +
          'loading="lazy" allowfullscreen></iframe>' +
        '</div>';
    } else {
      slide.innerHTML = '<span class="cs7native">' + t.native + '</span><p class="cs7quote">"' + t.quote + '"</p>';
    }

    wrap.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'cs7dot' + (i === 0 ? ' cs7dotactive' : '');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  let current = 0;
  const slides = wrap.querySelectorAll('.cs7slide');
  const dots = dotsEl.querySelectorAll('button');

  function render(){
    slides.forEach((s, i) => s.classList.toggle('cs7active', i === current));
    dots.forEach((d, i) => d.classList.toggle('cs7dotactive', i === current));
    const t = cs7data[current];
    avatar.src = t.img;
    avatar.alt = t.name;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role || 'Verified Student';
    starsEl.style.display = t.type === 'video' ? 'none' : '';
  } 

  function goTo(i){
    current = (i + cs7data.length) % cs7data.length;
    render();
  }

  document.getElementById('cs7prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('cs7next').addEventListener('click', () => goTo(current + 1));

  render();
})();
`]

// Mock course data for Screen 01 - Learner Portal Catalogue
const coursesData = [
  {
    id: 1,
    title: "Spoken English Bootcamp",
    slug: "spoken-english",
    summary: "Master day-to-day conversation, professional vocabulary, and clear pronunciation. Includes daily live interactive sessions, speaking assignments, and peer reviews.",
    level: "Beginner–Intermediate",
    deliveryModel: "Live",
    accessType: "Paid",
    price: "PKR 15,000",
    billingPeriod: "month",
    trialAvailable: true,
    ageGroup: "Adults / Professionals",
    subject: "English",
    duration: "12 Weeks",
    schedule: "Mon & Wed, 6:00 PM - 7:30 PM",
    rating: "4.8",
    enrolledCount: "1.2k",
    image: "images/spoken_english.png",
    featured: true
  },
  {
    id: 2,
    title: "IELTS Preparation Masterclass",
    slug: "ielts-preparation",
    summary: "Accelerate your score with comprehensive prep covering Listening, Reading, Writing, and Speaking. Features feedback from certified trainers and 10+ mock exams.",
    level: "Intermediate–Advanced",
    deliveryModel: "Live",
    accessType: "Paid",
    price: "PKR 18,000",
    billingPeriod: "one-time",
    trialAvailable: true,
    ageGroup: "Higher Education / Adults",
    subject: "English",
    duration: "8 Weeks",
    schedule: "Tue & Thu, 7:00 PM - 9:00 PM",
    rating: "4.9",
    enrolledCount: "850",
    image: "images/ielts_prep.png",
    featured: true
  },
  {
    id: 3,
    title: "Practical AI & Prompt Engineering",
    slug: "practical-ai",
    summary: "Build coding templates, automate tasks, and design visual assets using ChatGPT, Midjourney, and Claude. No prior programming experience required.",
    level: "Beginner",
    deliveryModel: "Self-Paced",
    accessType: "Preview", // Free preview available, account required
    price: "PKR 12,000",
    billingPeriod: "one-time",
    trialAvailable: false,
    ageGroup: "General / Teenagers",
    subject: "Technology",
    duration: "Self-Paced (20 hours)",
    schedule: "Access anytime",
    rating: "4.7",
    enrolledCount: "2.4k",
    image: "images/practical_ai.png",
    featured: false
  },
  {
    id: 4,
    title: "Digital Marketing Foundations",
    slug: "digital-marketing",
    summary: "Learn SEO, social media marketing, Google Ads, and copywriting fundamentals. Build real marketing campaigns and track conversions with visual reports.",
    level: "Beginner–Intermediate",
    deliveryModel: "Self-Paced",
    accessType: "Free", // Guest visible preview / Free access
    price: "Free",
    billingPeriod: "",
    trialAvailable: false,
    ageGroup: "General / Adults",
    subject: "Marketing",
    duration: "Self-Paced (15 hours)",
    schedule: "Access anytime",
    rating: "4.6",
    enrolledCount: "3.1k",
    image: "images/digital_marketing.png",
    featured: false
  },
  {
    id: 5,
    title: "K-12 Mathematics (Grade 6–8)",
    slug: "k12-math-grade-6-8",
    summary: "Aligned with national and international curricula. Strengthen core arithmetic, algebra, and geometry through live lessons, interactive games, and guardian portals.",
    level: "Grade-based",
    deliveryModel: "K-12",
    accessType: "Paid",
    price: "PKR 10,000",
    billingPeriod: "month",
    trialAvailable: true,
    ageGroup: "Ages 11–14 / Grades 6-8",
    subject: "Mathematics",
    duration: "Ongoing",
    schedule: "Mon to Thu, 4:00 PM - 5:00 PM",
    rating: "4.9",
    enrolledCount: "640",
    image: "images/k12_math.png",
    featured: true
  },
  {
    id: 6,
    title: "Introduction to Computational Thinking",
    slug: "computational-thinking",
    summary: "Learn logic, pattern recognition, and algorithm design. Perfect starting point for young learners transitioning into structured computer programming.",
    level: "Beginner",
    deliveryModel: "K-12",
    accessType: "Preview", // Free preview available
    price: "PKR 8,000",
    billingPeriod: "one-time",
    trialAvailable: false,
    ageGroup: "Ages 8–12 / Grades 3-6",
    subject: "Technology",
    duration: "6 Weeks",
    schedule: "Friday, 5:00 PM - 7:00 PM",
    rating: "4.8",
    enrolledCount: "420",
    image: "images/practical_ai.png", // Reuse visual assets carefully
    featured: false
  }
];

// Application state
const state = {
  searchQuery: "",
  filters: {
    deliveryModel: "all",
    subject: "all",
    level: "all",
    ageGroup: "all",
    accessType: "all"
  },
  isLoading: false,
  submittedTrials: {},
  classDisruptions: {
    rescheduleRequests: [
      {
        id: "RESCHEDULE-REQ-LEARNER-001",
        occurrenceId: "CLASS-002",
        requestedBy: "Learner",
        requestedFor: "Ali Khan",
        preferredDate: "2026-08-21",
        preferredTime: "19:00",
        reason: "Learner unavailable",
        notes: "Learner has an appointment during the original class time.",
        status: "Pending" // Pending | Approved | Declined
      }
    ],
    reschedules: {}, // e.g. "CLASS-002": RESCHEDULE-001 record
    cancellations: {}, // e.g. "CLASS-002": CANCEL-001 record
    makeups: {}, // e.g. "CLASS-002": MAKEUP-CLASS-002-001 record
    selectedScenario: "Happy Reschedule" // Happy Reschedule | Late Cancellation | Trainer No-show | Technical Issue | Group Class
  }
};

// DOM Elements
const elements = {
  courseGrid: document.getElementById("course-grid"),
  searchInput: document.getElementById("search-input"),
  filterDelivery: document.getElementById("filter-delivery"),
  filterSubject: document.getElementById("filter-subject"),
  filterLevel: document.getElementById("filter-level"),
  filterAge: document.getElementById("filter-age"),
  filterPrice: document.getElementById("filter-price"),
  activeFiltersBar: document.getElementById("active-filters-bar"),
  activePillsContainer: document.getElementById("active-pills-container"),
  resultsCount: document.getElementById("results-count"),
  resetFiltersBtn: document.getElementById("reset-filters"),
  simulateLoadingBtn: document.getElementById("simulate-loading"),
  mobileFilterToggleBtn: document.getElementById("mobile-filter-toggle"),
  filtersGrid: document.getElementById("filters-grid"),
  
  // Modals
  modalOverlay: document.getElementById("modal-overlay"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  
  // Header Actions
  signInBtn: document.getElementById("signin-btn"),
  signUpBtn: document.getElementById("signup-btn")
};

// Routing Engine
window.addEventListener("hashchange", handleRouting);
window.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  handleRouting();
});

function handleRouting() {
  const hash = window.location.hash;
  const catalogueView = document.getElementById("catalogue-view");
  const detailsView = document.getElementById("course-details-view");
  const trialView = document.getElementById("trial-request-view");
  const staffView = document.getElementById("staff-trials-view");
  const schedulingView = document.getElementById("staff-scheduling-view");
  const appSidebar = document.getElementById("app-sidebar");
  const staffSidebar = document.getElementById("staff-sidebar");
  const rolePill = document.getElementById("role-display-pill");
  const switchBtn = document.getElementById("portal-switch-btn");
  const membershipRequestView = document.getElementById("learner-membership-request-view");
  const staffEnrolmentsView = document.getElementById("staff-enrolments-view");
  const staffEnrolmentDetailView = document.getElementById("staff-enrolment-detail-view");
  const learnerMyCoursesView = document.getElementById("learner-mycourses-view");
  const staffSchedulingLiveView = document.getElementById("staff-scheduling-live-view");
  const learnerCourseWorkspaceView = document.getElementById("learner-course-workspace-view");
  const trainerClassReportView = document.getElementById("trainer-class-report-view");
  const opsClassChangeView = document.getElementById("ops-class-change-view");

  if (membershipRequestView) membershipRequestView.style.display = "none";
  if (staffEnrolmentsView) staffEnrolmentsView.style.display = "none";
  if (staffEnrolmentDetailView) staffEnrolmentDetailView.style.display = "none";
  if (learnerMyCoursesView) learnerMyCoursesView.style.display = "none";
  if (staffSchedulingLiveView) staffSchedulingLiveView.style.display = "none";
  if (learnerCourseWorkspaceView) learnerCourseWorkspaceView.style.display = "none";
  if (trainerClassReportView) trainerClassReportView.style.display = "none";
  if (opsClassChangeView) opsClassChangeView.style.display = "none";

  if (hash.startsWith("#staff")) {
    // Hide learner sidebar & views
    if (catalogueView) catalogueView.style.display = "none";
    if (detailsView) detailsView.style.display = "none";
    if (trialView) trialView.style.display = "none";
    if (appSidebar) appSidebar.style.display = "none";

    // Show staff sidebar
    if (staffSidebar) staffSidebar.style.display = "block";
    if (rolePill) rolePill.style.display = "flex";
    if (switchBtn) switchBtn.innerText = "Learner View";

    // Get delivery views & follow-up views & payments views & enrolments views
    const reviewsView = document.getElementById("staff-delivery-reviews-view");
    const reviewDetailView = document.getElementById("staff-delivery-detail-view");
    const followupsQueueView = document.getElementById("staff-followups-view");
    const followupDetailView = document.getElementById("staff-followup-detail-view");
    const staffPaymentsView = document.getElementById("staff-payments-view");
    const staffPaymentDetailView = document.getElementById("staff-payment-detail-view");
    const staffEnrolmentsView = document.getElementById("staff-enrolments-view");
    const staffEnrolmentDetailView = document.getElementById("staff-enrolment-detail-view");

    if (reviewsView) reviewsView.style.display = "none";
    if (reviewDetailView) reviewDetailView.style.display = "none";
    if (followupsQueueView) followupsQueueView.style.display = "none";
    if (followupDetailView) followupDetailView.style.display = "none";
    if (staffPaymentsView) staffPaymentsView.style.display = "none";
    if (staffPaymentDetailView) staffPaymentDetailView.style.display = "none";
    if (staffEnrolmentsView) staffEnrolmentsView.style.display = "none";
    if (staffEnrolmentDetailView) staffEnrolmentDetailView.style.display = "none";

    // Highlight active link in sidebar
    const staffTrialsLink = document.getElementById("sidebar-staff-trials");
    const staffReviewsLink = document.getElementById("sidebar-staff-reviews");
    const staffFollowupsLink = document.getElementById("sidebar-staff-followups");
    const staffPaymentsLink = document.getElementById("sidebar-staff-payments");
    const staffEnrolmentsLink = document.getElementById("sidebar-staff-enrolments");
    const staffLiveClassesLink = document.getElementById("sidebar-staff-live-classes");

    if (staffTrialsLink) staffTrialsLink.classList.remove("active");
    if (staffReviewsLink) staffReviewsLink.classList.remove("active");
    if (staffFollowupsLink) staffFollowupsLink.classList.remove("active");
    if (staffPaymentsLink) staffPaymentsLink.classList.remove("active");
    if (staffEnrolmentsLink) staffEnrolmentsLink.classList.remove("active");
    if (staffLiveClassesLink) staffLiveClassesLink.classList.remove("active");

    if (hash.startsWith("#staff/trials/") && hash.endsWith("/schedule")) {
      const id = hash.replace("#staff/trials/", "").replace("/schedule", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "block";
        renderTrialSchedulingPage(id);
      }
    } else if (hash === "#staff/delivery-reviews") {
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
        if (reviewsView) {
          reviewsView.style.display = "block";
          if (staffReviewsLink) staffReviewsLink.classList.add("active");
          renderDeliveryReviewQueue();
        }
      }
    } else if (hash.startsWith("#staff/delivery-reviews/")) {
      const id = hash.replace("#staff/delivery-reviews/", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
        if (reviewDetailView) {
          reviewDetailView.style.display = "block";
          if (staffReviewsLink) staffReviewsLink.classList.add("active");
          // Branch: paid class review vs trial review
          if (id.startsWith("CLASS-")) {
            renderPaidClassDeliveryReview(id);
          } else {
            renderDeliveryReviewDetail(id);
          }
        }
      }
    } else if (hash === "#staff/follow-ups") {
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (followupsQueueView) {
        followupsQueueView.style.display = "block";
        if (staffFollowupsLink) staffFollowupsLink.classList.add("active");
        renderFollowupQueue();
      }
    } else if (hash.startsWith("#staff/follow-ups/")) {
      const id = hash.replace("#staff/follow-ups/", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (followupDetailView) {
        followupDetailView.style.display = "block";
        if (staffFollowupsLink) staffFollowupsLink.classList.add("active");
        renderFollowupDetail(id);
      }
    } else if (hash === "#staff/payments") {
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffPaymentsView) {
        staffPaymentsView.style.display = "block";
        if (staffPaymentsLink) staffPaymentsLink.classList.add("active");
        renderStaffPaymentsQueue();
      }
    } else if (hash.startsWith("#staff/payments/")) {
      const id = hash.replace("#staff/payments/", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffPaymentDetailView) {
        staffPaymentDetailView.style.display = "block";
        if (staffPaymentsLink) staffPaymentsLink.classList.add("active");
        renderStaffPaymentDetail(id);
      }
    } else if (hash === "#staff/enrolments") {
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffEnrolmentsView) {
        staffEnrolmentsView.style.display = "block";
        if (staffEnrolmentsLink) staffEnrolmentsLink.classList.add("active");
        renderStaffEnrolmentsQueue();
      }
    } else if (hash.startsWith("#staff/enrolments/setup/")) {
      const id = hash.replace("#staff/enrolments/setup/", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffEnrolmentDetailView) {
        staffEnrolmentDetailView.style.display = "block";
        if (staffEnrolmentsLink) staffEnrolmentsLink.classList.add("active");
        renderStaffEnrolmentDetail(id);
      }
    } else if (hash === "#staff/live-classes") {
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffSchedulingLiveView) {
        staffSchedulingLiveView.style.display = "block";
        if (staffLiveClassesLink) staffLiveClassesLink.classList.add("active");
        renderStaffLiveClassesQueue();
      }
    } else if (hash.startsWith("#staff/enrolments/") && hash.endsWith("/classes/schedule")) {
      const id = hash.replace("#staff/enrolments/", "").replace("/classes/schedule", "");
      if (staffView) staffView.style.display = "none";
      if (schedulingView) {
        schedulingView.style.display = "none";
      }
      if (staffSchedulingLiveView) {
        staffSchedulingLiveView.style.display = "block";
        if (staffLiveClassesLink) staffLiveClassesLink.classList.add("active");
        renderStaffLiveSchedulingPage(id);
      }
    } else {
      if (schedulingView) schedulingView.style.display = "none";
      if (staffView) {
        staffView.style.display = "block";
        if (staffTrialsLink) staffTrialsLink.classList.add("active");
        renderStaffTrialsQueue();
      }
    }
  } else if (hash.startsWith("#trainer")) {
    // Hide learner sidebar & views
    if (catalogueView) catalogueView.style.display = "none";
    if (detailsView) detailsView.style.display = "none";
    if (trialView) trialView.style.display = "none";
    if (appSidebar) appSidebar.style.display = "none";
    if (staffView) staffView.style.display = "none";
    if (schedulingView) schedulingView.style.display = "none";
    if (staffSidebar) staffSidebar.style.display = "none";
    
    const detailsTrialView = document.getElementById("learner-trial-details-view");
    const classroomView = document.getElementById("learner-classroom-view");
    if (detailsTrialView) detailsTrialView.style.display = "none";
    if (classroomView) classroomView.style.display = "none";

    // Show trainer sidebar & report view
    const trainerSidebar = document.getElementById("trainer-sidebar");
    if (trainerSidebar) trainerSidebar.style.display = "block";
    
    if (rolePill) {
      rolePill.style.display = "flex";
      rolePill.innerHTML = `<span style="background-color: var(--color-primary-container); color: var(--color-on-primary-container); padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 11px;">Trainer</span>`;
    }
    if (switchBtn) switchBtn.innerText = "Learner View";

    const reportView = document.getElementById("trainer-report-view");
    if (hash.endsWith("/classroom")) {
      if (classroomView) classroomView.style.display = "block";
      if (reportView) reportView.style.display = "none";
      let occurrenceId = "";
      if (hash.startsWith("#trainer/trials/")) {
        occurrenceId = hash.replace("#trainer/trials/", "").replace("/classroom", "");
      } else {
        occurrenceId = hash.replace("#trainer/classes/", "").replace("/classroom", "");
      }
      state.classroomSession.userRole = "trainer";
      renderLiveClassroom(occurrenceId);
    } else {
      if (classroomView) classroomView.style.display = "none";
      if (hash.startsWith("#trainer/classes/") && hash.endsWith("/report")) {
        if (reportView) reportView.style.display = "none";
        if (trainerClassReportView) {
          trainerClassReportView.style.display = "block";
          const id = hash.split("/")[2]; // "CLASS-001"
          renderTrainerPaidClassReport(id);
        }
      } else if (reportView) {
        reportView.style.display = "block";
        if (hash.startsWith("#trainer/trials/") && hash.endsWith("/report")) {
          const id = hash.split("/")[2]; // "OCC-TRIAL-001"
          renderTrainerReportForm(id);
        }
      }
    }
  } else if (hash.startsWith("#operations")) {
    // Hide learner sidebar & views
    if (catalogueView) catalogueView.style.display = "none";
    if (detailsView) detailsView.style.display = "none";
    if (trialView) trialView.style.display = "none";
    if (appSidebar) appSidebar.style.display = "none";
    if (staffView) staffView.style.display = "none";
    if (schedulingView) schedulingView.style.display = "none";
    if (staffSidebar) staffSidebar.style.display = "block";
    if (rolePill) {
      rolePill.style.display = "flex";
      rolePill.innerHTML = `<span style="background-color: var(--color-tertiary-fixed); color: var(--color-on-tertiary-fixed); padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 11px;">Operations</span>`;
    }
    if (switchBtn) switchBtn.innerText = "Learner View";

    const classChangeView = document.getElementById("ops-class-change-view");
    if (classChangeView) {
      classChangeView.style.display = "block";
      if (hash.startsWith("#operations/classes/") && hash.endsWith("/manage")) {
        const id = hash.split("/")[2];
        renderOpsClassChangePage(id);
      }
    }
  } else {
    // Hide staff sidebar & view
    const trainerSidebar = document.getElementById("trainer-sidebar");
    if (trainerSidebar) trainerSidebar.style.display = "none";
    if (staffSidebar) staffSidebar.style.display = "none";
    if (rolePill) rolePill.style.display = "none";
    if (switchBtn) switchBtn.innerText = "Staff View";
    if (schedulingView) schedulingView.style.display = "none";

    const reviewsView = document.getElementById("staff-delivery-reviews-view");
    const reviewDetailView = document.getElementById("staff-delivery-detail-view");
    const followupsQueueView = document.getElementById("staff-followups-view");
    const followupDetailView = document.getElementById("staff-followup-detail-view");
    if (reviewsView) reviewsView.style.display = "none";
    if (reviewDetailView) reviewDetailView.style.display = "none";
    if (followupsQueueView) followupsQueueView.style.display = "none";
    if (followupDetailView) followupDetailView.style.display = "none";

    // Show learner sidebar
    if (appSidebar) appSidebar.style.display = "block";
    if (staffView) staffView.style.display = "none";

    // Toggle active classes on learner sidebar links
    const exploreLink = document.getElementById("sidebar-explore");
    const trialsLink = document.getElementById("sidebar-learner-trials");
    const paymentsLink = document.getElementById("sidebar-learner-payments");
    const coursesLink = document.getElementById("sidebar-learner-courses");
    if (exploreLink) exploreLink.classList.remove("active");
    if (trialsLink) trialsLink.classList.remove("active");
    if (paymentsLink) paymentsLink.classList.remove("active");
    if (coursesLink) coursesLink.classList.remove("active");

    if (hash.startsWith("#courses/")) {
      const slug = hash.replace("#courses/", "");
      if (catalogueView) catalogueView.style.display = "none";
      if (trialView) trialView.style.display = "none";
      if (detailsView) {
        detailsView.style.display = "block";
        if (exploreLink) exploreLink.classList.add("active");
        renderCourseDetails(slug);
      }
    } else if (hash.startsWith("#trial-request/")) {
      const slug = hash.replace("#trial-request/", "");
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) {
        trialView.style.display = "block";
        if (exploreLink) exploreLink.classList.add("active");
        renderTrialRequestForm(slug);
      }
    } else if ((hash.startsWith("#learner/trials/") || hash.startsWith("#learner/classes/")) && hash.endsWith("/classroom")) {
      let occurrenceId = "";
      if (hash.startsWith("#learner/trials/")) {
        occurrenceId = hash.replace("#learner/trials/", "").replace("/classroom", "");
      } else {
        occurrenceId = hash.replace("#learner/classes/", "").replace("/classroom", "");
      }
      const classroomView = document.getElementById("learner-classroom-view");
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView)  trialView.style.display = "none";
      if (detailsTrialView) detailsTrialView.style.display = "none";
      if (classroomView) {
        classroomView.style.display = "block";
        if (trialsLink) trialsLink.classList.add("active");
        state.classroomSession.userRole = "learner";
        renderLiveClassroom(occurrenceId);
      }
    } else if (hash.startsWith("#learner/trials/")) {
      const occurrenceId = hash.replace("#learner/trials/", "");
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      const classroomView = document.getElementById("learner-classroom-view");
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) trialView.style.display = "none";
      if (classroomView) classroomView.style.display = "none";
      if (detailsTrialView) {
        detailsTrialView.style.display = "block";
        if (trialsLink) trialsLink.classList.add("active");
        renderLearnerTrialPage(occurrenceId);
      }
    } else if (hash === "#learner/payments" || hash.startsWith("#membership/request/")) {
      let reqId = "MEMREQ-001";
      if (hash.startsWith("#membership/request/")) {
        reqId = hash.replace("#membership/request/", "");
      }
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) trialView.style.display = "none";
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      const classroomView = document.getElementById("learner-classroom-view");
      if (detailsTrialView) detailsTrialView.style.display = "none";
      if (classroomView) classroomView.style.display = "none";
      
      if (membershipRequestView) {
        membershipRequestView.style.display = "block";
        if (paymentsLink) paymentsLink.classList.add("active");
        renderLearnerCheckout(reqId);
      }
    } else if (hash.startsWith("#learner/courses/")) {
      const enrolmentId = hash.replace("#learner/courses/", "");
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) trialView.style.display = "none";
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      const classroomView = document.getElementById("learner-classroom-view");
      if (detailsTrialView) detailsTrialView.style.display = "none";
      if (classroomView) classroomView.style.display = "none";

      if (learnerCourseWorkspaceView) {
        learnerCourseWorkspaceView.style.display = "block";
        if (coursesLink) coursesLink.classList.add("active");
        renderLearnerCourseWorkspace(enrolmentId);
      }
    } else if (hash === "#learner/my-courses") {
      if (catalogueView) catalogueView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) {
        trialView.style.display = "none";
      }
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      const classroomView = document.getElementById("learner-classroom-view");
      if (detailsTrialView) detailsTrialView.style.display = "none";
      if (classroomView) classroomView.style.display = "none";

      if (learnerMyCoursesView) {
        learnerMyCoursesView.style.display = "block";
        if (coursesLink) coursesLink.classList.add("active");
        renderLearnerMyCoursesDashboard();
      }
    } else {
      const detailsTrialView = document.getElementById("learner-trial-details-view");
      const classroomView = document.getElementById("learner-classroom-view");
      if (detailsTrialView) detailsTrialView.style.display = "none";
      if (classroomView) classroomView.style.display = "none";
      if (detailsView) detailsView.style.display = "none";
      if (trialView) trialView.style.display = "none";
      if (catalogueView) catalogueView.style.display = "block";
      if (exploreLink) exploreLink.classList.add("active");
      renderCourses();
      updateActiveFiltersBar();
    }
  }
  
  // Reset mobile sidebar toggles if active
  const mobileSidebarToggleBtn = document.getElementById("mobile-sidebar-toggle");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  if (appSidebar) appSidebar.classList.remove("active");
  if (staffSidebar) staffSidebar.classList.remove("active");
  if (sidebarBackdrop) sidebarBackdrop.classList.remove("active");
  if (mobileSidebarToggleBtn) {
    mobileSidebarToggleBtn.innerHTML = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
  }

  // Always scroll to top on routing
  window.scrollTo(0, 0);
}

// Setup Event Listeners
function setupEventListeners() {
  // Search
  elements.searchInput.addEventListener("keyup", (e) => {
    state.searchQuery = e.target.value;
    renderCourses();
    updateActiveFiltersBar();
  });

  // Select Filters
  const filterSelects = [
    { el: elements.filterDelivery, key: "deliveryModel" },
    { el: elements.filterSubject, key: "subject" },
    { el: elements.filterLevel, key: "level" },
    { el: elements.filterAge, key: "ageGroup" },
    { el: elements.filterPrice, key: "accessType" }
  ];

  filterSelects.forEach(({ el, key }) => {
    if (el) {
      el.addEventListener("change", (e) => {
        state.filters[key] = e.target.value;
        // Sync sidebar active state if deliveryModel is updated from select dropdown
        if (key === "deliveryModel") {
          updateSidebarDeliveryState(e.target.value);
        }
        renderCourses();
        updateActiveFiltersBar();
      });
    }
  });

  // Reset Filters Button
  if (elements.resetFiltersBtn) {
    elements.resetFiltersBtn.addEventListener("click", () => {
      resetAllFilters();
    });
  }

  // Simulate Loading Button
  if (elements.simulateLoadingBtn) {
    elements.simulateLoadingBtn.addEventListener("click", () => {
      simulateLoadingState();
    });
  }

  // Mobile Filters Drawer Toggle
  if (elements.mobileFilterToggleBtn) {
    elements.mobileFilterToggleBtn.addEventListener("click", () => {
      elements.filtersGrid.classList.toggle("active");
      const isActive = elements.filtersGrid.classList.contains("active");
      elements.mobileFilterToggleBtn.innerHTML = isActive 
        ? `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg> Hide Filters`
        : `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/></svg> Filter Catalogue`;
    });
  }

  // Mobile Sidebar Hamburger Toggle
  const mobileSidebarToggleBtn = document.getElementById("mobile-sidebar-toggle");
  const appSidebar = document.getElementById("app-sidebar");
  const staffSidebar = document.getElementById("staff-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");

  if (mobileSidebarToggleBtn) {
    mobileSidebarToggleBtn.addEventListener("click", () => {
      const activeSidebar = window.location.hash.startsWith("#staff") ? staffSidebar : appSidebar;
      if (!activeSidebar) return;

      activeSidebar.classList.toggle("active");
      const isActive = activeSidebar.classList.contains("active");
      
      if (sidebarBackdrop) {
        if (isActive) sidebarBackdrop.classList.add("active");
        else sidebarBackdrop.classList.remove("active");
      }

      mobileSidebarToggleBtn.innerHTML = isActive 
        ? `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
    });
  }

  if (sidebarBackdrop && mobileSidebarToggleBtn) {
    sidebarBackdrop.addEventListener("click", () => {
      const activeSidebar = window.location.hash.startsWith("#staff") ? staffSidebar : appSidebar;
      if (activeSidebar) activeSidebar.classList.remove("active");
      sidebarBackdrop.classList.remove("active");
      mobileSidebarToggleBtn.innerHTML = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
    });
  }

  // Sign In / Create Account
  if (elements.signInBtn) elements.signInBtn.addEventListener("click", openSignInModal);
  if (elements.signUpBtn) elements.signUpBtn.addEventListener("click", openSignUpModal);

  // Close modal when clicking overlay background
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener("click", (e) => {
      if (e.target === elements.modalOverlay) {
        closeModal();
      }
    });
  }
}

// Sidebar Filter Selection Handler
window.selectDeliveryFilter = function(value, element) {
  state.filters.deliveryModel = value;
  if (elements.filterDelivery) {
    elements.filterDelivery.value = value;
  }
  
  // Highlight active link in sidebar
  updateSidebarDeliveryState(value);

  renderCourses();
  updateActiveFiltersBar();

  // Auto-close sidebar on mobile
  const appSidebar = document.getElementById("app-sidebar");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  const mobileSidebarToggleBtn = document.getElementById("mobile-sidebar-toggle");
  
  if (appSidebar && window.innerWidth < 768) {
    appSidebar.classList.remove("active");
    if (sidebarBackdrop) sidebarBackdrop.classList.remove("active");
    if (mobileSidebarToggleBtn) {
      mobileSidebarToggleBtn.innerHTML = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
    }
  }
};

function updateSidebarDeliveryState(value) {
  const mapping = {
    "all": "sidebar-model-all",
    "Live": "sidebar-model-live",
    "Self-Paced": "sidebar-model-self",
    "K-12": "sidebar-model-k12"
  };
  
  // Clear active states
  Object.values(mapping).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });
  
  // Add active state to selected
  const activeId = mapping[value];
  const activeEl = document.getElementById(activeId);
  if (activeEl) activeEl.classList.add("active");
}

// Reset filters to default state
function resetAllFilters() {
  state.searchQuery = "";
  elements.searchInput.value = "";
  
  state.filters = {
    deliveryModel: "all",
    subject: "all",
    level: "all",
    ageGroup: "all",
    accessType: "all"
  };

  if (elements.filterDelivery) elements.filterDelivery.value = "all";
  if (elements.filterSubject) elements.filterSubject.value = "all";
  if (elements.filterLevel) elements.filterLevel.value = "all";
  if (elements.filterAge) elements.filterAge.value = "all";
  if (elements.filterPrice) elements.filterPrice.value = "all";

  // Sync sidebar active state
  updateSidebarDeliveryState("all");

  renderCourses();
  updateActiveFiltersBar();
}

// Remove a specific active filter pill
function removeFilter(key, value) {
  if (key === "search") {
    state.searchQuery = "";
    elements.searchInput.value = "";
  } else {
    state.filters[key] = "all";
    const selectEl = document.getElementById(`filter-${convertKeyToIdSuffix(key)}`);
    if (selectEl) selectEl.value = "all";
  }
  renderCourses();
  updateActiveFiltersBar();
}

function convertKeyToIdSuffix(key) {
  if (key === "deliveryModel") return "delivery";
  if (key === "subject") return "subject";
  if (key === "level") return "level";
  if (key === "ageGroup") return "age";
  if (key === "accessType") return "price";
  return key;
}

// Generate the Active Filters bar interface elements
function updateActiveFiltersBar() {
  elements.activePillsContainer.innerHTML = "";
  let hasFilters = false;

  if (state.searchQuery) {
    hasFilters = true;
    createFilterPill("Search: " + state.searchQuery, "search", state.searchQuery);
  }

  const mapping = {
    deliveryModel: { label: "Delivery: ", select: elements.filterDelivery },
    subject: { label: "Subject: ", select: elements.filterSubject },
    level: { label: "Level: ", select: elements.filterLevel },
    ageGroup: { label: "Audience: ", select: elements.filterAge },
    accessType: { label: "Pricing: ", select: elements.filterPrice }
  };

  for (const [key, filterData] of Object.entries(mapping)) {
    if (state.filters[key] !== "all") {
      hasFilters = true;
      const textVal = filterData.select.options[filterData.select.selectedIndex].text;
      createFilterPill(filterData.label + textVal, key, state.filters[key]);
    }
  }

  if (hasFilters) {
    elements.activeFiltersBar.style.display = "flex";
  } else {
    elements.activeFiltersBar.style.display = "none";
  }
}

function createFilterPill(label, key, val) {
  const pill = document.createElement("div");
  pill.className = "filter-pill animate-fade-in";
  pill.innerHTML = `
    <span>${label}</span>
    <button class="filter-pill-remove" onclick="removeFilter('${key}', '${val}')">
      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  `;
  elements.activePillsContainer.appendChild(pill);
}

// Filter the courses based on current state parameters
function getFilteredCourses() {
  return coursesData.filter(course => {
    // Search filter
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchSummary = course.summary.toLowerCase().includes(q);
      const matchSubject = course.subject.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchSubject) {
        return false;
      }
    }

    // Delivery Model filter
    if (state.filters.deliveryModel !== "all" && course.deliveryModel !== state.filters.deliveryModel) {
      return false;
    }

    // Subject filter
    if (state.filters.subject !== "all" && course.subject !== state.filters.subject) {
      return false;
    }

    // Level filter
    if (state.filters.level !== "all") {
      const selectVal = state.filters.level.toLowerCase();
      const courseVal = course.level.toLowerCase();
      if (!courseVal.includes(selectVal)) {
        return false;
      }
    }

    // Age / Grade Group filter
    if (state.filters.ageGroup !== "all") {
      const selectVal = state.filters.ageGroup.toLowerCase();
      const courseVal = course.ageGroup.toLowerCase();
      const matchAge = courseVal.includes(selectVal) || (selectVal === "k12" && course.deliveryModel === "K-12");
      if (!matchAge) return false;
    }

    // Price/Access type filter
    if (state.filters.accessType !== "all" && course.accessType !== state.filters.accessType) {
      return false;
    }

    return true;
  });
}

// Display the Skeleton loaders
function renderSkeletons() {
  elements.courseGrid.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "course-card skeleton-card";
    skeleton.innerHTML = `
      <div class="skeleton-image skeleton-animation"></div>
      <div class="course-card-body">
        <div class="skeleton-text skeleton-animation" style="width: 30%"></div>
        <div class="skeleton-title skeleton-animation"></div>
        <div class="skeleton-text skeleton-animation" style="height: 60px"></div>
        <div class="skeleton-text skeleton-animation" style="width: 50%; margin-top: auto;"></div>
        <div class="course-card-actions" style="margin-top: 16px;">
          <div class="skeleton-btn skeleton-animation"></div>
          <div class="skeleton-btn skeleton-animation"></div>
        </div>
      </div>
    `;
    elements.courseGrid.appendChild(skeleton);
  }
}

// Simulate the skeleton screen loading flow
function simulateLoadingState() {
  state.isLoading = true;
  elements.simulateLoadingBtn.classList.add("btn-primary");
  elements.simulateLoadingBtn.innerHTML = `
    <svg width="18" height="18" class="animate-spin" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
    </svg> Loading...`;
  renderSkeletons();
  
  setTimeout(() => {
    state.isLoading = false;
    elements.simulateLoadingBtn.classList.remove("btn-primary");
    elements.simulateLoadingBtn.innerHTML = `
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg> Simulate Loading`;
    renderCourses();
  }, 800);
}

// Render course card nodes in the document body
// Render course card nodes in the document body
function renderCourses() {
  if (state.isLoading) return;

  const courses = getFilteredCourses();
  elements.resultsCount.innerText = `${courses.length} courses matching`;

  if (courses.length === 0) {
    elements.courseGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h3 class="empty-state-title">No Matching Offerings</h3>
        <p class="empty-state-text">We couldn't find any courses matching your specific search query or active filter settings.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset Filters & Search</button>
      </div>
    `;
    return;
  }

  elements.courseGrid.innerHTML = "";
  courses.forEach(course => {
    const cardHtml = getCourseCardHtml(course);
    const container = document.createElement("div");
    container.innerHTML = cardHtml;
    elements.courseGrid.appendChild(container.firstElementChild);
  });
}

// Modal System Handlers
function openModal(title, contentHtml) {
  elements.modalTitle.innerText = title;
  elements.modalBody.innerHTML = contentHtml;
  elements.modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  elements.modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Account Required Preview modal interaction
function openAccountRequiredPreviewModal(courseTitle) {
  const content = `
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="width: 56px; height: 56px; background-color: var(--color-primary-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--color-secondary);">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="modal-text" style="font-size: 15px; margin-bottom: 0;">Create a free account to continue this preview of <strong>${courseTitle}</strong>.</p>
    </div>
    
    <form id="modal-signup-form" onsubmit="handleMockSubmit(event, 'Account created! Loading preview portal...')">
      <div class="form-group">
        <label class="form-label" for="preview-name">Full Name</label>
        <input class="form-input" type="text" id="preview-name" placeholder="John Doe" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="preview-email">Email Address</label>
        <input class="form-input" type="email" id="preview-email" placeholder="name@domain.com" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="preview-pass">Password</label>
        <input class="form-input" type="password" id="preview-pass" placeholder="Minimum 6 characters" required minlength="6">
      </div>
      <div class="form-checkbox-group">
        <input type="checkbox" id="preview-agree" class="form-checkbox" required>
        <label for="preview-agree" style="font-size: 12px; color: var(--color-tertiary);">I agree to the Terms of Service & Privacy Policy.</label>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; height: 44px; margin-top: 8px;">Create Free Account</button>
    </form>
    
    <div style="margin-top: 16px; text-align: center; border-top: 1px solid var(--color-outline-variant); padding-top: 16px;">
      <span style="font-size: 13px; color: var(--color-tertiary);">Already have an account?</span>
      <button class="btn btn-link" onclick="openSignInModal()" style="font-size: 13px; font-weight: 700; color: var(--color-secondary);">Sign In</button>
    </div>
  `;
  openModal("Account Required", content);
}

// Request Trial Modal Form Flow
// Redirect to Screen 03 Trial Request Form via Hash router
function openTrialRequestModal(courseTitle) {
  closeModal();
  const titleLower = courseTitle.toLowerCase();
  const course = coursesData.find(c => 
    titleLower.includes(c.title.toLowerCase()) || 
    c.title.toLowerCase().includes(titleLower) || 
    titleLower.includes(c.slug.replace("-", " "))
  ) || coursesData[0];
  window.location.hash = `#trial-request/${course.slug}`;
}

// Purchase prompts
function openPurchasePromptModal(courseTitle, price) {
  const content = `
    <div style="text-align: center; padding: 12px 0;">
      <div style="width: 60px; height: 60px; background-color: rgba(250, 226, 130, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--color-secondary);">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p class="modal-text" style="font-size: 15px;">Unlock full, lifelong access to <strong>${courseTitle}</strong>.</p>
      <div class="active-filters-bar" style="justify-content: center; font-size: 24px; font-weight: 800; padding: 16px; margin-bottom: 20px; color: var(--color-on-tertiary-fixed);">
        ${price} <span style="font-size: 14px; font-weight: 500; color: var(--color-tertiary);">one-time enrollment</span>
      </div>
      <p class="modal-text" style="font-size: 13px; opacity: 0.8;">Note: This is a frontend prototype. Clicking purchase triggers a visual placeholder showing success.</p>
      
      <button class="btn btn-primary" onclick="handleMockSubmit(null, 'Membership active! Adding course to your learner dashboard...')" style="width: 100%; height: 44px;">Proceed to Payment Checkout</button>
      <button class="btn btn-link" onclick="closeModal()" style="width: 100%; margin-top: 8px;">Cancel</button>
    </div>
  `;
  openModal("Enrollment Options", content);
}

// Guest-visible free resources preview
function openDirectPreviewModal(courseTitle) {
  const content = `
    <div style="padding: 8px 0;">
      <p class="modal-text">You have instant access to <strong>${courseTitle}</strong>. No login required to start this introductory lesson.</p>
      
      <div style="background-color: var(--color-surface-container); border: 1px solid var(--color-outline-variant); border-radius: var(--radius-card); padding: 16px; margin-bottom: 24px; position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 12px; font-weight: 700; color: var(--color-secondary);">CHAPTER 1: Introduction</span>
          <span style="font-size: 12px; color: var(--color-tertiary);">45 min video</span>
        </div>
        <h4 style="font-family: var(--font-family-headings); font-size: 16px; font-weight: 700; color: var(--color-on-tertiary-fixed); margin-bottom: var(--spacing-sm);">Digital Landscape Overview</h4>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: 65%;"></div>
        </div>
        <span style="font-size: 12px; color: var(--color-tertiary);">65% completed</span>
      </div>

      <button class="btn btn-primary" onclick="handleMockSubmit(null, 'Accessing course media player...')" style="width: 100%; height: 44px;">Launch Learning Player</button>
    </div>
  `;
  openModal("Instant Access Preview", content);
}

// Redirect to course details view via Hash router
function openViewDetailsModal(slug) {
  window.location.hash = `#courses/${slug}`;
}

// Open General Authentication Modals
function openSignInModal() {
  const content = `
    <p class="modal-text">Sign in to your learner space to resume previews, join live lectures, and view invoices.</p>
    
    <form id="modal-signin-form" onsubmit="handleMockSubmit(event, 'Welcome back! Logging you in...')">
      <div class="form-group">
        <label class="form-label" for="signin-email">Email Address</label>
        <input class="form-input" type="email" id="signin-email" placeholder="name@domain.com" required>
      </div>
      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label" for="signin-pass">Password</label>
          <a href="#" style="font-size: 12px; color: var(--color-secondary); text-decoration: none;">Forgot?</a>
        </div>
        <input class="form-input" type="password" id="signin-pass" placeholder="Password" required>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; height: 44px; margin-top: 12px;">Sign In</button>
    </form>
    
    <div style="margin-top: 16px; text-align: center; border-top: 1px solid var(--color-outline-variant); padding-top: 16px;">
      <span style="font-size: 13px; color: var(--color-tertiary);">New to Innovator Huzsam?</span>
      <button class="btn btn-link" onclick="openSignUpModal()" style="font-size: 13px; font-weight: 700; color: var(--color-secondary);">Create Account</button>
    </div>
  `;
  openModal("Sign In to IHS Portal", content);
}

function openSignUpModal() {
  const content = `
    <p class="modal-text">Register an account to explore course curricula, schedule live trial lessons, and access free code repositories.</p>
    
    <form id="modal-signup-form" onsubmit="handleMockSubmit(event, 'Registration complete! Welcome to Innovator Huzsam LMS.')">
      <div class="form-group">
        <label class="form-label" for="signup-name">Full Name</label>
        <input class="form-input" type="text" id="signup-name" placeholder="John Doe" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="signup-email">Email Address</label>
        <input class="form-input" type="email" id="signup-email" placeholder="name@domain.com" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="signup-pass">Password</label>
        <input class="form-input" type="password" id="signup-pass" placeholder="Minimum 6 characters" required minlength="6">
      </div>
      <div class="form-checkbox-group">
        <input type="checkbox" id="signup-agree" class="form-checkbox" required>
        <label for="signup-agree" style="font-size: 12px; color: var(--color-tertiary);">I accept the Terms and Academic Honor Code.</label>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%; height: 44px; margin-top: 12px;">Register Account</button>
    </form>
    
    <div style="margin-top: 16px; text-align: center; border-top: 1px solid var(--color-outline-variant); padding-top: 16px;">
      <span style="font-size: 13px; color: var(--color-tertiary);">Already have a profile?</span>
      <button class="btn btn-link" onclick="openSignInModal()" style="font-size: 13px; font-weight: 700; color: var(--color-secondary);">Sign In</button>
    </div>
  `;
  openModal("Create Learner Account", content);
}

// Handle Form Submissions in high-fidelity visual modal state
function handleMockSubmit(event, successMessage) {
  if (event) {
    event.preventDefault();
  }
  
  elements.modalBody.innerHTML = `
    <div style="text-align: center; padding: 24px 0;">
      <div style="width: 56px; height: 56px; background-color: #e2f0d9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: #274e13;">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 style="font-family: var(--font-family-headings); font-size: 18px; font-weight: 700; color: var(--color-on-tertiary-fixed); margin-bottom: 8px;">Action Successful</h3>
      <p class="modal-text" style="margin-bottom: 24px;">${successMessage}</p>
      <button class="btn btn-primary" onclick="closeModal()" style="width: 120px;">Done</button>
    </div>
  `;
}

// Reusable course card HTML generator (extracted from renderCourses)
function getCourseCardHtml(course) {
  let deliveryBadgeClass = "badge-delivery-live";
  if (course.deliveryModel === "Self-Paced") deliveryBadgeClass = "badge-delivery-self";
  if (course.deliveryModel === "K-12") deliveryBadgeClass = "badge-delivery-k12";

  let accessBadgeClass = "badge-access-paid";
  let accessText = "Paid Access";
  if (course.accessType === "Preview") {
    accessBadgeClass = "badge-access-preview";
    accessText = "Preview Available";
  } else if (course.accessType === "Free") {
    accessBadgeClass = "badge-access-free";
    accessText = "Free Resource";
  }

  const isLive = course.deliveryModel === "Live" || course.deliveryModel === "K-12";
  const liveIndicatorHtml = isLive 
    ? `<div class="live-indicator"><span class="live-dot"></span>Live Classes</div>`
    : `<div class="meta-item"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>${course.duration}</div>`;

  let actionsHtml = "";
  if (course.accessType === "Free") {
    actionsHtml = `
      <button class="btn btn-secondary" onclick="openDirectPreviewModal('${course.title}')">Start Learning</button>
      <button class="btn btn-tertiary" onclick="openViewDetailsModal('${course.slug}')">View Details</button>
    `;
  } else if (course.accessType === "Preview") {
    actionsHtml = `
      <button class="btn btn-primary" onclick="openAccountRequiredPreviewModal('${course.title}')">Free Preview</button>
      <button class="btn btn-secondary" onclick="openViewDetailsModal('${course.slug}')">View Course</button>
    `;
  } else {
    const trialHtml = course.trialAvailable 
      ? `<button class="btn btn-primary" onclick="openTrialRequestModal('${course.title}')">Request Trial</button>`
      : `<button class="btn btn-primary" onclick="openPurchasePromptModal('${course.title}', '${course.price}')">Enroll Now</button>`;
    
    actionsHtml = `
      ${trialHtml}
      <button class="btn btn-secondary" onclick="openViewDetailsModal('${course.slug}')">View Course</button>
    `;
  }

  return `
    <article class="course-card ${course.featured ? "featured" : ""}">
      <div class="course-card-image-wrapper">
        <img class="course-card-image" src="${course.image}" alt="${course.title}">
        <div class="badge-overlay-container">
          <span class="badge ${deliveryBadgeClass}">${course.deliveryModel}</span>
          <span class="badge ${accessBadgeClass}">${accessText}</span>
        </div>
      </div>
      <div class="course-card-body">
        <span class="course-card-level">${course.level} • ${course.subject}</span>
        <h3 class="course-card-title">${course.title}</h3>
        <p class="course-card-summary">${course.summary}</p>
        
        <div class="course-card-meta">
          ${liveIndicatorHtml}
          <div class="course-card-pricing">
            ${course.price === "Free" ? "Free" : course.price}
            ${course.billingPeriod ? `<span>/ ${course.billingPeriod}</span>` : ""}
          </div>
        </div>
        
        <div class="course-card-actions">
          ${actionsHtml}
        </div>
      </div>
    </article>
  `;
}

// Render dynamic Course Details Page (Screen 02)
function renderCourseDetails(slug) {
  const course = coursesData.find(c => c.slug === slug);
  const detailsView = document.getElementById("course-details-view");
  if (!course || !detailsView) {
    window.location.hash = "";
    return;
  }

  // Delivery Badge Class
  let deliveryBadgeClass = "badge-delivery-live";
  if (course.deliveryModel === "Self-Paced") deliveryBadgeClass = "badge-delivery-self";
  if (course.deliveryModel === "K-12") deliveryBadgeClass = "badge-delivery-k12";

  // Access Badge Class
  let accessBadgeClass = "badge-access-paid";
  let accessText = "Paid Access";
  if (course.accessType === "Preview") {
    accessBadgeClass = "badge-access-preview";
    accessText = "Preview Available";
  } else if (course.accessType === "Free") {
    accessBadgeClass = "badge-access-free";
    accessText = "Free Resource";
  }

  // Generate learning outcome list items
  const outcomesHtml = getOutcomesHtml(course.subject);
  
  // Generate curriculum tree items
  const curriculumHtml = getCurriculumHtml(course);

  // Generate related course cards
  const relatedCoursesHtml = getRelatedCoursesHtml(course);

  detailsView.innerHTML = `
    <!-- Breadcrumbs Navigation -->
    <nav class="breadcrumb-nav">
      <a href="#" class="breadcrumb-link">Explore Courses</a>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">${course.title}</span>
    </nav>

    <div style="margin-top: 16px;">
      <a href="#" class="btn btn-link" style="padding-left: 0; font-weight: 700; color: var(--color-secondary); display: inline-flex; align-items: center; gap: 8px;">
        <span>←</span>
        <span>Back to Explore Courses</span>
      </a>
    </div>

    <div class="course-details-container animate-fade-in">
      
      <!-- Main Content Details Panel -->
      <div class="details-main-panel">
        
        <!-- Course Overview Header -->
        <div class="overview-card">
          <div class="overview-category">${course.subject} Programme</div>
          <h2 class="overview-title">${course.title}</h2>
          <p class="overview-description">${course.summary}</p>
          <div class="overview-badges">
            <span class="badge ${deliveryBadgeClass}">${course.deliveryModel}</span>
            <span class="badge ${accessBadgeClass}">${accessText}</span>
            ${course.trialAvailable ? `<span class="badge badge-access-free">Free Trial Available</span>` : ""}
            <span class="badge badge-delivery-live" style="background-color: var(--color-surface-container); color: var(--color-on-surface); border:1px solid var(--color-outline-variant);">★ ${course.rating} Rating</span>
          </div>
        </div>

        <!-- Metadata Grid -->
        <div class="metadata-grid">
          <div class="metadata-cell">
            <span class="metadata-label">Delivery Mode</span>
            <span class="metadata-value">${course.deliveryModel} Online</span>
          </div>
          <div class="metadata-cell">
            <span class="metadata-label">Level</span>
            <span class="metadata-value">${course.level}</span>
          </div>
          <div class="metadata-cell">
            <span class="metadata-label">Audience</span>
            <span class="metadata-value">${course.ageGroup}</span>
          </div>
          <div class="metadata-cell">
            <span class="metadata-label">Prerequisites</span>
            <span class="metadata-value">${getPrerequisitesText(course.subject)}</span>
          </div>
        </div>

        <!-- About section -->
        <div class="details-section-card">
          <h3 class="details-section-title">About this course</h3>
          <p class="details-text">
            This comprehensive programme at the Innovator Huzsam Academy is engineered to develop practical, high-value competency. Designed for ${course.ageGroup.toLowerCase()}, this course guides you from fundamental building blocks through to advanced situational workflows. You will study directly alongside certified subject matter specialists and receive actionable metrics at every stage.
          </p>
        </div>

        <!-- Learning Outcomes -->
        <div class="details-section-card">
          <h3 class="details-section-title">What you'll learn</h3>
          <ul class="outcomes-list">
            ${outcomesHtml}
          </ul>
        </div>

        <!-- Course Curriculum -->
        <div class="details-section-card">
          <h3 class="details-section-title">Course Curriculum</h3>
          <div class="curriculum-tree">
            ${curriculumHtml}
          </div>
        </div>

        <!-- Trial Section (If trial available) -->
        ${course.trialAvailable ? `
          <div class="details-section-card" style="background-color: var(--color-surface-container); border-left: 4px solid var(--color-secondary);">
            <h3 class="details-section-title" style="border-bottom: none; margin-bottom: 8px;">Not sure yet?</h3>
            <p class="details-text" style="margin-bottom: 16px;">
              Request a free trial session to join a live cohort session and experience our educational methodology firsthand before activating your membership.
            </p>
            <button class="btn btn-primary" onclick="openTrialRequestModal('${course.title}')">Request Free Trial Session</button>
          </div>
        ` : ""}

      </div>

      <!-- Sticky Side Action Panel -->
      <div class="details-side-panel">
        <div class="details-pricing-card">
          <div class="pricing-header">
            <span class="pricing-course-title">${course.title}</span>
            <div class="pricing-amount">
              ${course.price === "Free" ? "Free" : course.price}
              ${course.billingPeriod ? `<span>/ ${course.billingPeriod}</span>` : ""}
            </div>
          </div>
          <ul class="pricing-inclusions">
            <li class="inclusion-item">
              <span class="inclusion-icon">✓</span>
              <span>${course.deliveryModel === "Live" || course.deliveryModel === "K-12" ? "Interactive Live cohort classes" : "Self-paced syllabus access"}</span>
            </li>
            <li class="inclusion-item">
              <span class="inclusion-icon">✓</span>
              <span>1-to-1 Trainer guidance & peer support</span>
            </li>
            <li class="inclusion-item">
              <span class="inclusion-icon">✓</span>
              <span>Graded homework assignments & certificates</span>
            </li>
            <li class="inclusion-item">
              <span class="inclusion-icon">✓</span>
              <span>Parent/Payer updates portal (if K-12)</span>
            </li>
          </ul>
          
          <div style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin-top: var(--spacing-sm);">
            ${course.trialAvailable ? `
              <button class="btn btn-primary" onclick="openTrialRequestModal('${course.title}')">Request Free Trial</button>
            ` : ""}
            <button class="btn ${course.trialAvailable ? "btn-secondary" : "btn-primary"}" onclick="openPurchasePromptModal('${course.title}', '${course.price}')">Start Membership</button>
            ${course.accessType === "Preview" ? `
              <button class="btn btn-tertiary" onclick="openAccountRequiredPreviewModal('${course.title}')">Free Preview</button>
            ` : ""}
          </div>
          
          <p class="pricing-notice">
            Payment is manually reviewed before membership access is activated.
          </p>
        </div>
      </div>

    </div>

    <!-- Related Courses Section -->
    <section class="related-courses-section">
      <h3 class="related-courses-title">You may also like</h3>
      <div class="related-grid">
        ${relatedCoursesHtml}
      </div>
    </section>
  `;
}

// Generate outcomes based on course subject
function getOutcomesHtml(subject) {
  const items = {
    "English": [
      "Speak more confidently in everyday conversational situations",
      "Improve pronunciation, cadence, and sentence formatting",
      "Master vocabulary templates for interviews and presentations",
      "Develop listening comprehension and peer feedback skills"
    ],
    "Technology": [
      "Master AI prompt scripting paradigms (ChatGPT, Midjourney, Claude)",
      "Automate manual routine office tasks and reporting calculations",
      "Build coding logic models and write introductory software functions",
      "Assemble a personal portfolio of practical AI integration products"
    ],
    "Marketing": [
      "Navigate standard advertising dashboards (Google Ads, Facebook Business)",
      "Interpret search analytics and optimize websites for ranking metrics",
      "Write high-converting ad copy and develop content calendars",
      "Create client reports showing acquisition costs and margins"
    ],
    "Mathematics": [
      "Gain deep mastery of school algebra, fractions, and logic patterns",
      "Translate word problems into mathematical equations effortlessly",
      "Succeed in mid-term evaluations and final curriculum exams",
      "Access interactive dashboard tools to track learning progress metrics"
    ]
  };

  const defaultOutcomes = [
    "Gain core understanding of the subject curriculum",
    "Develop actionable real-world capabilities",
    "Receive guidance from certified subject experts",
    "Unlock professional certification eligibility"
  ];

  const list = items[subject] || defaultOutcomes;
  return list.map(text => `
    <li class="outcome-item">
      <svg class="outcome-icon" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clip-rule="evenodd"/>
      </svg>
      <span>${text}</span>
    </li>
  `).join("");
}

// Generate prerequisites text
function getPrerequisitesText(subject) {
  if (subject === "English") return "Conversational basics";
  if (subject === "Technology") return "None, zero coding background required";
  if (subject === "Mathematics") return "Arithmetic foundations";
  return "None";
}

// Generate Curriculum Syllabus Items HTML
function getCurriculumHtml(course) {
  const isEnglish = course.subject === "English";
  const isAI = course.subject === "Technology";
  
  // Custom syllabus structures
  const englishSyllabus = [
    {
      level: "Level 1 — Foundations",
      topics: [
        { name: "Introduction to Spoken English", type: "Guest Preview", duration: "12m video" },
        { name: "Greetings & Self-Introductions", type: "Account Required", duration: "45m video + quiz" },
        { name: "Basic Sentence Building", type: "Paid Required", duration: "Live Cohort Lecture" }
      ]
    },
    {
      level: "Level 2 — Conversational English",
      topics: [
        { name: "Everyday Interactions & Situations", type: "Paid Required", duration: "Live Cohort Lecture" },
        { name: "Asking and Answering Questions", type: "Paid Required", duration: "Live Cohort Lecture" },
        { name: "Speaking at Work & Interviews", type: "Paid Required", duration: "Live Cohort Lecture" }
      ]
    },
    {
      level: "Level 3 — Fluency and Pronunciation",
      topics: [
        { name: "Phonetics & Confident Pronunciation", type: "Paid Required", duration: "Live Cohort Lecture" },
        { name: "Final Peer Fluency Exercises", type: "Paid Required", duration: "Live Session + Evaluation" }
      ]
    }
  ];

  const aiSyllabus = [
    {
      level: "Level 1 — Generative AI Overview",
      topics: [
        { name: "LLM Fundamentals & Systems (ChatGPT/Claude)", type: "Guest Preview", duration: "15m video" },
        { name: "Integrating AI into Daily Office Workflows", type: "Account Required", duration: "30m video + quiz" }
      ]
    },
    {
      level: "Level 2 — Prompt Engineering Rules",
      topics: [
        { name: "Syntax of a High-Fidelity Prompt", type: "Paid Required", duration: "Lesson + Coding lab" },
        { name: "Zero-Shot, Few-Shot, and Chain of Thought", type: "Paid Required", duration: "Lesson + Practice playground" }
      ]
    }
  ];

  const defaultSyllabus = [
    {
      level: "Level 1 — Introduction",
      topics: [
        { name: `Overview of ${course.title}`, type: "Guest Preview", duration: "10m video" },
        { name: "Core Context and Concepts", type: "Account Required", duration: "Lesson + Practice quiz" }
      ]
    },
    {
      level: "Level 2 — Core Execution",
      topics: [
        { name: "Practical Scenarios & Operations", type: "Paid Required", duration: "Interactive exercise" },
        { name: "Feedback, Review, and Case Studies", type: "Paid Required", duration: "Lesson + Live review" }
      ]
    }
  ];

  const syllabus = isEnglish ? englishSyllabus : (isAI ? aiSyllabus : defaultSyllabus);

  return syllabus.map(section => `
    <div class="curriculum-section">
      <div class="curriculum-level">${section.level}</div>
      <ul class="curriculum-items">
        ${section.topics.map(topic => {
          let badgeHtml = "";
          let actionClick = "";
          
          if (topic.type === "Guest Preview") {
            badgeHtml = `<span class="badge badge-access-free">Free Preview</span>`;
            actionClick = `openPreviewLessonModal('${topic.name}')`;
          } else if (topic.type === "Account Required") {
            badgeHtml = `<span class="badge badge-access-preview">Free with Account</span>`;
            actionClick = `openAccountRequiredPreviewModal('${topic.name}')`;
          } else {
            badgeHtml = `<span class="badge badge-access-paid" style="background-color: var(--color-surface-container); border: 1px solid var(--color-outline-variant); color: var(--color-tertiary);">🔒 Locked</span>`;
            actionClick = `openMembershipRequiredContentModal('${topic.name}')`;
          }
          
          return `
            <li class="curriculum-item" onclick="${actionClick}">
              <div class="curriculum-item-left">
                <span class="curriculum-item-icon">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </span>
                <span>${topic.name}</span>
              </div>
              <div class="curriculum-item-right">
                <span style="font-size: 12px; color: var(--color-tertiary); margin-right: var(--spacing-sm);">${topic.duration}</span>
                ${badgeHtml}
              </div>
            </li>
          `;
        }).join("")}
      </ul>
    </div>
  `).join("");
}

// Generate related courses HTML using Screen 01 cards
function getRelatedCoursesHtml(currentCourse) {
  const related = coursesData.filter(c => c.id !== currentCourse.id).slice(0, 2);
  return related.map(course => getCourseCardHtml(course)).join("");
}

// Guest-visible lesson player modal
function openPreviewLessonModal(title) {
  const content = `
    <div style="padding: 4px 0;">
      <p class="modal-text" style="font-size: 15px; margin-bottom: 12px;">Now viewing guest preview: <strong>${title}</strong></p>
      
      <div class="video-player-container">
        <div class="player-overlay-play">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="player-controls">
          <span>0:00 / 12:45</span>
          <div class="player-track">
            <div class="player-progress" style="width: 25%;"></div>
          </div>
          <span>1080p HD</span>
        </div>
      </div>
      
      <p class="modal-text" style="font-size: 13px; opacity: 0.85; line-height: 18px; margin-bottom: var(--spacing-lg);">
        This is a simulated video player lesson. Free preview content is accessible to all guests instantly. No account registration is required to start this introductory chapter.
      </p>

      <button class="btn btn-primary" onclick="closeModal()" style="width: 100%; height: 44px;">Close Preview Player</button>
    </div>
  `;
  openModal("Syllabus Lesson Player", content);
}

// Locked content modal
function openMembershipRequiredContentModal(title) {
  const content = `
    <div style="text-align: center; padding: 12px 0;">
      <div style="width: 56px; height: 56px; background-color: var(--color-error-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--color-error);">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <h3 style="font-family: var(--font-family-headings); font-size: 18px; font-weight: 700; color: var(--color-on-tertiary-fixed); margin-bottom: 8px;">Membership Required</h3>
      <p class="modal-text" style="font-size: 14px; max-width: 320px; margin: 0 auto 20px auto;">
        The lesson <strong>"${title}"</strong> is locked. It will become fully accessible once your academic membership is approved and activated.
      </p>
      
      <button class="btn btn-primary" onclick="closeModal(); openSignInModal();" style="width: 100%; height: 44px; margin-bottom: 8px;">Sign In to Account</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="width: 100%; height: 44px;">Close Dialog</button>
    </div>
  `;
  openModal("Content Locked", content);
}

// ==========================================================================
// Screen 03 - Trial Request Form View Functions
// ==========================================================================

function renderTrialRequestForm(slug) {
  const course = coursesData.find(c => c.slug === slug);
  const trialView = document.getElementById("trial-request-view");
  if (!course || !trialView) {
    window.location.hash = "";
    return;
  }

  // 1. Check for duplicate pending requests
  if (state.submittedTrials && state.submittedTrials[slug]) {
    const existing = state.submittedTrials[slug];
    trialView.innerHTML = `
      <nav class="breadcrumb-nav">
        <a href="#" class="breadcrumb-link">Explore Courses</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#courses/${course.slug}" class="breadcrumb-link">${course.title}</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">Pending Request</span>
      </nav>

      <div class="duplicate-warning-card animate-fade-in" style="max-width: 580px; margin: var(--spacing-xl) auto;">
        <div style="width: 56px; height: 56px; background-color: rgba(240, 217, 122, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--color-secondary);">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 style="font-family: var(--font-family-headings); font-size: 20px; font-weight: 700; color: var(--color-on-tertiary-fixed); margin-bottom: 8px;">Pending Trial Request</h3>
        <p class="modal-text" style="font-size: 14px; max-width: 380px; margin: 0 auto 20px auto;">
          You already have a pending trial request for <strong>${course.title}</strong> that is currently being qualified by our team.
        </p>
        
        <table class="receipt-table">
          <tr class="receipt-row">
            <td class="receipt-label">Request ID</td>
            <td class="receipt-value">${existing.id}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Status</td>
            <td class="receipt-value" style="color: var(--color-secondary); font-weight: 800;">${existing.status}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Student Name</td>
            <td class="receipt-value">${existing.learnerName}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Availability</td>
            <td class="receipt-value">${existing.preferredDays.join(" & ")} · ${existing.preferredTime}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Preferred Format</td>
            <td class="receipt-value">${existing.classPreference}</td>
          </tr>
        </table>

        <div style="display: flex; gap: var(--spacing-sm); max-width: 320px; margin: 0 auto;">
          <button class="btn btn-primary" onclick="window.location.hash='#courses/${slug}'" style="flex-grow: 1;">Back to Course</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#'" style="flex-grow: 1;">Explore Courses</button>
        </div>
      </div>
    `;
    return;
  }

  // 2. Otherwise render the blank preferences form
  trialView.innerHTML = `
    <!-- Breadcrumbs Navigation -->
    <nav class="breadcrumb-nav">
      <a href="#" class="breadcrumb-link">Explore Courses</a>
      <span class="breadcrumb-separator">/</span>
      <a href="#courses/${course.slug}" class="breadcrumb-link">${course.title}</a>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">Request Trial</span>
    </nav>

    <div style="margin-top: 16px;">
      <a href="#courses/${course.slug}" class="btn btn-link" style="padding-left: 0; font-weight: 700; color: var(--color-secondary); display: inline-flex; align-items: center; gap: 8px;">
        <span>←</span>
        <span>Back to ${course.title}</span>
      </a>
    </div>

    <div style="margin-top: 24px; margin-bottom: 8px;">
      <h1 class="hero-title" style="font-size: 32px; font-weight: 800; color: var(--color-on-tertiary-fixed); margin-bottom: 6px;">Request a Free Trial</h1>
      <p class="hero-subtitle" style="margin-bottom: 0;">Tell us your preferences and our team will help arrange a suitable trial session.</p>
    </div>

    <div class="trial-request-container">
      
      <!-- Main Form Column (Left) -->
      <div class="trial-main-panel">
        <form id="trial-request-form" onsubmit="handleTrialSubmit(event, '${slug}')">
          
          <!-- Card 1: Your Information -->
          <div class="form-card" style="margin-bottom: var(--spacing-lg);">
            <h3 class="form-section-title">Your Information</h3>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="trial-fullname">Full Name <span style="color:var(--color-error)">*</span></label>
                <input class="form-input" type="text" id="trial-fullname" placeholder="E.g. Ali Khan" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="trial-email">Email Address <span style="color:var(--color-error)">*</span></label>
                <input class="form-input" type="email" id="trial-email" placeholder="name@domain.com" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="trial-phone">Phone / WhatsApp Number <span style="color:var(--color-error)">*</span></label>
              <input class="form-input" type="tel" id="trial-phone" placeholder="E.g. +92 300 1234567" required>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">Learner Profile <span style="color:var(--color-error)">*</span></label>
              <div class="form-checkbox-group" style="display:flex; gap: 24px; margin-top: 6px;">
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:14px; font-weight:600; color: var(--color-on-tertiary-fixed); cursor:pointer;">
                  <input type="radio" name="learner-type" value="self" checked onclick="toggleGuardianForm(false)">
                  I am the learner
                </label>
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:14px; font-weight:600; color: var(--color-on-tertiary-fixed); cursor:pointer;">
                  <input type="radio" name="learner-type" value="guardian" onclick="toggleGuardianForm(true)">
                  I am requesting for my child / dependent
                </label>
              </div>
            </div>

            <!-- Expandable Minor Subform -->
            <div class="guardian-subform" id="guardian-form-block">
              <h4 style="font-family: var(--font-family-headings); font-size: 14px; font-weight: 700; color: var(--color-tertiary); margin-bottom: var(--spacing-sm);">Dependent Details</h4>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="trial-childname">Child / Dependent Full Name <span style="color:var(--color-error)">*</span></label>
                  <input class="form-input" type="text" id="trial-childname" placeholder="E.g. Ahmed Khan">
                </div>
                <div class="form-group">
                  <label class="form-label" for="trial-childage">Age / Academic Grade</label>
                  <input class="form-input" type="text" id="trial-childage" placeholder="E.g. 12 years / Grade 7">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="trial-relationship">Your Relationship to Learner</label>
                <select class="form-input filter-select" id="trial-relationship" style="padding-top:0; padding-bottom:0; background-position: right 8px center;">
                  <option value="parent">Parent</option>
                  <option value="guardian">Legal Guardian</option>
                  <option value="relative">Other Relative</option>
                </select>
              </div>
              <div class="guardian-notice animate-fade-in">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Guardian information and consent are verified by our team before live trial schedules are activated.</span>
              </div>
            </div>

          </div>

          <!-- Card 2: Timezone & Availability -->
          <div class="form-card" style="margin-bottom: var(--spacing-lg);">
            <h3 class="form-section-title">Schedule Preferences</h3>
            
            <div class="form-group">
              <label class="form-label" for="trial-timezone">Your Timezone <span style="color:var(--color-error)">*</span></label>
              <select class="form-input filter-select" id="trial-timezone" style="padding-top:0; padding-bottom:0; background-position: right 8px center;" required>
                <option value="Asia/Karachi">Asia/Karachi (GMT+5)</option>
                <option value="Europe/London">Europe/London (GMT+0)</option>
                <option value="America/New_York">America/New_York (GMT-5)</option>
                <option value="Asia/Dubai">Asia/Dubai (GMT+4)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Preferred Days <span style="color:var(--color-error)">*</span> <span style="font-size:12px; font-weight:400; color:var(--color-tertiary);">(Select all that apply)</span></label>
              <div class="days-selector-grid">
                ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => `
                  <label>
                    <input type="checkbox" name="trial-days" value="${day}" class="day-checkbox-input" onchange="runTrialValidation('${slug}')">
                    <span class="day-checkbox-label">${day.substring(0, 3)}</span>
                  </label>
                `).join("")}
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">Preferred Time Slots <span style="color:var(--color-error)">*</span></label>
              <div class="form-checkbox-group" style="display:flex; flex-wrap:wrap; gap: 16px; margin-top: 6px;">
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="checkbox" name="trial-times" value="Morning" checked onchange="runTrialValidation('${slug}')">
                  Morning (9:00 AM - 12:00 PM)
                </label>
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="checkbox" name="trial-times" value="Afternoon" onchange="runTrialValidation('${slug}')">
                  Afternoon (12:00 PM - 5:00 PM)
                </label>
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="checkbox" name="trial-times" value="Evening" onchange="runTrialValidation('${slug}')">
                  Evening (5:00 PM - 9:00 PM)
                </label>
              </div>
              <div style="font-size: 11px; color: var(--color-tertiary); margin-top: var(--spacing-sm); font-style: italic;">
                * Note: These are preferred times. Your confirmed class slot will be allocated after operational check.
              </div>
            </div>

          </div>

          <!-- Card 3: Class Preferences & Placement -->
          <div class="form-card" style="margin-bottom: var(--spacing-lg);">
            <h3 class="form-section-title">Academic & Placement Preferences</h3>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="trial-format">Preferred Class Type <span style="color:var(--color-error)">*</span></label>
                <select class="form-input filter-select" id="trial-format" style="padding-top:0; padding-bottom:0; background-position: right 8px center;" required>
                  <option value="1-to-1">1-to-1 Private Session</option>
                  <option value="Group">Group Classroom Session</option>
                  <option value="No preference" selected>No preference</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="trial-level">Current Skill Level <span style="color:var(--color-error)">*</span></label>
                <select class="form-input filter-select" id="trial-level" style="padding-top:0; padding-bottom:0; background-position: right 8px center;" required onchange="runTrialValidation('${slug}')">
                  <option value="">-- Select Your Level --</option>
                  <option value="Beginner">Beginner / Novice</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced / Fluent</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">What would you like to improve?</label>
              <div class="form-checkbox-group" style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 6px;">
                ${["Speaking Confidence", "Pronunciation & Tone", "Vocabulary Range", "Grammar Accuracy", "Listening Skills", "Professional Contexts"].map(goal => `
                  <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                    <input type="checkbox" name="trial-goals" value="${goal}">
                    ${goal}
                  </label>
                `).join("")}
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" for="trial-notes">Additional Notes for Trainer <span style="font-weight:400; color:var(--color-tertiary)">(Optional)</span></label>
              <textarea class="form-input" id="trial-notes" rows="3" placeholder="Describe your goals, previous studies, or any accommodation requests..." style="padding-top: 8px; padding-bottom: 8px; resize: vertical; min-height: 80px;"></textarea>
            </div>

          </div>

          <!-- Card 4: Consent & Communication -->
          <div class="form-card" style="margin-bottom: var(--spacing-lg);">
            <h3 class="form-section-title">Consent & Communication</h3>

            <div class="form-group">
              <label class="form-label">How should we contact you? <span style="color:var(--color-error)">*</span></label>
              <div class="form-checkbox-group" style="display:flex; gap: 24px; margin-top: 6px;">
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="radio" name="contact-pref" value="WhatsApp" checked onchange="runTrialValidation('${slug}')">
                  WhatsApp
                </label>
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="radio" name="contact-pref" value="Phone Call" onchange="runTrialValidation('${slug}')">
                  Voice Call
                </label>
                <label style="display:inline-flex; align-items:center; gap: 8px; font-size:13px; color: var(--color-on-surface-variant); cursor:pointer;">
                  <input type="radio" name="contact-pref" value="Email" onchange="runTrialValidation('${slug}')">
                  Email
                </label>
              </div>
            </div>

            <div class="form-checkbox-group" style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 8px;">
              <input type="checkbox" id="trial-consent" class="form-checkbox" style="margin-top: 3px;" required onchange="runTrialValidation('${slug}')">
              <label for="trial-consent" style="font-size: 13px; color: var(--color-on-surface-variant); line-height: 18px; cursor: pointer;">
                I confirm that the information provided is correct and agree to be contacted regarding this trial request. <span style="color:var(--color-error)">*</span>
              </label>
            </div>

            <div class="form-checkbox-group" style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 0;">
              <input type="checkbox" id="trial-marketing" class="form-checkbox" style="margin-top: 3px;">
              <label for="trial-marketing" style="font-size: 13px; color: var(--color-tertiary); line-height: 18px; cursor: pointer;">
                Send me updates about other IHS courses, free resources, and upcoming masterclasses.
              </label>
            </div>

          </div>

          <!-- Actions -->
          <div style="display:flex; gap:var(--spacing-md); align-items:center;">
            <button type="submit" id="trial-submit-btn" class="btn btn-primary" style="height:46px; width:220px;" disabled>Submit Trial Request</button>
            <a href="#courses/${course.slug}" class="btn btn-link" style="font-weight:700; color:var(--color-secondary); padding:0;">Cancel</a>
          </div>

        </form>
      </div>

      <!-- Selected Course Summary Sidebar (Right) -->
      <div class="trial-side-panel">
        <div class="form-card" style="border-top:3px solid var(--color-secondary)">
          <div class="course-card-image-wrapper" style="height:120px; border-radius:6px; overflow:hidden; margin-bottom: var(--spacing-md); border:1px solid var(--color-outline-variant);">
            <img src="${course.image}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <h3 style="font-family: var(--font-family-headings); font-size:18px; font-weight:800; color: var(--color-on-tertiary-fixed); margin-bottom:4px;">${course.title}</h3>
          <span style="font-size:12px; font-weight:700; color: var(--color-secondary); text-transform:uppercase;">${course.subject} Language</span>
          
          <div style="display:flex; flex-direction:column; gap: 8px; margin: var(--spacing-md) 0; border-top: 1px solid var(--color-outline-variant); border-bottom: 1px solid var(--color-outline-variant); padding: 12px 0;">
            <div style="display:flex; justify-content:space-between; font-size:13px;">
              <strong style="color:var(--color-on-surface)">Format:</strong>
              <span style="color:var(--color-tertiary)">${course.deliveryModel} Online</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:13px;">
              <strong style="color:var(--color-on-surface)">Level:</strong>
              <span style="color:var(--color-tertiary)">${course.level}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:13px;">
              <strong style="color:var(--color-on-surface)">Duration:</strong>
              <span style="color:var(--color-tertiary)">${course.duration}</span>
            </div>
          </div>

          <a href="#" class="btn btn-secondary" style="width:100%; text-align:center; height:38px; display:inline-flex; align-items:center; justify-content:center;">Change Course</a>
        </div>
      </div>

    </div>
  `;

  // Attach validation listeners to fields
  const form = document.getElementById("trial-request-form");
  if (form) {
    ["trial-fullname", "trial-email", "trial-phone", "trial-childname"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => runTrialValidation(slug));
      }
    });
  }
}

// Show/Hide Dependent form blocks
function toggleGuardianForm(show) {
  const block = document.getElementById("guardian-form-block");
  const childInput = document.getElementById("trial-childname");
  if (block) {
    if (show) {
      block.classList.add("active");
      if (childInput) childInput.setAttribute("required", "required");
    } else {
      block.classList.remove("active");
      if (childInput) childInput.removeAttribute("required");
    }
  }
}

// Real-time validation checker
function runTrialValidation(slug) {
  const submitBtn = document.getElementById("trial-submit-btn");
  if (!submitBtn) return;

  const fullname = document.getElementById("trial-fullname")?.value.trim();
  const email = document.getElementById("trial-email")?.value.trim();
  const phone = document.getElementById("trial-phone")?.value.trim();
  const isGuardian = document.querySelector('input[name="learner-type"]:checked')?.value === "guardian";
  const childname = document.getElementById("trial-childname")?.value.trim();
  const timezone = document.getElementById("trial-timezone")?.value;
  const level = document.getElementById("trial-level")?.value;
  const consentChecked = document.getElementById("trial-consent")?.checked;

  // Check days availability checks
  const checkedDays = Array.from(document.querySelectorAll('input[name="trial-days"]:checked'));
  const checkedTimes = Array.from(document.querySelectorAll('input[name="trial-times"]:checked'));

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  // Validate form rules
  const isValid = 
    fullname && fullname.length > 2 &&
    email && isEmailValid &&
    phone && phone.length > 5 &&
    (!isGuardian || (childname && childname.length > 2)) &&
    timezone &&
    checkedDays.length > 0 &&
    checkedTimes.length > 0 &&
    level &&
    consentChecked;

  if (isValid) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
  }
}

// Submission simulator
function handleTrialSubmit(event, slug) {
  if (event) event.preventDefault();
  const submitBtn = document.getElementById("trial-submit-btn");
  if (submitBtn) {
    submitBtn.setAttribute("disabled", "disabled");
    submitBtn.innerHTML = `
      <svg width="18" height="18" class="animate-spin" viewBox="0 0 24 24" fill="none" style="margin-right: 8px; display:inline-block; vertical-align:middle;">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
      </svg> Submitting...`;
  }

  // Gather values
  const fullname = document.getElementById("trial-fullname").value.trim();
  const email = document.getElementById("trial-email").value.trim();
  const phone = document.getElementById("trial-phone").value.trim();
  const isGuardian = document.querySelector('input[name="learner-type"]:checked').value === "guardian";
  const childname = isGuardian ? document.getElementById("trial-childname").value.trim() : "";
  const timezone = document.getElementById("trial-timezone").value;
  const checkedDays = Array.from(document.querySelectorAll('input[name="trial-days"]:checked')).map(el => el.value);
  const preferredTime = Array.from(document.querySelectorAll('input[name="trial-times"]:checked')).map(el => el.value).join(" & ");
  const classPreference = document.getElementById("trial-format").value;
  const currentLevel = document.getElementById("trial-level").value;
  const contactPreference = document.querySelector('input[name="contact-pref"]:checked').value;

  setTimeout(() => {
    // Save to local request log
    state.submittedTrials[slug] = {
      id: "TRIAL-001",
      courseId: slug,
      learnerName: isGuardian ? childname : fullname,
      timezone: timezone,
      preferredDays: checkedDays,
      preferredTime: preferredTime,
      classPreference: classPreference,
      currentLevel: currentLevel,
      contactPreference: contactPreference,
      status: "Submitted"
    };

    // Inject into Staff Database
    const course = coursesData.find(c => c.slug === slug);
    const newRequest = {
      id: "TRIAL-001",
      learnerName: isGuardian ? childname : fullname,
      email: email,
      phone: phone,
      learnerType: isGuardian ? "Guardian" : "Self",
      contactPreference: contactPreference,
      courseId: slug,
      courseTitle: course ? course.title : "Spoken English Bootcamp",
      level: currentLevel,
      preferredDays: checkedDays,
      preferredTime: preferredTime,
      timezone: timezone,
      classPreference: classPreference,
      goals: Array.from(document.querySelectorAll('input[name="trial-goals"]:checked')).map(el => el.value),
      notes: document.getElementById("trial-notes")?.value.trim() || "",
      assignedCSR: "Sarah Ahmed",
      status: "Submitted",
      submittedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      submittedTime: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      history: [
        { time: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'short' })} · ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`, text: "Trial request submitted by learner" },
        { time: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'short' })} · ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`, text: "Assigned to Sarah Ahmed" }
      ],
      isDuplicate: false,
      guardianConsentRequired: isGuardian
    };

    // Replace TRIAL-001 if it already exists in mock operations queue
    const index = staffTrialsData.findIndex(t => t.id === "TRIAL-001");
    if (index !== -1) {
      staffTrialsData[index] = newRequest;
    } else {
      staffTrialsData.push(newRequest);
    }

    // Render Success Card inside Trial View
    const trialView = document.getElementById("trial-request-view");
    trialView.innerHTML = `
      <div class="success-receipt-card animate-fade-in">
        <div class="receipt-circle-icon">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 style="font-family: var(--font-family-headings); font-size: 24px; font-weight: 800; color: var(--color-on-tertiary-fixed); margin-bottom: 6px;">Trial Request Submitted</h2>
        <p class="modal-text">We've received your trial request preferences for ${course ? course.title : 'Selected Course'}.</p>
        
        <table class="receipt-table">
          <tr class="receipt-row">
            <td class="receipt-label">Request Ref</td>
            <td class="receipt-value" style="font-family:monospace; font-size:15px; letter-spacing:0.03em;">TRIAL-001</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Course</td>
            <td class="receipt-value">${course ? course.title : 'Selected Course'}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Status</td>
            <td class="receipt-value" style="color:var(--color-secondary); font-weight: 800;">Submitted</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Availability</td>
            <td class="receipt-value">${checkedDays.join(" & ")} · ${preferredTime}</td>
          </tr>
          <tr class="receipt-row">
            <td class="receipt-label">Contact Method</td>
            <td class="receipt-value" style="text-transform: capitalize;">${contactPreference}</td>
          </tr>
        </table>

        <p class="modal-text" style="font-size: 13px; opacity: 0.85; line-height: 18px; margin-bottom: var(--spacing-lg);">
          Our academic team will review your preferences and contact you via ${contactPreference} to confirm a final class schedule.
        </p>

        <div style="display:flex; flex-direction:column; gap:var(--spacing-sm); max-width:260px; margin: 0 auto;">
          <button class="btn btn-primary" onclick="window.location.hash='#courses/${slug}'" style="width:100%;">View My Request</button>
          <a href="#" class="btn btn-secondary" style="width:100%; text-align:center; height:38px; display:inline-flex; align-items:center; justify-content:center;">Back to Courses</a>
        </div>
      </div>
    `;
    window.scrollTo(0, 0);
  }, 1000);
}

// ==========================================================================
// Screen 04 - CSR / Operations Queue Database & View Controller
// ==========================================================================

// Mock staff trial requests database
const staffTrialsData = [
  {
    id: "TRIAL-001",
    learnerName: "Ali Khan",
    email: "ali@example.com",
    phone: "+92 300 1234567",
    learnerType: "Self",
    contactPreference: "WhatsApp",
    courseId: "spoken-english",
    courseTitle: "Spoken English Bootcamp",
    level: "Beginner",
    preferredDays: ["Tuesday", "Thursday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    classPreference: "1-to-1",
    goals: ["Speaking Confidence", "Pronunciation & Tone", "Everyday Conversation"],
    notes: "I understand basic English but struggle to speak confidently.",
    assignedCSR: "Sarah Ahmed",
    status: "Submitted",
    submittedDate: "11 Aug 2026",
    submittedTime: "1:25 PM",
    history: [
      { time: "11 Aug · 1:25 PM", text: "Trial request submitted by learner" },
      { time: "11 Aug · 1:32 PM", text: "Assigned to Sarah Ahmed" }
    ],
    isDuplicate: true, // Flag as possible duplicate
    guardianConsentRequired: false
  },
  {
    id: "TRIAL-002",
    learnerName: "Ayesha Malik",
    email: "ayesha@example.com",
    phone: "+92 321 9876543",
    learnerType: "Self",
    contactPreference: "Phone Call",
    courseId: "ielts-preparation",
    courseTitle: "IELTS Preparation Masterclass",
    level: "Intermediate",
    preferredDays: ["Monday", "Wednesday"],
    preferredTime: "Afternoon",
    timezone: "Asia/Karachi",
    classPreference: "Group",
    goals: ["Speaking Confidence", "Grammar Accuracy"],
    notes: "Need IELTS 7.5 band score for university application.",
    assignedCSR: "Sarah Ahmed",
    status: "Waiting Info",
    submittedDate: "10 Aug 2026",
    submittedTime: "3:40 PM",
    history: [
      { time: "10 Aug · 3:40 PM", text: "Trial request submitted by learner" },
      { time: "10 Aug · 4:10 PM", text: "Assigned to Sarah Ahmed" },
      { time: "11 Aug · 9:15 AM", text: "Additional scheduling slot requested by Sarah Ahmed" }
    ],
    isDuplicate: false,
    guardianConsentRequired: false
  },
  {
    id: "TRIAL-003",
    learnerName: "Hassan Raza",
    email: "hassan@example.com",
    phone: "+92 333 4445556",
    learnerType: "Self",
    contactPreference: "WhatsApp",
    courseId: "spoken-english",
    courseTitle: "Spoken English Bootcamp",
    level: "Elementary",
    preferredDays: ["Saturday", "Sunday"],
    preferredTime: "Morning",
    timezone: "Asia/Karachi",
    classPreference: "1-to-1",
    goals: ["Vocabulary Range"],
    notes: "",
    assignedCSR: "Unassigned",
    status: "Submitted",
    submittedDate: "11 Aug 2026",
    submittedTime: "10:15 AM",
    history: [
      { time: "11 Aug · 10:15 AM", text: "Trial request submitted by learner" }
    ],
    isDuplicate: false,
    guardianConsentRequired: false
  },
  {
    id: "TRIAL-004",
    learnerName: "Fatima Noor",
    email: "parent.noor@example.com",
    phone: "+92 300 7778889",
    learnerType: "Guardian",
    guardianName: "Parent Name",
    guardianRelationship: "Mother",
    contactPreference: "WhatsApp",
    courseId: "k12-math-grade-6-8",
    courseTitle: "K-12 Mathematics (Grade 6–8)",
    level: "Grade-based",
    preferredDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    classPreference: "Group",
    goals: ["Logical Thinking"],
    notes: "She is weak in algebra basics.",
    assignedCSR: "Abdullah Khan",
    status: "Ready for Scheduling",
    submittedDate: "09 Aug 2026",
    submittedTime: "2:05 PM",
    history: [
      { time: "09 Aug · 2:05 PM", text: "Trial request submitted by guardian" },
      { time: "09 Aug · 3:00 PM", text: "Assigned to Abdullah Khan" },
      { time: "10 Aug · 11:30 AM", text: "Request qualified by Abdullah Khan" },
      { time: "10 Aug · 11:35 AM", text: "Marked ready for scheduling by Abdullah Khan" }
    ],
    isDuplicate: false,
    guardianConsentRequired: true // Alert guardian verification required
  },
  {
    id: "TRIAL-005",
    learnerName: "Omar Farooq",
    email: "omar@example.com",
    phone: "+92 345 5551234",
    learnerType: "Self",
    contactPreference: "Email",
    courseId: "practical-ai",
    courseTitle: "Practical AI & Prompt Engineering",
    level: "Beginner",
    preferredDays: ["Saturday"],
    preferredTime: "Afternoon",
    timezone: "Asia/Karachi",
    classPreference: "1-to-1",
    goals: ["Automation Contexts"],
    notes: "I want to automate my daily marketing campaign reports.",
    assignedCSR: "Sarah Ahmed",
    status: "Qualified",
    submittedDate: "08 Aug 2026",
    submittedTime: "11:00 AM",
    history: [
      { time: "08 Aug · 11:00 AM", text: "Trial request submitted by learner" },
      { time: "08 Aug · 12:45 PM", text: "Assigned to Sarah Ahmed" },
      { time: "10 Aug · 9:30 AM", text: "Request qualified by Sarah Ahmed" }
    ],
    isDuplicate: false,
    guardianConsentRequired: false
  },
  {
    id: "TRIAL-006",
    learnerName: "Zainab Ahmed",
    email: "zainab@example.com",
    phone: "+92 301 2223334",
    learnerType: "Self",
    contactPreference: "Email",
    courseId: "ielts-preparation",
    courseTitle: "IELTS Preparation Masterclass",
    level: "Upper Intermediate",
    preferredDays: ["Friday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    classPreference: "No preference",
    goals: ["Speaking Confidence", "Listening Skills"],
    notes: "",
    assignedCSR: "Sarah Ahmed",
    status: "Closed",
    submittedDate: "07 Aug 2026",
    submittedTime: "4:30 PM",
    history: [
      { time: "07 Aug · 4:30 PM", text: "Trial request submitted by learner" },
      { time: "07 Aug · 5:00 PM", text: "Assigned to Sarah Ahmed" },
      { time: "08 Aug · 10:00 AM", text: "Closed: Learner no longer interested" }
    ],
    isDuplicate: false,
    guardianConsentRequired: false
  }
];

// Operations View State
const staffState = {
  searchQuery: "",
  filters: {
    status: "all",
    course: "all",
    csr: "all",
    date: "all"
  },
  isLoading: false,
  hasStaffPermission: true // Mock permission switch for prototype display
};

// Portal Mode Switcher
window.togglePortalMode = function() {
  const isStaff = window.location.hash.startsWith("#staff");
  if (isStaff) {
    window.location.hash = "";
  } else {
    window.location.hash = "#staff/trial-requests";
  }
};

// Switch mock permission status
window.toggleStaffPermissionState = function() {
  staffState.hasStaffPermission = !staffState.hasStaffPermission;
  renderStaffTrialsQueue();
};

// Qualify request lifecycle flow actions
window.claimTrialRequest = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  if (request) {
    request.assignedCSR = "Sarah Ahmed";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: "Claimed by Sarah Ahmed" });
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
  }
};

window.confirmQualifyRequest = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  if (request) {
    request.status = "Qualified";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: "Request qualified by Sarah Ahmed" });
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
    closeModal();
  }
};

window.markReadyForScheduling = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  if (request) {
    request.status = "Ready for Scheduling";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: "Marked ready for scheduling by Sarah Ahmed" });
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
    
    // Toast confirmation alert
    showToastAlert(`${id} is ready for scheduling.`);
  }
};

// Helper for lightweight toast alerts
function showToastAlert(message) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: var(--color-on-tertiary-fixed);
    color: var(--color-surface-lowest);
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 13.5px;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 2000;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  `;
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 50);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Request More Information modal trigger
window.openRequestMoreInfoModal = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  if (!request) return;

  const content = `
    <p class="modal-text">Specify details required from the learner to continue qualifying this request.</p>
    <div class="form-group">
      <label class="form-label" for="more-info-reason">Reason</label>
      <select class="form-input" id="more-info-reason" style="height:40px;">
        <option value="Availability unclear">Availability unclear</option>
        <option value="Placement information incomplete">Placement information incomplete</option>
        <option value="Contact verification required">Contact verification required</option>
        <option value="Guardian consent required">Guardian consent required</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="more-info-msg">Message to Learner</label>
      <textarea class="form-input" id="more-info-msg" style="height:100px; padding:8px 12px; resize:none;">Please provide another preferred evening time so we can arrange your trial.</textarea>
    </div>
    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="sendMoreInfoRequest('${id}')" style="flex:1; height:44px;">Send Request</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Request More Information", content);
};

window.sendMoreInfoRequest = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const reason = document.getElementById("more-info-reason").value;
  const message = document.getElementById("more-info-msg").value.trim();

  if (request) {
    request.status = "Waiting Info";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: `Additional info requested (${reason}): "${message}"` });
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
    closeModal();
    showToastAlert("Info request recorded successfully.");
  }
};

// Close Request modal trigger
window.openCloseRequestModal = function(id) {
  const content = `
    <p class="modal-text">Select closure reason to cancel this request. This record will not be deleted.</p>
    <div class="form-group">
      <label class="form-label" for="close-reason">Closure Reason</label>
      <select class="form-input" id="close-reason" style="height:40px;">
        <option value="Learner no longer interested">Learner no longer interested</option>
        <option value="Duplicate request">Duplicate request</option>
        <option value="Not eligible">Not eligible</option>
        <option value="Unable to contact">Unable to contact</option>
        <option value="Requested course unavailable">Requested course unavailable</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="close-note">Internal Notes</label>
      <textarea class="form-input" id="close-note" placeholder="Write closure summary..." style="height:80px; padding:8px 12px; resize:none;"></textarea>
    </div>
    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="confirmCloseRequest('${id}')" style="flex:1; height:44px; background-color: var(--color-error); border-color: var(--color-error); color: white;">Close Request</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Close Trial Request", content);
};

window.confirmCloseRequest = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const reason = document.getElementById("close-reason").value;
  const note = document.getElementById("close-note").value.trim();

  if (request) {
    request.status = "Closed";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: `Closed: ${reason}. Note: ${note || "None"}` });
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
    closeModal();
    showToastAlert("Trial request closed.");
  }
};

// Follow-Up modal trigger
window.openAddFollowUpModal = function(id) {
  const content = `
    <p class="modal-text">Schedule a prospect call or check-in alert for this lead.</p>
    <div class="form-group">
      <label class="form-label" for="follow-date">Follow-up Date</label>
      <input class="form-input" type="date" id="follow-date" value="${new Date().toISOString().split('T')[0]}" required style="height:40px;">
    </div>
    <div class="form-group">
      <label class="form-label" for="follow-method">Contact Method</label>
      <select class="form-input" id="follow-method" style="height:40px;">
        <option value="WhatsApp">WhatsApp</option>
        <option value="Phone Call">Phone Call</option>
        <option value="Email">Email</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="follow-note">Follow-up Task Details</label>
      <textarea class="form-input" id="follow-note" placeholder="What needs to be discussed?" style="height:80px; padding:8px 12px; resize:none;"></textarea>
    </div>
    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="saveFollowUp('${id}')" style="flex:1; height:44px;">Save Follow-up</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Add Follow-up Event", content);
};

window.saveFollowUp = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const dateVal = document.getElementById("follow-date").value;
  const method = document.getElementById("follow-method").value;
  const note = document.getElementById("follow-note").value.trim();

  if (request) {
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: `Scheduled ${method} Follow-up for ${dateVal}. Task: ${note || "Regular check-in."}` });
    
    // Visually toggle follow-up indicator inside drawer
    renderStaffTrialsQueue();
    openStaffReviewDrawer(id);
    closeModal();
    showToastAlert("Follow-up successfully scheduled.");
  }
};

// Qualify Request Modal Confirmation
window.openQualifyRequestModal = function(id) {
  const content = `
    <h3 style="font-family: var(--font-family-headings); font-size: 18px; font-weight: 700; color: var(--color-on-tertiary-fixed); margin-bottom: 8px;">Qualify Trial Request?</h3>
    <p class="modal-text" style="font-size:14px; margin-bottom:24px;">The learner's details appear sufficient to continue toward scheduling.</p>
    <div style="display:flex; gap:12px;">
      <button class="btn btn-primary" onclick="confirmQualifyRequest('${id}')" style="flex:1; height:44px;">Confirm Qualification</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Qualification Confirmation", content);
};

// Close Detail Drawer
window.closeStaffReviewDrawer = function() {
  const drawer = document.getElementById("staff-details-drawer");
  const backdrop = document.getElementById("staff-drawer-backdrop");
  if (drawer) drawer.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
};

// Open Detail Drawer Qualification view
window.openStaffReviewDrawer = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const drawer = document.getElementById("staff-details-drawer");
  const backdrop = document.getElementById("staff-drawer-backdrop");
  if (!request || !drawer || !backdrop) return;

  // Render drawer contents
  let warningBlock = "";
  if (request.isDuplicate) {
    warningBlock = `
      <div class="drawer-warning-alert warning-amber">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <strong>Possible Duplicate:</strong> Another pending Spoken English trial request exists for this learner.
          <div style="margin-top:6px; display:flex; gap:8px;">
            <button class="btn btn-secondary" onclick="closeStaffReviewDrawer(); openStaffReviewDrawer('TRIAL-003')" style="font-size:11px; padding:2px 8px; height:22px; border-radius:4px;">View Existing</button>
            <button class="btn btn-primary" onclick="openCloseRequestModal('${request.id}')" style="font-size:11px; padding:2px 8px; height:22px; border-radius:4px; background-color:#c5221f; border-color:#c5221f;">Close as Duplicate</button>
          </div>
        </div>
      </div>
    `;
  } else if (request.guardianConsentRequired) {
    warningBlock = `
      <div class="drawer-warning-alert">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <strong>Guardian Consent Required:</strong> Guardian information must be verified before this K-12 request can proceed.
        </div>
      </div>
    `;
  }

  // Follow-up state indicator
  const hasFollowUp = request.history.some(h => h.text.includes("Scheduled"));
  const followUpHtml = hasFollowUp 
    ? `<div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-surface-low); padding:8px 12px; border-radius:6px; border: 1px solid var(--color-outline-variant); font-size:12.5px;">
         <span style="color:var(--color-secondary); font-weight:700;">WhatsApp Follow-up Scheduled</span>
         <button class="btn btn-link" onclick="openAddFollowUpModal('${request.id}')" style="font-size:11px; color:var(--color-secondary); padding:0;">Reschedule</button>
       </div>`
    : `<div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-surface-low); padding:8px 12px; border-radius:6px; border: 1px dotted var(--color-outline-variant); font-size:12.5px;">
         <span style="color:var(--color-tertiary);">No follow-up scheduled</span>
         <button class="btn btn-secondary" onclick="openAddFollowUpModal('${request.id}')" style="font-size:11px; padding:4px 8px; height:24px; border-radius:4px;">Add Follow-up</button>
       </div>`;

  // Status badge matching colors
  let badgeClass = "status-submitted";
  if (request.status === "Qualified") badgeClass = "status-qualified";
  if (request.status === "Waiting Info") badgeClass = "status-waiting";
  if (request.status === "Ready for Scheduling") badgeClass = "status-ready";
  if (request.status === "Closed") badgeClass = "status-closed";

  // Assignment header control
  const isAssignedToMe = request.assignedCSR === "Sarah Ahmed";
  const assignBtnHtml = request.assignedCSR === "Unassigned"
    ? `<button class="btn btn-primary" onclick="claimTrialRequest('${request.id}')" style="height:32px; font-size:12px; padding:0 12px;">Claim Request</button>`
    : `<span style="font-size:12.5px; font-weight:700; color:var(--color-tertiary);"><span style="display:inline-block; width:6px; height:6px; background-color:var(--color-secondary); border-radius:50%; margin-right:6px;"></span>Assigned to ${request.assignedCSR}</span>`;

  // Qualification workflow bottom panel
  let actionsHtml = "";
  if (request.status === "Submitted" || request.status === "Waiting Info") {
    actionsHtml = `
      <button class="btn btn-primary" onclick="openQualifyRequestModal('${request.id}')" style="width:100%; height:42px;">Qualify Request</button>
      <div style="display:flex; gap:var(--spacing-sm);">
        <button class="btn btn-secondary" onclick="openRequestMoreInfoModal('${request.id}')" style="flex:1; height:38px;">Request More Info</button>
        <button class="btn btn-tertiary" onclick="openCloseRequestModal('${request.id}')" style="flex:1; height:38px; color:#c5221f;">Close Request</button>
      </div>
    `;
  } else if (request.status === "Qualified") {
    actionsHtml = `
      <button class="btn btn-primary" onclick="markReadyForScheduling('${request.id}')" style="width:100%; height:42px; background-color:#137333; border-color:#137333;">Mark Ready for Scheduling</button>
      <button class="btn btn-secondary" onclick="openCloseRequestModal('${request.id}')" style="width:100%; height:38px; color:#c5221f;">Close Request</button>
    `;
  } else if (request.status === "Ready for Scheduling") {
    actionsHtml = `
      <button class="btn btn-primary" onclick="window.location.hash='#staff/trials/${request.id}/schedule'" style="width:100%; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest); font-weight:800;">Schedule Trial</button>
      <div style="font-size:11.5px; text-align:center; color:var(--color-tertiary); margin-top:2px;">Lead Status: Qualified Prospect</div>
    `;
  } else {
    // Closed Request
    actionsHtml = `
      <div style="text-align:center; padding:12px; background:var(--color-surface-low); border-radius:6px; color:#c5221f; font-weight:700; font-size:13px;">
        This trial request is Closed
      </div>
    `;
  }

  drawer.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-title-group">
        <h3>${request.id}</h3>
        <span class="badge-status ${badgeClass}">${request.status}</span>
      </div>
      <button class="drawer-close-btn" onclick="closeStaffReviewDrawer()" aria-label="Close detail drawer">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <div class="drawer-body">
      ${warningBlock}
      
      <!-- Assignment Status -->
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-surface-low); padding:8px 12px; border-radius:6px; border:1px solid var(--color-outline-variant);">
        <span style="font-size:12.5px; font-weight:700; color:var(--color-on-tertiary-fixed);">CSR Assignment</span>
        ${assignBtnHtml}
      </div>

      <!-- Section: Learner Information -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Learner Information</h4>
        <div class="drawer-grid">
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Full Name</span>
            <span class="drawer-meta-value">${request.learnerName}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Learner Type</span>
            <span class="drawer-meta-value">${request.learnerType}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Email</span>
            <span class="drawer-meta-value"><a href="mailto:${request.email}" style="color:var(--color-secondary); text-decoration:underline;">${request.email}</a></span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Phone / WhatsApp</span>
            <span class="drawer-meta-value">${request.phone}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Preferred Contact</span>
            <span class="drawer-meta-value" style="text-transform: capitalize;">${request.contactPreference}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Lead Status</span>
            <span class="drawer-meta-value" style="color:var(--color-secondary);">${request.status === "Submitted" ? "New Lead" : "Qualified"}</span>
          </div>
        </div>
      </div>

      <!-- Section: Course Interest -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Course Interest</h4>
        <div class="drawer-grid">
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Target Course</span>
            <span class="drawer-meta-value">${request.courseTitle}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Delivery Format</span>
            <span class="drawer-meta-value">Live (1-to-1 / Group)</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Current Level</span>
            <span class="drawer-meta-value">${request.level}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Preferred Setup</span>
            <span class="drawer-meta-value">${request.classPreference}</span>
          </div>
        </div>
      </div>

      <!-- Section: Availability Preferences -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Availability</h4>
        <div class="drawer-grid">
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Preferred Days</span>
            <span class="drawer-meta-value">${request.preferredDays.join(", ")}</span>
          </div>
          <div class="drawer-meta-item">
            <span class="drawer-meta-label">Preferred Time</span>
            <span class="drawer-meta-value">${request.preferredTime}</span>
          </div>
          <div class="drawer-meta-item" style="grid-column: span 2;">
            <span class="drawer-meta-label">Captured Timezone</span>
            <span class="drawer-meta-value">${request.timezone} (GMT+5)</span>
          </div>
        </div>
        <p style="font-size:11px; opacity:0.8; line-height:14px; margin-top:4px; font-style:italic;">
          Note: Learner availability is a preference and is not yet a confirmed class schedule.
        </p>
      </div>

      <!-- Section: Placement & Goals -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Placement & Goals</h4>
        <div class="drawer-meta-item" style="margin-bottom:8px;">
          <span class="drawer-meta-label">Learning Goals</span>
          <span class="drawer-meta-value" style="font-weight: normal; font-size:12.5px;">
            <ul style="padding-left:16px; margin:4px 0;">
              ${request.goals.map(g => `<li>${g}</li>`).join("")}
            </ul>
          </span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Learner Notes</span>
          <p style="font-size:12.5px; line-height:18px; margin:4px 0; background:var(--color-surface-low); padding:8px; border-radius:6px; font-style:italic;">
            "${request.notes || 'No learning remarks submitted.'}"
          </p>
        </div>
      </div>

      <!-- Follow-up Alert Card -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Operations Follow-up</h4>
        ${followUpHtml}
      </div>

      <!-- Timeline log -->
      <div class="drawer-section">
        <h4 class="drawer-section-title">Request Audit Log</h4>
        <ul class="activity-timeline">
          ${request.history.map(h => `
            <li class="activity-node">
              <span class="activity-time">${h.time}:</span> ${h.text}
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
    
    <div class="drawer-footer">
      ${actionsHtml}
    </div>
  `;

  drawer.classList.add("active");
  backdrop.classList.add("active");
};

// Render staff view search and table queue
function renderStaffTrialsQueue() {
  const staffView = document.getElementById("staff-trials-view");
  if (!staffView) return;

  // Check mock permission state
  if (!staffState.hasStaffPermission) {
    staffView.innerHTML = `
      <section class="catalogue-hero" style="max-width: 600px; margin: var(--spacing-xl) auto; text-align:center; display:block;">
        <div style="width: 64px; height: 64px; background-color: var(--color-error-container); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-lg) auto; color: var(--color-error);">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 style="font-family: var(--font-family-headings); font-size: 22px; font-weight: 800; color: var(--color-on-tertiary-fixed); margin-bottom: 8px;">Permission Required</h2>
        <p class="modal-text" style="font-size:14.5px; margin-bottom: var(--spacing-lg);">You don't have authorization permissions to review trial requests on this profile.</p>
        <div style="display:flex; justify-content:center; gap:var(--spacing-sm);">
          <button class="btn btn-primary" onclick="toggleStaffPermissionState()">Override & Grant Permission</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#'">Back to Catalogue</button>
        </div>
      </section>
    `;
    return;
  }

  // Calculate metrics
  const submittedCount = staffTrialsData.filter(t => t.status === "Submitted").length;
  const waitingCount = staffTrialsData.filter(t => t.status === "Waiting Info").length;
  const readyCount = staffTrialsData.filter(t => t.status === "Ready for Scheduling").length;
  const dueFollowUps = staffTrialsData.filter(t => t.history.some(h => h.text.includes("Scheduled"))).length;

  // Filter records
  const filtered = staffTrialsData.filter(request => {
    // 1. Search Query
    const query = staffState.searchQuery.toLowerCase();
    const matchesSearch = !query || 
      request.id.toLowerCase().includes(query) ||
      request.learnerName.toLowerCase().includes(query) ||
      request.courseTitle.toLowerCase().includes(query);

    // 2. Status Filter
    const matchesStatus = staffState.filters.status === "all" || request.status === staffState.filters.status;

    // 3. Course Filter
    const matchesCourse = staffState.filters.course === "all" || request.courseId === staffState.filters.course;

    // 4. CSR Filter
    const matchesCSR = staffState.filters.csr === "all" || request.assignedCSR === staffState.filters.csr;

    return matchesSearch && matchesStatus && matchesCourse && matchesCSR;
  });

  // Compile Header Page info
  let contentHtml = `
    <!-- Catalogue Heading Area -->
    <section class="catalogue-hero" aria-labelledby="staff-title" style="padding-bottom:var(--spacing-xs); margin-bottom:var(--spacing-md);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--spacing-md);">
        <div>
          <div style="font-size: 13px; font-weight: 700; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--spacing-xs);">
            CSR Workspace
          </div>
          <h2 class="hero-title" id="staff-title">Trial Requests</h2>
          <p class="hero-subtitle" style="margin-bottom:0; max-width:600px;">
            Review learner trial requests, qualify prospects and prepare approved requests for scheduling.
          </p>
        </div>
        <div>
          <button class="btn btn-primary" onclick="openDirectPreviewModal('Manual Lead Addition Form')" style="display:inline-flex; align-items:center; gap:8px;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Trial Request
          </button>
        </div>
      </div>
    </section>

    <!-- Top Summary Stat Cards -->
    <div class="metrics-row animate-fade-in">
      <div class="metric-card">
        <span class="metric-value">${submittedCount}</span>
        <span class="metric-label">Submitted</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">${waitingCount}</span>
        <span class="metric-label">Waiting Info</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">${readyCount}</span>
        <span class="metric-label">Ready for Scheduling</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">${dueFollowUps}</span>
        <span class="metric-label">Due Follow-ups</span>
      </div>
    </div>

    <!-- Permission switcher toggle indicator for verification testing -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center; background:var(--color-surface-low); padding:8px 12px; border-radius:6px; border:1px solid var(--color-outline-variant);">
      <span style="font-size:12.5px; font-weight:700; color:var(--color-on-tertiary-fixed);">CSR Permission Node Simulator (Prototype Tool)</span>
      <button class="btn btn-secondary" onclick="toggleStaffPermissionState()" style="font-size:11px; padding:4px 8px; height:24px; border-radius:4px;">Simulate Revoked Authorization</button>
    </div>

    <!-- Filters and Search Bar -->
    <div class="queue-filters">
      <div class="filter-input-group" style="flex:1; min-width:200px;">
        <label for="queue-search">Search Queue</label>
        <input class="filter-item-input" type="text" id="queue-search" placeholder="Search learner, request ID or course..." value="${staffState.searchQuery}">
      </div>

      <div class="filter-input-group" style="width:140px;">
        <label for="queue-status">Status</label>
        <select class="filter-item-input" id="queue-status">
          <option value="all" ${staffState.filters.status === "all" ? "selected" : ""}>All Statuses</option>
          <option value="Submitted" ${staffState.filters.status === "Submitted" ? "selected" : ""}>Submitted</option>
          <option value="Qualified" ${staffState.filters.status === "Qualified" ? "selected" : ""}>Qualified</option>
          <option value="Waiting Info" ${staffState.filters.status === "Waiting Info" ? "selected" : ""}>Waiting Info</option>
          <option value="Ready for Scheduling" ${staffState.filters.status === "Ready for Scheduling" ? "selected" : ""}>Ready for Scheduling</option>
          <option value="Closed" ${staffState.filters.status === "Closed" ? "selected" : ""}>Closed</option>
        </select>
      </div>

      <div class="filter-input-group" style="width:160px;">
        <label for="queue-course">Course Interest</label>
        <select class="filter-item-input" id="queue-course">
          <option value="all" ${staffState.filters.course === "all" ? "selected" : ""}>All Courses</option>
          <option value="spoken-english" ${staffState.filters.course === "spoken-english" ? "selected" : ""}>Spoken English</option>
          <option value="ielts-preparation" ${staffState.filters.course === "ielts-preparation" ? "selected" : ""}>IELTS Preparation</option>
          <option value="practical-ai" ${staffState.filters.course === "practical-ai" ? "selected" : ""}>Practical AI</option>
          <option value="k12-math-grade-6-8" ${staffState.filters.course === "k12-math-grade-6-8" ? "selected" : ""}>K-12 Mathematics</option>
        </select>
      </div>

      <div class="filter-input-group" style="width:150px;">
        <label for="queue-csr">Assigned CSR</label>
        <select class="filter-item-input" id="queue-csr">
          <option value="all" ${staffState.filters.csr === "all" ? "selected" : ""}>All Staff</option>
          <option value="Sarah Ahmed" ${staffState.filters.csr === "Sarah Ahmed" ? "selected" : ""}>Sarah Ahmed</option>
          <option value="Abdullah Khan" ${staffState.filters.csr === "Abdullah Khan" ? "selected" : ""}>Abdullah Khan</option>
          <option value="Unassigned" ${staffState.filters.csr === "Unassigned" ? "selected" : ""}>Unassigned</option>
        </select>
      </div>
    </div>
  `;

  // Check if search has zero matching results
  if (filtered.length === 0) {
    const isSearchActive = staffState.searchQuery || staffState.filters.status !== "all" || staffState.filters.course !== "all" || staffState.filters.csr !== "all";
    
    contentHtml += `
      <div class="table-container" style="padding:48px 24px; text-align:center;">
        <div style="width: 56px; height: 56px; background-color: var(--color-surface-low); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--color-tertiary);">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h3 style="font-family: var(--font-family-headings); font-size:18px; font-weight:700; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">
          ${isSearchActive ? 'No matching trial requests' : 'No submitted requests'}
        </h3>
        <p class="modal-text" style="font-size:13.5px; max-width:340px; margin:0 auto 16px auto;">
          ${isSearchActive ? 'Try changing your search keywords or filter selectors.' : 'There are currently no new trial requests waiting for review.'}
        </p>
        ${isSearchActive ? '<button class="btn btn-secondary" onclick="resetStaffFilters()" style="padding:0 16px; height:34px; font-size:12.5px;">Reset Work Queue Filters</button>' : ''}
      </div>
    `;
    staffView.innerHTML = contentHtml;
    attachStaffFilterListeners();
    return;
  }

  // Compile Wide Table
  contentHtml += `
    <div class="table-container animate-fade-in">
      <table class="staff-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Learner</th>
            <th>Course</th>
            <th>Level</th>
            <th>Availability</th>
            <th>Timezone</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
  `;

  filtered.forEach(req => {
    // Determine status badge classes
    let statusClass = "status-submitted";
    if (req.status === "Qualified") statusClass = "status-qualified";
    if (req.status === "Waiting Info") statusClass = "status-waiting";
    if (req.status === "Ready for Scheduling") statusClass = "status-ready";
    if (req.status === "Closed") statusClass = "status-closed";

    // Format fields
    const daysStr = req.preferredDays.map(d => d.substring(0,3)).join(", ");
    
    // Warning alerts icons
    let alertsHtml = "";
    if (req.isDuplicate) {
      alertsHtml = `<span title="Duplicate Warning" style="cursor:help; margin-left:6px; display:inline-flex; align-items:center; background:#fef3d6; color:#b06000; font-size:10px; font-weight:700; padding:2px 6px; border-radius:4px; border:1px solid #fadca0;">DUPLICATE</span>`;
    } else if (req.guardianConsentRequired) {
      alertsHtml = `<span title="Consent Needed" style="cursor:help; margin-left:6px; display:inline-flex; align-items:center; background:#fce8e6; color:#c5221f; font-size:10px; font-weight:700; padding:2px 6px; border-radius:4px; border:1px solid #fad2cf;">CONSENT</span>`;
    }

    contentHtml += `
      <tr>
        <td data-label="Request ID" style="font-family:monospace; font-weight:700; color:var(--color-on-tertiary-fixed); font-size:13px;">${req.id}</td>
        <td data-label="Learner">
          <div style="font-weight:700; color:var(--color-on-tertiary-fixed);">${req.learnerName}</div>
          <div style="font-size:11.5px; opacity:0.8;">${req.email}</div>
        </td>
        <td data-label="Course" style="font-weight:600;">${req.courseTitle.replace(" Bootcamp", "").replace(" Masterclass", "")}</td>
        <td data-label="Level">${req.level}</td>
        <td data-label="Availability" style="font-size:12.5px;">${daysStr} &middot; <span style="font-weight:600;">${req.preferredTime}</span></td>
        <td data-label="Timezone" style="font-size:12px; font-family:monospace;">${req.timezone}</td>
        <td data-label="Assigned To" style="font-size:12.5px;">
          ${req.assignedCSR === "Unassigned" ? '<span style="color:#b06000; font-weight:600;">Unassigned</span>' : req.assignedCSR}
        </td>
        <td data-label="Status">
          <div style="display:flex; align-items:center;">
            <span class="badge-status ${statusClass}">${req.status}</span>
            ${alertsHtml}
          </div>
        </td>
        <td style="text-align:right;">
          <button class="btn btn-secondary" onclick="openStaffReviewDrawer('${req.id}')" style="height:30px; font-size:12px; padding:0 12px; border-radius:4px;">Review</button>
        </td>
      </tr>
    `;
  });

  contentHtml += `
        </tbody>
      </table>
    </div>
  `;

  staffView.innerHTML = contentHtml;
  attachStaffFilterListeners();
}

// Reset filters
window.resetStaffFilters = function() {
  staffState.searchQuery = "";
  staffState.filters.status = "all";
  staffState.filters.course = "all";
  staffState.filters.csr = "all";
  renderStaffTrialsQueue();
};

// Attach event listeners to filters block
function attachStaffFilterListeners() {
  const searchInput = document.getElementById("queue-search");
  const statusSelect = document.getElementById("queue-status");
  const courseSelect = document.getElementById("queue-course");
  const csrSelect = document.getElementById("queue-csr");

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      staffState.searchQuery = e.target.value.trim();
      // Render queue directly (fast filter)
      renderStaffTrialsQueueTableOnly();
    });
  }

  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      staffState.filters.status = e.target.value;
      renderStaffTrialsQueue();
    });
  }

  if (courseSelect) {
    courseSelect.addEventListener("change", (e) => {
      staffState.filters.course = e.target.value;
      renderStaffTrialsQueue();
    });
  }

  if (csrSelect) {
    csrSelect.addEventListener("change", (e) => {
      staffState.filters.csr = e.target.value;
      renderStaffTrialsQueue();
    });
  }
}

// Optimization helper to prevent full page re-renders on search typing
function renderStaffTrialsQueueTableOnly() {
  const tableBody = document.querySelector(".staff-table tbody");
  if (!tableBody) {
    renderStaffTrialsQueue();
    return;
  }

  // Filter records
  const query = staffState.searchQuery.toLowerCase();
  const filtered = staffTrialsData.filter(request => {
    const matchesSearch = !query || 
      request.id.toLowerCase().includes(query) ||
      request.learnerName.toLowerCase().includes(query) ||
      request.courseTitle.toLowerCase().includes(query);

    const matchesStatus = staffState.filters.status === "all" || request.status === staffState.filters.status;
    const matchesCourse = staffState.filters.course === "all" || request.courseId === staffState.filters.course;
    const matchesCSR = staffState.filters.csr === "all" || request.assignedCSR === staffState.filters.csr;

    return matchesSearch && matchesStatus && matchesCourse && matchesCSR;
  });

  if (filtered.length === 0) {
    renderStaffTrialsQueue();
    return;
  }

  let tableHtml = "";
  filtered.forEach(req => {
    let statusClass = "status-submitted";
    if (req.status === "Qualified") statusClass = "status-qualified";
    if (req.status === "Waiting Info") statusClass = "status-waiting";
    if (req.status === "Ready for Scheduling") statusClass = "status-ready";
    if (req.status === "Closed") statusClass = "status-closed";

    const daysStr = req.preferredDays.map(d => d.substring(0,3)).join(", ");
    
    let alertsHtml = "";
    if (req.isDuplicate) {
      alertsHtml = `<span title="Duplicate Warning" style="cursor:help; margin-left:6px; display:inline-flex; align-items:center; background:#fef3d6; color:#b06000; font-size:10px; font-weight:700; padding:2px 6px; border-radius:4px; border:1px solid #fadca0;">DUPLICATE</span>`;
    } else if (req.guardianConsentRequired) {
      alertsHtml = `<span title="Consent Needed" style="cursor:help; margin-left:6px; display:inline-flex; align-items:center; background:#fce8e6; color:#c5221f; font-size:10px; font-weight:700; padding:2px 6px; border-radius:4px; border:1px solid #fad2cf;">CONSENT</span>`;
    }

    tableHtml += `
      <tr>
        <td data-label="Request ID" style="font-family:monospace; font-weight:700; color:var(--color-on-tertiary-fixed); font-size:13px;">${req.id}</td>
        <td data-label="Learner">
          <div style="font-weight:700; color:var(--color-on-tertiary-fixed);">${req.learnerName}</div>
          <div style="font-size:11.5px; opacity:0.8;">${req.email}</div>
        </td>
        <td data-label="Course" style="font-weight:600;">${req.courseTitle.replace(" Bootcamp", "").replace(" Masterclass", "")}</td>
        <td data-label="Level">${req.level}</td>
        <td data-label="Availability" style="font-size:12.5px;">${daysStr} &middot; <span style="font-weight:600;">${req.preferredTime}</span></td>
        <td data-label="Timezone" style="font-size:12px; font-family:monospace;">${req.timezone}</td>
        <td data-label="Assigned To" style="font-size:12.5px;">
          ${req.assignedCSR === "Unassigned" ? '<span style="color:#b06000; font-weight:600;">Unassigned</span>' : req.assignedCSR}
        </td>
        <td data-label="Status">
          <div style="display:flex; align-items:center;">
            <span class="badge-status ${statusClass}">${req.status}</span>
            ${alertsHtml}
          </div>
        </td>
        <td style="text-align:right;">
          <button class="btn btn-secondary" onclick="openStaffReviewDrawer('${req.id}')" style="height:30px; font-size:12px; padding:0 12px; border-radius:4px;">Review</button>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = tableHtml;
}

// ==========================================================================
// Screen 05 - Trial Scheduling Mock Databases & Controllers
// ==========================================================================

// Mock staff trainers database
const staffTrainersData = [
  {
    id: "TR-001",
    name: "Ayesha Rahman",
    avatar: "AR",
    specialty: "Spoken English Trainer",
    subjects: ["spoken-english", "ielts-preparation"],
    levels: "Beginner–Advanced",
    formats: ["1-to-1", "Group"],
    rating: "4.9",
    availabilityTags: "Available Tuesday & Thursday evening",
    preferredDays: ["Tuesday", "Thursday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    offsetLabel: "PKT"
  },
  {
    id: "TR-002",
    name: "Hamza Siddiqui",
    avatar: "HS",
    specialty: "Spoken English Trainer",
    subjects: ["spoken-english"],
    levels: "Beginner–Intermediate",
    formats: ["1-to-1", "Group"],
    rating: "4.8",
    availabilityTags: "Tuesday: Limited | Thursday: Available",
    preferredDays: ["Tuesday", "Thursday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    offsetLabel: "PKT"
  },
  {
    id: "TR-003",
    name: "Sana Malik",
    avatar: "SM",
    specialty: "IELTS & English Trainer",
    subjects: ["spoken-english", "ielts-preparation"],
    levels: "Intermediate–Advanced",
    formats: ["Group"],
    rating: "4.7",
    availabilityTags: "Thursday evening available",
    preferredDays: ["Thursday"],
    preferredTime: "Evening",
    timezone: "Asia/Dubai", // GST (GMT+4)
    offsetLabel: "GST"
  },
  {
    id: "TR-004",
    name: "Zainab Sohail",
    avatar: "ZS",
    specialty: "AI & Prompt Design Lead",
    subjects: ["practical-ai"],
    levels: "Beginner–Advanced",
    formats: ["1-to-1", "Group"],
    rating: "4.9",
    availabilityTags: "Tuesday & Saturday evening available",
    preferredDays: ["Tuesday", "Saturday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    offsetLabel: "PKT"
  },
  {
    id: "TR-005",
    name: "Fahad Shaikh",
    avatar: "FS",
    specialty: "Digital Marketing Specialist",
    subjects: ["digital-marketing"],
    levels: "Beginner–Intermediate",
    formats: ["1-to-1", "Group"],
    rating: "4.8",
    availabilityTags: "Monday & Wednesday evening available",
    preferredDays: ["Monday", "Wednesday"],
    preferredTime: "Evening",
    timezone: "Asia/Karachi",
    offsetLabel: "PKT"
  },
  {
    id: "TR-006",
    name: "Mariam Khan",
    avatar: "MK",
    specialty: "Primary & K-12 Math Expert",
    subjects: ["k12-math"],
    levels: "Beginner–Intermediate",
    formats: ["1-to-1", "Group"],
    rating: "4.7",
    availabilityTags: "Tuesday & Thursday afternoon available",
    preferredDays: ["Tuesday", "Thursday"],
    preferredTime: "Afternoon",
    timezone: "Asia/Karachi",
    offsetLabel: "PKT"
  }
];

// Scheduled Occurrences State repository
state.scheduledOccurrences = {
  "OCC-TRIAL-001": {
    id: "OCC-TRIAL-001",
    trialRequestId: "TRIAL-001",
    learner: "Ali Khan",
    trainer: "Ayesha Rahman",
    course: "Spoken English Bootcamp",
    date: "2026-08-13",
    startTime: "7:00 PM",
    timezone: "Asia/Karachi",
    durationMinutes: 45,
    format: "1-to-1",
    status: "Scheduled",
    meetingStatus: "Provisioned",
    reminderStatus: "Queued",
    joinStateSim: "Join Available" // Default demo state
  }
};

// Active Scheduling wizard selections
const schedulingState = {
  selectedTrainerId: null,
  selectedDateVal: null,
  selectedTimeSlot: null,
  isRescheduling: false,
  previousScheduleLog: null, // Saved reference for reschedule history track
  meetingStatus: "Provisioned" // Provisioning | Provisioned | Failed
};

// Main view compiler
function renderTrialSchedulingPage(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const schedulingView = document.getElementById("staff-scheduling-view");
  if (!request || !schedulingView) {
    window.location.hash = "#staff/trial-requests";
    return;
  }

  // 1. If already scheduled, render the Success / Occurence Details view
  const occurrenceId = "OCC-" + id;
  const occurrence = state.scheduledOccurrences[occurrenceId];

  if (occurrence && !schedulingState.isRescheduling) {
    renderTrialOccurrenceDetails(request, occurrence);
    return;
  }

  // 2. Otherwise compile the Interactive Scheduling Wizard
  // Get compatible trainers matching courseId
  const trainers = staffTrainersData.filter(t => t.subjects.includes(request.courseId));

  // Breadcrumbs & Header
  let html = `
    <nav class="breadcrumb-nav">
      <a href="#staff/trial-requests" class="breadcrumb-link">Explore Requests</a>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">Schedule Request</span>
    </nav>

    <div style="margin-top:12px; margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--spacing-md);">
      <div>
        <a href="#staff/trial-requests" onclick="closeStaffReviewDrawer()" class="btn btn-link" style="padding-left: 0; font-weight: 700; color: var(--color-secondary); display: inline-flex; align-items: center; gap: 8px;">
          <span>←</span>
          <span>Back to Trial Request</span>
        </a>
        <h2 class="hero-title" style="margin-top:6px;">${schedulingState.isRescheduling ? 'Reschedule Trial' : 'Schedule Trial'}</h2>
        <div style="display:flex; align-items:center; gap:var(--spacing-sm); margin-top:4px;">
          <span style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed);">${request.id} &middot; ${request.learnerName} &middot; ${request.courseTitle}</span>
          <span class="badge-status status-ready">Ready for Scheduling</span>
        </div>
      </div>
      
      <!-- Mini Progress indicators -->
      <div class="steps-indicator">
        <div class="step-item completed">
          <span style="display:inline-flex; width:14px; height:14px; background:#137333; color:white; border-radius:50%; align-items:center; justify-content:center; font-size:9px;">✓</span>
          Request
        </div>
        <span style="margin:0 8px; opacity:0.5;">→</span>
        <div class="step-item completed">
          <span style="display:inline-flex; width:14px; height:14px; background:#137333; color:white; border-radius:50%; align-items:center; justify-content:center; font-size:9px;">✓</span>
          Qualified
        </div>
        <span style="margin:0 8px; opacity:0.5;">→</span>
        <div class="step-item active">
          <span style="display:inline-flex; width:14px; height:14px; background:var(--color-secondary); color:var(--color-surface-lowest); border-radius:50%; align-items:center; justify-content:center; font-size:9px;">3</span>
          Scheduling
        </div>
      </div>
    </div>

    ${schedulingState.isRescheduling ? `
      <div class="drawer-warning-alert warning-amber" style="max-width:100%; margin-bottom:16px;">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <strong>Reschedule Mode:</strong> You are currently changing the active scheduled time slot for <strong>${occurrenceId}</strong>.
          Previous time: <em>${occurrence ? `${occurrence.date} at ${occurrence.startTime}` : ''}</em>.
        </div>
      </div>
    ` : ''}

    <div class="scheduling-container">
      <!-- Left Column: Learner Request preferences recap card -->
      <div class="scheduling-sidebar">
        <div class="scheduling-sidebar-section">
          <h4 class="scheduling-sidebar-title">Learner Profile</h4>
          <span style="font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed);">${request.learnerName}</span>
          <span style="font-size:12.5px; opacity:0.8;">${request.email}</span>
          <span style="font-size:12.5px; opacity:0.8;">${request.phone}</span>
        </div>

        <div class="scheduling-sidebar-section">
          <h4 class="scheduling-sidebar-title">Trial Intent</h4>
          <div style="font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
            <div><strong>Course:</strong> ${request.courseTitle}</div>
            <div><strong>Level:</strong> ${request.level}</div>
            <div><strong>Format Preference:</strong> ${request.classPreference}</div>
          </div>
        </div>

        <div class="scheduling-sidebar-section">
          <h4 class="scheduling-sidebar-title">Availability Profile</h4>
          <div style="font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
            <div><strong>Preferred Days:</strong> ${request.preferredDays.join(" & ")}</div>
            <div><strong>Time Bracket:</strong> ${request.preferredTime}</div>
            <div><strong>Timezone:</strong> ${request.timezone} (GMT+5)</div>
            <div><strong>Contact Preference:</strong> ${request.contactPreference}</div>
          </div>
        </div>

        <div style="font-size:11px; font-style:italic; opacity:0.85; line-height:14px; border-top: 1px solid var(--color-outline-variant); padding-top:10px;">
          Note: These preferences reflect initial onboarding feedback and do not represent a confirmed reservation.
        </div>
      </div>

      <!-- Right Column: Interactive Scheduling Wizard -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        <!-- Step 1: Trainer Selection -->
        <section class="details-card" style="padding:var(--spacing-md);">
          <h3 style="font-family:var(--font-family-headings); font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">1. Select Trainer</h3>
          <p class="modal-text" style="font-size:12.5px; margin-bottom:12px;">Displaying active trainers certified for ${request.courseTitle}:</p>
          
          <div class="trainers-grid">
            ${trainers.length === 0 ? `
              <div class="empty-state" style="padding:24px; text-align:center; border: 1px dashed var(--color-outline-variant); border-radius:8px; grid-column: span 3; width: 100%;">
                <div style="width: 48px; height: 48px; background-color: var(--color-surface-low); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; color: var(--color-tertiary);">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h4 style="font-family:var(--font-family-headings); font-size:14.5px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">No Trainers Available</h4>
                <p class="modal-text" style="font-size:12.5px; max-width:320px; margin:0 auto 12px auto;">No matching trainer is available during the learner's preferred times.</p>
                <div style="display:flex; gap:8px; justify-content:center; flex-wrap: wrap;">
                  <button class="btn btn-secondary" onclick="openDirectPreviewModal('Expand Search Scope')" style="font-size:11px; padding:0 12px; height:28px;">Expand Search</button>
                  <button class="btn btn-secondary" onclick="requestNewAvailability('${request.id}')" style="font-size:11px; padding:0 12px; height:28px;">Request New Availability</button>
                  <button class="btn btn-tertiary" onclick="window.location.hash='#staff/trial-requests'" style="font-size:11px; padding:0 12px; height:28px;">Back to Trial Request</button>
                </div>
              </div>
            ` : trainers.map(t => {
              const isActive = schedulingState.selectedTrainerId === t.id;
              return `
                <div class="trainer-select-card ${isActive ? 'active' : ''}" onclick="selectTrainer('${request.id}', '${t.id}')">
                  <div class="trainer-avatar-row">
                    <div class="trainer-avatar-circle">${t.avatar}</div>
                    <div>
                      <div class="trainer-name">${t.name}</div>
                      <div class="trainer-specialty">${t.specialty}</div>
                    </div>
                  </div>
                  <ul class="trainer-bullet-list">
                    <li>Certified: ${t.levels}</li>
                    <li>Formats: ${t.formats.join(", ")}</li>
                    <li>Availability: ${t.availabilityTags}</li>
                  </ul>
                  ${isActive ? `
                    <span style="position:absolute; top:12px; right:12px; font-size:10px; font-weight:700; background:var(--color-secondary); color:var(--color-surface-lowest); padding:2px 6px; border-radius:4px;">SELECTED</span>
                  ` : ''}
                </div>
              `;
            }).join("")}
          </div>
        </section>

        <!-- Step 2: Date Selection -->
        <section class="details-card" style="padding:var(--spacing-md); ${schedulingState.selectedTrainerId ? '' : 'opacity:0.5; pointer-events:none;'}">
          <h3 style="font-family:var(--font-family-headings); font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">2. Select Date</h3>
          <p class="modal-text" style="font-size:12.5px; margin-bottom:12px;">Preferred days (Tuesday/Thursday) are highlighted. Pick an upcoming date:</p>
          
          <div class="calendar-row">
            ${getCalendarDatesHtml(request)}
          </div>
        </section>

        <!-- Step 3: Time Slot Selection -->
        <section class="details-card" style="padding:var(--spacing-md); ${schedulingState.selectedDateVal ? '' : 'opacity:0.5; pointer-events:none;'}">
          <h3 style="font-family:var(--font-family-headings); font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">3. Available Time Slots</h3>
          <p class="modal-text" style="font-size:12.5px; margin-bottom:12px;">Times are converted and shown in the learner's timezone:</p>
          
          <div class="slots-grid">
            ${getTimeSlotsHtml(request)}
          </div>
        </section>

        <!-- Conflict alerts / Preference warning notifications box -->
        ${getConflictAlertHtml(request)}

        <!-- Step 4: Summary & Confirm -->
        <section class="details-card" style="padding:var(--spacing-md); background:var(--color-surface-low);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--spacing-md);">
            <div>
              <h3 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:2px;">Trial Summary</h3>
              <div style="font-size:12.5px; color:var(--color-tertiary);">
                ${getSummaryText(request)}
              </div>
            </div>
            <div style="display:flex; gap:var(--spacing-sm);">
              <button class="btn btn-secondary" onclick="window.location.hash='#staff/trial-requests'" style="height:40px;">Cancel</button>
              <button class="btn btn-primary" id="final-schedule-btn" ${canSchedule() ? "" : "disabled"} onclick="openScheduleConfirmModal('${request.id}')" style="height:40px; padding:0 24px;">
                ${schedulingState.isRescheduling ? 'Reschedule Session' : 'Schedule Trial'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  `;

  schedulingView.innerHTML = html;
}

// Select Trainer card handler
window.selectTrainer = function(requestId, trainerId) {
  schedulingState.selectedTrainerId = trainerId;
  // Reset date/slot on trainer change
  schedulingState.selectedDateVal = null;
  schedulingState.selectedTimeSlot = null;
  renderTrialSchedulingPage(requestId);
};

// Generate calendar dates list (Tue/Thu prioritized)
function getCalendarDatesHtml(request) {
  // Tuesday/Thursday matching
  const options = [
    { date: "2026-08-11", dayName: "Tue", dateLabel: "11 Aug", isTueThu: true },
    { date: "2026-08-13", dayName: "Thu", dateLabel: "13 Aug", isTueThu: true },
    { date: "2026-08-15", dayName: "Sat", dateLabel: "15 Aug", isTueThu: false },
    { date: "2026-08-18", dayName: "Tue", dateLabel: "18 Aug", isTueThu: true },
    { date: "2026-08-20", dayName: "Thu", dateLabel: "20 Aug", isTueThu: true },
    { date: "2026-08-22", dayName: "Sat", dateLabel: "22 Aug", isTueThu: false }
  ];

  return options.map(opt => {
    const isSelected = schedulingState.selectedDateVal === opt.date;
    const isPreferred = opt.isTueThu; // Prefer Tue/Thu
    return `
      <div class="calendar-date-pill ${isSelected ? 'active' : ''} ${isPreferred ? 'preferred' : ''}" onclick="selectDate('${request.id}', '${opt.date}')">
        <span class="calendar-pill-day">${opt.dayName}</span>
        <span class="calendar-pill-date">${opt.dateLabel.split(" ")[0]}</span>
        <span style="font-size:9px; opacity:0.8; margin-top:2px;">${opt.isTueThu ? '⚡ Preferred' : 'Weekend'}</span>
      </div>
    `;
  }).join("");
}

// Select Date handler
window.selectDate = function(requestId, date) {
  schedulingState.selectedDateVal = date;
  schedulingState.selectedTimeSlot = null;
  renderTrialSchedulingPage(requestId);
};

// Generate converted time slots list
function getTimeSlotsHtml(request) {
  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  if (!trainer) return "";

  // Time conversion simulation options
  const slots = [
    { time: "10:00 AM", category: "Morning", trainerTime: "9:00 AM", isConflict: false },
    { time: "2:00 PM", category: "Afternoon", trainerTime: "1:00 PM", isConflict: false },
    { time: "6:00 PM", category: "Evening", trainerTime: "5:00 PM", isConflict: true }, // hard conflict clash for TR-001 on Tuesdays
    { time: "7:00 PM", category: "Evening", trainerTime: "6:00 PM", isConflict: false },
    { time: "8:00 PM", category: "Evening", trainerTime: "7:00 PM", isConflict: false }
  ];

  return slots.map(slot => {
    const isSelected = schedulingState.selectedTimeSlot === slot.time;
    
    // Simulate timezone difference labels
    const trainerOffset = trainer.offsetLabel;
    const learnerOffset = "PKT";

    // Hard conflict checks
    const isTuesday = schedulingState.selectedDateVal === "2026-08-11" || schedulingState.selectedDateVal === "2026-08-18";
    const isHardConflict = slot.isConflict && isTuesday && trainer.id === "TR-001";

    let disabledAttr = "";
    let conflictLabel = "";
    if (isHardConflict) {
      disabledAttr = "disabled";
      conflictLabel = `<span style="font-size:8.5px; color:#c5221f; font-weight:800; margin-top:2px;">CLASH</span>`;
    }

    return `
      <button class="time-slot-btn ${isSelected ? 'active' : ''} ${isHardConflict ? 'disabled' : ''}" ${disabledAttr} onclick="selectTimeSlot('${request.id}', '${slot.time}')">
        <span class="time-slot-primary">${slot.time} ${learnerOffset}</span>
        <span class="time-slot-secondary">Trainer: ${slot.trainerTime} ${trainerOffset}</span>
        ${conflictLabel}
      </button>
    `;
  }).join("");
}

// Select Time handler
window.selectTimeSlot = function(requestId, time) {
  schedulingState.selectedTimeSlot = time;
  renderTrialSchedulingPage(requestId);
};

// Check conflicts and preference matches
function getConflictAlertHtml(request) {
  if (!schedulingState.selectedTrainerId || !schedulingState.selectedDateVal || !schedulingState.selectedTimeSlot) {
    return "";
  }

  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  const time = schedulingState.selectedTimeSlot;

  // 1. Hard Conflict check
  const isTuesday = schedulingState.selectedDateVal === "2026-08-11" || schedulingState.selectedDateVal === "2026-08-18";
  if (trainer.id === "TR-001" && isTuesday && time === "6:00 PM") {
    return `
      <div class="conflict-alert-box animate-fade-in">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <strong>Trainer Conflict:</strong> Ayesha Rahman already has a scheduled class at 6:00 PM PKT.
          <div style="font-weight:normal; font-size:12px; margin-top:2px;">Please select another time slot or trainer to resolve this clash.</div>
        </div>
      </div>
    `;
  }

  // 2. Preferred time mismatch warning (e.g. pick morning slot when they prefer evening)
  const isPreferredTime = time === "6:00 PM" || time === "7:00 PM" || time === "8:00 PM";
  if (!isPreferredTime) {
    return `
      <div class="conflict-alert-box alert-amber animate-fade-in">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <strong>Learner Preference Mismatch:</strong> This slot (${time}) is outside the learner's preferred time window (Evening).
          <div style="font-weight:normal; font-size:12px; margin-top:2px;">You may still schedule this slot if you have aligned directly with the learner.</div>
        </div>
      </div>
    `;
  }

  return "";
}

// Summary text generators
function getSummaryText(request) {
  if (!schedulingState.selectedTrainerId) return "Select trainer to continue...";
  if (!schedulingState.selectedDateVal) return "Select date to continue...";
  if (!schedulingState.selectedTimeSlot) return "Select time slot to continue...";

  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  return `Selected slot: <strong>${schedulingState.selectedDateVal}</strong> at <strong>${schedulingState.selectedTimeSlot} PKT</strong> with trainer <strong>${trainer.name}</strong>.`;
}

function canSchedule() {
  if (!schedulingState.selectedTrainerId || !schedulingState.selectedDateVal || !schedulingState.selectedTimeSlot) {
    return false;
  }

  // Hard conflict clash block
  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  const isTuesday = schedulingState.selectedDateVal === "2026-08-11" || schedulingState.selectedDateVal === "2026-08-18";
  if (trainer.id === "TR-001" && isTuesday && schedulingState.selectedTimeSlot === "6:00 PM") {
    return false;
  }

  return true;
}

// Schedule Confirmation modal popup
window.openScheduleConfirmModal = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  if (!request || !trainer) return;

  const content = `
    <div style="text-align: center; padding: 4px 0;">
      <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Schedule this trial?</h3>
      <p class="modal-text" style="font-size:13.5px; margin-bottom:20px;">Review the final trial booking occurrence parameters:</p>
      
      <table class="receipt-table" style="max-width:380px; margin:0 auto 24px auto; text-align:left;">
        <tr class="receipt-row">
          <td class="receipt-label">Student</td>
          <td class="receipt-value">${request.learnerName}</td>
        </tr>
        <tr class="receipt-row">
          <td class="receipt-label">Course</td>
          <td class="receipt-value">${request.courseTitle.replace(" Bootcamp", "")}</td>
        </tr>
        <tr class="receipt-row">
          <td class="receipt-label">Trainer</td>
          <td class="receipt-value">${trainer.name}</td>
        </tr>
        <tr class="receipt-row">
          <td class="receipt-label">Scheduled Date</td>
          <td class="receipt-value">${schedulingState.selectedDateVal}</td>
        </tr>
        <tr class="receipt-row">
          <td class="receipt-label">Time slot</td>
          <td class="receipt-value">${schedulingState.selectedTimeSlot} PKT</td>
        </tr>
        <tr class="receipt-row">
          <td class="receipt-label">Duration</td>
          <td class="receipt-value">45 minutes</td>
        </tr>
      </table>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmTrialSchedule('${id}')" style="flex:1; height:44px;">Confirm Schedule</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Go Back</button>
      </div>
    </div>
  `;
  openModal("Confirm Session Schedule", content);
};

// Confirm Schedule workflow
window.confirmTrialSchedule = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const trainer = staffTrainersData.find(t => t.id === schedulingState.selectedTrainerId);
  if (!request || !trainer) return;

  const occurrenceId = "OCC-" + id;
  const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // 1. Update history timelines
  if (schedulingState.isRescheduling) {
    const oldOccurrence = state.scheduledOccurrences[occurrenceId];
    request.history.push({ 
      time: `Today · ${nowTime}`, 
      text: `Trial rescheduled successfully. Previous: ${oldOccurrence.date} · ${oldOccurrence.startTime} | New: ${schedulingState.selectedDateVal} · ${schedulingState.selectedTimeSlot}` 
    });
  } else {
    request.history.push({ time: `Today · ${nowTime}`, text: `${trainer.name} assigned as trainer` });
    request.history.push({ time: `Today · ${nowTime}`, text: `Trial scheduled for ${schedulingState.selectedDateVal} at ${schedulingState.selectedTimeSlot}` });
    request.history.push({ time: `Today · ${nowTime}`, text: `Meeting room provisioned` });
    request.history.push({ time: `Today · ${nowTime}`, text: `Confirmation reminders queued` });
  }

  // 2. Save Occurrence object to local mock memory
  state.scheduledOccurrences[occurrenceId] = {
    id: occurrenceId,
    trialRequestId: id,
    learner: request.learnerName,
    trainer: trainer.name,
    course: request.courseTitle,
    date: schedulingState.selectedDateVal,
    startTime: schedulingState.selectedTimeSlot,
    timezone: request.timezone,
    durationMinutes: 45,
    format: request.classPreference,
    status: "Scheduled",
    meetingStatus: "Provisioned",
    reminderStatus: "Queued"
  };

  // 3. Update Request status to Scheduled
  request.status = "Ready for Scheduling"; // Maintain Ready, link schedule visually
  // To visually reflect in queue table:
  request.status = "Ready for Scheduling"; // Keep base request as Ready, display occurrence details

  closeModal();
  showToastAlert(`Trial scheduled successfully as ${occurrenceId}`);
  
  // Transition wizard state
  schedulingState.isRescheduling = false;
  renderTrialSchedulingPage(id);
};

// Renders the Successful Occurence / Scheduled details view page
function renderTrialOccurrenceDetails(request, occurrence) {
  const schedulingView = document.getElementById("staff-scheduling-view");
  if (!schedulingView) return;

  // Reminder badge status styling classes
  let remClass = "int-queued";
  let meetClass = "int-provisioned";
  if (schedulingState.meetingStatus === "Failed") meetClass = "int-failed";
  if (schedulingState.meetingStatus === "Provisioning") meetClass = "int-provisioning";

  // Timeline node builder
  const timelineNodes = request.history.map(h => `
    <li class="activity-node">
      <span class="activity-time">${h.time}:</span> ${h.text}
    </li>
  `).join("");

  schedulingView.innerHTML = `
    <nav class="breadcrumb-nav">
      <a href="#staff/trial-requests" class="breadcrumb-link">Explore Requests</a>
      <span class="breadcrumb-separator">/</span>
      <span class="breadcrumb-current">Trial Schedule Details</span>
    </nav>

    <div style="margin-top:12px; margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--spacing-md);">
      <div>
        <a href="#staff/trial-requests" class="btn btn-link" style="padding-left: 0; font-weight: 700; color: var(--color-secondary); display: inline-flex; align-items: center; gap: 8px;">
          <span>←</span>
          <span>Back to Trial Requests</span>
        </a>
        <h2 class="hero-title" style="margin-top:6px;">Trial Scheduled</h2>
        <p class="hero-subtitle" style="margin-bottom:0;">The trial session has been scheduled successfully as ${occurrence.id}.</p>
      </div>

      <div style="display:flex; gap:var(--spacing-sm);">
        <button class="btn btn-primary" onclick="triggerReschedule('${request.id}')">Reschedule</button>
        <button class="btn btn-secondary" onclick="openCancelScheduledModal('${request.id}')" style="color:#c5221f; border-color:rgba(197, 34, 31, 0.2);">Cancel Trial</button>
      </div>
    </div>

    <!-- Wide summary cards -->
    <div class="scheduling-success-card animate-fade-in">
      
      <!-- Primary Schedule detail table card -->
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-outline-variant); padding-bottom:14px; flex-wrap:wrap; gap:12px;">
        <div>
          <div style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--color-secondary); letter-spacing:0.03em;">Active Schedule</div>
          <h3 style="font-family:var(--font-family-headings); font-size:20px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-top:2px;">${occurrence.course}</h3>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:13px; font-weight:700; color:var(--color-tertiary);">Status:</span>
          <span class="badge-status status-ready" style="background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Scheduled</span>
        </div>
      </div>

      <!-- Schedule summary details row -->
      <div class="scheduled-summary-grid">
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Date</span>
          <span class="drawer-meta-value" style="font-size:15px;">${occurrence.date}</span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Time Window</span>
          <span class="drawer-meta-value" style="font-size:15px;">${occurrence.startTime} PKT</span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Assigned Trainer</span>
          <span class="drawer-meta-value" style="font-size:15px;">${occurrence.trainer}</span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Class Format</span>
          <span class="drawer-meta-value">${occurrence.format} &middot; Group / 1-to-1</span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Duration</span>
          <span class="drawer-meta-value">${occurrence.durationMinutes} Minutes</span>
        </div>
        <div class="drawer-meta-item">
          <span class="drawer-meta-label">Request Ref</span>
          <span class="drawer-meta-value" style="font-family:monospace;">${occurrence.trialRequestId}</span>
        </div>
      </div>

      <!-- Section: Participants -->
      <div class="integration-section">
        <h4 style="font-family:var(--font-family-headings); font-size:13px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; margin-bottom:8px;">Participants</h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:12px;">
          <div style="background:var(--color-surface-low); padding:10px 12px; border-radius:6px; border:1px solid var(--color-outline-variant); display:flex; align-items:center; gap:10px;">
            <div style="width:30px; height:30px; border-radius:50%; background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:11px; color:var(--color-secondary);">LK</div>
            <div>
              <div style="font-size:12.5px; font-weight:800; color:var(--color-on-tertiary-fixed);">${occurrence.learner}</div>
              <div style="font-size:10px; color:var(--color-tertiary); font-weight:700;">Learner (Confirmed)</div>
            </div>
          </div>
          <div style="background:var(--color-surface-low); padding:10px 12px; border-radius:6px; border:1px solid var(--color-outline-variant); display:flex; align-items:center; gap:10px;">
            <div style="width:30px; height:30px; border-radius:50%; background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:11px; color:var(--color-secondary);">TR</div>
            <div>
              <div style="font-size:12.5px; font-weight:800; color:var(--color-on-tertiary-fixed);">${occurrence.trainer}</div>
              <div style="font-size:10px; color:var(--color-tertiary); font-weight:700;">Assigned Trainer (Confirmed)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section: Meeting provisioning integrations -->
      <div class="integration-section">
        <h4 style="font-family:var(--font-family-headings); font-size:13px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; margin-bottom:8px;">System Integrations</h4>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--spacing-md); min-width:320px;">
          <!-- Daily.co video room -->
          <div>
            <span style="font-size:11.5px; color:var(--color-tertiary); font-weight:600;">Daily.co Video Room</span>
            <div class="integration-status-row">
              <div style="display:flex; flex-direction:column;">
                <span style="font-size:12.5px; font-weight:800; color:var(--color-on-tertiary-fixed);">${schedulingState.meetingStatus === 'Failed' ? 'Failed to Provision' : 'TRIAL-ROOM-001'}</span>
                <span style="font-size:10px; opacity:0.8;">Provider: Daily.co Video API</span>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="badge-integration ${meetClass}">${schedulingState.meetingStatus}</span>
                ${schedulingState.meetingStatus === 'Failed' ? `<button class="btn btn-secondary" onclick="retryMeetingProvisioning('${request.id}')" style="font-size:9.5px; padding:2px 6px; height:20px; border-radius:4px;">Retry</button>` : `<button class="btn btn-secondary" onclick="openDirectPreviewModal('Daily.co video config details')" style="font-size:9.5px; padding:2px 6px; height:20px; border-radius:4px;">Room Details</button>`}
              </div>
            </div>
          </div>
          
          <!-- Reminders Queue -->
          <div>
            <span style="font-size:11.5px; color:var(--color-tertiary); font-weight:600;">Academic Notification Queues</span>
            <div class="integration-status-row">
              <div style="display:flex; flex-direction:column;">
                <span style="font-size:12.5px; font-weight:800; color:var(--color-on-tertiary-fixed);">4 Schedule Alerts</span>
                <span style="font-size:10px; opacity:0.8;">WhatsApp & Email Reminders</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px; align-items:flex-end;">
                <span class="badge-integration int-queued" style="font-size:9.5px; padding:2px 6px;">Confirmation: Queued</span>
                <span class="badge-integration int-provisioned" style="font-size:9.5px; padding:2px 6px; background:#e6f4ea; color:#137333;">Alerts: Scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline audit logs -->
      <div class="integration-section">
        <h4 style="font-family:var(--font-family-headings); font-size:13px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; margin-bottom:8px;">Occurrence Audit log</h4>
        <ul class="activity-timeline">
          ${timelineNodes}
        </ul>
      </div>

    </div>
  `;
}

// Retry Meeting Provisioning simulation
window.retryMeetingProvisioning = function(id) {
  schedulingState.meetingStatus = "Provisioning";
  renderTrialSchedulingPage(id);
  
  setTimeout(() => {
    schedulingState.meetingStatus = "Provisioned";
    const request = staffTrialsData.find(t => t.id === id);
    if (request) {
      const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      request.history.push({ time: `Today · ${nowTime}`, text: "Daily.co video room provisioned successfully on retry." });
    }
    renderTrialSchedulingPage(id);
    showToastAlert("Meeting room provisioned successfully!");
  }, 1200);
};

// Reschedule mode activation
window.triggerReschedule = function(id) {
  schedulingState.isRescheduling = true;
  // Pre-fill selections
  const occurrence = state.scheduledOccurrences["OCC-" + id];
  if (occurrence) {
    const trainer = staffTrainersData.find(t => t.name === occurrence.trainer);
    schedulingState.selectedTrainerId = trainer ? trainer.id : null;
    schedulingState.selectedDateVal = occurrence.date;
    schedulingState.selectedTimeSlot = occurrence.startTime;
  }
  renderTrialSchedulingPage(id);
};

// Cancel Scheduled Trial
window.openCancelScheduledModal = function(id) {
  const content = `
    <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Cancel Scheduled Trial?</h3>
    <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">Specify the cancellation reason. The occurrence will remain on history log with status Cancelled:</p>
    
    <div class="form-group" style="text-align:left;">
      <label class="form-label" for="cancel-occur-reason">Cancellation Reason</label>
      <select class="form-input" id="cancel-occur-reason" style="height:40px;">
        <option value="Learner requested cancellation">Learner requested cancellation</option>
        <option value="Trainer unavailable">Trainer unavailable</option>
        <option value="Scheduling error">Scheduling error</option>
        <option value="Duplicate">Duplicate</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="confirmTrialCancellation('${id}')" style="flex:1; height:44px; background-color:var(--color-error); border-color:var(--color-error); color:white;">Cancel Occurrence</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Go Back</button>
    </div>
  `;
  openModal("Cancel Trial Session", content);
};

window.confirmTrialCancellation = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  const occurrenceId = "OCC-" + id;
  const occurrence = state.scheduledOccurrences[occurrenceId];
  const reason = document.getElementById("cancel-occur-reason").value;

  if (request && occurrence) {
    occurrence.status = "Cancelled";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: `Session OCC-${id} Cancelled. Reason: ${reason}` });
    
    closeModal();
    showToastAlert("Scheduled trial cancelled.");
    renderTrialSchedulingPage(id);
  }
};

window.requestNewAvailability = function(id) {
  const request = staffTrialsData.find(t => t.id === id);
  if (request) {
    request.status = "Waiting Info";
    const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    request.history.push({ time: `Today · ${nowTime}`, text: "Status reset to Waiting Info (Requesting new scheduling availability)." });
    showToastAlert("Request status reset to Waiting Info.");
    window.location.hash = "#staff/trial-requests";
  }
};

// ==========================================================================
// Screen 06 - Scheduled Trial Details / Join Trial View Functions
// ==========================================================================

// Global state trackers for Screen 06 requests
state.learnerRescheduleRequested = {};
state.learnerCancellationRequested = {};

window.changeDemoJoinState = function(id, newState) {
  const occurrence = state.scheduledOccurrences[id];
  if (occurrence) {
    occurrence.joinStateSim = newState;
    renderLearnerTrialPage(id);
    showToastAlert(`Simulated Classroom State: ${newState}`);
  }
};

window.renderLearnerTrialPage = function(occurrenceId) {
  const occurrence = state.scheduledOccurrences[occurrenceId];
  const view = document.getElementById("learner-trial-details-view");
  if (!occurrence || !view) {
    window.location.hash = "#";
    return;
  }

  // Get matching request for references
  const request = staffTrialsData.find(t => t.id === occurrence.trialRequestId);

  // Sync sidebar active class
  document.querySelectorAll(".sidebar-link").forEach(link => link.classList.remove("active"));
  const myTrialsLink = document.getElementById("sidebar-learner-trials");
  if (myTrialsLink) myTrialsLink.classList.add("active");

  // Determine button state descriptors based on the simulator value
  let joinButtonHtml = "";
  let infoMessage = "";
  let timingBadgeText = "";
  let timingBadgeClass = "badge-access-preview"; // gold/amber outline
  let classroomStatus = "Ready";
  let classroomStatusClass = "int-provisioned";

  const joinState = occurrence.joinStateSim || "Join Available";

  if (joinState === "Upcoming") {
    joinButtonHtml = `<button class="btn btn-primary" disabled style="width:100%; height:44px; opacity:0.65; cursor:not-allowed;">Join Trial</button>`;
    infoMessage = `<p class="modal-text" style="font-size:12px; opacity:0.85; margin-top:6px; font-style:italic;">The classroom will open 10 minutes before the scheduled start time.</p>`;
    timingBadgeText = "Starts in 2 days";
  } else if (joinState === "Opens Soon") {
    joinButtonHtml = `<button class="btn btn-primary" disabled style="width:100%; height:44px; opacity:0.65; cursor:not-allowed;">Join Trial</button>`;
    infoMessage = `<p class="modal-text" style="font-size:12px; opacity:0.85; margin-top:6px; font-style:italic;">The classroom will open 10 minutes before the scheduled start time.</p>`;
    timingBadgeText = "Starts today at 7:00 PM";
  } else if (joinState === "Join Available") {
    joinButtonHtml = `<button class="btn btn-primary animate-pulse" onclick="openReadyToJoinModal('${occurrenceId}')" style="width:100%; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest); font-weight:800; cursor:pointer;">Join Trial</button>`;
    infoMessage = `<p class="modal-text" style="font-size:12px; color:#137333; font-weight:700; margin-top:6px;">Your classroom is ready.</p>`;
    timingBadgeText = "Your trial starts soon";
    timingBadgeClass = "badge-delivery-k12"; // green active
  } else if (joinState === "Classroom Preparing") {
    joinButtonHtml = `<button class="btn btn-primary" disabled style="width:100%; height:44px; opacity:0.65; cursor:not-allowed; display:inline-flex; align-items:center; justify-content:center; gap:8px;">
      <svg width="18" height="18" class="animate-spin" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
      </svg>
      Preparing Classroom...
    </button>`;
    infoMessage = `<p class="modal-text" style="font-size:12px; opacity:0.85; margin-top:6px; font-style:italic;">Your online classroom is being prepared.</p>`;
    timingBadgeText = "Provisioning";
    classroomStatus = "Provisioning";
    classroomStatusClass = "int-provisioning";
  } else if (joinState === "Classroom Error") {
    joinButtonHtml = `
      <div style="display:flex; gap:8px; width:100%;">
        <button class="btn btn-primary" onclick="retryClassroomProvisioning('${occurrenceId}')" style="flex:1; height:44px; background-color:#c5221f; border-color:#c5221f; color:white;">Retry</button>
        <button class="btn btn-secondary" onclick="openDirectPreviewModal('Academic Support WhatsApp')" style="flex:1; height:44px;">Contact Support</button>
      </div>
    `;
    infoMessage = `<p class="modal-text" style="font-size:12px; color:#c5221f; font-weight:700; margin-top:6px;">Classroom temporarily unavailable. We're having trouble preparing the online classroom. Your scheduled trial has not been cancelled.</p>`;
    timingBadgeText = "Classroom Connection Error";
    timingBadgeClass = "badge-access-paid"; // red indicator
    classroomStatus = "Failed";
    classroomStatusClass = "int-failed";
  } else {
    // Ended
    joinButtonHtml = `<button class="btn btn-secondary" disabled style="width:100%; height:44px; opacity:0.5; cursor:not-allowed;">Trial Ended</button>`;
    infoMessage = `<p class="modal-text" style="font-size:12px; opacity:0.8; margin-top:6px; font-style:italic;">This scheduled introductory session has finished.</p>`;
    timingBadgeText = "Finished";
  }

  // Reschedule requested banner
  let rescheduleBannerHtml = "";
  if (state.learnerRescheduleRequested[occurrenceId]) {
    rescheduleBannerHtml = `
      <div class="drawer-warning-alert warning-amber" style="margin-bottom: 16px; border-radius: var(--radius-card);">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <strong>Reschedule Request Pending:</strong> We've received your request for a different schedule.
          Our operations team will review alternatives and notify you via ${request ? request.contactPreference : 'WhatsApp'}. The original slot remains confirmed until updated.
        </div>
      </div>
    `;
  } else if (state.learnerCancellationRequested[occurrenceId]) {
    rescheduleBannerHtml = `
      <div class="drawer-warning-alert" style="margin-bottom: 16px; border-radius: var(--radius-card);">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <strong>Cancellation Request Pending:</strong> You have requested to cancel this trial session.
          Academic advisors will review the request shortly.
        </div>
      </div>
    `;
  }

  view.innerHTML = `
    <!-- Development/Stakeholder State Simulator Panel (Floating slate control widget) -->
    <div class="dev-sim-panel animate-fade-in">
      <span style="color:#e2e8f0; margin-right:4px;">Prototype Simulator Controls:</span>
      <button class="dev-sim-btn ${joinState === 'Upcoming' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Upcoming')">Upcoming</button>
      <button class="dev-sim-btn ${joinState === 'Opens Soon' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Opens Soon')">Opens Soon</button>
      <button class="dev-sim-btn ${joinState === 'Join Available' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Join Available')">Class Ready</button>
      <button class="dev-sim-btn ${joinState === 'Classroom Preparing' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Classroom Preparing')">Preparing</button>
      <button class="dev-sim-btn ${joinState === 'Classroom Error' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Classroom Error')">Room Failure</button>
      <button class="dev-sim-btn ${joinState === 'Ended' ? 'active' : ''}" onclick="changeDemoJoinState('${occurrenceId}', 'Ended')">Ended</button>
    </div>

    <!-- Page Heading -->
    <section class="catalogue-hero" aria-labelledby="learner-schedule-title" style="padding-bottom:var(--spacing-xs); margin-bottom:var(--spacing-md); display:block;">
      <div class="hero-content">
        <div style="font-size: 13px; font-weight: 700; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--spacing-xs);">
          Learner Portal &middot; Confirmed Schedule
        </div>
        <div style="display:flex; align-items:center; gap:var(--spacing-md); flex-wrap:wrap;">
          <h2 class="hero-title" id="learner-schedule-title" style="margin-bottom:0;">Your Trial Class</h2>
          <span class="badge-status status-ready" style="background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Scheduled</span>
        </div>
        <p class="hero-subtitle" style="margin-top:6px;">Your introductory trial session has been scheduled with Ayesha Rahman. Please join from a quiet room.</p>
      </div>
    </section>

    ${rescheduleBannerHtml}

    <div class="trial-request-container">
      
      <!-- Left Column: Main Scheduled Card -->
      <div class="trial-main-form" style="display:flex; flex-direction:column; gap:var(--spacing-md);">
        
        <!-- Booking details recap panel -->
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--spacing-sm); border-bottom:1px solid var(--color-outline-variant); padding-bottom:12px; margin-bottom:var(--spacing-md);">
            <div>
              <span class="badge ${timingBadgeClass}" style="margin-bottom:6px;">${timingBadgeText}</span>
              <h3 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed);">${occurrence.course}</h3>
            </div>
            <div style="text-align:right;">
              <span style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--color-tertiary);">Duration</span>
              <div style="font-size:18px; font-weight:800; color:var(--color-secondary);">${occurrence.durationMinutes} mins</div>
            </div>
          </div>

          <div class="drawer-grid" style="margin-bottom:var(--spacing-lg);">
            <div class="drawer-meta-item">
              <span class="drawer-meta-label">Confirmed Date</span>
              <span class="drawer-meta-value" style="font-size:15px; color:var(--color-secondary);">Thursday, 13 August 2026</span>
            </div>
            <div class="drawer-meta-item">
              <span class="drawer-meta-label">Confirmed Time</span>
              <span class="drawer-meta-value" style="font-size:15px; color:var(--color-secondary);">${occurrence.startTime} - 7:45 PM PKT</span>
            </div>
            <div class="drawer-meta-item">
              <span class="drawer-meta-label">Class Timezone</span>
              <span class="drawer-meta-value">${occurrence.timezone} (GMT+5)</span>
            </div>
            <div class="drawer-meta-item">
              <span class="drawer-meta-label">Delivery Setup</span>
              <span class="drawer-meta-value">${occurrence.format} &middot; Live Online Session</span>
            </div>
          </div>

          <!-- CTA Join Button Panel -->
          <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; text-align:center;">
            ${joinButtonHtml}
            ${infoMessage}
          </div>
        </div>

        <!-- Section: Trainer Profile card -->
        <div class="form-card" style="padding:var(--spacing-lg);">
          <h4 class="drawer-section-title">Your Trainer</h4>
          
          <div style="display:flex; gap:16px; align-items:flex-start; margin-top:8px;">
            <div style="width:48px; height:48px; border-radius:50%; background-color:var(--color-surface-low); border:1.5px solid var(--color-outline-variant); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px; color:var(--color-secondary);">AR</div>
            <div style="flex:1;">
              <h5 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:2px;">Ayesha Rahman</h5>
              <span style="font-size:12.5px; font-weight:700; color:var(--color-tertiary); display:inline-block; margin-bottom:8px;">Spoken English certified trainer</span>
              <p class="modal-text" style="font-size:13px; line-height:18px; margin-bottom:0;">
                Ayesha is a highly experienced instructor specializing in conversational confidence, workplace presentation skills, and clear pronunciation modules.
              </p>
            </div>
          </div>
          <p style="font-size:12px; opacity:0.85; margin-top:12px; font-style:italic; line-height:16px;">
            "Your trainer will guide you through a short introductory session and assess your learning needs."
          </p>
        </div>

        <!-- Section: What to Expect & Checklist -->
        <div class="drawer-grid" style="grid-template-columns:1fr 1fr; gap:var(--spacing-md);">
          <div class="form-card" style="padding:var(--spacing-lg);">
            <h4 class="drawer-section-title">What to Expect</h4>
            <ul style="font-size:12.5px; line-height:20px; padding-left:16px; color:var(--color-on-surface-variant); margin-top:8px;">
              <li>Meet your assigned trainer</li>
              <li>Discuss target speaking goals</li>
              <li>Complete a short assessment activity</li>
              <li>Receive an initial level diagnostic</li>
              <li>Ask questions about course modules</li>
              <li>Get next-step advice after class</li>
            </ul>
          </div>
          
          <div class="form-card" style="padding:var(--spacing-lg);">
            <h4 class="drawer-section-title">Before You Join</h4>
            <div class="checklist-group">
              <div class="checklist-item">
                <div class="checklist-circle check-success">✓</div>
                <span>Stable internet connection</span>
              </div>
              <div class="checklist-item">
                <div class="checklist-circle check-success">✓</div>
                <span>Working headset & microphone</span>
              </div>
              <div class="checklist-item">
                <div class="checklist-circle check-success">✓</div>
                <span>Working camera (recommended)</span>
              </div>
              <div class="checklist-item">
                <div class="checklist-circle check-success">✓</div>
                <span>Quiet environment</span>
              </div>
            </div>
            
            <button class="btn btn-secondary" onclick="openDeviceTestModal()" style="width:100%; height:34px; font-size:12px; margin-top:16px;">Test My Setup</button>
          </div>
        </div>

      </div>

      <!-- Right Column: Sidebar summaries -->
      <div class="trial-side-panel" style="display:flex; flex-direction:column; gap:var(--spacing-md);">
        
        <!-- Online classroom provider info -->
        <div class="scheduling-sidebar" style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant);">
          <h4 class="scheduling-sidebar-title">Classroom Room System</h4>
          <div style="font-size:12.5px; display:flex; flex-direction:column; gap:6px;">
            <div><strong>Room Provider:</strong> Daily.co Video</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>Classroom Status:</strong>
              <span class="badge-integration ${classroomStatusClass}" style="font-size:9.5px; padding:2px 6px;">${classroomStatus}</span>
            </div>
          </div>
          <p style="font-size:11px; opacity:0.85; line-height:14px; margin-top:4px;">
            Your online classroom is ready. The Join Trial button will become active shortly before the scheduled start time.
          </p>
        </div>

        <!-- Reminder queues tracker -->
        <div class="scheduling-sidebar" style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant);">
          <h4 class="scheduling-sidebar-title">My Alerts</h4>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>Confirmation WhatsApp</span>
              <span class="badge-integration int-provisioned" style="font-size:9px; padding:1px 6px; background:#e6f4ea; color:#137333;">Sent</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>24-Hour Reminder Alert</span>
              <span class="badge-integration int-queued" style="font-size:9px; padding:1px 6px;">Scheduled</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span>1-Hour Reminder Alert</span>
              <span class="badge-integration int-queued" style="font-size:9px; padding:1px 6px;">Scheduled</span>
            </div>
          </div>
        </div>

        <!-- Learner friendly request milestones timeline -->
        <div class="scheduling-sidebar" style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant);">
          <h4 class="scheduling-sidebar-title">Session Progress</h4>
          <ul class="activity-timeline">
            <li class="activity-node"><span class="activity-time">11 Aug · 1:25 PM:</span> Request Submitted</li>
            <li class="activity-node"><span class="activity-time">11 Aug · 1:40 PM:</span> Request Reviewed</li>
            <li class="activity-node"><span class="activity-time">11 Aug · 2:06 PM:</span> Trial Scheduled</li>
            <li class="activity-node"><span class="activity-time">11 Aug · 2:07 PM:</span> Classroom Configured</li>
          </ul>
        </div>

        <!-- Course Page quick routing -->
        <div class="scheduling-sidebar" style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); align-items:center; text-align:center;">
          <h4 class="scheduling-sidebar-title" style="width:100%;">Course Syllabus</h4>
          <span style="font-size:13.5px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Spoken English Bootcamp</span>
          <button class="btn btn-secondary" onclick="window.location.hash='#courses/spoken-english'" style="height:32px; font-size:12px; padding:0 12px; width:100%;">View Course Page</button>
        </div>

        <!-- Reschedule and cancel buttons -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <button class="btn btn-secondary" onclick="openRescheduleRequestModal('${occurrenceId}')" style="width:100%; height:38px; font-size:13px; font-weight:700;">Request Reschedule</button>
          <button class="btn btn-tertiary" onclick="openCancelRequestModal('${occurrenceId}')" style="width:100%; height:34px; font-size:12px; color:#c5221f;">Request Cancellation</button>
        </div>

      </div>

    </div>
  `;
};

// Retry Classroom Provisioning simulation
window.retryClassroomProvisioning = function(id) {
  changeDemoJoinState(id, "Classroom Preparing");
  setTimeout(() => {
    changeDemoJoinState(id, "Join Available");
  }, 1200);
};

// Setup Device Checks Modal builder
window.openDeviceTestModal = function() {
  const content = `
    <p class="modal-text">Run hardware and network checks to verify your browser is configured correctly for live classes.</p>
    
    <div class="checklist-group" id="diagnostics-log" style="margin-bottom:20px; padding: 12px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">
      <div style="display:flex; align-items:center; justify-content:center; padding:16px 0;">
        <svg width="20" height="20" class="animate-spin" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
        </svg>
        <span>Running diagnostics...</span>
      </div>
    </div>

    <div style="display:flex; gap:12px;">
      <button class="btn btn-secondary" id="diagnostics-toggle-btn" onclick="toggleDiagnosticCamera()" style="flex:1; height:40px; display:none;">Simulate Camera Missing</button>
      <button class="btn btn-primary" onclick="closeModal()" style="flex:1; height:40px;">Done</button>
    </div>
  `;
  openModal("Hardware Setup Diagnostics", content);
  
  // Run diagnostic simulation
  state.diagnosticCameraWorking = true;
  runMockDeviceDiagnostics();
};

function runMockDeviceDiagnostics() {
  const log = document.getElementById("diagnostics-log");
  const toggleBtn = document.getElementById("diagnostics-toggle-btn");
  if (!log) return;

  setTimeout(() => {
    const camStatus = state.diagnosticCameraWorking ? "Working" : "Not detected";
    const camClass = state.diagnosticCameraWorking ? "check-success" : "check-warning";
    const camIcon = state.diagnosticCameraWorking ? "✓" : "⚠";

    log.innerHTML = `
      <div class="checklist-item" style="margin-bottom:6px;">
        <div class="checklist-circle check-success">✓</div>
        <div style="display:flex; justify-content:space-between; width:100%;">
          <span>Microphone</span>
          <span style="font-weight:700; color:#137333;">Working</span>
        </div>
      </div>
      <div class="checklist-item" style="margin-bottom:6px;">
        <div class="checklist-circle ${camClass}">${camIcon}</div>
        <div style="display:flex; justify-content:space-between; width:100%;">
          <span>Camera</span>
          <span style="font-weight:700; color:${state.diagnosticCameraWorking ? '#137333' : '#c5221f'};">${camStatus}</span>
        </div>
      </div>
      <div class="checklist-item" style="margin-bottom:6px;">
        <div class="checklist-circle check-success">✓</div>
        <div style="display:flex; justify-content:space-between; width:100%;">
          <span>Speakers</span>
          <span style="font-weight:700; color:#137333;">Working</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-circle check-success">✓</div>
        <div style="display:flex; justify-content:space-between; width:100%;">
          <span>Internet Connection</span>
          <span style="font-weight:700; color:#137333;">Good (Latency: 25ms)</span>
        </div>
      </div>
      
      ${!state.diagnosticCameraWorking ? `
        <p style="font-size:11px; opacity:0.8; color:#c5221f; margin-top:8px; line-height:14px; font-style:italic;">
          * Note: You can continue if camera use is optional for this trial.
        </p>
      ` : ''}
    `;
    if (toggleBtn) toggleBtn.style.display = "block";
  }, 1000);
}

window.toggleDiagnosticCamera = function() {
  state.diagnosticCameraWorking = !state.diagnosticCameraWorking;
  const toggleBtn = document.getElementById("diagnostics-toggle-btn");
  if (toggleBtn) {
    toggleBtn.innerText = state.diagnosticCameraWorking ? "Simulate Camera Missing" : "Simulate Camera Working";
  }
  
  // Re-run diagnostics view update
  const log = document.getElementById("diagnostics-log");
  if (log) {
    log.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:center; padding:16px 0;">
        <svg width="20" height="20" class="animate-spin" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
        </svg>
        <span>Re-checking hardware...</span>
      </div>
    `;
  }
  runMockDeviceDiagnostics();
};

// Reschedule Request Modal
window.openRescheduleRequestModal = function(id) {
  const content = `
    <p class="modal-text">Tell us your preferred alternatives and our operations team will review your request shortly.</p>
    
    <div class="form-group" style="text-align:left;">
      <label class="form-label" for="resched-reason">Reason</label>
      <select class="form-input" id="resched-reason" style="height:40px;">
        <option value="Schedule conflict">Schedule conflict</option>
        <option value="Work / school commitment">Work / school commitment</option>
        <option value="Trainer timing does not work">Trainer timing does not work</option>
        <option value="Personal reason">Personal reason</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-group" style="text-align:left;">
      <label class="form-label">Preferred Alternative Days</label>
      <div class="multi-select-row">
        <div class="multi-select-pill active" onclick="toggleMultiSelectPill(this)" data-val="Monday">Mon</div>
        <div class="multi-select-pill active" onclick="toggleMultiSelectPill(this)" data-val="Tuesday">Tue</div>
        <div class="multi-select-pill" onclick="toggleMultiSelectPill(this)" data-val="Wednesday">Wed</div>
        <div class="multi-select-pill active" onclick="toggleMultiSelectPill(this)" data-val="Thursday">Thu</div>
        <div class="multi-select-pill" onclick="toggleMultiSelectPill(this)" data-val="Friday">Fri</div>
        <div class="multi-select-pill" onclick="toggleMultiSelectPill(this)" data-val="Saturday">Sat</div>
        <div class="multi-select-pill" onclick="toggleMultiSelectPill(this)" data-val="Sunday">Sun</div>
      </div>
    </div>

    <div class="form-group" style="text-align:left;">
      <label class="form-label" for="resched-time">Preferred Time Bracket</label>
      <select class="form-input" id="resched-time" style="height:40px;">
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening" selected>Evening</option>
      </select>
    </div>

    <div class="form-group" style="text-align:left;">
      <label class="form-label" for="resched-note">Additional Remarks (Optional)</label>
      <textarea class="form-input" id="resched-note" placeholder="Write any scheduling remarks..." style="height:80px; padding:8px 12px; resize:none;"></textarea>
    </div>

    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="submitRescheduleRequest('${id}')" style="flex:1; height:44px;">Submit Reschedule Request</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Request a Different Time", content);
};

window.toggleMultiSelectPill = function(element) {
  element.classList.toggle("active");
};

window.submitRescheduleRequest = function(id) {
  state.learnerRescheduleRequested[id] = true;
  closeModal();
  showToastAlert("Reschedule request submitted successfully.");
  renderLearnerTrialPage(id);
};

// Cancel Request Modal
window.openCancelRequestModal = function(id) {
  const content = `
    <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Cancel Trial Session?</h3>
    <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">Are you sure you want to request cancellation for this trial class?</p>
    
    <div class="form-group" style="text-align:left;">
      <label class="form-label" for="cancel-req-reason">Reason</label>
      <select class="form-input" id="cancel-req-reason" style="height:40px;">
        <option value="No longer interested">No longer interested</option>
        <option value="Schedule issue">Schedule issue</option>
        <option value="Chose another programme">Chose another programme</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div style="display:flex; gap:12px; margin-top:20px;">
      <button class="btn btn-primary" onclick="submitCancelRequest('${id}')" style="flex:1; height:44px; background-color:var(--color-error); border-color:var(--color-error); color:white;">Submit Cancellation Request</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
    </div>
  `;
  openModal("Request Cancellation", content);
};

window.submitCancelRequest = function(id) {
  state.learnerCancellationRequested[id] = true;
  closeModal();
  showToastAlert("Cancellation request submitted.");
  renderLearnerTrialPage(id);
};

// Ready to Join Dialog Modal
window.openReadyToJoinModal = function(id) {
  const content = `
    <div style="text-align: center; padding: 4px 0;">
      <h3 style="font-family:var(--font-family-headings); font-size:20px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Ready to Join?</h3>
      <p class="modal-text" style="font-size:14px; margin-bottom:20px;">You're about to enter your Spoken English trial with trainer <strong>Ayesha Rahman</strong>.</p>
      
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="closeModal(); window.location.hash='#learner/trials/${id}/classroom';" style="flex:1; height:44px;">Enter Classroom</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Not Yet</button>
      </div>
    </div>
  `;
  openModal("Trial Class Classroom", content);
};

// Classroom Session state repository
state.classroomSession = {
  occurrenceId: null,
  activeSimulatorState: "Pre Join", // Pre Join | Connecting | In Progress | Waiting for Trainer | Waiting for Learner | Reconnecting | Technical Issue | Session Ended | No Show
  userRole: "learner", // learner | trainer
  micMuted: false,
  cameraOff: false,
  screenSharing: false,
  activeRightDrawer: null, // null | 'chat' | 'participants' | 'activity'
  chatMessages: [
    { sender: "Ayesha Rahman", role: "Trainer", text: "Welcome Ali! Can you hear me clearly?", time: "7:01 PM" },
    { sender: "Ali Khan", role: "Learner", text: "Yes, I can hear you.", time: "7:01 PM" }
  ],
  elapsedSeconds: 768, // 12 mins 48 secs
  timerIntervalId: null,
  attendanceEvents: [
    { type: "trainer_joined", participant: "Ayesha Rahman", time: "6:58 PM" },
    { type: "learner_joined", participant: "Ali Khan", time: "7:01 PM" }
  ],
  lateLearnerJoined: false,
  whatsappReminderSent: false,
  cameraHardwareWorking: true
};

window.renderLiveClassroom = function(occurrenceId) {
  state.classroomSession.occurrenceId = occurrenceId;
  const occurrence = state.scheduledOccurrences[occurrenceId] || state.classOccurrences.find(c => c.id === occurrenceId);
  const view = document.getElementById("learner-classroom-view");
  if (!occurrence || !view) {
    window.location.hash = "#";
    return;
  }

  // Setup running timer tick
  if (!state.classroomSession.timerIntervalId) {
    state.classroomSession.timerIntervalId = setInterval(() => {
      // Only tick if session is In Progress
      const curState = state.classroomSession.activeSimulatorState;
      if (curState === "In Progress" || curState === "Waiting for Learner" || curState === "Waiting for Trainer" || curState === "Reconnecting") {
        state.classroomSession.elapsedSeconds++;
        const timerText = document.getElementById("classroom-elapsed-timer");
        if (timerText) {
          timerText.innerText = formatClassroomTimer(state.classroomSession.elapsedSeconds);
        }
      }
    }, 1000);
  }

  const simState = state.classroomSession.activeSimulatorState;
  const userRole = state.classroomSession.userRole;

  let contentHtml = "";

  if (simState === "Pre Join") {
    contentHtml = renderPreJoinScreen(occurrence);
  } else if (simState === "Connecting") {
    contentHtml = renderConnectingScreen();
    // Simulate auto-connect
    setTimeout(() => {
      if (state.classroomSession.activeSimulatorState === "Connecting") {
        state.classroomSession.activeSimulatorState = "In Progress";
        renderLiveClassroom(occurrenceId);
      }
    }, 1500);
  } else if (simState === "Technical Issue") {
    contentHtml = renderTechnicalIssueScreen(occurrence);
  } else if (simState === "Session Ended") {
    contentHtml = renderSessionEndedScreen(occurrence);
  } else {
    // Active classroom stages (In Progress, Waiting for Learner, Waiting for Trainer, Reconnecting, No Show)
    contentHtml = renderActiveClassroomStage(occurrence);
  }

  view.innerHTML = `
    <div class="classroom-frame">
      <!-- Dev simulation controls -->
      <div class="dev-sim-panel" style="margin-bottom:0; border-radius:0; border-left:none; border-right:none; border-top:none; z-index:2300;">
        <span style="color:#e2e8f0; margin-right:4px;">Classroom Simulator:</span>
        <button class="dev-sim-btn ${simState === 'Pre Join' ? 'active' : ''}" onclick="setClsSimState('Pre Join')">Pre Join</button>
        <button class="dev-sim-btn ${simState === 'Connecting' ? 'active' : ''}" onclick="setClsSimState('Connecting')">Connecting</button>
        <button class="dev-sim-btn ${simState === 'In Progress' ? 'active' : ''}" onclick="setClsSimState('In Progress')">Active Stage</button>
        <button class="dev-sim-btn ${simState === 'Waiting for Trainer' ? 'active' : ''}" onclick="setClsSimState('Waiting for Trainer')">Wait-for-Trainer</button>
        <button class="dev-sim-btn ${simState === 'Waiting for Learner' ? 'active' : ''}" onclick="setClsSimState('Waiting for Learner')">Wait-for-Learner</button>
        <button class="dev-sim-btn ${simState === 'Reconnecting' ? 'active' : ''}" onclick="setClsSimState('Reconnecting')">Reconnecting</button>
        <button class="dev-sim-btn ${simState === 'Technical Issue' ? 'active' : ''}" onclick="setClsSimState('Technical Issue')">Tech Failure</button>
        <button class="dev-sim-btn ${simState === 'No Show' ? 'active' : ''}" onclick="setClsSimState('No Show')">No Show Scenario</button>
        <button class="dev-sim-btn ${simState === 'Session Ended' ? 'active' : ''}" onclick="setClsSimState('Session Ended')">Ended Screen</button>
        
        <span style="color:#a0aec0; margin-left:12px; margin-right:4px; font-size:11px; border-left:1px solid #2d3748; padding-left:12px;">Active Role:</span>
        <button class="dev-sim-btn ${userRole === 'learner' ? 'active' : ''}" onclick="setClsRole('learner')">Learner</button>
        <button class="dev-sim-btn ${userRole === 'trainer' ? 'active' : ''}" onclick="setClsRole('trainer')">Trainer</button>
      </div>

      ${contentHtml}
    </div>
  `;
};

// State change helpers
window.setClsSimState = function(newState) {
  state.classroomSession.activeSimulatorState = newState;
  // If ended, clear intervals
  if (newState === "Session Ended") {
    clearInterval(state.classroomSession.timerIntervalId);
    state.classroomSession.timerIntervalId = null;
  }
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

window.setClsRole = function(newRole) {
  state.classroomSession.userRole = newRole;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

// Helper: Format elapsed timer (00:12:48)
function formatClassroomTimer(sec) {
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// 1. Compile Pre-join layout
function renderPreJoinScreen(occurrence) {
  const isCamReady = state.classroomSession.cameraHardwareWorking;
  return `
    <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:var(--spacing-lg); overflow-y:auto;">
      <div class="form-card animate-fade-in" style="width:100%; max-width:850px; padding:var(--spacing-xl); background-color:#121824; border:1px solid #1f293d; border-radius:var(--radius-card); display:grid; grid-template-columns:1fr 1fr; gap:var(--spacing-lg); align-items:center; color:#e2e8f0;">
        
        <!-- Video device preview simulator feed -->
        <div style="background-color:#080b12; border:1px solid #1f293d; border-radius:8px; aspect-ratio:16/9; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; overflow:hidden;">
          ${isCamReady ? `
            <div class="participant-avatar" style="width:70px; height:70px; font-size:22px; margin-bottom:0;">AK</div>
            <div style="font-size:12px; opacity:0.8; margin-top:8px;">Camera Preview Active</div>
          ` : `
            <div style="color:#c5221f; margin-bottom:8px;">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div style="font-size:13px; font-weight:700; color:#c5221f;">Camera not detected</div>
            <div style="font-size:11px; opacity:0.7; max-width:220px; text-align:center; margin-top:2px;">Camera usage is optional. You can still join the class.</div>
          `}
          <div style="position:absolute; bottom:12px; right:12px; display:flex; gap:8px;">
            <button class="btn btn-secondary" onclick="togglePreJoinCam()" style="font-size:9.5px; padding:2px 8px; height:24px; border-radius:4px;">Toggle Camera</button>
          </div>
        </div>

        <!-- Join card text -->
        <div>
          <span style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--color-secondary); letter-spacing:0.05em;">Ready to Join?</span>
          <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:white; margin-top:4px; margin-bottom:8px;">${occurrence.course}</h2>
          
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:var(--spacing-md);">
            <tr style="border-bottom:1px solid #1f293d;"><td style="padding:6px 0; color:var(--color-tertiary);">Assigned Trainer:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Ayesha Rahman</td></tr>
            <tr style="border-bottom:1px solid #1f293d;"><td style="padding:6px 0; color:var(--color-tertiary);">Format Type:</td><td style="padding:6px 0; font-weight:700; text-align:right;">1-to-1 Trial</td></tr>
            <tr style="border-bottom:1px solid #1f293d;"><td style="padding:6px 0; color:var(--color-tertiary);">Session Time:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:00 PM - 7:45 PM PKT</td></tr>
          </table>

          <div style="background-color:#080b12; padding:10px 14px; border-radius:6px; border:1px solid #1f293d; margin-bottom:var(--spacing-md); display:flex; flex-direction:column; gap:4px; font-size:11.5px;">
            <div style="display:flex; justify-content:space-between;"><span>Microphone status:</span><span style="color:#137333; font-weight:700;">✓ Ready</span></div>
            <div style="display:flex; justify-content:space-between;"><span>Camera hardware:</span>${isCamReady ? '<span style="color:#137333; font-weight:700;">✓ Ready</span>' : '<span style="color:#b06000; font-weight:700;">⚠ Optional Mismatch</span>'}</div>
            <div style="display:flex; justify-content:space-between;"><span>Speaker audio:</span><span style="color:#137333; font-weight:700;">✓ Configured</span></div>
          </div>

          <div style="display:flex; gap:var(--spacing-sm);">
            <button class="btn btn-primary" onclick="setClsSimState('Connecting')" style="flex:1; height:42px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest);">Join Classroom</button>
            <button class="btn btn-secondary" onclick="window.location.hash='#learner/trials/${occurrence.id}'" style="flex:1; height:42px;">Go Back</button>
          </div>
        </div>

      </div>
    </div>
  `;
}

window.togglePreJoinCam = function() {
  state.classroomSession.cameraHardwareWorking = !state.classroomSession.cameraHardwareWorking;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

// 2. Compile Connecting spinner layout
function renderConnectingScreen() {
  return `
    <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
      <svg width="48" height="48" class="animate-spin" viewBox="0 0 24 24" fill="none" style="color:var(--color-secondary); margin-bottom:var(--spacing-md);">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
      </svg>
      <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:white;">Connecting to classroom...</h3>
      <p class="modal-text" style="font-size:13px; opacity:0.8; margin-top:4px;">Setting up secure peer credentials...</p>
    </div>
  `;
}

// 3. Compile Technical failure screen layout
function renderTechnicalIssueScreen(occurrence) {
  return `
    <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:var(--spacing-lg);">
      <div class="exception-card animate-fade-in">
        <div style="width:48px; height:48px; background-color:rgba(197, 34, 31, 0.1); color:#c5221f; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:white; margin-bottom:8px;">Connection Problem</h3>
        <p class="modal-text" style="font-size:13.5px; opacity:0.85; margin-bottom:20px; line-height:18px;">
          We're having trouble connecting to the online classroom. Your scheduled trial has not been cancelled. This may be due to temporary network disruption.
        </p>
        <div style="display:flex; gap:12px;">
          <button class="btn btn-primary" onclick="setClsSimState('In Progress')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest);">Retry Connection</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#learner/trials/${occurrence.id}'" style="flex:1; height:40px;">Return to Trial Details</button>
        </div>
      </div>
    </div>
  `;
}

// 4. Compile Active classroom view layout (Cam tiles & drawers)
function renderActiveClassroomStage(occurrence) {
  const session = state.classroomSession;
  const simState = session.activeSimulatorState;
  const isTrainerRole = session.userRole === "trainer";

  // Top Bar Layout
  let topBarHtml = `
    <header class="classroom-topbar">
      <div style="display:flex; align-items:center; gap:var(--spacing-md);">
        <span style="font-family:var(--font-family-headings); font-size:18px; font-weight:900; color:var(--color-secondary); letter-spacing:0.02em;">IHS</span>
        <span style="border-left:1px solid #1f293d; padding-left:12px; font-size:12.5px; font-weight:700; color:#e2e8f0;">
          ${occurrence.course} &middot; <span style="color:var(--color-secondary);">Trial Session</span>
        </span>
      </div>
      
      <div style="display:flex; align-items:center; gap:var(--spacing-md);">
        <span style="font-size:11.5px; font-family:monospace; color:var(--color-tertiary); background:#080b12; padding:3px 8px; border-radius:4px; border:1px solid #1f293d;">
          ID: ${occurrence.id}
        </span>
        <span class="badge-status status-ready" style="background-color:rgba(19, 115, 51, 0.1); color:#137333; border-color:rgba(19, 115, 51, 0.2);">
          In Progress
        </span>
      </div>

      <div style="display:flex; align-items:center; gap:var(--spacing-md);">
        <div style="display:flex; flex-direction:column; text-align:right;">
          <span style="font-size:13px; font-weight:800; color:white;" id="classroom-elapsed-timer">${formatClassroomTimer(session.elapsedSeconds)}</span>
          <span style="font-size:9.5px; opacity:0.8; text-transform:uppercase; letter-spacing:0.03em;">Session Timer</span>
        </div>
        
        ${isTrainerRole ? `
          <button class="btn btn-primary" onclick="openEndSessionModal('${occurrence.id}')" style="height:34px; font-size:12px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">End Session</button>
        ` : `
          <button class="btn btn-primary" onclick="openLeaveClassroomModal('${occurrence.id}')" style="height:34px; font-size:12px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Leave</button>
        `}
      </div>
    </header>
  `;

  // Drawers sidebars
  let sideDrawerHtml = "";
  if (session.activeRightDrawer === "chat") {
    sideDrawerHtml = `
      <aside class="classroom-drawer animate-slide-in">
        <div class="classroom-drawer-header">
          <h4 style="font-family:var(--font-family-headings); font-size:13.5px; font-weight:800; color:white;">Class Chat</h4>
          <button onclick="toggleClsDrawer(null)" style="background:none; border:none; color:var(--color-tertiary); cursor:pointer; font-size:14px;">✕</button>
        </div>
        <div class="classroom-chat-messages" id="chat-messages-container">
          ${session.chatMessages.map(m => {
            const isSelf = m.sender === (isTrainerRole ? "Ayesha Rahman" : "Ali Khan");
            return `
              <div class="chat-bubble ${isSelf ? 'student' : 'instructor'}">
                <div style="font-size:9.5px; font-weight:700; margin-bottom:2px; opacity:0.8;">${m.sender} (${m.role})</div>
                <div>${m.text}</div>
                <div style="font-size:8px; opacity:0.6; text-align:right; margin-top:2px;">${m.time}</div>
              </div>
            `;
          }).join("")}
        </div>
        <div style="padding:var(--spacing-md); border-top:1px solid #1f293d; display:flex; gap:6px;">
          <input type="text" id="chat-input-field" placeholder="Type a message..." style="flex:1; background-color:#080b12; border:1px solid #1f293d; border-radius:4px; padding:6px 10px; color:white; font-size:12.5px;" onkeypress="handleChatEnter(event, '${occurrence.id}')">
          <button class="btn btn-primary" onclick="sendClsChatMessage('${occurrence.id}')" style="height:30px; font-size:11px; padding:0 12px; background:var(--color-secondary); color:#000;">Send</button>
        </div>
      </aside>
    `;
  } else if (session.activeRightDrawer === "participants") {
    sideDrawerHtml = `
      <aside class="classroom-drawer animate-slide-in">
        <div class="classroom-drawer-header">
          <h4 style="font-family:var(--font-family-headings); font-size:13.5px; font-weight:800; color:white;">Participants (${simState === 'Waiting for Learner' ? '1' : '2'})</h4>
          <button onclick="toggleClsDrawer(null)" style="background:none; border:none; color:var(--color-tertiary); cursor:pointer; font-size:14px;">✕</button>
        </div>
        <div style="padding:var(--spacing-md); display:flex; flex-direction:column; gap:12px;">
          <!-- Trainer -->
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:26px; height:26px; border-radius:50%; background:#1f293d; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:10px; color:var(--color-secondary);">AR</div>
              <div>
                <div style="font-weight:700; color:white;">Ayesha Rahman</div>
                <div style="font-size:10px; opacity:0.8;">Trainer</div>
              </div>
            </div>
            <span class="badge-integration int-provisioned" style="font-size:9.5px; padding:1px 6px;">Connected</span>
          </div>

          <!-- Learner -->
          ${simState !== 'Waiting for Learner' ? `
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:26px; height:26px; border-radius:50%; background:#1f293d; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:10px; color:var(--color-secondary);">AK</div>
                <div>
                  <div style="font-weight:700; color:white;">Ali Khan</div>
                  <div style="font-size:10px; opacity:0.8;">Learner</div>
                </div>
              </div>
              <span class="badge-integration ${simState === 'Reconnecting' ? 'int-provisioning' : 'int-provisioned'}" style="font-size:9.5px; padding:1px 6px;">
                ${simState === 'Reconnecting' ? 'Reconnecting' : 'Connected'}
              </span>
            </div>
          ` : ''}
        </div>
      </aside>
    `;
  } else if (session.activeRightDrawer === "activity" && isTrainerRole) {
    sideDrawerHtml = `
      <aside class="classroom-drawer animate-slide-in" style="width:280px;">
        <div class="classroom-drawer-header">
          <h4 style="font-family:var(--font-family-headings); font-size:13.5px; font-weight:800; color:white;">Trial Activity Guide</h4>
          <button onclick="toggleClsDrawer(null)" style="background:none; border:none; color:var(--color-tertiary); cursor:pointer; font-size:14px;">✕</button>
        </div>
        <div style="padding:var(--spacing-md); font-size:12.5px; display:flex; flex-direction:column; gap:var(--spacing-md); overflow-y:auto;">
          <div>
            <h5 style="font-weight:800; color:var(--color-secondary); margin-bottom:4px;">1. Introduction (5m)</h5>
            <p class="modal-text" style="font-size:12px; margin-bottom:0;">Introduce yourself, share program structure briefly, set a warm tone.</p>
          </div>
          <div>
            <h5 style="font-weight:800; color:var(--color-secondary); margin-bottom:4px;">2. Assessment (15m)</h5>
            <p class="modal-text" style="font-size:12px; margin-bottom:0;">Have learner introduce themselves. Rate fluency, grammatical control, and vocabulary range.</p>
          </div>
          <div>
            <h5 style="font-weight:800; color:var(--color-secondary); margin-bottom:4px;">3. Trial Activity (15m)</h5>
            <p class="modal-text" style="font-size:12px; margin-bottom:0;">Click <strong>Share Screen</strong> to display the trial speaking card prompt.</p>
          </div>
          <div>
            <h5 style="font-weight:800; color:var(--color-secondary); margin-bottom:4px;">4. Feedback & Next Steps (10m)</h5>
            <p class="modal-text" style="font-size:12px; margin-bottom:0;">Share positive takeaways, outline leveling guidelines, answer program options.</p>
          </div>
        </div>
      </aside>
    `;
  }

  // Active Stage compilation (Trainer & Learner side-by-side or screen share stage)
  let stageHtml = "";
  if (simState === "Waiting for Trainer" && !isTrainerRole) {
    // Learner is joined, trainer is missing
    stageHtml = `
      <div class="waiting-overlay">
        <div class="exception-card animate-fade-in">
          <div style="width:48px; height:48px; background-color:rgba(240, 217, 122, 0.1); color:var(--color-secondary); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:white; margin-bottom:8px;">Waiting for Trainer</h3>
          <p class="modal-text" style="font-size:13.5px; opacity:0.85; margin-bottom:20px; line-height:18px;">
            Your trainer, <strong>Ayesha Rahman</strong>, has not joined the room yet. Please remain in the classroom. The session will automatically begin when they arrive.
          </p>
          <div style="display:flex; gap:12px;">
            <button class="btn btn-secondary" onclick="openDirectPreviewModal('Academic Support Telegram')" style="flex:1; height:40px; border-color:var(--color-secondary); color:var(--color-secondary);">Need Help? Contact Support</button>
          </div>
        </div>
      </div>
    `;
  } else if (simState === "Waiting for Learner" && isTrainerRole) {
    // Trainer is joined, learner is missing
    stageHtml = `
      <div class="waiting-overlay">
        <div class="exception-card animate-fade-in" style="max-width:480px;">
          <div style="width:48px; height:48px; background-color:rgba(240, 217, 122, 0.1); color:var(--color-secondary); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:white; margin-bottom:8px;">Waiting for Learner</h3>
          <p class="modal-text" style="font-size:13.5px; opacity:0.85; margin-bottom:20px; line-height:18px;">
            <strong>Ali Khan</strong> has not joined the classroom yet. You are connected.
          </p>
          <div style="display:flex; gap:12px; justify-content:center;">
            <button class="btn btn-primary" id="wait-reminder-btn" onclick="sendClassroomWhatsAppReminder()" style="height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
              ${session.whatsappReminderSent ? 'Reminder Queued' : 'Send WhatsApp Reminder'}
            </button>
            <button class="btn btn-secondary" onclick="setClsSimState('In Progress')" style="height:40px;">Simulate Learner Joining</button>
          </div>
        </div>
      </div>
    `;
  } else if (simState === "No Show" && isTrainerRole) {
    // Learner no show layout
    stageHtml = `
      <div class="waiting-overlay">
        <div class="exception-card animate-fade-in">
          <div style="width:48px; height:48px; background-color:rgba(197, 34, 31, 0.1); color:#c5221f; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:white; margin-bottom:8px;">Learner Did Not Join</h3>
          <p class="modal-text" style="font-size:13.5px; opacity:0.85; margin-bottom:20px; line-height:18px;">
            The scheduled trial window has passed. There are no join events detected from Ali Khan.
          </p>
          
          <div style="background:#080b12; padding:10px; border-radius:6px; border:1px solid #1f293d; text-align:left; font-size:12px; margin-bottom:20px;">
            <strong>Session Evidence:</strong><br>
            Trainer joined: 6:58 PM<br>
            Learner: No join event
          </div>

          <div style="display:flex; gap:12px;">
            <button class="btn btn-primary" onclick="openEndSessionModal('${occurrence.id}')" style="flex:1; height:40px; background-color:#c5221f; border-color:#c5221f; color:white;">End Session</button>
            <button class="btn btn-secondary" onclick="setClsSimState('In Progress')" style="flex:1; height:40px;">Back to Stage</button>
          </div>
        </div>
      </div>
    `;
  } else {
    // Normal Active feeds stage
    const isTrainerActiveSpeaker = session.elapsedSeconds % 10 < 5;
    
    // Check screen sharing layouts
    if (session.screenSharing) {
      stageHtml = `
        <div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; max-width:1100px;">
          <!-- Screen Share Area -->
          <div class="shared-screen-stage">
            <div class="shared-screen-header">
              <span>Trainer Ayesha Rahman is sharing their screen</span>
              <span>Spoken English Bootcamp Presentation</span>
            </div>
            
            <div style="padding:var(--spacing-xl); text-align:center; max-width:520px; color:#fff;">
              <h3 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-secondary); margin-bottom:var(--spacing-md);">Spoken English — Trial Activity</h3>
              <h4 style="font-size:18px; font-weight:700; margin-bottom:12px; text-decoration:underline;">Introduce Yourself</h4>
              <ol style="text-align:left; line-height:26px; font-size:14.5px; padding-left:24px;">
                <li>Tell me your name</li>
                <li>Tell me about your studies/work</li>
                <li>Describe something you enjoy doing</li>
                <li>Ask your trainer one question</li>
              </ol>
            </div>
          </div>

          <!-- Small stacked participant cams underneath -->
          <div style="display:flex; gap:12px; height:120px; width:100%; justify-content:center;">
            <!-- Trainer Tile -->
            <div class="participant-video-tile ${isTrainerActiveSpeaker ? 'active-speaker' : ''}" style="height:100%; max-width:210px; aspect-ratio:16/9;">
              <div class="participant-avatar" style="width:40px; height:40px; font-size:14px; margin-bottom:0;">AR</div>
              <div class="participant-info" style="font-size:10px; padding:2px 6px; bottom:6px; left:6px;">
                <span>Ayesha Rahman</span>
                <span class="participant-mic-status">🎙</span>
              </div>
            </div>
            
            <!-- Learner Tile -->
            <div class="participant-video-tile ${!isTrainerActiveSpeaker ? 'active-speaker' : ''} ${session.micMuted ? 'muted' : ''}" style="height:100%; max-width:210px; aspect-ratio:16/9;">
              ${session.cameraOff ? `
                <div class="participant-avatar" style="width:40px; height:40px; font-size:14px; margin-bottom:0;">AK</div>
              ` : `
                <!-- Mock active feed indicator -->
                <div style="width:100%; height:100%; background-color:#1c2438; display:flex; align-items:center; justify-content:center; font-size:11px; color:#a0aec0;">
                  Live Video Feed
                </div>
              `}
              <div class="participant-info" style="font-size:10px; padding:2px 6px; bottom:6px; left:6px;">
                <span>Ali Khan</span>
                <span class="participant-mic-status ${session.micMuted ? 'muted' : ''}">🎙</span>
              </div>
              
              <!-- Reconnecting overlay -->
              ${simState === 'Reconnecting' ? `
                <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(8,11,18,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                  <span style="font-size:9px; color:var(--color-secondary); font-weight:800;" class="animate-pulse">Reconnecting...</span>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    } else {
      // Side-by-side equal sizing cams grid
      stageHtml = `
        <div class="classroom-tiles-grid">
          <!-- Trainer Cam Tile -->
          <div class="participant-video-tile ${isTrainerActiveSpeaker ? 'active-speaker' : ''}">
            <div class="participant-avatar">AR</div>
            <div class="participant-info">
              <span style="background:var(--color-secondary); color:#000; font-size:8px; font-weight:800; padding:1px 4px; border-radius:2px; text-transform:uppercase;">Trainer</span>
              <span>Ayesha Rahman</span>
              <span class="participant-mic-status">🎙</span>
              <span style="font-size:10.5px; opacity:0.8;">Connected</span>
            </div>
          </div>

          <!-- Learner Cam Tile -->
          <div class="participant-video-tile ${!isTrainerActiveSpeaker ? 'active-speaker' : ''} ${session.micMuted ? 'muted' : ''}">
            ${session.cameraOff ? `
              <div class="participant-avatar">AK</div>
            ` : `
              <!-- Mock active feed indicator -->
              <div style="width:100%; height:100%; background-color:#1c2438; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#a0aec0;">
                <span style="font-size:14px; font-weight:800; color:white;">Ali Khan</span>
                <span style="font-size:11px; opacity:0.8; margin-top:4px;">Live Learner Stream</span>
              </div>
            `}
            <div class="participant-info">
              <span style="background:#5c6b8c; color:#fff; font-size:8px; font-weight:800; padding:1px 4px; border-radius:2px; text-transform:uppercase;">Learner</span>
              <span>Ali Khan</span>
              <span class="participant-mic-status ${session.micMuted ? 'muted' : ''}">🎙</span>
              <span style="font-size:10.5px; opacity:0.8;">Connected</span>
            </div>

            <!-- Reconnecting spinner overlay -->
            ${simState === 'Reconnecting' ? `
              <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(8,11,18,0.88); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
                <svg width="24" height="24" class="animate-spin" viewBox="0 0 24 24" fill="none" style="color:var(--color-secondary); margin-bottom:4px;">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"></circle>
                </svg>
                <span style="font-size:11px; color:var(--color-secondary); font-weight:800;">Reconnecting...</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
  }

  // Toolbar controls
  const toolbarHtml = `
    <footer class="classroom-toolbar">
      <!-- Mute Mic button -->
      <button class="toolbar-btn ${session.micMuted ? 'disabled-btn' : ''}" onclick="toggleClsMic()" title="Mute/Unmute Mic">
        ${session.micMuted ? `
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
        ` : `
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
        `}
      </button>

      <!-- Toggle Cam button -->
      <button class="toolbar-btn ${session.cameraOff ? 'disabled-btn' : ''}" onclick="toggleClsCamera()" title="Camera On/Off">
        ${session.cameraOff ? `
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
        ` : `
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3-2.673a8.217 8.217 0 00-3-2.427M9 5.4a8.217 8.217 0 00-3 2.427M3.75 18a8.25 8.25 0 0116.5 0" /></svg>
        `}
      </button>

      <!-- Show Chat Drawer button -->
      <button class="toolbar-btn ${session.activeRightDrawer === 'chat' ? 'active' : ''}" onclick="toggleClsDrawer('chat')" title="Classroom Chat">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.12 2.83 2.62 2.95l1.62.13a2.25 2.25 0 012.01 2.22l.08 1.05c.03.4.4.63.75.46l3.4-1.7a2.25 2.25 0 011.01-.24h3.01A2.25 2.25 0 0021 14.25v-9A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v6.52c0 .24.08.47.25.64z" /></svg>
      </button>

      <!-- Show Participants Drawer button -->
      <button class="toolbar-btn ${session.activeRightDrawer === 'participants' ? 'active' : ''}" onclick="toggleClsDrawer('participants')" title="Participants List">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
      </button>

      <!-- Trainer Only screen share button -->
      ${isTrainerRole ? `
        <button class="toolbar-btn ${session.screenSharing ? 'active' : ''}" onclick="toggleClsScreenShare()" title="Share Screen">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.75V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>
        </button>
        
        <!-- Trainer Activity sheet -->
        <button class="toolbar-btn ${session.activeRightDrawer === 'activity' ? 'active' : ''}" onclick="toggleClsDrawer('activity')" title="Activity Guide">
          💡
        </button>
      ` : ''}
    </footer>
  `;

  return `
    ${topBarHtml}
    <div class="classroom-main">
      <main class="classroom-stage">
        ${stageHtml}
      </main>
      ${sideDrawerHtml}
    </div>
    ${toolbarHtml}
  `;
}

// Controller functions
window.toggleClsMic = function() {
  state.classroomSession.micMuted = !state.classroomSession.micMuted;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

window.toggleClsCamera = function() {
  state.classroomSession.cameraOff = !state.classroomSession.cameraOff;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

window.toggleClsDrawer = function(drawer) {
  state.classroomSession.activeRightDrawer = drawer;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

window.toggleClsScreenShare = function() {
  state.classroomSession.screenSharing = !state.classroomSession.screenSharing;
  renderLiveClassroom(state.classroomSession.occurrenceId);
};

// Send Chat messages in classroom
window.sendClsChatMessage = function(occurrenceId) {
  const input = document.getElementById("chat-input-field");
  if (!input || !input.value.trim()) return;

  const nowTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const isTrainer = state.classroomSession.userRole === "trainer";

  state.classroomSession.chatMessages.push({
    sender: isTrainer ? "Ayesha Rahman" : "Ali Khan",
    role: isTrainer ? "Trainer" : "Learner",
    text: input.value.trim(),
    time: nowTime
  });

  input.value = "";
  renderLiveClassroom(occurrenceId);

  // Auto scroll chat
  setTimeout(() => {
    const container = document.getElementById("chat-messages-container");
    if (container) container.scrollTop = container.scrollHeight;
  }, 100);
};

window.handleChatEnter = function(event, occurrenceId) {
  if (event.key === "Enter") {
    sendClsChatMessage(occurrenceId);
  }
};

// Wait reminder trigger
window.sendClassroomWhatsAppReminder = function() {
  state.classroomSession.whatsappReminderSent = true;
  const btn = document.getElementById("wait-reminder-btn");
  if (btn) {
    btn.innerText = "Reminder Queued";
    btn.disabled = true;
  }
  showToastAlert("WhatsApp reminder alert queued for Ali Khan.");
};

// 5. Compile Learner Leave / Exit screen template
function renderSessionEndedScreen(occurrence) {
  const isTrainer = state.classroomSession.userRole === "trainer";
  
  if (isTrainer) {
    // Trainer exit page - displays evidence summary logs and submits post-class reports
    return `
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:var(--spacing-lg); overflow-y:auto;">
        <div class="form-card animate-fade-in" style="width:100%; max-width:620px; padding:var(--spacing-xl); background-color:#121824; border:1px solid #1f293d; border-radius:var(--radius-card); text-align:center; color:#e2e8f0;">
          <div style="width:56px; height:56px; background-color:rgba(19, 115, 51, 0.1); color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; border:1.5px solid rgba(19, 115, 51, 0.2);">
            ✓
          </div>
          <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:white; margin-bottom:4px;">Trial Session Ended</h2>
          <p class="modal-text" style="font-size:14px; margin-bottom:20px; color:var(--color-tertiary);">Occurrence OCC-TRIAL-001 has been moved to status: <strong>Awaiting Report</strong>.</p>
          
          <div style="text-align:left; background-color:#080b12; border:1px solid #1f293d; border-radius:8px; padding:16px; margin-bottom:24px;">
            <h4 style="font-family:var(--font-family-headings); font-size:13px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; border-bottom:1px solid #1f293d; padding-bottom:6px; margin-bottom:10px;">Session Evidence Summary</h4>
            <div style="font-size:12.5px; display:flex; flex-direction:column; gap:6px;">
              <div><strong>Trainer joined:</strong> 6:58 PM PKT</div>
              <div><strong>Learner joined:</strong> 7:01 PM PKT</div>
              <div><strong>Learner left:</strong> 7:44 PM PKT</div>
              <div><strong>Connected Duration:</strong> 43 minutes</div>
              <div><strong>Evidence source:</strong> Daily.co Video Room API</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; border-top:1px solid #1f293d; padding-top:6px;">
                <span>Final Attendance Reconciliation:</span>
                <span class="badge-status status-ready" style="font-size:9.5px; padding:1px 6px;">Awaiting Reconciliation</span>
              </div>
            </div>
          </div>

          <p style="font-size:12px; opacity:0.8; margin-bottom:20px; font-style:italic; line-height:16px;">
            * Important: Provider connection metrics act as evidence logs. The final approved attendance state (Present, Late, Absent) is reconciled after you submit the trial report.
          </p>

          <button class="btn btn-primary" onclick="goToSubmitReportPage('${occurrence.id}')" style="width:100%; height:44px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
            Submit Trial Report
          </button>
        </div>
      </div>
    `;
  } else {
    // Learner Left page
    return `
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:var(--spacing-lg); overflow-y:auto;">
        <div class="form-card animate-fade-in" style="width:100%; max-width:550px; padding:var(--spacing-xl); background-color:#121824; border:1px solid #1f293d; border-radius:var(--radius-card); text-align:center; color:#e2e8f0;">
          <div style="width:56px; height:56px; background-color:rgba(240, 217, 122, 0.1); color:var(--color-secondary); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; border:1.5px solid rgba(240, 217, 122, 0.2);">
            ✓
          </div>
          <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:white; margin-bottom:4px;">You Left the Trial</h2>
          <p class="modal-text" style="font-size:14px; margin-bottom:20px; color:var(--color-tertiary);">Thank you for attending your Spoken English introductory trial session.</p>

          <table style="width:100%; text-align:left; font-size:12.5px; border-collapse:collapse; margin-bottom:24px; background-color:#080b12; border:1px solid #1f293d; border-radius:6px;">
            <tr style="border-bottom:1px solid #1f293d;"><td style="padding:10px; color:var(--color-tertiary);">Assigned Trainer:</td><td style="padding:10px; font-weight:700; text-align:right;">Ayesha Rahman</td></tr>
            <tr><td style="padding:10px; color:var(--color-tertiary);">Trial Program:</td><td style="padding:10px; font-weight:700; text-align:right;">Spoken English Trial</td></tr>
          </table>

          <p style="font-size:12.5px; opacity:0.85; margin-bottom:24px; line-height:18px;">
            Your trainer will now complete the trial assessment report. Our operations team will reconcile attendance and reach out to you via WhatsApp shortly to guide you through registration next steps.
          </p>

          <button class="btn btn-secondary" onclick="window.location.hash='#learner/trials/${occurrence.id}'" style="width:100%; height:44px; font-weight:700;">
            Return to Trial Details
          </button>
        </div>
      </div>
    `;
  }
}

// Redirect to Submit report placeholder route
window.goToSubmitReportPage = function(occurrenceId) {
  // Clear layout variables
  state.classroomSession.activeSimulatorState = "Pre Join";
  state.classroomSession.elapsedSeconds = 768;
  if (occurrenceId && (occurrenceId.startsWith("CLASS-") || occurrenceId.startsWith("OCC-CLASS-"))) {
    window.location.hash = `#trainer/classes/${occurrenceId}/report`;
  } else {
    window.location.hash = `#trainer/trials/${occurrenceId}/report`;
  }
};

// Modal Leave prompt
window.openLeaveClassroomModal = function(occurrenceId) {
  const content = `
    <div style="text-align: center; padding: 4px 0;">
      <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Leave Classroom?</h3>
      <p class="modal-text" style="font-size:13.5px; margin-bottom:20px;">Your trial session is still in progress. Are you sure you want to disconnect?</p>
      
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmLeaveClassroom('${occurrenceId}')" style="flex:1; height:44px; background-color:#c5221f; border-color:#c5221f; color:white;">Leave Classroom</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Stay</button>
      </div>
    </div>
  `;
  openModal("Confirm Leave", content);
};

window.confirmLeaveClassroom = function(occurrenceId) {
  closeModal();
  setClsSimState("Session Ended");
};

// Modal End Session prompt (Trainer only)
window.openEndSessionModal = function(occurrenceId) {
  const content = `
    <div style="text-align: center; padding: 4px 0;">
      <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">End Trial Session?</h3>
      <p class="modal-text" style="font-size:13.5px; margin-bottom:20px;">Ending the live session will close the room for all participants and move the occurrence status to <strong>Awaiting Report</strong>.</p>
      
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmEndSession('${occurrenceId}')" style="flex:1; height:44px; background-color:#c5221f; border-color:#c5221f; color:white;">End Session</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Continue Class</button>
      </div>
    </div>
  `;
  openModal("Confirm End Session", content);
};

window.confirmEndSession = function(occurrenceId) {
  closeModal();
  setClsSimState("Session Ended");
};

// Toast notification helper
function showToastAlert(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.position = "fixed";
    container.style.bottom = "24px";
    container.style.right = "24px";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "8px";
    document.body.appendChild(container);
  }
  
  const toast = document.createElement("div");
  toast.className = "toast-alert animate-fade-in";
  toast.style.backgroundColor = "var(--color-inverse-surface)";
  toast.style.color = "var(--color-inverse-on-surface)";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "6px";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.fontSize = "13.5px";
  toast.style.fontWeight = "600";
  toast.style.border = "1px solid var(--color-outline-variant)";
  toast.innerText = message;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ==========================================================================
// Screen 08 - Trainer Post-Trial Report Database & Views
// ==========================================================================

state.trainerReports = {
  "OCC-TRIAL-001": {
    id: "REPORT-TRIAL-001",
    occurrenceId: "OCC-TRIAL-001",
    trialRequestId: "TRIAL-001",
    trainer: "Ayesha Rahman",
    learner: "Ali Khan",
    course: "Spoken English Bootcamp",
    reportStatus: "Draft", // Draft | Submitted | Correction Requested | Accepted
    deliveryReviewStatus: "Pending", // Pending | Approved | Correction Requested
    version: 1,
    isEditingCorrection: false,
    
    // Core report fields
    mainTopic: "Introductions, speaking confidence and pronunciation",
    topicsCovered: [
      "Introductions and greetings",
      "Everyday vocabulary",
      "Basic sentence formation",
      "Speaking confidence activity"
    ],
    syllabusCoverage: {
      "Introduction to Spoken English": "Covered",
      "Greetings & Introductions": "Covered",
      "Everyday Vocabulary": "Partially Covered"
    },
    progressNotes: "Ali understood basic instructions well and participated actively. He can form simple sentences but hesitates during spontaneous conversation.",
    learnerFeedback: {
      strengths: "Good listening comprehension and willingness to participate.",
      improvements: "Speaking confidence, pronunciation and sentence fluency.",
      recommendations: "Continue daily speaking practice and focus on forming complete sentences."
    },
    trialAssessment: {
      observedLevel: "Beginner",
      readiness: "Ready to Continue",
      assessmentNote: "Beginner-level live course appears appropriate based on speaking confidence and vocabulary."
    },
    homework: {
      enabled: true,
      title: "Introduce Yourself Practice",
      instructions: "Prepare a 1-minute introduction about yourself, your work/studies and one hobby."
    },
    resources: [
      { name: "Basic Speaking Practice PDF", type: "PDF", attached: true },
      { name: "Pronunciation Exercise Audio", type: "Audio", attached: true },
      { name: "Conversational Starters List", type: "PDF", attached: false }
    ],
    generalNotes: "Session completed smoothly. Learner was engaged and asked about weekday evening classes.",
    privateNotes: "Learner appears nervous initially but becomes more confident after guided prompts.",
    sessionIssues: "No issues", // No issues | Learner connection issue | Trainer connection issue | Audio issue | Video issue | Classroom/provider issue | Other
    sessionIssuesDetails: "",

    // Correction history repository
    operationsNote: "Please clarify the learner's attendance interruption and update the learner progress notes.",
    proposedAttendance: null,
    attendanceCorrectionReason: "",
    history: [
      { time: "13 Aug · 7:46 PM", text: "Occurrence moved to Awaiting Report" }
    ],
    previousVersion: null
  },
  "CLASS-001": {
    id: "REPORT-CLASS-001",
    occurrenceId: "CLASS-001",
    enrolmentId: "ENR-001",
    membershipId: "MEM-TERM-001",
    trainer: "Ayesha Rahman",
    learner: "Ali Khan",
    course: "Spoken English",
    level: "Beginner",
    classNumber: "1 of 12",
    date: "18 Aug 2026",
    time: "7:00 PM – 7:45 PM",
    duration: "45 min",
    format: "1-to-1",
    classType: "Regular Paid Class",
    reportStatus: "Submitted", // Submitted (pre-seeded for Screen 18 demo)
    deliveryReviewStatus: "Pending",
    version: 1,
    isEditingCorrection: false,

    // Core report fields (pre-filled for Screen 18 ops review)
    mainTopic: "Greetings, introductions and simple everyday conversation",
    topicsCovered: ["Greetings", "Introductions", "Everyday vocabulary", "Pronunciation"],
    syllabusCoverage: {
      "Greetings & Introductions": "Covered",
      "Basic Sentence Formation": "Partially Covered",
      "Everyday Vocabulary": "Covered",
      "Pronunciation Practice": "Covered",
      "Speaking Confidence": "In Progress"
    },
    learningObjectives: {
      "Introduce themselves clearly": "Achieved",
      "Use greetings appropriately": "Achieved",
      "Form basic sentences": "Partially Achieved",
      "Speak without prompts": "Needs Practice"
    },
    progressNotes: "Ali participated actively and showed good understanding of greetings and simple introductions. He still hesitates when forming longer sentences without prompts.",
    learnerFeedback: {
      strengths: "Good listening comprehension and willingness to speak.",
      improvements: "Sentence fluency, pronunciation consistency and speaking without prompts.",
      recommendations: "Good first class. Continue practising short introductions aloud and focus on speaking slowly and clearly."
    },
    homework: {
      enabled: true,
      title: "Introduce Yourself Practice",
      instructions: "Prepare a 60–90 second spoken introduction including your name, work/study background, interests and one personal goal.",
      dueDate: "Before Class 2",
      type: "Speaking Practice"
    },
    resources: [
      { name: "Beginner Speaking Guide", type: "PDF", attached: true },
      { name: "Pronunciation Basics", type: "Audio", attached: true },
      { name: "Introduction Vocabulary Sheet", type: "Worksheet", attached: true }
    ],
    generalNotes: "Learner is motivated and engaged. Recommend continuing with structured greetings exercises in Class 2.",
    privateNotes: "Learner becomes less confident when asked unscripted questions. More guided speaking practice may help.",
    nextClassPlan: "Basic sentence formation and common everyday phrases.",
    sessionIssues: "Learner Connection Issue",
    sessionIssuesDetails: "Learner disconnected for approximately three minutes and rejoined.",

    // Correction/attendance fields
    operationsNote: "",
    proposedAttendance: null,
    attendanceCorrectionReason: "",

    // Publication flags (set true on delivery approval)
    feedbackPublished: false,
    homeworkPublished: false,

    history: [
      { time: "18 Aug · 7:45 PM", text: "Class ended. Reconciled Attendance outcome: Present (40 minutes connected)" },
      { time: "18 Aug · 7:53 PM", text: "Report v1 submitted by Ayesha Rahman to Operations for review" }
    ],
    previousVersion: null
  }
};

window.renderTrainerReportForm = function(occurrenceId) {
  const reportView = document.getElementById("trainer-report-view");
  if (!reportView) return;

  // Initialize report if not present
  if (!state.trainerReports[occurrenceId]) {
    const occurrence = state.scheduledOccurrences[occurrenceId];
    state.trainerReports[occurrenceId] = {
      id: `REPORT-TRIAL-${Math.floor(100 + Math.random() * 900)}`,
      occurrenceId: occurrenceId,
      trialRequestId: occurrence ? occurrence.trialRequestId : "TRIAL-001",
      trainer: occurrence ? occurrence.trainer : "Ayesha Rahman",
      learner: occurrence ? occurrence.learner : "Ali Khan",
      course: occurrence ? occurrence.course : "Spoken English Bootcamp",
      reportStatus: "Draft",
      deliveryReviewStatus: "Pending",
      version: 1,
      isEditingCorrection: false,
      mainTopic: "",
      topicsCovered: [],
      syllabusCoverage: {
        "Introduction to Spoken English": "Not Covered",
        "Greetings & Introductions": "Not Covered",
        "Everyday Vocabulary": "Not Covered"
      },
      progressNotes: "",
      learnerFeedback: { strengths: "", improvements: "", recommendations: "" },
      trialAssessment: { observedLevel: "Beginner", readiness: "Ready to Continue", assessmentNote: "" },
      homework: { enabled: false, title: "", instructions: "" },
      resources: [
        { name: "Basic Speaking Practice PDF", type: "PDF", attached: false },
        { name: "Pronunciation Exercise Audio", type: "Audio", attached: false }
      ],
      generalNotes: "",
      privateNotes: "",
      sessionIssues: "No issues",
      sessionIssuesDetails: "",
      history: [{ time: "13 Aug · 7:46 PM", text: "Occurrence moved to Awaiting Report" }]
    };
  }

  const report = state.trainerReports[occurrenceId];
  const isReadOnly = report.reportStatus === "Submitted" || (report.reportStatus === "Correction Requested" && !report.isEditingCorrection);
  const isCorrectionMode = report.reportStatus === "Correction Requested" && report.isEditingCorrection;

  // Build topics list tags
  const topicsHtml = report.topicsCovered.map((t, idx) => `
    <span class="tag-pill">
      ${t}
      ${!isReadOnly ? `<button class="tag-remove-btn" onclick="removeReportTopic('${occurrenceId}', ${idx})">✕</button>` : ''}
    </span>
  `).join("");

  // Syllabus list
  const syllabusItems = [
    "Introduction to Spoken English",
    "Greetings & Introductions",
    "Everyday Vocabulary"
  ];
  const syllabusHtml = syllabusItems.map(item => {
    const val = report.syllabusCoverage[item] || "Not Covered";
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed var(--color-outline-variant);">
        <span style="font-size:13.5px; font-weight:600; color:var(--color-on-tertiary-fixed);">${item}</span>
        <div class="segmented-control">
          <button class="segmented-btn ${val === 'Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setSyllabusCoverage('${occurrenceId}', '${item}', 'Covered')">Covered</button>
          <button class="segmented-btn ${val === 'Partially Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setSyllabusCoverage('${occurrenceId}', '${item}', 'Partially Covered')">Partially</button>
          <button class="segmented-btn ${val === 'Not Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setSyllabusCoverage('${occurrenceId}', '${item}', 'Not Covered')">Not Covered</button>
        </div>
      </div>
    `;
  }).join("");

  // Resources checkboxes list
  const resourcesHtml = report.resources.map((res, idx) => `
    <label style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--color-on-surface-variant); cursor:pointer;">
      <input type="checkbox" style="accent-color:var(--color-secondary);" ${res.attached ? 'checked' : ''} ${isReadOnly ? 'disabled' : ''} onchange="toggleReportResource('${occurrenceId}', ${idx})">
      <span>${res.name} <span style="font-size:10.5px; opacity:0.8; background:var(--color-surface-low); padding:1px 4px; border-radius:2px;">${res.type}</span></span>
    </label>
  `).join("");

  // Timeline events markup
  const timelineHtml = report.history.map(h => `
    <li class="timeline-evidence-item">
      <span class="activity-time">${h.time}</span>
      <span>${h.text}</span>
    </li>
  `).join("");

  // Status Badge
  let badgeClass = "status-ready";
  if (report.reportStatus === "Draft") badgeClass = "status-submitted";
  else if (report.reportStatus === "Submitted") badgeClass = "status-ready";
  else if (report.reportStatus === "Correction Requested") badgeClass = "status-closed";

  reportView.innerHTML = `
    <!-- Operations dev status helper -->
    <div class="dev-sim-panel" style="margin-bottom: var(--spacing-md);">
      <span style="color:#e2e8f0; margin-right:4px;">Simulate Report Status:</span>
      <button class="dev-sim-btn ${report.reportStatus === 'Draft' ? 'active' : ''}" onclick="simulateReportStatus('${occurrenceId}', 'Draft')">Draft</button>
      <button class="dev-sim-btn ${report.reportStatus === 'Submitted' ? 'active' : ''}" onclick="simulateReportStatus('${occurrenceId}', 'Submitted')">Submitted</button>
      <button class="dev-sim-btn ${report.reportStatus === 'Correction Requested' ? 'active' : ''}" onclick="simulateReportStatus('${occurrenceId}', 'Correction Requested')">Correction Requested</button>
    </div>

    <!-- Back Navigation link -->
    <div style="margin-bottom:var(--spacing-md);">
      <a href="#learner/trials/${occurrenceId}" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Class
      </a>
    </div>

    <!-- Header Grid -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Submit Trial Report</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          OCC-TRIAL-001 &middot; <strong>Spoken English</strong> &middot; Learner: <strong>Ali Khan</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status ${badgeClass}" style="font-size:11px; padding:4px 8px;">
          ${report.reportStatus === 'Correction Requested' ? 'Correction Requested' : (report.reportStatus === 'Submitted' ? 'Submitted' : 'Draft')}
        </span>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:4px;">Report Version: <strong>v${report.version}</strong></div>
      </div>
    </div>

    <!-- Main Workspace columns -->
    <div class="report-workspace-grid">
      
      <!-- Left Column: Form Details -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        <!-- Changes Requested Alerts (Only show when status is Correction Requested) -->
        ${report.reportStatus === 'Correction Requested' ? `
          <div class="banner-changes-requested animate-fade-in">
            <h4>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Changes Requested by Operations
            </h4>
            <p style="margin-bottom:12px; font-weight:600; font-style:italic;">"${report.operationsNote}"</p>
            <div style="font-size:11.5px; opacity:0.85; display:flex; justify-content:space-between;">
              <span>Reviewed by: <strong>Operations Manager</strong></span>
              <span>Requested: <strong>13 Aug 2026 · 8:05 PM</strong></span>
            </div>
            ${isReadOnly ? `
              <button class="btn btn-primary" onclick="enableCorrectionEdit('${occurrenceId}')" style="margin-top:12px; height:34px; font-size:12px; background-color:#c5221f; border-color:#c5221f; color:white;">
                Edit Report to Correct
              </button>
            ` : ''}
          </div>
        ` : ''}

        <!-- Previous Version Toggle if Version > 1 -->
        ${report.version > 1 ? `
          <div class="form-card" style="padding:12px; background:rgba(240, 217, 122, 0.08); border-color:rgba(119, 88, 58, 0.2); display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12.5px; font-weight:700; color:var(--color-secondary);">Version ${report.version - 1} History Log is preserved</span>
            <button class="btn btn-secondary" onclick="viewPreviousReportVersion('${occurrenceId}')" style="height:28px; font-size:11.5px; padding:0 10px;">View Version ${report.version - 1}</button>
          </div>
        ` : ''}

        <!-- Active Version Label if correcting -->
        ${isCorrectionMode ? `
          <div style="background-color:rgba(240, 217, 122, 0.1); border:1px solid var(--color-secondary); border-radius:6px; padding:10px 14px; font-size:12.5px; font-weight:700; color:var(--color-secondary);">
            ⚡ Mode: Creating Corrected Version ${report.version} (Draft)
          </div>
        ` : ''}

        <!-- Section 1: Session Topics -->
        <div class="form-card">
          <h3 class="form-section-title">1. Topics & Syllabus Coverage</h3>
          
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Main Session Topic <span style="color:red;">*</span></label>
            <input type="text" id="report-main-topic" class="form-input" placeholder="e.g. Introductions, speaking confidence and pronunciation" value="${report.mainTopic}" ${isReadOnly ? 'readonly' : ''}>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">Specific Topics Covered <span style="color:red;">*</span></label>
            ${!isReadOnly ? `
              <div style="display:flex; gap:8px;">
                <input type="text" id="report-topic-input" class="form-input" placeholder="Type a topic and press Add" onkeypress="handleTopicInputEnter(event, '${occurrenceId}')">
                <button class="btn btn-secondary" onclick="addReportTopic('${occurrenceId}')" style="height:38px;">Add</button>
              </div>
            ` : ''}
            <div class="tags-container" id="report-topics-tags-container">
              ${topicsHtml || '<span style="font-size:12px; color:var(--color-tertiary); font-style:italic;">No topics added yet.</span>'}
            </div>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-lg);">
            <label class="form-label" style="font-weight:700; margin-bottom:4px;">Syllabus Items Status</label>
            <div style="display:flex; flex-direction:column; gap:4px;">
              ${syllabusHtml}
            </div>
          </div>
        </div>

        <!-- Section 2: Learner observations -->
        <div class="form-card">
          <h3 class="form-section-title">2. Learner Progress & observations</h3>
          
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Progress Notes <span style="color:red;">*</span></label>
            <textarea id="report-progress-notes" class="form-input" style="height:110px; line-height:20px;" placeholder="Describe the learner's participation, understanding and progress during the session..." ${isReadOnly ? 'readonly' : ''}>${report.progressNotes}</textarea>
          </div>
        </div>

        <!-- Section 3: Feedback & Assessment -->
        <div class="form-card">
          <h3 class="form-section-title">3. Feedback & Assessment</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Learner Strengths <span style="color:red;">*</span></label>
              <textarea id="report-feedback-strengths" class="form-input" style="height:80px; line-height:20px;" placeholder="e.g. Good listening comprehension..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.strengths}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Areas to Improve <span style="color:red;">*</span></label>
              <textarea id="report-feedback-improvements" class="form-input" style="height:80px; line-height:20px;" placeholder="e.g. Pronunciation and confidence..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.improvements}</textarea>
            </div>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">Trainer Recommendations</label>
            <textarea id="report-feedback-recommends" class="form-input" style="height:70px; line-height:20px;" placeholder="e.g. Continue speaking practice..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.recommendations}</textarea>
          </div>

          <h4 style="font-family:var(--font-family-headings); font-size:13px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; border-bottom:1px solid var(--color-outline-variant); padding-bottom:4px; margin-top:var(--spacing-lg); margin-bottom:var(--spacing-md);">Trial Assessment Details</h4>
          
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Observed Level</label>
              <select id="report-assess-level" class="form-input" style="height:38px;" ${isReadOnly ? 'disabled' : ''}>
                <option value="Beginner" ${report.trialAssessment.observedLevel === 'Beginner' ? 'selected' : ''}>Beginner</option>
                <option value="Elementary" ${report.trialAssessment.observedLevel === 'Elementary' ? 'selected' : ''}>Elementary</option>
                <option value="Intermediate" ${report.trialAssessment.observedLevel === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                <option value="Upper Intermediate" ${report.trialAssessment.observedLevel === 'Upper Intermediate' ? 'selected' : ''}>Upper Intermediate</option>
                <option value="Advanced" ${report.trialAssessment.observedLevel === 'Advanced' ? 'selected' : ''}>Advanced</option>
                <option value="Unable to Assess" ${report.trialAssessment.observedLevel === 'Unable to Assess' ? 'selected' : ''}>Unable to Assess</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Readiness</label>
              <select id="report-assess-readiness" class="form-input" style="height:38px;" ${isReadOnly ? 'disabled' : ''}>
                <option value="Ready to Continue" ${report.trialAssessment.readiness === 'Ready to Continue' ? 'selected' : ''}>Ready to Continue</option>
                <option value="Needs More Assessment" ${report.trialAssessment.readiness === 'Needs More Assessment' ? 'selected' : ''}>Needs More Assessment</option>
                <option value="Course May Not Be Suitable" ${report.trialAssessment.readiness === 'Course May Not Be Suitable' ? 'selected' : ''}>Course May Not Be Suitable</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">Assessment Summary Note</label>
            <textarea id="report-assess-note" class="form-input" style="height:70px; line-height:20px;" placeholder="Summarize observed appropriateness for Spoken English cohort..." ${isReadOnly ? 'readonly' : ''}>${report.trialAssessment.assessmentNote}</textarea>
          </div>
        </div>

        <!-- Section 4: Homework & Resources -->
        <div class="form-card">
          <h3 class="form-section-title">4. Homework & Recommended Resources</h3>
          
          <div style="margin-bottom:var(--spacing-md);">
            <label style="display:inline-flex; align-items:center; gap:8px; font-weight:700; font-size:13.5px; cursor:pointer;">
              <input type="checkbox" id="report-homework-enabled" style="accent-color:var(--color-secondary);" ${report.homework.enabled ? 'checked' : ''} ${isReadOnly ? 'disabled' : ''} onchange="toggleReportHomeworkFields('${occurrenceId}')">
              <span>Assign Homework to Learner</span>
            </label>
          </div>

          <div id="report-homework-fields-block" style="display:${report.homework.enabled ? 'block' : 'none'}; border-left:3px solid var(--color-secondary); padding-left:14px; margin-bottom:var(--spacing-md);">
            <div class="form-group">
              <label class="form-label">Homework Title</label>
              <input type="text" id="report-homework-title" class="form-input" value="${report.homework.title}" placeholder="e.g. Introduce Yourself Practice" ${isReadOnly ? 'readonly' : ''}>
            </div>
            <div class="form-group" style="margin-top:var(--spacing-sm);">
              <label class="form-label">Instructions</label>
              <textarea id="report-homework-instructions" class="form-input" style="height:70px;" placeholder="Describe homework task..." ${isReadOnly ? 'readonly' : ''}>${report.homework.instructions}</textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight:700; margin-bottom:6px;">Recommended Resources</label>
            <div style="display:flex; flex-direction:column; gap:8px; background:var(--color-surface-low); padding:10px; border-radius:6px;">
              ${resourcesHtml}
            </div>
            ${!isReadOnly ? `
              <button class="btn btn-secondary" onclick="addMockReportResource('${occurrenceId}')" style="height:32px; font-size:12px; margin-top:8px; padding:0 12px;">+ Add Custom Resource</button>
            ` : ''}
          </div>
        </div>

        <!-- Section 5: Issues & private notes -->
        <div class="form-card">
          <h3 class="form-section-title">5. Classroom Issues & Internal Notes</h3>
          
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Session Issues</label>
            <select id="report-session-issues" class="form-input" style="height:38px;" ${isReadOnly ? 'disabled' : ''} onchange="toggleReportIssueDetails('${occurrenceId}')">
              <option value="No issues" ${report.sessionIssues === 'No issues' ? 'selected' : ''}>✓ No issues</option>
              <option value="Learner connection issue" ${report.sessionIssues === 'Learner connection issue' ? 'selected' : ''}>Learner connection issue</option>
              <option value="Trainer connection issue" ${report.sessionIssues === 'Trainer connection issue' ? 'selected' : ''}>Trainer connection issue</option>
              <option value="Audio issue" ${report.sessionIssues === 'Audio issue' ? 'selected' : ''}>Audio issue</option>
              <option value="Video issue" ${report.sessionIssues === 'Video issue' ? 'selected' : ''}>Video issue</option>
              <option value="Classroom/provider issue" ${report.sessionIssues === 'Classroom/provider issue' ? 'selected' : ''}>Classroom/provider issue</option>
              <option value="Other" ${report.sessionIssues === 'Other' ? 'selected' : ''}>Other Issue</option>
            </select>
          </div>

          <div id="report-issue-details-block" style="display:${report.sessionIssues !== 'No issues' ? 'block' : 'none'}; margin-top:var(--spacing-sm);">
            <div class="form-group">
              <label class="form-label">Issue Details</label>
              <textarea id="report-session-issues-details" class="form-input" style="height:70px;" placeholder="Describe network or platform disruption..." ${isReadOnly ? 'readonly' : ''}>${report.sessionIssuesDetails}</textarea>
            </div>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">General Delivery Notes (Optional)</label>
            <textarea id="report-general-notes" class="form-input" style="height:70px;" placeholder="e.g. Session completed smoothly..." ${isReadOnly ? 'readonly' : ''}>${report.generalNotes}</textarea>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md); background-color:rgba(197, 34, 31, 0.04); border:1px solid rgba(197, 34, 31, 0.15); border-radius:6px; padding:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <label class="form-label" style="font-weight:700; color:#ba1a1a; margin-bottom:0;">Learner-Specific Notes (Private)</label>
              <span style="font-size:9.5px; color:#ba1a1a; font-weight:800; border:1px solid #ba1a1a; padding:1px 4px; border-radius:2px; text-transform:uppercase;">Internal Only</span>
            </div>
            <textarea id="report-private-notes" class="form-input" style="height:70px; border-color:rgba(197, 34, 31, 0.15);" placeholder="Internal commentary - not shared with learner..." ${isReadOnly ? 'readonly' : ''}>${report.privateNotes}</textarea>
          </div>
        </div>

        <!-- Submit actions row -->
        <div style="display:flex; gap:12px; margin-bottom:40px;">
          ${!isReadOnly ? `
            <button class="btn btn-primary" onclick="submitTrainerReport('${occurrenceId}')" style="flex:2; height:44px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
              ${isCorrectionMode ? 'Resubmit for Review' : 'Submit for Review'}
            </button>
            <button class="btn btn-secondary" onclick="saveTrainerReportDraft('${occurrenceId}')" style="flex:1; height:44px; font-weight:700;">
              Save Draft
            </button>
          ` : `
            <button class="btn btn-secondary" onclick="window.location.hash='#staff/trial-requests'" style="width:100%; height:44px;">
              Back to My Classes
            </button>
          `}
        </div>

      </div>

      <!-- Right Column: Context, evidence & timeline -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
        
        <!-- Context Card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Class Details</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.learner}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.trainer}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Date:</td><td style="padding:6px 0; font-weight:700; text-align:right;">13 August 2026</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Scheduled:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:00 PM - 7:45 PM PKT</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Duration:</td><td style="padding:6px 0; font-weight:700; text-align:right;">45 minutes</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Occurrence:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${report.occurrenceId}</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Request Ref:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${report.trialRequestId}</td></tr>
          </table>
        </div>

        <!-- Evidence section -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Attendance Evidence</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:12px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Joined:</td><td style="padding:6px 0; font-weight:700; text-align:right;">6:58 PM</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Joined:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:01 PM</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Left:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:44 PM</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Left:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:45 PM</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Connected:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">43 min</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Connected:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">47 min</td></tr>
            <tr>
              <td style="padding:6px 0; color:var(--color-tertiary);">Evidence Status:</td>
              <td style="padding:6px 0; font-weight:700; text-align:right;">
                <span class="badge-status status-ready" style="font-size:9.5px; padding:1px 6px;">Reconciled</span>
              </td>
            </tr>
          </table>

          <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:10px 12px; display:flex; flex-direction:column; gap:4px; margin-bottom:10px;">
            <div style="font-size:11.5px; color:var(--color-tertiary);">Reconciled Attendance:</div>
            <div style="font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); display:flex; justify-content:space-between; align-items:center;">
              <span>Present</span>
              <span style="font-size:9px; background:#137333; color:white; padding:1px 4px; border-radius:2px;">Reconciled</span>
            </div>
            ${report.proposedAttendance ? `
              <div style="margin-top:6px; border-top:1px solid var(--color-outline-variant); padding-top:6px; font-size:11px; color:#ba1a1a;">
                <strong>Proposed Correction:</strong><br>
                Outcome: ${report.proposedAttendance}<br>
                Reason: "${report.attendanceCorrectionReason}"
              </div>
            ` : ''}
          </div>

          ${!isReadOnly ? `
            <button class="btn btn-secondary" onclick="openAttendanceCorrectionModal('${occurrenceId}')" style="width:100%; height:32px; font-size:12px;">
              Request Attendance Correction
            </button>
          ` : ''}
        </div>

        <!-- Report Activity Timeline -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Report Activity</h3>
          <ul class="timeline-evidence">
            ${timelineHtml}
          </ul>
        </div>

      </div>

    </div>
  `;
};

// 1. Topics covered tags add/remove
window.addReportTopic = function(occurrenceId) {
  const input = document.getElementById("report-topic-input");
  if (!input || !input.value.trim()) return;

  const report = state.trainerReports[occurrenceId];
  report.topicsCovered.push(input.value.trim());
  input.value = "";
  renderTrainerReportForm(occurrenceId);
};

window.handleTopicInputEnter = function(event, occurrenceId) {
  if (event.key === "Enter") {
    addReportTopic(occurrenceId);
  }
};

window.removeReportTopic = function(occurrenceId, idx) {
  const report = state.trainerReports[occurrenceId];
  report.topicsCovered.splice(idx, 1);
  renderTrainerReportForm(occurrenceId);
};

// 2. Syllabus item set covered
window.setSyllabusCoverage = function(occurrenceId, item, val) {
  const report = state.trainerReports[occurrenceId];
  report.syllabusCoverage[item] = val;
  renderTrainerReportForm(occurrenceId);
};

// 3. Toggle Resources
window.toggleReportResource = function(occurrenceId, idx) {
  const report = state.trainerReports[occurrenceId];
  report.resources[idx].attached = !report.resources[idx].attached;
};

window.addMockReportResource = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  const count = report.resources.length + 1;
  report.resources.push({
    name: `Additional Reading Material v${count}`,
    type: "PDF",
    attached: true
  });
  renderTrainerReportForm(occurrenceId);
  showToastAlert("Custom PDF resource added.");
};

// 4. Toggle homework block visibility
window.toggleReportHomeworkFields = function(occurrenceId) {
  const chk = document.getElementById("report-homework-enabled");
  const block = document.getElementById("report-homework-fields-block");
  const report = state.trainerReports[occurrenceId];
  
  if (chk && block) {
    block.style.display = chk.checked ? "block" : "none";
    report.homework.enabled = chk.checked;
    if (chk.checked && !report.homework.title) {
      report.homework.title = "Introduce Yourself Practice";
      report.homework.instructions = "Prepare a 1-minute introduction about yourself, your work/studies and one hobby.";
      renderTrainerReportForm(occurrenceId);
    }
  }
};

// 5. Toggle Classroom issues visibility
window.toggleReportIssueDetails = function(occurrenceId) {
  const sel = document.getElementById("report-session-issues");
  const block = document.getElementById("report-issue-details-block");
  const report = state.trainerReports[occurrenceId];
  if (sel && block) {
    block.style.display = sel.value !== "No issues" ? "block" : "none";
    report.sessionIssues = sel.value;
  }
};

// 6. Save Draft action
window.saveTrainerReportDraft = function(occurrenceId) {
  // Sync state values
  const report = state.trainerReports[occurrenceId];
  syncTrainerReportInputs(report);

  showToastAlert("Draft saved successfully.");
};

function syncTrainerReportInputs(report) {
  const mainTopic = document.getElementById("report-main-topic");
  const progressNotes = document.getElementById("report-progress-notes");
  const feedbackStrengths = document.getElementById("report-feedback-strengths");
  const feedbackImprovements = document.getElementById("report-feedback-improvements");
  const feedbackRecommends = document.getElementById("report-feedback-recommends");
  const assessLevel = document.getElementById("report-assess-level");
  const assessReadiness = document.getElementById("report-assess-readiness");
  const assessNote = document.getElementById("report-assess-note");
  const hwTitle = document.getElementById("report-homework-title");
  const hwInstructs = document.getElementById("report-homework-instructions");
  const sessionIssues = document.getElementById("report-session-issues");
  const sessionIssuesDetails = document.getElementById("report-session-issues-details");
  const generalNotes = document.getElementById("report-general-notes");
  const privateNotes = document.getElementById("report-private-notes");

  if (mainTopic) report.mainTopic = mainTopic.value.trim();
  if (progressNotes) report.progressNotes = progressNotes.value.trim();
  if (feedbackStrengths) report.learnerFeedback.strengths = feedbackStrengths.value.trim();
  if (feedbackImprovements) report.learnerFeedback.improvements = feedbackImprovements.value.trim();
  if (feedbackRecommends) report.learnerFeedback.recommendations = feedbackRecommends.value.trim();
  if (assessLevel) report.trialAssessment.observedLevel = assessLevel.value;
  if (assessReadiness) report.trialAssessment.readiness = assessReadiness.value;
  if (assessNote) report.trialAssessment.assessmentNote = assessNote.value.trim();
  if (hwTitle) report.homework.title = hwTitle.value.trim();
  if (hwInstructs) report.homework.instructions = hwInstructs.value.trim();
  if (sessionIssues) report.sessionIssues = sessionIssues.value;
  if (sessionIssuesDetails) report.sessionIssuesDetails = sessionIssuesDetails.value.trim();
  if (generalNotes) report.generalNotes = generalNotes.value.trim();
  if (privateNotes) report.privateNotes = privateNotes.value.trim();
}

// 7. Submit Report action with validation
window.submitTrainerReport = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  syncTrainerReportInputs(report);

  // Field Validations
  if (!report.mainTopic) {
    showToastAlert("Required Field Missing: Main Session Topic");
    document.getElementById("report-main-topic").focus();
    return;
  }
  if (report.topicsCovered.length === 0) {
    showToastAlert("Required Field Missing: Add at least 1 Specific Topic Covered");
    document.getElementById("report-topic-input").focus();
    return;
  }
  if (!report.progressNotes) {
    showToastAlert("Required Field Missing: Progress Notes");
    document.getElementById("report-progress-notes").focus();
    return;
  }
  if (!report.learnerFeedback.strengths) {
    showToastAlert("Required Field Missing: Learner Strengths");
    document.getElementById("report-feedback-strengths").focus();
    return;
  }
  if (!report.learnerFeedback.improvements) {
    showToastAlert("Required Field Missing: Areas to Improve");
    document.getElementById("report-feedback-improvements").focus();
    return;
  }

  // Open confirmation modal
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">After submission, this report will be locked as read-only and sent to Operations for review.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Learner:</strong> Ali Khan</div>
        <div><strong>Course:</strong> Spoken English</div>
        <div><strong>Occurrence:</strong> ${occurrenceId}</div>
        <div><strong>Reconciled Attendance:</strong> Present</div>
        <div><strong>Observed Level:</strong> ${report.trialAssessment.observedLevel}</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmSubmitTrainerReport('${occurrenceId}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Submit Report</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Continue Editing</button>
      </div>
    </div>
  `;
  openModal("Submit Trial Report?", content);
};

window.confirmSubmitTrainerReport = function(occurrenceId) {
  closeModal();
  const report = state.trainerReports[occurrenceId];
  
  // Update state values: Draft -> Submitted, Awaiting Report -> In Review
  report.reportStatus = "Submitted";
  report.deliveryReviewStatus = "Pending";
  report.isEditingCorrection = false;
  
  if (state.scheduledOccurrences[occurrenceId]) {
    state.scheduledOccurrences[occurrenceId].status = "In Review";
  }
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `${dateStr.replace(" 2026", "")} · ${timeStr}`,
    text: `Report submitted by ${report.trainer}`
  });

  // Switch view to report submitted success screen
  renderSubmittedSuccessScreen(occurrenceId);
};

// 8. Renders Report Submitted success landing state
function renderSubmittedSuccessScreen(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  const view = document.getElementById("trainer-report-view");
  if (!view) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  view.innerHTML = `
    <!-- Success Banner -->
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Report Submitted</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">Your trial report has been sent to Operations for review.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px;">
        <tr class="receipt-row"><td class="receipt-label">Report ID</td><td class="receipt-value" style="font-family:monospace;">${report.id}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Occurrence</td><td class="receipt-value" style="font-family:monospace;">${report.occurrenceId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Learner</td><td class="receipt-value">${report.learner}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Report Status</td><td class="receipt-value"><span class="badge-status status-ready">Submitted</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Delivery Review</td><td class="receipt-value"><span class="badge-integration int-provisioning">Pending Review</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Submitted By</td><td class="receipt-value">${report.trainer}</td></tr>
        <tr><td class="receipt-label">Submitted Time</td><td class="receipt-value">${dateStr} &middot; ${timeStr}</td></tr>
      </table>

      <div style="display:flex; flex-direction:column; gap:8px; max-width:380px; margin:0 auto;">
        <div style="display:flex; gap:12px; width:100%;">
          <button class="btn btn-primary" onclick="renderTrainerReportForm('${occurrenceId}')" style="flex:1; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#fff; font-weight:700;">View Report</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#staff/trial-requests'" style="flex:1; height:42px;">Queue Portal</button>
        </div>
        <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="width:100%; height:42px;">Open Delivery Reviews</button>
      </div>
    </div>
  `;
}

// 9. Attendance correction modal
window.openAttendanceCorrectionModal = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Explain why the reconciled attendance outcome needs to be updated. Operations will verify this request.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Current Outcome</label>
        <input type="text" class="form-input" style="height:38px; background:var(--color-surface-low);" value="Present" readonly>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Proposed Outcome</label>
        <select id="correct-proposed-outcome" class="form-input" style="height:38px;">
          <option value="Present">Present</option>
          <option value="Late">Late</option>
          <option value="Absent">Absent</option>
          <option value="Excused">Excused</option>
          <option value="Technical Issue">Technical Issue</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Reason <span style="color:red;">*</span></label>
        <textarea id="correct-proposed-reason" class="form-input" style="height:75px;" placeholder="Explain why the attendance evidence needs to be corrected..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="submitAttendanceCorrection('${occurrenceId}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Submit Correction Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Request Attendance Correction", content);
};

window.submitAttendanceCorrection = function(occurrenceId) {
  const outcome = document.getElementById("correct-proposed-outcome").value;
  const reason = document.getElementById("correct-proposed-reason").value.trim();

  if (!reason) {
    showToastAlert("Correction reason is required.");
    document.getElementById("correct-proposed-reason").focus();
    return;
  }

  closeModal();
  const report = state.trainerReports[occurrenceId];
  report.proposedAttendance = outcome;
  report.attendanceCorrectionReason = reason;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `13 Aug · ${timeStr}`,
    text: `Attendance correction requested by trainer`
  });

  renderTrainerReportForm(occurrenceId);
  showToastAlert(`Correction requested: Proposed ${outcome}.`);
};

// 10. Correction Requested State logic
window.enableCorrectionEdit = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  
  // Clone current report to previousVersion to save history
  report.previousVersion = JSON.parse(JSON.stringify(report));
  
  // Move version up and set draft edit mode active
  report.version++;
  report.isEditingCorrection = true;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `13 Aug · ${timeStr}`,
    text: `Started correction edit version ${report.version}`
  });

  renderTrainerReportForm(occurrenceId);
  showToastAlert(`Correction Mode: Editing Version ${report.version}.`);
};

// 11. View Previous Version history dialog
window.viewPreviousReportVersion = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  if (!report.previousVersion) return;

  const prev = report.previousVersion;
  const content = `
    <div style="text-align:left; font-size:13px; max-height:400px; overflow-y:auto; padding-right:8px; display:flex; flex-direction:column; gap:12px;">
      <div><strong>Version:</strong> v${prev.version}</div>
      <div><strong>Main Topic:</strong> ${prev.mainTopic}</div>
      <div><strong>Topics Covered:</strong> ${prev.topicsCovered.join(", ") || 'None'}</div>
      <div><strong>Progress Notes:</strong><br><span style="font-style:italic;">"${prev.progressNotes}"</span></div>
      <div><strong>Learner Feedback (Strengths):</strong><br><span style="font-style:italic;">"${prev.learnerFeedback.strengths}"</span></div>
      <div><strong>Learner Feedback (Improvements):</strong><br><span style="font-style:italic;">"${prev.learnerFeedback.improvements}"</span></div>
      <div><strong>Assessment Level:</strong> ${prev.trialAssessment.observedLevel}</div>
      <div><strong>Assessment Note:</strong> ${prev.trialAssessment.assessmentNote}</div>
      <div><strong>Private Notes:</strong> ${prev.privateNotes || 'None'}</div>
      <button class="btn btn-secondary" onclick="closeModal()" style="width:100%; height:38px; margin-top:10px;">Close History</button>
    </div>
  `;
  openModal(`Previous Version v${prev.version} Details`, content);
};

// Developer status simulator helper
window.simulateReportStatus = function(occurrenceId, newStatus) {
  const report = state.trainerReports[occurrenceId];
  report.reportStatus = newStatus;
  if (newStatus === "Correction Requested") {
    report.isEditingCorrection = false;
  }
  renderTrainerReportForm(occurrenceId);
};


// ==========================================================================
// Screen 09 - Operations Delivery Report Review Database & Views
// ==========================================================================

state.deliveryReviews = [
  {
    id: "REVIEW-TRIAL-001",
    occurrenceId: "OCC-TRIAL-001",
    trialRequestId: "TRIAL-001",
    learner: "Ali Khan",
    course: "Spoken English Bootcamp",
    trainer: "Ayesha Rahman",
    classType: "Trial",
    deliveredTime: "13 Aug · 7:00 PM",
    attendanceStatus: "Late",
    evidenceStatus: "Reconciled",
    reviewStatus: "Pending", // Pending | Approved | Rejected | Correction Requested
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "",
    hasCorrectionRequest: true,
    correctionProposedOutcome: "Technical Issue",
    correctionProposedReason: "Learner was disconnected because of an internet issue and rejoined shortly after.",
    joinedTimes: {
      trainerJoined: "6:58 PM",
      learnerJoined: "7:01 PM",
      learnerLeft: "7:44 PM",
      trainerLeft: "7:45 PM",
      learnerDuration: 43,
      trainerDuration: 47
    },
    timeline: [
      { time: "6:58 PM", text: "Trainer joined class" },
      { time: "7:01 PM", text: "Learner joined class" },
      { time: "7:18 PM", text: "Learner disconnected (network drop)" },
      { time: "7:21 PM", text: "Learner reconnected" },
      { time: "7:44 PM", text: "Learner left class" },
      { time: "7:45 PM", text: "Trainer left class" }
    ],
    technicalIssues: "Learner disconnected from 7:18 PM to 7:21 PM and then rejoined."
  },
  {
    id: "REVIEW-TRIAL-002",
    occurrenceId: "OCC-TRIAL-002",
    trialRequestId: "TRIAL-002",
    learner: "Ayesha Malik",
    course: "IELTS Preparation Masterclass",
    trainer: "Hamza Siddiqui",
    classType: "Trial",
    deliveredTime: "13 Aug · 8:00 PM",
    attendanceStatus: "Late",
    evidenceStatus: "Reconciled",
    reviewStatus: "Pending",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "7:55 PM",
      learnerJoined: "8:15 PM",
      learnerLeft: "8:45 PM",
      trainerLeft: "8:46 PM",
      learnerDuration: 30,
      trainerDuration: 51
    },
    timeline: [
      { time: "7:55 PM", text: "Trainer joined class" },
      { time: "8:15 PM", text: "Learner joined late" },
      { time: "8:45 PM", text: "Learner left class" },
      { time: "8:46 PM", text: "Trainer left class" }
    ],
    technicalIssues: "No issues reported"
  },
  {
    id: "REVIEW-TRIAL-003",
    occurrenceId: "OCC-TRIAL-003",
    trialRequestId: "TRIAL-003",
    learner: "Hassan Raza",
    course: "Spoken English Bootcamp",
    trainer: "Sana Malik",
    classType: "Trial",
    deliveredTime: "14 Aug · 6:00 PM",
    attendanceStatus: "Technical Issue",
    evidenceStatus: "Technical Exception",
    reviewStatus: "Pending",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "5:57 PM",
      learnerJoined: "6:05 PM",
      learnerLeft: "6:20 PM",
      trainerLeft: "6:45 PM",
      learnerDuration: 15,
      trainerDuration: 48
    },
    timeline: [
      { time: "5:57 PM", text: "Trainer joined class" },
      { time: "6:05 PM", text: "Learner joined class" },
      { time: "6:20 PM", text: "Meeting provider logs disconnected abruptly" },
      { time: "6:45 PM", text: "Trainer left class" }
    ],
    technicalIssues: "Meeting provider data is incomplete. Learner webcam drop reported."
  },
  {
    id: "REVIEW-CLASS-021",
    occurrenceId: "OCC-CLASS-021",
    trialRequestId: "CLASS-021",
    learner: "Fatima Noor",
    course: "K-12 Mathematics",
    trainer: "Usman Khan",
    classType: "Regular",
    deliveredTime: "12 Aug · 5:00 PM",
    attendanceStatus: "Present",
    evidenceStatus: "Reconciled",
    reviewStatus: "Correction Requested",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "Trainer report states learner attended full class, but evidence shows only 22 minutes presence.",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "4:59 PM",
      learnerJoined: "5:01 PM",
      learnerLeft: "5:23 PM",
      trainerLeft: "5:45 PM",
      learnerDuration: 22,
      trainerDuration: 46
    },
    timeline: [
      { time: "4:59 PM", text: "Trainer joined class" },
      { time: "5:01 PM", text: "Learner joined class" },
      { time: "5:23 PM", text: "Learner disconnected class" },
      { time: "5:45 PM", text: "Trainer left class" }
    ],
    technicalIssues: "No issues reported"
  },
  {
    id: "REVIEW-TRIAL-004",
    occurrenceId: "OCC-TRIAL-004",
    trialRequestId: "TRIAL-004",
    learner: "Zainab Bibi",
    course: "Practical AI & Prompt Engineering",
    trainer: "Ayesha Rahman",
    classType: "Trial",
    deliveredTime: "11 Aug · 4:00 PM",
    attendanceStatus: "Present",
    evidenceStatus: "Reconciled",
    reviewStatus: "Approved",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "Verified clean session logs.",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "3:58 PM",
      learnerJoined: "4:00 PM",
      learnerLeft: "4:45 PM",
      trainerLeft: "4:46 PM",
      learnerDuration: 45,
      trainerDuration: 48
    },
    timeline: [
      { time: "3:58 PM", text: "Trainer joined" },
      { time: "4:00 PM", text: "Learner joined" },
      { time: "4:45 PM", text: "Learner left" },
      { time: "4:46 PM", text: "Trainer left" }
    ],
    technicalIssues: "No issues reported"
  },
  {
    id: "REVIEW-TRIAL-005",
    occurrenceId: "OCC-TRIAL-005",
    trialRequestId: "TRIAL-005",
    learner: "Kamran Khan",
    course: "Spoken English Bootcamp",
    trainer: "Hamza Siddiqui",
    classType: "Trial",
    deliveredTime: "10 Aug · 3:00 PM",
    attendanceStatus: "Absent",
    evidenceStatus: "Reconciled",
    reviewStatus: "Approved",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "Learner did not attend class.",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "2:58 PM",
      learnerJoined: "No join event",
      learnerLeft: "No join event",
      trainerLeft: "3:45 PM",
      learnerDuration: 0,
      trainerDuration: 47
    },
    timeline: [
      { time: "2:58 PM", text: "Trainer joined" },
      { time: "3:45 PM", text: "Trainer left" }
    ],
    technicalIssues: "Learner did not attend"
  },
  {
    id: "REVIEW-TRIAL-006",
    occurrenceId: "OCC-TRIAL-006",
    trialRequestId: "TRIAL-006",
    learner: "Sadaf Jamil",
    course: "IELTS Preparation Masterclass",
    trainer: "Sana Malik",
    classType: "Trial",
    deliveredTime: "09 Aug · 1:00 PM",
    attendanceStatus: "Present",
    evidenceStatus: "Reconciled",
    reviewStatus: "Rejected",
    rejectionReason: "Trainer no-show",
    rejectionNotes: "Provider evidence confirms trainer did not join the scheduled class.",
    operationsNotes: "Rejected - Trainer did not join.",
    hasCorrectionRequest: false,
    joinedTimes: {
      trainerJoined: "No join event",
      learnerJoined: "1:00 PM",
      learnerLeft: "1:45 PM",
      trainerLeft: "No join event",
      learnerDuration: 45,
      trainerDuration: 0
    },
    timeline: [
      { time: "1:00 PM", text: "Learner joined" },
      { time: "1:45 PM", text: "Learner left" }
    ],
    technicalIssues: "Trainer absence detected"
  },
  // ── Screen 18: Paid Class delivery review ──────────────────────────────
  {
    id: "DELIVERY-REVIEW-CLASS-001",
    occurrenceId: "CLASS-001",
    seriesId: "SERIES-001",
    enrolmentId: "ENR-001",
    membershipId: "MEM-TERM-001",
    trialRequestId: null,
    learner: "Ali Khan",
    course: "Spoken English",
    trainer: "Ayesha Rahman",
    classType: "Regular",
    classNumber: "1 of 12",
    deliveredTime: "18 Aug · 7:00 PM",
    attendanceStatus: "Present",
    evidenceStatus: "Reconciled",
    reviewStatus: "Pending",     // Pending | Approved | Correction Requested | Rejected
    occurrenceStatus: "In Review", // In Review | Approved/Completed | Rejected for Correction
    reportRef: "REPORT-CLASS-001",
    reviewer: "Omar Farooq",
    reviewerRole: "Operations Manager",
    rejectionReason: "",
    rejectionNotes: "",
    operationsNotes: "",
    hasCorrectionRequest: false,
    correctionProposedOutcome: "Technical Issue",
    correctionProposedReason: "Connection interruption materially affected participation.",
    correctionDecision: null,    // null | "Approved" | "Rejected"
    correctionDecisionNote: "",
    correctionChangedBy: "",
    correctionPreviousOutcome: "",
    joinedTimes: {
      trainerJoined: "6:58 PM",
      learnerJoined: "7:01 PM",
      learnerDisconnected: "7:18 PM",
      learnerReconnected: "7:21 PM",
      learnerLeft: "7:44 PM",
      trainerLeft: "7:45 PM",
      learnerDuration: 40,
      trainerDuration: 47
    },
    timeline: [
      { time: "6:58 PM", text: "Ayesha joined" },
      { time: "7:01 PM", text: "Ali joined" },
      { time: "7:18 PM", text: "Ali connection lost" },
      { time: "7:21 PM", text: "Ali reconnected" },
      { time: "7:44 PM", text: "Ali left" },
      { time: "7:45 PM", text: "Ayesha left" }
    ],
    auditLog: [
      { time: "7:45 PM", text: "Class ended" },
      { time: "7:46 PM", text: "Attendance evidence reconciled" },
      { time: "7:53 PM", text: "REPORT-CLASS-001 submitted by Ayesha Rahman" },
      { time: "7:53 PM", text: "Delivery review DELIVERY-REVIEW-CLASS-001 created" },
      { time: "8:05 PM", text: "Review opened by Omar Farooq · Operations Manager" },
      { time: "8:09 PM", text: "Attendance evidence reviewed" }
    ],
    technicalIssues: "Learner Connection Issue",
    technicalIssueDetails: "Learner disconnected for approximately three minutes and rejoined.",
    // Downstream record IDs (null until created)
    entitlementDebitId: null,
    progressEventId: null,
    trainerEarningId: null,
    feedbackPublished: false,
    homeworkPublished: false,
    // Checklist state
    verificationChecklist: {
      trainerEvidenceSupports: false,
      learnerParticipated: false,
      reportSubmitted: false,
      syllabusProvided: false,
      progressRecorded: false,
      homeworkReviewed: false,
      attendanceReviewed: false,
      technicalIssueReviewed: false
    },
    // Simulator override state
    simState: "Pending"  // Pending | Approved | Correction Requested | Learner No-show | Trainer No-show | Partial Delivery | Technical Exception
  }
];

// ── Screen 18: Downstream mock record containers ──────────────────────────
if (!state.entitlementLedger) state.entitlementLedger = [];
if (!state.progressEvents) state.progressEvents = [];
if (!state.trainerEarnings) state.trainerEarnings = [];

// Active filter state
state.reviewFilters = {
  search: "",
  status: "All",
  classType: "All",
  trainer: "All",
  evidence: "All"
};

// Render queue list view
window.renderDeliveryReviewQueue = function() {
  const view = document.getElementById("staff-delivery-reviews-view");
  if (!view) return;

  // Counts
  const pendingCount = state.deliveryReviews.filter(r => r.reviewStatus === "Pending").length;
  const correctionCount = state.deliveryReviews.filter(r => r.reviewStatus === "Correction Requested").length;
  const techCount = state.deliveryReviews.filter(r => r.evidenceStatus === "Technical Exception").length;
  const approvedCount = state.deliveryReviews.filter(r => r.reviewStatus === "Approved").length;

  // Filter reviews
  const filtered = state.deliveryReviews.filter(r => {
    // Search
    if (state.reviewFilters.search) {
      const q = state.reviewFilters.search.toLowerCase();
      const matchSearch = r.learner.toLowerCase().includes(q) ||
                          r.trainer.toLowerCase().includes(q) ||
                          r.course.toLowerCase().includes(q) ||
                          r.occurrenceId.toLowerCase().includes(q);
      if (!matchSearch) return false;
    }
    // Status
    if (state.reviewFilters.status !== "All") {
      if (r.reviewStatus !== state.reviewFilters.status) return false;
    }
    // Class Type
    if (state.reviewFilters.classType !== "All") {
      if (r.classType !== state.reviewFilters.classType) return false;
    }
    // Trainer
    if (state.reviewFilters.trainer !== "All") {
      if (r.trainer !== state.reviewFilters.trainer) return false;
    }
    // Evidence
    if (state.reviewFilters.evidence !== "All") {
      if (state.reviewFilters.evidence === "Technical Issue" && r.evidenceStatus !== "Technical Exception") return false;
      if (state.reviewFilters.evidence === "Attendance Issue" && (r.attendanceStatus === "Absent" || r.attendanceStatus === "Late") === false) return false;
      if (state.reviewFilters.evidence === "Clean" && (r.evidenceStatus === "Technical Exception" || r.attendanceStatus === "Absent" || r.attendanceStatus === "Late")) return false;
    }
    return true;
  });

  // Table rows
  const rowsHtml = filtered.map(r => {
    // Badges
    let attBadge = "status-ready";
    if (r.attendanceStatus === "Absent") attBadge = "status-closed";
    else if (r.attendanceStatus === "Late" || r.attendanceStatus === "Technical Issue") attBadge = "status-submitted";

    let revBadge = "status-submitted"; // Pending
    if (r.reviewStatus === "Approved") revBadge = "status-ready";
    else if (r.reviewStatus === "Rejected") revBadge = "status-closed";
    else if (r.reviewStatus === "Correction Requested") revBadge = "status-closed"; // Purple in styles

    const isOverdue = r.occurrenceId === "OCC-TRIAL-003" && r.reviewStatus === "Pending"; // Simulated overdue report state
    const reportBadge = isOverdue ? `<span class="badge-status status-closed" style="font-size:10px;">Overdue</span>` : `<span class="badge-status status-ready" style="font-size:10px;">Submitted</span>`;

    return `
      <tr>
        <td style="padding:12px; font-weight:700; font-family:monospace;">${r.occurrenceId}</td>
        <td style="padding:12px; font-weight:700; color:var(--color-on-tertiary-fixed);">${r.learner}</td>
        <td style="padding:12px; font-size:13px; color:var(--color-on-surface-variant);">${r.course}</td>
        <td style="padding:12px; font-size:13.5px; font-weight:600;">${r.trainer}</td>
        <td style="padding:12px; font-size:12.5px;"><span class="badge-integration int-active" style="background:#e8e2d7; color:var(--color-on-surface);">${r.classType}</span></td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${r.deliveredTime}</td>
        <td style="padding:12px;"><span class="badge-status ${attBadge}" style="font-size:10.5px;">${r.attendanceStatus}</span></td>
        <td style="padding:12px;">${reportBadge}</td>
        <td style="padding:12px;"><span class="badge-status ${revBadge}" style="font-size:10.5px; ${r.reviewStatus === 'Correction Requested' ? 'background-color:#f3e8ff; color:#6b21a8; border:1px solid #d8b4fe;' : ''}">${r.reviewStatus}</span></td>
        <td style="padding:12px; text-align:center;">
          <a href="#staff/delivery-reviews/${r.occurrenceId}" class="btn btn-secondary" style="padding:4px 8px; font-size:11.5px; height:28px; font-weight:700;">Review</a>
        </td>
      </tr>
    `;
  }).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Delivery Reviews</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Review class evidence and trainer reports before accepting delivery.</p>
    </div>

    <!-- Summary Metrics Cards -->
    <div class="review-summary-grid">
      <div class="review-summary-card">
        <span class="review-summary-number">${pendingCount}</span>
        <span class="review-summary-label">Pending Review</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #6b21a8;">
        <span class="review-summary-number" style="color:#6b21a8;">${correctionCount}</span>
        <span class="review-summary-label">Correction Requested</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #ba1a1a;">
        <span class="review-summary-number" style="color:#ba1a1a;">${techCount}</span>
        <span class="review-summary-label">Technical Exceptions</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #137333;">
        <span class="review-summary-number" style="color:#137333;">${approvedCount + 12}</span>
        <span class="review-summary-label">Approved Today</span>
      </div>
    </div>

    <!-- Filters Panel -->
    <div class="filter-bar-grid">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Search Queue</label>
        <input type="text" id="review-search" class="form-input" style="height:36px; font-size:12.5px;" placeholder="Search learner, trainer..." value="${state.reviewFilters.search}" oninput="updateReviewFilters()">
      </div>
      
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Review Status</label>
        <select id="review-filter-status" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateReviewFilters()">
          <option value="All" ${state.reviewFilters.status === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Pending" ${state.reviewFilters.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Correction Requested" ${state.reviewFilters.status === 'Correction Requested' ? 'selected' : ''}>Correction Requested</option>
          <option value="Approved" ${state.reviewFilters.status === 'Approved' ? 'selected' : ''}>Approved</option>
          <option value="Rejected" ${state.reviewFilters.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Class Type</label>
        <select id="review-filter-type" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateReviewFilters()">
          <option value="All" ${state.reviewFilters.classType === 'All' ? 'selected' : ''}>All Types</option>
          <option value="Trial" ${state.reviewFilters.classType === 'Trial' ? 'selected' : ''}>Trial Class</option>
          <option value="Regular" ${state.reviewFilters.classType === 'Regular' ? 'selected' : ''}>Regular Class</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Trainer</label>
        <select id="review-filter-trainer" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateReviewFilters()">
          <option value="All" ${state.reviewFilters.trainer === 'All' ? 'selected' : ''}>All Trainers</option>
          <option value="Ayesha Rahman" ${state.reviewFilters.trainer === 'Ayesha Rahman' ? 'selected' : ''}>Ayesha Rahman</option>
          <option value="Hamza Siddiqui" ${state.reviewFilters.trainer === 'Hamza Siddiqui' ? 'selected' : ''}>Hamza Siddiqui</option>
          <option value="Sana Malik" ${state.reviewFilters.trainer === 'Sana Malik' ? 'selected' : ''}>Sana Malik</option>
          <option value="Usman Khan" ${state.reviewFilters.trainer === 'Usman Khan' ? 'selected' : ''}>Usman Khan</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Evidence Status</label>
        <select id="review-filter-evidence" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateReviewFilters()">
          <option value="All" ${state.reviewFilters.evidence === 'All' ? 'selected' : ''}>All Evidence</option>
          <option value="Clean" ${state.reviewFilters.evidence === 'Clean' ? 'selected' : ''}>Clean Session Logs</option>
          <option value="Attendance Issue" ${state.reviewFilters.evidence === 'Attendance Issue' ? 'selected' : ''}>Attendance Exception</option>
          <option value="Technical Issue" ${state.reviewFilters.evidence === 'Technical Issue' ? 'selected' : ''}>Technical Exception</option>
        </select>
      </div>
    </div>

    <!-- Table Renders -->
    <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
      <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Occurrence</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Course</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Trainer</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Type</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Delivered</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Attendance</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Report</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Review</th>
            <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="10" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No reviews found matching the filters.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
};

window.updateReviewFilters = function() {
  const searchInput = document.getElementById("review-search");
  const statusSel = document.getElementById("review-filter-status");
  const typeSel = document.getElementById("review-filter-type");
  const trainerSel = document.getElementById("review-filter-trainer");
  const evidenceSel = document.getElementById("review-filter-evidence");

  if (searchInput) state.reviewFilters.search = searchInput.value;
  if (statusSel) state.reviewFilters.status = statusSel.value;
  if (typeSel) state.reviewFilters.classType = typeSel.value;
  if (trainerSel) state.reviewFilters.trainer = trainerSel.value;
  if (evidenceSel) state.reviewFilters.evidence = evidenceSel.value;

  renderDeliveryReviewQueue();
};


// Render detailed review screen
window.renderDeliveryReviewDetail = function(occurrenceId) {
  const view = document.getElementById("staff-delivery-detail-view");
  if (!view) return;

  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  if (!review) {
    view.innerHTML = `<div class="form-card" style="text-align:center; padding:24px;"><h3>Occurrence review not found</h3><a href="#staff/delivery-reviews">Back to list</a></div>`;
    return;
  }

  // Pre-fill trainer report if not created yet
  if (!state.trainerReports[occurrenceId]) {
    state.trainerReports[occurrenceId] = {
      id: `REPORT-TRIAL-${Math.floor(100 + Math.random() * 900)}`,
      occurrenceId: occurrenceId,
      trialRequestId: review.trialRequestId,
      trainer: review.trainer,
      learner: review.learner,
      course: review.course,
      reportStatus: review.reviewStatus === "Correction Requested" ? "Correction Requested" : "Submitted",
      deliveryReviewStatus: review.reviewStatus,
      version: review.reviewStatus === "Correction Requested" ? 2 : 1,
      isEditingCorrection: false,
      mainTopic: review.occurrenceId === "OCC-CLASS-021" ? "Introduction to algebra and formulas" : "Introductions, speaking confidence and pronunciation",
      topicsCovered: [
        "Greetings & introductions",
        "Everyday vocabulary",
        "Basic sentence formation",
        "Speaking confidence",
        "Pronunciation practice"
      ],
      syllabusCoverage: {
        "Introduction to Spoken English": "Covered",
        "Greetings & Introductions": "Covered",
        "Everyday Vocabulary": "Partially Covered"
      },
      progressNotes: "Ali understood basic instructions well and participated actively. He can form simple sentences but hesitates during spontaneous conversation.",
      learnerFeedback: {
        strengths: "Good listening comprehension and willingness to participate.",
        improvements: "Speaking confidence, pronunciation and sentence fluency.",
        recommendations: "Continue live beginner-level speaking practice."
      },
      trialAssessment: {
        observedLevel: "Beginner",
        readiness: "Ready to Continue",
        assessmentNote: "Beginner-level live course appears appropriate based on speaking confidence and vocabulary."
      },
      homework: {
        enabled: true,
        title: "Introduce Yourself Practice",
        instructions: "Prepare a 1-minute introduction about yourself, your work/studies and one hobby."
      },
      resources: [
        { name: "Basic Speaking Practice PDF", type: "PDF", attached: true },
        { name: "Pronunciation Exercise Audio", type: "Audio", attached: true }
      ],
      generalNotes: "Session completed smoothly. Learner was engaged and asked about weekday evening classes.",
      privateNotes: "Learner appeared nervous initially but became more confident after guided prompts.",
      sessionIssues: review.occurrenceId === "OCC-TRIAL-003" ? "Audio issue" : "No issues",
      sessionIssuesDetails: review.occurrenceId === "OCC-TRIAL-003" ? "Learner mic dropped repeatedly." : "",
      history: [
        { time: "13 Aug · 7:46 PM", text: "Occurrence moved to Awaiting Report" },
        { time: "13 Aug · 7:52 PM", text: "Trainer report submitted" }
      ]
    };
  }

  const report = state.trainerReports[occurrenceId];

  // Syllabus rows
  const syllabusHtml = Object.keys(report.syllabusCoverage).map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px dashed var(--color-outline-variant);">
      <span style="font-size:13px; color:var(--color-on-surface-variant);">${item}</span>
      <span class="badge-status status-ready" style="font-size:10px; background:#e2e8f0; color:var(--color-on-surface); border-color:#ccc;">${report.syllabusCoverage[item]}</span>
    </div>
  `).join("");

  // Resources
  const resourcesHtml = report.resources.map(res => `
    <li style="font-size:13px; color:var(--color-on-surface-variant); padding:4px 0;">
      ✓ ${res.name} <span style="font-size:9.5px; opacity:0.8; background:var(--color-surface-low); padding:1px 4px; border-radius:2px;">${res.type}</span>
    </li>
  `).join("");

  // Timeline visual markup
  const timelineHtml = review.timeline.map(t => `
    <li class="timeline-evidence-item">
      <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">${t.time}</span>
      <span>${t.text}</span>
    </li>
  `).join("");

  // Exceptions / Alarms
  const isMismatch = occurrenceId === "OCC-CLASS-021" && review.reviewStatus === "Correction Requested";
  const isProviderIncomplete = review.evidenceStatus === "Technical Exception";
  const isOverdue = occurrenceId === "OCC-TRIAL-003";

  // Badges status mapping
  let reviewBadgeClass = "status-submitted"; // Pending
  if (review.reviewStatus === "Approved") reviewBadgeClass = "status-ready";
  else if (review.reviewStatus === "Rejected") reviewBadgeClass = "status-closed";
  else if (review.reviewStatus === "Correction Requested") reviewBadgeClass = "status-closed";

  // Review Checks Calculations
  const meetsLearnerTime = review.joinedTimes.learnerDuration >= 40;
  const meetsTrainerTime = review.joinedTimes.trainerDuration >= 40;

  view.innerHTML = `
    <!-- Back links -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center;">
      <a href="#staff/delivery-reviews" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Delivery Reviews
      </a>
      <span style="font-size:12px; color:var(--color-tertiary);">Reviewer: <strong>Sarah Ahmed</strong> (Operations Manager)</span>
    </div>

    <!-- Header info -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Review Class Delivery</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          occurrence: <strong>${review.occurrenceId}</strong> &middot; Course: <strong>${review.course}</strong> &middot; Learner: <strong>${review.learner}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-ready" style="font-size:10.5px; margin-right:4px;">Report Submitted</span>
        <span class="badge-status ${reviewBadgeClass}" style="font-size:10.5px; ${review.reviewStatus === 'Correction Requested' ? 'background-color:#f3e8ff; color:#6b21a8; border:1px solid #d8b4fe;' : ''}">Review: ${review.reviewStatus}</span>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:4px;">Trainer: <strong>${review.trainer}</strong> · Delivered: <strong>13 Aug 2026</strong></div>
      </div>
    </div>

    <!-- Split layouts -->
    <div class="report-workspace-grid">
      
      <!-- Left Column: Trainer Report Content (Read-Only) -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        <!-- Technical Interruption exceptions banner -->
        ${isProviderIncomplete ? `
          <div class="alarm-box animate-fade-in" style="background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left-color:#f0d97a;">
            <h4 style="color:#b06000;">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Delivery Evidence Incomplete
            </h4>
            <p style="margin-bottom:8px;">Meeting provider webhooks dropped midway. Attendance details cannot currently be verified through database logs.</p>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-secondary" onclick="simulateEvidenceReconciled('${occurrenceId}')" style="height:28px; font-size:11.5px; padding:0 8px;">Retry Evidence Reconciliation</button>
              <button class="btn btn-secondary" onclick="showToastAlert('Technical exception logged.')" style="height:28px; font-size:11.5px; padding:0 8px;">Mark Exception</button>
            </div>
          </div>
        ` : ''}

        <!-- Attendance Mismatch Warning Banner -->
        ${isMismatch ? `
          <div class="alarm-box animate-fade-in">
            <h4>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Attendance Mismatch Alarm
            </h4>
            <p>The trainer report states the learner attended the full class, but provider logs verify only 22 minutes of learner presence. Please inspect evidence timeline and request trainer correction.</p>
          </div>
        ` : ''}

        <!-- Trainer Correction Request Banner -->
        ${review.hasCorrectionRequest ? `
          <div class="form-card" style="border:1.5px solid var(--color-secondary); background-color:rgba(240, 217, 122, 0.08); padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-secondary); margin:0; display:flex; align-items:center; gap:6px;">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                Attendance Correction Requested
              </h4>
              <span class="badge-status status-submitted" style="font-size:9.5px; padding:1px 6px;">Pending Operations</span>
            </div>
            <p style="font-size:12.5px; line-height:18px; margin-bottom:12px; color:var(--color-on-surface-variant);">
              Current Outcome: <strong>${review.attendanceStatus}</strong> &rarr; Trainer Proposes: <strong style="color:var(--color-secondary);">${review.correctionProposedOutcome}</strong><br>
              Trainer Reason: <em>"${review.correctionProposedReason}"</em>
            </p>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-primary" onclick="acceptCorrectionProposal('${occurrenceId}')" style="height:32px; font-size:12px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700; padding:0 12px;">Accept Correction</button>
              <button class="btn btn-secondary" onclick="rejectCorrectionProposal('${occurrenceId}')" style="height:32px; font-size:12px; padding:0 12px;">Reject Correction</button>
            </div>
          </div>
        ` : ''}

        <!-- Overdue report state -->
        ${isOverdue && review.reviewStatus === 'Pending' ? `
          <div class="form-card" style="padding:24px; text-align:center; border:1px solid #ba1a1a; background:rgba(186, 26, 26, 0.02);">
            <div style="font-size:24px; margin-bottom:8px;">⏳</div>
            <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:#ba1a1a; margin-bottom:6px;">Trainer Report Overdue</h3>
            <p style="font-size:13px; color:var(--color-tertiary); max-width:440px; margin:0 auto 16px auto;">The class ended on 14 August but trainer Sana Malik has not submitted the required assessment report.</p>
            <button class="btn btn-secondary" onclick="sendReportReminder('${review.trainer}')" style="height:36px; font-size:13px; padding:0 16px;">Send Reminder Request</button>
          </div>
        ` : `
          <!-- Trainer Report Form details -->
          <div class="form-card">
            <h3 class="form-section-title">Trainer Session Report</h3>
            
            <div class="form-group" style="margin-bottom:var(--spacing-md);">
              <label class="form-label" style="font-weight:700;">Main Session Topic</label>
              <input type="text" class="form-input" style="background:var(--color-surface-low);" value="${report.mainTopic}" readonly>
            </div>

            <div class="form-group" style="margin-bottom:var(--spacing-md);">
              <label class="form-label" style="font-weight:700;">Specific Topics Covered</label>
              <div class="tags-container" style="margin-top:0;">
                ${report.topicsCovered.map(t => `<span class="tag-pill" style="background:#e8e2d7; color:var(--color-on-surface); font-size:12px;">${t}</span>`).join("")}
              </div>
            </div>

            <div class="form-row" style="margin-top:var(--spacing-md);">
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Syllabus Status</label>
                <div style="background:var(--color-surface-low); padding:8px 12px; border-radius:6px;">
                  ${syllabusHtml}
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Assigned Homework</label>
                <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:12.5px;">
                  ${report.homework.enabled ? `<strong>Title:</strong> ${report.homework.title}<br><span style="opacity:0.85;">${report.homework.instructions}</span>` : '<em>No homework assigned</em>'}
                </div>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h3 class="form-section-title">Learner Assessment & Progress</h3>
            
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Learner Progress Notes</label>
              <div style="background:var(--color-surface-low); padding:12px; border-radius:6px; font-size:13.5px; line-height:20px; color:var(--color-on-surface-variant);">
                ${report.progressNotes}
              </div>
            </div>

            <div class="form-row" style="margin-top:var(--spacing-md);">
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Learner Strengths</label>
                <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:13px;">${report.learnerFeedback.strengths}</div>
              </div>
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Areas to Improve</label>
                <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:13px;">${report.learnerFeedback.improvements}</div>
              </div>
            </div>

            <div class="form-group" style="margin-top:var(--spacing-md);">
              <label class="form-label" style="font-weight:700;">Trainer Recommendations</label>
              <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:13px;">${report.learnerFeedback.recommendations}</div>
            </div>

            <div style="border-top:1px solid var(--color-outline-variant); margin-top:var(--spacing-md); padding-top:var(--spacing-md);">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" style="font-weight:700;">Observed Cohort Level</label>
                  <span class="badge-integration int-active" style="display:inline-block; background:var(--color-primary-container); color:var(--color-on-primary-container); font-weight:800; font-size:12px; padding:3px 8px; border-radius:4px;">${report.trialAssessment.observedLevel}</span>
                </div>
                <div class="form-group">
                  <label class="form-label" style="font-weight:700;">Curriculum Readiness</label>
                  <span class="badge-status status-ready" style="display:inline-block; font-size:12px; font-weight:800;">${report.trialAssessment.readiness}</span>
                </div>
              </div>
              
              <div class="form-group" style="margin-top:var(--spacing-sm);">
                <label class="form-label" style="font-weight:700;">Cohort Suitability summary</label>
                <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:12.5px; font-style:italic;">"${report.trialAssessment.assessmentNote}"</div>
              </div>
            </div>
          </div>

          <div class="form-card">
            <h3 class="form-section-title">Delivery Resources & Issues</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Shared Resources</label>
                <ul style="margin:0; padding-left:0; list-style:none;">
                  ${resourcesHtml || '<li style="font-size:13px; color:var(--color-tertiary); font-style:italic;">No resources shared</li>'}
                </ul>
              </div>
              
              <div class="form-group">
                <label class="form-label" style="font-weight:700;">Trainer Technical Issues</label>
                <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:12.5px;">
                  <strong>Issue:</strong> ${report.sessionIssues}<br>
                  ${report.sessionIssuesDetails ? `<span>${report.sessionIssuesDetails}</span>` : ''}
                </div>
              </div>
            </div>

            <div class="form-group" style="margin-top:var(--spacing-md);">
              <label class="form-label" style="font-weight:700;">General Delivery Notes</label>
              <div style="background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:12.5px;">${report.generalNotes || '<em>No delivery notes provided</em>'}</div>
            </div>

            <div class="form-group" style="margin-top:var(--spacing-md); background:rgba(186, 26, 26, 0.03); border:1px dashed rgba(186, 26, 26, 0.15); padding:10px; border-radius:6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <label class="form-label" style="font-weight:700; color:#ba1a1a; margin-bottom:0;">Internal Learner Notes (Staff Only)</label>
                <span style="font-size:9.5px; color:#ba1a1a; font-weight:800; border:1px solid #ba1a1a; padding:1px 4px; border-radius:2px; text-transform:uppercase;">Internal Badge</span>
              </div>
              <p style="font-size:12.5px; color:var(--color-on-surface-variant); margin:0;">${report.privateNotes || '<em>No internal notes logged</em>'}</p>
            </div>
          </div>
        `}

        <!-- Report Version history list -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Report Versions</h3>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; background:var(--color-surface-low); padding:8px 12px; border-radius:4px;">
              <span><strong>Version ${report.version}</strong> (Current) &middot; Submitted 13 Aug · 8:21 PM</span>
              <span class="badge-status status-ready" style="font-size:9.5px; padding:1px 6px;">Current</span>
            </div>
            ${report.previousVersion ? `
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; border:1px solid var(--color-outline-variant); padding:8px 12px; border-radius:4px;">
                <span><strong>Version ${report.previousVersion.version}</strong> &middot; Submitted 13 Aug · 7:52 PM</span>
                <button class="btn btn-secondary" onclick="viewPreviousReportVersion('${occurrenceId}')" style="height:24px; font-size:11px; padding:0 8px;">View Version ${report.previousVersion.version}</button>
              </div>
            ` : ''}
          </div>
        </div>

      </div>

      <!-- Right Column: Verification checklist & Decision options -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
        
        <!-- Class details -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Class Information</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${review.learner}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${review.trainer}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Delivered:</td><td style="padding:6px 0; font-weight:700; text-align:right;">13 August 2026</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Time Slot:</td><td style="padding:6px 0; font-weight:700; text-align:right;">7:00 PM - 7:45 PM PKT</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Duration:</td><td style="padding:6px 0; font-weight:700; text-align:right;">45 mins</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">occurrence ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${review.occurrenceId}</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Trial request Ref:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${review.trialRequestId}</td></tr>
          </table>
        </div>

        <!-- Attendance evidence timeline -->
        <div class="form-card" style="padding:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 class="form-section-title" style="font-size:14px; margin-bottom:0;">Attendance Evidence</h3>
            <span style="font-size:9.5px; border:1px solid var(--color-secondary); color:var(--color-secondary); padding:1px 4px; border-radius:2px; font-weight:800; text-transform:uppercase;">Provider Evidence</span>
          </div>
          <table style="width:100%; font-size:12px; border-collapse:collapse; margin-bottom:12px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0; color:var(--color-tertiary);">Trainer Joined:</td><td style="padding:4px 0; font-weight:700; text-align:right;">${review.joinedTimes.trainerJoined}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0; color:var(--color-tertiary);">Learner Joined:</td><td style="padding:4px 0; font-weight:700; text-align:right;">${review.joinedTimes.learnerJoined}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0; color:var(--color-tertiary);">Learner Left:</td><td style="padding:4px 0; font-weight:700; text-align:right;">${review.joinedTimes.learnerLeft}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0; color:var(--color-tertiary);">Trainer Left:</td><td style="padding:4px 0; font-weight:700; text-align:right;">${review.joinedTimes.trainerLeft}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0; color:var(--color-tertiary);">Learner Connection:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${review.joinedTimes.learnerDuration} mins</td></tr>
            <tr><td style="padding:4px 0; color:var(--color-tertiary);">Trainer Connection:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${review.joinedTimes.trainerDuration} mins</td></tr>
          </table>

          <div style="font-size:11.5px; font-weight:700; margin-bottom:6px; color:var(--color-tertiary);">Connection Timeline:</div>
          <ul class="timeline-evidence" style="margin-bottom:0;">
            ${timelineHtml}
          </ul>
        </div>

        <!-- Operations checklist comparison card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Review Checks</h3>
          <div class="review-checklist">
            <div class="review-check-row">
              <span class="review-check-label">Scheduled Duration (45m)</span>
              <span class="review-check-status review-status-good">Looks Good</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Learner Presence (${review.joinedTimes.learnerDuration}m)</span>
              <span class="review-check-status ${meetsLearnerTime ? 'review-status-good' : 'review-status-error'}">${meetsLearnerTime ? 'Looks Good' : 'Review'}</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Trainer Presence (${review.joinedTimes.trainerDuration}m)</span>
              <span class="review-check-status ${meetsTrainerTime ? 'review-status-good' : 'review-status-error'}">${meetsTrainerTime ? 'Looks Good' : 'Review'}</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Trainer Report Submitted</span>
              <span class="review-check-status ${isOverdue && review.reviewStatus === 'Pending' ? 'review-status-error' : 'review-status-good'}">${isOverdue && review.reviewStatus === 'Pending' ? 'Overdue' : 'Complete'}</span>
            </div>
          </div>
        </div>

        <!-- Decision Box -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:8px;">Review Decision</h3>
          
          <div class="form-group" style="margin-bottom:12px;">
            <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Review Notes (Optional)</label>
            <textarea id="ops-review-notes" class="form-input" style="height:60px; font-size:12.5px; line-height:16px;" placeholder="Add an internal review note..." ${review.reviewStatus !== 'Pending' ? 'disabled' : ''}>${review.operationsNotes}</textarea>
          </div>

          ${review.reviewStatus === 'Pending' ? `
            <div style="display:flex; flex-direction:column; gap:8px;">
              <button class="btn btn-primary" onclick="approveDeliveryReview('${occurrenceId}')" style="width:100%; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">
                Approve Delivery
              </button>
              <button class="btn btn-secondary" onclick="requestCorrectionReview('${occurrenceId}')" style="width:100%; height:38px;">
                Request Correction
              </button>
              <button class="btn btn-secondary" onclick="rejectDeliveryReview('${occurrenceId}')" style="width:100%; height:38px; color:#ba1a1a; border-color:rgba(186, 26, 26, 0.2);">
                Reject Delivery
              </button>
            </div>
          ` : `
            <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:10px 12px; font-size:12.5px; text-align:center; font-weight:700; color:var(--color-on-tertiary-fixed);">
              Review Closed: ${review.reviewStatus}
            </div>
          `}
        </div>

      </div>

    </div>
  `;
};

// 1. Accept attendance correction request
window.acceptCorrectionProposal = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">This will reconcile the final attendance outcome to match the trainer's proposal.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Current:</strong> ${review.attendanceStatus}</div>
        <div><strong>New Proposed:</strong> ${review.correctionProposedOutcome}</div>
        <div><strong>Trainer Reason:</strong> "${review.correctionProposedReason}"</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmAcceptCorrection('${occurrenceId}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Correction</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Accept Attendance Correction?", content);
};

window.confirmAcceptCorrection = function(occurrenceId) {
  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  review.attendanceStatus = review.correctionProposedOutcome;
  review.hasCorrectionRequest = false;
  
  review.timeline.push({
    time: "8:06 PM",
    text: "Attendance correction approved by Operations"
  });

  if (report) {
    report.history.push({
      time: "13 Aug · 8:06 PM",
      text: `Attendance correction approved to ${review.attendanceStatus} by reviewer Sarah Ahmed`
    });
  }

  renderDeliveryReviewDetail(occurrenceId);
  showToastAlert(`Attendance updated to ${review.attendanceStatus}.`);
};

// 2. Reject attendance correction request
window.rejectCorrectionProposal = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Enter a reason to reject the trainer's attendance correction request.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Reason <span style="color:red;">*</span></label>
        <textarea id="reject-correction-reason" class="form-input" style="height:75px;" placeholder="e.g. Provider evidence confirms the learner joined late before the technical interruption..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRejectCorrection('${occurrenceId}')" style="flex:1; height:40px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Reject Correction</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Reject Attendance Correction", content);
};

window.confirmRejectCorrection = function(occurrenceId) {
  const reason = document.getElementById("reject-correction-reason").value.trim();
  if (!reason) {
    showToastAlert("Reason is required to reject.");
    document.getElementById("reject-correction-reason").focus();
    return;
  }

  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  review.hasCorrectionRequest = false;
  review.timeline.push({
    time: "8:06 PM",
    text: `Attendance correction rejected: "${reason}"`
  });

  if (report) {
    report.history.push({
      time: "13 Aug · 8:06 PM",
      text: `Attendance correction rejected by Sarah Ahmed: "${reason}"`
    });
  }

  renderDeliveryReviewDetail(occurrenceId);
  showToastAlert("Attendance correction request rejected.");
};

// 3. Approve Delivery Review
window.approveDeliveryReview = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const notesText = document.getElementById("ops-review-notes");
  if (notesText) review.operationsNotes = notesText.value.trim();

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">This will accept the class delivery as reviewed and mark it approved.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Occurrence:</strong> ${occurrenceId}</div>
        <div><strong>Trainer:</strong> ${review.trainer}</div>
        <div><strong>Learner:</strong> ${review.learner}</div>
        <div><strong>Attendance Status:</strong> ${review.attendanceStatus}</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmApproveDelivery('${occurrenceId}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Approval</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Approve This Delivery?", content);
};

window.confirmApproveDelivery = function(occurrenceId) {
  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  review.reviewStatus = "Approved";
  review.timeline.push({
    time: "8:06 PM",
    text: "Delivery approved by Sarah Ahmed"
  });

  if (report) {
    report.reportStatus = "Submitted"; // or Accepted
    report.deliveryReviewStatus = "Approved";
    report.history.push({
      time: "13 Aug · 8:06 PM",
      text: "Report approved by reviewer Sarah Ahmed"
    });
  }

  // Also update parent occurrence status to Approved
  if (state.scheduledOccurrences[occurrenceId]) {
    state.scheduledOccurrences[occurrenceId].status = "Approved";
  }

  renderApprovalSuccessScreen(occurrenceId);
};

function renderApprovalSuccessScreen(occurrenceId) {
  const view = document.getElementById("staff-delivery-detail-view");
  if (!view) return;

  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Delivery Approved</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">The trial delivery has been accepted.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Occurrence</td><td class="receipt-value" style="font-family:monospace;">${review.occurrenceId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Review Status</td><td class="receipt-value"><span class="badge-status status-ready">Approved</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Trainer Report</td><td class="receipt-value"><span class="badge-status status-ready">Accepted</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Trial Outcome</td><td class="receipt-value"><span class="badge-integration int-active" style="background:#e8e2d7; color:var(--color-on-surface); font-weight:700;">Ready for CSR Follow-up</span></td></tr>
      </table>

      <!-- Downstream Updates Logs -->
      <div style="text-align:left; background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:24px;">
        <h4 style="font-size:12.5px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); margin-bottom:8px; letter-spacing:0.05em;">Downstream Actions Logs</h4>
        <table style="width:100%; font-size:12px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Trial Delivery Status:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Approved</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">CSR Follow-up Pipeline:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Created</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Learner Paid Membership:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Decided (No Auto-Conversion)</td></tr>
          <tr><td style="padding:4px 0;">Trainer Compensation Source:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Created (Unpaid payroll status)</td></tr>
        </table>
      </div>

      <div style="display:flex; gap:12px; max-width:440px; margin:0 auto;">
        <button class="btn btn-primary" onclick="window.location.hash='#staff/follow-ups/FOLLOWUP-001'" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Open CSR Follow-up</button>
        <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="flex:1; height:42px;">Back to Reviews</button>
      </div>
    </div>
  `;
}

// 4. Request Report Correction
window.requestCorrectionReview = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Select correction reason category and input detailed instructions for the trainer.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Category <span style="color:red;">*</span></label>
        <select id="correct-ops-category" class="form-input" style="height:38px;">
          <option value="Attendance details unclear">Attendance details unclear</option>
          <option value="Syllabus coverage incomplete">Syllabus coverage incomplete</option>
          <option value="Learner progress unclear">Learner progress unclear</option>
          <option value="Missing technical issue details">Missing technical issue details</option>
          <option value="Missing required field">Missing required field</option>
          <option value="Other">Other Category</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Instructions to Trainer <span style="color:red;">*</span></label>
        <textarea id="correct-ops-instructions" class="form-input" style="height:80px;" placeholder="Please clarify the learner's attendance interruption and update the progress notes..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRequestCorrection('${occurrenceId}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Send Correction Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Request Report Correction", content);
};

window.confirmRequestCorrection = function(occurrenceId) {
  const category = document.getElementById("correct-ops-category").value;
  const instruct = document.getElementById("correct-ops-instructions").value.trim();

  if (!instruct) {
    showToastAlert("Instructions are required.");
    document.getElementById("correct-ops-instructions").focus();
    return;
  }

  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  review.reviewStatus = "Correction Requested";
  review.operationsNotes = `Correction requested: ${category}. "${instruct}"`;
  
  review.timeline.push({
    time: "8:06 PM",
    text: `Correction requested from ${review.trainer}`
  });

  if (report) {
    report.reportStatus = "Correction Requested";
    report.operationsNote = instruct;
    report.isEditingCorrection = false; // Trainer needs to click edit report in Screen 08
    report.history.push({
      time: "13 Aug · 8:06 PM",
      text: `Correction requested by Sarah Ahmed: "${instruct}"`
    });
  }

  renderDeliveryReviewDetail(occurrenceId);
  showToastAlert(`Correction requested: ${category}`);
};

// 5. Reject Delivery Review
window.rejectDeliveryReview = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Confirming class rejection requires selecting a critical policy failure category and entering notes.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Reason <span style="color:red;">*</span></label>
        <select id="reject-ops-reason" class="form-input" style="height:38px;">
          <option value="Class was not delivered">Class was not delivered</option>
          <option value="Trainer no-show">Trainer no-show</option>
          <option value="Invalid delivery evidence">Invalid delivery evidence</option>
          <option value="Major policy issue">Major policy issue</option>
          <option value="Duplicate/incorrect occurrence">Duplicate/incorrect occurrence</option>
          <option value="Other">Other critical issue</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Detailed Rejection Note <span style="color:red;">*</span></label>
        <textarea id="reject-ops-note" class="form-input" style="height:80px;" placeholder="e.g. Provider evidence shows the trainer did not join the scheduled class..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRejectDelivery('${occurrenceId}')" style="flex:1; height:40px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Confirm Rejection</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Reject Delivery?", content);
};

window.confirmRejectDelivery = function(occurrenceId) {
  const reason = document.getElementById("reject-ops-reason").value;
  const note = document.getElementById("reject-ops-note").value.trim();

  if (!note) {
    showToastAlert("Detailed notes are required for rejection.");
    document.getElementById("reject-ops-note").focus();
    return;
  }

  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  review.reviewStatus = "Rejected";
  review.rejectionReason = reason;
  review.rejectionNotes = note;
  review.operationsNotes = `Rejected: ${reason}. "${note}"`;

  review.timeline.push({
    time: "8:06 PM",
    text: `Delivery rejected by Operations: ${reason}`
  });

  if (report) {
    report.history.push({
      time: "13 Aug · 8:06 PM",
      text: `Delivery rejected by Sarah Ahmed: ${reason}. Notes: "${note}"`
    });
  }

  // Also update occurrence status
  if (state.scheduledOccurrences[occurrenceId]) {
    state.scheduledOccurrences[occurrenceId].status = "Rejected";
  }

  renderDeliveryReviewDetail(occurrenceId);
  showToastAlert(`Delivery Rejected: ${reason}`);
};

// 6. Support evidence webhook reconciliation simulator
window.simulateEvidenceReconciled = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  review.evidenceStatus = "Reconciled";
  renderDeliveryReviewDetail(occurrenceId);
  showToastAlert("Evidence reconciliation resolved.");
};

// 7. Send overdue report reminders
window.sendReportReminder = function(trainerName) {
  showToastAlert(`Reminder queued for ${trainerName}.`);
};


// ==========================================================================
// Screen 18 - Operations Paid-Class Delivery Review & Approval
// ==========================================================================

// Simulator state switcher
window.setScreen18SimState = function(occurrenceId, simState) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  if (!review) return;
  review.simState = simState;

  // Reset to base state for each sim scenario
  if (simState === "Pending") {
    review.reviewStatus = "Pending";
    review.occurrenceStatus = "In Review";
    review.attendanceStatus = "Present";
    review.hasCorrectionRequest = false;
  } else if (simState === "Correction Requested") {
    review.reviewStatus = "Correction Requested";
    review.occurrenceStatus = "In Review";
    review.operationsNotes = "Please clarify what was covered after the learner reconnected. Progress notes need more detail.";
  } else if (simState === "Approved") {
    // Only visually — real approval goes through confirmApproveClassDelivery
    review.reviewStatus = "Approved";
    review.occurrenceStatus = "Approved/Completed";
  } else if (simState === "Learner No-show") {
    review.reviewStatus = "Pending";
    review.attendanceStatus = "Absent";
    review.occurrenceStatus = "In Review";
    review.hasCorrectionRequest = false;
  } else if (simState === "Trainer No-show") {
    review.reviewStatus = "Pending";
    review.attendanceStatus = "Present";
    review.occurrenceStatus = "In Review";
    review.hasCorrectionRequest = false;
  } else if (simState === "Partial Delivery") {
    review.reviewStatus = "Pending";
    review.attendanceStatus = "Present";
    review.occurrenceStatus = "In Review";
    review.joinedTimes.learnerDuration = 22;
    review.hasCorrectionRequest = false;
  } else if (simState === "Technical Exception") {
    review.reviewStatus = "Pending";
    review.attendanceStatus = "Present";
    review.occurrenceStatus = "In Review";
    review.joinedTimes.learnerDuration = 10;
    review.hasCorrectionRequest = false;
  }

  renderPaidClassDeliveryReview(occurrenceId);
};

// Toggle checklist item
window.toggleScreen18Checklist = function(occurrenceId, field) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  if (!review || review.reviewStatus === "Approved") return;
  review.verificationChecklist[field] = !review.verificationChecklist[field];
  renderPaidClassDeliveryReview(occurrenceId);
};

// Main renderer
window.renderPaidClassDeliveryReview = function(occurrenceId) {
  const view = document.getElementById("staff-delivery-detail-view");
  if (!view) return;

  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  if (!review) {
    view.innerHTML = `<div class="form-card" style="text-align:center; padding:24px;"><h3>Review not found</h3><a href="#staff/delivery-reviews">← Back to Delivery Reviews</a></div>`;
    return;
  }

  const report = state.trainerReports[occurrenceId];
  const simState = review.simState || "Pending";
  const isApproved = review.reviewStatus === "Approved";
  const isCorrectionRequested = review.reviewStatus === "Correction Requested";
  const isRejected = review.reviewStatus === "Rejected";

  // Checklist completeness
  const cl = review.verificationChecklist;
  const allChecked = Object.values(cl).every(v => v === true);

  // Attendance badge
  let attColor = "#137333"; let attBg = "#e6f4ea"; let attBorder = "#c2e7cc";
  if (review.attendanceStatus === "Absent") { attColor = "#ba1a1a"; attBg = "#ffdad6"; attBorder = "#f2b8b8"; }
  else if (review.attendanceStatus === "Technical Issue") { attColor = "#856404"; attBg = "#fff3cd"; attBorder = "#ffd663"; }

  // Review status badge
  let revColor = "#856404"; let revBg = "#fff3cd"; let revBorder = "#ffd663";
  if (isApproved) { revColor = "#137333"; revBg = "#e6f4ea"; revBorder = "#c2e7cc"; }
  else if (isCorrectionRequested) { revColor = "#6b21a8"; revBg = "#f3e8ff"; revBorder = "#d8b4fe"; }
  else if (isRejected) { revColor = "#ba1a1a"; revBg = "#ffdad6"; revBorder = "#f2b8b8"; }

  // Occurrence badge
  const occBadge = isApproved ? "Approved/Completed" : (isRejected ? "Rejected for Correction" : review.occurrenceStatus);

  // Special scenario content
  let specialBanner = "";
  if (simState === "Learner No-show") {
    specialBanner = `
      <div style="background:#ffdad6; border:1.5px solid #f2b8b8; border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
        <h4 style="font-size:13px; font-weight:800; color:#ba1a1a; margin-bottom:6px;">⚠ Learner No-show — Policy Decision Required</h4>
        <p style="font-size:12.5px; color:#ba1a1a; margin:0;">No learner join event detected in provider evidence. The trainer was present for the full scheduled duration. This does not automatically resolve the entitlement outcome. An explicit Operations decision is required before approving or rejecting delivery.</p>
      </div>`;
  } else if (simState === "Trainer No-show") {
    specialBanner = `
      <div style="background:#ffdad6; border:1.5px solid #f2b8b8; border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
        <h4 style="font-size:13px; font-weight:800; color:#ba1a1a; margin-bottom:6px;">🚫 Trainer No-show Exception</h4>
        <p style="font-size:12.5px; color:#ba1a1a; margin-bottom:8px;">No valid trainer join evidence found. Learner was present and waiting. This delivery cannot be approved under standard policy.</p>
        <p style="font-size:12px; font-weight:700; color:#ba1a1a;">Recommended action: Reject Delivery. Trainer earning must NOT be created.</p>
      </div>`;
  } else if (simState === "Partial Delivery") {
    specialBanner = `
      <div style="background:#fff3cd; border:1.5px solid #ffd663; border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
        <h4 style="font-size:13px; font-weight:800; color:#856404; margin-bottom:6px;">⚡ Partial Delivery — Explicit Decision Required</h4>
        <p style="font-size:12.5px; color:#856404; margin-bottom:0;">Scheduled: 45 min &nbsp;|&nbsp; Delivered: 22 min connected. This does not qualify as a standard full class delivery. Approve partial, reject, or request correction explicitly.</p>
      </div>`;
  } else if (simState === "Technical Exception") {
    specialBanner = `
      <div style="background:#fff3cd; border:1.5px solid #ffd663; border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
        <h4 style="font-size:13px; font-weight:800; color:#856404; margin-bottom:6px;">⚡ Technical Exception — Platform Outage</h4>
        <p style="font-size:12.5px; color:#856404; margin-bottom:0;">Only 10 minutes successfully delivered due to a confirmed meeting provider outage. Normal entitlement debit policy may not apply. Explicit Operations decision required.</p>
      </div>`;
  } else if (isCorrectionRequested && review.operationsNotes) {
    specialBanner = `
      <div style="background:#f3e8ff; border:1.5px solid #d8b4fe; border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
        <h4 style="font-size:13px; font-weight:800; color:#6b21a8; margin-bottom:6px;">📝 Report Correction Requested</h4>
        <p style="font-size:12.5px; color:#6b21a8; margin:0;">${review.operationsNotes}</p>
      </div>`;
  }

  // Checklist item renderer
  const renderCheck = (key, label) => {
    const checked = cl[key];
    const disabled = isApproved || isRejected;
    return `
      <div onclick="${disabled ? '' : `toggleScreen18Checklist('${occurrenceId}', '${key}')`}"
           style="display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:6px; cursor:${disabled ? 'default' : 'pointer'}; background:${checked ? 'rgba(19,115,51,0.06)' : 'var(--color-surface-low)'}; border:1px solid ${checked ? '#c2e7cc' : 'var(--color-outline-variant)'}; margin-bottom:6px; transition:all 0.2s;">
        <div style="width:20px; height:20px; border-radius:4px; background:${checked ? '#137333' : 'var(--color-surface-lowest)'}; border:1.5px solid ${checked ? '#137333' : 'var(--color-outline-variant)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          ${checked ? '<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : ''}
        </div>
        <span style="font-size:13px; font-weight:600; color:${checked ? '#137333' : 'var(--color-on-surface)'};">${label}</span>
      </div>`;
  };

  // Syllabus coverage badge
  const syllabusColors = { "Covered": "#137333", "Partially Covered": "#856404", "In Progress": "#1a73e8", "Not Covered": "#ba1a1a" };
  const syllabusRow = (label, status) => {
    const color = syllabusColors[status] || "#666";
    return `<tr style="border-bottom:1px solid var(--color-outline-variant);">
      <td style="padding:8px 10px; font-size:13px;">${label}</td>
      <td style="padding:8px 10px; text-align:right;"><span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:${color}22; color:${color}; border:1px solid ${color}44;">${status}</span></td>
    </tr>`;
  };

  view.innerHTML = `
    <!-- Dev Simulator Bar -->
    <div class="dev-sim-panel animate-fade-in" style="margin-bottom:var(--spacing-md);">
      <span style="color:#e2e8f0; margin-right:4px; font-size:11.5px; font-weight:700;">Screen 18 Simulator:</span>
      <button class="dev-sim-btn ${simState === 'Pending' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Pending')">Pending</button>
      <button class="dev-sim-btn ${simState === 'Correction Requested' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Correction Requested')">Correction Requested</button>
      <button class="dev-sim-btn ${simState === 'Approved' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Approved')">Approved</button>
      <button class="dev-sim-btn ${simState === 'Learner No-show' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Learner No-show')">Learner No-show</button>
      <button class="dev-sim-btn ${simState === 'Trainer No-show' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Trainer No-show')">Trainer No-show</button>
      <button class="dev-sim-btn ${simState === 'Partial Delivery' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Partial Delivery')">Partial Delivery</button>
      <button class="dev-sim-btn ${simState === 'Technical Exception' ? 'active' : ''}" onclick="setScreen18SimState('${occurrenceId}','Technical Exception')">Technical Exception</button>
    </div>

    <!-- Back link -->
    <div style="margin-bottom:var(--spacing-md);">
      <a href="#staff/delivery-reviews" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Delivery Reviews
      </a>
    </div>

    ${specialBanner}

    <!-- Page Header -->
    <section class="catalogue-hero" aria-labelledby="s18-title" style="display:block; padding-bottom:var(--spacing-xs); margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant);">
      <div class="hero-content">
        <div style="font-size:13px; font-weight:700; color:var(--color-secondary); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:var(--spacing-xs);">Operations Workspace · Delivery Reviews</div>
        <div style="display:flex; align-items:center; gap:var(--spacing-md); flex-wrap:wrap; margin-bottom:6px;">
          <h2 class="hero-title" id="s18-title" style="margin-bottom:0;">Review Class Delivery</h2>
          <span style="font-size:11.5px; font-weight:700; padding:3px 10px; border-radius:12px; background:#e8e2d7; color:var(--color-on-surface); border:1px solid var(--color-outline-variant);">Regular Paid Class</span>
          <span style="font-size:11.5px; font-weight:700; padding:3px 10px; border-radius:12px; background:${revBg}; color:${revColor}; border:1px solid ${revBorder};">${review.reviewStatus}</span>
        </div>
        <p class="hero-subtitle" style="margin-top:0; margin-bottom:6px;">Spoken English &middot; ${occurrenceId} &middot; ${review.learner}</p>
        <div style="font-size:12.5px; color:var(--color-tertiary);">Reviewer: <strong>${review.reviewer}</strong> &middot; ${review.reviewerRole}</div>
      </div>
    </section>

    <div class="trial-request-container">
      <!-- Left Column -->
      <div class="trial-main-form" style="display:flex; flex-direction:column; gap:var(--spacing-md);">

        <!-- 1. Class Details Card -->
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">Class Details</h3>
          <div class="drawer-grid">
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner</span><span class="drawer-meta-value">${review.learner}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Trainer</span><span class="drawer-meta-value">${review.trainer}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Course</span><span class="drawer-meta-value">${review.course}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Level</span><span class="drawer-meta-value">Beginner</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Class</span><span class="drawer-meta-value">${review.classNumber}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Enrolment</span><span class="drawer-meta-value" style="font-family:monospace;">${review.enrolmentId}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Membership</span><span class="drawer-meta-value" style="font-family:monospace;">${review.membershipId}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Date</span><span class="drawer-meta-value">18 Aug 2026</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Time</span><span class="drawer-meta-value">7:00–7:45 PM PKT</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Duration</span><span class="drawer-meta-value">45 min</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Format</span><span class="drawer-meta-value">1-to-1</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Series</span><span class="drawer-meta-value" style="font-family:monospace;">${review.seriesId}</span></div>
          </div>
          <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:12px; padding-top:10px; border-top:1px solid var(--color-outline-variant);">
            ℹ️ Class details are read-only. Reviewer cannot alter these values during review.
          </div>
        </div>

        <!-- 2. Domain Status Separation Card -->
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">Domain Status Overview</h3>
          <table style="width:100%; font-size:13px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Occurrence</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#fff3cd'}; color:${isApproved ? '#137333' : '#856404'}; border:1px solid ${isApproved ? '#c2e7cc' : '#ffd663'};">${occBadge}</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Attendance</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${attBg}; color:${attColor}; border:1px solid ${attBorder};">${review.attendanceStatus}</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Trainer Report</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#e8f0fe'}; color:${isApproved ? '#137333' : '#1a73e8'}; border:1px solid ${isApproved ? '#c2e7cc' : '#b4c8f8'};">${isApproved ? 'Accepted' : (isCorrectionRequested ? 'Correction Requested' : 'Submitted')}</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Delivery Review</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${revBg}; color:${revColor}; border:1px solid ${revBorder};">${review.reviewStatus}</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Entitlement</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#ffdad6'}; color:${isApproved ? '#137333' : '#ba1a1a'}; border:1px solid ${isApproved ? '#c2e7cc' : '#f2b8b8'};">${isApproved ? '1 Class Debited' : 'No Debit Yet'}</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);">
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Learning Progress</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#ffdad6'}; color:${isApproved ? '#137333' : '#ba1a1a'}; border:1px solid ${isApproved ? '#c2e7cc' : '#f2b8b8'};">${isApproved ? 'Class 1 Recorded' : 'Pending Approval'}</span></td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:var(--color-tertiary); font-weight:700;">Trainer Earning</td>
              <td style="padding:10px 0; text-align:right;"><span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:${isApproved ? '#fff3cd' : '#ffdad6'}; color:${isApproved ? '#856404' : '#ba1a1a'}; border:1px solid ${isApproved ? '#ffd663' : '#f2b8b8'};">${isApproved ? 'Created · Not Settled' : 'Not Created Yet'}</span></td>
            </tr>
          </table>
        </div>

        <!-- 3. Attendance Evidence -->
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">
            <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0;">Attendance Evidence</h3>
            <span style="font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:12px; background:#e6f4ea; color:#137333; border:1px solid #c2e7cc;">Reconciled</span>
          </div>
          <div class="drawer-grid" style="margin-bottom:var(--spacing-md);">
            <div class="drawer-meta-item"><span class="drawer-meta-label">Trainer Joined</span><span class="drawer-meta-value">${simState === 'Trainer No-show' ? '<span style="color:#ba1a1a; font-weight:700;">No join event</span>' : review.joinedTimes.trainerJoined}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner Joined</span><span class="drawer-meta-value">${simState === 'Learner No-show' ? '<span style="color:#ba1a1a; font-weight:700;">No join event</span>' : review.joinedTimes.learnerJoined}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner Disconnected</span><span class="drawer-meta-value">${simState === 'Learner No-show' ? '—' : '7:18 PM'}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner Reconnected</span><span class="drawer-meta-value">${simState === 'Learner No-show' ? '—' : '7:21 PM'}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner Left</span><span class="drawer-meta-value">${simState === 'Learner No-show' ? '—' : review.joinedTimes.learnerLeft}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Trainer Left</span><span class="drawer-meta-value">${simState === 'Trainer No-show' ? '—' : review.joinedTimes.trainerLeft}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Learner Connected</span><span class="drawer-meta-value" style="font-weight:800; color:${review.joinedTimes.learnerDuration < 20 ? '#ba1a1a' : 'var(--color-on-tertiary-fixed)'};">${simState === 'Learner No-show' ? '0 min' : review.joinedTimes.learnerDuration + ' min'}</span></div>
            <div class="drawer-meta-item"><span class="drawer-meta-label">Trainer Connected</span><span class="drawer-meta-value" style="font-weight:800;">${simState === 'Trainer No-show' ? '0 min' : review.joinedTimes.trainerDuration + ' min'}</span></div>
          </div>

          <!-- Evidence Timeline -->
          <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-secondary); letter-spacing:0.05em; margin-bottom:12px;">Event Timeline</h4>
          <div style="position:relative; padding-left:24px;">
            ${review.timeline.map((ev, i) => `
              <div style="position:relative; padding-bottom:14px; ${i < review.timeline.length - 1 ? 'border-left:2px solid var(--color-outline-variant);' : ''} margin-left:-1px;">
                <div style="position:absolute; left:-7px; top:3px; width:12px; height:12px; border-radius:50%; background:var(--color-secondary); border:2px solid var(--color-surface-lowest);"></div>
                <div style="padding-left:16px;">
                  <div style="font-size:11.5px; font-weight:700; color:var(--color-secondary);">${ev.time}</div>
                  <div style="font-size:13px; color:var(--color-on-surface);">${ev.text}</div>
                </div>
              </div>`).join("")}
          </div>
        </div>

        <!-- 4. Attendance Record Card -->
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">Attendance Record</h3>
          <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; margin-bottom:var(--spacing-md);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
              <div>
                <div style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed);">${review.learner}</div>
                <div style="font-size:12.5px; color:var(--color-tertiary); margin-top:2px;">Participant · ${review.enrolmentId}</div>
              </div>
              <span style="font-size:12px; font-weight:700; padding:3px 12px; border-radius:12px; background:${attBg}; color:${attColor}; border:1px solid ${attBorder};">${review.attendanceStatus}</span>
            </div>
            <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-top:12px;">
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Connected Duration</td><td style="padding:6px 0; font-weight:700; text-align:right;">${simState === 'Learner No-show' ? '0 min' : review.joinedTimes.learnerDuration + ' min'}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Evidence Source</td><td style="padding:6px 0; font-weight:700; text-align:right;">Meeting Provider</td></tr>
              <tr><td style="padding:6px 0; color:var(--color-tertiary);">Correction Request</td><td style="padding:6px 0; font-weight:700; text-align:right;">${review.hasCorrectionRequest ? '<span style="color:#856404;">Pending Review</span>' : (review.correctionDecision ? review.correctionDecision : 'None')}</td></tr>
            </table>
          </div>
          ${!isApproved && !isRejected ? `<p style="font-size:11.5px; color:var(--color-tertiary);">ℹ️ Reviewer cannot silently alter attendance. Any correction must go through the Attendance Correction process.</p>` : ''}

          ${review.hasCorrectionRequest ? `
          <!-- Attendance Correction Panel -->
          <div style="background:#fff3cd; border:1.5px solid #ffd663; border-radius:8px; padding:16px; margin-top:12px;">
            <h4 style="font-size:13px; font-weight:800; color:#856404; margin-bottom:10px;">📋 Attendance Correction Requested by Trainer</h4>
            <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:12px;">
              <tr style="border-bottom:1px solid rgba(133,100,4,0.15);"><td style="padding:6px 0; color:#856404; font-weight:700;">Current Outcome</td><td style="padding:6px 0; font-weight:700; text-align:right;">${review.attendanceStatus}</td></tr>
              <tr style="border-bottom:1px solid rgba(133,100,4,0.15);"><td style="padding:6px 0; color:#856404; font-weight:700;">Proposed Outcome</td><td style="padding:6px 0; font-weight:700; text-align:right;">${review.correctionProposedOutcome}</td></tr>
              <tr><td style="padding:6px 0; color:#856404; font-weight:700;">Trainer Reason</td><td style="padding:6px 0; text-align:right; font-style:italic;">"${review.correctionProposedReason}"</td></tr>
            </table>
            <div style="display:flex; gap:10px;">
              <button class="btn btn-primary" onclick="approveAttendanceCorrectionClass('${occurrenceId}')" style="flex:1; height:36px; font-size:12px; font-weight:800; background:#137333; border-color:#137333; color:white;">Approve Correction</button>
              <button class="btn btn-secondary" onclick="rejectAttendanceCorrectionClass('${occurrenceId}')" style="flex:1; height:36px; font-size:12px; font-weight:700;">Reject Correction</button>
            </div>
          </div>` : ''}

          ${review.correctionDecision ? `
          <!-- Correction decision history -->
          <div style="background:${review.correctionDecision === 'Approved' ? '#e6f4ea' : '#ffdad6'}; border:1px solid ${review.correctionDecision === 'Approved' ? '#c2e7cc' : '#f2b8b8'}; border-radius:6px; padding:12px; margin-top:12px; font-size:12.5px;">
            <div style="font-weight:700; color:${review.correctionDecision === 'Approved' ? '#137333' : '#ba1a1a'}; margin-bottom:6px;">Correction ${review.correctionDecision}</div>
            <div>Previous Outcome: <strong>${review.correctionPreviousOutcome}</strong></div>
            ${review.correctionDecision === 'Approved' ? `<div>New Outcome: <strong>${review.attendanceStatus}</strong></div>` : ''}
            <div>Changed By: ${review.correctionChangedBy || 'Omar Farooq'}</div>
            ${review.correctionDecisionNote ? `<div>Note: "${review.correctionDecisionNote}"</div>` : ''}
          </div>` : ''}
        </div>

        <!-- 5. Trainer Report (Read-Only) -->
        ${report ? `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">
            <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0;">Trainer Report</h3>
            <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:12px; background:#e8f0fe; color:#1a73e8; border:1px solid #b4c8f8;">Submitted · Version ${report.version}</span>
          </div>

          <div style="background:rgba(186,26,26,0.04); border:1px solid rgba(186,26,26,0.15); border-radius:6px; padding:12px; margin-bottom:var(--spacing-md); font-size:12px; color:var(--color-tertiary);">
            ⚠️ This report is read-only. Reviewer cannot rewrite trainer report content. Use Request Correction to ask Ayesha Rahman to update specific sections.
          </div>

          <!-- Main Topic & Topics Covered -->
          <div class="form-group" style="margin-bottom:var(--spacing-md);">
            <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Main Topic</label>
            <div style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed);">${report.mainTopic}</div>
          </div>
          <div class="form-group" style="margin-bottom:var(--spacing-md);">
            <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Topics Covered</label>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
              ${(report.topicsCovered || []).map(t => `<span style="font-size:12px; padding:3px 10px; border-radius:12px; background:var(--color-secondary-container); color:var(--color-on-secondary-container); font-weight:600;">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Syllabus Coverage -->
          <h4 style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary); margin-bottom:8px; letter-spacing:0.04em;">Syllabus Coverage</h4>
          <table style="width:100%; border-collapse:collapse; margin-bottom:var(--spacing-md); background:var(--color-surface-low); border-radius:6px; overflow:hidden; border:1px solid var(--color-outline-variant);">
            ${Object.entries(report.syllabusCoverage || {}).map(([k, v]) => syllabusRow(k, v)).join('')}
          </table>

          <!-- Learner Progress -->
          <div class="form-group" style="margin-bottom:var(--spacing-md);">
            <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Learner Progress</label>
            <div style="font-size:13.5px; color:var(--color-on-surface); line-height:1.6; padding:12px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">${report.progressNotes}</div>
          </div>

          <!-- Strengths, Improvements, Feedback -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--spacing-md); margin-bottom:var(--spacing-md);">
            <div>
              <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Strengths</label>
              <div style="font-size:13px; padding:10px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">${report.learnerFeedback?.strengths || '—'}</div>
            </div>
            <div>
              <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Areas to Improve</label>
              <div style="font-size:13px; padding:10px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">${report.learnerFeedback?.improvements || '—'}</div>
            </div>
          </div>
          <div class="form-group" style="margin-bottom:var(--spacing-md);">
            <label class="form-label" style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary);">Learner-Facing Feedback</label>
            <div style="font-size:13.5px; padding:12px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">"${report.learnerFeedback?.recommendations || '—'}"</div>
          </div>

          <!-- Homework -->
          <h4 style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary); margin-bottom:8px; letter-spacing:0.04em;">Homework</h4>
          ${report.homework?.enabled ? `
          <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:14px; margin-bottom:var(--spacing-md);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <div style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed);">${report.homework.title}</div>
              <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#fff3cd'}; color:${isApproved ? '#137333' : '#856404'}; border:1px solid ${isApproved ? '#c2e7cc' : '#ffd663'};">${isApproved ? 'Assigned' : 'Pending Review'}</span>
            </div>
            <div style="font-size:13px; color:var(--color-on-surface); margin-bottom:6px;">${report.homework.instructions}</div>
            <div style="font-size:12px; color:var(--color-tertiary);">Due: ${report.homework.dueDate} &nbsp;|&nbsp; Type: ${report.homework.type}</div>
          </div>` : '<p style="font-size:13px; color:var(--color-tertiary); font-style:italic;">No homework assigned.</p>'}

          <!-- Resources -->
          <h4 style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--color-tertiary); margin-bottom:8px; letter-spacing:0.04em;">Resources</h4>
          <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:var(--spacing-md);">
            ${(report.resources || []).filter(r => r.attached).map(r => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--color-surface-low); border-radius:6px; border:1px solid var(--color-outline-variant);">
                <span style="font-size:13px; font-weight:600;">${r.name} <span style="color:var(--color-tertiary);">(${r.type})</span></span>
                <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:${isApproved ? '#e6f4ea' : '#fff3cd'}; color:${isApproved ? '#137333' : '#856404'};">${isApproved ? 'Available' : 'Pending Approval'}</span>
              </div>`).join('')}
          </div>

          <!-- Internal Note (Staff Only) -->
          <div style="background:rgba(15,23,42,0.04); border:1px solid var(--color-outline-variant); border-radius:8px; padding:14px; margin-bottom:var(--spacing-md);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <h4 style="font-size:13px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0;">Internal Trainer Note</h4>
              <span style="font-size:10.5px; font-weight:700; padding:2px 8px; border-radius:4px; background:#1d1b15; color:white; letter-spacing:0.05em;">STAFF ONLY</span>
            </div>
            <div style="font-size:13.5px; color:var(--color-on-surface); font-style:italic;">"${report.privateNotes || '—'}"</div>
            <div style="font-size:11px; color:var(--color-tertiary); margin-top:8px;">This note will never be published to the learner.</div>
          </div>

          <!-- Session Issues -->
          <div style="background:#fff3cd; border:1px solid #ffd663; border-radius:8px; padding:14px;">
            <h4 style="font-size:13px; font-weight:800; color:#856404; margin-bottom:6px;">Session Issues</h4>
            <div style="font-size:13px; color:#856404; font-weight:700; margin-bottom:4px;">${report.sessionIssues}</div>
            <div style="font-size:13px; color:var(--color-on-surface);">${report.sessionIssuesDetails}</div>
            <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:8px;">Note: A session issue does not automatically determine the attendance outcome.</div>
          </div>
        </div>` : '<div class="form-card" style="padding:24px; text-align:center; color:var(--color-tertiary);">Trainer report not yet submitted.</div>'}

        <!-- 6. Delivery Verification Checklist -->
        ${!isApproved && !isRejected ? `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Delivery Verification</h3>
          <p style="font-size:13px; color:var(--color-tertiary); margin-bottom:var(--spacing-md);">Check all items before approving delivery. All boxes are required.</p>
          ${renderCheck('trainerEvidenceSupports', 'Trainer evidence supports delivery')}
          ${renderCheck('learnerParticipated', 'Learner participated')}
          ${renderCheck('reportSubmitted', 'Report submitted')}
          ${renderCheck('syllabusProvided', 'Syllabus information provided')}
          ${renderCheck('progressRecorded', 'Learner progress recorded')}
          ${renderCheck('homeworkReviewed', 'Homework reviewed')}
          ${renderCheck('attendanceReviewed', 'Attendance reviewed')}
          ${renderCheck('technicalIssueReviewed', 'Technical issue reviewed')}
          ${!allChecked ? `<div style="margin-top:12px; padding:10px; background:#ffdad6; border-radius:6px; font-size:12.5px; color:#ba1a1a; font-weight:700;">⚠ Complete all checklist items to enable Approve Delivery.</div>` : `<div style="margin-top:12px; padding:10px; background:#e6f4ea; border-radius:6px; font-size:12.5px; color:#137333; font-weight:700;">✓ All items verified. Delivery can be approved.</div>`}
        </div>` : ''}

        <!-- 7. Operations Review Note -->
        ${!isApproved && !isRejected ? `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-md); padding-bottom:10px; border-bottom:1px solid var(--color-outline-variant);">Operations Review Note</h3>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Internal note <span style="color:var(--color-tertiary); font-weight:400;">(optional for approval; required for rejection/correction)</span></label>
            <textarea id="ops-review-note-s18" class="form-input" style="height:80px;" placeholder="Add an internal note about this delivery review...">${review.operationsNotes || ''}</textarea>
          </div>
        </div>` : ''}

        <!-- 8. Decision Buttons -->
        ${isApproved ? `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg); border:1.5px solid #c2e7cc; background:#e6f4ea;">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
            <div style="width:40px; height:40px; background:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:18px; flex-shrink:0;">✓</div>
            <div>
              <div style="font-size:15px; font-weight:800; color:#137333;">Decision Already Recorded</div>
              <div style="font-size:13px; color:#137333;">Delivery approved by ${review.reviewer}. Downstream records have been created.</div>
            </div>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary" onclick="window.location.hash='#learner/courses/ENR-001'" style="flex:1; height:40px; background:#137333; border-color:#137333; color:white; font-weight:700;">View Updated Learner Course</button>
            <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="flex:1; height:40px;">Back to Delivery Reviews</button>
          </div>
        </div>` : isRejected ? `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg); border:1.5px solid #f2b8b8; background:#ffdad6;">
          <div style="font-size:14px; font-weight:800; color:#ba1a1a; margin-bottom:6px;">Delivery Rejected</div>
          <div style="font-size:13px; color:#ba1a1a; margin-bottom:12px;">Reason: ${review.rejectionReason}</div>
          <div style="font-size:13px; color:var(--color-on-surface);">Notes: ${review.rejectionNotes}</div>
          <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="height:40px; margin-top:12px;">Back to Delivery Reviews</button>
        </div>` : `
        <div class="form-card animate-fade-in" style="padding:var(--spacing-lg);">
          <h3 style="font-family:var(--font-family-headings); font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-md);">Review Decision</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <button class="btn btn-primary" onclick="approveClassDelivery('${occurrenceId}')" style="width:100%; height:46px; font-size:14px; font-weight:800; background:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest); ${!allChecked ? 'opacity:0.45; cursor:not-allowed;' : ''}" ${!allChecked ? 'disabled' : ''}>
              ✓ Approve Delivery
            </button>
            <button class="btn btn-secondary" onclick="requestCorrectionClassDelivery('${occurrenceId}')" style="width:100%; height:42px; font-size:13.5px; font-weight:700;">
              📝 Request Correction
            </button>
            <button class="btn btn-secondary" onclick="rejectClassDelivery('${occurrenceId}')" style="width:100%; height:42px; font-size:13.5px; font-weight:700; border-color:#c5221f; color:#c5221f;">
              🚫 Reject Delivery
            </button>
          </div>
        </div>`}

      </div>

      <!-- Right Column: Sidebar -->
      <div class="trial-sidebar" style="display:flex; flex-direction:column; gap:var(--spacing-md);">

        <!-- Report ID Card -->
        <div class="form-card" style="padding:var(--spacing-md);">
          <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-sm); padding-bottom:8px; border-bottom:1px solid var(--color-outline-variant);">Review References</h4>
          <table style="width:100%; font-size:12px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Review ID</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">DELIVERY-REVIEW-CLASS-001</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Report ID</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">REPORT-CLASS-001</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Occurrence</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">CLASS-001</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Series</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">SERIES-001</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Enrolment</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">ENR-001</td></tr>
          </table>
        </div>

        <!-- Membership Entitlement Card -->
        <div class="form-card" style="padding:var(--spacing-md);">
          <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-sm); padding-bottom:8px; border-bottom:1px solid var(--color-outline-variant);">Membership Entitlement</h4>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:10px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Membership</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px;">MEM-TERM-001</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Included</td><td style="padding:6px 0; font-weight:700; text-align:right;">12</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Used</td><td style="padding:6px 0; font-weight:800; text-align:right; color:${isApproved ? '#137333' : 'var(--color-on-surface)'};">${isApproved ? '1' : '0'}</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Remaining</td><td style="padding:6px 0; font-weight:800; text-align:right; color:${isApproved ? '#137333' : 'var(--color-on-surface)'};">${isApproved ? '11' : '12'}</td></tr>
          </table>
          <div style="font-size:11.5px; color:${isApproved ? '#137333' : '#ba1a1a'}; font-weight:700; padding:8px; background:${isApproved ? '#e6f4ea' : '#ffdad6'}; border-radius:6px; text-align:center;">
            ${isApproved ? '1 class debited after approval' : 'Debit occurs only after delivery approval'}
          </div>
        </div>

        <!-- Downstream Records (shown after approval) -->
        ${isApproved ? `
        <div class="form-card" style="padding:var(--spacing-md); border:1.5px solid #c2e7cc;">
          <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:#137333; margin-bottom:var(--spacing-sm); padding-bottom:8px; border-bottom:1px solid #c2e7cc;">Downstream Records Created</h4>
          <table style="width:100%; font-size:12px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:6px 0; color:var(--color-tertiary);">Entitlement Debit</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px; color:#137333;">ENT-DEBIT-CLASS-001</td></tr>
            <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:6px 0; color:var(--color-tertiary);">Progress Event</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px; color:#137333;">PROGRESS-CLASS-001</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Earning</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; font-size:11px; color:#856404;">EARN-CLASS-001</td></tr>
          </table>
          <div style="font-size:11.5px; color:#856404; margin-top:10px; padding:8px; background:#fff3cd; border-radius:6px;">Trainer earning is Created · Not Settled. Payroll is a separate workflow.</div>
        </div>` : ''}

        <!-- Audit Timeline -->
        <div class="form-card" style="padding:var(--spacing-md);">
          <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:var(--spacing-sm);">Audit Log</h4>
          <div style="position:relative; padding-left:16px;">
            ${review.auditLog.map((ev, i) => `
              <div style="position:relative; padding-bottom:10px; ${i < review.auditLog.length - 1 ? 'border-left:1.5px solid var(--color-outline-variant);' : ''} margin-left:-1px;">
                <div style="position:absolute; left:-5px; top:3px; width:8px; height:8px; border-radius:50%; background:var(--color-outline-variant); border:1.5px solid var(--color-surface-lowest);"></div>
                <div style="padding-left:12px;">
                  <div style="font-size:10.5px; font-weight:700; color:var(--color-secondary);">${ev.time}</div>
                  <div style="font-size:12px; color:var(--color-on-surface);">${ev.text}</div>
                </div>
              </div>`).join("")}
          </div>
        </div>

      </div>
    </div>
  `;
};

// --- Screen 18 Action Handlers ---

// Approve attendance correction (paid class)
window.approveAttendanceCorrectionClass = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">This will update the attendance outcome to match the trainer's proposed correction.</p>
      <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:16px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Current:</strong> ${review.attendanceStatus}</div>
        <div><strong>Proposed:</strong> ${review.correctionProposedOutcome}</div>
        <div><strong>Trainer Reason:</strong> "${review.correctionProposedReason}"</div>
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label" style="font-size:12px; font-weight:700;">Reviewer Note <span style="color:var(--color-tertiary); font-weight:400;">(optional)</span></label>
        <textarea id="correction-approve-note" class="form-input" style="height:60px;" placeholder="Correction accepted based on evidence review..."></textarea>
      </div>
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmApproveAttendanceCorrectionClass('${occurrenceId}')" style="flex:1; height:44px; background:#137333; border-color:#137333; color:white; font-weight:800;">Confirm Correction</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>`;
  openModal("Approve Attendance Correction?", content);
};

window.confirmApproveAttendanceCorrectionClass = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const note = document.getElementById("correction-approve-note")?.value.trim() || "";
  closeModal();
  review.correctionPreviousOutcome = review.attendanceStatus;
  review.attendanceStatus = review.correctionProposedOutcome;
  review.hasCorrectionRequest = false;
  review.correctionDecision = "Approved";
  review.correctionDecisionNote = note;
  review.correctionChangedBy = "Omar Farooq";
  review.auditLog.push({ time: "8:10 PM", text: `Attendance correction approved by Omar Farooq: ${review.correctionPreviousOutcome} → ${review.attendanceStatus}` });
  renderPaidClassDeliveryReview(occurrenceId);
  showToastAlert(`Attendance updated to ${review.attendanceStatus}.`);
};

// Reject attendance correction (paid class)
window.rejectAttendanceCorrectionClass = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Enter a reason to reject the trainer's attendance correction request.</p>
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Reason <span style="color:red;">*</span></label>
        <textarea id="class-reject-correction-reason" class="form-input" style="height:75px;" placeholder="e.g. Provider evidence confirms the learner connection duration was sufficient..."></textarea>
      </div>
      <div style="display:flex; gap:12px; margin-top:16px;">
        <button class="btn btn-primary" onclick="confirmRejectAttendanceCorrectionClass('${occurrenceId}')" style="flex:1; height:40px; background:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Reject Correction</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>`;
  openModal("Reject Attendance Correction", content);
};

window.confirmRejectAttendanceCorrectionClass = function(occurrenceId) {
  const reason = document.getElementById("class-reject-correction-reason")?.value.trim();
  if (!reason) {
    showToastAlert("A rejection reason is required.");
    return;
  }
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  closeModal();
  review.correctionPreviousOutcome = review.attendanceStatus;
  review.hasCorrectionRequest = false;
  review.correctionDecision = "Rejected";
  review.correctionDecisionNote = reason;
  review.correctionChangedBy = "Omar Farooq";
  review.auditLog.push({ time: "8:10 PM", text: `Attendance correction rejected by Omar Farooq: "${reason}"` });
  renderPaidClassDeliveryReview(occurrenceId);
  showToastAlert("Attendance correction request rejected. Attendance remains: " + review.attendanceStatus);
};

// Approve Class Delivery
window.approveClassDelivery = function(occurrenceId) {
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const noteEl = document.getElementById("ops-review-note-s18");
  if (noteEl) review.operationsNotes = noteEl.value.trim();

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <h4 style="font-family:var(--font-family-headings); font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:12px;">Approve Class Delivery?</h4>
      <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:16px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Class:</strong> ${occurrenceId}</div>
        <div><strong>Learner:</strong> ${review.learner}</div>
        <div><strong>Trainer:</strong> ${review.trainer}</div>
        <div><strong>Attendance:</strong> ${review.attendanceStatus}</div>
        <div><strong>Connected Duration:</strong> ${review.joinedTimes.learnerDuration} min</div>
        <div><strong>Report:</strong> ${review.reportRef}</div>
        <div><strong>Membership:</strong> ${review.membershipId}</div>
      </div>

      <div style="background:#e6f4ea; border:1px solid #c2e7cc; border-radius:8px; padding:12px; margin-bottom:20px;">
        <h5 style="font-size:12px; font-weight:800; text-transform:uppercase; color:#137333; margin-bottom:8px; letter-spacing:0.05em;">Approval Will Create</h5>
        <table style="width:100%; font-size:12px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Delivery Status</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Approved</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Class Entitlement</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">1 class debit (demo policy)</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Approved Classes</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">1 of 12</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Learner Progress</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Progress event created</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Homework</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Published to learner</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#137333;">Feedback</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Approved feedback published</td></tr>
          <tr style="border-bottom:1px solid #c2e7cc;"><td style="padding:4px 0; color:#856404;">Trainer Earning</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#856404;">Created · Not Settled</td></tr>
          <tr><td style="padding:4px 0; color:#137333;">Notification</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Class summary available</td></tr>
        </table>
      </div>

      <div style="font-size:11.5px; color:var(--color-tertiary); margin-bottom:16px;">The 1-class debit is this prototype's configured happy-path demo policy. Actual policy may vary by attendance outcome and class type.</div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmApproveClassDelivery('${occurrenceId}')" style="flex:1; height:44px; background:#137333; border-color:#137333; color:white; font-weight:800;">Confirm Approval</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>`;
  openModal("Confirm Class Delivery Approval", content);
};

window.confirmApproveClassDelivery = function(occurrenceId) {
  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];

  // Update statuses
  review.reviewStatus = "Approved";
  review.occurrenceStatus = "Approved/Completed";

  if (report) {
    report.reportStatus = "Accepted";
    report.deliveryReviewStatus = "Approved";
    report.feedbackPublished = true;
    report.homeworkPublished = true;
    report.history.push({ time: "18 Aug · 8:12 PM", text: "Delivery approved by Omar Farooq. Report accepted. Feedback and homework published." });
  }

  // Update class occurrence status
  if (state.classOccurrences) {
    const classOcc = state.classOccurrences.find(c => c.id === occurrenceId);
    if (classOcc) classOcc.status = "Approved/Completed";
  }

  // Entitlement debit
  if (!state.entitlementLedger.some(e => e.id === "ENT-DEBIT-CLASS-001")) {
    state.entitlementLedger.push({
      id: "ENT-DEBIT-CLASS-001",
      membershipTermId: "MEM-TERM-001",
      enrolmentId: "ENR-001",
      occurrenceId: "CLASS-001",
      participantId: "PART-LEARNER-001",
      type: "Class Debit",
      quantity: 1,
      status: "Posted",
      createdAt: "18 Aug 2026 · 8:12 PM",
      note: "Approved class delivery — demo policy: 1 class debit"
    });
  }

  // Update membership used/remaining on state
  if (state.membershipTerms) {
    const mem = state.membershipTerms.find(m => m.id === "MEM-TERM-001");
    if (mem) {
      mem.usedClasses = (mem.usedClasses || 0) + 1;
      mem.remainingClasses = (mem.includedClasses || 12) - mem.usedClasses;
    }
  }

  // Progress event
  if (!state.progressEvents.some(p => p.id === "PROGRESS-CLASS-001")) {
    state.progressEvents.push({
      id: "PROGRESS-CLASS-001",
      enrolmentId: "ENR-001",
      occurrenceId: "CLASS-001",
      type: "Approved Live Class",
      status: "Completed",
      classNumber: 1,
      createdAt: "18 Aug 2026 · 8:12 PM"
    });
  }

  // Trainer earning source
  if (!state.trainerEarnings.some(e => e.id === "EARN-CLASS-001")) {
    state.trainerEarnings.push({
      id: "EARN-CLASS-001",
      sourceType: "Approved Class Delivery",
      sourceId: "CLASS-001",
      trainerId: "trainer-ayesha",
      trainerName: "Ayesha Rahman",
      status: "Created",
      settlementStatus: "Not Settled",
      createdAt: "18 Aug 2026 · 8:12 PM",
      note: "DO NOT mark as Paid. Payroll is a separate workflow."
    });
  }

  // Downstream reference IDs on review
  review.entitlementDebitId = "ENT-DEBIT-CLASS-001";
  review.progressEventId = "PROGRESS-CLASS-001";
  review.trainerEarningId = "EARN-CLASS-001";
  review.feedbackPublished = true;
  review.homeworkPublished = true;

  // Audit log
  const auditEntries = [
    { time: "8:12 PM", text: "Delivery approved by Omar Farooq · Operations Manager" },
    { time: "8:12 PM", text: "ENT-DEBIT-CLASS-001 created — 1 class debit posted to MEM-TERM-001" },
    { time: "8:12 PM", text: "PROGRESS-CLASS-001 created — Class 1 approved and completed" },
    { time: "8:12 PM", text: "EARN-CLASS-001 created for Ayesha Rahman — Not Settled" },
    { time: "8:12 PM", text: "Learner feedback published. Homework 'Introduce Yourself Practice' assigned." }
  ];
  review.auditLog.push(...auditEntries);

  renderClassApprovalSuccessScreen(occurrenceId);
};

function renderClassApprovalSuccessScreen(occurrenceId) {
  const view = document.getElementById("staff-delivery-detail-view");
  if (!view) return;
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:680px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; color:var(--color-on-tertiary-fixed);">
      <div style="text-align:center; margin-bottom:var(--spacing-lg);">
        <div style="width:64px; height:64px; background:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:28px; font-weight:800; border:2px solid #c2e7cc;">✓</div>
        <h2 style="font-family:var(--font-family-headings); font-size:26px; font-weight:800; color:#137333; margin-bottom:6px;">Class Delivery Approved</h2>
        <p style="font-size:14px; color:var(--color-tertiary);">All downstream records have been created successfully.</p>
      </div>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Class</td><td class="receipt-value" style="font-family:monospace;">${occurrenceId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Learner</td><td class="receipt-value">${review.learner}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Trainer</td><td class="receipt-value">${review.trainer}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Attendance</td><td class="receipt-value"><span class="badge-status status-ready">${review.attendanceStatus}</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Delivery</td><td class="receipt-value"><span class="badge-status status-ready">Approved</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Entitlement</td><td class="receipt-value">1 Class Used &nbsp;·&nbsp; 11 Remaining</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Progress</td><td class="receipt-value">Class 1 Approved</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Homework</td><td class="receipt-value">Assigned</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Trainer Earning</td><td class="receipt-value"><span style="color:#856404; font-weight:700;">Created · Not Settled</span></td></tr>
      </table>

      <!-- Linked Records -->
      <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; margin-bottom:24px;">
        <h4 style="font-size:12px; font-weight:800; text-transform:uppercase; color:var(--color-secondary); margin-bottom:12px; letter-spacing:0.05em;">Linked Record IDs</h4>
        <table style="width:100%; font-size:12px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Delivery Review</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace;">DELIVERY-REVIEW-CLASS-001</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Entitlement Entry</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace; color:#137333;">ENT-DEBIT-CLASS-001</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Progress Event</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace; color:#137333;">PROGRESS-CLASS-001</td></tr>
          <tr><td style="padding:5px 0; color:var(--color-tertiary);">Trainer Earning</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace; color:#856404;">EARN-CLASS-001</td></tr>
        </table>
      </div>

      <!-- Audit Log -->
      <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; margin-bottom:24px;">
        <h4 style="font-size:12px; font-weight:800; text-transform:uppercase; color:var(--color-secondary); margin-bottom:10px; letter-spacing:0.05em;">Audit Log</h4>
        ${review.auditLog.slice(-5).map(ev => `
          <div style="display:flex; gap:12px; font-size:12px; padding:4px 0; border-bottom:1px solid var(--color-outline-variant);">
            <span style="color:var(--color-secondary); font-weight:700; white-space:nowrap;">${ev.time}</span>
            <span>${ev.text}</span>
          </div>`).join("")}
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="window.location.hash='#learner/courses/ENR-001'" style="flex:1.2; height:44px; background:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest); font-weight:700;">View Updated Learner Course</button>
        <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="flex:1; height:44px;">Back to Delivery Reviews</button>
      </div>
    </div>
  `;
}

// Request Correction (Paid Class)
window.requestCorrectionClassDelivery = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Select a correction reason category and provide clear instructions for the trainer.</p>
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Reason <span style="color:red;">*</span></label>
        <select id="class-correct-category" class="form-input" style="height:38px;">
          <option value="Syllabus coverage unclear">Syllabus coverage unclear</option>
          <option value="Progress note incomplete">Progress note incomplete</option>
          <option value="Homework details incomplete">Homework details incomplete</option>
          <option value="Attendance mismatch">Attendance mismatch</option>
          <option value="Technical issue unclear">Technical issue unclear</option>
          <option value="Learner feedback incomplete">Learner feedback incomplete</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Instructions to Trainer <span style="color:red;">*</span></label>
        <textarea id="class-correct-instructions" class="form-input" style="height:80px;" placeholder="Please clarify what was covered after the learner reconnected..."></textarea>
      </div>
      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRequestCorrectionClass('${occurrenceId}')" style="flex:1; height:40px; background:var(--color-secondary); border-color:var(--color-secondary); color:var(--color-surface-lowest); font-weight:800;">Send Correction Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>`;
  openModal("Request Report Correction", content);
};

window.confirmRequestCorrectionClass = function(occurrenceId) {
  const category = document.getElementById("class-correct-category")?.value || "";
  const instruct = document.getElementById("class-correct-instructions")?.value.trim();
  if (!instruct) {
    showToastAlert("Instructions are required to request a correction.");
    return;
  }
  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];
  review.reviewStatus = "Correction Requested";
  review.operationsNotes = `${category}: "${instruct}"`;
  review.auditLog.push({ time: "8:11 PM", text: `Correction requested from Ayesha Rahman: ${category}` });
  if (report) {
    report.reportStatus = "Correction Requested";
    report.operationsNote = instruct;
    report.history.push({ time: "18 Aug · 8:11 PM", text: `Report correction requested by Omar Farooq: ${category}. "${instruct}"` });
  }
  renderPaidClassDeliveryReview(occurrenceId);
  showToastAlert(`Correction request sent: ${category}`);
};

// Reject Class Delivery
window.rejectClassDelivery = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Rejecting delivery requires a policy failure category and detailed review notes.</p>
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Reason <span style="color:red;">*</span></label>
        <select id="class-reject-reason" class="form-input" style="height:38px;">
          <option value="Delivery not supported by evidence">Delivery not supported by evidence</option>
          <option value="Trainer no-show">Trainer no-show</option>
          <option value="Invalid report">Invalid report</option>
          <option value="Class did not take place">Class did not take place</option>
          <option value="Serious technical failure">Serious technical failure</option>
          <option value="Duplicate occurrence">Duplicate occurrence</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Review Note <span style="color:red;">*</span></label>
        <textarea id="class-reject-note" class="form-input" style="height:80px;" placeholder="Provide detailed notes explaining the rejection decision..."></textarea>
      </div>
      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRejectClassDelivery('${occurrenceId}')" style="flex:1; height:40px; background:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Confirm Rejection</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>`;
  openModal("Reject Class Delivery?", content);
};

window.confirmRejectClassDelivery = function(occurrenceId) {
  const reason = document.getElementById("class-reject-reason")?.value || "";
  const note = document.getElementById("class-reject-note")?.value.trim();
  if (!note) {
    showToastAlert("Detailed rejection notes are required.");
    return;
  }
  closeModal();
  const review = state.deliveryReviews.find(r => r.occurrenceId === occurrenceId);
  const report = state.trainerReports[occurrenceId];
  review.reviewStatus = "Rejected";
  review.occurrenceStatus = "Rejected for Correction";
  review.rejectionReason = reason;
  review.rejectionNotes = note;
  review.operationsNotes = `Rejected: ${reason}. "${note}"`;
  review.auditLog.push({ time: "8:11 PM", text: `Delivery rejected by Omar Farooq: ${reason}` });
  if (state.classOccurrences) {
    const classOcc = state.classOccurrences.find(c => c.id === occurrenceId);
    if (classOcc) classOcc.status = "Rejected for Correction";
  }
  if (report) {
    report.history.push({ time: "18 Aug · 8:11 PM", text: `Delivery rejected by Omar Farooq: ${reason}. Notes: "${note}"` });
  }
  // No entitlement/progress/earning records created on rejection
  renderPaidClassDeliveryReview(occurrenceId);
  showToastAlert(`Delivery rejected: ${reason}`);
};

// ==========================================================================
// Screen 10 - CSR Trial Follow-Up & Conversion Decision Database & Views
// ==========================================================================

state.followUps = [
  {
    id: "FOLLOWUP-001",
    leadId: "LEAD-001",
    learnerName: "Ali Khan",
    email: "ali.khan@example.com",
    whatsapp: "+92 300 1234567",
    preferredContact: "WhatsApp",
    timezone: "Asia/Karachi",
    course: "Spoken English",
    originalTrialRequestId: "TRIAL-001",
    occurrenceId: "OCC-TRIAL-001",
    assignedCSR: "Sarah Ahmed",
    dueDate: "Today",
    leadStage: "Trial Completed", // New | Contacted | Qualified | Trial Scheduled | Trial Completed | Converted | Lost
    status: "Due", // Pending | Due | Contacted | Waiting | Completed | No Response | Cancelled
    trialOutcome: "Completed", // Completed | No-show | Technical Issue
    attendance: "Present",
    trainer: "Ayesha Rahman",
    duration: "43 minutes attended",
    observedLevel: "Beginner",
    trainerRecommendation: "Ready to Continue",
    recommendedPackage: "12 Live Classes",
    packagePrice: "PKR 15,000",
    history: [
      { time: "10 Aug · 2:00 PM", text: "Prospect viewed Spoken English catalogue" },
      { time: "10 Aug · 2:30 PM", text: "Trial request TRIAL-001 submitted by learner" },
      { time: "11 Aug · 9:15 AM", text: "Request qualified by Sarah Ahmed" },
      { time: "11 Aug · 11:30 AM", text: "Trial occurrence OCC-TRIAL-001 scheduled" },
      { time: "13 Aug · 7:00 PM", text: "Trial session started" },
      { time: "13 Aug · 7:45 PM", text: "Trial session ended" },
      { time: "13 Aug · 7:52 PM", text: "Trainer report submitted by Ayesha Rahman" },
      { time: "13 Aug · 8:06 PM", text: "Trial delivery approved by reviewer Sarah Ahmed" }
    ],
    contactAttempts: 0,
    lostReason: "",
    lostNotes: "",
    guardianName: "",
    guardianContact: "",
    membershipRequestId: ""
  },
  {
    id: "FOLLOWUP-002",
    leadId: "LEAD-002",
    learnerName: "Ayesha Malik",
    email: "ayesha.malik@example.com",
    whatsapp: "+92 321 9876543",
    preferredContact: "WhatsApp",
    timezone: "Asia/Karachi",
    course: "IELTS Preparation",
    originalTrialRequestId: "TRIAL-002",
    occurrenceId: "OCC-TRIAL-002",
    assignedCSR: "Sarah Ahmed",
    dueDate: "Today",
    leadStage: "Trial Completed",
    status: "Waiting",
    trialOutcome: "Completed",
    attendance: "Late",
    trainer: "Hamza Siddiqui",
    duration: "30 minutes attended",
    observedLevel: "Intermediate",
    trainerRecommendation: "Ready to Continue",
    recommendedPackage: "24 Live Classes",
    packagePrice: "PKR 28,000",
    history: [
      { time: "11 Aug · 1:00 PM", text: "Trial request submitted" },
      { time: "13 Aug · 8:00 PM", text: "Trial session completed" },
      { time: "14 Aug · 10:20 AM", text: "Contacted via WhatsApp. Learner asked for pricing brochures." }
    ],
    contactAttempts: 1,
    lostReason: "",
    lostNotes: "",
    guardianName: "",
    guardianContact: "",
    membershipRequestId: ""
  },
  {
    id: "FOLLOWUP-003",
    leadId: "LEAD-003",
    learnerName: "Hassan Raza",
    email: "hassan.raza@example.com",
    whatsapp: "+92 333 4445555",
    preferredContact: "Phone",
    timezone: "Asia/Karachi",
    course: "Spoken English",
    originalTrialRequestId: "TRIAL-003",
    occurrenceId: "OCC-TRIAL-003",
    assignedCSR: "Abdullah Khan",
    dueDate: "Tomorrow",
    leadStage: "Trial Scheduled",
    status: "Due",
    trialOutcome: "No-show",
    attendance: "Absent",
    trainer: "Sana Malik",
    duration: "0 minutes (No-show)",
    observedLevel: "Unable to Assess",
    trainerRecommendation: "Reschedule Recommended",
    recommendedPackage: "12 Live Classes",
    packagePrice: "PKR 15,000",
    history: [
      { time: "12 Aug · 10:00 AM", text: "Trial request qualified & scheduled" },
      { time: "14 Aug · 6:00 PM", text: "Class completed - Learner was absent (No-show)" }
    ],
    contactAttempts: 0,
    lostReason: "",
    lostNotes: "",
    guardianName: "",
    guardianContact: "",
    membershipRequestId: ""
  },
  {
    id: "FOLLOWUP-004",
    leadId: "LEAD-004",
    learnerName: "Fatima Noor",
    email: "fatima.noor@example.com",
    whatsapp: "+92 312 6667777",
    preferredContact: "WhatsApp",
    timezone: "Asia/Karachi",
    course: "K-12 Mathematics",
    originalTrialRequestId: "CLASS-021",
    occurrenceId: "OCC-CLASS-021",
    assignedCSR: "Sarah Ahmed",
    dueDate: "This Week",
    leadStage: "Trial Completed",
    status: "Pending",
    trialOutcome: "Completed",
    attendance: "Present",
    trainer: "Usman Khan",
    duration: "22 minutes attended",
    observedLevel: "Elementary",
    trainerRecommendation: "Ready to Continue",
    recommendedPackage: "12 Live Classes",
    packagePrice: "PKR 15,000",
    history: [
      { time: "11 Aug · 4:00 PM", text: "Guardian request submitted" },
      { time: "12 Aug · 5:00 PM", text: "Trial session completed" }
    ],
    contactAttempts: 0,
    lostReason: "",
    lostNotes: "",
    guardianName: "Ahmed Noor",
    guardianContact: "+92 312 6667777",
    membershipRequestId: ""
  },
  {
    id: "FOLLOWUP-005",
    leadId: "LEAD-005",
    learnerName: "Omar Farooq",
    email: "omar.farooq@example.com",
    whatsapp: "+92 345 5556666",
    preferredContact: "WhatsApp",
    timezone: "Asia/Karachi",
    course: "Practical AI & Prompt Engineering",
    originalTrialRequestId: "TRIAL-005",
    occurrenceId: "OCC-TRIAL-005",
    assignedCSR: "Sarah Ahmed",
    dueDate: "All",
    leadStage: "Contacted",
    status: "Contacted",
    trialOutcome: "Completed",
    attendance: "Present",
    trainer: "Ayesha Rahman",
    duration: "45 minutes attended",
    observedLevel: "Intermediate",
    trainerRecommendation: "Ready to Continue",
    recommendedPackage: "12 Live Classes",
    packagePrice: "PKR 15,000",
    history: [
      { time: "10 Aug · 1:00 PM", text: "Trial completed" },
      { time: "11 Aug · 11:00 AM", text: "WhatsApp response received - interested in weekend morning classes" }
    ],
    contactAttempts: 1,
    lostReason: "",
    lostNotes: "",
    guardianName: "",
    guardianContact: "",
    membershipRequestId: ""
  },
  {
    id: "FOLLOWUP-006",
    leadId: "LEAD-006",
    learnerName: "Zainab Ahmed",
    email: "zainab.ahmed@example.com",
    whatsapp: "+92 322 8889999",
    preferredContact: "Email",
    timezone: "Asia/Karachi",
    course: "IELTS Preparation",
    originalTrialRequestId: "TRIAL-006",
    occurrenceId: "OCC-TRIAL-006",
    assignedCSR: "Sarah Ahmed",
    dueDate: "All",
    leadStage: "Lost",
    status: "Completed",
    trialOutcome: "Completed",
    attendance: "Present",
    trainer: "Hamza Siddiqui",
    duration: "45 minutes attended",
    observedLevel: "Beginner",
    trainerRecommendation: "Needs More Work",
    recommendedPackage: "24 Live Classes",
    packagePrice: "PKR 28,000",
    history: [
      { time: "09 Aug · 1:00 PM", text: "Trial session completed" },
      { time: "10 Aug · 2:00 PM", text: "Lead marked lost: Joined another provider." }
    ],
    contactAttempts: 1,
    lostReason: "Joined another provider",
    lostNotes: "Learner found a local institute near her house.",
    guardianName: "",
    guardianContact: "",
    membershipRequestId: ""
  }
];

// Active follow-up filters
state.followupFilters = {
  search: "",
  status: "All",
  leadStage: "All",
  assignedCSR: "All",
  due: "All"
};

// Render follow-ups queue page
window.renderFollowupQueue = function() {
  const view = document.getElementById("staff-followups-view");
  if (!view) return;

  // Counts
  const dueToday = state.followUps.filter(f => f.dueDate === "Today" && f.status === "Due").length;
  const waitingResponse = state.followUps.filter(f => f.status === "Waiting").length;
  const readyMembership = state.followUps.filter(f => f.status === "Contacted" && f.leadStage === "Qualified").length;

  // Filter follow-ups
  const filtered = state.followUps.filter(f => {
    // Search
    if (state.followupFilters.search) {
      const q = state.followupFilters.search.toLowerCase();
      const matchSearch = f.learnerName.toLowerCase().includes(q) ||
                          f.course.toLowerCase().includes(q) ||
                          f.id.toLowerCase().includes(q);
      if (!matchSearch) return false;
    }
    // Status
    if (state.followupFilters.status !== "All") {
      if (f.status !== state.followupFilters.status) return false;
    }
    // Lead Stage
    if (state.followupFilters.leadStage !== "All") {
      if (f.leadStage !== state.followupFilters.leadStage) return false;
    }
    // Assigned CSR
    if (state.followupFilters.assignedCSR !== "All") {
      if (f.assignedCSR !== state.followupFilters.assignedCSR) return false;
    }
    // Due
    if (state.followupFilters.due !== "All") {
      if (f.dueDate !== state.followupFilters.due) return false;
    }
    return true;
  });

  // Table rows HTML
  const rowsHtml = filtered.map(f => {
    let statusClass = "status-submitted"; // Due
    if (f.status === "Completed") statusClass = "status-ready";
    else if (f.status === "Waiting") statusClass = "status-submitted"; // Yellow
    else if (f.status === "Cancelled" || f.status === "No Response") statusClass = "status-closed";

    let stageBadge = `<span class="badge-integration int-active" style="background:#e8e2d7; color:var(--color-on-surface); font-weight:700;">${f.leadStage}</span>`;
    if (f.leadStage === "Converted") {
      stageBadge = `<span class="badge-status status-ready" style="font-size:10.5px;">Converted</span>`;
    } else if (f.leadStage === "Lost") {
      stageBadge = `<span class="badge-status status-closed" style="font-size:10.5px;">Lost</span>`;
    }

    return `
      <tr>
        <td style="padding:12px; font-weight:700; font-family:monospace;">${f.id}</td>
        <td style="padding:12px; font-weight:700; color:var(--color-on-tertiary-fixed);">${f.learnerName}</td>
        <td style="padding:12px; font-size:13px; color:var(--color-on-surface-variant);">${f.course}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${f.trialOutcome}</td>
        <td style="padding:12px;">${stageBadge}</td>
        <td style="padding:12px; font-size:13px;">${f.assignedCSR}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${f.dueDate}</td>
        <td style="padding:12px;"><span class="badge-status ${statusClass}" style="font-size:10.5px;">${f.status}</span></td>
        <td style="padding:12px; font-size:12.5px; font-weight:600; color:var(--color-secondary);">${f.status === 'Completed' ? 'Closed' : 'Contact Learner'}</td>
        <td style="padding:12px; text-align:center;">
          <a href="#staff/follow-ups/${f.id}" class="btn btn-secondary" style="padding:4px 8px; font-size:11.5px; height:28px; font-weight:700;">Open</a>
        </td>
      </tr>
    `;
  }).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Trial Follow-ups</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Follow up with learners after completed trials and guide interested prospects to the next step.</p>
    </div>

    <!-- Summary Counts -->
    <div class="review-summary-grid">
      <div class="review-summary-card">
        <span class="review-summary-number">${dueToday}</span>
        <span class="review-summary-label">Due Today</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid var(--color-secondary);">
        <span class="review-summary-number" style="color:var(--color-secondary);">${state.followUps.length}</span>
        <span class="review-summary-label">Trial Follow-ups</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #b06000;">
        <span class="review-summary-number" style="color:#b06000;">${waitingResponse}</span>
        <span class="review-summary-label">Waiting Response</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #137333;">
        <span class="review-summary-number" style="color:#137333;">${readyMembership + 4}</span>
        <span class="review-summary-label">Ready for Membership</span>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar-grid">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Search Queue</label>
        <input type="text" id="followup-search" class="form-input" style="height:36px; font-size:12.5px;" placeholder="Search learner, course..." value="${state.followupFilters.search}" oninput="updateFollowupFilters()">
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Follow-up Status</label>
        <select id="followup-filter-status" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateFollowupFilters()">
          <option value="All" ${state.followupFilters.status === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Pending" ${state.followupFilters.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Due" ${state.followupFilters.status === 'Due' ? 'selected' : ''}>Due</option>
          <option value="Contacted" ${state.followupFilters.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
          <option value="Waiting" ${state.followupFilters.status === 'Waiting' ? 'selected' : ''}>Waiting</option>
          <option value="Completed" ${state.followupFilters.status === 'Completed' ? 'selected' : ''}>Completed</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Lead Stage</label>
        <select id="followup-filter-stage" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateFollowupFilters()">
          <option value="All" ${state.followupFilters.leadStage === 'All' ? 'selected' : ''}>All Stages</option>
          <option value="Trial Scheduled" ${state.followupFilters.leadStage === 'Trial Scheduled' ? 'selected' : ''}>Trial Scheduled</option>
          <option value="Trial Completed" ${state.followupFilters.leadStage === 'Trial Completed' ? 'selected' : ''}>Trial Completed</option>
          <option value="Converted" ${state.followupFilters.leadStage === 'Converted' ? 'selected' : ''}>Converted</option>
          <option value="Lost" ${state.followupFilters.leadStage === 'Lost' ? 'selected' : ''}>Lost</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Assigned CSR</label>
        <select id="followup-filter-csr" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateFollowupFilters()">
          <option value="All" ${state.followupFilters.assignedCSR === 'All' ? 'selected' : ''}>All CSRs</option>
          <option value="Sarah Ahmed" ${state.followupFilters.assignedCSR === 'Sarah Ahmed' ? 'selected' : ''}>Sarah Ahmed</option>
          <option value="Abdullah Khan" ${state.followupFilters.assignedCSR === 'Abdullah Khan' ? 'selected' : ''}>Abdullah Khan</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Due</label>
        <select id="followup-filter-due" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateFollowupFilters()">
          <option value="All" ${state.followupFilters.due === 'All' ? 'selected' : ''}>All Due Dates</option>
          <option value="Today" ${state.followupFilters.due === 'Today' ? 'selected' : ''}>Due Today</option>
          <option value="Tomorrow" ${state.followupFilters.due === 'Tomorrow' ? 'selected' : ''}>Tomorrow</option>
          <option value="This Week" ${state.followupFilters.due === 'This Week' ? 'selected' : ''}>This Week</option>
        </select>
      </div>
    </div>

    <!-- Table Renders -->
    <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
      <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Follow-up</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Course</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Trial Outcome</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Lead Stage</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Assigned CSR</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Due</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Status</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Next Action</th>
            <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="10" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No follow-ups found.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
};

window.updateFollowupFilters = function() {
  const searchInput = document.getElementById("followup-search");
  const statusSel = document.getElementById("followup-filter-status");
  const stageSel = document.getElementById("followup-filter-stage");
  const csrSel = document.getElementById("followup-filter-csr");
  const dueSel = document.getElementById("followup-filter-due");

  if (searchInput) state.followupFilters.search = searchInput.value;
  if (statusSel) state.followupFilters.status = statusSel.value;
  if (stageSel) state.followupFilters.leadStage = stageSel.value;
  if (csrSel) state.followupFilters.assignedCSR = csrSel.value;
  if (dueSel) state.followupFilters.due = dueSel.value;

  renderFollowupQueue();
};


// Render detailed follow-up workspace
window.renderFollowupDetail = function(followupId) {
  const view = document.getElementById("staff-followup-detail-view");
  if (!view) return;

  const fup = state.followUps.find(f => f.id === followupId);
  if (!fup) {
    view.innerHTML = `<div class="form-card" style="text-align:center; padding:24px;"><h3>Follow-up request not found</h3><a href="#staff/follow-ups">Back to list</a></div>`;
    return;
  }

  const isReadOnly = fup.leadStage === "Lost" || fup.leadStage === "Converted";

  // Build timeline markup
  const timelineHtml = fup.history.map(h => `
    <li class="timeline-evidence-item">
      <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">${h.time}</span>
      <span>${h.text}</span>
    </li>
  `).join("");

  view.innerHTML = `
    <!-- Top breadcrumb -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center;">
      <a href="#staff/follow-ups" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Trial Follow-ups
      </a>
      <span style="font-size:12px; color:var(--color-tertiary);">Owner: <strong>Sarah Ahmed</strong> (CSR Agent)</span>
    </div>

    <!-- Header block -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">${fup.learnerName}</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          Course Interest: <strong>${fup.course}</strong> &middot; Lead ID: <strong>${fup.leadId}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-ready" style="font-size:10.5px; margin-right:4px;">Trial ${fup.trialOutcome}</span>
        <span class="badge-status status-submitted" style="font-size:10.5px; ${fup.status === 'Completed' ? 'background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;' : ''}">Task: ${fup.status}</span>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:4px;">Lead Stage: <span class="badge-integration int-active" style="background:#e8e2d7; color:var(--color-on-surface); font-weight:800; padding:1px 4px; border-radius:2px; font-size:9.5px;">${fup.leadStage}</span></div>
      </div>
    </div>

    <!-- Split workspace grid -->
    <div class="report-workspace-grid">
      
      <!-- Left Column: Learner cards and response capture -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        <!-- Learner details card -->
        <div class="form-card">
          <h3 class="form-section-title">Learner Information</h3>
          <div class="form-row">
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Name:</span>
              <div style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed);">${fup.learnerName}</div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Email:</span>
              <div style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed);"><a href="mailto:${fup.email}" style="color:var(--color-secondary);">${fup.email}</a></div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">WhatsApp:</span>
              <div style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed);">${fup.whatsapp}</div>
            </div>
          </div>
          
          <div class="form-row" style="margin-top:var(--spacing-md); border-top:1px solid var(--color-outline-variant); padding-top:var(--spacing-md);">
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Preferred Channel:</span>
              <div style="font-size:13.5px; font-weight:700; color:var(--color-secondary);">${fup.preferredContact}</div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Timezone:</span>
              <div style="font-size:13.5px; font-weight:600;">${fup.timezone}</div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Student Link:</span>
              <div style="font-size:12.5px;"><span class="badge-status status-ready" style="font-size:9.5px; padding:1px 6px;">Linked Account</span></div>
            </div>
          </div>

          <!-- Guardian block if exists (e.g. Fatima Noor) -->
          ${fup.guardianName ? `
            <div style="margin-top:14px; background:rgba(119, 88, 58, 0.04); border:1px solid rgba(119, 88, 58, 0.15); border-radius:6px; padding:12px;">
              <div style="font-size:10px; font-weight:800; color:var(--color-secondary); text-transform:uppercase; margin-bottom:4px;">Guardian / Payer Contact</div>
              <div style="display:flex; justify-content:space-between; font-size:13px;">
                <span>Guardian: <strong>${fup.guardianName}</strong></span>
                <span>Contact: <strong>${fup.guardianContact}</strong></span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Course Interest card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Course Interest</h3>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span style="font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed);">${fup.course}</span><br>
              <span style="font-size:11.5px; color:var(--color-tertiary);">Live Online &middot; 1-to-1 Format &middot; Original Request: <strong>${fup.originalTrialRequestId}</strong></span>
            </div>
            <button class="btn btn-secondary" onclick="showToastAlert('Opening Spoken English Page.')" style="height:32px; font-size:12px;">View Course</button>
          </div>
        </div>

        <!-- Trial Outcome summary -->
        <div class="form-card" style="border-left: 4px solid var(--color-secondary);">
          <h3 class="form-section-title" style="color:var(--color-secondary);">Trial Outcome</h3>
          <div class="form-row">
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Attendance:</span>
              <div style="font-size:14.5px; font-weight:800;">${fup.attendance}</div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Duration:</span>
              <div style="font-size:14.5px; font-weight:800;">${fup.duration}</div>
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <span style="font-size:12px; color:var(--color-tertiary);">Trainer:</span>
              <div style="font-size:14.5px; font-weight:600;">${fup.trainer}</div>
            </div>
          </div>

          <!-- Academic results (Only show if Completed) -->
          ${fup.trialOutcome === 'Completed' ? `
            <div style="margin-top:var(--spacing-md); border-top:1px solid var(--color-outline-variant); padding-top:var(--spacing-md);">
              <div class="form-row">
                <div class="form-group" style="margin-bottom:0;">
                  <span style="font-size:12px; color:var(--color-tertiary);">Observed Level:</span>
                  <div style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed);"><span class="badge-integration int-active" style="background:var(--color-primary-container); color:var(--color-on-primary-container);">${fup.observedLevel}</span></div>
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <span style="font-size:12px; color:var(--color-tertiary);">Recommendation:</span>
                  <div style="font-size:14px; font-weight:800; color:#137333;">${fup.trainerRecommendation}</div>
                </div>
              </div>

              <div style="margin-top:12px; background:var(--color-surface-low); padding:10px; border-radius:6px; font-size:12.5px;">
                <strong>Trainer Feedback (Summary):</strong><br>
                <span style="font-style:italic; opacity:0.9;">"Good listening comprehension, but needs practice with sentence fluency and confidence."</span>
                <div style="margin-top:6px; text-align:right;">
                  <a href="#staff/delivery-reviews/${fup.occurrenceId}" style="font-size:11px; font-weight:700; color:var(--color-secondary);">View Full Trial Report &rarr;</a>
                </div>
              </div>
            </div>
          ` : `
            <!-- Reschedule notice if No-show / Tech issue -->
            <div style="margin-top:var(--spacing-md); background:rgba(186, 26, 26, 0.03); border:1px dashed rgba(186, 26, 26, 0.15); padding:12px; border-radius:6px; font-size:12.5px;">
              <strong>Reschedule Path Suggested:</strong> The trial session resulted in a <strong>${fup.trialOutcome}</strong>. Pushing directly to paid membership is not recommended. Please offer to reschedule a new trial session.
            </div>
          `}
        </div>

        <!-- Contact attempts panel -->
        <div class="form-card">
          <h3 class="form-section-title">Contact Learner</h3>
          <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:10px;">Select a channel to preview follow-up message templates and record contact attempts.</p>
          
          <div class="contact-btn-group">
            <button class="contact-btn whatsapp-green" onclick="openCSRContactModal('${fup.id}', 'WhatsApp')" ${isReadOnly ? 'disabled' : ''}>
              WhatsApp Template
            </button>
            <button class="contact-btn" onclick="openCSRContactModal('${fup.id}', 'Phone')" ${isReadOnly ? 'disabled' : ''}>
              Phone Attempt
            </button>
            <button class="contact-btn" onclick="openCSRContactModal('${fup.id}', 'Email')" ${isReadOnly ? 'disabled' : ''}>
              Email Draft
            </button>
          </div>

          <div style="font-size:12px; color:var(--color-tertiary);">Total logged contact attempts: <strong>${fup.contactAttempts}</strong></div>
        </div>

        <!-- Learner Response capture panel -->
        <div class="form-card">
          <h3 class="form-section-title">Record Learner Response & Decision</h3>
          
          ${isReadOnly ? `
            <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:16px; text-align:center;">
              <span style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed);">Review Decided: Lead is ${fup.leadStage}</span>
              ${fup.lostReason ? `<div style="font-size:12.5px; margin-top:6px; color:#ba1a1a;"><strong>Reason:</strong> ${fup.lostReason} ("${fup.lostNotes}")</div>` : ''}
              ${fup.membershipRequestId ? `<div style="font-size:12.5px; margin-top:6px; color:#137333;"><strong>Membership request started:</strong> ${fup.membershipRequestId}</div>` : ''}
            </div>
          ` : `
            <div class="response-selector-grid">
              <div class="response-option-card" id="opt-ready" onclick="selectCSRResponseOption('${fup.id}', 'Ready')">
                <div class="response-option-title">Ready to Continue</div>
                <div class="response-option-desc">Interested in enrolling in paid packages.</div>
              </div>
              <div class="response-option-card" id="opt-info" onclick="selectCSRResponseOption('${fup.id}', 'Info')">
                <div class="response-option-title">Needs More Info</div>
                <div class="response-option-desc">Asking about price, schedule or cohorts.</div>
              </div>
              <div class="response-option-card" id="opt-later" onclick="selectCSRResponseOption('${fup.id}', 'Later')">
                <div class="response-option-title">Follow Up Later</div>
                <div class="response-option-desc">Asked to call back on a specific date.</div>
              </div>
              <div class="response-option-card" id="opt-reschedule" onclick="selectCSRResponseOption('${fup.id}', 'Reschedule')">
                <div class="response-option-title">Wants Another Trial</div>
                <div class="response-option-desc">Request reschedule due to no-show/tech.</div>
              </div>
              <div class="response-option-card" id="opt-lost" onclick="selectCSRResponseOption('${fup.id}', 'Lost')">
                <div class="response-option-title">Not Interested</div>
                <div class="response-option-desc">Rejecting continuing study / Mark Lost.</div>
              </div>
              <div class="response-option-card" id="opt-course" onclick="selectCSRResponseOption('${fup.id}', 'Course')">
                <div class="response-option-title">Course Not Suitable</div>
                <div class="response-option-desc">Recommend another catalogue program.</div>
              </div>
            </div>

            <!-- Dynamic Decision panels load here -->
            <div id="csr-decision-outcome-panel" style="margin-top:var(--spacing-md);"></div>
          `}
        </div>

      </div>

      <!-- Right Column: Task context, attribution and journey timeline -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
        
        <!-- Task Details -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Task Information</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Follow-up ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${fup.id}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Owner:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${fup.assignedCSR}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Due Date:</td><td style="padding:6px 0; font-weight:700; text-align:right;">14 August 2026</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Recommended Action:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-size:11px;">Contact learner about Spoken English</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Task Priority:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Normal</td></tr>
          </table>
        </div>

        <!-- Attribution panel -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Marketing & CSR Attribution</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:10px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Lead Source:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Learner Portal</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Course Page:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Spoken English</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trial Qualifier:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Sarah Ahmed</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Membership Source:</td><td style="padding:6px 0; font-weight:700; text-align:right;">CSR Follow-up</td></tr>
            <tr>
              <td style="padding:6px 0; color:var(--color-tertiary);">Commission Eligible:</td>
              <td style="padding:6px 0; font-weight:700; text-align:right;">
                <span class="badge-status status-submitted" style="font-size:9.5px; padding:1px 6px;">Not Eligible Yet</span>
              </td>
            </tr>
          </table>
          <p style="font-size:10.5px; color:var(--color-tertiary); margin:0; line-height:14px;">Eligibility is evaluated after payment and enrolment verification.</p>
        </div>

        <!-- Prospect Journey timeline -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Prospect Journey</h3>
          <ul class="timeline-evidence">
            ${timelineHtml}
          </ul>
        </div>

        <!-- Contact History -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Contact History Logs</h3>
          <div id="csr-contact-history-list" style="display:flex; flex-direction:column; gap:8px;">
            ${fup.contactAttempts === 0 ? `
              <span style="font-size:12px; color:var(--color-tertiary); font-style:italic;">No contact attempts logged yet.</span>
            ` : `
              <div style="font-size:12px; background:var(--color-surface-low); padding:8px; border-radius:4px;">
                <strong>14 Aug · 10:20 AM</strong> &middot; WhatsApp Contact<br>
                Outcome: Reached Learner &middot; Note: Learner requested package details.
              </div>
            `}
          </div>
        </div>

      </div>

    </div>
  `;
};

// 1. WhatsApp / Call contact modal
window.openCSRContactModal = function(followupId, method) {
  const fup = state.followUps.find(f => f.id === followupId);
  
  let previewMessage = `Hi ${fup.learnerName}, this is ${fup.assignedCSR} from IHS. I’m following up after your ${fup.course} trial session. I’d like to hear how the session went and help you with the next steps if you’d like to continue.`;
  if (method === "Phone") {
    previewMessage = `CSR script: Greet learner. Ask how trainer Ayesha Rahman's class went. Confirm observed level: Beginner. Offer continuing packages.`;
  }

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Reaching out via <strong>${method}</strong>. Verify details before recording this contact attempt.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:16px; font-size:12.5px;">
        <div><strong>Name:</strong> ${fup.learnerName}</div>
        <div><strong>Destination:</strong> ${method === 'Email' ? fup.email : fup.whatsapp}</div>
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Message Preview</label>
        <textarea class="form-input" style="height:85px; background:var(--color-surface-low); font-size:12.5px; line-height:18px;" readonly>${previewMessage}</textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="recordCSRContactAttempt('${followupId}', '${method}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Mark as Contacted</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal(`Contact via ${method}`, content);
};

window.recordCSRContactAttempt = function(followupId, method) {
  closeModal();
  const fup = state.followUps.find(f => f.id === followupId);
  
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Save contact attempt details to history.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Outcome</label>
        <select id="csr-call-outcome" class="form-input" style="height:38px;">
          <option value="Reached learner">Reached learner</option>
          <option value="No answer">No answer</option>
          <option value="Message sent">Message sent</option>
          <option value="Asked to call later">Asked to call later</option>
          <option value="Wrong number">Wrong number</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Note</label>
        <textarea id="csr-call-note" class="form-input" style="height:70px;" placeholder="e.g. Learner replied and wants information about 12-class membership..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="saveCSRContactAttempt('${followupId}', '${method}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Save Contact Attempt</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Record Contact Attempt", content);
};

window.saveCSRContactAttempt = function(followupId, method) {
  const outcome = document.getElementById("csr-call-outcome").value;
  const note = document.getElementById("csr-call-note").value.trim();

  closeModal();
  const fup = state.followUps.find(f => f.id === followupId);
  
  fup.contactAttempts++;
  fup.status = "Contacted";
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Contacted via ${method}. Outcome: ${outcome} ("${note || 'No notes'}")`
  });

  renderFollowupDetail(followupId);
  showToastAlert(`Contact logged via ${method}.`);
};

// 2. Select response options (displays corresponding cards/buttons below grid)
window.selectCSRResponseOption = function(followupId, optionType) {
  const fup = state.followUps.find(f => f.id === followupId);
  const panel = document.getElementById("csr-decision-outcome-panel");
  if (!panel) return;

  // Active styles toggling
  const cards = ["opt-ready", "opt-info", "opt-later", "opt-reschedule", "opt-lost", "opt-course"];
  cards.forEach(c => {
    const card = document.getElementById(c);
    if (card) card.classList.remove("active");
  });
  const activeCard = document.getElementById(`opt-${optionType.toLowerCase()}`);
  if (activeCard) activeCard.classList.add("active");

  if (optionType === "Ready") {
    panel.innerHTML = `
      <div style="background-color:rgba(240, 217, 122, 0.05); border:1.5px solid var(--color-outline-variant); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:15px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:12px;">Recommended Continuing Program</h4>
        
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:16px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Continuing Course:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${fup.course}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Assigned Level:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${fup.observedLevel}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Recommended Package:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${fup.recommendedPackage}</td></tr>
          <tr><td style="padding:6px 0; color:var(--color-tertiary);">Package Price:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${fup.packagePrice}</td></tr>
        </table>

        <button class="btn btn-primary" onclick="startCSRMembershipRequest('${followupId}')" style="width:100%; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">
          Start Membership Request
        </button>
      </div>
    `;
  } else if (optionType === "Info") {
    panel.innerHTML = `
      <div style="background-color:var(--color-surface-low); border:1.5px solid var(--color-outline-variant); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Schedule Next Info Follow-Up</h4>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" style="font-size:11px;">Next Follow-Up Date</label>
            <input type="date" id="info-followup-date" class="form-input" style="height:36px;" value="2026-08-15">
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size:11px;">Preferred Channel</label>
            <select id="info-followup-method" class="form-input" style="height:36px;">
              <option value="WhatsApp">WhatsApp</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-top:8px;">
          <label class="form-label" style="font-size:11px;">Note</label>
          <textarea id="info-followup-notes" class="form-input" style="height:60px;" placeholder="Send learner schedule options and membership details..."></textarea>
        </div>

        <button class="btn btn-secondary" onclick="saveCSRFollowupLater('${followupId}', 'Waiting', 'info')" style="width:100%; height:38px; font-weight:700;">
          Save Follow-Up & Set Waiting
        </button>
      </div>
    `;
  } else if (optionType === "Later") {
    panel.innerHTML = `
      <div style="background-color:var(--color-surface-low); border:1.5px solid var(--color-outline-variant); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Schedule Callback Reminder</h4>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" style="font-size:11px;">Callback Date</label>
            <input type="date" id="later-followup-date" class="form-input" style="height:36px;" value="2026-08-17">
          </div>
          <div class="form-group">
            <label class="form-label" style="font-size:11px;">Preferred Channel</label>
            <select id="later-followup-method" class="form-input" style="height:36px;">
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-top:8px;">
          <label class="form-label" style="font-size:11px;">Reminder Note</label>
          <textarea id="later-followup-notes" class="form-input" style="height:60px;" placeholder="e.g. Learner asked to be contacted next Monday after discussing with family..."></textarea>
        </div>

        <button class="btn btn-secondary" onclick="saveCSRFollowupLater('${followupId}', 'Waiting', 'later')" style="width:100%; height:38px; font-weight:700;">
          Schedule Callback
        </button>
      </div>
    `;
  } else if (optionType === "Reschedule") {
    panel.innerHTML = `
      <div style="background-color:rgba(186, 26, 26, 0.02); border:1.5px solid var(--color-outline-variant); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Wants Another Trial</h4>
        <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Learner was absent or faced technical failures. Spawning a new trial request lets them schedule another session.</p>
        
        <button class="btn btn-primary" onclick="spawnNewTrialRequest('${followupId}')" style="width:100%; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">
          Create New Trial Request
        </button>
      </div>
    `;
  } else if (optionType === "Lost") {
    panel.innerHTML = `
      <div style="background-color:rgba(186, 26, 26, 0.04); border:1.5px solid rgba(186, 26, 26, 0.15); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:#ba1a1a; margin-bottom:8px;">Mark Prospect as Lost</h4>
        <p style="font-size:12px; color:var(--color-tertiary); margin-bottom:12px;">Selecting this closes the follow-up loop and sets lead status to Lost. History remains preserved.</p>
        
        <button class="btn btn-primary" onclick="openCSRLostConfirmModal('${followupId}')" style="width:100%; height:38px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:700;">
          Mark Lead as Lost
        </button>
      </div>
    `;
  } else if (optionType === "Course") {
    panel.innerHTML = `
      <div style="background-color:var(--color-surface-low); border:1.5px solid var(--color-outline-variant); border-radius:6px; padding:16px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Recommend Another Course</h4>
        
        <div class="form-group" style="margin-bottom:12px;">
          <label class="form-label" style="font-size:11px;">Alternative Programs</label>
          <select id="alt-course-selector" class="form-input" style="height:36px;">
            <option value="IELTS Preparation">IELTS Preparation Masterclass</option>
            <option value="Practical AI & Prompt Engineering">Practical AI & Prompt Engineering</option>
            <option value="Digital Marketing Foundations">Digital Marketing Foundations</option>
            <option value="K-12 Mathematics">K-12 Schooling Mathematics</option>
          </select>
        </div>

        <button class="btn btn-secondary" onclick="recommendCSRAlternativeCourse('${followupId}')" style="width:100%; height:38px; font-weight:700;">
          Recommend Selected Program
        </button>
      </div>
    `;
  }
};

// 3. Start Membership Request
window.startCSRMembershipRequest = function(followupId) {
  const fup = state.followUps.find(f => f.id === followupId);
  
  // Update state values: Converted stage, Completed task
  fup.leadStage = "Qualified";
  fup.status = "Completed";
  
  const reqId = `MEMREQ-${Math.floor(100 + Math.random() * 900)}`;
  fup.membershipRequestId = reqId;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Membership request draft ${reqId} started by Sarah Ahmed`
  });

  renderMembershipSuccessDashboard(followupId, reqId);
};

function renderMembershipSuccessDashboard(followupId, reqId) {
  const view = document.getElementById("staff-followup-detail-view");
  if (!view) return;

  const fup = state.followUps.find(f => f.id === followupId);

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Membership Started</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">The continuing membership enrollment request has been initialized.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Membership Ref</td><td class="receipt-value" style="font-family:monospace;">${reqId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Lead Stage</td><td class="receipt-value"><span class="badge-status status-ready">Qualified</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Enrollment Package</td><td class="receipt-value">${fup.recommendedPackage} &middot; ${fup.packagePrice}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">CSR Attribution</td><td class="receipt-value">${fup.assignedCSR}</td></tr>
      </table>

      <!-- Commercial Logs -->
      <div style="text-align:left; background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:24px;">
        <h4 style="font-size:12.5px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); margin-bottom:8px; letter-spacing:0.05em;">Commercial Status Checks</h4>
        <table style="width:100%; font-size:12px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Membership Request:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Draft</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Manual Payment Status:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Submitted</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Learner Access:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Granted</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Enrolment Activation:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Created</td></tr>
          <tr><td style="padding:4px 0;">Attribution Commission:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-tertiary);">Not Eligible Yet</td></tr>
        </table>
      </div>

      <div style="display:flex; gap:12px; max-width:440px; margin:0 auto;">
        <button class="btn btn-primary" onclick="window.location.hash='#membership/request/' + reqId" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Continue Enrollment</button>
        <button class="btn btn-secondary" onclick="window.location.hash='#staff/follow-ups'" style="flex:1; height:42px;">Back to Queue</button>
      </div>
    </div>
  `;
}

// 4. Save callback/later schedulers
window.saveCSRFollowupLater = function(followupId, targetStatus, detailType) {
  const fup = state.followUps.find(f => f.id === followupId);
  const dateInput = document.getElementById(`${detailType}-followup-date`);
  const methodInput = document.getElementById(`${detailType}-followup-method`);
  const notesInput = document.getElementById(`${detailType}-followup-notes`);

  const dateVal = dateInput ? dateInput.value : "2026-08-16";
  const methodVal = methodInput ? methodInput.value : "WhatsApp";
  const notesVal = notesInput ? notesInput.value.trim() : "";

  fup.status = targetStatus;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Callback scheduled on ${dateVal} via ${methodVal} ("${notesVal || 'No notes'}")`
  });

  renderFollowupDetail(followupId);
  showToastAlert(`Follow-up scheduled on ${dateVal}.`);
};

// 5. Spawn new trial request reschedules (No-show / Tech failures)
window.spawnNewTrialRequest = function(followupId) {
  const fup = state.followUps.find(f => f.id === followupId);
  
  // Mark follow-up as completed
  fup.status = "Completed";
  fup.leadStage = "Trial Scheduled"; // goes back to scheduled
  
  const newReqId = `TRIAL-${Math.floor(100 + Math.random() * 900)}`;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Reschedule requested. Spawned new trial request ${newReqId}`
  });

  renderFollowupDetail(followupId);
  showToastAlert(`Rescheduled: New Trial Request ${newReqId} spawned.`);
};

// 6. Mark Lead Lost modal
window.openCSRLostConfirmModal = function(followupId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Selecting a Lost Reason is required to close this prospect lead record.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Reason <span style="color:red;">*</span></label>
        <select id="ops-lost-reason" class="form-input" style="height:38px;">
          <option value="Price">Price too high</option>
          <option value="Schedule">Schedule does not work</option>
          <option value="Course not suitable">Course not suitable</option>
          <option value="Joined another provider">Joined another provider</option>
          <option value="Not ready now">Not ready now</option>
          <option value="Personal reason">Personal reason</option>
          <option value="No longer interested">No longer interested</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Detailed Notes</label>
        <textarea id="ops-lost-notes" class="form-input" style="height:70px;" placeholder="e.g. Joined another provider near her house..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmCSRMarkLeadLost('${followupId}')" style="flex:1; height:40px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Mark as Lost</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Mark Lead as Lost?", content);
};

window.confirmCSRMarkLeadLost = function(followupId) {
  const reason = document.getElementById("ops-lost-reason").value;
  const note = document.getElementById("ops-lost-notes").value.trim();

  closeModal();
  const fup = state.followUps.find(f => f.id === followupId);
  
  fup.leadStage = "Lost";
  fup.status = "Completed";
  fup.lostReason = reason;
  fup.lostNotes = note;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Lead marked Lost. Reason: ${reason} ("${note || 'No notes'}")`
  });

  renderFollowupDetail(followupId);
  showToastAlert(`Lead marked Lost: ${reason}`);
};

// 7. Recommend alternative course programs
window.recommendCSRAlternativeCourse = function(followupId) {
  const course = document.getElementById("alt-course-selector").value;
  const fup = state.followUps.find(f => f.id === followupId);

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
  fup.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Original course interest Spoken English modified. Recommended alternative program: ${course}`
  });

  fup.course = course;
  if (course === "IELTS Preparation") {
    fup.recommendedPackage = "24 Live Classes";
    fup.packagePrice = "PKR 28,000";
  } else {
    fup.recommendedPackage = "12 Live Classes";
    fup.packagePrice = "PKR 15,000";
  }

  renderFollowupDetail(followupId);
  showToastAlert(`Recommended Program updated to ${course}`);
};


// ==========================================================================
// Screen 11 - Membership Request & Manual Payment Submission Database & Views
// ==========================================================================

state.membershipRequests = {
  "MEMREQ-001": {
    id: "MEMREQ-001",
    learnerId: "learner-001",
    learnerName: "Ali Khan",
    email: "ali.khan@example.com",
    phone: "+92 300 1234567",
    course: "Spoken English",
    product: "Spoken English Live — 12 Classes",
    price: 15000,
    currency: "PKR",
    source: "CSR Trial Follow-up",
    assignedCSR: "Sarah Ahmed",
    status: "Draft", // Draft | Submitted | Approved | Rejected | Under Review
    step: 1, // 1: Details, 2: Instructions, 3: Evidence, 4: Success
    payerType: "self", // self | other
    payerName: "Ali Khan",
    payerRelation: "Self",
    payerEmail: "ali.khan@example.com",
    payerPhone: "+92 300 1234567",
    paymentChannel: "Bank Transfer",
    senderName: "Ali Khan",
    amountPaid: 15000,
    paymentDate: "2026-08-14",
    paymentTime: "11:00 AM",
    transactionReference: "",
    accountDigits: "",
    notes: "",
    receiptFiles: [],
    history: [
      { time: "14 Aug · 10:30 AM", text: "Membership request initialized by Sarah Ahmed" }
    ],
    submissionId: ""
  },
  "MEMREQ-004": {
    id: "MEMREQ-004",
    learnerId: "learner-004",
    learnerName: "Fatima Noor",
    email: "fatima.noor@example.com",
    phone: "+92 312 6667777",
    course: "K-12 Mathematics",
    product: "K-12 Schooling Mathematics — 12 Classes",
    price: 15000,
    currency: "PKR",
    source: "CSR Trial Follow-up",
    assignedCSR: "Sarah Ahmed",
    status: "Draft",
    step: 1,
    payerType: "other",
    payerName: "Ahmed Noor",
    payerRelation: "Parent",
    payerEmail: "ahmed.noor@example.com",
    payerPhone: "+92 312 6667777",
    paymentChannel: "Easypaisa",
    senderName: "Ahmed Noor",
    amountPaid: 15000,
    paymentDate: "2026-08-14",
    paymentTime: "11:15 AM",
    transactionReference: "",
    accountDigits: "",
    notes: "",
    receiptFiles: [],
    history: [
      { time: "14 Aug · 10:45 AM", text: "Membership request created for dependent child Fatima Noor" }
    ],
    submissionId: ""
  }
};

state.paymentSubmissions = {};
state.uploadingFiles = {}; // Simulate progress locally

// Main checkout render engine
window.renderLearnerCheckout = function(reqId) {
  const view = document.getElementById("learner-membership-request-view");
  if (!view) return;

  // Initialize draft context if not exist
  if (!state.membershipRequests[reqId]) {
    state.membershipRequests[reqId] = {
      id: reqId,
      learnerId: `learner-${Math.floor(100 + Math.random() * 900)}`,
      learnerName: "Ali Khan",
      email: "ali.khan@example.com",
      phone: "+92 300 1234567",
      course: "Spoken English",
      product: "Spoken English Live — 12 Classes",
      price: 15000,
      currency: "PKR",
      source: "CSR Trial Follow-up",
      assignedCSR: "Sarah Ahmed",
      status: "Draft",
      step: 1,
      payerType: "self",
      payerName: "Ali Khan",
      payerRelation: "Self",
      payerEmail: "ali.khan@example.com",
      payerPhone: "+92 300 1234567",
      paymentChannel: "Bank Transfer",
      senderName: "Ali Khan",
      amountPaid: 15000,
      paymentDate: new Date().toISOString().split("T")[0],
      paymentTime: "12:00 PM",
      transactionReference: "",
      accountDigits: "",
      notes: "",
      receiptFiles: [],
      history: [
        { time: "14 Aug · 10:30 AM", text: "Membership request initialized" }
      ],
      submissionId: ""
    };
  }

  const req = state.membershipRequests[reqId];

  // If already submitted, force step 4 (Success state)
  if (req.status === "Submitted" || req.status === "Under Review" || req.status === "Approved") {
    req.step = 4;
  }

  // Renders headers & step indicators
  const stepIndicatorsHtml = `
    <div class="step-indicator-bar">
      <div class="step-indicator-item ${req.step === 1 ? 'active' : (req.step > 1 ? 'completed' : '')}">
        ${req.step > 1 ? '✓' : '1.'} Membership Details
      </div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${req.step === 2 ? 'active' : (req.step > 2 ? 'completed' : '')}">
        ${req.step > 2 ? '✓' : '2.'} Payment Instructions
      </div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${req.step === 3 ? 'active' : (req.step > 3 ? 'completed' : '')}">
        ${req.step > 3 ? '✓' : '3.'} Payment Evidence
      </div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${req.step === 4 ? 'active' : ''}">
        4. Submitted
      </div>
    </div>
  `;

  // Left Column Content based on active step
  let formHtml = "";
  if (req.step === 1) {
    formHtml = `
      <div class="form-card">
        <h3 class="form-section-title">Who is this membership for?</h3>
        
        <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:var(--spacing-md); display:flex; flex-direction:column; gap:4px;">
          <div>Learner Name: <strong>${req.learnerName}</strong></div>
          <div style="font-size:12.5px; opacity:0.85;">Email Address: ${req.email}</div>
          <div style="font-size:12.5px; opacity:0.85;">Selected Program: <strong>${req.course}</strong></div>
        </div>

        <h3 class="form-section-title" style="margin-top:var(--spacing-lg);">Who is making the payment?</h3>
        <p style="font-size:12px; color:var(--color-tertiary); margin-bottom:12px;">For school-aged children or business sponsor cases, please choose "Someone else is paying".</p>

        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:var(--spacing-lg);">
          <label style="display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; cursor:pointer;">
            <input type="radio" name="payer-choice" value="self" ${req.payerType === 'self' ? 'checked' : ''} onchange="toggleCheckoutPayerOption('${reqId}', 'self')">
            I am paying for myself
          </label>
          <label style="display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; cursor:pointer;">
            <input type="radio" name="payer-choice" value="other" ${req.payerType === 'other' ? 'checked' : ''} onchange="toggleCheckoutPayerOption('${reqId}', 'other')">
            Someone else is paying (Parent / Sponsor)
          </label>
        </div>

        <!-- Optional different payer form fields -->
        <div id="different-payer-form-wrapper" style="display: ${req.payerType === 'other' ? 'block' : 'none'}; border-top:1.5px dashed var(--color-outline-variant); padding-top:var(--spacing-md); margin-top:var(--spacing-md);">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Payer Full Name <span style="color:red;">*</span></label>
            <input type="text" id="payer-fullname" class="form-input" placeholder="e.g. Ahmed Khan" value="${req.payerName === req.learnerName ? '' : req.payerName}">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Relationship to Learner</label>
              <select id="payer-relationship" class="form-input">
                <option value="Parent" ${req.payerRelation === 'Parent' ? 'selected' : ''}>Parent</option>
                <option value="Guardian" ${req.payerRelation === 'Guardian' ? 'selected' : ''}>Guardian</option>
                <option value="Spouse" ${req.payerRelation === 'Spouse' ? 'selected' : ''}>Spouse</option>
                <option value="Family Member" ${req.payerRelation === 'Family Member' ? 'selected' : ''}>Family Member</option>
                <option value="Employer" ${req.payerRelation === 'Employer' ? 'selected' : ''}>Employer</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Payer Email <span style="color:red;">*</span></label>
              <input type="email" id="payer-email" class="form-input" placeholder="payer@example.com" value="${req.payerEmail === req.email ? '' : req.payerEmail}">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Payer Phone / WhatsApp <span style="color:red;">*</span></label>
            <input type="text" id="payer-phone" class="form-input" placeholder="+92 300 1234567" value="${req.payerPhone === req.phone ? '' : req.payerPhone}">
          </div>
        </div>

        <div style="margin-top:var(--spacing-lg); display:flex; justify-content:flex-end;">
          <button class="btn btn-primary" onclick="submitCheckoutStep1('${reqId}')" style="height:44px; width:220px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
            Continue to Payment Info
          </button>
        </div>
      </div>
    `;
  } else if (req.step === 2) {
    formHtml = `
      <div class="form-card">
        <h3 class="form-section-title">Approved Payment Instructions</h3>
        <p style="font-size:13px; color:var(--color-tertiary); margin-bottom:16px;">Please execute your payment transfer externally using one of the mock bank account details below. Note down the transaction reference ID when done.</p>

        <div style="background-color:rgba(240, 217, 122, 0.04); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; margin-bottom:20px; display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; justify-content:space-between; font-size:13.5px;"><span style="color:var(--color-tertiary);">Payment Method:</span><strong>Bank Transfer</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13.5px;"><span style="color:var(--color-tertiary);">Bank Name:</span><strong>IHS Demo Bank</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13.5px;"><span style="color:var(--color-tertiary);">Account Title:</span><strong>Innovator Huzsam</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13.5px;"><span style="color:var(--color-tertiary);">Account / IBAN:</span><strong>PK80 IHSB 0000 1234 5678 9012</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13.5px; border-top:1px dashed var(--color-outline-variant); padding-top:8px;"><span style="color:var(--color-tertiary);">Amount to Transfer:</span><strong style="color:var(--color-secondary); font-size:16px;">PKR 15,000</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13.5px;"><span style="color:var(--color-tertiary);">Payment Reference:</span><strong style="font-family:monospace;">${req.id}</strong></div>
        </div>

        <div class="alert-box alert-warning" style="margin-bottom:20px; font-size:12.5px; line-height:18px;">
          <strong>Instructions:</strong> Open your banking app (or Easypaisa/JazzCash wallet) and make the transfer. Please ensure you transfer the exact amount of <strong>PKR 15,000</strong>. Take a screenshot or save the PDF receipt of the confirmation.
        </div>

        <div style="margin-top:var(--spacing-lg); display:flex; justify-content:space-between; align-items:center;">
          <button class="btn btn-secondary" onclick="changeCheckoutStep('${reqId}', 1)" style="height:44px; width:120px;">Go Back</button>
          <button class="btn btn-primary" onclick="changeCheckoutStep('${reqId}', 3)" style="height:44px; width:220px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
            Enter Payment Evidence
          </button>
        </div>
      </div>
    `;
  } else if (req.step === 3) {
    // Generate file listing
    let filesHtml = req.receiptFiles.map((file, idx) => `
      <div class="uploaded-file-row">
        <div class="uploaded-file-info">
          <span>📄</span>
          <div>
            <strong>${file.name}</strong><br>
            <span style="font-size:10px; color:var(--color-tertiary);">${file.size}</span>
          </div>
        </div>
        <div class="uploaded-file-actions">
          <button class="btn btn-secondary" onclick="previewCheckoutReceipt('${reqId}', ${idx})" style="padding:2px 8px; font-size:11px; height:24px;">Preview</button>
          <button class="btn btn-secondary" onclick="removeCheckoutReceipt('${reqId}', ${idx})" style="padding:2px 8px; font-size:11px; height:24px; color:#ba1a1a;">Remove</button>
        </div>
      </div>
    `).join("");

    // Simulate progress visual state
    let progressHtml = "";
    if (state.uploadingFiles[reqId]) {
      const prog = state.uploadingFiles[reqId];
      progressHtml = `
        <div class="upload-progress-container animate-fade-in">
          <div style="display:flex; justify-content:space-between; font-size:11.5px; font-weight:700;">
            <span>Uploading payment receipt evidence...</span>
            <span>${prog}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${prog}%;"></div>
          </div>
        </div>
      `;
    }

    formHtml = `
      <div class="form-card">
        <h3 class="form-section-title">Submit Manual Payment Evidence</h3>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">How did you transfer funds? <span style="color:red;">*</span></label>
            <select id="checkout-channel" class="form-input" onchange="updateCheckoutFormValue('${reqId}', 'paymentChannel', this.value)">
              <option value="Bank Transfer" ${req.paymentChannel === 'Bank Transfer' ? 'selected' : ''}>Bank Transfer</option>
              <option value="Easypaisa" ${req.paymentChannel === 'Easypaisa' ? 'selected' : ''}>Easypaisa Wallet</option>
              <option value="JazzCash" ${req.paymentChannel === 'JazzCash' ? 'selected' : ''}>JazzCash Wallet</option>
              <option value="Other Transfer" ${req.paymentChannel === 'Other Transfer' ? 'selected' : ''}>Other Approved Channel</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Sender / Payer Account Name <span style="color:red;">*</span></label>
            <input type="text" id="checkout-sender-name" class="form-input" placeholder="e.g. Ali Khan" value="${req.senderName}" oninput="updateCheckoutFormValue('${reqId}', 'senderName', this.value)">
          </div>
        </div>

        <div class="form-row" style="margin-top:var(--spacing-sm);">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Amount Transferred (PKR) <span style="color:red;">*</span></label>
            <input type="number" id="checkout-amount" class="form-input" placeholder="e.g. 15000" value="${req.amountPaid}" oninput="validateCheckoutAmountMismatch('${reqId}', this.value)">
            <div id="checkout-amount-mismatch-warning" style="display:none; margin-top:6px; font-size:12px; font-weight:700; color:#ba1a1a;"></div>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Payment Date <span style="color:red;">*</span></label>
            <input type="date" id="checkout-date" class="form-input" value="${req.paymentDate}" onchange="updateCheckoutFormValue('${reqId}', 'paymentDate', this.value)">
          </div>
        </div>

        <div class="form-row" style="margin-top:var(--spacing-sm);">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Transaction / Reference ID <span style="color:red;">*</span></label>
            <input type="text" id="checkout-ref-id" class="form-input" placeholder="Enter bank reference number" value="${req.transactionReference}" oninput="validateCheckoutRefDuplicate('${reqId}', this.value)">
            <div id="checkout-ref-duplicate-warning" style="display:none; margin-top:6px; font-size:12px; font-weight:700; color:#ba1a1a;"></div>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Last 4 Digits of Sender Account</label>
            <input type="text" id="checkout-digits" class="form-input" placeholder="e.g. 1234" value="${req.accountDigits}" oninput="updateCheckoutFormValue('${reqId}', 'accountDigits', this.value)">
          </div>
        </div>

        <div class="form-group" style="margin-top:var(--spacing-sm);">
          <label class="form-label" style="font-weight:700;">Payer Notes (Optional)</label>
          <textarea id="checkout-notes" class="form-input" style="height:60px; line-height:16px;" placeholder="Add details to verify payment e.g. Transferred from father's account..." oninput="updateCheckoutFormValue('${reqId}', 'notes', this.value)">${req.notes}</textarea>
        </div>

        <!-- Security alert banner -->
        <div style="background-color:rgba(119, 88, 58, 0.03); border:1px dashed var(--color-outline-variant); border-radius:6px; padding:12px; display:flex; align-items:center; gap:10px; margin-top:var(--spacing-md);">
          <span style="font-size:20px;">🛡️</span>
          <div style="font-size:11px; line-height:15px; color:var(--color-tertiary);">
            <strong>Keep Your Account Secure:</strong> IHS will never ask for bank account login passwords, PINs, OTP codes, or full credit card numbers. Never input security credentials in forms.
          </div>
        </div>

        <!-- File uploader area -->
        <h3 class="form-section-title" style="margin-top:var(--spacing-lg);">Upload Payment Receipt <span style="color:red;">*</span></h3>
        <p style="font-size:11.5px; color:var(--color-tertiary); margin-bottom:12px;">Attach a clear screenshot or PDF evidence of the successful bank transfer.</p>

        <div class="dropzone-area" id="checkout-dropzone" onclick="triggerCheckoutFileInput('${reqId}')">
          <div class="dropzone-icon">📤</div>
          <div class="dropzone-title">Drop your receipt here or click to browse</div>
          <div class="dropzone-desc">Accepts JPG, PNG, or PDF up to 10MB</div>
          <input type="file" id="checkout-file-input" style="display:none;" onchange="handleCheckoutFileSelect('${reqId}', event)">
        </div>

        ${progressHtml}
        
        <div id="checkout-uploaded-files-list">
          ${filesHtml}
        </div>

        <div style="border-top:1.5px dashed var(--color-outline-variant); margin-top:20px; padding-top:20px;">
          <label style="display:flex; align-items:flex-start; gap:8px; font-size:13px; line-height:18px; cursor:pointer;">
            <input type="checkbox" id="checkout-confirm-check" style="margin-top:3px;">
            <span>I confirm that the manual bank transfer transaction reference and receipt evidence I provided are accurate and true. Submitting evidence does not activate membership until it is verified.</span>
          </label>
        </div>

        <div style="margin-top:var(--spacing-lg); display:flex; justify-content:space-between; align-items:center;">
          <button class="btn btn-secondary" onclick="changeCheckoutStep('${reqId}', 2)" style="height:44px; width:120px;">Go Back</button>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-secondary" onclick="saveCheckoutDraft('${reqId}')" style="height:44px; font-weight:700;">Save Draft</button>
            <button class="btn btn-primary" onclick="submitManualPaymentEvidence('${reqId}')" style="height:44px; width:220px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
              Submit Receipt
            </button>
          </div>
        </div>
      </div>
    `;
  } else if (req.step === 4) {
    const sub = state.paymentSubmissions[req.submissionId] || {
      id: "PAY-SUB-001",
      expectedAmount: req.price,
      amountPaid: req.amountPaid,
      transactionReference: req.transactionReference,
      status: "Awaiting Review"
    };

    formHtml = `
      <div class="form-card animate-fade-in" style="border-top:5px solid #137333; text-align:center; padding:var(--spacing-xl);">
        <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
          ✓
        </div>
        <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Payment Submitted for Review</h2>
        <p class="modal-text" style="font-size:14px; margin-bottom:24px;">We've received your payment details and receipt. The IHS team will review the submission before activating your membership.</p>

        <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
          <tr class="receipt-row"><td class="receipt-label">Submission Reference</td><td class="receipt-value" style="font-family:monospace;">${sub.id}</td></tr>
          <tr class="receipt-row"><td class="receipt-label">Membership request ID</td><td class="receipt-value" style="font-family:monospace;">${req.id}</td></tr>
          <tr class="receipt-row"><td class="receipt-label">Enrolled Program</td><td class="receipt-value">${req.course}</td></tr>
          <tr class="receipt-row"><td class="receipt-label">Submitted Amount</td><td class="receipt-value"><strong>PKR ${Number(sub.amountPaid).toLocaleString()}</strong></td></tr>
          <tr class="receipt-row"><td class="receipt-label">Transaction Reference</td><td class="receipt-value" style="font-family:monospace;">${sub.transactionReference}</td></tr>
          <tr><td class="receipt-label">Review Status</td><td class="receipt-value"><span class="badge-status status-submitted" style="font-size:9.5px; padding:1px 6px;">Awaiting Review</span></td></tr>
        </table>

        <!-- Next Actions Instructions -->
        <div style="text-align:left; background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:14px; margin-bottom:24px;">
          <h4 style="font-size:13px; font-weight:700; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">What happens next?</h4>
          <ol style="margin:0; padding-left:18px; font-size:12px; line-height:18px; color:var(--color-on-surface-variant); display:flex; flex-direction:column; gap:4px;">
            <li>IHS operations team reviews transfer details and receipt logs.</li>
            <li>Verification completes typically within 2-4 business hours.</li>
            <li>If approved, your payment and membership status will be set to confirmed.</li>
            <li>Course access and 1-to-1 scheduling dashboard unlocks immediately upon approval.</li>
          </ol>
        </div>

        <div style="display:flex; gap:12px; max-width:440px; margin:0 auto;">
          <button class="btn btn-primary" onclick="showToastAlert('Opening Payment Status dashboard.')" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">View Payment Status</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#staff/delivery-reviews'" style="flex:1; height:42px;">Back to Reviews</button>
        </div>
      </div>
    `;
  }

  // Right Column Content - Order Summary & expected amounts
  const rightColumnHtml = `
    <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
      
      <!-- Order Summary Card -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Order Summary</h3>
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:12px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Program:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${req.course}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Assigned Level:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Beginner</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Term / Package:</td><td style="padding:6px 0; font-weight:700; text-align:right;">12 Live Classes</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Price Snapshot:</td><td style="padding:6px 0; font-weight:700; text-align:right;">PKR ${Number(req.price).toLocaleString()}</td></tr>
          <tr><td style="padding:6px 0; color:var(--color-tertiary);">Membership ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${req.id}</td></tr>
        </table>
        
        <div style="background-color:rgba(119, 88, 58, 0.04); padding:10px; border-radius:6px; font-size:11px; line-height:15px; color:var(--color-tertiary);">
          <strong>Price Snapshot Notice:</strong> This membership request is locked at the rate listed above. Catalogue updates will not alter this request's pricing.
        </div>
      </div>

      <!-- Commercial Status checklist -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Commercial Status</h3>
        <div class="review-checklist" style="font-size:12.5px;">
          <div class="review-check-row">
            <span class="review-check-label">Membership Request</span>
            <span class="review-check-status review-status-good" style="${req.status === 'Draft' ? 'background-color:#fff3cd; color:#856404; border-color:#ffeeba;' : ''}">${req.status}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Payment Evidence</span>
            <span class="review-check-status review-status-error" style="${req.step === 4 ? 'background-color:#d4edda; color:#155724; border-color:#c3e6cb;' : ''}">${req.step === 4 ? 'Submitted' : 'Not Submitted'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Course Access Grant</span>
            <span class="review-check-status review-status-error">Not Granted</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Enrolment Activation</span>
            <span class="review-check-status review-status-error">Not Created</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">CSR Commission eligibility</span>
            <span class="review-check-status review-status-error" style="background:#e2e8f0; color:#4a5568; border-color:#cbd5e0;">Not Eligible</span>
          </div>
        </div>
      </div>

      <!-- Activity Timeline -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Billing Timeline</h3>
        <ul class="timeline-evidence" style="font-size:12px;">
          ${req.history.map(h => `
            <li class="timeline-evidence-item">
              <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">${h.time}</span>
              <span>${h.text}</span>
            </li>
          `).join("")}
          ${req.step === 4 ? `
            <li class="timeline-evidence-item">
              <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">Current</span>
              <span style="color:var(--color-secondary); font-weight:700;">Awaiting IHS verification</span>
            </li>
          ` : ''}
        </ul>
      </div>

    </div>
  `;

  // Assemble full views layout
  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Complete Your Membership Request</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Review your membership details and submit your payment receipt for verification.</p>
    </div>

    <!-- Step indicator bar -->
    ${stepIndicatorsHtml}

    <!-- Checkout columns layout -->
    <div class="checkout-grid">
      <!-- Left Column Form panel -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        ${formHtml}
      </div>

      <!-- Right Column Summary panel -->
      <div>
        ${rightColumnHtml}
      </div>
    </div>
  `;
};

// 1. Toggles different payer sections inside Step 1
window.toggleCheckoutPayerOption = function(reqId, type) {
  const req = state.membershipRequests[reqId];
  req.payerType = type;
  
  const payerWrapper = document.getElementById("different-payer-form-wrapper");
  if (payerWrapper) {
    payerWrapper.style.display = type === "other" ? "block" : "none";
  }

  // Set default names
  if (type === "self") {
    req.payerName = req.learnerName;
    req.payerEmail = req.email;
    req.payerPhone = req.phone;
    req.payerRelation = "Self";
    req.senderName = req.learnerName;
  }
};

// 2. Submit checkout step 1 details
window.submitCheckoutStep1 = function(reqId) {
  const req = state.membershipRequests[reqId];

  if (req.payerType === "other") {
    const nameInput = document.getElementById("payer-fullname");
    const relationInput = document.getElementById("payer-relationship");
    const emailInput = document.getElementById("payer-email");
    const phoneInput = document.getElementById("payer-phone");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";

    if (!name || !email || !phone) {
      showToastAlert("Please fill in all payer details.");
      if (!name && nameInput) nameInput.focus();
      else if (!email && emailInput) emailInput.focus();
      else if (!phone && phoneInput) phoneInput.focus();
      return;
    }

    req.payerName = name;
    req.payerRelation = relationInput ? relationInput.value : "Parent";
    req.payerEmail = email;
    req.payerPhone = phone;
    req.senderName = name; // pre-fill sender account name too
  }

  req.step = 2;
  renderLearnerCheckout(reqId);
};

// 3. Step navigations
window.changeCheckoutStep = function(reqId, targetStep) {
  const req = state.membershipRequests[reqId];
  req.step = targetStep;
  renderLearnerCheckout(reqId);
};

// Update field helper
window.updateCheckoutFormValue = function(reqId, field, value) {
  const req = state.membershipRequests[reqId];
  req[field] = value;
};

// 4. Validate mismatch amounts
window.validateCheckoutAmountMismatch = function(reqId, value) {
  const req = state.membershipRequests[reqId];
  req.amountPaid = Number(value);

  const warn = document.getElementById("checkout-amount-mismatch-warning");
  if (!warn) return;

  if (req.amountPaid !== req.price) {
    warn.style.display = "block";
    warn.innerHTML = `Warning: Expected PKR ${Number(req.price).toLocaleString()} but you entered PKR ${Number(req.amountPaid).toLocaleString()}.`;
  } else {
    warn.style.display = "none";
  }
};

// 5. Validate duplicate references
window.validateCheckoutRefDuplicate = function(reqId, value) {
  const req = state.membershipRequests[reqId];
  req.transactionReference = value.trim();

  const warn = document.getElementById("checkout-ref-duplicate-warning");
  if (!warn) return;

  if (req.transactionReference.toUpperCase() === "TXN-DUPLICATE") {
    warn.style.display = "block";
    warn.innerHTML = `Warning: This transaction reference may already exist in another payment submission.`;
  } else {
    warn.style.display = "none";
  }
};

// 6. Trigger file input selectors
window.triggerCheckoutFileInput = function(reqId) {
  if (state.uploadingFiles[reqId]) return; // upload in progress
  const input = document.getElementById("checkout-file-input");
  if (input) input.click();
};

// 7. Simulates upload files selection progress
window.handleCheckoutFileSelect = function(reqId, event) {
  const file = event.target.files[0];
  if (!file) return;

  const req = state.membershipRequests[reqId];

  // Initialize progress simulation
  state.uploadingFiles[reqId] = 0;
  renderLearnerCheckout(reqId);

  const interval = setInterval(() => {
    state.uploadingFiles[reqId] += 25;
    if (state.uploadingFiles[reqId] >= 100) {
      clearInterval(interval);
      delete state.uploadingFiles[reqId];
      
      // Save mockup file object
      req.receiptFiles.push({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      });

      showToastAlert("File uploaded successfully.");
      renderLearnerCheckout(reqId);
    } else {
      renderLearnerCheckout(reqId);
    }
  }, 120);
};

// 8. Remove files
window.removeCheckoutReceipt = function(reqId, index) {
  const req = state.membershipRequests[reqId];
  req.receiptFiles.splice(index, 1);
  renderLearnerCheckout(reqId);
  showToastAlert("File removed.");
};

// 9. Preview file receipt modal
window.previewCheckoutReceipt = function(reqId, index) {
  const req = state.membershipRequests[reqId];
  const file = req.receiptFiles[index];

  const content = `
    <div style="text-align:center; padding:10px 0;">
      <div style="background-color:#f8f9fa; border:1px solid #ddd; border-radius:6px; padding:24px; font-family:monospace; font-size:12.5px; text-align:left; max-width:400px; margin:0 auto; display:flex; flex-direction:column; gap:8px;">
        <div style="font-weight:700; border-bottom:1.5px solid #000; padding-bottom:8px; font-size:14px; text-align:center; color:#137333;">--- TRANSFER SUCCESSFUL ---</div>
        <div><strong>Transaction ID:</strong> ${req.transactionReference || 'TXN-4587291'}</div>
        <div><strong>Expected Ref:</strong> ${req.id}</div>
        <div><strong>Sender:</strong> ${req.senderName}</div>
        <div><strong>Recipient:</strong> Innovator Huzsam</div>
        <div><strong>Transfer Date:</strong> ${req.paymentDate}</div>
        <div><strong>Amount Paid:</strong> PKR ${Number(req.amountPaid).toLocaleString()}</div>
        <div style="border-top:1.5px solid #000; padding-top:8px; font-size:10px; color:var(--color-tertiary); text-align:center;">IHS Demo Bank confirmation receipt.</div>
      </div>
      <button class="btn btn-secondary" onclick="closeModal()" style="margin-top:20px; width:100%; height:38px;">Close Preview</button>
    </div>
  `;
  openModal(`Receipt Preview: ${file.name}`, content);
};

// 10. Save draft checkouts
window.saveCheckoutDraft = function(reqId) {
  showToastAlert("Draft saved successfully. You can return later to complete.");
};

// 11. Final submit manual receipt evidence
window.submitManualPaymentEvidence = function(reqId) {
  const req = state.membershipRequests[reqId];
  
  // Validation checks
  const confirmCheck = document.getElementById("checkout-confirm-check");
  if (!confirmCheck || !confirmCheck.checked) {
    showToastAlert("Please verify the confirmation checkbox before submitting.");
    return;
  }

  if (!req.senderName || !req.transactionReference) {
    showToastAlert("Transaction reference and Sender account name are required.");
    return;
  }

  if (req.receiptFiles.length === 0) {
    showToastAlert("Please upload at least one payment receipt file.");
    return;
  }

  const subId = `PAY-SUB-${Math.floor(100 + Math.random() * 900)}`;
  req.submissionId = subId;

  // Create submission mock databases
  state.paymentSubmissions[subId] = {
    id: subId,
    membershipRequestId: reqId,
    beneficiary: req.learnerName,
    payer: req.payerName,
    paymentChannel: req.paymentChannel,
    expectedAmount: req.price,
    amountPaid: req.amountPaid,
    currency: req.currency,
    transactionReference: req.transactionReference,
    paymentDate: req.paymentDate,
    receiptFiles: req.receiptFiles.map(f => f.name),
    status: "Submitted",
    hasDuplicateFlag: req.transactionReference.toUpperCase() === "TXN-DUPLICATE",
    hasMismatchFlag: req.amountPaid !== req.price
  };

  // Move status of request
  req.status = "Submitted";
  req.step = 4;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  req.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Payment evidence submitted. Submission ID: ${subId}. Awaiting review.`
  });

  renderLearnerCheckout(reqId);
  showToastAlert("Payment evidence submitted successfully.");
};


// ==========================================================================
// Screen 12 - Operations / CSR Manual Payment Review Database & Views
// ==========================================================================

// Preload mock reviews queue database
state.paymentSubmissionsQueue = [
  {
    id: "PAY-SUB-001",
    membershipRequestId: "MEMREQ-001",
    learnerName: "Ali Khan",
    payerName: "Ali Khan",
    payerRelation: "Self",
    course: "Spoken English",
    product: "Spoken English Live — 12 Classes",
    expectedAmount: 15000,
    amountPaid: 15000,
    currency: "PKR",
    paymentChannel: "Bank Transfer",
    transactionReference: "TXN-4587291",
    paymentDate: "12 Aug 2026",
    paymentTime: "12:15 PM",
    receiptFiles: ["payment-receipt.jpg"],
    status: "Awaiting Review", // Awaiting Review | Under Review | Approved | Correction Requested | Rejected | Escalated
    assignedReviewer: "Unassigned", // Unassigned | Sarah Ahmed | Abdullah Khan
    flags: "None", // None | Amount Mismatch | Possible Duplicate | Currency Mismatch | Partial Payment
    notes: "Payment made from my personal bank account.",
    history: [
      { time: "12 Aug · 12:20 PM", text: "Payment submitted by Ali Khan" },
      { time: "12 Aug · 12:20 PM", text: "Review task PAY-REV-001 created" }
    ],
    rejectionReason: "",
    rejectionNotes: "",
    correctionCategory: "",
    correctionInstructions: ""
  },
  {
    id: "PAY-SUB-002",
    membershipRequestId: "MEMREQ-002",
    learnerName: "Ayesha Malik",
    payerName: "Ayesha Malik",
    payerRelation: "Self",
    course: "IELTS Preparation",
    product: "IELTS Preparation Masterclass — 12 Classes",
    expectedAmount: 25000,
    amountPaid: 20000,
    currency: "PKR",
    paymentChannel: "Bank Transfer",
    transactionReference: "TXN-8874125",
    paymentDate: "12 Aug 2026",
    paymentTime: "1:30 PM",
    receiptFiles: ["mismatch-receipt.jpg"],
    status: "Awaiting Review",
    assignedReviewer: "Unassigned",
    flags: "Amount Mismatch",
    notes: "Transferred from personal banking app.",
    history: [
      { time: "12 Aug · 1:40 PM", text: "Payment submitted by Ayesha Malik" }
    ],
    rejectionReason: "",
    rejectionNotes: "",
    correctionCategory: "",
    correctionInstructions: ""
  },
  {
    id: "PAY-SUB-003",
    membershipRequestId: "MEMREQ-003",
    learnerName: "Hassan Raza",
    payerName: "Hassan Raza",
    payerRelation: "Self",
    course: "Spoken English",
    product: "Spoken English Live — 12 Classes",
    expectedAmount: 15000,
    amountPaid: 15000,
    currency: "PKR",
    paymentChannel: "JazzCash",
    transactionReference: "TXN-4587291", // duplicate ref with Ali Khan
    paymentDate: "13 Aug 2026",
    paymentTime: "3:45 PM",
    receiptFiles: ["duplicate-receipt.png"],
    status: "Under Review",
    assignedReviewer: "Abdullah Khan",
    flags: "Duplicate Reference",
    notes: "JazzCash instant transaction receipt.",
    history: [
      { time: "13 Aug · 3:50 PM", text: "Payment submitted by Hassan Raza" },
      { time: "13 Aug · 4:00 PM", text: "Review claimed by Abdullah Khan" }
    ],
    rejectionReason: "",
    rejectionNotes: "",
    correctionCategory: "",
    correctionInstructions: ""
  },
  {
    id: "PAY-SUB-004",
    membershipRequestId: "MEMREQ-004",
    learnerName: "Fatima Noor",
    payerName: "Ahmed Noor",
    payerRelation: "Parent",
    course: "K-12 Mathematics",
    product: "K-12 Schooling Mathematics — 12 Classes",
    expectedAmount: 15000,
    amountPaid: 15000,
    currency: "PKR",
    paymentChannel: "Easypaisa",
    transactionReference: "TXN-9988776",
    paymentDate: "12 Aug 2026",
    paymentTime: "11:15 AM",
    receiptFiles: ["fatima-math-receipt.pdf"],
    status: "Awaiting Review",
    assignedReviewer: "Unassigned",
    flags: "None",
    notes: "School tuition payment details.",
    history: [
      { time: "12 Aug · 11:20 AM", text: "Payment submitted by Ahmed Noor (Guardian)" }
    ],
    rejectionReason: "",
    rejectionNotes: "",
    correctionCategory: "",
    correctionInstructions: ""
  },
  {
    id: "PAY-SUB-005",
    membershipRequestId: "MEMREQ-005",
    learnerName: "Omar Farooq",
    payerName: "Omar Farooq",
    payerRelation: "Self",
    course: "Practical AI & Prompt Engineering",
    product: "Practical AI & Prompt Engineering — 12 Classes",
    expectedAmount: 15000,
    amountPaid: 15000,
    currency: "PKR",
    paymentChannel: "Easypaisa",
    transactionReference: "TXN-3344551",
    paymentDate: "10 Aug 2026",
    paymentTime: "9:00 AM",
    receiptFiles: ["blurry-receipt.jpg"],
    status: "Correction Requested",
    assignedReviewer: "Sarah Ahmed",
    flags: "None",
    notes: "Easypaisa confirmation receipt.",
    history: [
      { time: "10 Aug · 9:15 AM", text: "Payment submitted by Omar" },
      { time: "10 Aug · 11:30 AM", text: "Correction requested by Sarah Ahmed: 'Receipt is unclear'" }
    ],
    rejectionReason: "",
    rejectionNotes: "",
    correctionCategory: "Receipt unclear",
    correctionInstructions: "The receipt image is blurry. Please upload a clearer copy showing the reference ID."
  },
  {
    id: "PAY-SUB-006",
    membershipRequestId: "MEMREQ-006",
    learnerName: "Zainab Ahmed",
    payerName: "Zainab Ahmed",
    payerRelation: "Self",
    course: "IELTS Preparation",
    product: "IELTS Preparation Masterclass — 12 Classes",
    expectedAmount: 25000,
    amountPaid: 25000,
    currency: "PKR",
    paymentChannel: "Bank Transfer",
    transactionReference: "TXN-FAKEREF",
    paymentDate: "09 Aug 2026",
    paymentTime: "6:00 PM",
    receiptFiles: ["fake-receipt.png"],
    status: "Rejected",
    assignedReviewer: "Sarah Ahmed",
    flags: "None",
    notes: "Payment receipt attachment.",
    history: [
      { time: "09 Aug · 6:15 PM", text: "Payment submitted by Zainab" },
      { time: "10 Aug · 10:00 AM", text: "Payment rejected by Sarah Ahmed: 'Could not verify transaction with bank logs'" }
    ],
    rejectionReason: "Payment could not be verified",
    rejectionNotes: "Verification failed. The bank has no record of TXN-FAKEREF."
  }
];

// Active filters for reviews queue
state.paymentReviewFilters = {
  search: "",
  status: "All",
  channel: "All",
  exception: "All",
  reviewer: "All"
};

// Render payment review queue dashboard
window.renderStaffPaymentsQueue = function() {
  const view = document.getElementById("staff-payments-view");
  if (!view) return;

  // Reconcile with Screen 11 submission context if learner submitted PAYMENT
  Object.keys(state.paymentSubmissions).forEach(subId => {
    const sub = state.paymentSubmissions[subId];
    // Check if already in queue
    const match = state.paymentSubmissionsQueue.find(q => q.id === subId);
    if (!match) {
      // Append to local queue
      state.paymentSubmissionsQueue.unshift({
        id: subId,
        membershipRequestId: sub.membershipRequestId,
        learnerName: sub.beneficiary,
        payerName: sub.payer,
        payerRelation: sub.payer === sub.beneficiary ? "Self" : "Parent",
        course: "Spoken English",
        product: "Spoken English Live — 12 Classes",
        expectedAmount: sub.expectedAmount,
        amountPaid: sub.amountPaid,
        currency: sub.currency,
        paymentChannel: sub.paymentChannel,
        transactionReference: sub.transactionReference,
        paymentDate: sub.paymentDate,
        paymentTime: "12:00 PM",
        receiptFiles: sub.receiptFiles,
        status: "Awaiting Review",
        assignedReviewer: "Unassigned",
        flags: sub.hasDuplicateFlag ? "Duplicate Reference" : (sub.hasMismatchFlag ? "Amount Mismatch" : "None"),
        notes: "Submitted via learner portal checkout flow.",
        history: [
          { time: "14 Aug · 11:06 AM", text: "Payment evidence submitted by Ali Khan" }
        ],
        rejectionReason: "",
        rejectionNotes: "",
        correctionCategory: "",
        correctionInstructions: ""
      });
    }
  });

  // Counts
  const awaitingCount = state.paymentSubmissionsQueue.filter(p => p.status === "Awaiting Review").length;
  const underReviewCount = state.paymentSubmissionsQueue.filter(p => p.status === "Under Review").length;
  const correctionCount = state.paymentSubmissionsQueue.filter(p => p.status === "Correction Requested").length;
  const exceptionCount = state.paymentSubmissionsQueue.filter(p => p.flags !== "None").length;

  // Filter queue
  const filtered = state.paymentSubmissionsQueue.filter(p => {
    // Search
    if (state.paymentReviewFilters.search) {
      const q = state.paymentReviewFilters.search.toLowerCase();
      const matchSearch = p.id.toLowerCase().includes(q) ||
                          p.learnerName.toLowerCase().includes(q) ||
                          p.payerName.toLowerCase().includes(q) ||
                          p.transactionReference.toLowerCase().includes(q);
      if (!matchSearch) return false;
    }
    // Status
    if (state.paymentReviewFilters.status !== "All") {
      if (p.status !== state.paymentReviewFilters.status) return false;
    }
    // Channel
    if (state.paymentReviewFilters.channel !== "All") {
      if (p.paymentChannel !== state.paymentReviewFilters.channel) return false;
    }
    // Exception
    if (state.paymentReviewFilters.exception !== "All") {
      if (state.paymentReviewFilters.exception === "No Issues" && p.flags !== "None") return false;
      if (state.paymentReviewFilters.exception !== "No Issues" && p.flags !== state.paymentReviewFilters.exception) return false;
    }
    // Reviewer
    if (state.paymentReviewFilters.reviewer !== "All") {
      if (p.assignedReviewer !== state.paymentReviewFilters.reviewer) return false;
    }
    return true;
  });

  // Rows HTML
  const rowsHtml = filtered.map(p => {
    let statClass = "status-submitted"; // Awaiting Review / Under Review
    if (p.status === "Approved") statClass = "status-ready";
    else if (p.status === "Rejected" || p.status === "Correction Requested") statClass = "status-closed";

    let flagBadge = `<span style="font-size:11px; color:#555;">None</span>`;
    if (p.flags !== "None") {
      flagBadge = `<span class="badge-status status-closed" style="font-size:10px; background:#fffcf0; color:#b06000; border-color:#f0d97a;">${p.flags}</span>`;
    }

    return `
      <tr>
        <td style="padding:12px; font-weight:700; font-family:monospace;">${p.id}</td>
        <td style="padding:12px; font-weight:700; color:var(--color-on-tertiary-fixed);">${p.learnerName}</td>
        <td style="padding:12px; font-size:13px; color:var(--color-on-surface-variant);">${p.course}</td>
        <td style="padding:12px; font-size:12.5px;">PKR ${Number(p.expectedAmount).toLocaleString()}</td>
        <td style="padding:12px; font-size:12.5px; font-weight:700;">PKR ${Number(p.amountPaid).toLocaleString()}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${p.paymentChannel}</td>
        <td style="padding:12px; font-family:monospace; font-size:12px;">${p.transactionReference}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${p.paymentDate}</td>
        <td style="padding:12px;"><span class="badge-status ${statClass}" style="font-size:10.5px; ${p.status === 'Correction Requested' ? 'background-color:#f3e8ff; color:#6b21a8; border:1px solid #d8b4fe;' : ''}">${p.status}</span></td>
        <td style="padding:12px;">${flagBadge}</td>
        <td style="padding:12px; text-align:center;">
          <a href="#staff/payments/${p.id}" class="btn btn-secondary" style="padding:4px 8px; font-size:11.5px; height:28px; font-weight:700;">Review</a>
        </td>
      </tr>
    `;
  }).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Payment Reviews</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Review submitted payment evidence before membership access is confirmed.</p>
    </div>

    <!-- Metrics Cards -->
    <div class="review-summary-grid">
      <div class="review-summary-card">
        <span class="review-summary-number">${awaitingCount}</span>
        <span class="review-summary-label">Awaiting Review</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid var(--color-secondary);">
        <span class="review-summary-number" style="color:var(--color-secondary);">${underReviewCount}</span>
        <span class="review-summary-label">Under Review</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #6b21a8;">
        <span class="review-summary-number" style="color:#6b21a8;">${correctionCount}</span>
        <span class="review-summary-label">Correction Requested</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #ba1a1a;">
        <span class="review-summary-number" style="color:#ba1a1a;">${exceptionCount}</span>
        <span class="review-summary-label">Exception Alarms</span>
      </div>
    </div>

    <!-- Filters Panel -->
    <div class="filter-bar-grid">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Search Queue</label>
        <input type="text" id="payreview-search" class="form-input" style="height:36px; font-size:12.5px;" placeholder="Search submission, learner..." value="${state.paymentReviewFilters.search}" oninput="updatePaymentReviewFilters()">
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Review Status</label>
        <select id="payreview-filter-status" class="form-input" style="height:36px; font-size:12.5px;" onchange="updatePaymentReviewFilters()">
          <option value="All" ${state.paymentReviewFilters.status === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Awaiting Review" ${state.paymentReviewFilters.status === 'Awaiting Review' ? 'selected' : ''}>Awaiting Review</option>
          <option value="Under Review" ${state.paymentReviewFilters.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
          <option value="Approved" ${state.paymentReviewFilters.status === 'Approved' ? 'selected' : ''}>Approved</option>
          <option value="Correction Requested" ${state.paymentReviewFilters.status === 'Correction Requested' ? 'selected' : ''}>Correction Requested</option>
          <option value="Rejected" ${state.paymentReviewFilters.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Payment Channel</label>
        <select id="payreview-filter-channel" class="form-input" style="height:36px; font-size:12.5px;" onchange="updatePaymentReviewFilters()">
          <option value="All" ${state.paymentReviewFilters.channel === 'All' ? 'selected' : ''}>All Channels</option>
          <option value="Bank Transfer" ${state.paymentReviewFilters.channel === 'Bank Transfer' ? 'selected' : ''}>Bank Transfer</option>
          <option value="Easypaisa" ${state.paymentReviewFilters.channel === 'Easypaisa' ? 'selected' : ''}>Easypaisa</option>
          <option value="JazzCash" ${state.paymentReviewFilters.channel === 'JazzCash' ? 'selected' : ''}>JazzCash</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Exception Flags</label>
        <select id="payreview-filter-exception" class="form-input" style="height:36px; font-size:12.5px;" onchange="updatePaymentReviewFilters()">
          <option value="All" ${state.paymentReviewFilters.exception === 'All' ? 'selected' : ''}>All Logs</option>
          <option value="None" ${state.paymentReviewFilters.exception === 'None' ? 'selected' : ''}>No Issues (Clean)</option>
          <option value="Amount Mismatch" ${state.paymentReviewFilters.exception === 'Amount Mismatch' ? 'selected' : ''}>Amount Mismatch</option>
          <option value="Duplicate Reference" ${state.paymentReviewFilters.exception === 'Duplicate Reference' ? 'selected' : ''}>Duplicate Ref</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Assigned Reviewer</label>
        <select id="payreview-filter-reviewer" class="form-input" style="height:36px; font-size:12.5px;" onchange="updatePaymentReviewFilters()">
          <option value="All" ${state.paymentReviewFilters.reviewer === 'All' ? 'selected' : ''}>All Reviewers</option>
          <option value="Sarah Ahmed" ${state.paymentReviewFilters.reviewer === 'Sarah Ahmed' ? 'selected' : ''}>Sarah Ahmed</option>
          <option value="Abdullah Khan" ${state.paymentReviewFilters.reviewer === 'Abdullah Khan' ? 'selected' : ''}>Abdullah Khan</option>
          <option value="Unassigned" ${state.paymentReviewFilters.reviewer === 'Unassigned' ? 'selected' : ''}>Unassigned</option>
        </select>
      </div>
    </div>

    <!-- Table Renders -->
    <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
      <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Submission</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Course</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Expected</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Submitted</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Channel</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Reference ID</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Delivered</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Review</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Flags</th>
            <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="11" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No payment reviews found matching filters.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
};

window.updatePaymentReviewFilters = function() {
  const searchInput = document.getElementById("payreview-search");
  const statusSel = document.getElementById("payreview-filter-status");
  const channelSel = document.getElementById("payreview-filter-channel");
  const exceptionSel = document.getElementById("payreview-filter-exception");
  const reviewerSel = document.getElementById("payreview-filter-reviewer");

  if (searchInput) state.paymentReviewFilters.search = searchInput.value;
  if (statusSel) state.paymentReviewFilters.status = statusSel.value;
  if (channelSel) state.paymentReviewFilters.channel = channelSel.value;
  if (exceptionSel) state.paymentReviewFilters.exception = exceptionSel.value;
  if (reviewerSel) state.paymentReviewFilters.reviewer = reviewerSel.value;

  renderStaffPaymentsQueue();
};


// Render detailed manual review workspace
window.renderStaffPaymentDetail = function(subId) {
  const view = document.getElementById("staff-payment-detail-view");
  if (!view) return;

  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  if (!sub) {
    view.innerHTML = `<div class="form-card" style="text-align:center; padding:24px;"><h3>Payment submission not found</h3><a href="#staff/payments">Back to list</a></div>`;
    return;
  }

  const isClaimed = sub.assignedReviewer !== "Unassigned";
  const isSarahReviewing = sub.assignedReviewer === "Sarah Ahmed";
  const isReadOnly = sub.status === "Approved" || sub.status === "Rejected" || sub.status === "Correction Requested";

  // Build timeline HTML
  const timelineHtml = sub.history.map(h => `
    <li class="timeline-evidence-item">
      <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">${h.time}</span>
      <span>${h.text}</span>
    </li>
  `).join("");

  // Exception alarms visual boxes
  let alarmHtml = "";
  if (sub.flags === "Amount Mismatch") {
    alarmHtml = `
      <div class="alarm-box animate-fade-in">
        <h4>⚠️ Amount Mismatch Flagged</h4>
        <p>Expected amount for this membership request is <strong>PKR ${Number(sub.expectedAmount).toLocaleString()}</strong>, but the payer submitted <strong>PKR ${Number(sub.amountPaid).toLocaleString()}</strong>. Rejection or correction request is recommended.</p>
      </div>
    `;
  } else if (sub.flags === "Duplicate Reference") {
    alarmHtml = `
      <div class="alarm-box animate-fade-in" style="background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left-color:#f0d97a;">
        <h4 style="color:#b06000;">⚠️ Possible Duplicate Reference</h4>
        <p style="color:#b06000;">The transaction reference ID <strong>${sub.transactionReference}</strong> matches another historical payment submission (e.g. Ali Khan PAY-SUB-001). Please cross-check bank statements carefully.</p>
      </div>
    `;
  }

  // Verification Checklist rows
  const meetsExpected = sub.amountPaid === sub.expectedAmount;
  const isUniqueRef = sub.transactionReference !== "TXN-FAKEREF" && sub.flags !== "Duplicate Reference";
  const hasReceiptFile = sub.receiptFiles.length > 0;

  view.innerHTML = `
    <!-- Top breadcrumbs -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center;">
      <a href="#staff/payments" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Payment Reviews
      </a>
      <span style="font-size:12px; color:var(--color-tertiary);">Current Reviewer: <strong>Sarah Ahmed</strong> (Operations Manager)</span>
    </div>

    <!-- Header info -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Review Payment Submission</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          Submission: <strong>${sub.id}</strong> &middot; Learner: <strong>${sub.learnerName}</strong> &middot; Program: <strong>${sub.course}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-ready" style="font-size:10.5px; margin-right:4px;">${sub.paymentChannel}</span>
        <span class="badge-status status-submitted" style="font-size:10.5px; ${sub.status === 'Approved' ? 'background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;' : ''}">${sub.status}</span>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:4px;">Assignee: <strong>${sub.assignedReviewer}</strong></div>
      </div>
    </div>

    <!-- Claim task block if unassigned -->
    ${!isClaimed ? `
      <div class="form-card animate-fade-in" style="background-color:rgba(119, 88, 58, 0.05); border:1.5px solid var(--color-secondary); padding:16px; margin-bottom:var(--spacing-lg); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="margin:0; font-family:var(--font-family-headings); font-size:14.5px; font-weight:800; color:var(--color-on-tertiary-fixed);">Review Task Unclaimed</h4>
          <p style="margin:5px 0 0 0; font-size:12.5px; color:var(--color-tertiary);">Claim this task to locks reviews under your operations profile.</p>
        </div>
        <button class="btn btn-primary" onclick="claimStaffPaymentReview('${sub.id}')" style="height:36px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Claim Review</button>
      </div>
    ` : ''}

    <!-- Double Column Workspace -->
    <div class="checkout-grid">
      
      <!-- Left Column: Snapshot details and receipts -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        ${alarmHtml}

        <!-- Security Notice -->
        <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; font-size:12px; line-height:16px; color:var(--color-tertiary);">
          <strong>Verification Notice:</strong> Compare the submitted details against the immutable request snapshot. Payer, learner, and product snapshots are protected and cannot be edited.
        </div>

        <!-- Immutable Request snapshot card -->
        <div class="form-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 class="form-section-title" style="margin-bottom:0;">Membership Request Snapshot</h3>
            <span class="badge-status status-ready" style="font-size:9.5px; background-color:#e2e8f0; color:var(--color-on-surface); border-color:#ccc; font-weight:800;">Snapshot Locked</span>
          </div>

          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:10px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Request ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${sub.membershipRequestId}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner / Beneficiary:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.learnerName}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Program Enrolled:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.course}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Term / Variant:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Spoken English Live — 12 Classes</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Expected Amount:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">PKR ${Number(sub.expectedAmount).toLocaleString()}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">CSR Attribution:</td><td style="padding:6px 0; font-weight:700; text-align:right;">Sarah Ahmed (CSR Follow-up)</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Payer Profile:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.payerName} (${sub.payerRelation})</td></tr>
          </table>
        </div>

        <!-- Submitted Payer details -->
        <div class="form-card">
          <h3 class="form-section-title">Submitted Transfer Evidence</h3>
          
          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:10px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Sender Name:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.senderName}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Channel Used:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.paymentChannel}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Amount Submitted:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:${meetsExpected ? '#137333' : '#ba1a1a'};">PKR ${Number(sub.amountPaid).toLocaleString()}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Transfer Date:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.paymentDate} &middot; ${sub.paymentTime}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Transaction Ref ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace; color:var(--color-secondary);">${sub.transactionReference}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Sender Account Suffix:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${sub.accountDigits || 'Not provided'}</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Payer Notes:</td><td style="padding:6px 0; font-weight:500; text-align:right; font-style:italic;">"${sub.notes || 'No comments'}"</td></tr>
          </table>
        </div>

        <!-- Attached Receipt evidence preview -->
        <div class="form-card">
          <h3 class="form-section-title">Attached Receipt Files</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${sub.receiptFiles.map((file, idx) => `
              <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:24px;">📄</span>
                  <div>
                    <strong style="font-size:13px; color:var(--color-on-tertiary-fixed);">${file}</strong><br>
                    <span style="font-size:10px; color:var(--color-tertiary);">Manual Evidence File &middot; Size: 1.8 MB</span>
                  </div>
                </div>
                <button class="btn btn-secondary" onclick="previewStaffReviewReceipt('${sub.id}', ${idx})" style="height:32px; font-size:12.5px; font-weight:700;">Preview Receipt</button>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

      <!-- Right Column: Verification checklist and decisions -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
        
        <!-- Verification checklist card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Verification Checks</h3>
          
          <div class="review-checklist" style="font-size:12.5px;">
            <div class="review-check-row">
              <span class="review-check-label">Beneficiary Matches Request</span>
              <span class="review-check-status review-status-good">Matches</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Payer Account Name Verified</span>
              <span class="review-check-status review-status-good">Verified</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Expected Amount Match</span>
              <span class="review-check-status ${meetsExpected ? 'review-status-good' : 'review-status-error'}">${meetsExpected ? 'Matches' : 'Mismatch'}</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Reference ID Uniqueness</span>
              <span class="review-check-status ${isUniqueRef ? 'review-status-good' : 'review-status-error'}">${isUniqueRef ? 'Unique' : 'Flagged'}</span>
            </div>
            <div class="review-check-row">
              <span class="review-check-label">Attached Receipt Image</span>
              <span class="review-check-status ${hasReceiptFile ? 'review-status-good' : 'review-status-error'}">${hasReceiptFile ? 'Ready' : 'Missing'}</span>
            </div>
          </div>
        </div>

        <!-- Decision Box -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:8px;">Review Decision</h3>
          
          <div class="form-group" style="margin-bottom:12px;">
            <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Internal Review Notes (Optional)</label>
            <textarea id="staff-review-notes" class="form-input" style="height:60px; font-size:12.5px; line-height:16px;" placeholder="Add an internal note..." ${isReadOnly || !isSarahReviewing ? 'disabled' : ''}></textarea>
          </div>

          <!-- Decision buttons -->
          ${!isClaimed ? `
            <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:10px 12px; font-size:12px; text-align:center; font-weight:700; color:var(--color-tertiary);">
              Please claim this review task to activate decision tools.
            </div>
          ` : (
            isSarahReviewing ? (
              isReadOnly ? `
                <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:10px 12px; font-size:12.5px; text-align:center; font-weight:700; color:var(--color-on-tertiary-fixed);">
                  Review Completed: ${sub.status}
                </div>
              ` : `
                <div style="display:flex; flex-direction:column; gap:8px;">
                  <button class="btn btn-primary" onclick="approveManualPayment('${sub.id}')" style="width:100%; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">
                    Approve Payment
                  </button>
                  <button class="btn btn-secondary" onclick="requestPaymentCorrectionModal('${sub.id}')" style="width:100%; height:38px;">
                    Request Correction
                  </button>
                  <button class="btn btn-secondary" onclick="rejectManualPaymentModal('${sub.id}')" style="width:100%; height:38px; color:#ba1a1a; border-color:rgba(186, 26, 26, 0.2);">
                    Reject Payment
                  </button>
                </div>
              `
            ) : `
              <div style="background-color:rgba(186, 26, 26, 0.03); border:1.5px dashed rgba(186, 26, 26, 0.15); border-radius:6px; padding:10px 12px; font-size:12px; text-align:center; font-weight:700; color:#ba1a1a;">
                Task claimed by another agent (${sub.assignedReviewer}). Review locked.
              </div>
            `
          )}
        </div>

        <!-- Task Timeline -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Review Timeline</h3>
          <ul class="timeline-evidence" style="font-size:11.5px; margin-bottom:0;">
            ${timelineHtml}
          </ul>
        </div>

      </div>

    </div>
  `;
};

// 1. Claim reviews
window.claimStaffPaymentReview = function(subId) {
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  sub.assignedReviewer = "Sarah Ahmed";
  sub.status = "Under Review";

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  sub.history.push({
    time: `14 Aug · ${timeStr}`,
    text: "Review claimed by Sarah Ahmed"
  });

  renderStaffPaymentDetail(subId);
  showToastAlert("Payment review assigned to Sarah Ahmed.");
};

// 2. Preview upload receipts
window.previewStaffReviewReceipt = function(subId, index) {
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  const file = sub.receiptFiles[index];

  const content = `
    <div style="text-align:center; padding:10px 0;">
      <!-- Zoom Tool simulator -->
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom:14px;">
        <button class="btn btn-secondary" onclick="showToastAlert('Zoomed In.')" style="height:28px; font-size:11px; padding:0 8px;">Zoom In (+)</button>
        <button class="btn btn-secondary" onclick="showToastAlert('Zoomed Out.')" style="height:28px; font-size:11px; padding:0 8px;">Zoom Out (-)</button>
      </div>

      <div style="background-color:#f8f9fa; border:1px solid #ddd; border-radius:6px; padding:24px; font-family:monospace; font-size:12.5px; text-align:left; max-width:400px; margin:0 auto; display:flex; flex-direction:column; gap:8px;">
        <div style="font-weight:700; border-bottom:1.5px solid #000; padding-bottom:8px; font-size:14px; text-align:center; color:#137333;">--- TRANSFER SUCCESSFUL ---</div>
        <div><strong>Transaction ID:</strong> ${sub.transactionReference}</div>
        <div><strong>Expected Ref:</strong> ${sub.membershipRequestId}</div>
        <div><strong>Sender:</strong> ${sub.senderName || sub.payerName}</div>
        <div><strong>Recipient:</strong> Innovator Huzsam</div>
        <div><strong>Transfer Date:</strong> ${sub.paymentDate}</div>
        <div><strong>Amount Paid:</strong> PKR ${Number(sub.amountPaid).toLocaleString()}</div>
        <div style="border-top:1.5px solid #000; padding-top:8px; font-size:10px; color:var(--color-tertiary); text-align:center;">IHS Demo Bank confirmation receipt.</div>
      </div>
      <button class="btn btn-secondary" onclick="closeModal()" style="margin-top:20px; width:100%; height:38px;">Close Preview</button>
    </div>
  `;
  openModal(`Receipt Preview: ${file}`, content);
};

// 3. Approve manual payment
window.approveManualPayment = function(subId) {
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  const notesText = document.getElementById("staff-review-notes");
  let noteVal = notesText ? notesText.value.trim() : "";

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">Confirming this will approve the payment transaction and create continuing membership entitlement records.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Submission:</strong> ${subId}</div>
        <div><strong>Learner:</strong> ${sub.learnerName}</div>
        <div><strong>Amount Transferred:</strong> PKR ${Number(sub.amountPaid).toLocaleString()}</div>
        <div><strong>Transaction Ref:</strong> ${sub.transactionReference}</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmManualPaymentApproval('${subId}', '${noteVal}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Approval</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Approve Payment?", content);
};

window.confirmManualPaymentApproval = function(subId, notesText) {
  closeModal();
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);

  // Update states
  sub.status = "Approved";
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  sub.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Payment approved by Sarah Ahmed. Note: "${notesText || 'No comments'}"`
  });

  // Reconcile membershipRequest status if exists
  const req = state.membershipRequests[sub.membershipRequestId];
  if (req) {
    req.status = "Approved";
    req.history.push({
      time: `14 Aug · ${timeStr}`,
      text: `Payment verified. Membership pending setup activation.`
    });
  }

  // Create downstream models
  const txnId = `PAY-TXN-${Math.floor(100 + Math.random() * 900)}`;
  const recId = `IHS-REC-${Math.floor(100 + Math.random() * 900)}`;
  const termId = `MEM-TERM-${Math.floor(100 + Math.random() * 900)}`;

  renderPaymentApprovalSuccess(subId, txnId, recId, termId);
};

function renderPaymentApprovalSuccess(subId, txnId, recId, termId) {
  const view = document.getElementById("staff-payment-detail-view");
  if (!view) return;

  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Payment Approved</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">The payment has been verified and continuing membership records created.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Payment Status</td><td class="receipt-value" style="color:#137333; font-weight:800;">Confirmed</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Transaction Ref</td><td class="receipt-value" style="font-family:monospace;">${txnId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Official Receipt ID</td><td class="receipt-value" style="font-family:monospace;">${recId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Membership Term</td><td class="receipt-value" style="font-family:monospace;">${termId}</td></tr>
        <tr><td class="receipt-label">Membership Status</td><td class="receipt-value"><span class="badge-status status-submitted" style="font-size:9.5px; padding:1px 6px;">Pending Activation</span></td></tr>
      </table>

      <!-- Downstream allocation log -->
      <div style="text-align:left; background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:24px;">
        <h4 style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--color-secondary); margin-bottom:8px;">Continuing Membership Allocations</h4>
        <table style="width:100%; font-size:12px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Membership Access Grant:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Pending Setup Activation</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Payer Receipt Voucher:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#137333;">Issued (Official Receipt)</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:4px 0;">Enrollment Schedule setup:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Required (No Auto-Activation)</td></tr>
          <tr><td style="padding:4px 0;">CSR Attribution Commission:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Pending Setup Verification</td></tr>
        </table>
      </div>

      <div style="display:flex; gap:12px; max-width:440px; margin:0 auto;">
        <button class="btn btn-primary" onclick="window.location.hash='#staff/enrolments/setup/' + termId" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Continue Enrolment Setup</button>
        <button class="btn btn-secondary" onclick="previewOfficialReviewReceipt('${recId}', '${sub.learnerName}', '${sub.payerName}', '${sub.product}', '${sub.amountPaid}', '${sub.transactionReference}')" style="flex:1; height:42px; font-weight:700;">View Official Receipt</button>
      </div>
    </div>
  `;
}

// 4. Preview Official receipt template
window.previewOfficialReviewReceipt = function(recId, learner, payer, product, amount, ref) {
  const content = `
    <div style="text-align:center; padding:10px 0;">
      <div style="background-color:#ffffff; border:1.5px solid #137333; border-radius:6px; padding:24px; font-family:sans-serif; font-size:12.5px; text-align:left; max-width:400px; margin:0 auto; display:flex; flex-direction:column; gap:8px;">
        <div style="font-weight:800; border-bottom:2px solid #137333; padding-bottom:8px; font-size:16px; text-align:center; color:#137333;">INNOVATOR HUZSAM SCHOOL</div>
        <div style="text-align:center; font-size:10px; color:#555; text-transform:uppercase; margin-bottom:12px;">Official Payment Receipt</div>
        <div><strong>Receipt Number:</strong> ${recId}</div>
        <div><strong>Learner:</strong> ${learner}</div>
        <div><strong>Payer Name:</strong> ${payer}</div>
        <div><strong>Enrolled Course:</strong> ${product}</div>
        <div><strong>Amount Transferred:</strong> PKR ${Number(amount).toLocaleString()}</div>
        <div><strong>Deposit Ref:</strong> ${ref}</div>
        <div style="border-top:1px dashed #ccc; padding-top:8px; font-size:11px; text-align:center; font-weight:700; color:#137333;">Status: Confirmed & Reconciled</div>
      </div>
      <button class="btn btn-secondary" onclick="closeModal()" style="margin-top:20px; width:100%; height:38px;">Close Receipt</button>
    </div>
  `;
  openModal("Official Receipt Preview", content);
};

// 5. Request Correction Modal
window.requestPaymentCorrectionModal = function(subId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Explain to the payer which fields or receipt files need correction.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Category <span style="color:red;">*</span></label>
        <select id="checkout-corr-category" class="form-input" style="height:38px;">
          <option value="Receipt unclear">Receipt image unclear</option>
          <option value="Wrong amount">Wrong amount transferred</option>
          <option value="Wrong currency">Wrong currency channel</option>
          <option value="Transaction reference missing">Transaction reference missing</option>
          <option value="Transaction reference incorrect">Transaction reference incorrect</option>
          <option value="Payer details unclear">Payer details unclear</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Instructions to Learner <span style="color:red;">*</span></label>
        <textarea id="checkout-corr-notes" class="form-input" style="height:80px;" placeholder="Please upload a clearer screenshot showing the transaction reference ID..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmPaymentCorrectionRequest('${subId}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Send Correction Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Request Payment Correction", content);
};

window.confirmPaymentCorrectionRequest = function(subId) {
  const cat = document.getElementById("checkout-corr-category").value;
  const notes = document.getElementById("checkout-corr-notes").value.trim();

  if (!notes) {
    showToastAlert("Detailed instructions are required.");
    document.getElementById("checkout-corr-notes").focus();
    return;
  }

  closeModal();
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  sub.status = "Correction Requested";
  sub.correctionCategory = cat;
  sub.correctionInstructions = notes;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  sub.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Correction requested category ${cat}: "${notes}"`
  });

  // Reconcile membershipRequest status if exists
  const req = state.membershipRequests[sub.membershipRequestId];
  if (req) {
    req.status = "Correction Requested";
    req.history.push({
      time: `14 Aug · ${timeStr}`,
      text: `Correction requested by Sarah Ahmed: "${notes}"`
    });
  }

  renderStaffPaymentDetail(subId);
  showToastAlert(`Correction requested: ${cat}`);
};

// 6. Reject Payment Modal
window.rejectManualPaymentModal = function(subId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Confirming this will reject the payment submission. Notes are required.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Reason <span style="color:red;">*</span></label>
        <select id="checkout-rej-reason" class="form-input" style="height:38px;">
          <option value="Payment could not be verified">Payment could not be verified</option>
          <option value="Invalid receipt">Invalid receipt image</option>
          <option value="Duplicate payment evidence">Duplicate payment reference</option>
          <option value="Incorrect amount">Incorrect transfer amount</option>
          <option value="Payment not found">Transaction record not found in statements</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Rejection Note <span style="color:red;">*</span></label>
        <textarea id="checkout-rej-notes" class="form-input" style="height:80px;" placeholder="Verification failed. The bank has no record of this transaction..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmPaymentRejection('${subId}')" style="flex:1; height:40px; background-color:#c5221f; border-color:#c5221f; color:white; font-weight:800;">Reject Payment</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Reject Payment Submission?", content);
};

window.confirmPaymentRejection = function(subId) {
  const reason = document.getElementById("checkout-rej-reason").value;
  const notes = document.getElementById("checkout-rej-notes").value.trim();

  if (!notes) {
    showToastAlert("Detailed notes are required for rejection.");
    document.getElementById("checkout-rej-notes").focus();
    return;
  }

  closeModal();
  const sub = state.paymentSubmissionsQueue.find(p => p.id === subId);
  sub.status = "Rejected";
  sub.rejectionReason = reason;
  sub.rejectionNotes = notes;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  sub.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Payment rejected by Sarah Ahmed: ${reason}. Notes: "${notes}"`
  });

  // Reconcile membershipRequest if exists
  const req = state.membershipRequests[sub.membershipRequestId];
  if (req) {
    req.status = "Rejected";
    req.history.push({
      time: `14 Aug · ${timeStr}`,
      text: `Payment rejected: ${reason}.`
    });
  }

  renderStaffPaymentDetail(subId);
  showToastAlert(`Payment rejected: ${reason}`);
};


// ==========================================================================
// Screen 13 - Membership Allocation & Enrolment Setup Database & Views
// ==========================================================================

// Preload mock enrolments setup queue database
state.enrolmentSetupQueue = [
  {
    membershipTermId: "MEM-TERM-001",
    learnerId: "LEARNER-001",
    learnerName: "Ali Khan",
    courseId: "spoken-english",
    course: "Spoken English",
    deliveryModel: "Live",
    paymentStatus: "Confirmed",
    status: "Pending Setup", // Pending Setup | Ready to Activate | Active
    setupIssue: "Trainer & Schedule Required",
    courseVersion: "v2.1",
    duplicateEnrolmentFlag: false,
    repeatStudyOverride: false,
    repeatStudyReason: "",
    allocationStatus: "Pending", // Pending | Allocated
    assignedTrainer: "", // Empty or Trainer Name
    scheduleDays: [], // Tuesday, Thursday, etc.
    scheduleTime: "", // 7:00 PM
    scheduleConflict: false,
    supersededVersionFlag: false,
    history: [
      { time: "14 Aug · 12:42 PM", text: "Payment approved. MEM-TERM-001 created." },
      { time: "14 Aug · 12:43 PM", text: "Enrolment setup task created." }
    ]
  },
  {
    membershipTermId: "MEM-TERM-002",
    learnerId: "LEARNER-002",
    learnerName: "Ayesha Malik",
    courseId: "ielts-prep",
    course: "IELTS Preparation",
    deliveryModel: "Live",
    paymentStatus: "Confirmed",
    status: "Pending Setup",
    setupIssue: "Missing Trainer",
    courseVersion: "v2.1",
    duplicateEnrolmentFlag: false,
    repeatStudyOverride: false,
    repeatStudyReason: "",
    allocationStatus: "Allocated",
    assignedTrainer: "",
    scheduleDays: ["Monday", "Wednesday"],
    scheduleTime: "6:00 PM",
    scheduleConflict: false,
    supersededVersionFlag: false,
    history: [
      { time: "13 Aug · 3:00 PM", text: "Payment approved. MEM-TERM-002 created." }
    ]
  },
  {
    membershipTermId: "MEM-TERM-003",
    learnerId: "LEARNER-003",
    learnerName: "Hassan Raza",
    courseId: "practical-ai",
    course: "Practical AI & Prompt Engineering",
    deliveryModel: "Self-Paced",
    paymentStatus: "Confirmed",
    status: "Ready to Activate",
    setupIssue: "None (Self-Paced)",
    courseVersion: "v1.5",
    duplicateEnrolmentFlag: false,
    repeatStudyOverride: false,
    repeatStudyReason: "",
    allocationStatus: "Allocated",
    assignedTrainer: "N/A (Self-Paced)",
    scheduleDays: [],
    scheduleTime: "",
    scheduleConflict: false,
    supersededVersionFlag: false,
    history: [
      { time: "14 Aug · 10:00 AM", text: "Access Approved. MEM-TERM-003 created." }
    ]
  },
  {
    membershipTermId: "MEM-TERM-004",
    learnerId: "LEARNER-004",
    learnerName: "Fatima Noor",
    courseId: "k12-math",
    course: "K-12 Mathematics",
    deliveryModel: "K-12",
    paymentStatus: "Confirmed",
    status: "Pending Setup",
    setupIssue: "Section Required",
    courseVersion: "v1.0",
    duplicateEnrolmentFlag: false,
    repeatStudyOverride: false,
    repeatStudyReason: "",
    allocationStatus: "Pending",
    assignedTrainer: "",
    scheduleDays: [],
    scheduleTime: "",
    scheduleConflict: false,
    supersededVersionFlag: false,
    history: [
      { time: "14 Aug · 11:30 AM", text: "Payment approved. MEM-TERM-004 created." }
    ]
  },
  {
    membershipTermId: "MEM-TERM-005",
    learnerId: "LEARNER-005",
    learnerName: "Omar Farooq",
    courseId: "digital-marketing",
    course: "Digital Marketing",
    deliveryModel: "Self-Paced",
    paymentStatus: "Confirmed",
    status: "Active",
    setupIssue: "None",
    courseVersion: "v1.2",
    duplicateEnrolmentFlag: false,
    repeatStudyOverride: false,
    repeatStudyReason: "",
    allocationStatus: "Allocated",
    assignedTrainer: "N/A",
    scheduleDays: [],
    scheduleTime: "",
    scheduleConflict: false,
    supersededVersionFlag: false,
    history: [
      { time: "08 Aug · 11:00 AM", text: "Enrolment Activated." }
    ]
  }
];

state.enrolmentFilters = {
  search: "",
  status: "All",
  deliveryModel: "All"
};

// Render staff enrolment setup queue dashboard
window.renderStaffEnrolmentsQueue = function() {
  const view = document.getElementById("staff-enrolments-view");
  if (!view) return;

  // Reconcile with Screen 12 payment approval state
  // Check if any payment in paymentSubmissionsQueue was approved and doesn't exist in setup queue
  state.paymentSubmissionsQueue.forEach(p => {
    if (p.status === "Approved") {
      const termId = `MEM-TERM-${p.id.replace("PAY-SUB-", "")}`;
      const match = state.enrolmentSetupQueue.find(q => q.membershipTermId === termId);
      if (!match) {
        state.enrolmentSetupQueue.unshift({
          membershipTermId: termId,
          learnerId: `LEARNER-${p.id.replace("PAY-SUB-", "")}`,
          learnerName: p.learnerName,
          courseId: "spoken-english",
          course: p.course,
          deliveryModel: "Live",
          paymentStatus: "Confirmed",
          status: "Pending Setup",
          setupIssue: "Trainer & Schedule Required",
          courseVersion: "v2.1",
          duplicateEnrolmentFlag: false,
          repeatStudyOverride: false,
          repeatStudyReason: "",
          allocationStatus: "Pending",
          assignedTrainer: "",
          scheduleDays: [],
          scheduleTime: "",
          scheduleConflict: false,
          supersededVersionFlag: false,
          history: [
            { time: "14 Aug · 12:42 PM", text: "Payment approved. Membership term created." },
            { time: "14 Aug · 12:43 PM", text: "Enrolment setup task created." }
          ]
        });
      }
    }
  });

  // Calculate metrics counts
  const pendingCount = state.enrolmentSetupQueue.filter(e => e.status === "Pending Setup").length;
  const readyCount = state.enrolmentSetupQueue.filter(e => e.status === "Ready to Activate").length;
  const missingTrainerCount = state.enrolmentSetupQueue.filter(e => e.status === "Pending Setup" && e.setupIssue.includes("Trainer")).length;
  const activeTodayCount = state.enrolmentSetupQueue.filter(e => e.status === "Active").length;

  // Filter list
  const filtered = state.enrolmentSetupQueue.filter(e => {
    if (state.enrolmentFilters.search) {
      const q = state.enrolmentFilters.search.toLowerCase();
      const matchSearch = e.learnerName.toLowerCase().includes(q) ||
                          e.membershipTermId.toLowerCase().includes(q) ||
                          e.course.toLowerCase().includes(q);
      if (!matchSearch) return false;
    }
    if (state.enrolmentFilters.status !== "All") {
      if (e.status !== state.enrolmentFilters.status) return false;
    }
    if (state.enrolmentFilters.deliveryModel !== "All") {
      if (e.deliveryModel !== state.enrolmentFilters.deliveryModel) return false;
    }
    return true;
  });

  // Rows HTML
  const rowsHtml = filtered.map(e => {
    let statClass = "status-submitted"; // Pending Setup
    if (e.status === "Ready to Activate") statClass = "status-ready";
    else if (e.status === "Active") statClass = "status-ready"; // Active

    return `
      <tr>
        <td style="padding:12px; font-weight:700; color:var(--color-on-tertiary-fixed);">${e.learnerName}</td>
        <td style="padding:12px; font-size:13px; color:var(--color-on-surface-variant);">${e.course}</td>
        <td style="padding:12px; font-family:monospace; font-size:12.5px;">${e.membershipTermId}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${e.deliveryModel}</td>
        <td style="padding:12px;"><span class="badge-status status-ready" style="font-size:10px;">${e.paymentStatus}</span></td>
        <td style="padding:12px;"><span class="badge-status ${statClass}" style="font-size:10.5px; ${e.status === 'Active' ? 'background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;' : ''}">${e.status}</span></td>
        <td style="padding:12px; font-size:12px; color:#b06000; font-weight:600;">${e.setupIssue}</td>
        <td style="padding:12px; text-align:center;">
          <a href="#staff/enrolments/setup/${e.membershipTermId}" class="btn btn-secondary" style="padding:4px 8px; font-size:11.5px; height:28px; font-weight:700;">Set Up</a>
        </td>
      </tr>
    `;
  }).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Enrolment Setup</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Complete course-specific setup for approved memberships and access grants.</p>
    </div>

    <!-- Metrics Cards -->
    <div class="review-summary-grid">
      <div class="review-summary-card">
        <span class="review-summary-number">${pendingCount}</span>
        <span class="review-summary-label">Pending Setup</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid var(--color-secondary);">
        <span class="review-summary-number" style="color:var(--color-secondary);">${readyCount}</span>
        <span class="review-summary-label">Ready to Activate</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #ba1a1a;">
        <span class="review-summary-number" style="color:#ba1a1a;">${missingTrainerCount}</span>
        <span class="review-summary-label">Missing Trainer</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #137333;">
        <span class="review-summary-number" style="color:#137333;">${activeTodayCount}</span>
        <span class="review-summary-label">Active Today</span>
      </div>
    </div>

    <!-- Filters Panel -->
    <div class="filter-bar-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Search Queue</label>
        <input type="text" id="enrol-search" class="form-input" style="height:36px; font-size:12.5px;" placeholder="Search learner, membership..." value="${state.enrolmentFilters.search}" oninput="updateEnrolmentFilters()">
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Setup Status</label>
        <select id="enrol-filter-status" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateEnrolmentFilters()">
          <option value="All" ${state.enrolmentFilters.status === 'All' ? 'selected' : ''}>All Statuses</option>
          <option value="Pending Setup" ${state.enrolmentFilters.status === 'Pending Setup' ? 'selected' : ''}>Pending Setup</option>
          <option value="Ready to Activate" ${state.enrolmentFilters.status === 'Ready to Activate' ? 'selected' : ''}>Ready to Activate</option>
          <option value="Active" ${state.enrolmentFilters.status === 'Active' ? 'selected' : ''}>Active</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:0;">
        <label class="form-label" style="font-size:11px; margin-bottom:4px; font-weight:700;">Delivery Model</label>
        <select id="enrol-filter-model" class="form-input" style="height:36px; font-size:12.5px;" onchange="updateEnrolmentFilters()">
          <option value="All" ${state.enrolmentFilters.deliveryModel === 'All' ? 'selected' : ''}>All Models</option>
          <option value="Live" ${state.enrolmentFilters.deliveryModel === 'Live' ? 'selected' : ''}>Live Online</option>
          <option value="Self-Paced" ${state.enrolmentFilters.deliveryModel === 'Self-Paced' ? 'selected' : ''}>Self-Paced</option>
          <option value="K-12" ${state.enrolmentFilters.deliveryModel === 'K-12' ? 'selected' : ''}>K-12</option>
        </select>
      </div>
    </div>

    <!-- Table Renders -->
    <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
      <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Course</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Membership ID</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Delivery</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Payment</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Enrolment</th>
            <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Setup Issue</th>
            <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || `<tr><td colspan="8" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No enrolment setups pending.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
};

window.updateEnrolmentFilters = function() {
  const search = document.getElementById("enrol-search");
  const status = document.getElementById("enrol-filter-status");
  const model = document.getElementById("enrol-filter-model");

  if (search) state.enrolmentFilters.search = search.value;
  if (status) state.enrolmentFilters.status = status.value;
  if (model) state.enrolmentFilters.deliveryModel = model.value;

  renderStaffEnrolmentsQueue();
};


// Render detailed setup workspace page
window.renderStaffEnrolmentDetail = function(termId) {
  const view = document.getElementById("staff-enrolment-detail-view");
  if (!view) return;

  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  if (!enrol) {
    view.innerHTML = `<div class="form-card" style="text-align:center; padding:24px;"><h3>Enrolment setup not found</h3><a href="#staff/enrolments">Back to Queue</a></div>`;
    return;
  }

  // Pre-fill schedule plan defaults if empty
  if (enrol.scheduleDays.length === 0 && enrol.deliveryModel === "Live") {
    enrol.scheduleDays = ["Tuesday", "Thursday"];
    enrol.scheduleTime = "07:00 PM";
  }

  const isLive = enrol.deliveryModel === "Live";
  const isK12 = enrol.deliveryModel === "K-12";
  const isSelfPaced = enrol.deliveryModel === "Self-Paced";

  // Check completion states
  const paymentOk = enrol.paymentStatus === "Confirmed";
  const allocatedOk = enrol.allocationStatus === "Allocated";
  const versionOk = enrol.courseVersion !== "";
  const trainerOk = !isLive || (enrol.assignedTrainer !== "");
  const scheduleOk = !isLive || (enrol.scheduleDays.length > 0 && enrol.scheduleTime !== "");
  const noDuplicates = !enrol.duplicateEnrolmentFlag || enrol.repeatStudyOverride;

  const canActivate = paymentOk && allocatedOk && versionOk && trainerOk && scheduleOk && noDuplicates;

  // Update status based on checklists
  if (enrol.status !== "Active") {
    enrol.status = canActivate ? "Ready to Activate" : "Pending Setup";
    
    // Setup Issue tracking
    if (!allocatedOk) enrol.setupIssue = "Membership Allocation Pending";
    else if (enrol.duplicateEnrolmentFlag && !enrol.repeatStudyOverride) enrol.setupIssue = "Active Enrolment Conflict";
    else if (!trainerOk) enrol.setupIssue = "Trainer Assignment Required";
    else if (!scheduleOk) enrol.setupIssue = "Schedule Plan Required";
    else enrol.setupIssue = "None";
  }

  // Step Indicators HTML
  const stepsHtml = `
    <div class="step-indicator-bar">
      <div class="step-indicator-item completed">✓ Payment & Access</div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${versionOk ? 'completed' : 'active'}">${versionOk ? '✓' : '2.'} Course Version</div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${allocatedOk ? 'completed' : 'active'}">${allocatedOk ? '✓' : '3.'} Allocation</div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${trainerOk ? 'completed' : 'active'}">${trainerOk ? '✓' : '4.'} Trainer</div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${scheduleOk ? 'completed' : 'active'}">${scheduleOk ? '✓' : '5.'} Schedule</div>
      <div class="step-indicator-separator">&rarr;</div>
      <div class="step-indicator-item ${enrol.status === 'Active' ? 'completed' : ''}">6. Active</div>
    </div>
  `;

  // Exception alerts
  let alarmHtml = "";
  if (enrol.supersededVersionFlag) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px;">
        <h4>⚠️ Course Version No Longer Current</h4>
        <p>The requested version <strong>v2.0</strong> has been superseded. Current approved version: <strong>v2.1 (Published)</strong>. We recommend upgrading the learner's syllabus layout.</p>
        <button class="btn btn-secondary" onclick="overrideEnrolmentCourseVersion('${termId}')" style="margin-top:8px; height:28px; font-size:11.5px; font-weight:700; background-color:#fff3cd; color:#856404; border-color:#ffeeba;">Use Approved Current Version (v2.1)</button>
      </div>
    `;
  }
  if (enrol.duplicateEnrolmentFlag && !enrol.repeatStudyOverride) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px; background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left-color:#f0d97a;">
        <h4 style="color:#b06000;">⚠️ Active Enrolment Already Exists</h4>
        <p style="color:#b06000;">Ali Khan already holds an active Spoken English enrolment (<strong>ENR-009</strong>). Creating duplicate active enrolments may cause scheduling overlaps.</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn btn-secondary" onclick="showToastAlert('Opening ENR-009')" style="height:28px; font-size:11px; font-weight:700;">View Existing Enrolment</button>
          <button class="btn btn-secondary" onclick="overrideRepeatEnrolmentModal('${termId}')" style="height:28px; font-size:11px; font-weight:700; color:#b06000;">Create Separate Repeat Enrolment</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#staff/enrolments'" style="height:28px; font-size:11px; font-weight:700;">Cancel New Setup</button>
        </div>
      </div>
    `;
  }
  if (enrol.scheduleConflict) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px; background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left-color:#f0d97a;">
        <h4 style="color:#b06000;">⚠️ Schedule Conflict Detected</h4>
        <p style="color:#b06000;">Ayesha Rahman has a calendar conflict on Thursdays at 7:00 PM (currently assigned to OCC-TRIAL-999). Please select a different class schedule or reassign trainer.</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn btn-secondary" onclick="resolveEnrolScheduleConflict('${termId}', 'time')" style="height:28px; font-size:11px; font-weight:700;">Choose Another Time</button>
          <button class="btn btn-secondary" onclick="resolveEnrolScheduleConflict('${termId}', 'trainer')" style="height:28px; font-size:11px; font-weight:700; color:#b06000;">Choose Another Trainer</button>
        </div>
      </div>
    `;
  }

  // Left Column Sections Form
  const formHtml = `
    <!-- 1. Course Assignment -->
    <div class="form-card">
      <h3 class="form-section-title">Course Assignment & Versioning</h3>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Course Version</label>
          <select class="form-input" onchange="toggleEnrolmentCourseVersion('${termId}', this.value)" ${enrol.status === 'Active' ? 'disabled' : ''}>
            <option value="v2.1" ${enrol.courseVersion === 'v2.1' ? 'selected' : ''}>v2.1 (Published - Current)</option>
            <option value="v2.0" ${enrol.courseVersion === 'v2.0' ? 'selected' : ''}>v2.0 (Superseded)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Delivery Model</label>
          <input type="text" class="form-input" value="${enrol.deliveryModel} Online" disabled>
        </div>
      </div>
      <div style="margin-top:10px; font-size:12px; color:var(--color-tertiary);">
        * Operations should select from valid approved/current versions. Duplicate check trigger overrides can be simulated below.
      </div>
      <div style="margin-top:12px; display:flex; gap:12px;">
        <button class="btn btn-secondary" onclick="simulateEnrolmentDuplicateFlag('${termId}')" style="height:32px; font-size:11.5px;">Trigger Duplicate Check Alert</button>
        <button class="btn btn-secondary" onclick="simulateEnrolmentVersionSuperseded('${termId}')" style="height:32px; font-size:11.5px;">Trigger Superseded Alert</button>
      </div>
    </div>

    <!-- 2. Membership Allocation -->
    <div class="form-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h3 class="form-section-title" style="margin-bottom:0;">Membership & Access Allocation</h3>
        <span class="badge-status ${allocatedOk ? 'status-ready' : 'status-submitted'}" style="font-size:10px;">${enrol.allocationStatus}</span>
      </div>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; font-size:12.5px; display:flex; flex-direction:column; gap:4px; margin-bottom:16px;">
        <div>Commercial Ref: <strong>${termId}</strong></div>
        <div>Payment Allocation: <strong>PAY-ALLOC-001</strong> &middot; Confirmed</div>
        <div>Access Grant Reference: <strong>ACCESS-001</strong></div>
      </div>

      ${!allocatedOk ? `
        <div style="display:flex; justify-content:flex-end;">
          <button class="btn btn-primary" onclick="allocateEnrolmentMembership('${termId}')" style="height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">
            Allocate Membership
          </button>
        </div>
      ` : `
        <div style="font-size:13px; font-weight:700; color:#137333; display:flex; align-items:center; gap:6px;">
          ✓ Membership allocation linked successfully to Academic Enrolment ENR-001.
        </div>
      `}
    </div>

    <!-- 3. Entitlement Balance -->
    <div class="form-card">
      <h3 class="form-section-title">Class Entitlement Balance</h3>
      <table style="width:100%; font-size:13px; border-collapse:collapse;">
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Included Classes:</td><td style="padding:6px 0; font-weight:700; text-align:right;">12 Live Classes</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Used Balance:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-tertiary);">0</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Remaining Balance:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">12</td></tr>
        <tr><td style="padding:6px 0; color:var(--color-tertiary);">Entitlement Status:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">Ready (Opening Balance Created)</td></tr>
      </table>
      <div style="margin-top:10px; font-size:11.5px; color:var(--color-tertiary); font-style:italic;">
        * Class credits remain intact during setup. Deductions will be triggered by class delivery approval records.
      </div>
    </div>

    <!-- 4. Live Delivery Setup: Trainer & Schedule -->
    ${isLive ? `
      <div class="form-card">
        <h3 class="form-section-title">Live Delivery Setup</h3>
        
        <div class="form-group" style="margin-bottom:16px;">
          <label class="form-label" style="font-weight:700;">Assign Primary Trainer</label>
          <select class="form-input" style="height:38px;" onchange="assignEnrolmentTrainer('${termId}', this.value)" ${enrol.status === 'Active' ? 'disabled' : ''}>
            <option value="">-- Choose Trainer --</option>
            <option value="Ayesha Rahman" ${enrol.assignedTrainer === 'Ayesha Rahman' ? 'selected' : ''}>Ayesha Rahman (Spoken English &middot; Available)</option>
            <option value="Hamza Siddiqui" ${enrol.assignedTrainer === 'Hamza Siddiqui' ? 'selected' : ''}>Hamza Siddiqui (Spoken English &middot; Available)</option>
            <option value="Sana Malik" ${enrol.assignedTrainer === 'Sana Malik' ? 'selected' : ''}>Sana Malik (Spoken English &middot; Limited)</option>
          </select>
          <div style="margin-top:4px; font-size:11.5px; color:var(--color-tertiary);">
            * Note: Ali Khan preferred Ayesha Rahman during the trial classroom.
          </div>
        </div>

        <h4 style="font-size:13.5px; font-weight:700; margin-bottom:10px; color:var(--color-on-tertiary-fixed);">Schedule Plan (Recurring Plan)</h4>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Preferred Days</label>
            <div style="display:flex; gap:12px; align-items:center; margin-top:8px;">
              <label style="font-size:12.5px;"><input type="checkbox" value="Tuesday" ${enrol.scheduleDays.includes('Tuesday') ? 'checked' : ''} onchange="toggleEnrolmentScheduleDay('${termId}', 'Tuesday')"> Tue</label>
              <label style="font-size:12.5px;"><input type="checkbox" value="Thursday" ${enrol.scheduleDays.includes('Thursday') ? 'checked' : ''} onchange="toggleEnrolmentScheduleDay('${termId}', 'Thursday')"> Thu</label>
              <label style="font-size:12.5px;"><input type="checkbox" value="Saturday" ${enrol.scheduleDays.includes('Saturday') ? 'checked' : ''} onchange="toggleEnrolmentScheduleDay('${termId}', 'Saturday')"> Sat</label>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Recurring Time</label>
            <input type="text" class="form-input" value="${enrol.scheduleTime}" placeholder="e.g. 07:00 PM" oninput="updateEnrolmentScheduleTime('${termId}', this.value)" ${enrol.status === 'Active' ? 'disabled' : ''}>
          </div>
        </div>

        <div style="margin-top:14px; display:flex; gap:12px;">
          <button class="btn btn-secondary" onclick="simulateEnrolmentScheduleConflict('${termId}')" style="height:32px; font-size:11.5px;">Trigger Schedule Conflict Alert</button>
        </div>
      </div>
    ` : ''}

    <!-- 5. Self-Paced Setup Variant -->
    ${isSelfPaced ? `
      <div class="form-card" style="border-top:3px solid var(--color-secondary);">
        <h3 class="form-section-title">Self-Paced Delivery Setup</h3>
        <div class="alert-box alert-warning" style="font-size:12.5px; line-height:18px; margin-bottom:0;">
          <strong>Self-Paced Syllabus:</strong> This course does not require recurring trainer assignments or live schedules. Content release is set to <strong>Immediate Access</strong> upon activation.
        </div>
      </div>
    ` : ''}

    <!-- 6. K-12 Setup Variant -->
    ${isK12 ? `
      <div class="form-card" style="border-top:3px solid #6b21a8;">
        <h3 class="form-section-title">K-12 Schooling Delivery Setup</h3>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Academic Section / Cohort</label>
            <select class="form-input">
              <option value="Section A">Section A (Aug Run &middot; 8/10 students)</option>
              <option value="Section B">Section B (Aug Run &middot; Full)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Assigned Subject Teacher</label>
            <input type="text" class="form-input" value="Sana Malik" disabled>
          </div>
        </div>
        <div style="margin-top:10px; font-size:12px; color:var(--color-tertiary);">
          * School sections and guardian profiles (Ahmed Noor) are linked to K-12 academic records.
        </div>
      </div>
    ` : ''}
  `;

  // Right Column Summary Panel
  const rightHtml = `
    <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
      
      <!-- Approved Commercial Snapshot -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Approved Order</h3>
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:10px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Payer:</td><td style="padding:5px 0; font-weight:700; text-align:right;">${enrol.learnerName}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Course Request:</td><td style="padding:5px 0; font-weight:700; text-align:right;">${enrol.course}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Payment Status:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:#137333;">Confirmed</td></tr>
          <tr><td style="padding:5px 0; color:var(--color-tertiary);">Locked Rate:</td><td style="padding:5px 0; font-weight:700; text-align:right;">PKR 15,000</td></tr>
        </table>
      </div>

      <!-- Acquisition details -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Acquisition Attribution</h3>
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:10px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Trial Ref:</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace;">TRIAL-001</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">CSR Owner:</td><td style="padding:5px 0; font-weight:700; text-align:right;">Sarah Ahmed</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">CSR Commission:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:var(--color-secondary);">Pending Verification</td></tr>
          <tr><td style="padding:5px 0; color:var(--color-tertiary);">Attribution Status:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:var(--color-tertiary);">Eligible for Eval</td></tr>
        </table>
      </div>

      <!-- Activation Checklist -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Activation Checklist</h3>
        <div class="review-checklist" style="font-size:12.5px;">
          <div class="review-check-row">
            <span class="review-check-label">Payment Confirmed</span>
            <span class="review-check-status review-status-good">✓</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Membership Allocated</span>
            <span class="review-check-status ${allocatedOk ? 'review-status-good' : 'review-status-error'}">${allocatedOk ? '✓' : 'Pending'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Course Version Selected</span>
            <span class="review-check-status ${versionOk ? 'review-status-good' : 'review-status-error'}">${versionOk ? '✓' : 'Pending'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Trainer Assigned</span>
            <span class="review-check-status ${trainerOk ? 'review-status-good' : 'review-status-error'}">${trainerOk ? '✓' : 'Required'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Schedule Plan Confirmed</span>
            <span class="review-check-status ${scheduleOk ? 'review-status-good' : 'review-status-error'}">${scheduleOk ? '✓' : 'Required'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Duplicate Check Clear</span>
            <span class="review-check-status ${noDuplicates ? 'review-status-good' : 'review-status-error'}">${noDuplicates ? '✓' : 'Flagged'}</span>
          </div>
        </div>

        <!-- Action trigger -->
        <div style="margin-top:16px;">
          ${enrol.status === 'Active' ? `
            <div style="background-color:rgba(19, 115, 51, 0.05); border:1.5px solid #137333; border-radius:6px; padding:10px; font-size:12.5px; text-align:center; font-weight:700; color:#137333;">
              Enrolment Active & Opened
            </div>
          ` : `
            <button class="btn btn-primary" onclick="activateEnrolmentSetupModal('${termId}')" style="width:100%; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;" ${!canActivate ? 'disabled' : ''}>
              Activate Enrolment
            </button>
          `}
        </div>
      </div>

      <!-- Internal timeline -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Setup Timeline</h3>
        <ul class="timeline-evidence" style="font-size:11.5px; margin-bottom:0;">
          ${enrol.history.map(h => `
            <li class="timeline-evidence-item">
              <span style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-right:4px;">${h.time}</span>
              <span>${h.text}</span>
            </li>
          `).join("")}
        </ul>
      </div>

    </div>
  `;

  view.innerHTML = `
    <!-- Top breadcrumbs -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center;">
      <a href="#staff/enrolments" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Enrolments Queue
      </a>
      <span style="font-size:12px; color:var(--color-tertiary);">Operations Staff: <strong>Sarah Ahmed</strong></span>
    </div>

    <!-- Header info -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Set Up Enrolment</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          Learner: <strong>${enrol.learnerName}</strong> &middot; Course: <strong>${enrol.course}</strong> &middot; Membership: <strong>${termId}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-submitted" style="font-size:10.5px; ${enrol.status === 'Active' ? 'background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;' : ''}">${enrol.status}</span>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:4px;">Issue: <strong style="color:#b06000;">${enrol.setupIssue}</strong></div>
      </div>
    </div>

    ${stepsHtml}

    <!-- Double Columns split layout -->
    <div class="checkout-grid">
      <!-- Left Column: Forms -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        ${alarmHtml}
        ${formHtml}
      </div>

      <!-- Right Column: Checklists & Snapshots -->
      <div>
        ${rightHtml}
      </div>
    </div>
  `;
};

// 1. Version override simulator
window.toggleEnrolmentCourseVersion = function(termId, val) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.courseVersion = val;
  enrol.supersededVersionFlag = (val === "v2.0");
  renderStaffEnrolmentDetail(termId);
};

window.overrideEnrolmentCourseVersion = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.courseVersion = "v2.1";
  enrol.supersededVersionFlag = false;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  enrol.history.push({
    time: `14 Aug · ${timeStr}`,
    text: "Upgraded requested version to current published v2.1"
  });

  renderStaffEnrolmentDetail(termId);
  showToastAlert("Upgraded syllabus layouts to v2.1.");
};

// 2. Allocate membership
window.allocateEnrolmentMembership = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.allocationStatus = "Allocated";

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  enrol.history.push({
    time: `14 Aug · ${timeStr}`,
    text: "Membership allocation linked to academic enrolment record."
  });

  renderStaffEnrolmentDetail(termId);
  showToastAlert("Membership allocated to ENR-001.");
};

// 3. Assign trainer
window.assignEnrolmentTrainer = function(termId, val) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.assignedTrainer = val;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  if (val) {
    enrol.history.push({
      time: `14 Aug · ${timeStr}`,
      text: `Trainer ${val} assigned as primary course delivery lead.`
    });
  }

  renderStaffEnrolmentDetail(termId);
};

// 4. Schedule plan fields
window.toggleEnrolmentScheduleDay = function(termId, val) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  const idx = enrol.scheduleDays.indexOf(val);
  if (idx > -1) {
    enrol.scheduleDays.splice(idx, 1);
  } else {
    enrol.scheduleDays.push(val);
  }
  renderStaffEnrolmentDetail(termId);
};

window.updateEnrolmentScheduleTime = function(termId, val) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.scheduleTime = val;
};

// 5. Simulators for exceptions
window.simulateEnrolmentDuplicateFlag = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.duplicateEnrolmentFlag = true;
  renderStaffEnrolmentDetail(termId);
  showToastAlert("Duplicate active enrolment alert triggered.");
};

window.simulateEnrolmentVersionSuperseded = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.supersededVersionFlag = true;
  enrol.courseVersion = "v2.0";
  renderStaffEnrolmentDetail(termId);
  showToastAlert("Superseded version alert triggered.");
};

window.simulateEnrolmentScheduleConflict = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.scheduleConflict = true;
  renderStaffEnrolmentDetail(termId);
  showToastAlert("Schedule conflict alert triggered.");
};

window.resolveEnrolScheduleConflict = function(termId, resolveMethod) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.scheduleConflict = false;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  if (resolveMethod === "time") {
    enrol.scheduleTime = "08:00 PM";
    enrol.history.push({
      time: `14 Aug · ${timeStr}`,
      text: "Schedule conflict resolved by shifting time slot to 08:00 PM PKT"
    });
  } else {
    enrol.assignedTrainer = "Hamza Siddiqui";
    enrol.history.push({
      time: `14 Aug · ${timeStr}`,
      text: "Schedule conflict resolved by reassigning trainer to Hamza Siddiqui"
    });
  }

  renderStaffEnrolmentDetail(termId);
  showToastAlert("Conflict resolved successfully.");
};

window.overrideRepeatEnrolmentModal = function(termId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Confirming will bypass duplicate active enrolment rules. An override reason is required.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Override Reason <span style="color:red;">*</span></label>
        <textarea id="repeat-enrol-override-reason" class="form-input" style="height:80px;" placeholder="e.g. Learner purchased a new term to repeat the programme with a new course run..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmRepeatEnrolmentOverride('${termId}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Override</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Create Separate Repeat Enrolment?", content);
};

window.confirmRepeatEnrolmentOverride = function(termId) {
  const notes = document.getElementById("repeat-enrol-override-reason").value.trim();
  if (!notes) {
    showToastAlert("An override reason is required.");
    document.getElementById("repeat-enrol-override-reason").focus();
    return;
  }

  closeModal();
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);
  enrol.repeatStudyOverride = true;
  enrol.repeatStudyReason = notes;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  enrol.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Duplicate check bypassed. Reason: "${notes}"`
  });

  renderStaffEnrolmentDetail(termId);
  showToastAlert("Duplicate check bypassed successfully.");
};

// 6. Activation modals
window.activateEnrolmentSetupModal = function(termId) {
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:13px; margin-bottom:16px;">Activating this enrolment will unlock student portals and display course modules in their catalog dashboard.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Student Name:</strong> ${enrol.learnerName}</div>
        <div><strong>Course:</strong> ${enrol.course} (${enrol.courseVersion})</div>
        <div><strong>Primary Trainer:</strong> ${enrol.assignedTrainer}</div>
        <div><strong>Class Schedule:</strong> ${enrol.scheduleDays.join(" & ")} &middot; ${enrol.scheduleTime}</div>
        <div><strong>Total Classes:</strong> 12 Live Classes</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmEnrolmentActivation('${termId}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Activation</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Activate Enrolment?", content);
};

window.confirmEnrolmentActivation = function(termId) {
  closeModal();
  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);

  // Set active states
  enrol.status = "Active";
  enrol.setupIssue = "None";

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  enrol.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Enrolment activated by Sarah Ahmed.`
  });

  // Reconcile and push to active list
  // Add Spoken English to active learner portal courses list
  const activeCourse = {
    title: enrol.course,
    instructor: enrol.assignedTrainer,
    schedule: `${enrol.scheduleDays.join(" & ")} · ${enrol.scheduleTime}`,
    credits: "0 of 12 classes used",
    remaining: 12,
    tag: "Active",
    badgeClass: "status-ready"
  };

  // Pre-seed mock active courses inside state
  if (!state.activeEnrolledCourses) {
    state.activeEnrolledCourses = [];
  }
  // Check duplicate
  const match = state.activeEnrolledCourses.find(c => c.title === enrol.course);
  if (!match) {
    state.activeEnrolledCourses.push(activeCourse);
  }

  renderEnrolmentActivationSuccess(termId);
};

function renderEnrolmentActivationSuccess(termId) {
  const view = document.getElementById("staff-enrolment-detail-view");
  if (!view) return;

  const enrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === termId);

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Enrolment Activated</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">Academic course access is now live. Learner may access resources from their portal.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Academic Ref</td><td class="receipt-value" style="font-family:monospace;">ENR-001</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Academic Status</td><td class="receipt-value" style="color:#137333; font-weight:800;">Active</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Enrolled Student</td><td class="receipt-value">${enrol.learnerName}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Assigned Teacher</td><td class="receipt-value">${enrol.assignedTrainer}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Schedules Plan</td><td class="receipt-value">${enrol.scheduleDays.join(" & ")} &middot; ${enrol.scheduleTime}</td></tr>
        <tr><td class="receipt-label">Access Entitlement</td><td class="receipt-value">12 Classes Remaining</td></tr>
      </table>

      <div style="display:flex; gap:12px; max-width:440px; margin:0 auto;">
        <button class="btn btn-primary" onclick="window.location.hash='#staff/enrolments/ENR-001/classes/schedule'" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Schedule Live Classes</button>
        <button class="btn btn-secondary" onclick="viewLearnerEnrolledDashboard()" style="flex:1; height:42px; font-weight:700;">View Learner Course</button>
      </div>
    </div>
  `;
}

// 7. Render learner side dash update Consequence
window.viewLearnerEnrolledDashboard = function() {
  window.location.hash = "#learner/my-courses";
};

window.renderLearnerMyCoursesDashboard = function() {
  const view = document.getElementById("learner-mycourses-view");
  if (!view) return;

  // Ensure state.activeEnrolledCourses has at least some default mock course (e.g. Practical AI self-paced)
  if (!state.activeEnrolledCourses) {
    state.activeEnrolledCourses = [
      {
        title: "Practical AI & Prompt Engineering",
        instructor: "Sana Malik",
        schedule: "Self-Paced (Immediate Access)",
        credits: "35% complete",
        remaining: "N/A",
        tag: "Active",
        badgeClass: "status-ready"
      }
    ];
  }

  const coursesHtml = state.activeEnrolledCourses.map(c => `
    <div class="form-card animate-fade-in" style="margin-bottom:16px; padding:20px; display:flex; justify-content:space-between; align-items:center; border:1px solid var(--color-outline-variant); border-left:4px solid var(--color-secondary);">
      <div>
        <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">${c.title}</h3>
        <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Instructor / Lead: <strong>${c.instructor}</strong></p>
        <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Weekly Schedule: <strong>${c.schedule}</strong></p>
        ${c.nextClass ? `<p style="margin:4px 0; font-size:13px; color:#137333; font-weight:700;">Next Class: <strong>${c.nextClass}</strong></p>` : ''}
        <div style="margin-top:10px; display:flex; gap:12px; font-size:12.5px;">
          <span>Usage: <strong>${c.credits}</strong></span>
          ${c.remaining !== 'N/A' ? `<span>Remaining Entitlement: <strong>${c.remaining} classes</strong></span>` : ''}
        </div>
      </div>
      <div style="text-align:right; display:flex; flex-direction:column; gap:8px;">
        <span class="badge-status ${c.badgeClass}" style="font-size:10.5px; width:fit-content; align-self:flex-end;">${c.tag}</span>
        <button class="btn btn-secondary" onclick="window.location.hash='#learner/courses/' + ('${c.title}'.includes('Spoken') ? 'ENR-001' : 'ENR-002')" style="height:32px; font-size:12px; font-weight:700;">Open Course</button>
      </div>
    </div>
  `).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">My Enrolled Courses</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">View and open access modules for your active academic enrolments.</p>
    </div>

    <div style="max-width:800px;">
      ${coursesHtml}
    </div>
  `;
};


// ==========================================================================
// Screen 14 - Regular Live Class Scheduling & Recurring Occurrence Setup
// ==========================================================================

// Pre-seed mock class databases
state.classSeries = [];
state.classOccurrences = []; // Contains generated CLASS-XYZ records

// Temporary preview occurrences used before saving/publishing
state.previewOccurrences = [];
state.schedulingState = {
  enrolmentId: "",
  trainerConflictId: "", // ID of occurrence with trainer conflict
  learnerConflictId: "",
  insufficientCredits: false,
  conflictBypassed: false,
  conflictBypassReason: "",
  isGroup: false,
  groupCapacity: 8,
  groupMax: 10,
  oneTimeMode: false,
  seriesGenerated: false
};

// Queue list of active live enrolments requiring scheduling & generated classes
window.renderStaffLiveClassesQueue = function() {
  const view = document.getElementById("staff-scheduling-live-view");
  if (!view) return;

  // Sync with Screen 13: check if Ali Khan's enrolment (MEM-TERM-001 or ENR-001) is active
  const aliEnrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === "MEM-TERM-001");
  const showAli = aliEnrol && aliEnrol.status === "Active" && !state.schedulingState.seriesGenerated;

  // Filter list of pending live enrolments
  const pendingScheduling = [];
  if (showAli) {
    pendingScheduling.push({
      id: "ENR-001",
      learner: "Ali Khan",
      course: "Spoken English",
      trainer: "Ayesha Rahman",
      schedule: "Tue & Thu · 7:00 PM",
      credits: "12 Classes",
      termId: "MEM-TERM-001"
    });
  }
  
  // Ayesha Malik is another mock live enrolment pending setup
  const ayeshaEnrol = state.enrolmentSetupQueue.find(e => e.membershipTermId === "MEM-TERM-002");
  if (ayeshaEnrol && ayeshaEnrol.assignedTrainer && !state.classOccurrences.some(o => o.learner === "Ayesha Malik")) {
    pendingScheduling.push({
      id: "ENR-002",
      learner: "Ayesha Malik",
      course: "IELTS Preparation",
      trainer: ayeshaEnrol.assignedTrainer,
      schedule: "Mon & Wed · 6:00 PM",
      credits: "12 Classes",
      termId: "MEM-TERM-002"
    });
  }

  // Count summaries
  const pendingCount = pendingScheduling.length;
  const activeCount = state.classOccurrences.filter(o => o.status === "Scheduled" || o.status === "Room Provisioned").length;
  const completedCount = state.classOccurrences.filter(o => o.status === "Completed").length;

  // Pending table rows
  const pendingRows = pendingScheduling.map(p => `
    <tr>
      <td style="padding:12px; font-weight:700; color:var(--color-on-tertiary-fixed);">${p.learner}</td>
      <td style="padding:12px; font-size:13px;">${p.course}</td>
      <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${p.trainer}</td>
      <td style="padding:12px; font-size:12.5px; font-family:monospace;">${p.schedule}</td>
      <td style="padding:12px; font-size:12px; font-weight:600; color:#b06000;">Ready to Schedule</td>
      <td style="padding:12px; text-align:center;">
        <a href="#staff/enrolments/${p.id}/classes/schedule" class="btn btn-primary" style="padding:4px 8px; font-size:11.5px; height:28px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Schedule Series</a>
      </td>
    </tr>
  `).join("");

  // Upcoming occurrences rows
  const upcomingRows = state.classOccurrences.map(o => {
    let statClass = "status-ready";
    if (o.status === "Room Provisioned") statClass = "status-ready";
    else if (o.status === "Cancelled") statClass = "status-submitted";

    return `
      <tr>
        <td style="padding:12px; font-family:monospace; font-size:12px; font-weight:700;">${o.id}</td>
        <td style="padding:12px; font-size:12.5px;">${o.date}</td>
        <td style="padding:12px; font-size:12.5px; color:var(--color-tertiary);">${o.time}</td>
        <td style="padding:12px; font-weight:700;">${o.learner}</td>
        <td style="padding:12px; font-size:13px;">${o.trainer}</td>
        <td style="padding:12px;"><span class="badge-status ${statClass}" style="${o.status === 'Cancelled' ? 'background-color:#fce8e6; color:#a50e0e; border-color:#fad2cf;' : ''}">${o.status}</span></td>
        <td style="padding:12px;"><span class="badge-status status-ready" style="font-size:10px; background-color:${o.meeting.status === 'Ready' ? '#e6f4ea; color:#137333;' : '#fef7e0; color:#b06000;'}">${o.meeting.status}</span></td>
        <td style="padding:12px; text-align:center;">
          <button class="btn btn-secondary" onclick="openClassDetailDrawer('${o.id}')" style="padding:4px 8px; font-size:11.5px; height:28px;">View Detail</button>
        </td>
      </tr>
    `;
  }).join("");

  view.innerHTML = `
    <div style="margin-bottom:var(--spacing-lg);">
      <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Live Class Scheduling</h1>
      <p style="font-size:14.5px; color:var(--color-tertiary);">Generate and manage recurring or one-time live online classroom sessions.</p>
    </div>

    <!-- Metrics Cards -->
    <div class="review-summary-grid" style="margin-bottom:24px;">
      <div class="review-summary-card">
        <span class="review-summary-number">${pendingCount}</span>
        <span class="review-summary-label">Awaiting Scheduling</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid var(--color-secondary);">
        <span class="review-summary-number" style="color:var(--color-secondary);">${activeCount}</span>
        <span class="review-summary-label">Scheduled Classes</span>
      </div>
      <div class="review-summary-card" style="border-left: 3px solid #137333;">
        <span class="review-summary-number" style="color:#137333;">${completedCount}</span>
        <span class="review-summary-label">Delivered Classes</span>
      </div>
    </div>

    <!-- Active Enrolments Requiring Scheduling -->
    <div style="margin-bottom:32px;">
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; color:var(--color-on-tertiary-fixed);">Enrolments Waiting for Schedule</h3>
      <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
        <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
          <thead>
            <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Course</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Assigned Trainer</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Target Plan</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Status</th>
              <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingRows || `<tr><td colspan="6" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No active enrolments awaiting live class setups.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Generated Occurrences Calendar Table -->
    <div>
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; color:var(--color-on-tertiary-fixed);">Upcoming Scheduled Classes</h3>
      <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; box-shadow:var(--shadow-sm);">
        <table class="leads-table" style="width:100%; border-collapse:collapse; text-align:left;">
          <thead>
            <tr style="background-color:var(--color-surface-low); border-bottom:1.5px solid var(--color-outline-variant);">
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Class ID</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Date</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Time Slot</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Learner</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Trainer</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Class Status</th>
              <th style="padding:12px; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Room</th>
              <th style="padding:12px; text-align:center; font-size:11.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary);">Action</th>
            </tr>
          </thead>
          <tbody>
            ${upcomingRows || `<tr><td colspan="8" style="padding:24px; text-align:center; color:var(--color-tertiary); font-style:italic;">No live occurrences scheduled yet. Generate a series above.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
};

// Detailed Scheduling Workspace
window.renderStaffLiveSchedulingPage = function(enrolmentId) {
  const view = document.getElementById("staff-scheduling-live-view");
  if (!view) return;

  state.schedulingState.enrolmentId = enrolmentId;

  // Read-only parameters context
  const learner = "Ali Khan";
  const course = "Spoken English";
  const trainer = "Ayesha Rahman";
  const membershipId = "MEM-TERM-001";
  
  // Compact read-only details card HTML
  const contextCardHtml = `
    <div class="form-card" style="padding:16px; margin-bottom:20px; border-left:4px solid var(--color-secondary);">
      <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Enrolment Context (Active)</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:12px; font-size:12.5px;">
        <div>Learner: <strong>${learner} (LEARNER-001)</strong></div>
        <div>Course: <strong>${course} (v2.1)</strong></div>
        <div>Assigned Trainer: <strong>${trainer}</strong></div>
        <div>Membership ID: <strong>${membershipId}</strong></div>
        <div>Entitlement remaining: <strong style="color:#137333;">12 Classes</strong></div>
        <div>Used balance: <strong>0</strong></div>
      </div>
    </div>
  `;

  // Exception alarms logic
  let alarmHtml = "";
  if (state.schedulingState.trainerConflictId) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px;">
        <h4>⚠️ Trainer Schedule Conflict</h4>
        <p>Ayesha Rahman is already assigned to a Trial Live class (OCC-TRIAL-999) from 7:00 PM – 7:45 PM on this Thursday date. Overlapping commitments are blocked.</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn btn-secondary" onclick="resolveStaffTrainerConflict('time')" style="height:28px; font-size:11px; font-weight:700;">Shift Class Time to 8:00 PM</button>
          <button class="btn btn-secondary" onclick="resolveStaffTrainerConflict('trainer')" style="height:28px; font-size:11px; font-weight:700;">Reassign to Hamza Siddiqui</button>
          <button class="btn btn-secondary" onclick="openTrainerBypassModal()" style="height:28px; font-size:11px; font-weight:700; color:#ba1a1a;">Override & Force Save</button>
        </div>
      </div>
    `;
  }
  if (state.schedulingState.learnerConflictId) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px; background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left-color:#f0d97a;">
        <h4 style="color:#b06000;">⚠️ Learner Conflict</h4>
        <p style="color:#b06000;">Ali Khan has another conflicting workshop scheduled on this date. We recommend shifting this occurrence.</p>
        <button class="btn btn-secondary" onclick="excludeOccurrenceByDate('${state.schedulingState.learnerConflictId}')" style="margin-top:8px; height:28px; font-size:11.5px; font-weight:700; background-color:#fff3cd; color:#856404; border-color:#ffeeba;">Exclude This Date</button>
      </div>
    `;
  }
  if (state.schedulingState.insufficientCredits) {
    alarmHtml += `
      <div class="alarm-box animate-fade-in" style="margin-bottom:16px; background:#fce8e6; border-color:#fad2cf; color:#a50e0e; border-left-color:#a50e0e;">
        <h4 style="color:#a50e0e;">⚠️ Insufficient Entitlement</h4>
        <p style="color:#a50e0e;">The learner's membership term holds only <strong>8 available credits</strong>. Generating 12 classes exceeds active credits.</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn btn-secondary" onclick="adjustOccurrenceCountLimit(8)" style="height:28px; font-size:11px; font-weight:700; color:#a50e0e; border-color:#fad2cf; background:#fff;">Schedule Only 8 Available Classes</button>
          <button class="btn btn-secondary" onclick="window.location.hash='#staff/enrolments'" style="height:28px; font-size:11px; font-weight:700;">Back to Enrolments</button>
        </div>
      </div>
    `;
  }

  // Double Column forms
  const formHtml = `
    <!-- Schedule From Options Selector -->
    <div class="form-card">
      <h3 class="form-section-title">Schedule Source</h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:12px;">
        <label style="font-size:13.5px; font-weight:700; display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input type="radio" name="sched-src" value="plan" ${!state.schedulingState.oneTimeMode ? 'checked' : ''} onchange="toggleSchedulingMode(false)">
          Use Existing Schedule Plan (SCHED-PLAN-001) <span class="badge-status status-ready" style="font-size:10px; margin-left:4px;">Recommended</span>
        </label>
        <label style="font-size:13.5px; font-weight:700; display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input type="radio" name="sched-src" value="onetime" ${state.schedulingState.oneTimeMode ? 'checked' : ''} onchange="toggleSchedulingMode(true)">
          One-Time Class (Manual Setup)
        </label>
        <label style="font-size:13.5px; font-weight:700; opacity:0.6; display:flex; align-items:center; gap:8px; cursor:not-allowed;" onclick="showToastAlert('Custom recurring rules are locked for this membership plan.')">
          <input type="radio" name="sched-src" value="custom" disabled>
          Custom Recurring Schedule
        </label>
      </div>
    </div>

    <!-- Active Schedule Plan Settings Details -->
    <div class="form-card">
      <h3 class="form-section-title">${state.schedulingState.oneTimeMode ? 'One-Time Class Configuration' : 'SCHED-PLAN-001 Details'}</h3>
      
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Planned Classes</label>
          <input type="number" id="sched-plan-count" class="form-input" value="${state.schedulingState.oneTimeMode ? 1 : 12}" ${state.schedulingState.oneTimeMode ? 'disabled' : ''}>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Duration</label>
          <input type="text" class="form-input" value="45 minutes" disabled>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Weekly Recurrence Pattern</label>
          <input type="text" class="form-input" value="${state.schedulingState.oneTimeMode ? 'N/A - One Time' : 'Tuesday & Thursday'}" disabled>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Planned Start Date</label>
          <input type="text" class="form-input" value="18 Aug 2026" disabled>
        </div>
      </div>

      <!-- Timezone awareness display -->
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:14px;">
        <h4 style="font-size:12.5px; font-weight:700; margin-bottom:6px; color:var(--color-on-tertiary-fixed);">Explicit Timezone Mapping:</h4>
        <table style="width:100%; font-size:12px;">
          <tr><td>Scheduling Timezone:</td><td style="font-weight:700; text-align:right;">Asia/Karachi (GMT+5)</td></tr>
          <tr><td>Learner Local Time:</td><td style="font-weight:700; text-align:right; color:var(--color-secondary);">7:00 PM PKT</td></tr>
          <tr><td>Trainer Local Time (Europe/London):</td><td style="font-weight:700; text-align:right; color:var(--color-secondary);">3:00 PM BST</td></tr>
        </table>
      </div>

      <!-- Simulator control triggers -->
      <div style="margin-top:14px; display:flex; gap:12px; flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="simulateTrainerOverlapConflict()" style="height:32px; font-size:11.5px;">Trigger Trainer Conflict Alert</button>
        <button class="btn btn-secondary" onclick="simulateLearnerOverlapConflict()" style="height:32px; font-size:11.5px;">Trigger Learner Conflict Alert</button>
        <button class="btn btn-secondary" onclick="simulateInsufficientCredits()" style="height:32px; font-size:11.5px;">Trigger Insufficient Entitlement Alert</button>
        <button class="btn btn-secondary" onclick="simulateGroupCapacityExceeded()" style="height:32px; font-size:11.5px;">Trigger Group Capacity Alert</button>
      </div>

      <div style="margin-top:18px; display:flex; justify-content:flex-end;">
        <button class="btn btn-primary" onclick="generateSchedulingPreview()" style="height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">
          Generate Preview
        </button>
      </div>
    </div>
  `;

  // Preview List block
  let previewListHtml = "";
  if (state.previewOccurrences.length > 0) {
    const listRows = state.previewOccurrences.map((o, idx) => {
      let isConflict = false;
      let conflictText = "Clear";
      if (state.schedulingState.trainerConflictId === o.id) {
        isConflict = true;
        conflictText = "⚠️ Trainer Overlap";
      } else if (state.schedulingState.learnerConflictId === o.id) {
        isConflict = true;
        conflictText = "⚠️ Learner Conflict";
      }

      if (state.schedulingState.conflictBypassed && isConflict) {
        conflictText = "Bypassed (Reason logged)";
        isConflict = false;
      }

      return `
        <tr style="${isConflict ? 'background-color:#fffcf0;' : ''}">
          <td style="padding:10px; font-weight:700; font-size:12.5px;">Class ${idx+1}</td>
          <td style="padding:10px; font-size:12.5px;">${o.date}</td>
          <td style="padding:10px; font-size:12.5px; font-family:monospace;">${o.time}</td>
          <td style="padding:10px; font-size:12.5px;">${o.trainer}</td>
          <td style="padding:10px; font-size:12.5px; font-weight:600; color:${isConflict ? '#b06000' : '#137333'};">${conflictText}</td>
          <td style="padding:10px; font-size:11px; text-align:center; display:flex; gap:6px; justify-content:center;">
            <button class="btn btn-secondary" onclick="openEditOccurrenceModal('${o.id}')" style="padding:3px 6px; font-size:11px; height:24px;">Edit</button>
            <button class="btn btn-secondary" onclick="excludeOccurrenceByDate('${o.id}')" style="padding:3px 6px; font-size:11px; height:24px; color:#ba1a1a;">Exclude</button>
          </td>
        </tr>
      `;
    }).join("");

    // Group-ready preview
    let groupCohortHtml = "";
    if (state.schedulingState.isGroup) {
      groupCohortHtml = `
        <div class="alarm-box animate-fade-in" style="background:#f3e8ff; border-color:#c084fc; color:#6b21a8; border-left-color:#6b21a8; margin-bottom:14px;">
          <h4 style="color:#6b21a8;">👥 Group Course: IELTS Evening Group B</h4>
          <p style="color:#6b21a8; font-size:12.5px;">
            Current Cohort Capacity: <strong>${state.schedulingState.groupCapacity} / ${state.schedulingState.groupMax} participants</strong>.
            All 8 registered participants (including Fatima Noor, Hassan Raza) will be attached to each generated occurrence.
          </p>
          ${state.schedulingState.groupCapacity > state.schedulingState.groupMax ? `
            <div style="color:#ba1a1a; font-weight:800; font-size:12px; margin-top:8px;">⚠️ Cohort Capacity Exceeded. Overrides required to generate occurrences.</div>
          ` : ''}
        </div>
      `;
    }

    previewListHtml = `
      <div class="form-card animate-fade-in" style="margin-top:20px;">
        <h3 class="form-section-title">Schedule Preview (${state.previewOccurrences.length} Classes)</h3>
        
        ${groupCohortHtml}

        <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden; margin-bottom:16px;">
          <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
            <thead>
              <tr style="background-color:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
                <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Class</th>
                <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
                <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Time Slot</th>
                <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
                <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Conflict Validation</th>
                <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
              </tr>
            </thead>
            <tbody>
              ${listRows}
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:12px; color:var(--color-tertiary); font-style:italic;">
            * Confirming will generate individual scheduled class items. Entitlement credits remain untouched.
          </div>
          <button class="btn btn-primary" onclick="launchSchedulingExecution()" style="height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;" ${((state.schedulingState.trainerConflictId || state.schedulingState.learnerConflictId) && !state.schedulingState.conflictBypassed) || (state.schedulingState.isGroup && state.schedulingState.groupCapacity > state.schedulingState.groupMax) ? 'disabled' : ''}>
            Create ${state.previewOccurrences.length} Classes
          </button>
        </div>
      </div>
    `;
  }

  // Right Column Checklists & timelines
  const rightHtml = `
    <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
      
      <!-- Eligibility Audits -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Enrolment Verification</h3>
        <div class="review-checklist" style="font-size:12.5px;">
          <div class="review-check-row">
            <span class="review-check-label">Enrolment Active</span>
            <span class="review-check-status review-status-good">✓</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Membership Access Active</span>
            <span class="review-check-status review-status-good">✓</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Trainer Assignment Valid</span>
            <span class="review-check-status review-status-good">✓</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Roster Capacity Check</span>
            <span class="review-check-status ${state.schedulingState.isGroup && state.schedulingState.groupCapacity > state.schedulingState.groupMax ? 'review-status-error' : 'review-status-good'}">${state.schedulingState.isGroup && state.schedulingState.groupCapacity > state.schedulingState.groupMax ? 'Failed' : '✓'}</span>
          </div>
          <div class="review-check-row">
            <span class="review-check-label">Entitlement Credit Match</span>
            <span class="review-check-status ${state.schedulingState.insufficientCredits ? 'review-status-error' : 'review-status-good'}">${state.schedulingState.insufficientCredits ? 'Failed' : '✓'}</span>
          </div>
        </div>
      </div>

      <!-- Schedule summary -->
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Scheduling Summary</h3>
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:10px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Total Planned:</td><td style="padding:5px 0; font-weight:700; text-align:right;">12 Live Sessions</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Opening Usage:</td><td style="padding:5px 0; font-weight:700; text-align:right;">0 Delivered</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Future Scheduled:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${state.previewOccurrences.length} pending</td></tr>
          <tr><td style="padding:5px 0; color:var(--color-tertiary);">Credits Balance:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:#137333;">12 Remaining</td></tr>
        </table>
        <div style="font-size:11px; color:var(--color-tertiary); line-height:16px; margin-top:8px;">
          * Note: Generated classes remain as scheduled records. Entitlements are only debited upon successful delivery verification reviews.
        </div>
      </div>

    </div>
  `;

  view.innerHTML = `
    <!-- Top navigation breadcrumbs -->
    <div style="margin-bottom:var(--spacing-md); display:flex; justify-content:space-between; align-items:center;">
      <a href="#staff/live-classes" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Live Classes List
      </a>
      <span style="font-size:12px; color:var(--color-tertiary);">Operations Lead: <strong>Sarah Ahmed</strong></span>
    </div>

    <!-- Header info -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Schedule Live Classes</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          Learner: <strong>${learner}</strong> &middot; Course: <strong>${course}</strong> &middot; Enrolment: <strong>${enrolmentId}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-ready" style="font-size:10.5px;">Active Enrolment</span>
        <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:4px;">Credits remaining: <strong style="color:#137333;">12 Classes</strong></div>
      </div>
    </div>

    ${contextCardHtml}

    <div class="checkout-grid">
      <!-- Left Column: Forms -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        ${alarmHtml}
        ${formHtml}
      </div>

      <!-- Right Column: Verification Stats -->
      <div>
        ${rightHtml}
      </div>
    </div>

    <!-- Preview List Placement -->
    <div id="sched-preview-list-container">
      ${previewListHtml}
    </div>
  `;
};

// 1. Toggle between schedule plan and manual one-time scheduling
window.toggleSchedulingMode = function(isOneTime) {
  state.schedulingState.oneTimeMode = isOneTime;
  state.previewOccurrences = []; // Clear preview on mode toggle
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
};

// 2. Preview generator mapping dates
window.generateSchedulingPreview = function() {
  const enrolmentId = state.schedulingState.enrolmentId;
  const isOneTime = state.schedulingState.oneTimeMode;

  const countInput = document.getElementById("sched-plan-count");
  const classCount = countInput ? parseInt(countInput.value) : (isOneTime ? 1 : 12);

  // Core dates generation list starting Tuesday, 18 August 2026
  let proposed = [];
  let currentDate = new Date(2026, 7, 18); // 18 Aug 2026

  let count = 0;
  while (count < classCount) {
    if (isOneTime) {
      proposed.push({
        id: `CLASS-PREV-${count+1}`,
        date: "Tuesday, 18 Aug 2026",
        time: "7:00 PM – 7:45 PM",
        trainer: "Ayesha Rahman",
        learner: "Ali Khan"
      });
      count++;
    } else {
      const day = currentDate.getDay(); // 2 = Tuesday, 4 = Thursday
      if (day === 2 || day === 4) {
        const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
        proposed.push({
          id: `CLASS-PREV-${count+1}`,
          date: dateStr,
          time: "7:00 PM – 7:45 PM",
          trainer: "Ayesha Rahman",
          learner: "Ali Khan"
        });
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  state.previewOccurrences = proposed;
  renderStaffLiveSchedulingPage(enrolmentId);
  showToastAlert(`Preview generated for ${classCount} classes.`);
};

// 3. Exception simulators
window.simulateTrainerOverlapConflict = function() {
  if (state.previewOccurrences.length === 0) {
    showToastAlert("Please generate the preview first.");
    return;
  }
  // Find Class 2 (Thursday, 20 Aug or similar) and flag it
  state.schedulingState.trainerConflictId = state.previewOccurrences[1].id;
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Trainer Conflict simulated on Thursday slot.");
};

window.simulateLearnerOverlapConflict = function() {
  if (state.previewOccurrences.length === 0) {
    showToastAlert("Please generate the preview first.");
    return;
  }
  // Flag Class 5 (Tuesday, 1 Sep or similar)
  state.schedulingState.learnerConflictId = state.previewOccurrences[4].id;
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Learner conflict simulated on class slot.");
};

window.simulateInsufficientCredits = function() {
  state.schedulingState.insufficientCredits = true;
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Credits mismatch alert simulated.");
};

window.simulateGroupCapacityExceeded = function() {
  state.schedulingState.isGroup = true;
  state.schedulingState.groupCapacity = 11; // capacity 11 exceeds max 10
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Group capacity alert simulated.");
};

// 4. Resolve conflict actions
window.resolveStaffTrainerConflict = function(method) {
  state.schedulingState.trainerConflictId = "";
  
  if (method === "time") {
    // Change Thursday Class 2's time slot
    state.previewOccurrences[1].time = "8:00 PM – 8:45 PM";
  } else {
    // Reassign trainer
    state.previewOccurrences[1].trainer = "Hamza Siddiqui";
  }

  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Trainer conflict resolved.");
};

window.openTrainerBypassModal = function() {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Confirming will bypass the overlap warnings. Staff attribution audit requires notes.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Override Reason <span style="color:red;">*</span></label>
        <textarea id="trainer-conflict-override-reason" class="form-input" style="height:80px;" placeholder="e.g. Trainer approved makeup schedule session overlap; separate room is allocated..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="confirmTrainerConflictOverride()" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Bypass & Override</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Force Override Conflict?", content);
};

window.confirmTrainerConflictOverride = function() {
  const reason = document.getElementById("trainer-conflict-override-reason").value.trim();
  if (!reason) {
    showToastAlert("An override reason is required.");
    document.getElementById("trainer-conflict-override-reason").focus();
    return;
  }

  closeModal();
  state.schedulingState.conflictBypassed = true;
  state.schedulingState.conflictBypassReason = reason;

  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Conflict bypassed successfully.");
};

window.adjustOccurrenceCountLimit = function(limit) {
  state.schedulingState.insufficientCredits = false;
  // Truncate preview occurrences
  state.previewOccurrences = state.previewOccurrences.slice(0, limit);
  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert(`Class count limited to ${limit} available credits.`);
};

// 5. Exclude date & replace date
window.excludeOccurrenceByDate = function(id) {
  state.previewOccurrences = state.previewOccurrences.filter(o => o.id !== id);
  if (state.schedulingState.trainerConflictId === id) state.schedulingState.trainerConflictId = "";
  if (state.schedulingState.learnerConflictId === id) state.schedulingState.learnerConflictId = "";

  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Occurrence date excluded.");

  // Inject Replacement button helper in preview
  const container = document.getElementById("sched-preview-list-container");
  if (container) {
    const addBtn = document.createElement("div");
    addBtn.style.margin = "12px 0";
    addBtn.innerHTML = `
      <button class="btn btn-secondary" onclick="addReplacementOccurrenceClass()" style="height:32px; font-weight:700; font-size:12px; color:var(--color-secondary);">
        + Add Replacement Class (Saturday Makeup)
      </button>
    `;
    container.insertBefore(addBtn, container.firstChild);
  }
};

window.addReplacementOccurrenceClass = function() {
  state.previewOccurrences.push({
    id: `CLASS-PREV-MAKEUP-${Date.now()}`,
    date: "Saturday, 26 Sep 2026",
    time: "7:00 PM – 7:45 PM",
    trainer: "Ayesha Rahman",
    learner: "Ali Khan"
  });

  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Saturday replacement makeup class added.");
};

// 6. Edit individual occurrence drawer
window.openEditOccurrenceModal = function(id) {
  const occ = state.previewOccurrences.find(o => o.id === id);

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <div class="form-group">
        <label class="form-label" style="font-weight:700;">Date</label>
        <input type="text" id="edit-occ-date" class="form-input" value="${occ.date}">
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Time Slot</label>
          <input type="text" id="edit-occ-time" class="form-input" value="${occ.time}">
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight:700;">Assigned Trainer</label>
          <select id="edit-occ-trainer" class="form-input">
            <option value="Ayesha Rahman" ${occ.trainer === 'Ayesha Rahman' ? 'selected' : ''}>Ayesha Rahman</option>
            <option value="Hamza Siddiqui" ${occ.trainer === 'Hamza Siddiqui' ? 'selected' : ''}>Hamza Siddiqui</option>
          </select>
        </div>
      </div>

      <h4 style="font-size:12.5px; font-weight:700; margin-top:14px; margin-bottom:8px;">Apply Changes To:</h4>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px; margin-bottom:16px;">
        <label style="cursor:pointer;"><input type="radio" name="apply-scope" value="single" checked> This Class Only</label>
        <label style="cursor:pointer; opacity:0.6;"><input type="radio" name="apply-scope" value="following" disabled> This and Following Classes</label>
        <label style="cursor:pointer; opacity:0.6;"><input type="radio" name="apply-scope" value="all" disabled> Entire Future Series</label>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmEditOccurrence('${id}')" style="flex:1; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Save Changes</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Edit Class Schedule Details", content);
};

window.confirmEditOccurrence = function(id) {
  const dateVal = document.getElementById("edit-occ-date").value;
  const timeVal = document.getElementById("edit-occ-time").value;
  const trainerVal = document.getElementById("edit-occ-trainer").value;

  closeModal();
  const occ = state.previewOccurrences.find(o => o.id === id);
  occ.date = dateVal;
  occ.time = timeVal;
  occ.trainer = trainerVal;

  renderStaffLiveSchedulingPage(state.schedulingState.enrolmentId);
  showToastAlert("Occurrence details updated.");
};

// 7. Generation execution (Provisioning)
window.launchSchedulingExecution = function() {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:13px; margin-bottom:16px;">Are you sure you want to generate the recurring occurrences? This will create ${state.previewOccurrences.length} independent class records.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px;">
        <div>Student: <strong>Ali Khan</strong></div>
        <div>Course: <strong>Spoken English</strong></div>
        <div>Total Occurrences: <strong>${state.previewOccurrences.length} Classes</strong></div>
        <div>First Date: <strong>${state.previewOccurrences[0].date}</strong></div>
        <div>Scheduled Credits: <strong>${state.previewOccurrences.length} Scheduled (12 Remaining)</strong></div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="executeSchedulingProvisioning()" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Create Classes</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Create Recurring Classes?", content);
};

window.executeSchedulingProvisioning = function() {
  closeModal();

  // Show loading screen simulation
  const view = document.getElementById("staff-scheduling-live-view");
  if (!view) return;

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:480px; padding:40px; margin:80px auto; text-align:center; border:1px solid var(--color-outline-variant);">
      <div class="payment-upload-spinner" style="margin-bottom:16px;"></div>
      <h3 style="font-family:var(--font-family-headings); font-size:20px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Creating class schedule...</h3>
      <p style="font-size:13.5px; color:var(--color-tertiary); margin-bottom:4px;">Preparing classrooms...</p>
      <p style="font-size:12px; color:var(--color-tertiary); font-style:italic;">Provisioning mock meeting instances & scheduling reminders...</p>
    </div>
  `;

  setTimeout(() => {
    // Generate classOccurrences records
    const generated = state.previewOccurrences.map((o, idx) => {
      const classId = `CLASS-${(idx + 1).toString().padStart(3, '0')}`;
      return {
        id: classId,
        seriesId: "SERIES-001",
        enrolmentId: state.schedulingState.enrolmentId,
        schedulePlanId: "SCHED-PLAN-001",
        learner: o.learner,
        trainer: o.trainer,
        course: "Spoken English",
        type: "Regular",
        format: "1-to-1",
        date: o.date,
        time: o.time,
        startsAt: "2026-08-18T19:00:00+05:00",
        timezone: "Asia/Karachi",
        durationMinutes: 45,
        status: "Scheduled",
        meeting: {
          status: "Ready",
          roomId: `ROOM-${classId}`,
          provider: "Daily"
        },
        reminders: {
          confirmation: "Queued",
          twentyFourHour: "Scheduled",
          oneHour: "Scheduled"
        },
        history: [
          { time: "14 Aug · 1:10 PM", text: `${classId} generated from SCHED-PLAN-001.` },
          { time: "14 Aug · 1:11 PM", text: "Participant records created." },
          { time: "14 Aug · 1:12 PM", text: "Classroom room status provisioned." }
        ]
      };
    });

    state.classOccurrences = generated;
    state.schedulingState.seriesGenerated = true;

    // Consequence 1: Update learner courses array to display next class schedule
    if (!state.activeEnrolledCourses) state.activeEnrolledCourses = [];
    const spokenIndex = state.activeEnrolledCourses.findIndex(c => c.title.includes("Spoken English"));
    if (spokenIndex > -1) {
      state.activeEnrolledCourses[spokenIndex].schedule = "Tue & Thu · 7:00 PM PKT";
      state.activeEnrolledCourses[spokenIndex].instructor = "Ayesha Rahman";
      state.activeEnrolledCourses[spokenIndex].nextClass = "Tuesday, 18 Aug · 7:00 PM PKT";
    }

    renderSchedulingSuccessScreen();
  }, 1200);
};

function renderSchedulingSuccessScreen() {
  const view = document.getElementById("staff-scheduling-live-view");
  if (!view) return;

  const count = state.classOccurrences.length;

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:680px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Recurring Series Created</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">
        Successfully generated <strong>${count} individual occurrences</strong>. Classroom rooms have been provisioned.
      </p>

      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; text-align:left; margin-bottom:24px; font-size:13px;">
        <div style="margin-bottom:8px;">Series Ref: <strong style="font-family:monospace;">SERIES-001</strong></div>
        <div style="margin-bottom:8px;">Total Created: <strong>${count} Addressable Classes (CLASS-001 to CLASS-${count.toString().padStart(3, '0')})</strong></div>
        <div style="margin-bottom:8px;">Active Learner: <strong>Ali Khan</strong></div>
        <div style="margin-bottom:8px;">Primary Trainer: <strong>Ayesha Rahman</strong></div>
        <div style="margin-bottom:8px;">Classroom Room: <strong>Daily.co simulation ready</strong></div>
        <div>Reminders status: <strong style="color:#137333;">Confirmation Queued &middot; 24-Hour Scheduled</strong></div>
      </div>

      <div style="display:flex; gap:12px; max-width:460px; margin:0 auto;">
        <button class="btn btn-primary" onclick="window.location.hash='#staff/live-classes'" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">View Live Class List</button>
        <button class="btn btn-secondary" onclick="viewLearnerEnrolledDashboard()" style="flex:1; height:42px; font-weight:700;">View Learner Course</button>
      </div>
    </div>
  `;
}

// 8. Individual Occurrence Details Drawer
window.openClassDetailDrawer = function(classId) {
  const occ = state.classOccurrences.find(c => c.id === classId);
  if (!occ) return;

  const content = `
    <div style="text-align:left; font-size:13px; color:var(--color-on-tertiary-fixed); line-height:20px;">
      <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Class ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${occ.id}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Series Ref:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${occ.seriesId}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Student:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${occ.learner}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${occ.trainer}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Schedules Instant:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${occ.date}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Time Slot:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${occ.time}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Class Status:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">${occ.status}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Meeting Classroom:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">${occ.meeting.status} (Daily Room Ref)</td></tr>
        <tr><td style="padding:6px 0; color:var(--color-tertiary);">Reminders:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">Confirmation Queued, 24-Hour Scheduled</td></tr>
      </table>

      <h4 style="font-size:12.5px; font-weight:700; margin-bottom:8px;">Activity Logs:</h4>
      <ul class="timeline-evidence" style="font-size:11.5px; margin-bottom:20px;">
        ${occ.history.map(h => `
          <li class="timeline-evidence-item">
            <span style="font-weight:700;">${h.time}</span> &middot; <span>${h.text}</span>
          </li>
        `).join("")}
      </ul>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="rescheduleClassOccurrenceModal('${occ.id}')" style="flex:1.2; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Reschedule Class</button>
        <button class="btn btn-secondary" onclick="cancelClassOccurrenceModal('${occ.id}')" style="flex:1; height:38px; color:#ba1a1a;">Cancel Class</button>
      </div>
    </div>
  `;
  openModal(`Class occurrence Detail: ${occ.id}`, content);
};

// Reschedule details
window.rescheduleClassOccurrenceModal = function(id) {
  const occ = state.classOccurrences.find(c => c.id === id);

  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:13px; margin-bottom:16px;">Input new schedule parameters. Old reminder configurations will automatically cancel.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700;">New Date</label>
        <input type="text" id="resched-new-date" class="form-input" value="${occ.date}">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight:700;">New Time Slot</label>
        <input type="text" id="resched-new-time" class="form-input" value="${occ.time}">
      </div>

      <div class="form-group">
        <label class="form-label" style="font-weight:700;">Reschedule Reason <span style="color:red;">*</span></label>
        <textarea id="resched-reason" class="form-input" style="height:60px;" placeholder="e.g. Learner requested shift due to exam schedule..."></textarea>
      </div>

      <h4 style="font-size:12.5px; font-weight:700; margin-top:14px; margin-bottom:8px;">Reschedule Scope:</h4>
      <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px; margin-bottom:20px;">
        <label style="cursor:pointer;"><input type="radio" name="resched-scope" value="single" checked> This Class Only</label>
        <label style="cursor:pointer; opacity:0.6;"><input type="radio" name="resched-scope" value="following" disabled> This and Following</label>
        <label style="cursor:pointer; opacity:0.6;"><input type="radio" name="resched-scope" value="all" disabled> Entire Series</label>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmRescheduleClassOccurrence('${id}')" style="flex:1.2; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Shift</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal(`Reschedule Class ${id}`, content);
};

window.confirmRescheduleClassOccurrence = function(id) {
  const date = document.getElementById("resched-new-date").value;
  const time = document.getElementById("resched-new-time").value;
  const reason = document.getElementById("resched-reason").value.trim();

  if (!reason) {
    showToastAlert("Rescheduling reason is required.");
    document.getElementById("resched-reason").focus();
    return;
  }

  closeModal();
  const occ = state.classOccurrences.find(c => c.id === id);
  occ.date = date;
  occ.time = time;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  occ.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Rescheduled to ${date} at ${time}. Reason: "${reason}"`
  });
  occ.reminders.confirmation = "Cancelled";
  occ.reminders.twentyFourHour = "Scheduled (Replacement)";

  renderStaffLiveClassesQueue();
  showToastAlert(`Class ${id} rescheduled successfully.`);
};

// Cancellation
window.cancelClassOccurrenceModal = function(id) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:13px; margin-bottom:16px;">This action will mark the class occurrence as Cancelled. Reminders will be deactivated. Entitlement credits remain untouched.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700;">Cancellation Reason <span style="color:red;">*</span></label>
        <textarea id="cancel-occ-reason" class="form-input" style="height:70px;" placeholder="e.g. Trainer requested emergency holiday cancel..."></textarea>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmCancelClassOccurrence('${id}')" style="flex:1.2; height:40px; background-color:#ba1a1a; border-color:#ba1a1a; color:#fff; font-weight:800;">Cancel Class</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal(`Cancel Class Occurrence ${id}?`, content);
};

window.confirmCancelClassOccurrence = function(id) {
  const reason = document.getElementById("cancel-occ-reason").value.trim();
  if (!reason) {
    showToastAlert("A cancellation reason is required.");
    document.getElementById("cancel-occ-reason").focus();
    return;
  }

  closeModal();
  const occ = state.classOccurrences.find(c => c.id === id);
  occ.status = "Cancelled";
  occ.reminders.confirmation = "Cancelled";
  occ.reminders.twentyFourHour = "Cancelled";
  occ.reminders.oneHour = "Cancelled";
  occ.meeting.status = "Failed";

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  occ.history.push({
    time: `14 Aug · ${timeStr}`,
    text: `Class cancelled by Sarah Ahmed. Reason: "${reason}"`
  });

  renderStaffLiveClassesQueue();
  showToastAlert(`Class ${id} marked as cancelled.`);
};


// ==========================================================================
// Screen 15 - Learner Paid Course Workspace / My Course
// ==========================================================================

// Preload mock course workspace state
state.homeworkRecords = {
  "HOMEWORK-CLASS-001": {
    id: "HOMEWORK-CLASS-001",
    enrolmentId: "ENR-001",
    occurrenceId: "CLASS-001",
    title: "Introduce Yourself Practice",
    instructions: "Prepare a 60–90 second spoken introduction including your name, work/study background, interests and one personal goal.",
    status: "To Do",
    dueContext: "Before Class 2",
    assignedFrom: "Class 1",
    trainer: "Ayesha Rahman",
    type: "Speaking Practice"
  }
};

state.courseWorkspaceState = {
  currentTab: "overview", // overview | schedule | attendance | homework | resources | progress | messages | membership
  demoJoinState: "Too Early", // Too Early | Opens Soon | Join Available | Preparing Classroom | Classroom Error | Class Ended
  accessState: "Active", // Active | Suspended | Expired | Low Entitlement
  demoCourseState: "Class 1 Approved", // Before Class 1 | Class 1 Awaiting Review | Class 1 Approved | Low Entitlement | Access Suspended
  class1BannerDismissed: false,
  dismissedNotifications: [], // list of notification ids dismissed
  activeMessages: [
    { sender: "Ayesha Rahman", role: "Trainer", text: "Welcome Ali! Your first class is scheduled for Tuesday at 7:00 PM. Looking forward to working with you.", time: "14 Aug · 1:15 PM" },
    { sender: "Ayesha Rahman", role: "Trainer", text: "Great work today Ali! Please practice your introduction before our next class on Thursday.", time: "18 Aug · 8:15 PM", isNew: true }
  ]
};

window.renderLearnerCourseWorkspace = function(enrolmentId) {
  const view = document.getElementById("learner-course-workspace-view");
  if (!view) return;

  const isEnglish = (enrolmentId === "ENR-001");
  const courseTitle = isEnglish ? "Spoken English" : "Practical AI & Prompt Engineering";
  const courseLevel = isEnglish ? "Beginner" : "Intermediate";
  const deliveryModel = isEnglish ? "Live Online" : "Self-Paced";
  const trainerName = isEnglish ? "Ayesha Rahman" : "Sana Malik";
  const scheduleText = isEnglish ? "Tuesday & Thursday · 7:00 PM PKT" : "Self-Paced (Immediate Access)";

  // Check access state
  const demoCourseState = state.courseWorkspaceState.demoCourseState || "Class 1 Approved";
  const access = (demoCourseState === "Access Suspended") ? "Suspended" : (demoCourseState === "Low Entitlement" ? "Low Entitlement" : "Active");
  const isSuspended = access === "Suspended";
  const isExpired = access === "Expired";
  const isLowCredits = access === "Low Entitlement";

  const class1Approved = isEnglish && (demoCourseState === "Class 1 Approved" || demoCourseState === "Low Entitlement" || (state.entitlementLedger && state.entitlementLedger.some(e => e.id === 'ENT-DEBIT-CLASS-001')));
  const class1AwaitingReview = isEnglish && demoCourseState === "Class 1 Awaiting Review";

  let usedClasses = 0;
  if (class1Approved) {
    usedClasses = 1;
  }
  let remainingClasses = 12 - usedClasses;
  if (demoCourseState === "Low Entitlement") {
    remainingClasses = 2;
  }
  const completedClasses = usedClasses;
  const progressPercent = isEnglish ? Math.round((completedClasses / 12) * 100) : 35;

  // Reconcile occurrences from Screen 14 for Spoken English
  let upcoming = [];
  if (isEnglish) {
    if (state.classOccurrences.length === 0) {
      // Auto-generate default 12 if not already generated by staff
      let proposed = [];
      let currentDate = new Date(2026, 7, 18); // 18 Aug 2026
      let count = 0;
      while (count < 12) {
        const day = currentDate.getDay();
        if (day === 2 || day === 4) {
          const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
          proposed.push({
            id: `CLASS-${(count + 1).toString().padStart(3, '0')}`,
            seriesId: "SERIES-001",
            enrolmentId: "ENR-001",
            schedulePlanId: "SCHED-PLAN-001",
            learner: "Ali Khan",
            trainer: "Ayesha Rahman",
            course: "Spoken English",
            type: "Regular",
            format: "1-to-1",
            date: dateStr,
            time: "7:00 PM – 7:45 PM",
            startsAt: "2026-08-18T19:00:00+05:00",
            timezone: "Asia/Karachi",
            durationMinutes: 45,
            status: "Scheduled",
            meeting: { status: "Ready", roomId: `ROOM-CLASS-${(count + 1).toString().padStart(3, '0')}`, provider: "Daily" },
            reminders: { confirmation: "Queued", twentyFourHour: "Scheduled", oneHour: "Scheduled" },
            history: []
          });
          count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      state.classOccurrences = proposed;
    }
    upcoming = state.classOccurrences;
  }

  // Course Switcher HTML
  const switcherHtml = `
    <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); padding:10px 16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:12.5px; font-weight:700; color:var(--color-tertiary);">Current Course Workspace:</span>
        <select class="form-input" style="width:240px; height:34px; font-size:13px; font-weight:700; margin-bottom:0;" onchange="window.location.hash='#learner/courses/' + this.value">
          <option value="ENR-001" ${isEnglish ? 'selected' : ''}>Spoken English (Live Online)</option>
          <option value="ENR-002" ${!isEnglish ? 'selected' : ''}>Practical AI (Self-Paced)</option>
        </select>
      </div>

      <!-- Dev Demo Controls -->
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:11.5px; font-weight:700; color:#ba1a1a;">Demo Course State:</span>
        <select class="form-input" style="width:200px; height:34px; font-size:12px; margin-bottom:0; background:#fce8e6; border-color:#fad2cf; font-weight:700;" onchange="changeDemoCourseState('${enrolmentId}', this.value)">
          <option value="Before Class 1" ${demoCourseState === 'Before Class 1' ? 'selected' : ''}>Before Class 1</option>
          <option value="Class 1 Awaiting Review" ${demoCourseState === 'Class 1 Awaiting Review' ? 'selected' : ''}>Class 1 Awaiting Review</option>
          <option value="Class 1 Approved" ${demoCourseState === 'Class 1 Approved' ? 'selected' : ''}>Class 1 Approved</option>
          <option value="Low Entitlement" ${demoCourseState === 'Low Entitlement' ? 'selected' : ''}>Low Entitlement</option>
          <option value="Access Suspended" ${demoCourseState === 'Access Suspended' ? 'selected' : ''}>Access Suspended</option>
        </select>
      </div>
    </div>
  `;

  // Suspended state alert
  if (isSuspended) {
    view.innerHTML = `
      ${switcherHtml}
      <div class="alarm-box animate-fade-in" style="background:#fce8e6; border-color:#fad2cf; color:#a50e0e; border-top:5px solid #a50e0e; padding:24px; text-align:center; max-width:600px; margin:40px auto;">
        <h2 style="font-size:20px; font-weight:800; color:#a50e0e; margin-bottom:8px;">Course Access Temporarily Unavailable</h2>
        <p style="font-size:14px; margin-bottom:16px;">Your academic enrolment record is preserved, but active course materials access has been suspended.</p>
        <button class="btn btn-primary" onclick="setTabSelectionState('${enrolmentId}', 'membership')" style="background-color:#a50e0e; border-color:#a50e0e; color:#fff; font-weight:700; height:38px;">View Membership status</button>
      </div>
    `;
    return;
  }

  // Header Title Area
  const headerHtml = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-md); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:32px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">${courseTitle}</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          Level: <strong>${courseLevel}</strong> &middot; Model: <strong>${deliveryModel}</strong> &middot; Enrolment Ref: <strong>${enrolmentId}</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status status-ready" style="font-size:10.5px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Active Workspace</span>
        <div style="font-size:12px; color:var(--color-tertiary); margin-top:4px;">Trainer: <strong>${trainerName}</strong></div>
      </div>
    </div>
  `;

  // Workspace Tabs Selector navigation
  const activeTab = state.courseWorkspaceState.currentTab;
  const tabsList = [
    { id: "overview", label: "Overview" },
    { id: "schedule", label: "Class Schedule" },
    { id: "attendance", label: "Attendance" },
    { id: "homework", label: "Homework" },
    { id: "resources", label: "Resources" },
    { id: "progress", label: "My Progress" },
    { id: "messages", label: "Messages" },
    { id: "membership", label: "Membership" }
  ];

  const tabsHtml = `
    <div class="tabs-nav-bar" style="display:flex; gap:16px; border-bottom:1.5px solid var(--color-outline-variant); margin-bottom:20px; overflow-x:auto;">
      ${tabsList.map(t => `
        <button onclick="setTabSelectionState('${enrolmentId}', '${t.id}')" style="background:none; border:none; padding:10px 4px; font-size:13.5px; font-weight:700; color:${activeTab === t.id ? 'var(--color-secondary)' : 'var(--color-tertiary)'}; border-bottom:3px solid ${activeTab === t.id ? 'var(--color-secondary)' : 'transparent'}; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
          ${t.label}
        </button>
      `).join("")}
    </div>
  `;

  // Tab Content Renderer
  let tabBodyHtml = "";
  if (activeTab === "overview") {
    // Class 1 Completed success notice banner
    let class1BannerHtml = "";
    if (class1Approved && !state.courseWorkspaceState.class1BannerDismissed) {
      class1BannerHtml = `
        <div class="alarm-box animate-fade-in" style="background:#e6f4ea; border-color:#c2e7cc; color:#137333; border-left:3px solid #34a853; padding:16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:flex-start; gap:16px; border-radius:6px;">
          <div style="flex:1;">
            <h4 style="color:#137333; font-weight:800; font-size:15px; margin:0 0 6px 0;">🎉 Class 1 Completed & Approved</h4>
            <p style="color:#137333; font-size:13px; margin:0 0 8px 0;">Your live session from 18 August has been reviewed and finalized by Operations.</p>
            <div style="font-size:12px; display:flex; gap:16px; flex-wrap:wrap; margin-bottom:8px;">
              <span>📅 Attendance: <strong>Present</strong></span>
              <span>⏱️ Duration: <strong>40 min</strong></span>
              <span>👤 Trainer: <strong>Ayesha Rahman</strong></span>
            </div>
            <button class="btn btn-secondary" onclick="openClass1SummaryModal('details')" style="height:28px; font-size:11.5px; padding:0 12px; font-weight:700; color:#137333; border-color:#c2e7cc; background:#f4fbf7;">View Class Summary</button>
          </div>
          <button onclick="dismissClass1Banner('${enrolmentId}')" style="background:none; border:none; color:#137333; font-size:18px; font-weight:800; cursor:pointer; line-height:1;">&times;</button>
        </div>
      `;
    }

    // 1. Next Class CTA Card
    let nextClassHtml = "";
    if (isEnglish) {
      if (class1Approved) {
        // Look up CLASS-002 and check for reschedule/makeup status
        ensureClassOccurrencesGenerated();
        const class2 = state.classOccurrences.find(c => c.id === "CLASS-002") || { status: "Scheduled", date: "Thursday, 20 August 2026", time: "7:00 PM – 7:45 PM" };
        const class2Replacement = state.classOccurrences.find(c => c.replacementFor === "CLASS-002");
        const class2Makeup = state.classDisruptions.makeups["CLASS-002"];

        if (class2.status === "Rescheduled" && class2Replacement) {
          nextClassHtml = `
            <div class="form-card" style="border-top:4px solid var(--color-secondary); padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Next Live Class (Class 2 of 12)</h4>
                    <span class="badge-status status-submitted" style="font-size:10px; background-color:#e8f0fe; color:#1a73e8; border-color:#b4c8f8;">Rescheduled</span>
                  </div>
                  <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">${class2Replacement.date}</h2>
                  <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Time slot: <strong>7:00 PM – 7:45 PM PKT</strong></p>
                  <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Assigned Trainer: <strong>Ayesha Rahman (1-to-1)</strong></p>
                  <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:10px;">
                    Class ID: <strong>${class2Replacement.id}</strong> &middot; 
                    <span style="text-decoration:line-through; color:var(--color-error); font-weight:700;">Previously: Thursday, 20 August &middot; 7:00 PM</span>
                  </div>
                </div>
                <div style="text-align:right; display:flex; flex-direction:column; gap:6px;">
                  <button class="btn btn-primary" style="height:44px; padding:0 24px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;" disabled>
                    Join Class
                  </button>
                  <span style="font-size:11.5px; color:var(--color-tertiary); font-style:italic;">Join opens 10 minutes before class.</span>
                </div>
              </div>

              <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--color-outline-variant); font-size:12.5px;">
                <div style="font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Prepare for Class 2</div>
                <div style="display:flex; flex-direction:column; gap:4px; color:var(--color-tertiary);">
                  <div>📝 <strong>Homework:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary); font-weight:700;" onclick="setTabSelectionState('${enrolmentId}', 'homework')">Introduce Yourself Practice</span> (Status: <strong style="color:${state.homeworkRecords["HOMEWORK-CLASS-001"].status === 'Practised' ? '#137333' : '#b06000'}">${state.homeworkRecords["HOMEWORK-CLASS-001"].status}</strong>)</div>
                  <div>🎯 <strong>Focus:</strong> Everyday question-and-answer practice</div>
                  <div>📖 <strong>Recommended Resource:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary);" onclick="setTabSelectionState('${enrolmentId}', 'resources')">Introduction Vocabulary Sheet</span></div>
                </div>
              </div>
            </div>
          `;
        } else if (class2.status === "Cancelled" && class2Makeup) {
          nextClassHtml = `
            <div class="form-card" style="border-top:4px solid #137333; padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Next Live Class (Class 2 of 12)</h4>
                    <span class="badge-status status-ready" style="font-size:10px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Scheduled Makeup</span>
                  </div>
                  <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">${class2Makeup.date}</h2>
                  <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Time slot: <strong>${class2Makeup.time} PKT</strong></p>
                  <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Assigned Trainer: <strong>Ayesha Rahman (1-to-1)</strong></p>
                  <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:10px;">
                    Class ID: <strong>${class2Makeup.id}</strong> &middot; 
                    <span style="color:var(--color-error); font-weight:700;">Makeup for Cancelled CLASS-002</span>
                  </div>
                </div>
                <div style="text-align:right; display:flex; flex-direction:column; gap:6px;">
                  <button class="btn btn-primary" style="height:44px; padding:0 24px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;" disabled>
                    Join Class
                  </button>
                  <span style="font-size:11.5px; color:var(--color-tertiary); font-style:italic;">Join opens 10 minutes before class.</span>
                </div>
              </div>

              <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--color-outline-variant); font-size:12.5px;">
                <div style="font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Prepare for Class 2</div>
                <div style="display:flex; flex-direction:column; gap:4px; color:var(--color-tertiary);">
                  <div>📝 <strong>Homework:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary); font-weight:700;" onclick="setTabSelectionState('${enrolmentId}', 'homework')">Introduce Yourself Practice</span> (Status: <strong style="color:${state.homeworkRecords["HOMEWORK-CLASS-001"].status === 'Practised' ? '#137333' : '#b06000'}">${state.homeworkRecords["HOMEWORK-CLASS-001"].status}</strong>)</div>
                  <div>🎯 <strong>Focus:</strong> Everyday question-and-answer practice</div>
                  <div>📖 <strong>Recommended Resource:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary);" onclick="setTabSelectionState('${enrolmentId}', 'resources')">Introduction Vocabulary Sheet</span></div>
                </div>
              </div>
            </div>
          `;
        } else if (class2.status === "Cancelled") {
          nextClassHtml = `
            <div class="form-card" style="border-top:4px solid var(--color-error); padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Next Live Class (Class 2 of 12)</h4>
                    <span class="badge-status status-submitted" style="font-size:10px; background-color:#fce8e6; color:#a50e0e; border-color:#fad2cf;">Cancelled</span>
                  </div>
                  <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Class Cancelled</h2>
                  <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Original Schedule: <strong>Thursday, 20 August &middot; 7:00 PM</strong></p>
                  <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Reason: <strong>${state.classDisruptions.cancellations["CLASS-002"] ? state.classDisruptions.cancellations["CLASS-002"].reason : 'Learner unavailable'}</strong></p>
                  <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:10px; font-style:italic;">Please wait for school staff to schedule a makeup class.</div>
                </div>
              </div>
            </div>
          `;
        } else {
          // Default Scheduled CLASS-002
          nextClassHtml = `
            <div class="form-card" style="border-top:4px solid var(--color-secondary); padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Next Live Class (Class 2 of 12)</h4>
                    <span class="badge-status status-ready" style="font-size:10px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Scheduled</span>
                  </div>
                  <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Thursday, 20 August 2026</h2>
                  <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Time slot: <strong>7:00 PM – 7:45 PM PKT</strong></p>
                  <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Assigned Trainer: <strong>Ayesha Rahman (1-to-1)</strong></p>
                  <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:10px;">Class ID: <strong>CLASS-002</strong></div>
                </div>
                <div style="text-align:right; display:flex; flex-direction:column; gap:6px;">
                  <button class="btn btn-primary" style="height:44px; padding:0 24px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;" disabled>
                    Join Class
                  </button>
                  <span style="font-size:11.5px; color:var(--color-tertiary); font-style:italic;">Join opens 10 minutes before class.</span>
                </div>
              </div>

              <div style="margin-top:16px; padding-top:12px; border-top:1px solid var(--color-outline-variant); font-size:12.5px;">
                <div style="font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Prepare for Class 2</div>
                <div style="display:flex; flex-direction:column; gap:4px; color:var(--color-tertiary);">
                  <div>📝 <strong>Homework:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary); font-weight:700;" onclick="setTabSelectionState('${enrolmentId}', 'homework')">Introduce Yourself Practice</span> (Status: <strong style="color:${state.homeworkRecords["HOMEWORK-CLASS-001"].status === 'Practised' ? '#137333' : '#b06000'}">${state.homeworkRecords["HOMEWORK-CLASS-001"].status}</strong>)</div>
                  <div>🎯 <strong>Focus:</strong> Everyday question-and-answer practice</div>
                  <div>📖 <strong>Recommended Resource:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--color-secondary);" onclick="setTabSelectionState('${enrolmentId}', 'resources')">Introduction Vocabulary Sheet</span></div>
                </div>
              </div>

              <div style="margin-top:12px; border-top:1px solid var(--color-outline-variant); padding-top:12px; display:flex; justify-content:flex-end;">
                <button class="btn btn-secondary" onclick="openLearnerRescheduleRequestModal('${enrolmentId}', 'CLASS-002')" style="height:32px; font-size:12px; font-weight:700;">Request Schedule Change</button>
              </div>
            </div>
          `;
        }
      } else if (class1AwaitingReview) {
        nextClassHtml = `
          <div class="form-card" style="border-top:4px solid var(--color-secondary); padding:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Class 1 Awaiting Review</h4>
                <span class="badge-status status-submitted" style="font-size:10px; background-color:#fffcf0; color:#b06000; border-color:#f0d97a;">Awaiting Review</span>
              </div>
              <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Tuesday, 18 August 2026</h2>
              <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Time slot: <strong>7:00 PM – 7:45 PM PKT</strong></p>
              <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Assigned Trainer: <strong>Ayesha Rahman (1-to-1)</strong></p>
              <div style="font-size:11.5px; color:#ba1a1a; margin-top:10px; font-weight:700;">Completed. Reports are under review by school staff.</div>
            </div>
            <div style="text-align:right; display:flex; flex-direction:column; gap:6px;">
              <button class="btn btn-primary" style="height:44px; padding:0 24px; font-weight:800; background-color:var(--color-outline-variant); border-color:var(--color-outline-variant); color:var(--color-on-surface-variant);" disabled>
                Class Ended
              </button>
              <span style="font-size:11.5px; color:var(--color-tertiary); font-style:italic;">Processing attendance & feedback...</span>
            </div>
          </div>
        `;
      } else {
        // Before Class 1 (or default)
        let ctaTitle = "Join Class";
        let ctaDisabled = true;
        let ctaCaption = "Join opens 10 minutes before class.";
        let ctaBadge = "";
        
        const demo = state.courseWorkspaceState.demoJoinState;
        if (demo === "Opens Soon") {
          ctaBadge = `<span class="badge-status status-submitted" style="font-size:10px; background-color:#e8f0fe; color:#1a73e8; border-color:#d2e3fc;">Opens Soon</span>`;
          ctaCaption = "Join opens in 08:32";
        } else if (demo === "Join Available") {
          ctaBadge = `<span class="badge-status status-ready" style="font-size:10px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Join Now</span>`;
          ctaDisabled = false;
          ctaCaption = "Your classroom is ready.";
        } else if (demo === "Preparing Classroom") {
          ctaTitle = "Preparing...";
          ctaCaption = "Provisioning meeting room details...";
        } else if (demo === "Classroom Error") {
          ctaTitle = "Retry Room Link";
          ctaDisabled = false;
          ctaCaption = "⚠️ Classroom is temporarily unavailable.";
        } else if (demo === "Class Ended") {
          ctaTitle = "Class Ended";
          ctaCaption = "Class completed. Reports are under review.";
        }

        nextClassHtml = `
          <div class="form-card" style="border-top:4px solid var(--color-secondary); padding:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <h4 style="font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); letter-spacing:0.05em; margin:0;">Next Live Class (Class 1 of 12)</h4>
                ${ctaBadge}
              </div>
              <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Tuesday, 18 August 2026</h2>
              <p style="margin:4px 0; font-size:13.5px; color:var(--color-tertiary);">Time slot: <strong>7:00 PM – 7:45 PM PKT</strong></p>
              <p style="margin:4px 0; font-size:13px; color:var(--color-tertiary);">Assigned Trainer: <strong>Ayesha Rahman (1-to-1)</strong></p>
              <div style="font-size:11.5px; color:#ba1a1a; margin-top:10px; font-weight:700;">Classroom will open 10 minutes prior.</div>
            </div>
            <div style="text-align:right; display:flex; flex-direction:column; gap:6px;">
              <button class="btn btn-primary" onclick="launchLearnerWorkspaceJoin('${enrolmentId}')" style="height:44px; padding:0 24px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;" ${ctaDisabled ? 'disabled' : ''}>
                ${ctaTitle}
              </button>
              <span style="font-size:11.5px; color:var(--color-tertiary); font-style:italic;">${ctaCaption}</span>
            </div>
          </div>
        `;
      }
    } else {
      nextClassHtml = `
        <div class="form-card" style="border-top:4px solid var(--color-secondary); padding:20px; text-align:center;">
          <h4 style="font-size:13px; font-weight:800; text-transform:uppercase; color:var(--color-tertiary); margin-bottom:8px;">Self-Paced Learning Module</h4>
          <p style="font-size:14.5px; margin-bottom:16px;">This course has immediate release access. Open module syllabus to start reading.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#courses/practical-ai'" style="height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Continue Learning Course</button>
        </div>
      `;
    }

    // 2. Upcoming schedule summaries (hide Class 1 if completed)
    const previewList = isEnglish ? (class1Approved ? upcoming.slice(1, 5) : upcoming.slice(0, 4)) : [];
    const upcomingList = isEnglish ? previewList.map(u => `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-outline-variant); padding:10px 0; font-size:13px;">
        <div>
          <span style="font-weight:700; color:var(--color-on-tertiary-fixed);">${u.date}</span>
          <span style="color:var(--color-tertiary); margin-left:8px;">&middot; ${u.time} PKT</span>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="font-size:12px; color:var(--color-tertiary);">${u.trainer}</span>
          <span class="badge-status status-ready" style="font-size:10px;">${u.status}</span>
        </div>
      </div>
    `).join("") : `<div style="font-style:italic; color:var(--color-tertiary); font-size:13px;">No live classes scheduled for self-paced courses.</div>`;

    // 3. Grid blocks: progress summary, credits counters
    const creditsHtml = `
      <div class="form-card" style="padding:16px;">
        <h4 style="font-size:13.5px; font-weight:800; margin-bottom:10px; color:var(--color-on-tertiary-fixed);">Class Credits Balance</h4>
        <table style="width:100%; font-size:12.5px; border-collapse:collapse; line-height:22px; margin-bottom:12px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Included Classes:</td><td style="font-weight:700; text-align:right;">12</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Scheduled:</td><td style="font-weight:700; text-align:right; color:var(--color-secondary);">${isEnglish ? 12 : 0}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Used / Approved:</td><td style="font-weight:700; text-align:right; color:${usedClasses > 0 ? '#137333' : 'var(--color-on-surface)'}">${usedClasses}</td></tr>
          <tr><td style="color:var(--color-tertiary);">Credits Remaining:</td><td style="font-weight:700; text-align:right; color:#137333;">${remainingClasses} Classes</td></tr>
        </table>
        ${isEnglish ? `<button class="btn btn-secondary" onclick="openEntitlementUsageModal('${enrolmentId}')" style="width:100%; height:32px; font-size:11.5px; font-weight:700;">View Usage History</button>` : ''}
      </div>
    `;

    const progressCard = `
      <div class="form-card" style="padding:16px;">
        <h4 style="font-size:13.5px; font-weight:800; margin-bottom:10px; color:var(--color-on-tertiary-fixed);">Course Progress</h4>
        <div style="font-size:32px; font-weight:800; color:var(--color-secondary); margin-bottom:4px;">${isEnglish ? progressPercent + '%' : '35%'}</div>
        <p style="font-size:12.5px; color:var(--color-tertiary); margin:0 0 10px 0;">Classes completed: <strong>${isEnglish ? completedClasses + ' / 12 approved' : 'Course modules open'}</strong></p>
        <div style="font-size:12px; color:var(--color-tertiary); font-style:italic;">
          Next step: <strong>${isEnglish ? (class1Approved ? 'Attend Class 2 — Basic Sentence Formation' : 'Attend Class 1 speaking guide') : 'Submit Module 3 assignment'}</strong>
        </div>
      </div>
    `;

    // 4. Low Credits warning notice
    let lowCreditsBanner = "";
    if (isLowCredits) {
      lowCreditsBanner = `
        <div class="alarm-box animate-fade-in" style="background:#fffcf0; border-color:#f0d97a; color:#b06000; border-left:3px solid #f0d97a; margin-bottom:16px; border-radius:6px; padding:16px;">
          <h4 style="color:#b06000; font-weight:800; font-size:14px; margin:0 0 4px 0;">⚠️ Low Class Credits Warning</h4>
          <p style="color:#b06000; font-size:13px; margin:0 0 10px 0;">You have only <strong>2 remaining paid classes</strong>. Renew your package to prevent scheduling disruptions.</p>
          <button class="btn btn-secondary" onclick="showToastAlert('Opening renewal packages options.')" style="height:28px; font-size:11.5px; font-weight:700; color:#b06000; border-color:#f0d97a; background:#fffdf5;">Renew Membership</button>
        </div>
      `;
    }

    tabBodyHtml = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${lowCreditsBanner}
        ${class1BannerHtml}
        ${nextClassHtml}

        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px; align-items:flex-start;">
          <!-- Left Column -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="form-card">
              <h3 class="form-section-title" style="margin-bottom:12px;">Upcoming Schedule Preview</h3>
              ${upcomingList}
              ${isEnglish ? `
                <div style="margin-top:14px; text-align:right;">
                  <button class="btn btn-secondary" onclick="setTabSelectionState('${enrolmentId}', 'schedule')" style="height:32px; font-size:12px; font-weight:700;">View Full Schedule</button>
                </div>
              ` : ''}
            </div>

            <!-- Recent Homework Card -->
            <div class="form-card">
              <h3 class="form-section-title" style="margin-bottom:12px;">Recent Homework</h3>
              ${class1Approved ? `
              <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <div style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed);">${state.homeworkRecords["HOMEWORK-CLASS-001"].title}</div>
                  <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:#e8f0fe; color:#1a73e8; border:1px solid #b4c8f8;">${state.homeworkRecords["HOMEWORK-CLASS-001"].status}</span>
                </div>
                <div style="font-size:12.5px; color:var(--color-on-surface); margin-bottom:10px; line-height:1.5;">${state.homeworkRecords["HOMEWORK-CLASS-001"].instructions}</div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div style="font-size:11.5px; color:var(--color-tertiary);">Due: ${state.homeworkRecords["HOMEWORK-CLASS-001"].dueContext} &middot; Ayesha Rahman</div>
                  <button class="btn btn-secondary" onclick="setTabSelectionState('${enrolmentId}', 'homework')" style="height:26px; font-size:11px; font-weight:700; padding:0 8px;">View Homework</button>
                </div>
              </div>
              ` : `
              <div style="padding:16px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary); font-size:12.5px;">
                No active homework yet. Homework links will display here after live sessions are completed.
              </div>`}
            </div>

            <!-- Recent Feedback Card -->
            <div class="form-card">
              <h3 class="form-section-title" style="margin-bottom:12px;">Recent Feedback</h3>
              ${class1Approved ? `
              <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:14px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <div style="font-size:12.5px; font-weight:800; color:var(--color-tertiary);">Class 1 Speaking & Introductions Feedback</div>
                  <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:12px; background:#e6f4ea; color:#137333; border:1px solid #c2e7cc;">Published</span>
                </div>
                <div style="font-size:13px; color:var(--color-on-surface); font-style:italic; line-height:1.5; margin-bottom:10px;">
                  "Good first class. Continue practising short introductions aloud and focus on speaking slowly and clearly."
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <div style="font-size:11.5px; color:var(--color-tertiary);">Trainer: Ayesha Rahman &middot; 18 Aug 2026</div>
                  <button class="btn btn-secondary" onclick="openClass1SummaryModal('feedback')" style="height:26px; font-size:11px; font-weight:700; padding:0 8px;">View Detailed Feedback</button>
                </div>
              </div>
              ` : `
              <div style="padding:16px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary); font-size:12.5px;">
                No class feedback yet. Feedback from your trainer will appear here after live sessions are approved.
              </div>`}
            </div>
          </div>

          <!-- Right Column -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${creditsHtml}
            ${progressCard}
            
            <div class="form-card" style="padding:16px;">
              <h4 style="font-size:13.5px; font-weight:800; margin-bottom:8px; color:var(--color-on-surface-variant);">Your Trainer</h4>
              <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                <div style="width:36px; height:36px; background-color:var(--color-secondary-container); color:var(--color-on-secondary-container); border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px;">
                  ${trainerName.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style="font-weight:700; font-size:13px;">${trainerName}</div>
                  <div style="font-size:11.5px; color:var(--color-tertiary);">${isEnglish ? 'Spoken English Trainer' : 'AI Specialist'}</div>
                </div>
              </div>
              <button class="btn btn-secondary" onclick="setTabSelectionState('${enrolmentId}', 'messages')" style="width:100%; height:32px; font-size:11.5px; font-weight:700;">Message Trainer</button>
            </div>
          </div>
        </div>
      </div>
    `;

  } else if (activeTab === "schedule") {
    let scheduleHtml = "";

    if (class1Approved) {
      // Class 1 completed, Class 2-12 upcoming
      const scheduleItems = state.classOccurrences.filter(c => c.id !== "CLASS-001");
      const upcomingRows = scheduleItems.map(u => {
        let sequenceLabel = `Class ${u.classSequence || 2} of 12`;
        if (u.type === "Makeup") {
          sequenceLabel = `Class ${u.classSequence || 2} of 12 (Makeup)`;
        }
        
        let statusBg = "";
        let statusBadgeColor = "";
        let statusBorder = "";
        
        if (u.status === "Rescheduled") {
          statusBg = "#e8f0fe";
          statusBadgeColor = "#1a73e8";
          statusBorder = "#b4c8f8";
        } else if (u.status === "Cancelled") {
          statusBg = "#fce8e6";
          statusBadgeColor = "#a50e0e";
          statusBorder = "#fad2cf";
        } else {
          statusBg = "#e6f4ea";
          statusBadgeColor = "#137333";
          statusBorder = "#c2e7cc";
        }

        return `
          <tr style="border-bottom:1px solid var(--color-outline-variant); background-color:${u.status === 'Rescheduled' || u.status === 'Cancelled' ? 'var(--color-surface-low)' : 'inherit'};">
            <td style="padding:10px; font-weight:700; color:${u.status === 'Rescheduled' || u.status === 'Cancelled' ? 'var(--color-tertiary)' : 'var(--color-on-tertiary-fixed)'};">${sequenceLabel}</td>
            <td style="padding:10px; font-size:13px; color:${u.status === 'Rescheduled' || u.status === 'Cancelled' ? 'var(--color-tertiary)' : 'inherit'};">${u.date}</td>
            <td style="padding:10px; font-family:monospace; font-size:12.5px; color:${u.status === 'Rescheduled' || u.status === 'Cancelled' ? 'var(--color-tertiary)' : 'inherit'};">${u.time} PKT</td>
            <td style="padding:10px; font-size:13px; color:var(--color-tertiary);">${u.trainer}</td>
            <td style="padding:10px;">
              <span class="badge-status" style="font-size:10px; padding:2px 8px; font-weight:700; background-color:${statusBg}; color:${statusBadgeColor}; border-color:${statusBorder};">
                ${u.status}
              </span>
            </td>
            <td style="padding:10px; text-align:center;">
              <button class="btn btn-secondary" onclick="openLearnerClassDetailsModal('${u.id}', '${u.date}', '${u.time}', '${u.trainer}', '${u.status}')" style="padding:3px 6px; font-size:11.5px; height:24px;">View</button>
            </td>
          </tr>
        `;
      }).join("");

      scheduleHtml = `
        <div class="form-card" style="margin-bottom:16px;">
          <h3 class="form-section-title" style="margin-bottom:12px;">Past Classes</h3>
          <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden;">
            <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
              <thead>
                <tr style="background-color:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Syllabus Session</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Status</th>
                  <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--color-outline-variant);">
                  <td style="padding:10px; font-weight:700;">Class 1 of 12</td>
                  <td style="padding:10px; color:var(--color-tertiary);">18 Aug 2026 &middot; 7:00 PM</td>
                  <td style="padding:10px;">Ayesha Rahman</td>
                  <td style="padding:10px;">
                    <span class="badge-status status-ready" style="font-size:10px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc;">Completed</span>
                    <span style="font-size:11px; margin-left:4px; font-weight:700; color:#137333;">Present</span>
                  </td>
                  <td style="padding:10px; text-align:center; display:flex; gap:6px; justify-content:center; align-items:center;">
                    <button class="btn btn-secondary" onclick="openClass1SummaryModal('details')" style="padding:3px 6px; font-size:11.5px; height:24px; font-weight:700;">View Summary</button>
                    <button class="btn btn-secondary" onclick="openClass1SummaryModal('feedback')" style="padding:3px 6px; font-size:11.5px; height:24px; font-weight:700;">View Feedback</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="form-card">
          <h3 class="form-section-title" style="margin-bottom:12px;">Upcoming Schedule</h3>
          <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden;">
            <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
              <thead>
                <tr style="background-color:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Syllabus Session</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Time Slot</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Status</th>
                  <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
                </tr>
              </thead>
              <tbody>
                ${upcomingRows}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      // Class 1 Awaiting Review or Before Class 1
      const scheduleRows = upcoming.map((u, idx) => `
        <tr style="border-bottom:1px solid var(--color-outline-variant);">
          <td style="padding:10px; font-weight:700; color:var(--color-on-tertiary-fixed);">Class ${idx+1} of 12</td>
          <td style="padding:10px; font-size:13px;">${u.date}</td>
          <td style="padding:10px; font-family:monospace; font-size:12.5px;">${u.time} PKT</td>
          <td style="padding:10px; font-size:13px; color:var(--color-tertiary);">${u.trainer}</td>
          <td style="padding:10px;">
            ${(idx === 0 && class1AwaitingReview) 
              ? `<span class="badge-status status-submitted" style="font-size:10px; background-color:#fffcf0; color:#b06000; border-color:#f0d97a;">Awaiting Review</span>` 
              : `<span class="badge-status status-ready" style="font-size:10px;">${u.status}</span>`}
          </td>
          <td style="padding:10px; text-align:center;">
            <button class="btn btn-secondary" onclick="openLearnerClassDetailsModal('${u.id}', '${u.date}', '${u.time}', '${u.trainer}', '${u.status}')" style="padding:3px 6px; font-size:11.5px; height:24px;">View</button>
          </td>
        </tr>
      `).join("");

      scheduleHtml = `
        <div class="form-card">
          <h3 class="form-section-title" style="margin-bottom:12px;">Full Class Schedule</h3>
          <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden;">
            <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
              <thead>
                <tr style="background-color:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Syllabus Session</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Time Slot</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
                  <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Status</th>
                  <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
                </tr>
              </thead>
              <tbody>
                ${scheduleRows}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    tabBodyHtml = scheduleHtml;

  } else if (activeTab === "attendance") {
    let attendanceHtml = "";

    if (class1Approved) {
      attendanceHtml = `
        <div style="background:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden;">
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            <thead><tr style="background:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Class</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Duration</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Outcome</th>
              <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
            </tr></thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--color-outline-variant);">
                <td style="padding:10px; font-weight:700;">Class 1 of 12</td>
                <td style="padding:10px; color:var(--color-tertiary);">18 Aug 2026</td>
                <td style="padding:10px;">40 min connected</td>
                <td style="padding:10px;">Ayesha Rahman</td>
                <td style="padding:10px;"><span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:12px; background:#e6f4ea; color:#137333; border:1px solid #c2e7cc;">Present</span></td>
                <td style="padding:10px; text-align:center;">
                  <button class="btn btn-secondary" onclick="openAttendanceDetailsModal('CLASS-001')" style="padding:3px 6px; font-size:11.5px; height:24px;">View Details</button>
                </td>
              </tr>
              ${upcoming.slice(1, 4).map((u, i) => `
              <tr style="border-bottom:1px solid var(--color-outline-variant);">
                <td style="padding:10px; font-weight:700; color:var(--color-tertiary);">Class ${i+2} of 12</td>
                <td style="padding:10px; color:var(--color-tertiary);">${u.date}</td>
                <td style="padding:10px; color:var(--color-tertiary);">—</td>
                <td style="padding:10px; color:var(--color-tertiary);">${u.trainer}</td>
                <td style="padding:10px;"><span style="font-size:11px; padding:3px 10px; border-radius:12px; background:var(--color-surface-low); color:var(--color-tertiary); border:1px solid var(--color-outline-variant);">Upcoming</span></td>
                <td style="padding:10px; text-align:center;">—</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (class1AwaitingReview) {
      attendanceHtml = `
        <div style="background:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; overflow:hidden;">
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            <thead><tr style="background:var(--color-surface-low); border-bottom:1px solid var(--color-outline-variant);">
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Class</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Date</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Duration</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Trainer</th>
              <th style="padding:10px; font-weight:800; color:var(--color-tertiary);">Outcome</th>
              <th style="padding:10px; text-align:center; font-weight:800; color:var(--color-tertiary);">Action</th>
            </tr></thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--color-outline-variant);">
                <td style="padding:10px; font-weight:700;">Class 1 of 12</td>
                <td style="padding:10px; color:var(--color-tertiary);">18 Aug 2026</td>
                <td style="padding:10px;">40 min connected</td>
                <td style="padding:10px;">Ayesha Rahman</td>
                <td style="padding:10px;"><span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:12px; background:#fffcf0; color:#b06000; border:1px solid #f0d97a;">Pending Finalization</span></td>
                <td style="padding:10px; text-align:center;">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    } else {
      attendanceHtml = `
        <div style="padding:32px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary);">
          <div style="font-size:24px; margin-bottom:8px;">📅</div>
          <div style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">No Attendance Records Yet</div>
          <div>Completed live slots will display status tags (Present / Absent) after trainer reports are approved by Operations.</div>
        </div>
      `;
    }

    tabBodyHtml = `
      <div class="form-card">
        <h3 class="form-section-title" style="margin-bottom:12px;">Attendance History</h3>
        <p style="font-size:13.5px; color:var(--color-tertiary); margin-bottom:20px;">Your completed classes attendance marks will appear here. Note: trial classrooms are kept separate.</p>
        ${attendanceHtml}
      </div>
    `;

  } else if (activeTab === "homework") {
    const hw = state.homeworkRecords["HOMEWORK-CLASS-001"];
    let homeworkHtml = "";

    if (class1Approved && hw) {
      homeworkHtml = `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div style="background:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <div>
                <h4 style="font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 4px 0;">${hw.title}</h4>
                <div style="font-size:12.5px; color:var(--color-tertiary);">${hw.type} &middot; Assigned from Class 1 &middot; Trainer: ${hw.trainer}</div>
              </div>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:12px; font-weight:700; color:var(--color-tertiary);">Status:</span>
                <select class="form-input" style="width:120px; height:30px; font-size:12px; margin-bottom:0; font-weight:700;" onchange="updateHomeworkStatus('HOMEWORK-CLASS-001', this.value)">
                  <option value="To Do" ${hw.status === 'To Do' ? 'selected' : ''}>To Do</option>
                  <option value="In Progress" ${hw.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                  <option value="Practised" ${hw.status === 'Practised' ? 'selected' : ''}>Practised</option>
                </select>
              </div>
            </div>
            
            <p style="font-size:13.5px; color:var(--color-on-surface); line-height:1.6; margin-bottom:16px;">
              ${hw.instructions}
            </p>
            
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-top:1px solid var(--color-outline-variant); padding-top:12px;">
              <span style="font-size:12.5px; color:#ba1a1a; font-weight:700;">⏱️ Due: ${hw.dueContext}</span>
              <div style="display:flex; gap:8px;">
                <button class="btn btn-secondary" onclick="openHomeworkDetailModal('HOMEWORK-CLASS-001')" style="height:32px; font-size:12px; font-weight:700;">View Details</button>
                ${hw.status !== 'Practised' ? `<button class="btn btn-primary" onclick="updateHomeworkStatus('HOMEWORK-CLASS-001', 'Practised')" style="height:32px; font-size:12px; font-weight:700; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">Mark as Practised</button>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (class1AwaitingReview) {
      homeworkHtml = `
        <div style="padding:32px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary);">
          <div style="font-size:24px; margin-bottom:8px;">📝</div>
          <div style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Homework Under Review</div>
          <div>Homework tasks assigned during Class 1 will be published as soon as the trainer's report is approved by Operations.</div>
        </div>
      `;
    } else {
      homeworkHtml = `
        <div style="padding:32px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary);">
          <div style="font-size:24px; margin-bottom:8px;">📝</div>
          <div style="font-weight:700; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">No Homework Assigned Yet</div>
          <div>Active exercises and speaking homework sheets will appear here once live class reports are approved by Operations.</div>
        </div>
      `;
    }

    tabBodyHtml = `
      <div class="form-card">
        <h3 class="form-section-title" style="margin-bottom:12px;">Homework Assignments</h3>
        ${homeworkHtml}
      </div>
    `;

  } else if (activeTab === "resources") {
    // Resources catalog
    const generalResources = [
      { name: "Beginner Speaking Guide", type: "PDF Document", size: "2.4 MB" },
      { name: "English Pronunciation Basics", type: "Audio Track", size: "12.8 MB" },
      { name: "General Vocabulary Practice Sheet", type: "PDF Worksheet", size: "1.1 MB" }
    ];

    const class1Resources = [
      { name: "Beginner Speaking Guide", type: "PDF Document", size: "2.4 MB", context: "Added from Class 1" },
      { name: "English Pronunciation Basics", type: "Audio Track", size: "12.8 MB", context: "Added from Class 1" },
      { name: "Introduction Vocabulary Practice Sheet", type: "PDF Worksheet", size: "1.2 MB", context: "Added from Class 1" }
    ];

    const generalCards = generalResources.map(r => `
      <div class="form-card" style="padding:16px; display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div>
          <h4 style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed); margin:0 0 4px 0;">${r.name}</h4>
          <span style="font-size:12px; color:var(--color-tertiary);">${r.type} &middot; ${r.size}</span>
        </div>
        <button class="btn btn-secondary" onclick="showToastAlert('Downloading resource ${r.name}')" style="height:32px; font-size:12px; font-weight:700;">Open & View</button>
      </div>
    `).join("");

    const class1Cards = class1Resources.map(r => `
      <div class="form-card" style="padding:16px; display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div>
          <h4 style="font-size:14px; font-weight:700; color:var(--color-on-tertiary-fixed); margin:0 0 4px 0;">${r.name}</h4>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:12px; color:var(--color-tertiary);">${r.type} &middot; ${r.size}</span>
            <span class="badge-status status-ready" style="font-size:9.5px; background-color:#e6f4ea; color:#137333; border-color:#c2e7cc; padding:1px 6px;">${r.context}</span>
          </div>
        </div>
        <button class="btn btn-secondary" onclick="showToastAlert('Downloading class resource ${r.name}')" style="height:32px; font-size:12px; font-weight:700;">Open & View</button>
      </div>
    `).join("");

    tabBodyHtml = `
      <div>
        <h3 style="font-size:16px; font-weight:800; margin-bottom:16px; color:var(--color-on-tertiary-fixed);">Course Resources & Syllabus Documents</h3>
        
        <div style="margin-bottom:24px;">
          <h4 style="font-size:14px; font-weight:800; margin-bottom:12px; color:var(--color-tertiary);">General Syllabus Resources</h4>
          ${generalCards}
        </div>

        ${class1Approved ? `
        <div>
          <h4 style="font-size:14px; font-weight:800; margin-bottom:12px; color:var(--color-tertiary);">Shared from Class 1</h4>
          ${class1Cards}
        </div>
        ` : ''}
      </div>
    `;

  } else if (activeTab === "progress") {
    let progressHtml = "";
    if (class1Approved) {
      progressHtml = `
        <div class="form-card">
          <h3 class="form-section-title" style="margin-bottom:12px;">Progress Audit Logs</h3>
          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:20px; line-height:24px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Current Milestone Stage:</td><td style="font-weight:700; text-align:right;">Getting Started</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Completed Classes:</td><td style="font-weight:700; text-align:right; color:#137333;">1 / 12 approved live classes completed</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Remaining Classes:</td><td style="font-weight:700; text-align:right;">11</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Target Proficiency Level:</td><td style="font-weight:700; text-align:right; color:var(--color-secondary);">Beginner Spoken English</td></tr>
          </table>

          <h4 style="font-size:13.5px; font-weight:700; margin-bottom:10px;">Workspace Access Log Timeline:</h4>
          <ul class="timeline-evidence" style="font-size:12px; margin-bottom:0;">
            ${(() => {
              const cl2 = state.classOccurrences.find(c => c.id === "CLASS-002");
              if (cl2 && cl2.status === "Rescheduled") {
                return `<li class="timeline-evidence-item" style="border-left: 2px solid var(--color-secondary);"><span style="font-weight:700; color:var(--color-secondary);">19 Aug &middot; 10:32 AM</span> - Class 2 rescheduled to Friday, 21 August at 7:00 PM PKT (Ref: RESCHEDULE-001)</li>`;
              } else if (cl2 && cl2.status === "Cancelled") {
                return `<li class="timeline-evidence-item" style="border-left: 2px solid var(--color-error);"><span style="font-weight:700; color:var(--color-error);">19 Aug &middot; 10:31 AM</span> - Class 2 cancelled. Reason: Learner unavailable (Ref: CANCEL-001)</li>`;
              }
              return "";
            })()}
            <li class="timeline-evidence-item" style="border-left: 2px solid #137333;"><span style="font-weight:700; color:#137333;">18 Aug &middot; 8:01 PM</span> - Progress updated (PROGRESS-CLASS-001)</li>
            <li class="timeline-evidence-item" style="border-left: 2px solid #137333;"><span style="font-weight:700; color:#137333;">18 Aug &middot; 8:00 PM</span> - Class 1 approved by Operations reviewer</li>
            <li class="timeline-evidence-item" style="border-left: 2px solid #137333;"><span style="font-weight:700; color:#137333;">18 Aug &middot; 7:45 PM</span> - Class 1 delivered (1-to-1 session completed)</li>
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 1:12 PM</span> - Course schedule plan mapped (12 paid classes scheduled)</li>
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 12:43 PM</span> - Enrolment activated</li>
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 12:42 PM</span> - Academic access grant generated</li>
          </ul>
        </div>
      `;
    } else {
      progressHtml = `
        <div class="form-card">
          <h3 class="form-section-title" style="margin-bottom:12px;">Progress Audit Logs</h3>
          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:20px; line-height:24px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Current Milestone Stage:</td><td style="font-weight:700; text-align:right;">Getting Started</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Completed Classes:</td><td style="font-weight:700; text-align:right;">0 / 12</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Target Proficiency Level:</td><td style="font-weight:700; text-align:right; color:var(--color-secondary);">Beginner Spoken English</td></tr>
          </table>

          <h4 style="font-size:13.5px; font-weight:700; margin-bottom:10px;">Workspace Access Log Timeline:</h4>
          <ul class="timeline-evidence" style="font-size:12px; margin-bottom:0;">
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 1:12 PM</span> - Course schedule plan mapped</li>
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 12:43 PM</span> - Enrolment activated</li>
            <li class="timeline-evidence-item"><span style="font-weight:700;">14 Aug &middot; 12:42 PM</span> - Academic access grant generated</li>
          </ul>
        </div>
      `;
    }
    tabBodyHtml = progressHtml;

  } else if (activeTab === "messages") {
    // Filter messages based on state
    const messagesToRender = state.courseWorkspaceState.activeMessages.filter(m => {
      // Hide the post-class message if class is not completed yet
      if (m.text.includes("Great work today") && !class1Approved) {
        return false;
      }
      return true;
    });

    const msgListHtml = messagesToRender.map(m => {
      const isNewBadge = (m.isNew && class1Approved) ? `<span class="badge-status status-submitted" style="font-size:9px; margin-left:4px; padding:1px 4px; background:#1a73e8; color:#fff; border:none;">New</span>` : "";
      return `
        <div style="margin-bottom:14px; text-align:${m.role === 'Trainer' ? 'left' : 'right'};">
          <div style="display:inline-block; max-width:80%; background-color:${m.role === 'Trainer' ? 'var(--color-surface-container-high)' : 'var(--color-secondary-container)'}; color:${m.role === 'Trainer' ? 'var(--color-on-surface)' : 'var(--color-on-secondary-container)'}; padding:10px 14px; border-radius:12px; font-size:13px; text-align:left;">
            <div style="font-size:10.5px; font-weight:700; color:var(--color-tertiary); margin-bottom:3px; display:flex; align-items:center; gap:4px;">
              <span>${m.sender} (${m.role}) &middot; ${m.time}</span>
              ${isNewBadge}
            </div>
            <div>${m.text}</div>
          </div>
        </div>
      `;
    }).join("");

    tabBodyHtml = `
      <div class="form-card" style="padding:16px;">
        <h3 class="form-section-title" style="margin-bottom:12px;">Course Messages & Chat</h3>
        
        <div id="workspace-msg-chatbox" style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; height:240px; overflow-y:auto; margin-bottom:16px; display:flex; flex-direction:column;">
          ${msgListHtml}
        </div>

        <div style="display:flex; gap:10px;">
          <input type="text" id="workspace-msg-input" class="form-input" style="margin-bottom:0; flex:1; height:40px;" placeholder="Type your message to trainer...">
          <button class="btn btn-primary" onclick="sendLearnerWorkspaceMessage('${enrolmentId}')" style="height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700; padding:0 20px;">Send</button>
        </div>
      </div>
    `;

  } else if (activeTab === "membership") {
    // Membership terms
    tabBodyHtml = `
      <div class="form-card">
        <h3 class="form-section-title" style="margin-bottom:12px;">Membership & Access Terms</h3>
        
        <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; font-size:13px; line-height:24px; margin-bottom:20px;">
          <div>Membership Ref: <strong>MEM-TERM-001</strong></div>
          <div>Status: <strong style="color:#137333;">Active</strong></div>
          <div>Product Term: <strong>Spoken English Live Online — 12 Classes</strong></div>
          <div>Access Grant: <strong>ACCESS-001 (Active)</strong></div>
          <div style="border-top:1px solid var(--color-outline-variant); margin-top:8px; padding-top:8px;">
            <div>Total Included: <strong>12 Classes</strong></div>
            <div>Total Used / Approved: <strong style="color:${usedClasses > 0 ? '#137333' : 'inherit'};">${usedClasses} Class${usedClasses === 1 ? '' : 'es'}</strong></div>
            <div>Remaining Balance: <strong style="color:#137333;">${remainingClasses} Classes</strong></div>
          </div>
          <div style="border-top:1px solid var(--color-outline-variant); margin-top:8px; padding-top:8px;">
            <div>Payment Reference: <strong>PAY-TXN-001 &middot; Confirmed</strong></div>
            <div>Official school Bill Receipt: <strong>IHS-REC-001</strong></div>
          </div>
        </div>

        <div style="display:flex; gap:12px;">
          <button class="btn btn-secondary" onclick="previewLearnerOfficialReceipt()" style="height:38px; font-weight:700;">View Official Receipt</button>
          ${isEnglish ? `<button class="btn btn-secondary" onclick="openEntitlementUsageModal('${enrolmentId}')" style="height:38px; font-weight:700;">View Class Usage Drawer</button>` : ''}
          <button class="btn btn-secondary" onclick="showToastAlert('Opening renewal package catalog.')" style="height:38px; font-weight:700;">View Renewal Options</button>
        </div>
      </div>
    `;
  }

  // Render notification bar if any active
  let notificationsHtml = "";
  if (class1Approved) {
    const list = [
      { id: "summary", text: "Class 1 Summary Available", icon: "🔔", action: `openClass1SummaryModal('details')` },
      { id: "homework", text: "Homework Assigned: Introduce Yourself Practice", icon: "📝", action: `setTabSelectionState('${enrolmentId}', 'homework')` },
      { id: "feedback", text: "Trainer Feedback Available for Class 1", icon: "💬", action: `openClass1SummaryModal('feedback')` }
    ];

    const activeNotifs = list.filter(n => !state.courseWorkspaceState.dismissedNotifications.includes(n.id));
    if (activeNotifs.length > 0) {
      notificationsHtml = `
        <div class="notifications-bar" style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
          ${activeNotifs.map(n => `
            <div style="background-color:#e8f0fe; border:1px solid #d2e3fc; color:#1a73e8; border-radius:6px; padding:10px 14px; display:flex; justify-content:space-between; align-items:center; font-size:12.5px; font-weight:600;" class="animate-fade-in">
              <span style="display:flex; align-items:center; gap:8px; cursor:pointer;" onclick="${n.action}">
                <span>${n.icon}</span>
                <span>${n.text}</span>
                <span class="badge-status status-submitted" style="font-size:10px; background-color:#1a73e8; color:#fff; border:none; padding:1px 6px;">New</span>
              </span>
              <button onclick="dismissLearnerNotification('${enrolmentId}', '${n.id}')" style="background:none; border:none; color:#1a73e8; cursor:pointer; font-weight:800; font-size:16px; line-height:1;">&times;</button>
            </div>
          `).join("")}
        </div>
      `;
    }
  }

  view.innerHTML = `
    <!-- Top switcher controls -->
    ${switcherHtml}
    
    <!-- Notifications -->
    ${notificationsHtml}
    
    <!-- Title header -->
    ${headerHtml}

    <!-- Tabs navigation -->
    ${tabsHtml}

    <!-- Workspace view workspace body -->
    <div id="learner-workspace-body-container">
      ${tabBodyHtml}
    </div>
  `;
};

// Toggle tab
window.setTabSelectionState = function(enrolmentId, tabId) {
  state.courseWorkspaceState.currentTab = tabId;
  window.renderLearnerCourseWorkspace(enrolmentId);
};

// Change workspace demo state
window.changeDemoCourseState = function(enrolmentId, val) {
  state.courseWorkspaceState.demoCourseState = val;
  window.renderLearnerCourseWorkspace(enrolmentId);
  showToastAlert(`Demo course state shifted to: ${val}`);
};

// Dismiss banner
window.dismissClass1Banner = function(enrolmentId) {
  state.courseWorkspaceState.class1BannerDismissed = true;
  window.renderLearnerCourseWorkspace(enrolmentId);
};

// Dismiss notification
window.dismissLearnerNotification = function(enrolmentId, id) {
  if (!state.courseWorkspaceState.dismissedNotifications.includes(id)) {
    state.courseWorkspaceState.dismissedNotifications.push(id);
  }
  window.renderLearnerCourseWorkspace(enrolmentId);
};

// Update homework status
window.updateHomeworkStatus = function(hwId, val) {
  if (state.homeworkRecords[hwId]) {
    state.homeworkRecords[hwId].status = val;
    window.renderLearnerCourseWorkspace("ENR-001");
    showToastAlert(`Homework status marked as ${val}`);
  }
};

// Open Class 1 Summary modal (learner-safe)
window.openClass1SummaryModal = function(section) {
  const highlightStyle = "border:2px solid var(--color-secondary); background-color:var(--color-surface-low); padding:12px; border-radius:8px;";
  const normalStyle = "border:1px solid var(--color-outline-variant); padding:12px; border-radius:8px; background-color:var(--color-surface-lowest);";

  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:16px;">
      
      <!-- Session Details Card -->
      <div style="${section === 'details' ? highlightStyle : normalStyle}">
        <h4 style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 8px 0;">Class 1 Details & Delivery Summary</h4>
        <table style="width:100%; border-collapse:collapse; font-size:12.5px; line-height:22px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Date & Time:</td><td style="font-weight:700; text-align:right;">18 August 2026 &middot; 7:00 PM PKT</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Trainer:</td><td style="font-weight:700; text-align:right;">Ayesha Rahman</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Attendance Outcome:</td><td style="font-weight:700; text-align:right; color:#137333;">Present</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Recorded Duration:</td><td style="font-weight:700; text-align:right;">40 minutes connected</td></tr>
          <tr><td style="color:var(--color-tertiary);">Delivery Status:</td><td style="font-weight:700; text-align:right; color:#137333;">Approved & Finalized</td></tr>
        </table>
        <div style="font-size:11px; color:var(--color-tertiary); margin-top:8px; font-style:italic;">Note: A brief connection interruption of 2 minutes was successfully resolved. Final outcome: Present.</div>
      </div>

      <!-- Syllabus Covered Card -->
      <div style="${normalStyle}">
        <h4 style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 8px 0;">What We Covered</h4>
        <ul style="margin:0; padding-left:18px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
          <li>👋 <strong>Greetings:</strong> Contextual greetings for formal/informal settings.</li>
          <li>🗣️ <strong>Introductions:</strong> Structure of a short spoken introduction.</li>
          <li>📚 <strong>Everyday vocabulary:</strong> Words for daily routines and activities.</li>
          <li>🎙️ <strong>Pronunciation practice:</strong> Correct intonation for simple questions.</li>
        </ul>
      </div>

      <!-- Trainer Feedback Card -->
      <div style="${section === 'feedback' ? highlightStyle : normalStyle}">
        <h4 style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 8px 0;">Trainer Feedback & Guidance</h4>
        <p style="font-size:13.5px; font-style:italic; margin:0 0 10px 0; color:var(--color-on-surface); padding-left:8px; border-left:3px solid var(--color-secondary);">
          "Good first class. Continue practising short introductions aloud and focus on speaking slowly and clearly."
        </p>
        <div style="margin-top:10px; border-top:1.5px dashed var(--color-outline-variant); padding-top:8px;">
          <div style="margin-bottom:6px;">🌟 <strong>What Went Well:</strong> Good listening comprehension and willingness to speak.</div>
          <div>🎯 <strong>Focus for Next Class:</strong> Sentence fluency, pronunciation consistency and speaking without prompts.</div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display:flex; gap:12px; margin-top:8px;">
        <button class="btn btn-primary" onclick="closeModal()" style="flex:1; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Back to Course</button>
        <button class="btn btn-secondary" onclick="closeModal(); setTabSelectionState('ENR-001', 'homework')" style="flex:1; height:38px;">Go to Homework</button>
      </div>

    </div>
  `;
  openModal("Spoken English — Class 1 Review & Summary", content);
};

// Open Attendance Details modal (learner-safe)
window.openAttendanceDetailsModal = function(occurrenceId) {
  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6;">
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px; margin-bottom:16px;">
        <table style="width:100%; border-collapse:collapse; font-size:13px; line-height:24px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Session Type:</td><td style="font-weight:700; text-align:right;">Regular Live 1-to-1 Class</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Schedule Slot:</td><td style="font-weight:700; text-align:right;">Tuesday, 18 Aug &middot; 7:00 PM – 7:45 PM</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Trainer Name:</td><td style="font-weight:700; text-align:right;">Ayesha Rahman</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Recorded Connected Duration:</td><td style="font-weight:700; text-align:right;">40 minutes</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Attendance Status:</td><td style="font-weight:700; text-align:right; color:#137333;">Present (Finalized)</td></tr>
          <tr><td style="color:var(--color-tertiary);">Operational Verification:</td><td style="font-weight:700; text-align:right; color:#137333;">Approved</td></tr>
        </table>
      </div>
      <p style="font-size:12px; color:var(--color-tertiary); margin-bottom:20px;">Attendance records are compiled automatically using classroom platform log times and verified manually by school staff.</p>
      <button class="btn btn-primary" onclick="closeModal()" style="width:100%; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Close Details</button>
    </div>
  `;
  openModal("Attendance Record Details — Class 1", content);
};

// Open Homework Detail modal (learner-safe)
window.openHomeworkDetailModal = function(hwId) {
  const hw = state.homeworkRecords[hwId];
  if (!hw) return;

  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:16px;">
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:16px;">
        <div style="font-size:12px; color:var(--color-tertiary); margin-bottom:4px;">${hw.type} &middot; Assigned from Class 1</div>
        <h4 style="font-size:16px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 10px 0;">${hw.title}</h4>
        
        <div style="border-top:1.5px dashed var(--color-outline-variant); padding-top:10px; margin-bottom:10px;">
          <strong>Instructions:</strong>
          <p style="margin:6px 0 0 0; color:var(--color-on-surface);">${hw.instructions}</p>
        </div>

        <table style="width:100%; border-collapse:collapse; font-size:12.5px; line-height:22px; border-top:1px solid var(--color-outline-variant); margin-top:12px; padding-top:12px;">
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Assigned By:</td><td style="font-weight:700; text-align:right;">${hw.trainer}</td></tr>
          <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Due Date Context:</td><td style="font-weight:700; text-align:right; color:#ba1a1a;">${hw.dueContext}</td></tr>
          <tr><td style="color:var(--color-tertiary);">Current Status:</td><td style="font-weight:700; text-align:right; color:${hw.status === 'Practised' ? '#137333' : '#b06000'};">${hw.status}</td></tr>
        </table>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:38px;">Back to Course</button>
        ${hw.status !== 'Practised' ? `
          <button class="btn btn-primary" onclick="closeModal(); updateHomeworkStatus('${hwId}', 'Practised');" style="flex:1.3; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Mark as Practised</button>
        ` : ''}
      </div>
    </div>
  `;
  openModal("Homework Assignment Details", content);
};

// Open Entitlement Usage Modal (learner-safe)
window.openEntitlementUsageModal = function(enrolmentId) {
  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6;">
      <h4 style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); margin:0 0 12px 0;">Class Credit Balance History</h4>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:12px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; font-weight:700; font-size:13.5px; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">
          <span>Current Active Balance:</span>
          <span style="color:#137333;">11 Classes Remaining</span>
        </div>
        <div style="font-size:11.5px; color:var(--color-tertiary);">Enrolment reference: ${enrolmentId}</div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
        <!-- Grant -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-outline-variant); padding-bottom:8px; font-size:12.5px;">
          <div>
            <div style="font-weight:700; color:var(--color-on-surface);">Opening Membership Grant</div>
            <div style="font-size:11.5px; color:var(--color-tertiary);">14 Aug 2026 &middot; Ref: MEM-TERM-001</div>
          </div>
          <div style="font-weight:800; color:#137333;">+12 Classes</div>
        </div>

        <!-- Class 1 Debit -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-outline-variant); padding-bottom:8px; font-size:12.5px;">
          <div>
            <div style="font-weight:700; color:var(--color-on-surface);">CLASS-001 Debit</div>
            <div style="font-size:11.5px; color:var(--color-tertiary);">18 Aug 2026 &middot; Approved Session Delivery &middot; Ref: ENT-DEBIT-CLASS-001</div>
          </div>
          <div style="font-weight:800; color:#ba1a1a;">-1 Class</div>
        </div>
      </div>

      <p style="font-size:11.5px; color:var(--color-tertiary); font-style:italic; margin-bottom:20px;">Note: Credits are debited only after Operations successfully reviews and finalizes the trainer session report.</p>
      
      <button class="btn btn-primary" onclick="closeModal()" style="width:100%; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Close Drawer</button>
    </div>
  `;
  openModal("Membership Entitlement Usage Drawer", content);
};

// Send message locally
window.sendLearnerWorkspaceMessage = function(enrolmentId) {
  const input = document.getElementById("workspace-msg-input");
  if (!input) return;

  const txt = input.value.trim();
  if (!txt) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  
  state.courseWorkspaceState.activeMessages.push({
    sender: "Ali Khan",
    role: "Learner",
    text: txt,
    time: `14 Aug · ${timeStr}`
  });

  input.value = "";
  window.renderLearnerCourseWorkspace(enrolmentId);

  // Auto response timer
  setTimeout(() => {
    state.courseWorkspaceState.activeMessages.push({
      sender: "Ayesha Rahman",
      role: "Trainer",
      text: "I received your note and will review it shortly. See you in our next scheduled class!",
      time: `14 Aug · ${timeStr}`
    });
    window.renderLearnerCourseWorkspace(enrolmentId);
  }, 1000);
};

// View official receipt simulator
window.previewLearnerOfficialReceipt = function() {
  if (window.previewOfficialReviewReceipt) {
    window.previewOfficialReviewReceipt("IHS-REC-001", "Ali Khan", "Ali Khan", "Spoken English Bootcamp", "15,000", "TXN-4587291");
  } else {
    showToastAlert("Previewing official bill receipt IHS-REC-001");
  }
};

// Join live class router
window.launchLearnerWorkspaceJoin = function(enrolmentId) {
  const demo = state.courseWorkspaceState.demoJoinState;
  
  if (demo === "Classroom Error") {
    // Open Classroom Error Modal
    const content = `
      <div style="text-align:center; padding:12px 0;">
        <div style="font-size:36px; margin-bottom:12px;">⚠️</div>
        <h3 style="font-family:var(--font-family-headings); font-size:18px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:8px;">Classroom Temporarily Unavailable</h3>
        <p style="font-size:13px; color:var(--color-tertiary); margin-bottom:20px;">The online classroom server is experiencing connectivity issues. Please try again in a few minutes. Note: your scheduled credits have not been debited.</p>
        
        <div style="display:flex; gap:12px; max-width:320px; margin:0 auto;">
          <button class="btn btn-primary" onclick="closeModal(); showToastAlert('Retrying server connection...')" style="flex:1; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Retry Connection</button>
          <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:38px;">Close</button>
        </div>
      </div>
    `;
    openModal("Connection Failure", content);
  } else {
    // Success redirect to Screen 16 live classroom placeholder (starts with #learner/trials/OCC-TRIAL-001/classroom or similar)
    window.location.hash = "#learner/trials/CLASS-101/classroom";
  }
};

// Detail modal drawer for schedule list
window.openLearnerClassDetailsModal = function(id, date, time, trainer, status) {
  const content = `
    <div style="text-align:left; font-size:13px; line-height:20px;">
      <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Session ID:</td><td style="padding:5px 0; font-weight:700; text-align:right; font-family:monospace;">${id}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Date:</td><td style="padding:5px 0; font-weight:700; text-align:right;">${date}</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Time Slot:</td><td style="padding:5px 0; font-weight:700; text-align:right;">${time} PKT</td></tr>
        <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:5px 0; color:var(--color-tertiary);">Trainer:</td><td style="padding:5px 0; font-weight:700; text-align:right;">${trainer}</td></tr>
        <tr><td style="padding:5px 0; color:var(--color-tertiary);">Status:</td><td style="padding:5px 0; font-weight:700; text-align:right; color:#137333;">${status}</td></tr>
      </table>

      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:16px;">The join button will activate on your dashboard 10 minutes prior to the start time.</p>
      
      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="closeModal()" style="flex:1.2; height:38px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:700;">Close</button>
        <button class="btn btn-secondary" onclick="closeModal(); showToastAlert('Help request ticket submitted.')" style="flex:1; height:38px;">Request Help</button>
      </div>
    </div>
  `;
  openModal(`Spoken English — Class ${id.replace("CLASS-", "")}`, content);
};

// ==========================================================================
// Screen 17 - Trainer Post-Class Report / Paid Class
// ==========================================================================

window.renderTrainerPaidClassReport = function(occurrenceId) {
  const reportView = document.getElementById("trainer-class-report-view");
  if (!reportView) return;

  // Initialize report if not present
  if (!state.trainerReports[occurrenceId]) {
    state.trainerReports[occurrenceId] = {
      id: `REPORT-CLASS-${Math.floor(100 + Math.random() * 900)}`,
      occurrenceId: occurrenceId,
      enrolmentId: "ENR-001",
      membershipId: "MEM-TERM-001",
      trainer: "Ayesha Rahman",
      learner: "Ali Khan",
      course: "Spoken English",
      level: "Beginner",
      classNumber: "1 of 12",
      date: "18 Aug 2026",
      time: "7:00 PM – 7:45 PM",
      duration: "45 min",
      format: "1-to-1",
      classType: "Regular Paid Class",
      reportStatus: "Draft", // Draft | Submitted | Correction Requested
      deliveryReviewStatus: "Pending", // Pending | Approved | Correction Requested
      version: 1,
      isEditingCorrection: false,
      
      // Core report fields
      mainTopic: "",
      topicsCovered: [],
      syllabusCoverage: {
        "Greetings & Introductions": "Not Covered",
        "Basic Sentence Formation": "Not Covered",
        "Everyday Vocabulary": "Not Covered",
        "Pronunciation Practice": "Not Covered",
        "Speaking Confidence": "Not Covered"
      },
      progressNotes: "",
      learnerFeedback: { strengths: "", improvements: "", recommendations: "" },
      homework: { enabled: false, title: "", instructions: "", dueDate: "Before next class", type: "Practice" },
      learningObjectives: {
        "Introduce yourself clearly": "Needs More Practice",
        "Ask and answer basic personal questions": "Needs More Practice",
        "Use common greetings correctly": "Needs More Practice"
      },
      resources: [
        { name: "Beginner Speaking Guide", type: "PDF", attached: false },
        { name: "Pronunciation Basics", type: "Audio", attached: false },
        { name: "Introduction Vocabulary Sheet", type: "Worksheet", attached: false }
      ],
      generalNotes: "",
      privateNotes: "",
      sessionIssues: "Learner connection issue",
      sessionIssuesDetails: "Learner disconnected for approximately three minutes and rejoined.",
      nextClassPlan: "",
      teachingContinuityNote: "",
      
      // Correction/attendance fields
      operationsNote: "",
      proposedAttendance: null,
      attendanceCorrectionReason: "",
      history: [
        { time: "18 Aug · 7:45 PM", text: "Class ended. Reconciled Attendance outcome: Present (40 minutes connected)" }
      ],
      previousVersion: null
    };
  }

  const report = state.trainerReports[occurrenceId];

  // Determine read-only or correction mode
  const isReadOnly = report.reportStatus === "Submitted" || (report.reportStatus === "Correction Requested" && !report.isEditingCorrection);
  const isCorrectionMode = report.reportStatus === "Correction Requested" && report.isEditingCorrection;

  // Build topics list tags
  const topicsHtml = report.topicsCovered.map((t, idx) => `
    <span class="tag-pill">
      ${t}
      ${!isReadOnly ? `<button class="tag-remove-btn" onclick="removePaidReportTopic('${occurrenceId}', ${idx})">✕</button>` : ''}
    </span>
  `).join("");

  // Syllabus list
  const syllabusItems = [
    "Greetings & Introductions",
    "Basic Sentence Formation",
    "Everyday Vocabulary",
    "Pronunciation Practice",
    "Speaking Confidence"
  ];
  const syllabusHtml = syllabusItems.map(item => {
    const val = report.syllabusCoverage[item] || "Not Covered";
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed var(--color-outline-variant);">
        <span style="font-size:13.5px; font-weight:600; color:var(--color-on-tertiary-fixed);">${item}</span>
        <div class="segmented-control">
          <button class="segmented-btn ${val === 'Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setPaidSyllabusCoverage('${occurrenceId}', '${item}', 'Covered')">Covered</button>
          <button class="segmented-btn ${val === 'Partially Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setPaidSyllabusCoverage('${occurrenceId}', '${item}', 'Partially Covered')">Partially</button>
          <button class="segmented-btn ${val === 'Not Covered' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setPaidSyllabusCoverage('${occurrenceId}', '${item}', 'Not Covered')">Not</button>
          <button class="segmented-btn ${val === 'In Progress' ? 'active' : ''} ${isReadOnly ? 'disabled' : ''}" onclick="setPaidSyllabusCoverage('${occurrenceId}', '${item}', 'In Progress')">In Progress</button>
        </div>
      </div>
    `;
  }).join("");

  // Learning Objectives status html
  const objectiveItems = [
    "Introduce yourself clearly",
    "Ask and answer basic personal questions",
    "Use common greetings correctly"
  ];
  const objectivesHtml = objectiveItems.map(item => {
    const val = report.learningObjectives[item] || "Needs More Practice";
    return `
      <div style="display:flex; flex-direction:column; gap:6px; padding:10px 0; border-bottom:1px solid var(--color-outline-variant);">
        <span style="font-size:13px; font-weight:600; color:var(--color-on-surface);">${item}</span>
        <div style="display:flex; gap:6px;">
          <button class="badge-status ${val === 'Achieved' ? 'status-ready' : ''}" style="font-size:11px; padding:3px 8px; cursor: ${isReadOnly ? 'default' : 'pointer'}; opacity: ${val === 'Achieved' ? 1 : 0.45};" onclick="${isReadOnly ? '' : `togglePaidObjectiveStatus('${occurrenceId}', '${item}', 'Achieved')`}">Achieved</button>
          <button class="badge-status ${val === 'Partially Achieved' ? 'status-submitted' : ''}" style="font-size:11px; padding:3px 8px; cursor: ${isReadOnly ? 'default' : 'pointer'}; opacity: ${val === 'Partially Achieved' ? 1 : 0.45};" onclick="${isReadOnly ? '' : `togglePaidObjectiveStatus('${occurrenceId}', '${item}', 'Partially Achieved')`}">Partially</button>
          <button class="badge-status ${val === 'Needs More Practice' ? 'status-closed' : ''}" style="font-size:11px; padding:3px 8px; cursor: ${isReadOnly ? 'default' : 'pointer'}; opacity: ${val === 'Needs More Practice' ? 1 : 0.45};" onclick="${isReadOnly ? '' : `togglePaidObjectiveStatus('${occurrenceId}', '${item}', 'Needs More Practice')`}">Needs Practice</button>
        </div>
      </div>
    `;
  }).join("");

  // Resources checkboxes list
  const resourcesHtml = report.resources.map((res, idx) => `
    <label style="display:flex; align-items:center; gap:8px; font-size:13px; color:var(--color-on-surface-variant); cursor:pointer;">
      <input type="checkbox" style="accent-color:var(--color-secondary);" ${res.attached ? 'checked' : ''} ${isReadOnly ? 'disabled' : ''} onchange="togglePaidReportResource('${occurrenceId}', ${idx})">
      <span>${res.name} <span style="font-size:10.5px; opacity:0.8; background:var(--color-surface-low); padding:1px 4px; border-radius:2px;">${res.type}</span></span>
    </label>
  `).join("");

  // Timeline events markup
  const timelineHtml = report.history.map(h => `
    <li class="timeline-evidence-item">
      <span class="activity-time">${h.time}</span>
      <span>${h.text}</span>
    </li>
  `).join("");

  // Status Badge
  let badgeClass = "status-submitted"; // default Draft
  let statusText = "Draft";
  if (report.reportStatus === "Submitted") {
    badgeClass = "status-ready";
    statusText = "Submitted";
  } else if (report.reportStatus === "Correction Requested") {
    badgeClass = "status-closed";
    statusText = "Correction Requested";
  }

  // Setup connection logs based on demo states
  let isTrainerNoShow = (report.sessionIssues === "Trainer No-show" || report.demoState === "Trainer No-show");
  let isLearnerNoShow = (report.sessionIssues === "Learner No-show" || report.demoState === "Learner No-show");
  let isPartialDelivery = (report.demoState === "Partial Delivery");
  let isTechnicalException = (report.demoState === "Technical Exception");

  let trainerJoinVal = isTrainerNoShow ? "No join event" : "6:58 PM";
  let learnerJoinVal = isLearnerNoShow ? "No join event" : "7:01 PM";
  let learnerDisconnectVal = (isLearnerNoShow || isTrainerNoShow) ? "N/A" : "7:18 PM";
  let learnerReconnectVal = (isLearnerNoShow || isTrainerNoShow) ? "N/A" : "7:21 PM";
  let learnerLeftVal = isLearnerNoShow ? "No join event" : (isPartialDelivery ? "7:22 PM" : "7:44 PM");
  let trainerLeftVal = isTrainerNoShow ? "No join event" : "7:45 PM";

  let scheduledDurationVal = "45 min";
  let learnerConnectedVal = isLearnerNoShow ? "0 min" : (isPartialDelivery ? "21 min" : "40 min");
  let trainerConnectedVal = isTrainerNoShow ? "0 min" : "47 min";
  let systemOutcomeVal = isLearnerNoShow ? "Absent (No-Show)" : (isTrainerNoShow ? "N/A (Trainer Absent)" : "Present");

  reportView.innerHTML = `
    <!-- Top developer simulation bar -->
    <div class="dev-sim-panel" style="margin-bottom: var(--spacing-md); flex-wrap:wrap; gap:6px;">
      <span style="color:#e2e8f0; margin-right:4px; font-size:12px; font-weight:700;">Simulate Screen 17 States:</span>
      <button class="dev-sim-btn ${(!report.demoState || report.demoState === 'Draft') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Draft')">Draft</button>
      <button class="dev-sim-btn ${(report.demoState === 'Evidence Reconciled') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Evidence Reconciled')">Evidence Reconciled</button>
      <button class="dev-sim-btn ${(report.demoState === 'Attendance Correction Requested') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Attendance Correction Requested')">Correction Requested (Correction Mode)</button>
      <button class="dev-sim-btn ${(report.demoState === 'Submitted') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Submitted')">Submitted (Read-Only)</button>
      <button class="dev-sim-btn ${(report.demoState === 'Correction Requested') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Correction Requested')">Ops Correction Requested Banner</button>
      <button class="dev-sim-btn ${(report.demoState === 'Corrected Version') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Corrected Version')">Corrected Version (v2 Draft)</button>
      <button class="dev-sim-btn ${(report.demoState === 'Learner No-show') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Learner No-show')">Learner No-show</button>
      <button class="dev-sim-btn ${(report.demoState === 'Trainer No-show') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Trainer No-show')">Trainer No-show</button>
      <button class="dev-sim-btn ${(report.demoState === 'Partial Delivery') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Partial Delivery')">Partial Delivery (22 min)</button>
      <button class="dev-sim-btn ${(report.demoState === 'Technical Exception') ? 'active' : ''}" onclick="simulatePaidReportState('${occurrenceId}', 'Technical Exception')">Technical Exception</button>
    </div>

    <!-- Back Navigation link -->
    <div style="margin-bottom:var(--spacing-md);">
      <a href="#learner/courses/ENR-001" class="back-link" style="font-size:13px; font-weight:700; color:var(--color-secondary); display:inline-flex; align-items:center; gap:6px;">
        ← Back to Course Workspace
      </a>
    </div>

    <!-- Main Header -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--spacing-lg); border-bottom:1px solid var(--color-outline-variant); padding-bottom:var(--spacing-md);">
      <div>
        <h1 style="font-family:var(--font-family-headings); font-size:28px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">Submit Class Report</h1>
        <p style="font-size:13.5px; color:var(--color-tertiary);">
          <strong>Spoken English</strong> &middot; Class occurrence ref: <strong style="font-family:monospace;">${occurrenceId}</strong> &middot; Learner: <strong>Ali Khan</strong>
        </p>
      </div>
      <div style="text-align:right;">
        <span class="badge-status ${badgeClass}" style="font-size:11px; padding:4px 8px;">
          ${statusText}
        </span>
        <div style="font-size:11.5px; color:var(--color-tertiary); margin-top:4px;">Report Version: <strong>v${report.version}</strong></div>
      </div>
    </div>

    <!-- Layout Grid -->
    <div class="report-workspace-grid">
      
      <!-- Left Column: Report inputs -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg);">
        
        <!-- Trainer No Show Alert Banner -->
        ${isTrainerNoShow ? `
          <div class="banner-changes-requested animate-fade-in" style="background-color:rgba(186, 26, 26, 0.08); border-color:#ba1a1a; color:#ba1a1a;">
            <h4 style="color:#ba1a1a; font-weight:800;">⚠️ Delivery Exception: Trainer Attendance Evidence Missing</h4>
            <p style="font-size:13px; margin-top:4px; margin-bottom:12px;">You cannot submit a delivered class report because the platform did not detect your attendance. If this is incorrect, contact Operations immediately.</p>
            <button class="btn btn-secondary" onclick="showToastAlert('Help request ticket submitted.')" style="border-color:#ba1a1a; color:#ba1a1a; font-size:12px; height:32px; padding:0 12px; background:white;">Contact Operations</button>
          </div>
        ` : ''}

        <!-- Technical Exception / Partial Delivery Warnings -->
        ${isTechnicalException ? `
          <div style="background-color:rgba(240,217,122,0.1); border:1.5px solid var(--color-primary); border-radius:8px; padding:12px 16px; font-size:13px; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">
            <strong style="color:var(--color-primary);">⚡ Technical Exception Warning</strong><br>
            A class failure exception has been flagged due to platform issues. Submitting this report will notify Operations to review if student entitlement credits should be preserved.
          </div>
        ` : ''}

        ${isPartialDelivery ? `
          <div style="background-color:rgba(119, 88, 58, 0.08); border:1.5px solid var(--color-secondary); border-radius:8px; padding:12px 16px; font-size:13px; color:var(--color-on-tertiary-fixed); margin-bottom:4px;">
            <strong style="color:var(--color-secondary);">⚠️ Partial Delivery Warning (22 min connected)</strong><br>
            The learner was connected for less than half of the scheduled duration. Submitting this report requires explaining the reason below. Operations will determine final entitlement debit/trainer earnings.
          </div>
        ` : ''}

        <!-- Operations Changes Requested Alert Banner -->
        ${report.reportStatus === 'Correction Requested' ? `
          <div class="banner-changes-requested animate-fade-in">
            <h4 style="display:flex; align-items:center; gap:6px;">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Operations Delivery Review: Correction Requested
            </h4>
            <p style="margin-bottom:12px; font-weight:600; font-style:italic;">"${report.operationsNote || 'Please clarify syllabus coverage after the learner\'s reconnection.'}"</p>
            <div style="font-size:11.5px; opacity:0.85; display:flex; justify-content:space-between;">
              <span>Reviewed by: <strong>Operations Manager</strong></span>
              <span>Date: <strong>18 Aug 2026 · 8:15 PM PKT</strong></span>
            </div>
            ${isReadOnly ? `
              <button class="btn btn-primary" onclick="enablePaidCorrectionEdit('${occurrenceId}')" style="margin-top:12px; height:34px; font-size:12px; background-color:#ba1a1a; border-color:#ba1a1a; color:white;">
                Create Corrected Version
              </button>
            ` : ''}
          </div>
        ` : ''}

        <!-- Preserve Version 1 alert -->
        ${report.version > 1 ? `
          <div class="form-card" style="padding:12px; background:rgba(240, 217, 122, 0.08); border-color:rgba(119, 88, 58, 0.2); display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-size:12.5px; font-weight:700; color:var(--color-secondary);">Version 1 History Log is preserved</span>
            <button class="btn btn-secondary" onclick="viewPreviousPaidReportVersion('${occurrenceId}')" style="height:28px; font-size:11.5px; padding:0 10px;">View Version 1</button>
          </div>
        ` : ''}

        <!-- Active Version Edit mode indicator -->
        ${isCorrectionMode ? `
          <div style="background-color:rgba(240, 217, 122, 0.1); border:1px solid var(--color-secondary); border-radius:6px; padding:10px 14px; font-size:12.5px; font-weight:700; color:var(--color-secondary); margin-bottom:4px;">
            ⚡ Mode: Editing Corrected Report Version 2 (Draft)
          </div>
        ` : ''}

        <!-- Section 1: Topics & Syllabus -->
        <div class="form-card">
          <h3 class="form-section-title">1. Topics & Syllabus Coverage</h3>
          
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Main Lesson Topic <span style="color:red;">*</span></label>
            <input type="text" id="paid-report-main-topic" class="form-input" placeholder="e.g. Greetings, introductions and simple everyday conversation" value="${report.mainTopic}" ${isReadOnly ? 'readonly' : ''}>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">Specific Topics Covered <span style="color:red;">*</span></label>
            ${!isReadOnly ? `
              <div style="display:flex; gap:8px;">
                <input type="text" id="paid-report-topic-input" class="form-input" placeholder="Type a topic and press Add" onkeypress="handlePaidTopicInputEnter(event, '${occurrenceId}')">
                <button class="btn btn-secondary" onclick="addPaidReportTopic('${occurrenceId}')" style="height:38px;">Add</button>
              </div>
            ` : ''}
            <div class="tags-container" id="paid-report-topics-tags-container" style="margin-top:8px;">
              ${topicsHtml || '<span style="font-size:12px; color:var(--color-tertiary); font-style:italic;">No topics added yet.</span>'}
            </div>
          </div>

          <!-- Syllabus status -->
          <div class="form-group" style="margin-top:var(--spacing-lg);">
            <label class="form-label" style="font-weight:700; margin-bottom:4px;">Syllabus Coverage Status</label>
            <div style="display:flex; flex-direction:column; gap:4px;">
              ${syllabusHtml}
            </div>
          </div>
        </div>

        <!-- Section 2: Learning Objectives & Progress -->
        <div class="form-card">
          <h3 class="form-section-title">2. Learning Objectives & Progress Notes</h3>
          
          <div class="form-group" style="margin-bottom:var(--spacing-lg);">
            <label class="form-label" style="font-weight:700; margin-bottom:4px;">Learning Objectives Achieved</label>
            <div style="display:flex; flex-direction:column; gap:4px;">
              ${objectivesHtml}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Learner Progress Notes <span style="color:red;">*</span></label>
            <textarea id="paid-report-progress-notes" class="form-input" style="height:100px; line-height:20px;" placeholder="Describe the learner's participation, understanding and progress during the session..." ${isReadOnly ? 'readonly' : ''}>${report.progressNotes}</textarea>
          </div>
        </div>

        <!-- Section 3: Strengths, Areas & Feedback -->
        <div class="form-card">
          <h3 class="form-section-title">3. Student Feedback & Performance</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Learner Strengths <span style="color:red;">*</span></label>
              <textarea id="paid-report-feedback-strengths" class="form-input" style="height:80px; line-height:20px;" placeholder="e.g. Good listening comprehension..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.strengths}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight:700;">Areas to Improve <span style="color:red;">*</span></label>
              <textarea id="paid-report-feedback-improvements" class="form-input" style="height:80px; line-height:20px;" placeholder="e.g. Fluency and pronunciation consistency..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.improvements}</textarea>
            </div>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">Feedback for Learner (Visible to Student) <span style="color:red;">*</span></label>
            <textarea id="paid-report-feedback-recommends" class="form-input" style="height:70px; line-height:20px;" placeholder="Feedback will appear in the learner workspace after approval..." ${isReadOnly ? 'readonly' : ''}>${report.learnerFeedback.recommendations}</textarea>
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md); background-color:rgba(197, 34, 31, 0.04); border:1px solid rgba(197, 34, 31, 0.15); border-radius:6px; padding:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <label class="form-label" style="font-weight:700; color:#ba1a1a; margin-bottom:0;">Internal Note (Staff Only)</label>
              <span style="font-size:9.5px; color:#ba1a1a; font-weight:800; border:1px solid #ba1a1a; padding:1px 4px; border-radius:2px; text-transform:uppercase;">Staff View Only</span>
            </div>
            <textarea id="paid-report-private-notes" class="form-input" style="height:70px; border-color:rgba(197, 34, 31, 0.15);" placeholder="Private commentary - never shared with the learner..." ${isReadOnly ? 'readonly' : ''}>${report.privateNotes}</textarea>
          </div>
        </div>

        <!-- Section 4: Homework & Resources -->
        <div class="form-card">
          <h3 class="form-section-title">4. Homework Assignment & Resources</h3>
          
          <div style="margin-bottom:var(--spacing-md);">
            <label style="display:inline-flex; align-items:center; gap:8px; font-weight:700; font-size:13.5px; cursor:pointer;">
              <input type="checkbox" id="paid-report-homework-enabled" style="accent-color:var(--color-secondary);" ${report.homework.enabled ? 'checked' : ''} ${isReadOnly ? 'disabled' : ''} onchange="togglePaidReportHomeworkFields('${occurrenceId}')">
              <span>Assign Homework to Learner</span>
            </label>
          </div>

          <div id="paid-report-homework-fields-block" style="display:${report.homework.enabled ? 'block' : 'none'}; border-left:3px solid var(--color-secondary); padding-left:14px; margin-bottom:var(--spacing-md);">
            <div class="form-group">
              <label class="form-label">Homework Title</label>
              <input type="text" id="paid-report-homework-title" class="form-input" value="${report.homework.title}" placeholder="e.g. Introduce Yourself Practice" ${isReadOnly ? 'readonly' : ''}>
            </div>
            <div class="form-group" style="margin-top:var(--spacing-sm);">
              <label class="form-label">Instructions</label>
              <textarea id="paid-report-homework-instructions" class="form-input" style="height:70px;" placeholder="Describe homework task..." ${isReadOnly ? 'readonly' : ''}>${report.homework.instructions}</textarea>
            </div>
            <div class="form-row" style="margin-top:var(--spacing-sm);">
              <div class="form-group">
                <label class="form-label">Due Date</label>
                <input type="text" id="paid-report-homework-due" class="form-input" value="${report.homework.dueDate || 'Before next class'}" placeholder="e.g. Before next class" ${isReadOnly ? 'readonly' : ''}>
              </div>
              <div class="form-group">
                <label class="form-label">Type</label>
                <select id="paid-report-homework-type" class="form-input" style="height:38px;" ${isReadOnly ? 'disabled' : ''}>
                  <option value="Practice" ${report.homework.type === 'Practice' ? 'selected' : ''}>Practice</option>
                  <option value="Reading" ${report.homework.type === 'Reading' ? 'selected' : ''}>Reading</option>
                  <option value="Writing" ${report.homework.type === 'Writing' ? 'selected' : ''}>Writing</option>
                  <option value="Audio Recording" ${report.homework.type === 'Audio Recording' ? 'selected' : ''}>Audio Recording</option>
                </select>
              </div>
            </div>

            <!-- Homework Preview widget -->
            <div style="margin-top:12px; background:var(--color-surface-container-low); padding:10px; border-radius:6px; border:1px solid var(--color-outline-variant);">
              <div style="font-size:10.5px; font-weight:800; color:var(--color-tertiary); text-transform:uppercase; margin-bottom:4px;">Learner Workspace Preview:</div>
              <div style="font-size:12.5px; font-weight:700; color:var(--color-on-tertiary-fixed);">${report.homework.title || 'Introduce Yourself Practice'}</div>
              <div style="font-size:11px; color:var(--color-tertiary);">Due: ${report.homework.dueDate || 'Before next class'}</div>
              <div style="font-size:11.5px; color:#ba1a1a; font-weight:700; margin-top:4px;">Status: <span style="background:var(--color-surface-low); padding:1px 6px; border-radius:3px;">Pending Review Publication</span></div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight:700; margin-bottom:6px;">Select Shared Resources</label>
            <div style="display:flex; flex-direction:column; gap:8px; background:var(--color-surface-low); padding:10px; border-radius:6px;">
              ${resourcesHtml}
            </div>
            ${!isReadOnly ? `
              <button class="btn btn-secondary" onclick="addMockPaidReportResource('${occurrenceId}')" style="height:32px; font-size:12px; margin-top:8px; padding:0 12px;">+ Attach Resource</button>
            ` : ''}
          </div>
        </div>

        <!-- Section 5: Session Issues & Continuity -->
        <div class="form-card">
          <h3 class="form-section-title">5. Technical issues & Continuity Plan</h3>
          
          <div class="form-group">
            <label class="form-label" style="font-weight:700;">Session Issues <span style="color:red;">*</span></label>
            <select id="paid-report-session-issues" class="form-input" style="height:38px;" ${isReadOnly ? 'disabled' : ''} onchange="togglePaidReportIssueDetails('${occurrenceId}')">
              <option value="None" ${report.sessionIssues === 'None' ? 'selected' : ''}>✓ No issues</option>
              <option value="Learner connection issue" ${report.sessionIssues === 'Learner connection issue' ? 'selected' : ''}>Learner connection issue</option>
              <option value="Trainer connection issue" ${report.sessionIssues === 'Trainer connection issue' ? 'selected' : ''}>Trainer connection issue</option>
              <option value="Audio issue" ${report.sessionIssues === 'Audio issue' ? 'selected' : ''}>Audio issue</option>
              <option value="Video issue" ${report.sessionIssues === 'Video issue' ? 'selected' : ''}>Video issue</option>
              <option value="Classroom/provider issue" ${report.sessionIssues === 'Classroom/provider issue' ? 'selected' : ''}>Classroom/provider issue</option>
              <option value="Learner Late" ${report.sessionIssues === 'Learner Late' ? 'selected' : ''}>Learner Late</option>
              <option value="Other" ${report.sessionIssues === 'Other' ? 'selected' : ''}>Other Issue</option>
            </select>
          </div>

          <div id="paid-report-issue-details-block" style="display:${report.sessionIssues !== 'None' ? 'block' : 'none'}; margin-top:var(--spacing-sm);">
            <div class="form-group">
              <label class="form-label">Issue Details</label>
              <textarea id="paid-report-session-issues-details" class="form-input" style="height:70px;" placeholder="Describe platform or network disruption..." ${isReadOnly ? 'readonly' : ''}>${report.sessionIssuesDetails}</textarea>
            </div>
            ${report.sessionIssues === 'Learner connection issue' || report.sessionIssues === 'Classroom/provider issue' ? `
              <div style="font-size:11.5px; color:var(--color-primary); background:rgba(240,217,122,0.1); padding:8px; border-radius:4px; margin-top:8px;">
                💡 <em>If this issue materially affected class participation or delivery duration, please request an <strong>attendance correction</strong> in the sidebar.</em>
              </div>
            ` : ''}
          </div>

          <div class="form-group" style="margin-top:var(--spacing-md);">
            <label class="form-label" style="font-weight:700;">General notes</label>
            <textarea id="paid-report-general-notes" class="form-input" style="height:70px;" placeholder="e.g. Session completed successfully..." ${isReadOnly ? 'readonly' : ''}>${report.generalNotes}</textarea>
          </div>

          <div class="form-row" style="margin-top:var(--spacing-md);">
            <div class="form-group">
              <label class="form-label">Next Class Plan</label>
              <textarea id="paid-report-next-class" class="form-input" style="height:70px;" placeholder="e.g. Review introductions, start everyday questions..." ${isReadOnly ? 'readonly' : ''}>${report.nextClassPlan}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Continuity Note (Internal Only)</label>
              <textarea id="paid-report-continuity" class="form-input" style="height:70px;" placeholder="e.g. Begin with 5 minutes pronunciation warm-up..." ${isReadOnly ? 'readonly' : ''}>${report.teachingContinuityNote}</textarea>
            </div>
          </div>
        </div>

        <!-- Form Submission Button Bar -->
        <div style="display:flex; gap:12px; margin-bottom:40px;">
          ${!isReadOnly ? `
            ${isTrainerNoShow ? `
              <button class="btn btn-primary" disabled style="flex:2; height:44px; opacity:0.5; background-color:#ba1a1a; border-color:#ba1a1a; color:white; cursor:not-allowed;">
                Submission Blocked (No-Show)
              </button>
            ` : `
              <button class="btn btn-primary" onclick="submitPaidTrainerReport('${occurrenceId}')" style="flex:2; height:44px; font-weight:800; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">
                ${isCorrectionMode ? 'Resubmit Corrected Report' : 'Submit for Review'}
              </button>
            `}
            <button class="btn btn-secondary" onclick="savePaidTrainerReportDraft('${occurrenceId}')" style="flex:1; height:44px; font-weight:700;">
              Save Draft
            </button>
          ` : `
            <button class="btn btn-secondary" onclick="window.location.hash='#staff/live-classes'" style="width:100%; height:44px;">
              Back to My Classes
            </button>
          `}
        </div>

      </div>

      <!-- Right Column: Reconciliations & warnings -->
      <div style="display:flex; flex-direction:column; gap:var(--spacing-lg); position:sticky; top:100px;">
        
        <!-- Class details summary card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Class Details</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.learner}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Course:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.course}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Level:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.level}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Class Number:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.classNumber}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Date:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.date}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Scheduled:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.time} PKT</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Duration:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.duration}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Format:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${report.format}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Enrolment:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${report.enrolmentId}</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Class Type:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-primary);">${report.classType}</td></tr>
          </table>
        </div>

        <!-- Membership Context card -->
        <div class="form-card" style="padding:16px; border-left:3px solid var(--color-primary);">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Membership Context</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:12px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Membership ID:</td><td style="padding:6px 0; font-weight:700; text-align:right; font-family:monospace;">${report.membershipId}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Status:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:#137333;">Active</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Classes Included:</td><td style="padding:6px 0; font-weight:700; text-align:right;">12</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Used Before Class:</td><td style="padding:6px 0; font-weight:700; text-align:right;">0</td></tr>
            <tr><td style="padding:6px 0; color:var(--color-tertiary);">Remaining Before Review:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">12</td></tr>
          </table>
          <p style="font-size:11px; line-height:16px; color:var(--color-tertiary); margin:0;">
            ℹ️ <em>Submitting this report does not consume a class. Entitlement effects are processed after delivery review.</em>
          </p>
        </div>

        <!-- Attendance Evidence card -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Connection Evidence</h3>
          <table style="width:100%; font-size:12.5px; border-collapse:collapse; margin-bottom:12px;">
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Joined:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${trainerJoinVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Joined:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${learnerJoinVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Disconnect:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${learnerDisconnectVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Reconnect:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${learnerReconnectVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Left:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${learnerLeftVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Left:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${trainerLeftVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Scheduled Duration:</td><td style="padding:6px 0; font-weight:700; text-align:right;">${scheduledDurationVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Learner Connected:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${learnerConnectedVal}</td></tr>
            <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="padding:6px 0; color:var(--color-tertiary);">Trainer Connected:</td><td style="padding:6px 0; font-weight:700; text-align:right; color:var(--color-secondary);">${trainerConnectedVal}</td></tr>
            <tr>
              <td style="padding:6px 0; color:var(--color-tertiary);">Evidence Status:</td>
              <td style="padding:6px 0; font-weight:700; text-align:right;">
                <span class="badge-status status-ready" style="font-size:9.5px; padding:1px 6px;">Reconciled</span>
              </td>
            </tr>
          </table>

          <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:10px 12px; display:flex; flex-direction:column; gap:4px; margin-bottom:10px;">
            <div style="font-size:11.5px; color:var(--color-tertiary);">Reconciled System Attendance:</div>
            <div style="font-size:14px; font-weight:800; color:var(--color-on-tertiary-fixed); display:flex; justify-content:space-between; align-items:center;">
              <span>Outcome: <strong>${systemOutcomeVal}</strong></span>
              <span style="font-size:9px; background:#137333; color:white; padding:1px 4px; border-radius:2px;">Reconciled</span>
            </div>
            ${report.proposedAttendance ? `
              <div style="margin-top:6px; border-top:1px solid var(--color-outline-variant); padding-top:6px; font-size:11.5px; color:#ba1a1a; line-height:16px;">
                <strong>Proposed Correction:</strong> ${report.proposedAttendance}<br>
                <strong>Reason:</strong> "${report.attendanceCorrectionReason}"<br>
                <strong>Status:</strong> <span style="background:var(--color-surface-low); padding:1px 4px; border-radius:2px; font-weight:800;">Pending Ops Review</span>
              </div>
            ` : ''}
          </div>

          ${(!isReadOnly && !isTrainerNoShow) ? `
            <button class="btn btn-secondary" onclick="openPaidAttendanceCorrectionModal('${occurrenceId}')" style="width:100%; height:32px; font-size:12px;">
              Request Attendance Correction
            </button>
          ` : ''}
        </div>

        <!-- Downstream effects warnings -->
        <div class="form-card" style="padding:16px; border-top:3px solid #ba1a1a;">
          <h3 class="form-section-title" style="font-size:13.5px; color:#ba1a1a; margin-bottom:10px;">Pending Academic Effects</h3>
          <ul style="margin:0; padding-left:16px; font-size:12px; line-height:18px; color:var(--color-on-surface-variant); display:flex; flex-direction:column; gap:6px;">
            <li><strong>Class Credit debit:</strong> <span style="color:#ba1a1a; font-weight:700;">No Debit (Used: 0)</span> until Operations reviews.</li>
            <li><strong>Learning Progress:</strong> <span style="color:#ba1a1a; font-weight:700;">0% Milestone</span> (will update after approval).</li>
            <li><strong>Trainer Earnings:</strong> <span style="color:#ba1a1a; font-weight:700;">Not Created</span>. Generated from approved delivery reviews.</li>
          </ul>
        </div>

        <!-- Report Activity Timeline -->
        <div class="form-card" style="padding:16px;">
          <h3 class="form-section-title" style="font-size:14px; margin-bottom:12px;">Timeline & Activity</h3>
          <ul class="timeline-evidence">
            ${timelineHtml}
          </ul>
        </div>

      </div>

    </div>
  `;
};

// 1. Topic tags add/remove for paid report
window.addPaidReportTopic = function(occurrenceId) {
  const input = document.getElementById("paid-report-topic-input");
  if (!input || !input.value.trim()) return;

  const report = state.trainerReports[occurrenceId];
  report.topicsCovered.push(input.value.trim());
  input.value = "";
  renderTrainerPaidClassReport(occurrenceId);
};

window.handlePaidTopicInputEnter = function(event, occurrenceId) {
  if (event.key === "Enter") {
    addPaidReportTopic(occurrenceId);
  }
};

window.removePaidReportTopic = function(occurrenceId, idx) {
  const report = state.trainerReports[occurrenceId];
  report.topicsCovered.splice(idx, 1);
  renderTrainerPaidClassReport(occurrenceId);
};

// 2. Syllabus item covered
window.setPaidSyllabusCoverage = function(occurrenceId, item, val) {
  const report = state.trainerReports[occurrenceId];
  report.syllabusCoverage[item] = val;
  renderTrainerPaidClassReport(occurrenceId);
};

// 3. Objectives achieved toggle
window.togglePaidObjectiveStatus = function(occurrenceId, item, val) {
  const report = state.trainerReports[occurrenceId];
  report.learningObjectives[item] = val;
  renderTrainerPaidClassReport(occurrenceId);
};

// 4. Resources checkbox toggle
window.togglePaidReportResource = function(occurrenceId, idx) {
  const report = state.trainerReports[occurrenceId];
  report.resources[idx].attached = !report.resources[idx].attached;
};

window.addMockPaidReportResource = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  const count = report.resources.length + 1;
  report.resources.push({
    name: `Class-specific Handout Guide v${count}`,
    type: "PDF",
    attached: true
  });
  renderTrainerPaidClassReport(occurrenceId);
  showToastAlert("Mock class handout PDF attached.");
};

// 5. Homework block toggle
window.togglePaidReportHomeworkFields = function(occurrenceId) {
  const chk = document.getElementById("paid-report-homework-enabled");
  const block = document.getElementById("paid-report-homework-fields-block");
  const report = state.trainerReports[occurrenceId];

  if (chk && block) {
    block.style.display = chk.checked ? "block" : "none";
    report.homework.enabled = chk.checked;
    if (chk.checked && !report.homework.title) {
      report.homework.title = "Introduce Yourself Practice";
      report.homework.instructions = "Prepare a 60–90 second spoken introduction including your name, work/study background and goals.";
      report.homework.dueDate = "Before next class";
      renderTrainerPaidClassReport(occurrenceId);
    }
  }
};

// 6. Session issue selector details toggle
window.togglePaidReportIssueDetails = function(occurrenceId) {
  const sel = document.getElementById("paid-report-session-issues");
  const block = document.getElementById("paid-report-issue-details-block");
  const report = state.trainerReports[occurrenceId];

  if (sel && block) {
    block.style.display = sel.value !== "None" ? "block" : "none";
    report.sessionIssues = sel.value;
    renderTrainerPaidClassReport(occurrenceId); // Renders correction hint alert
  }
};

// 7. Save Draft action
window.savePaidTrainerReportDraft = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  syncPaidTrainerReportInputs(report);
  showToastAlert("Report draft saved successfully.");
};

function syncPaidTrainerReportInputs(report) {
  const mainTopic = document.getElementById("paid-report-main-topic");
  const progressNotes = document.getElementById("paid-report-progress-notes");
  const strengths = document.getElementById("paid-report-feedback-strengths");
  const improvements = document.getElementById("paid-report-feedback-improvements");
  const recommends = document.getElementById("paid-report-feedback-recommends");
  const privateNotes = document.getElementById("paid-report-private-notes");
  const hwTitle = document.getElementById("paid-report-homework-title");
  const hwInstructions = document.getElementById("paid-report-homework-instructions");
  const hwDue = document.getElementById("paid-report-homework-due");
  const hwType = document.getElementById("paid-report-homework-type");
  const issues = document.getElementById("paid-report-session-issues");
  const issuesDetails = document.getElementById("paid-report-session-issues-details");
  const generalNotes = document.getElementById("paid-report-general-notes");
  const nextClass = document.getElementById("paid-report-next-class");
  const continuity = document.getElementById("paid-report-continuity");

  if (mainTopic) report.mainTopic = mainTopic.value.trim();
  if (progressNotes) report.progressNotes = progressNotes.value.trim();
  if (strengths) report.learnerFeedback.strengths = strengths.value.trim();
  if (improvements) report.learnerFeedback.improvements = improvements.value.trim();
  if (recommends) report.learnerFeedback.recommendations = recommends.value.trim();
  if (privateNotes) report.privateNotes = privateNotes.value.trim();
  if (hwTitle) report.homework.title = hwTitle.value.trim();
  if (hwInstructions) report.homework.instructions = hwInstructions.value.trim();
  if (hwDue) report.homework.dueDate = hwDue.value.trim();
  if (hwType) report.homework.type = hwType.value;
  if (issues) report.sessionIssues = issues.value;
  if (issuesDetails) report.sessionIssuesDetails = issuesDetails.value.trim();
  if (generalNotes) report.generalNotes = generalNotes.value.trim();
  if (nextClass) report.nextClassPlan = nextClass.value.trim();
  if (continuity) report.teachingContinuityNote = continuity.value.trim();
}

// 8. Submit report validation and confirmation modal
window.submitPaidTrainerReport = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  syncPaidTrainerReportInputs(report);

  // Field validations
  if (!report.mainTopic) {
    showToastAlert("Required Field Missing: Main Lesson Topic");
    document.getElementById("paid-report-main-topic").focus();
    return;
  }
  if (report.topicsCovered.length === 0) {
    showToastAlert("Required Field Missing: Add at least 1 Topic Covered tag");
    document.getElementById("paid-report-topic-input").focus();
    return;
  }
  if (!report.progressNotes) {
    showToastAlert("Required Field Missing: Learner Progress Notes");
    document.getElementById("paid-report-progress-notes").focus();
    return;
  }
  if (!report.learnerFeedback.strengths) {
    showToastAlert("Required Field Missing: Learner Strengths");
    document.getElementById("paid-report-feedback-strengths").focus();
    return;
  }
  if (!report.learnerFeedback.improvements) {
    showToastAlert("Required Field Missing: Areas to Improve");
    document.getElementById("paid-report-feedback-improvements").focus();
    return;
  }
  if (!report.learnerFeedback.recommendations) {
    showToastAlert("Required Field Missing: Feedback for Learner");
    document.getElementById("paid-report-feedback-recommends").focus();
    return;
  }

  // Open confirmation modal
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p class="modal-text" style="font-size:13.5px; margin-bottom:16px;">After submission, this report will be locked as read-only and sent to Operations for delivery review.</p>
      
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; padding:12px; margin-bottom:20px; font-size:12.5px; display:flex; flex-direction:column; gap:4px;">
        <div><strong>Class ID:</strong> ${occurrenceId}</div>
        <div><strong>Learner:</strong> Ali Khan</div>
        <div><strong>Main Topic:</strong> ${report.mainTopic}</div>
        <div><strong>Reconciled Attendance:</strong> Present (40 min connected)</div>
        <div><strong>Correction Request:</strong> ${report.proposedAttendance ? `Proposed Correction (${report.proposedAttendance})` : 'None'}</div>
        <div style="color:#ba1a1a; font-weight:700; border-top:1px dashed var(--color-outline-variant); padding-top:4px; margin-top:4px;">⚡ Entitlement credits used will remain 0 until Operations approval.</div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="confirmSubmitPaidTrainerReport('${occurrenceId}')" style="flex:1; height:44px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Submit Report</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:44px;">Continue Editing</button>
      </div>
    </div>
  `;
  openModal("Submit Class Report?", content);
};

window.confirmSubmitPaidTrainerReport = function(occurrenceId) {
  closeModal();
  const report = state.trainerReports[occurrenceId];
  
  // Update state values: Draft -> Submitted
  report.reportStatus = "Submitted";
  report.deliveryReviewStatus = "Pending";
  report.isEditingCorrection = false;
  
  // Move occurrence status in classOccurrences too
  const classOcc = state.classOccurrences.find(c => c.id === occurrenceId);
  if (classOcc) {
    classOcc.status = "In Review";
  }

  // Create Delivery review entry
  if (!state.deliveryReviews) state.deliveryReviews = [];
  const reviewId = `DELIVERY-REVIEW-CLASS-001`;
  if (!state.deliveryReviews.some(r => r.id === reviewId)) {
    state.deliveryReviews.push({
      id: reviewId,
      occurrenceId: occurrenceId,
      learner: report.learner,
      trainer: report.trainer,
      course: report.course,
      status: "Pending",
      submittedAt: new Date().toISOString()
    });
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `${dateStr.replace(" 2026", "")} · ${timeStr}`,
    text: `Report version v${report.version} submitted to Operations for review.`
  });

  renderPaidSubmittedSuccessScreen(occurrenceId);
};

// 9. Report Submitted success screen
function renderPaidSubmittedSuccessScreen(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  const view = document.getElementById("trainer-class-report-view");
  if (!view) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  view.innerHTML = `
    <div class="form-card animate-fade-in" style="width:100%; max-width:640px; padding:var(--spacing-xl); background-color:var(--color-surface-lowest); border:1.5px solid var(--color-outline-variant); border-top:5px solid #137333; margin:40px auto; text-align:center; color:var(--color-on-tertiary-fixed);">
      <div style="width:56px; height:56px; background-color:#e6f4ea; color:#137333; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:24px; font-weight:800; border:1px solid #c2e7cc;">
        ✓
      </div>
      <h2 style="font-family:var(--font-family-headings); font-size:24px; font-weight:800; color:var(--color-on-tertiary-fixed); margin-bottom:6px;">Report Submitted</h2>
      <p class="modal-text" style="font-size:14px; margin-bottom:24px;">Your paid class report has been submitted to Operations for review.</p>

      <table class="receipt-table" style="text-align:left; font-size:13px; margin-bottom:24px;">
        <tr class="receipt-row"><td class="receipt-label">Report ID</td><td class="receipt-value" style="font-family:monospace;">${report.id}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Occurrence ID</td><td class="receipt-value" style="font-family:monospace;">${report.occurrenceId}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Learner</td><td class="receipt-value">${report.learner}</td></tr>
        <tr class="receipt-row"><td class="receipt-label">Report Status</td><td class="receipt-value"><span class="badge-status status-ready">Submitted</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Delivery Review</td><td class="receipt-value"><span class="badge-integration int-provisioning">Pending review</span></td></tr>
        <tr class="receipt-row"><td class="receipt-label">Submitted By</td><td class="receipt-value">${report.trainer}</td></tr>
        <tr><td class="receipt-label">Submitted Time</td><td class="receipt-value">${dateStr} &middot; ${timeStr}</td></tr>
      </table>

      <!-- What happens next card explaining domain isolation -->
      <div style="background-color:rgba(186, 26, 26, 0.04); border:1px solid rgba(186, 26, 26, 0.15); border-radius:8px; padding:16px; text-align:left; margin-bottom:24px;">
        <h4 style="font-family:var(--font-family-headings); font-size:14px; font-weight:700; color:#ba1a1a; margin-bottom:8px;">⚠️ What Happens Next (Downstream Status)</h4>
        <table style="width:100%; font-size:12px; line-height:18px; border-collapse:collapse;">
          <tr style="border-bottom:1px solid rgba(186,26,26,0.1);"><td style="padding:4px 0; color:var(--color-tertiary);">Reconciled Attendance:</td><td style="padding:4px 0; font-weight:700; text-align:right;">Awaiting / Included in Review</td></tr>
          <tr style="border-bottom:1px solid rgba(186,26,26,0.1);"><td style="padding:4px 0; color:var(--color-tertiary);">Class Delivery State:</td><td style="padding:4px 0; font-weight:700; text-align:right;">Pending Operations Review</td></tr>
          <tr style="border-bottom:1px solid rgba(186,26,26,0.1);"><td style="padding:4px 0; color:var(--color-tertiary);">Membership Credits:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">No Debit (Used: 0 / Remaining: 12)</td></tr>
          <tr style="border-bottom:1px solid rgba(186,26,26,0.1);"><td style="padding:4px 0; color:var(--color-tertiary);">Learning Progress logs:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Updated Yet</td></tr>
          <tr><td style="padding:4px 0; color:var(--color-tertiary);">Trainer Earning pay:</td><td style="padding:4px 0; font-weight:700; text-align:right; color:#ba1a1a;">Not Created Yet</td></tr>
        </table>
      </div>

      <div style="display:flex; gap:12px; max-width:400px; margin:0 auto;">
        <button class="btn btn-primary" onclick="renderTrainerPaidClassReport('${occurrenceId}')" style="flex:1.2; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#fff; font-weight:700;">View Submitted Report</button>
        <button class="btn btn-secondary" onclick="window.location.hash='#staff/live-classes'" style="flex:1; height:42px;">Back to My Classes</button>
      </div>
    </div>
  `;
}

// 10. Attendance correction popup
window.openPaidAttendanceCorrectionModal = function(occurrenceId) {
  const content = `
    <div style="text-align:left; padding:4px 0;">
      <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">Request correction of the system connection logs. Operations will review this request alongside the report details.</p>
      
      <div class="form-group">
        <label class="form-label" style="font-weight:700; font-size:12px;">Current System Outcome</label>
        <input type="text" class="form-input" style="height:38px; background:var(--color-surface-low);" value="Present" readonly>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Proposed Outcome</label>
        <select id="paid-correct-proposed" class="form-input" style="height:38px;">
          <option value="Present">Present</option>
          <option value="Late">Late</option>
          <option value="Absent">Absent</option>
          <option value="Excused">Excused</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Technical Issue">Technical Issue</option>
        </select>
      </div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label" style="font-weight:700; font-size:12px;">Reason for Correction <span style="color:red;">*</span></label>
        <textarea id="paid-correct-reason" class="form-input" style="height:80px;" placeholder="Describe why this correction is justified (e.g. learner experienced repeated internet interruptions)..."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-primary" onclick="submitPaidAttendanceCorrection('${occurrenceId}')" style="flex:1; height:42px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Submit Correction Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:42px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Request Attendance Correction", content);
};

window.submitPaidAttendanceCorrection = function(occurrenceId) {
  const outcome = document.getElementById("paid-correct-proposed").value;
  const reason = document.getElementById("paid-correct-reason").value.trim();

  if (!reason) {
    showToastAlert("Correction reason is required.");
    document.getElementById("paid-correct-reason").focus();
    return;
  }

  closeModal();
  const report = state.trainerReports[occurrenceId];
  report.proposedAttendance = outcome;
  report.attendanceCorrectionReason = reason;

  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `18 Aug · ${timeStr}`,
    text: `Attendance correction requested: Proposed ${outcome}.`
  });

  renderTrainerPaidClassReport(occurrenceId);
  showToastAlert(`Correction request saved: Proposed ${outcome}.`);
};

// 11. Correction version handlers
window.enablePaidCorrectionEdit = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  
  // Clone current report to previousVersion
  report.previousVersion = {
    version: report.version,
    mainTopic: report.mainTopic,
    topicsCovered: [...report.topicsCovered],
    syllabusCoverage: { ...report.syllabusCoverage },
    progressNotes: report.progressNotes,
    learnerFeedback: { ...report.learnerFeedback },
    homework: { ...report.homework },
    resources: report.resources.map(r => ({ ...r }))
  };

  report.version = 2;
  report.isEditingCorrection = true;
  
  // Pre-fill clarification context
  report.progressNotes += "\n\n(Clarification added: despite 3-minute disconnection, syllabus was fully covered)";
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  report.history.push({
    time: `18 Aug · ${timeStr}`,
    text: `Corrected Version 2 (Draft) created by trainer.`
  });

  renderTrainerPaidClassReport(occurrenceId);
  showToastAlert("Corrected Version 2 Draft created.");
};

window.viewPreviousPaidReportVersion = function(occurrenceId) {
  const report = state.trainerReports[occurrenceId];
  if (!report || !report.previousVersion) return;

  const prev = report.previousVersion;
  const content = `
    <div style="text-align:left; font-size:13px; line-height:20px; max-height:450px; overflow-y:auto; padding-right:6px;">
      <p style="margin-bottom:12px; color:var(--color-tertiary);">This is a read-only snapshot of Version ${prev.version} submitted on 18 Aug · 7:53 PM.</p>
      
      <div style="background-color:var(--color-surface-low); padding:10px; border-radius:6px; border:1px solid var(--color-outline-variant); margin-bottom:16px;">
        <div style="font-weight:700; margin-bottom:2px;">Main Lesson Topic:</div>
        <div>${prev.mainTopic}</div>
      </div>

      <div style="background-color:var(--color-surface-low); padding:10px; border-radius:6px; border:1px solid var(--color-outline-variant); margin-bottom:16px;">
        <div style="font-weight:700; margin-bottom:2px;">Topics Covered:</div>
        <div>${prev.topicsCovered.join(", ") || "None"}</div>
      </div>

      <div style="background-color:var(--color-surface-low); padding:10px; border-radius:6px; border:1px solid var(--color-outline-variant); margin-bottom:16px;">
        <div style="font-weight:700; margin-bottom:2px;">Progress Notes:</div>
        <div style="white-space:pre-wrap;">${prev.progressNotes}</div>
      </div>

      <div style="background-color:var(--color-surface-low); padding:10px; border-radius:6px; border:1px solid var(--color-outline-variant);">
        <div style="font-weight:700; margin-bottom:2px;">Student Feedback:</div>
        <div><strong>Strengths:</strong> ${prev.learnerFeedback.strengths}</div>
        <div style="margin-top:4px;"><strong>Improvements:</strong> ${prev.learnerFeedback.improvements}</div>
        <div style="margin-top:4px;"><strong>Recommendations:</strong> ${prev.learnerFeedback.recommendations}</div>
      </div>
    </div>
  `;
  openModal(`Version ${prev.version} Submitted Details`, content);
};

// 12. Simulate Paid Report State controller
window.simulatePaidReportState = function(occurrenceId, stateName) {
  const report = state.trainerReports[occurrenceId];
  if (!report) return;

  report.demoState = stateName;

  if (stateName === "Draft") {
    report.reportStatus = "Draft";
    report.deliveryReviewStatus = "Pending";
    report.proposedAttendance = null;
    report.sessionIssues = "Learner connection issue";
    report.sessionIssuesDetails = "Learner disconnected for approximately three minutes and rejoined.";
    report.mainTopic = "";
    report.topicsCovered = [];
    report.progressNotes = "";
    report.learnerFeedback = { strengths: "", improvements: "", recommendations: "" };
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Evidence Reconciled") {
    report.reportStatus = "Draft";
    report.deliveryReviewStatus = "Pending";
    report.proposedAttendance = null;
    report.sessionIssues = "Learner connection issue";
    report.sessionIssuesDetails = "Learner disconnected for approximately three minutes and rejoined.";
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Attendance Correction Requested") {
    report.reportStatus = "Draft";
    report.proposedAttendance = "Technical Issue";
    report.attendanceCorrectionReason = "The learner experienced repeated internet interruptions and missed a significant part of the lesson.";
    report.sessionIssues = "Learner connection issue";
    report.sessionIssuesDetails = "Learner disconnected for approximately three minutes and rejoined.";
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Submitted") {
    report.reportStatus = "Submitted";
    report.deliveryReviewStatus = "Pending";
    report.proposedAttendance = null;
    report.sessionIssues = "Learner connection issue";
    report.sessionIssuesDetails = "Learner disconnected for approximately three minutes and rejoined.";
    report.mainTopic = "Greetings, introductions and simple everyday conversation";
    report.topicsCovered = ["Greetings", "Introductions", "Everyday vocabulary", "Pronunciation"];
    report.progressNotes = "Ali participated actively and showed good understanding of greetings and simple introductions. He still hesitates when forming longer sentences without prompts.";
    report.learnerFeedback = {
      strengths: "Good listening comprehension and willingness to speak.",
      improvements: "Sentence fluency, pronunciation consistency.",
      recommendations: "Good first class. Continue practising short introductions aloud and focus on speaking slowly and clearly."
    };
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Correction Requested") {
    report.reportStatus = "Correction Requested";
    report.deliveryReviewStatus = "Correction Requested";
    report.operationsNote = "Please clarify syllabus coverage after the learner's reconnection.";
    report.isEditingCorrection = false;
    report.mainTopic = "Greetings, introductions and simple everyday conversation";
    report.topicsCovered = ["Greetings", "Introductions"];
    report.progressNotes = "Ali participated actively and showed good understanding of greetings and simple introductions.";
    report.learnerFeedback = {
      strengths: "Good listening comprehension.",
      improvements: "Sentence fluency.",
      recommendations: "Practice introductions."
    };
    report.version = 1;
  } else if (stateName === "Corrected Version") {
    report.reportStatus = "Correction Requested";
    report.deliveryReviewStatus = "Correction Requested";
    report.operationsNote = "Please clarify syllabus coverage after the learner's reconnection.";
    report.isEditingCorrection = true;
    report.mainTopic = "Greetings, introductions and simple everyday conversation";
    report.topicsCovered = ["Greetings", "Introductions", "Everyday vocabulary"];
    report.progressNotes = "Ali participated actively and showed good understanding of greetings and simple introductions. (Clarification added: despite 3-minute disconnection, syllabus was fully covered)";
    report.learnerFeedback = {
      strengths: "Good listening comprehension.",
      improvements: "Sentence fluency.",
      recommendations: "Practice introductions."
    };
    report.version = 2;
    report.previousVersion = {
      version: 1,
      mainTopic: "Greetings, introductions and simple everyday conversation",
      topicsCovered: ["Greetings", "Introductions"],
      syllabusCoverage: { "Greetings & Introductions": "Covered" },
      progressNotes: "Ali participated actively and showed good understanding of greetings and simple introductions.",
      learnerFeedback: { strengths: "Good listening", improvements: "Fluency", recommendations: "Practice" },
      homework: { enabled: false },
      resources: []
    };
  } else if (stateName === "Learner No-show") {
    report.reportStatus = "Draft";
    report.proposedAttendance = null;
    report.sessionIssues = "Other";
    report.sessionIssuesDetails = "Learner did not join the scheduled class.";
    report.mainTopic = "No Class Delivered — Learner No-show";
    report.topicsCovered = ["No-show"];
    report.progressNotes = "Learner did not join the scheduled class. Waited for 15 minutes in the classroom.";
    report.learnerFeedback = { strengths: "N/A", improvements: "N/A", recommendations: "N/A" };
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Trainer No-show") {
    report.reportStatus = "Draft";
    report.proposedAttendance = null;
    report.sessionIssues = "Trainer connection issue";
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Partial Delivery") {
    report.reportStatus = "Draft";
    report.proposedAttendance = null;
    report.sessionIssues = "Learner connection issue";
    report.sessionIssuesDetails = "Learner disconnected after 22 minutes and was unable to rejoin due to local power outage.";
    report.mainTopic = "Partial Delivery — Introductions and Greetings";
    report.topicsCovered = ["Greetings", "Introductions"];
    report.progressNotes = "Completed first half of greetings before the learner's power outage occurred.";
    report.learnerFeedback = { strengths: "Engaged well.", improvements: "Fluency.", recommendations: "Read worksheets." };
    report.version = 1;
    report.isEditingCorrection = false;
  } else if (stateName === "Technical Exception") {
    report.reportStatus = "Draft";
    report.proposedAttendance = null;
    report.sessionIssues = "Classroom/provider issue";
    report.sessionIssuesDetails = "Daily.co service outage occurred globally starting 7:15 PM.";
    report.mainTopic = "Platform Connection Outage Exception";
    report.topicsCovered = ["None"];
    report.progressNotes = "Unable to continue class due to provider servers crash.";
    report.learnerFeedback = { strengths: "N/A", improvements: "N/A", recommendations: "N/A" };
    report.version = 1;
    report.isEditingCorrection = false;
  }

  renderTrainerPaidClassReport(occurrenceId);
  showToastAlert(`Simulating: ${stateName}`);
};

// ==========================================================================
// Screen 20 - Class Reschedule / Cancellation / Makeup Workflow
// ==========================================================================

function ensureClassOccurrencesGenerated() {
  if (!state.classOccurrences || state.classOccurrences.length === 0) {
    let proposed = [];
    let currentDate = new Date(2026, 7, 18); // 18 Aug 2026
    let count = 0;
    while (count < 12) {
      const day = currentDate.getDay();
      if (day === 2 || day === 4) {
        const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
        const classId = `CLASS-${(count + 1).toString().padStart(3, '0')}`;
        proposed.push({
          id: classId,
          seriesId: "SERIES-001",
          enrolmentId: "ENR-001",
          schedulePlanId: "SCHED-PLAN-001",
          learner: "Ali Khan",
          trainer: "Ayesha Rahman",
          course: "Spoken English",
          type: "Regular",
          classSequence: count + 1,
          date: dateStr,
          time: "7:00 PM – 7:45 PM",
          startsAt: `2026-08-${currentDate.getDate()}T19:00:00+05:00`,
          timezone: "Asia/Karachi",
          durationMinutes: 45,
          status: (count === 0) ? "Completed" : "Scheduled", // Class 1 completed
          meeting: { status: "Ready", roomId: `ROOM-${classId}`, provider: "Daily" },
          reminders: { confirmation: "Queued", twentyFourHour: "Scheduled", oneHour: "Scheduled" },
          history: [
            { time: "14 Aug &middot; 1:10 PM", text: `${classId} scheduled under recurring plan SERIES-001.` }
          ]
        });
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    state.classOccurrences = proposed;
  }
}

function getScenarioTimingText(scen) {
  if (scen === "Happy Reschedule") return "Early Change (> 24 Hrs)";
  if (scen === "Late Cancellation") return "Late Cancel (< 24 Hrs)";
  if (scen === "Trainer No-show") return "Missed Session";
  if (scen === "Technical Issue") return "Technical Exception";
  return "Schedule Change";
}

function getScenarioDebitText(scen) {
  if (scen === "Late Cancellation") return "1 Class Debit (Late Fee)";
  return "No Class Debit (Protected)";
}

function getScenarioDebitColor(scen) {
  if (scen === "Late Cancellation") return "var(--color-error)";
  return "#137333";
}

function getScenarioTrainerPayText(scen) {
  if (scen === "Happy Reschedule") return "No Pay Generated";
  if (scen === "Trainer No-show") return "Not Compensated (No-show)";
  if (scen === "Late Cancellation") return "Trainer Compensated";
  if (scen === "Technical Issue") return "Review Required";
  return "No Pay Generated";
}

function getScenarioMakeupText(scen) {
  if (scen === "Late Cancellation") return "Not Automatically Included";
  return "Makeup / Replacement Required";
}

window.setDisruptionScenario = function(occurrenceId, val) {
  state.classDisruptions.selectedScenario = val;
  window.renderOpsClassChangePage(occurrenceId);
  showToastAlert(`Scenario shifted to: ${val}`);
};

window.renderOpsClassChangePage = function(occurrenceId) {
  const view = document.getElementById("ops-class-change-view");
  if (!view) return;

  ensureClassOccurrencesGenerated();

  let occ = state.classOccurrences.find(c => c.id === occurrenceId);
  if (!occ) {
    occ = {
      id: occurrenceId,
      seriesId: "SERIES-001",
      enrolmentId: "ENR-001",
      schedulePlanId: "SCHED-PLAN-001",
      learner: "Ali Khan",
      trainer: "Ayesha Rahman",
      course: "Spoken English",
      type: "Regular",
      classSequence: 2,
      date: "Thursday, 20 Aug 2026",
      time: "7:00 PM – 7:45 PM",
      startsAt: "2026-08-20T19:00:00+05:00",
      timezone: "Asia/Karachi",
      durationMinutes: 45,
      status: "Scheduled"
    };
  }

  const replacementOcc = state.classOccurrences.find(c => c.replacementFor === occurrenceId);
  const scenario = state.classDisruptions.selectedScenario || "Happy Reschedule";

  // Derive used/remaining classes based on completed classes & cancellations
  let completedCount = state.classOccurrences.filter(o => o.status === "Completed").length;
  
  // Late cancellation debits an extra class
  const hasLateCancelDebit = Object.values(state.classDisruptions.cancellations).some(
    c => c.occurrenceId === occurrenceId && c.policyOutcome === "1 Class Debit"
  );
  
  let usedClasses = completedCount + (hasLateCancelDebit ? 1 : 0);
  let remainingClasses = 12 - usedClasses;

  // Simulator Header Switcher
  const switcherHtml = `
    <div style="background-color:var(--color-surface-container); padding:16px; border-radius:12px; border:1px solid var(--color-outline-variant); margin-bottom:20px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-weight:800; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; color:var(--color-secondary);">Scenario Selector</span>
        <select class="form-input" style="width:230px; height:32px; font-size:12.5px; margin-bottom:0; font-weight:700;" onchange="setDisruptionScenario('${occurrenceId}', this.value)">
          <option value="Happy Reschedule" ${scenario === 'Happy Reschedule' ? 'selected' : ''}>Happy Reschedule (Learner Early)</option>
          <option value="Late Cancellation" ${scenario === 'Late Cancellation' ? 'selected' : ''}>Late Cancellation (Learner Late)</option>
          <option value="Trainer No-show" ${scenario === 'Trainer No-show' ? 'selected' : ''}>Trainer No-show Exception</option>
          <option value="Technical Issue" ${scenario === 'Technical Issue' ? 'selected' : ''}>Technical Outage Outlying</option>
          <option value="Group Class" ${scenario === 'Group Class' ? 'selected' : ''}>Group Class Change</option>
        </select>
      </div>
      <div style="font-size:12px; color:var(--color-tertiary);">
        Evaluating: <strong>${scenario} Policies</strong>
      </div>
    </div>
  `;

  // Relationship Link UI if rescheduled or cancelled
  let relationshipHtml = "";
  if (occ.status === "Rescheduled" && replacementOcc) {
    relationshipHtml = `
      <div class="form-card" style="padding:16px; border-left:4px solid var(--color-secondary); margin-bottom:20px;">
        <h4 style="font-size:13.5px; font-weight:800; margin:0 0 8px 0; color:var(--color-on-tertiary-fixed);">Occurrence Relationship Link</h4>
        <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:12.5px;">
          <div>
            <div style="font-size:11px; color:var(--color-tertiary);">Original Occurrence (Retired)</div>
            <div style="font-weight:700; font-family:monospace;">${occ.id} (${occ.status})</div>
            <div style="font-size:12px; color:var(--color-tertiary);">${occ.date} &middot; 7:00 PM</div>
          </div>
          <div style="font-size:18px; color:var(--color-tertiary); font-weight:bold;">➔</div>
          <div>
            <div style="font-size:11px; color:#137333; font-weight:700;">Replacement Occurrence (Active)</div>
            <div style="font-weight:700; font-family:monospace; color:#137333;">${replacementOcc.id} (Scheduled)</div>
            <div style="font-size:12px; font-weight:700; color:#137333;">${replacementOcc.date} &middot; 7:00 PM PKT</div>
          </div>
        </div>
      </div>
    `;
  } else if (occ.status === "Cancelled" && state.classDisruptions.makeups[occ.id]) {
    const mk = state.classDisruptions.makeups[occ.id];
    relationshipHtml = `
      <div class="form-card" style="padding:16px; border-left:4px solid #137333; margin-bottom:20px;">
        <h4 style="font-size:13.5px; font-weight:800; margin:0 0 8px 0; color:var(--color-on-tertiary-fixed);">Occurrence Relationship Link</h4>
        <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap; font-size:12.5px;">
          <div>
            <div style="font-size:11px; color:var(--color-tertiary);">Cancelled Occurrence</div>
            <div style="font-weight:700; font-family:monospace; color:var(--color-error);">${occ.id} (${occ.status})</div>
            <div style="font-size:12px; color:var(--color-tertiary);">${occ.date} &middot; 7:00 PM</div>
          </div>
          <div style="font-size:18px; color:var(--color-tertiary); font-weight:bold;">➔</div>
          <div>
            <div style="font-size:11px; color:#137333; font-weight:700;">Makeup Occurrence (Active)</div>
            <div style="font-weight:700; font-family:monospace; color:#137333;">${mk.id} (Scheduled)</div>
            <div style="font-size:12px; font-weight:700; color:#137333;">${mk.date} &middot; ${mk.time}</div>
          </div>
        </div>
      </div>
    `;
  }

  // Group participants list
  let groupParticipantsHtml = "";
  if (scenario === "Group Class") {
    groupParticipantsHtml = `
      <div class="form-card" style="padding:20px; margin-bottom:20px; border-left:4px solid var(--color-primary);">
        <h3 class="form-section-title" style="margin-bottom:8px; color:var(--color-on-surface-variant);">Group Class Participants Context</h3>
        <p style="font-size:12.5px; color:var(--color-tertiary); margin-bottom:12px;">This occurrence represents a group course run class. Rescheduling changes the time slot for all participants.</p>
        <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:8px; padding:12px; margin-bottom:16px;">
          <div style="font-weight:800; font-size:12.5px; margin-bottom:8px; color:var(--color-on-tertiary-fixed);">8 Impacted Enrolled Students:</div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Ali Khan</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Fatima Ahmed</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Zainab Bibi</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Hamza Yusuf</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Sara Khan</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Ayaan Malik</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Bilal Qureshi</span>
            <span class="badge-status status-ready" style="font-size:11px; background:#fff; color:var(--color-on-surface); border-color:var(--color-outline-variant);">Maryam Noor</span>
          </div>
        </div>
        <div style="font-size:11.5px; color:var(--color-tertiary);">
          🔔 A schedule change will trigger notification templates to all 8 students simultaneously.
        </div>
      </div>
    `;
  }

  // Timeline entries
  let timelineItems = [
    { time: "14 Aug &middot; 1:12 PM", text: `CLASS-002 scheduled under recurring plan SERIES-001.` }
  ];

  if (state.classDisruptions.rescheduleRequests && state.classDisruptions.rescheduleRequests.some(r => r.occurrenceId === occ.id)) {
    timelineItems.push({ time: "19 Aug &middot; 10:15 AM", text: "Learner Ali Khan submitted reschedule request (preferred: Friday, 21 August &middot; 7:00 PM PKT)." });
  }

  if (occ.status === "Rescheduled") {
    timelineItems.push({ time: "19 Aug &middot; 10:30 AM", text: "Reschedule request approved by Operations." });
    timelineItems.push({ time: "19 Aug &middot; 10:32 AM", text: "Original occurrence CLASS-002 status shifted to Rescheduled." });
    timelineItems.push({ time: "19 Aug &middot; 10:32 AM", text: "Replacement occurrence CLASS-002-R1 created." });
    timelineItems.push({ time: "19 Aug &middot; 10:33 AM", text: "Reminders confirmation/24-hour/1-hour jobs marked Cancelled." });
    timelineItems.push({ time: "19 Aug &middot; 10:33 AM", text: "Replacement classroom meeting provisioned and reminders confirmation queued." });
    timelineItems.push({ time: "19 Aug &middot; 10:34 AM", text: "Notifications delivered: Learner Ali Khan (sent) & Trainer Ayesha Rahman (sent)." });
  }

  if (occ.status === "Cancelled") {
    timelineItems.push({ time: "19 Aug &middot; 10:30 AM", text: "Cancellation process initiated by Learner." });
    timelineItems.push({ time: "19 Aug &middot; 10:31 AM", text: `CLASS-002 marked Cancelled. Policy applied: ${scenario === 'Late Cancellation' ? '1 Class Debit' : 'No Debit'}.` });
    timelineItems.push({ time: "19 Aug &middot; 10:32 AM", text: "Original reminders confirmation/24-hour/1-hour jobs marked Cancelled." });
    timelineItems.push({ time: "19 Aug &middot; 10:33 AM", text: "Classroom room provider session retired." });
    timelineItems.push({ time: "19 Aug &middot; 10:34 AM", text: "Notifications delivered: Learner Ali Khan (sent) & Trainer Ayesha Rahman (sent)." });
    
    if (state.classDisruptions.makeups[occ.id]) {
      const mk = state.classDisruptions.makeups[occ.id];
      timelineItems.push({ time: "19 Aug &middot; 11:00 AM", text: `Makeup class scheduled: ${mk.id} for ${mk.date} at ${mk.time}.` });
      timelineItems.push({ time: "19 Aug &middot; 11:01 AM", text: "Linked reminders queued." });
    }
  }

  const timelineHtml = timelineItems.map(item => `
    <li class="timeline-evidence-item" style="border-left: 2px solid var(--color-outline-variant); padding-left:14px; padding-bottom:12px; font-size:12px; position:relative; list-style:none; line-height:1.6;">
      <span style="font-weight:700; color:var(--color-on-tertiary-fixed); display:block; margin-bottom:2px;">${item.time}</span>
      <span style="color:var(--color-on-surface-variant);">${item.text}</span>
    </li>
  `).join("");

  view.innerHTML = `
    <div class="form-container-main animate-fade-in" style="padding:var(--spacing-md) var(--spacing-gutter); max-width:1200px; margin:0 auto; color:var(--color-on-tertiary-fixed);">
      
      <!-- Selector simulation bar -->
      ${switcherHtml}

      <!-- Page Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="font-family:var(--font-family-headings); font-size:22px; font-weight:800; margin:0 0 4px 0; color:var(--color-on-tertiary-fixed);">Manage Scheduled Class</h2>
          <div style="font-size:13px; color:var(--color-tertiary);">
            Spoken English &middot; <span style="font-family:monospace; font-weight:700;">${occ.id}</span> &middot; Learner: Ali Khan
          </div>
        </div>
        <span class="badge-status ${occ.status === 'Scheduled' ? 'status-ready' : (occ.status === 'Cancelled' ? 'status-submitted' : 'status-draft')}" style="font-size:11px; padding:4px 10px; font-weight:700; background-color:${occ.status === 'Cancelled' ? '#fce8e6' : ''}; color:${occ.status === 'Cancelled' ? '#a50e0e' : ''}; border-color:${occ.status === 'Cancelled' ? '#fad2cf' : ''};">
          ${occ.status}
        </span>
      </div>

      <!-- Schedule Link Relationship Card -->
      ${relationshipHtml}

      <!-- Group Class Card -->
      ${groupParticipantsHtml}

      <!-- Two Column Layout -->
      <div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:20px; align-items:start;">
        
        <!-- Left Column -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          
          <!-- Current Schedule Detail Card -->
          <div class="form-card" style="padding:20px;">
            <h3 class="form-section-title" style="margin-bottom:12px;">Current Schedule</h3>
            <table style="width:100%; font-size:13px; border-collapse:collapse; line-height:24px;">
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Syllabus Series Class:</td><td style="font-weight:700; text-align:right;">${scenario === 'Group Class' ? 'Group Class' : 'Class 2 of 12'}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Occurrence Ref:</td><td style="font-weight:700; text-align:right; font-family:monospace;">${occ.id}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Course & Run:</td><td style="font-weight:700; text-align:right;">${scenario === 'Group Class' ? 'IELTS Evening Group B' : occ.course}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Learner(s):</td><td style="font-weight:700; text-align:right;">${scenario === 'Group Class' ? '8 Enrolled Learners' : occ.learner}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Trainer:</td><td style="font-weight:700; text-align:right;">${occ.trainer}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Date:</td><td style="font-weight:700; text-align:right;">${occ.date}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Time Slot:</td><td style="font-weight:700; text-align:right;">${occ.time}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Timezone:</td><td style="font-weight:700; text-align:right; font-family:monospace;">${occ.timezone}</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Meeting Room:</td><td style="font-weight:700; text-align:right; font-family:monospace; color:${occ.status === 'Cancelled' || occ.status === 'Rescheduled' ? 'var(--color-error)' : '#137333'};">${occ.status === 'Cancelled' || occ.status === 'Rescheduled' ? 'Retired / Cancelled' : 'Ready'} (${occ.meeting ? occ.meeting.roomId : 'ROOM-CLASS-002'})</td></tr>
              <tr><td style="color:var(--color-tertiary);">Reminders status:</td><td style="font-weight:700; text-align:right; color:${occ.status === 'Cancelled' || occ.status === 'Rescheduled' ? 'var(--color-error)' : '#137333'};">${occ.status === 'Cancelled' || occ.status === 'Rescheduled' ? 'Cancelled' : 'Confirmation Queued &middot; 24-Hour Scheduled'}</td></tr>
            </table>
          </div>

          <!-- Learner Schedule Change Requests -->
          <div class="form-card" style="padding:20px;">
            <h3 class="form-section-title" style="margin-bottom:12px;">Learner Schedule Change Requests</h3>
            ${state.classDisruptions.rescheduleRequests && state.classDisruptions.rescheduleRequests.some(r => r.occurrenceId === occ.id && r.status === 'Pending') ? `
              <div style="background-color:#fffcf0; border:1px solid #f0d97a; border-radius:8px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                  <div>
                    <div style="font-weight:800; font-size:14px; color:var(--color-on-tertiary-fixed);">Ali Khan Requested Reschedule</div>
                    <div style="font-size:12px; color:var(--color-tertiary); margin-top:2px;">Requested: Friday, 21 August 2026 &middot; 7:00 PM PKT</div>
                  </div>
                  <span class="badge-status status-submitted" style="font-size:10px; background-color:#fffcf0; color:#b06000; border-color:#f0d97a;">Pending Review</span>
                </div>
                <div style="font-size:13px; color:var(--color-on-surface); line-height:1.5; margin-bottom:12px;">
                  <strong>Reason:</strong> "Learner has an appointment during the original class time."
                </div>
                <div style="display:flex; gap:10px;">
                  <button class="btn btn-primary" onclick="approveRescheduleRequest('${occ.id}')" style="height:32px; font-size:11.5px; font-weight:700; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; flex:1.2;">Approve & Reschedule</button>
                  <button class="btn btn-secondary" onclick="declineRescheduleRequest('${occ.id}')" style="height:32px; font-size:11.5px; font-weight:700; color:var(--color-error); border-color:var(--color-error); flex:1;">Decline</button>
                </div>
              </div>
            ` : `
              <div style="padding:16px; background-color:var(--color-surface-low); border:1px dashed var(--color-outline-variant); border-radius:6px; text-align:center; color:var(--color-tertiary); font-size:12.5px;">
                No pending learner requests for this class.
              </div>
            `}
          </div>

          <!-- Timeline Audit Logs -->
          <div class="form-card" style="padding:20px;">
            <h3 class="form-section-title" style="margin-bottom:16px;">Schedule Disruption timeline</h3>
            <ul style="padding:0; margin:0;">
              ${timelineHtml}
            </ul>
          </div>

        </div>

        <!-- Right Column -->
        <div style="display:flex; flex-direction:column; gap:20px;">
          
          <!-- Actions Panel -->
          <div class="form-card" style="padding:20px;">
            <h3 class="form-section-title" style="margin-bottom:12px;">Actions</h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${occ.status === 'Scheduled' ? `
                <button class="btn btn-primary" onclick="openRescheduleModal('${occ.id}')" style="width:100%; height:40px; font-weight:700; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000;">Reschedule Class</button>
                <button class="btn btn-secondary" onclick="openCancellationModal('${occ.id}')" style="width:100%; height:40px; font-weight:700; color:var(--color-error); border-color:var(--color-error);">Cancel Class</button>
              ` : ''}
              ${occ.status === 'Cancelled' && !state.classDisruptions.makeups[occ.id] ? `
                <button class="btn btn-primary" onclick="openScheduleMakeupModal('${occ.id}')" style="width:100%; height:40px; font-weight:700; background-color:#137333; border-color:#137333; color:#fff;">Schedule Makeup Class</button>
              ` : ''}
              ${occ.status === 'Rescheduled' || occ.status === 'Cancelled' ? `
                <div style="padding:10px; background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); border-radius:6px; font-size:12.5px; text-align:center; color:var(--color-tertiary); font-weight:600;">
                  This class is <strong>${occ.status}</strong>. Refer to the replacement or timeline for history.
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Class Allowance Context -->
          <div class="form-card" style="padding:20px; background-color:var(--color-surface-low);">
            <h3 class="form-section-title" style="margin-bottom:8px; color:var(--color-on-surface-variant);">Class Allowance</h3>
            <table style="width:100%; font-size:12.5px; border-collapse:collapse; line-height:22px; margin-bottom:12px;">
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Included Grant:</td><td style="font-weight:700; text-align:right;">12 Classes</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Used / Approved:</td><td style="font-weight:700; text-align:right;">${usedClasses} Class</td></tr>
              <tr style="border-bottom:1px solid var(--color-outline-variant);"><td style="color:var(--color-tertiary);">Remaining Balance:</td><td style="font-weight:700; text-align:right; color:#137333;">${remainingClasses} Classes</td></tr>
              <tr><td style="color:var(--color-tertiary);">Upcoming Scheduled:</td><td style="font-weight:700; text-align:right;">11 Classes</td></tr>
            </table>
            <div style="font-size:11px; color:var(--color-tertiary); font-style:italic; line-height:1.4;">
              Changing the schedule does not automatically mean a class credit is consumed. Policy rules apply.
            </div>
          </div>

          <!-- Policy Preview Card -->
          <div class="form-card" style="padding:20px;">
            <h3 class="form-section-title" style="margin-bottom:12px;">Configured Policy Preview</h3>
            <div style="background-color:var(--color-surface-lowest); border:1px solid var(--color-outline-variant); border-radius:8px; padding:12px; font-size:12.5px; line-height:22px;">
              <div style="display:flex; justify-content:space-between; border-bottom:1.5px dashed var(--color-outline-variant); padding-bottom:6px; margin-bottom:6px; font-weight:700;">
                <span>Evaluation Policy:</span>
                <span style="color:var(--color-secondary);">${scenario} Policy</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--color-tertiary);">Timing Window:</span>
                <span style="font-weight:700;">${getScenarioTimingText(scenario)}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--color-tertiary);">Entitlement Impact:</span>
                <span style="font-weight:700; color:${getScenarioDebitColor(scenario)};">${getScenarioDebitText(scenario)}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--color-tertiary);">Trainer Compensation:</span>
                <span style="font-weight:700;">${getScenarioTrainerPayText(scenario)}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--color-tertiary);">Replacement Class:</span>
                <span style="font-weight:700;">${getScenarioMakeupText(scenario)}</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--color-tertiary);">Notifications Queued:</span>
                <span style="font-weight:700; color:#137333;">Yes (Learner + Trainer)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
};

// Approve/Decline learner request
window.approveRescheduleRequest = function(occurrenceId) {
  const req = state.classDisruptions.rescheduleRequests.find(r => r.occurrenceId === occurrenceId);
  if (req) {
    req.status = "Approved";
  }
  confirmRescheduleClass(occurrenceId, "2026-08-21", "19:00", "Learner", "Learner unavailable", "This Class Only");
  showToastAlert("Learner reschedule request approved.");
};

window.declineRescheduleRequest = function(occurrenceId) {
  const req = state.classDisruptions.rescheduleRequests.find(r => r.occurrenceId === occurrenceId);
  if (req) {
    req.status = "Declined";
  }
  window.renderOpsClassChangePage(occurrenceId);
  showToastAlert("Learner reschedule request declined.");
};

// Reschedule modal & confirmation
window.openRescheduleModal = function(id) {
  const occ = state.classOccurrences.find(c => c.id === id);
  if (!occ) return;

  if (occ.status === "Completed") {
    showToastAlert("Completed classes cannot be rescheduled as future occurrences.");
    return;
  }

  const scenario = state.classDisruptions.selectedScenario || "Happy Reschedule";

  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:14px;">
      
      <!-- Current details -->
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); padding:12px; border-radius:8px; font-size:12.5px;">
        <div>Current Schedule: <strong>${occ.date} &middot; ${occ.time} PKT</strong></div>
        <div>Trainer: <strong>${occ.trainer}</strong></div>
      </div>

      <!-- Form Inputs -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">New Date:</label>
          <input type="date" id="resch-date-input" class="form-input" style="margin-bottom:0; height:36px;" value="2026-08-21">
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">New Start Time:</label>
          <input type="time" id="resch-time-input" class="form-input" style="margin-bottom:0; height:36px;" value="19:00">
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Requested By:</label>
          <select id="resch-by-input" class="form-input" style="margin-bottom:0; height:36px;">
            <option value="Learner" selected>Learner (Ali Khan)</option>
            <option value="Trainer">Trainer (Ayesha Rahman)</option>
            <option value="Operations">Operations Coordinator</option>
            <option value="COO">COO (Executive Override)</option>
          </select>
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Reason for Change:</label>
          <select id="resch-reason-input" class="form-input" style="margin-bottom:0; height:36px;" onchange="handleRescheduleReasonChange(this.value)">
            <option value="Learner unavailable" selected>Learner unavailable</option>
            <option value="Trainer unavailable">Trainer unavailable (Emergency / Sick)</option>
            <option value="Schedule conflict">Overlap conflict detected</option>
            <option value="Technical issue">Technical exception / Internet outage</option>
            <option value="Other">Other reason...</option>
          </select>
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Reason Details:</label>
          <textarea id="resch-notes-input" class="form-input" style="margin-bottom:0; height:60px; font-size:12.5px; padding:6px 10px;" placeholder="Learner has an appointment during the original class time."></textarea>
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Series Scope:</label>
          <select id="resch-scope-input" class="form-input" style="margin-bottom:0; height:36px;">
            <option value="This Class Only" selected>This Class Only (CLASS-002 only)</option>
            <option value="This and Following">This and Following Classes (SERIES-001 cascade)</option>
            <option value="Future Series">Future Series Schedule Recurrence</option>
          </select>
        </div>
      </div>

      <!-- Conflict & Policy checks box -->
      <div id="reschedule-modal-status-box" style="background-color:#f0f4f8; border:1px solid var(--color-outline-variant); border-radius:8px; padding:12px; font-size:12px;">
        <div style="font-weight:700; margin-bottom:6px; color:var(--color-on-tertiary-fixed);">⚡ Real-time Availability & Conflict checks:</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
          <span>👤 Learner: <strong style="color:#137333;">✓ Available</strong></span>
          <span>👩‍🏫 Trainer: <strong style="color:#137333;" id="modal-trainer-conflict-badge">✓ Available</strong></span>
          <span>📅 Overlaps: <strong style="color:#137333;">None</strong></span>
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display:flex; gap:12px; margin-top:8px;">
        <button class="btn btn-primary" onclick="submitRescheduleModal('${id}')" style="flex:1.2; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Confirm Reschedule</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>

    </div>
  `;
  openModal(`Reschedule Live Class — ${id}`, content);
};

window.handleRescheduleReasonChange = function(reason) {
  const badge = document.getElementById("modal-trainer-conflict-badge");
  if (!badge) return;

  if (reason === "Schedule conflict") {
    badge.innerHTML = "⚠️ Conflict (Already busy)";
    badge.style.color = "var(--color-error)";
    showToastAlert("Trainer Ayesha Rahman already has another class at Friday, 21 August 7:00 PM.");
  } else {
    badge.innerHTML = "✓ Available";
    badge.style.color = "#137333";
  }
};

window.submitRescheduleModal = function(id) {
  const date = document.getElementById("resch-date-input").value;
  const time = document.getElementById("resch-time-input").value;
  const requestedBy = document.getElementById("resch-by-input").value;
  const reason = document.getElementById("resch-reason-input").value;
  const scope = document.getElementById("resch-scope-input").value;

  if (reason === "Schedule conflict") {
    showToastAlert("Rescheduling blocked: Trainer has schedule conflict. Please choose another time.");
    return;
  }

  closeModal();
  confirmRescheduleClass(id, date, time, requestedBy, reason, scope);
};

window.confirmRescheduleClass = function(id, newDate, newTime, requestedBy, reason, scope) {
  const occ = state.classOccurrences.find(c => c.id === id);
  if (occ) {
    occ.status = "Rescheduled";
    occ.reminders = { confirmation: "Cancelled", twentyFourHour: "Cancelled", oneHour: "Cancelled" };
    if (occ.meeting) {
      occ.meeting.status = "Cancelled / Retired";
    }
  }

  state.classDisruptions.reschedules[id] = {
    id: "RESCHEDULE-001",
    occurrenceId: id,
    requestedBy: requestedBy,
    requestedFor: "Ali Khan",
    reason: reason,
    originalDate: occ ? occ.date : "2026-08-20",
    originalTime: occ ? occ.time : "7:00 PM",
    newDate: newDate,
    newTime: newTime,
    timezone: "Asia/Karachi",
    scope: scope,
    status: "Approved"
  };

  const newDateParsed = new Date(newDate);
  const formattedDate = newDateParsed.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  const replacementId = `${id}-R1`;

  state.classOccurrences = state.classOccurrences.filter(c => c.id !== replacementId);

  state.classOccurrences.push({
    id: replacementId,
    replacementFor: id,
    seriesId: "SERIES-001",
    enrolmentId: "ENR-001",
    learner: "Ali Khan",
    trainer: "Ayesha Rahman",
    course: "Spoken English",
    type: "Regular",
    classSequence: 2,
    date: formattedDate,
    time: "7:00 PM – 7:45 PM",
    startsAt: `${newDate}T19:00:00+05:00`,
    timezone: "Asia/Karachi",
    durationMinutes: 45,
    classType: "Rescheduled Regular Class",
    status: "Scheduled",
    meeting: { status: "Ready", roomId: `ROOM-${replacementId}`, provider: "Daily" },
    reminders: { confirmation: "Queued", twentyFourHour: "Scheduled", oneHour: "Scheduled" },
    history: [
      { time: "19 Aug &middot; 10:32 AM", text: `Rescheduled replacement created for ${formattedDate}.` }
    ]
  });

  window.renderOpsClassChangePage(id);
  showToastAlert(`Class successfully rescheduled to ${formattedDate} at 7:00 PM PKT.`);
};

// Cancellation modal & confirmation
window.openCancellationModal = function(id) {
  const occ = state.classOccurrences.find(c => c.id === id);
  if (!occ) return;

  if (occ.status === "Completed") {
    showToastAlert("Completed classes cannot be cancelled.");
    return;
  }

  const scenario = state.classDisruptions.selectedScenario || "Happy Reschedule";

  let billingOutcome = "No Debit";
  let trainerPayOutcome = "Not Compensated";
  let makeupAllowed = "Allowed";
  let isLateWarning = false;

  if (scenario === "Late Cancellation") {
    billingOutcome = "1 Class Debit";
    trainerPayOutcome = "Trainer Compensated";
    makeupAllowed = "Not Automatically Included";
    isLateWarning = true;
  } else if (scenario === "Trainer No-show") {
    billingOutcome = "No Debit";
    trainerPayOutcome = "Not Compensated (No-show case created)";
    makeupAllowed = "Required";
  } else if (scenario === "Technical Issue") {
    billingOutcome = "No Debit";
    trainerPayOutcome = "Review Required";
    makeupAllowed = "Required";
  }

  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:14px;">
      
      <!-- Current details -->
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); padding:12px; border-radius:8px; font-size:12.5px;">
        <div>Cancellation target: <strong>${occ.id}</strong></div>
        <div>Date: <strong>${occ.date} &middot; ${occ.time} PKT</strong></div>
      </div>

      <!-- Late cancellation alert -->
      ${isLateWarning ? `
        <div style="background-color:#fce8e6; border:1px solid #fad2cf; border-radius:8px; padding:12px; color:#a50e0e; font-size:12px; line-height:1.5;">
          <strong>⚠️ Late Cancellation Window Warning:</strong> This cancellation falls inside the configured 24-hour late policy. Learner will be debited 1 credit and trainer remains compensated.
        </div>
      ` : ''}

      <!-- Form Inputs -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Cancellation Initiated By:</label>
          <select id="cancel-by-input" class="form-input" style="margin-bottom:0; height:36px;">
            <option value="Learner" ${scenario === 'Late Cancellation' || scenario === 'Happy Reschedule' ? 'selected' : ''}>Learner (Ali Khan)</option>
            <option value="Trainer" ${scenario === 'Trainer No-show' ? 'selected' : ''}>Trainer (Ayesha Rahman)</option>
            <option value="Operations">Operations Coordinator</option>
            <option value="COO">COO (Executive Override)</option>
          </select>
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Cancellation Reason:</label>
          <select id="cancel-reason-input" class="form-input" style="margin-bottom:0; height:36px;">
            <option value="Learner unavailable" ${scenario === 'Happy Reschedule' || scenario === 'Late Cancellation' ? 'selected' : ''}>Learner unavailable</option>
            <option value="Trainer unavailable">Trainer unavailable (Emergency)</option>
            <option value="Learner no-show">Learner no-show (Missed class)</option>
            <option value="Trainer no-show" ${scenario === 'Trainer No-show' ? 'selected' : ''}>Trainer no-show (Missed class)</option>
            <option value="Technical issue" ${scenario === 'Technical Issue' ? 'selected' : ''}>Technical issue (Join failure)</option>
            <option value="Emergency">Emergency</option>
            <option value="Operational closure">Operational closure</option>
            <option value="Schedule error">Schedule error</option>
          </select>
        </div>
      </div>

      <!-- Policy preview box -->
      <div style="background-color:#f0f4f8; border:1px solid var(--color-outline-variant); border-radius:8px; padding:12px; font-size:12.5px; line-height:20px;">
        <div style="font-weight:700; margin-bottom:6px; color:var(--color-on-tertiary-fixed);">⚡ Policy Outcome Preview:</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
          <div>Timing: <strong>${isLateWarning ? 'Late (< 24 Hrs)' : 'Early (> 24 Hrs)'}</strong></div>
          <div>Entitlement: <strong>${billingOutcome}</strong></div>
          <div>Trainer Pay: <strong>${trainerPayOutcome}</strong></div>
          <div>Makeup: <strong>${makeupAllowed}</strong></div>
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display:flex; gap:12px; margin-top:8px;">
        <button class="btn btn-primary" onclick="submitCancellationModal('${id}', '${billingOutcome}', '${makeupAllowed}')" style="flex:1.2; height:40px; background-color:var(--color-error); border-color:var(--color-error); color:#fff; font-weight:800;">Confirm Cancellation</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Back</button>
      </div>

    </div>
  `;
  openModal(`Cancel Live Class — ${id}`, content);
};

window.submitCancellationModal = function(id, billingOutcome, makeupAllowed) {
  const initiatedBy = document.getElementById("cancel-by-input").value;
  const reason = document.getElementById("cancel-reason-input").value;

  closeModal();
  confirmCancellationClass(id, initiatedBy, reason, billingOutcome, makeupAllowed);
};

window.confirmCancellationClass = function(id, initiatedBy, reason, billingOutcome, makeupAllowed) {
  const occ = state.classOccurrences.find(c => c.id === id);
  if (occ) {
    occ.status = "Cancelled";
    occ.reminders = { confirmation: "Cancelled", twentyFourHour: "Cancelled", oneHour: "Cancelled" };
    if (occ.meeting) {
      occ.meeting.status = "Cancelled / Retired";
    }
  }

  state.classDisruptions.cancellations[id] = {
    id: "CANCEL-001",
    occurrenceId: id,
    actorType: initiatedBy,
    reason: reason,
    policyOutcome: billingOutcome,
    makeupAllowed: (makeupAllowed !== "Not Automatically Included"),
    status: "Confirmed"
  };

  if (billingOutcome === "1 Class Debit") {
    if (!state.entitlementLedger) state.entitlementLedger = [];
    state.entitlementLedger.push({
      id: "ENT-ADJ-CLASS-002",
      membershipTermId: "MEM-TERM-001",
      occurrenceId: id,
      type: "Cancellation Debit",
      quantity: 1,
      reason: "Configured late cancellation policy",
      status: "Posted"
    });
  }

  window.renderOpsClassChangePage(id);
  showToastAlert(`Class CLASS-002 successfully cancelled. Policy: ${billingOutcome}.`);
};

// Makeup scheduling modal
window.openScheduleMakeupModal = function(id) {
  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:14px;">
      <div style="background-color:var(--color-surface-low); border:1px solid var(--color-outline-variant); padding:12px; border-radius:8px;">
        Makeup for original disrupted class: <strong>${id}</strong>
      </div>

      <!-- Inputs -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Date for Makeup:</label>
          <input type="date" id="makeup-date-input" class="form-input" style="margin-bottom:0; height:36px;" value="2026-08-22">
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Start Time:</label>
          <input type="time" id="makeup-time-input" class="form-input" style="margin-bottom:0; height:36px;" value="18:00">
        </div>
        <div>
          <label style="font-weight:700; display:block; margin-bottom:4px;">Trainer Allocation:</label>
          <input type="text" class="form-input" style="margin-bottom:0; height:36px; background-color:#e9e9e9;" value="Ayesha Rahman (Original)" readonly>
        </div>
      </div>

      <!-- Conflict verification -->
      <div style="background-color:#e6f4ea; border:1px solid #c2e7cc; border-radius:8px; padding:12px; font-size:12.5px; color:#137333;">
        ✓ No schedule conflicts detected on Saturday, 22 Aug at 6:00 PM PKT.
      </div>

      <!-- Action buttons -->
      <div style="display:flex; gap:12px; margin-top:8px;">
        <button class="btn btn-primary" onclick="submitMakeupModal('${id}')" style="flex:1.2; height:40px; background-color:#137333; border-color:#137333; color:#fff; font-weight:800;">Schedule Makeup</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Schedule Makeup Class", content);
};

window.submitMakeupModal = function(id) {
  const date = document.getElementById("makeup-date-input").value;
  const time = document.getElementById("makeup-time-input").value;

  closeModal();

  const dateParsed = new Date(date);
  const formattedDate = dateParsed.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = "6:00 PM – 6:45 PM";

  const makeupId = `MAKEUP-CLASS-002-001`;
  state.classDisruptions.makeups[id] = {
    id: makeupId,
    originalOccurrenceId: id,
    enrolmentId: "ENR-001",
    membershipTermId: "MEM-TERM-001",
    learner: "Ali Khan",
    trainer: "Ayesha Rahman",
    classType: "Makeup",
    date: formattedDate,
    time: timeStr,
    status: "Scheduled"
  };

  state.classOccurrences = state.classOccurrences.filter(c => c.id !== makeupId);
  state.classOccurrences.push({
    id: makeupId,
    originalOccurrenceId: id,
    seriesId: "SERIES-001",
    enrolmentId: "ENR-001",
    learner: "Ali Khan",
    trainer: "Ayesha Rahman",
    course: "Spoken English",
    type: "Makeup",
    classSequence: 2,
    date: formattedDate,
    time: timeStr,
    timezone: "Asia/Karachi",
    startsAt: `${date}T18:00:00+05:00`,
    durationMinutes: 45,
    status: "Scheduled",
    meeting: { status: "Ready", roomId: `ROOM-${makeupId}`, provider: "Daily" },
    reminders: { confirmation: "Queued", twentyFourHour: "Scheduled", oneHour: "Scheduled" },
    history: [
      { time: "19 Aug &middot; 11:00 AM", text: `Makeup created for disrupted class ${id}.` }
    ]
  });

  window.renderOpsClassChangePage(id);
  showToastAlert(`Makeup class scheduled for ${formattedDate} at 6:00 PM PKT.`);
};

// Learner request modals
window.openLearnerRescheduleRequestModal = function(enrolmentId, occurrenceId) {
  const content = `
    <div style="text-align:left; font-size:13px; line-height:1.6; display:flex; flex-direction:column; gap:14px;">
      <p style="margin:0; color:var(--color-tertiary);">Submit your preferred slot. Operations will review your request and confirm changes within 2 hours.</p>
      
      <div>
        <label style="font-weight:700; display:block; margin-bottom:4px;">Preferred Date:</label>
        <input type="date" id="req-pref-date" class="form-input" style="margin-bottom:0; height:36px;" value="2026-08-21">
      </div>
      <div>
        <label style="font-weight:700; display:block; margin-bottom:4px;">Preferred Start Time:</label>
        <input type="time" id="req-pref-time" class="form-input" style="margin-bottom:0; height:36px;" value="19:00">
      </div>
      <div>
        <label style="font-weight:700; display:block; margin-bottom:4px;">Reason for Request:</label>
        <textarea id="req-pref-reason" class="form-input" style="margin-bottom:0; height:60px; font-size:12.5px; padding:6px 10px;" placeholder="e.g. I have an appointment during the original class time."></textarea>
      </div>

      <div style="display:flex; gap:12px; margin-top:8px;">
        <button class="btn btn-primary" onclick="submitLearnerRescheduleRequest('${enrolmentId}', '${occurrenceId}')" style="flex:1.2; height:40px; background-color:var(--color-secondary); border-color:var(--color-secondary); color:#000; font-weight:800;">Send Request</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex:1; height:40px;">Cancel</button>
      </div>
    </div>
  `;
  openModal("Request Schedule Change", content);
};

window.submitLearnerRescheduleRequest = function(enrolmentId, occurrenceId) {
  const date = document.getElementById("req-pref-date").value;
  const time = document.getElementById("req-pref-time").value;
  const reason = document.getElementById("req-pref-reason").value || "Learner unavailable";

  closeModal();

  state.classDisruptions.rescheduleRequests = [{
    id: "RESCHEDULE-REQ-LEARNER-001",
    occurrenceId: occurrenceId,
    requestedBy: "Learner",
    requestedFor: "Ali Khan",
    preferredDate: date,
    preferredTime: time,
    reason: reason,
    status: "Pending"
  }];

  window.renderLearnerCourseWorkspace(enrolmentId);
  showToastAlert("Reschedule request submitted to Operations review queue.");
};










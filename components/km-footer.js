// km-footer.js
class KmFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href=".components/components.css">
      
      <section class="faq-section container-fluid">
        <div class="faq-body container">
            <br><br>
            <h2 class="fw-bold text-center text-white">Frequently Asked Questions</h2>
            <br>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                ${this.getFAQItems()}
            </div>
        </div>
      </section>

      <section class="py-5 text-white" id="contact-us">
        <div class="container text-center" style="border-top: 1px solid rgba(255, 255, 255, 0.186);">
          <br>
          <h2 class="fw-bold display-5 mb-3">Ready to Build Something Great?</h2>
          <p class="fs-5 mb-4">
              Let KM Construction turn your vision into reality. Whether it’s a new project or a renovation, we're
              here to help you every step of the way.
          </p>
          <a href="#contact" class="btn btn-outline-light btn-lg px-4">Contact Us</a>
        </div>
      </section>

      <footer class="text-white pt-5 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4">
                <h3 class="fw-bold">KM Construction</h3>
                <p class="fst-italic">"Building Dreams, Crafting Reality."</p>
            </div>
            <div class="col-md-4 mb-4">
                <h5 class="fw-semibold">Head Office</h5>
                <p>Karan Nagar, New Changorabhata, Main Road<br>Raipur, Chhattisgarh, India</p>
            </div>
            <div class="col-md-4 mb-4 quick-links">
                <h5 class="fw-semibold">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#about" class="text-decoration-none">About Us</a></li>
                    <li><a href="#projects" class="text-decoration-none">Projects</a></li>
                    <li><a href="#services" class="text-decoration-none">Services</a></li>
                    <li><a href="#contact-us" class="text-decoration-none">Contact</a></li>
                </ul>
            </div>
          </div>

          <hr class="border-secondary">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div class="mb-3 mb-md-0 d-flex align-items-center">
                  <a href="#" class="me-3">
                      <img src="assets/images/facebook.png" alt="Facebook" width="28" height="28">
                  </a>
                  <a href="#" class="me-3">
                      <img src="assets/images/instagram.png" alt="Instagram" width="28" height="28">
                  </a>
                  <a href="#">
                      <img src="assets/images/youtube.png" alt="YouTube" width="28" height="28">
                  </a>
              </div>
              <div class="small text-white policy-links">
                  <span>© 2025 KM Construction, Inc.</span>
              </div>
          </div>
        </div>
      </footer>
    `;
  }

  getFAQItems() {
    const faqs = [
      {
        q: "What services does KM Construction firm offer?",
        a: "We offer residential construction services including renovations, new builds, project management, and interior design."
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, we are fully licensed and carry comprehensive liability and workers’ compensation insurance."
      },
      {
        q: "What areas do you serve?",
        a: "We serve mostly in Raipur, Chhattisgarh."
      },
      {
        q: "How do I start a construction project with KM Construction?",
        a: "You can get started by scheduling a free consultation through our contact page or by calling us."
      },
      {
        q: "Can I contact you for maintenance or repairs after the project?",
        a: "Yes, we offer ongoing maintenance services and support."
      },
    ];

    return faqs
      .map((item, i) => {
        const index = i + 1;
        return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading${index}">
            <button class="accordion-button collapsed dark-accordion-btn fw-bold text-white" type="button"
              data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false"
              aria-controls="flush-collapse${index}">
              ${item.q}
            </button>
          </h2>
          <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body dark-accordion-btn text-white">
              ${item.a}
            </div>
          </div>
        </div>
        `;
      })
      .join("");
  }
}

customElements.define("km-footer", KmFooter);

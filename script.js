(function () {
  /* -------------------------------
     DROPDOWN MENU
  -------------------------------- */
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  function closeMenu() {
    if (!menu || !menuBtn) return;
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.body.addEventListener('click', closeMenu);
    menu.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Highlight current page
    const current = window.location.pathname.split('/').pop() || 'index.html';
    menu.querySelectorAll('a').forEach(a => {
      if (a.getAttribute('href') === current) a.classList.add('active');
    });
  }

  /* -------------------------------
     TRANSLATION (EN <-> ES)
  -------------------------------- */
  const translations = {
    en: {
      brand_tagline: "Interior & Exterior • Residential",

      nav_home: "Home",
      nav_gallery: "Gallery",
      nav_contact: "Contact / Estimate",

      btn_request_estimate: "Request an Estimate",
      btn_view_gallery: "View Our Work",
      btn_view_full_gallery: "View Full Gallery",
      btn_get_free_estimate: "Get a Free Estimate",
      btn_back_home: "Back to Home",
      btn_send_request: "Send Request",

      hero_title: "Clean prep. Crisp lines. A finish that lasts.",
      hero_desc: "Flores Painting (Javier Flores) provides reliable interior and exterior house painting. We focus on careful preparation, professional materials, and a smooth, even finish.",

      pill_1: "Interior repaint",
      pill_2: "Exterior repaint",
      pill_3: "Trim & doors",
      pill_4: "Light drywall patching",
      pill_5: "Clean & respectful worksite",

      hero_caption_title: "Serving homeowners with pride",
      hero_caption_sub: "Interior and exterior painting done right.",

      services_title: "Services",
      services_sub: "Residential-focused work with professional prep and cleanup.",
      svc1_title: "Interior Painting",
      svc1_desc: "Walls, ceilings, trim, doors, and accent walls with clean lines and even coverage.",
      svc2_title: "Exterior Painting",
      svc2_desc: "Full exterior repaints including trim and siding—durable finish and weather-ready prep.",
      svc3_title: "Prep & Repairs",
      svc3_desc: "Light patching, sanding, caulking, and surface prep so the finish looks smooth and lasts longer.",

      featured_title: "Featured Work",
      featured_sub: "A small preview—see the full gallery for more projects.",
      featured_1: "Exterior refresh",
      featured_2: "Interior walls + trim",
      featured_3: "Doors and accents",
      featured_4: "Clean finish detail",

      why_title: "Why homeowners choose us",
      why_sub: "Simple process, clear communication, professional results.",
      why1_title: "Careful preparation",
      why1_desc: "We protect floors and surfaces, patch where needed, and prep correctly before painting.",
      why2_title: "Respectful worksite",
      why2_desc: "We keep a clean workspace and treat your home with care from start to finish.",
      why3_title: "Quality finish",
      why3_desc: "Even coats, crisp edges, and consistent coverage—built to look great and hold up.",

      cta_title: "Ready for an estimate?",
      cta_sub: "Tell us what you need—interior, exterior, or both.",

      footer_rights: "All rights reserved.",
      footer_business_line: "Interior & Exterior House Painting",

      // Gallery page
      gallery_title: "Project Gallery",
      gallery_desc: "Replace these photos with real job pictures from Javier’s projects.",
      gal_meta_1: "Exterior repaint",
      gal_meta_2: "Interior walls",
      gal_meta_3: "Trim + doors",
      gal_meta_4: "Accent wall",
      gal_meta_5: "Exterior detail",
      gal_meta_6: "Interior refresh",
      gal_meta_7: "Trim work",
      gal_meta_8: "Clean finish",

      // Contact page
      contact_title: "Request an Estimate",
      contact_sub: "Tell us about your project and how to reach you.",
      estimate_notice: "We will provide an estimated price after we see the job or project you want done. Photos help, and an on-site look may be needed for an accurate quote.",

      name_label: "Full Name",
      phone_label: "Phone",
      email_label: "Email",
      service_label: "Service Needed",
      address_label: "Project Address (City/Area is fine)",
      details_label: "Project Details",

      service_placeholder: "Select one",
      service_opt_1: "Interior Painting",
      service_opt_2: "Exterior Painting",
      service_opt_3: "Interior + Exterior",
      service_opt_4: "Trim / Doors",
      service_opt_5: "Other",

      details_placeholder: "Example: 3 bedrooms + hallway, ceilings included, preferred color, timeline, any special notes...",
      consent: "By submitting, you agree we may contact you about your project and scheduling an on-site estimate if needed.",

      btn_view_gallery_contact: "View Gallery"
    },

    es: {
      brand_tagline: "Interior y Exterior • Residencial",

      nav_home: "Inicio",
      nav_gallery: "Galería",
      nav_contact: "Contacto / Presupuesto",

      btn_request_estimate: "Solicitar Presupuesto",
      btn_view_gallery: "Ver Nuestro Trabajo",
      btn_view_full_gallery: "Ver Galería Completa",
      btn_get_free_estimate: "Obtener Presupuesto Gratis",
      btn_back_home: "Volver al Inicio",
      btn_send_request: "Enviar Solicitud",

      hero_title: "Preparación limpia. Líneas perfectas. Un acabado duradero.",
      hero_desc: "Flores Painting (Javier Flores) ofrece servicios confiables de pintura interior y exterior. Nos enfocamos en una preparación cuidadosa, materiales profesionales y un acabado uniforme.",

      pill_1: "Pintura interior",
      pill_2: "Pintura exterior",
      pill_3: "Molduras y puertas",
      pill_4: "Resanes ligeros",
      pill_5: "Área limpia y respetuosa",

      hero_caption_title: "Sirviendo a hogares con orgullo",
      hero_caption_sub: "Pintura interior y exterior bien hecha.",

      services_title: "Servicios",
      services_sub: "Trabajo residencial con preparación profesional y limpieza.",
      svc1_title: "Pintura Interior",
      svc1_desc: "Paredes, techos, molduras, puertas y muros de acento con líneas limpias y buena cobertura.",
      svc2_title: "Pintura Exterior",
      svc2_desc: "Pintura exterior completa incluyendo molduras y revestimiento, con acabado durable y preparación adecuada.",
      svc3_title: "Preparación y Reparaciones",
      svc3_desc: "Resanes ligeros, lijado, sellado y preparación para que el acabado se vea mejor y dure más.",

      featured_title: "Trabajos Destacados",
      featured_sub: "Una vista previa—vea la galería completa para más proyectos.",
      featured_1: "Exterior renovado",
      featured_2: "Interior + molduras",
      featured_3: "Puertas y acentos",
      featured_4: "Detalle de acabado",

      why_title: "Por qué nos eligen",
      why_sub: "Proceso sencillo, comunicación clara y resultados profesionales.",
      why1_title: "Preparación cuidadosa",
      why1_desc: "Protegemos superficies, reparamos cuando es necesario y preparamos correctamente antes de p_

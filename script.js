(function () {
  /* -------------------------------
     DROPDOWN MENU (ROBUST)
  -------------------------------- */
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const dropdown = menuBtn ? menuBtn.closest('.dropdown') : null;

  function setOpen(isOpen) {
    if (!menu || !menuBtn) return;
    menu.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  }

  if (menuBtn && menu && dropdown) {
    // Toggle on button click
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpen(!menu.classList.contains('open'));
    });

    // Close only if click is outside the dropdown
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) setOpen(false);
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });

    // Highlight current page in menu
    const current = window.location.pathname.split('/').pop() || 'index.html';
    menu.querySelectorAll('a').forEach((a) => {
      if (a.getAttribute('href') === current) a.classList.add('active');
    });
  }

  /* -------------------------------
     TRANSLATION (EN <-> ES)
  -------------------------------- */
  const translations = {
    en: {
      brand_tagline: "Interior & Exterior • Residential",

      thanks_title: "Thank you!",
      thanks_msg: "We received your request. We will contact you soon to discuss your project and the next steps.",

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

      svc_badge_interior: "Interior",
svc_badge_exterior: "Exterior",
svc_badge_prep: "Prep",

svc_interior_chip_1: "Walls",
svc_interior_chip_2: "Ceilings",
svc_interior_chip_3: "Trim",
svc_interior_chip_4: "Doors",
svc_interior_chip_5: "Accent walls",

svc_exterior_chip_1: "Siding",
svc_exterior_chip_2: "Trim",
svc_exterior_chip_3: "Garage doors",
svc_exterior_chip_4: "Fascia",
svc_exterior_chip_5: "Touch-ups",

svc_prep_chip_1: "Patching",
svc_prep_chip_2: "Sanding",
svc_prep_chip_3: "Caulking",
svc_prep_chip_4: "Masking",
svc_prep_chip_5: "Surface prep",

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

      thanks_title: "¡Gracias!",
      thanks_msg: "Recibimos su solicitud. Nos comunicaremos pronto para hablar sobre su proyecto y los siguientes pasos.",
      
      btn_request_estimate: "Solicitar Presupuesto",
      btn_view_gallery: "Ver Nuestro Trabajo",
      btn_view_full_gallery: "Ver Galería Completa",
      btn_get_free_estimate: "Obtener Presupuesto Gratis",
      btn_back_home: "Volver al Inicio",
      btn_send_request: "Enviar Solicitud",

      hero_title: "Preparación limpia. Líneas perfectas. Un acabado duradero.",
      hero_desc: "Flores Painting (Javier Flores) ofrece servicios confiables de pintura interior y exterior. Nos enfocamos en una preparación cuidadosa, materiales profesionales y un acabado uniforme.",

      svc_badge_interior: "Interior",
svc_badge_exterior: "Exterior",
svc_badge_prep: "Preparación",

svc_interior_chip_1: "Paredes",
svc_interior_chip_2: "Techos",
svc_interior_chip_3: "Molduras",
svc_interior_chip_4: "Puertas",
svc_interior_chip_5: "Muros de acento",

svc_exterior_chip_1: "Revestimiento",
svc_exterior_chip_2: "Molduras",
svc_exterior_chip_3: "Puertas de garaje",
svc_exterior_chip_4: "Fascia",
svc_exterior_chip_5: "Retoques",

svc_prep_chip_1: "Resanes",
svc_prep_chip_2: "Lijado",
svc_prep_chip_3: "Sellado",
svc_prep_chip_4: "Enmascarado",
svc_prep_chip_5: "Preparación de superficie",

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
      why1_desc: "Protegemos superficies, reparamos cuando es necesario y preparamos correctamente antes de pintar.",
      why2_title: "Trabajo respetuoso",
      why2_desc: "Mantenemos el área limpia y cuidamos su hogar de principio a fin.",
      why3_title: "Acabado de calidad",
      why3_desc: "Capas uniformes, bordes definidos y cobertura consistente para que se vea excelente y dure.",

      cta_title: "¿Listo para un presupuesto?",
      cta_sub: "Cuéntenos lo que necesita: interior, exterior o ambos.",

      footer_rights: "Todos los derechos reservados.",
      footer_business_line: "Pintura Residencial Interior y Exterior",

      gallery_title: "Galería de Proyectos",
      gallery_desc: "Reemplace estas fotos con trabajos reales realizados por Javier.",
      gal_meta_1: "Pintura exterior",
      gal_meta_2: "Paredes interiores",
      gal_meta_3: "Molduras y puertas",
      gal_meta_4: "Muro de acento",
      gal_meta_5: "Detalle exterior",
      gal_meta_6: "Interior renovado",
      gal_meta_7: "Trabajo de molduras",
      gal_meta_8: "Acabado limpio",

      contact_title: "Solicitar Presupuesto",
      contact_sub: "Cuéntenos sobre su proyecto y cómo comunicarnos con usted.",
      estimate_notice: "Proporcionaremos un precio estimado después de ver el trabajo o proyecto que desea realizar. Las fotos ayudan y puede ser necesario visitar el lugar para dar un presupuesto preciso.",

      name_label: "Nombre Completo",
      phone_label: "Teléfono",
      email_label: "Correo Electrónico",
      service_label: "Servicio Necesario",
      address_label: "Dirección del Proyecto (Ciudad/Zona está bien)",
      details_label: "Detalles del Proyecto",

      service_placeholder: "Seleccione una opción",
      service_opt_1: "Pintura Interior",
      service_opt_2: "Pintura Exterior",
      service_opt_3: "Interior + Exterior",
      service_opt_4: "Molduras / Puertas",
      service_opt_5: "Otro",

      details_placeholder: "Ejemplo: 3 recámaras + pasillo, incluir techos, color preferido, fecha, notas...",
      consent: "Al enviar, usted acepta que podemos contactarle sobre su proyecto y coordinar una visita si es necesaria.",

      btn_view_gallery_contact: "Ver Galería"
    }
  };

  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('lang') || 'en';

  function applyText(lang) {
    document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = translations[lang]?.[key];
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = translations[lang]?.[key];
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    if (langToggle) langToggle.textContent = (lang === 'en') ? 'ES' : 'EN';
    localStorage.setItem('lang', lang);
  }

  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // important so it doesn't interact with dropdown closing
      currentLang = (currentLang === 'en') ? 'es' : 'en';
      applyText(currentLang);
    });
  }

  applyText(currentLang);
})();

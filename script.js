(function(){
  // Set active nav item based on current file name
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = document.querySelectorAll('[data-nav]');
  links.forEach(a => {
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  // Build mailto link from form (no backend needed)
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const to = form.getAttribute('data-to') || 'your@email.com';
      const name = (document.querySelector('#name')||{}).value || '';
      const org = (document.querySelector('#org')||{}).value || '';
      const role = (document.querySelector('#role')||{}).value || '';
      const email = (document.querySelector('#email')||{}).value || '';
      const topic = (document.querySelector('#topic')||{}).value || '';
      const msg = (document.querySelector('#message')||{}).value || '';

      const subject = encodeURIComponent(`Workshop inquiry: ${topic || 'Program support'}`);
      const body = encodeURIComponent(
`Hi Ann,

My name is ${name}${role ? ` (${role})` : ''}${org ? ` at ${org}` : ''}.
You can reach me at: ${email}

Audience + cohort details:
- Audience: 
- Program type:
- Cohort size:
- Delivery: (in-person / virtual)
- Interpreter/ESL needs:

What we’re hoping to achieve:
${msg}

Preferred time windows for a 10–15 min call:
- Option 1:
- Option 2:

Thanks,
${name}`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();

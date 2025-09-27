Future Smart Support — Static Website
====================================

Deploy options (Netlify / Vercel / GitHub Pages)
------------------------------------------------
1) Netlify (recommended)
   - Drag & drop the folder into https://app.netlify.com (Add new site → Deploy manually)
   - Then add a custom domain: FutureSmartSupport.com
   - Point DNS 'www' CNAME to your-site.netlify.app
   - Enable HTTPS (Let's Encrypt)

2) Vercel
   - Import as a project (no build step required for pure static)
   - Add your custom domain and follow the DNS wizard.

3) GitHub Pages
   - Push to a repo → Settings → Pages → Deploy from /root

Contact form
------------
- The contact form uses Formspree (placeholder action URL).
- Replace action with your Formspree endpoint or use "mailto:hello@FutureSmartSupport.com".

Email on your domain
--------------------
- Choose an email provider (e.g., Google Workspace, Microsoft 365, Zoho Mail, or Cloudflare Email Routing).
- Create mailbox 'hello@FutureSmartSupport.com'.
- Add MX, SPF, DKIM, and (optionally) DMARC records from your provider into your DNS.
- Wait for DNS to propagate, then test sending/receiving.

Files
-----
- index.html  — main page
- styles.css  — styling
- script.js   — interactions
- assets/FSS_Logo.svg — your logo

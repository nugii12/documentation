(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{421:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-ssl-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-ssl-certificates"}},[e._v("#")]),e._v(" Creating SSL Certificates")]),e._v(" "),a("p",[e._v("This tutorial briefly covers creating new SSL certificates for your panel and wings.")]),e._v(" "),a("tabs",[a("tab",{attrs:{name:"Method 1: Certbot"}},[a("p",[e._v("To begin, we will install certbot, a simple script that automatically renews our certificates and allows much\neasier creation of them. The command below is for Ubuntu distributions, but you can always check "),a("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certbot's official\nsite"),a("OutboundLink")],1),e._v(" for installation instructions. We have also included a command below to install certbot's\nNginx/Apache plugin so you won't have to stop your webserver.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y certbot\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run this if you use Nginx")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y python3-certbot-nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run this if you use Apache")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y python3-certbot-apache\n")])])]),a("h2",{attrs:{id:"creating-a-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate"}},[e._v("#")]),e._v(" Creating a Certificate")]),e._v(" "),a("p",[e._v("After installing the certbot, we need to generate a certificate. There are a couple of ways to do that, but the easiest\nis to use the web server-specific certbot plugin you just installed. For Wings-only machines that don't need a web server, use the standalone or DNS method of the certbot as you don't need a web server for it.")]),e._v(" "),a("p",[e._v("Then, in the command below, you should replace "),a("code",[e._v("example.com")]),e._v(" with the domain you would like to generate a certificate\nfor.  When you have multiple domains you would like certificates for, simply add more "),a("code",[e._v("-d anotherdomain.com")]),e._v(" flags to the\ncommand. You can also look into generating a wildcard certificate but that is not covered in this tutorial.")]),e._v(" "),a("p",[e._v("When you are using certbot's Nginx/Apache plugin, you won't need to restart your webserver to have the certificate\napplied assuming that you've already configured the webservers to use SSL as instructed in the "),a("a",{attrs:{href:"https://pterodactyl.io/panel/1.0/webserver_configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web server configuration step"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"http-challenge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-challenge"}},[e._v("#")]),e._v(" HTTP challenge")]),e._v(" "),a("p",[e._v("HTTP challenge requires you to expose port 80 for the challenge verification.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Nginx")]),e._v("\ncertbot certonly --nginx -d example.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Apache")]),e._v("\ncertbot certonly --apache -d example.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.")]),e._v("\ncertbot certonly --standalone -d example.com\n")])])]),a("h3",{attrs:{id:"dns-challenge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-challenge"}},[e._v("#")]),e._v(" DNS challenge")]),e._v(" "),a("p",[e._v("DNS challenge requires you to create a new TXT DNS record to verify domain ownership, instead of having to expose port 80. The instructions are displayed when you run the certbot command below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("certbot -d example.com --manual --preferred-challenges dns certonly\n")])])]),a("h3",{attrs:{id:"auto-renewal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal"}},[e._v("#")]),e._v(" Auto Renewal")]),e._v(" "),a("p",[e._v("You'll also probably want to configure the automatic renewal of certificates to prevent unexpected certificate expirations.\nYou can open crontab with "),a("code",[e._v("sudo crontab- e")]),e._v(" and add the line from below to the bottom of it for attempting renewal every day at 23 (11 PM).")]),e._v(" "),a("p",[e._v("Deploy hook would restart the Nginx service to apply a new certificate when it's renewed successfully. Change "),a("code",[e._v("nginx")]),e._v(" in the restart command to suit your own needs, such as to "),a("code",[e._v("apache")]),e._v(" or "),a("code",[e._v("wings")]),e._v(".")]),e._v(" "),a("p",[e._v("For advanced users, we suggest installing and using "),a("a",{attrs:{href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acme.sh"),a("OutboundLink")],1),e._v("\nwhich provides more options, and is much more powerful than certbot.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"\n')])])]),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("If you get an "),a("code",[e._v("Insecure Connection")]),e._v(" or SSL/TLS related error when trying to access your panel or wings, the certificate has likely expired.\nThis can be easily fixed by renewing the SSL certificate, although using the command "),a("code",[e._v("certbot renew")]),e._v(" might not do the job if port 80 is in use, as it'll return errors like: "),a("code",[e._v("Error: Attempting to renew cert (domain) from /etc/letsencrypt/renew/domain.conf produced an unexpected error")]),e._v(".")]),e._v(" "),a("p",[e._v("This will happen especially if you're running Nginx instead of Apache. The solution for this is to use Nginx or Apache plugins with "),a("code",[e._v("--nginx")]),e._v(" and "),a("code",[e._v("--apache")]),e._v(". Alternatively, you can stop Nginx, then renew the certificate, finally restart Nginx. Replace "),a("code",[e._v("nginx")]),e._v(" with your own web server or with "),a("code",[e._v("wings")]),e._v(" should you be renewing the certificate for Wings.")]),e._v(" "),a("p",[e._v("Stop Nginx:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl stop nginx\n")])])]),a("p",[e._v("Renew the certificate:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("certbot renew\n")])])]),a("p",[e._v("Once the process has complete, you can restart the Nginx service:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl start nginx\n")])])])]),e._v(" "),a("tab",{attrs:{name:"Method 2: acme.sh (Cloudflare)"}},[a("p",[e._v("This is for advanced users, whose server systems do not have access to port 80. The command below is for Ubuntu distributions and CloudFlare API (you may google for other APIs for other DNS providers), but you can always check "),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("acme.sh's official site"),a("OutboundLink")],1),e._v(" for installation instructions.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://get.acme.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])])]),a("h3",{attrs:{id:"obtaining-cloudflare-api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-cloudflare-api-key"}},[e._v("#")]),e._v(" Obtaining CloudFlare API Key")]),e._v(" "),a("p",[e._v('After installing acme.sh, we need to fetch a CloudFlare API key. Please make sure that a DNS record (A or CNAME record) is pointing to your target node, and set the cloud to grey (bypassing CloudFlare proxy). Then go to My Profile > API keys and on Global API Key subtab, click on "view", enter your CloudFlare password, and copy the API key to clipboard.')]),e._v(" "),a("h3",{attrs:{id:"creating-a-certificate-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-certificate-2"}},[e._v("#")]),e._v(" Creating a Certificate")]),e._v(" "),a("p",[e._v("Since the configuration file is based on Certbot, we need to create the folder manually.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /etc/letsencrypt/live/example.com\n")])])]),a("p",[e._v("After installing acme.sh and obtaining CloudFlare API key, we need to then generate a certificate. First input the CloudFlare API credentials.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your_CloudFlare_API_Key"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Email")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your_CloudFlare_Account@example.com"')]),e._v("\n\n")])])]),a("p",[e._v("Then create the certificate.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh --issue --dns dns_cf -d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example.com"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--key-file /etc/letsencrypt/live/example.com/privkey.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem\n")])])]),a("h3",{attrs:{id:"auto-renewal-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-renewal-2"}},[e._v("#")]),e._v(" Auto Renewal")]),e._v(" "),a("p",[e._v("After running the script for the first time, it will be added to the crontab automatically. You may edit the auto renewal interval by editing the crontab.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("crontab")]),e._v(" -e\n")])])])])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);
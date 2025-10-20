import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Beranda" },
    { to: "/artikel", label: "Artikel" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/kontak", label: "Kontak" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:info@gusdurian-tunisia.org", label: "Email" },
    { icon: Phone, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-2">
              Gusdurian Tunisia
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meneruskan cinta, nilai pluralisme, dan kemanusiaan Gus Dur dari Tunisia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Navigasi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Hubungi Kami</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Tunisia</p>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gusdurian Tunisia — Meneruskan Cinta Gus Dur dari Tunisia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

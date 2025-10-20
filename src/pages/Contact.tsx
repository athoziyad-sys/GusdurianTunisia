import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      href: "#",
      handle: "@gusdurian.tunisia"
    },
    { 
      icon: Youtube, 
      label: "YouTube", 
      href: "#",
      handle: "Gusdurian Tunisia"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:info@gusdurian-tunisia.org",
      handle: "info@gusdurian-tunisia.org"
    },
    { 
      icon: Phone, 
      label: "WhatsApp", 
      href: "#",
      handle: "+216 XX XXX XXX"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-muted/50">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Hubungi Kami
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ada pertanyaan atau ingin bergabung? Kami senang mendengar dari Anda
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Lokasi</h3>
                    <p className="text-muted-foreground">Tunisia</p>
                  </div>
                </div>

                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div key={social.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{social.label}</h3>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {social.handle}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Media Sosial
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ikuti kami di media sosial untuk update terbaru tentang kegiatan dan artikel kami.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Admin = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    image_url: "",
    excerpt: "",
    content: ""
  });

  const categories = ["Pemikiran", "Keagamaan", "Kemanusiaan", "Komunitas", "Budaya", "Pemuda"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.author || !formData.category || !formData.excerpt || !formData.content) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi.",
        variant: "destructive"
      });
      return;
    }

    // This is a placeholder - in production, this would connect to Supabase
    toast({
      title: "Artikel Berhasil Dibuat!",
      description: "Artikel baru telah ditambahkan. (Placeholder - belum tersimpan ke database)",
    });

    // Reset form
    setFormData({
      title: "",
      author: "",
      category: "",
      image_url: "",
      excerpt: "",
      content: ""
    });
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-muted/50">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Kelola artikel dan konten website
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-xl p-8 card-shadow">
            <h2 className="font-heading text-2xl font-bold mb-6">
              Tambah Artikel Baru
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Judul Artikel <span className="text-destructive">*</span>
                </label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Masukkan judul artikel"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium mb-2">
                    Penulis <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="author"
                    type="text"
                    placeholder="Nama penulis"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Kategori <span className="text-destructive">*</span>
                  </label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="image_url" className="block text-sm font-medium mb-2">
                  URL Gambar
                </label>
                <Input
                  id="image_url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Opsional - URL gambar cover artikel
                </p>
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                  Ringkasan <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="excerpt"
                  placeholder="Tulis ringkasan singkat artikel (max 200 karakter)"
                  rows={3}
                  maxLength={200}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.excerpt.length}/200 karakter
                </p>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Konten Artikel <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="content"
                  placeholder="Tulis konten artikel lengkap di sini (mendukung HTML)"
                  rows={12}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Gunakan HTML tags untuk formatting (contoh: &lt;p&gt;, &lt;h2&gt;, &lt;blockquote&gt;)
                </p>
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  Publikasikan Artikel
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg"
                  onClick={() => setFormData({
                    title: "",
                    author: "",
                    category: "",
                    image_url: "",
                    excerpt: "",
                    content: ""
                  })}
                >
                  Reset
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Ini adalah placeholder admin dashboard. Untuk menghubungkan ke database Supabase, 
                  aktifkan Lovable Cloud dan tambahkan tabel "articles" dengan field yang sesuai.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;

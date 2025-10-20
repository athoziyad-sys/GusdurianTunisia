import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="min-h-screen">
      <section className="bg-muted/50 pt-24 pb-12">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
            Artikel
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Baca berbagai pemikiran dan refleksi tentang nilai-nilai kemanusiaan, pluralisme, dan toleransi
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "Semua" && !searchQuery && (
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="font-heading text-2xl font-bold mb-6">Artikel Pilihan</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-xl overflow-hidden card-shadow">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img 
                  src={featuredArticle.image_url}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 w-fit">
                  {featuredArticle.category}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{featuredArticle.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredArticle.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <Button asChild>
                  <a href={`/artikel/${featuredArticle.id}`}>Baca Selengkapnya</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada artikel yang ditemukan.</p>
            </div>
          ) : (
            <>
              <h2 className="font-heading text-2xl font-bold mb-6">
                {searchQuery || selectedCategory !== "Semua" ? "Hasil Pencarian" : "Semua Artikel"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <div 
                    key={article.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Articles;

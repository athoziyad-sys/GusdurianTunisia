import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Heart, Users, BookOpen, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import featuredImage from "@/assets/article-featured.jpg";

const Home = () => {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 1);
  const latestArticles = articles.slice(0, 3);

  const values = [
    {
      icon: Heart,
      title: "Kemanusiaan",
      description: "Menjunjung tinggi martabat dan hak setiap manusia tanpa diskriminasi."
    },
    {
      icon: Users,
      title: "Pluralisme",
      description: "Merayakan keberagaman sebagai kekayaan, bukan ancaman."
    },
    {
      icon: BookOpen,
      title: "Toleransi",
      description: "Menghormati perbedaan keyakinan dengan dialog konstruktif."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="container-custom relative z-10 text-center text-white animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Meneruskan Cinta Gus Dur dari Tunisia
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95 drop-shadow">
            Komunitas yang menjunjung nilai pluralisme, toleransi, dan kemanusiaan universal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/artikel">
                Baca Artikel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Link to="/tentang-kami">Gabung Komunitas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Terinspirasi dari ajaran Gus Dur, kami berkomitmen untuk menyebarkan nilai-nilai luhur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 card-shadow hover-lift text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticles.length > 0 && (
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Artikel Pilihan
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={featuredImage}
                  alt={featuredArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {featuredArticles[0].category}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticles[0].excerpt}
                </p>
                <Button asChild>
                  <Link to={`/artikel/${featuredArticles[0].id}`}>
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="section-spacing bg-muted/50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Artikel Terbaru
            </h2>
            <Button asChild variant="ghost">
              <Link to="/artikel">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <div 
                key={article.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Mari bersama meneruskan nilai-nilai kemanusiaan, pluralisme, dan toleransi
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link to="/kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ArticleDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <Button asChild>
            <Link to="/artikel">Kembali ke Artikel</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    let shareUrl = "";
    switch(platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link disalin!",
          description: "Link artikel telah disalin ke clipboard.",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-8 bg-muted/50">
        <div className="container-custom">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/artikel">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Artikel
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.created_at).toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleShare("facebook")}>
                <Facebook className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare("twitter")}>
                <Twitter className="h-4 w-4 mr-2" />
                Tweet
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")}>
                <Linkedin className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare("copy")}>
                <Share2 className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-12">
              <img 
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose-custom prose-headings:font-heading prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-spacing bg-muted/50">
          <div className="container-custom">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map(related => (
                <ArticleCard key={related.id} {...related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;

import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  created_at: string;
  image_url: string;
  category?: string;
}

const ArticleCard = ({ id, title, excerpt, author, created_at, image_url, category }: ArticleCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden card-shadow hover-lift">
      <Link to={`/artikel/${id}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            {category}
          </span>
        )}
        
        <Link to={`/artikel/${id}`}>
          <h3 className="font-heading font-semibold text-xl mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
        
        <Link to={`/artikel/${id}`}>
          <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary">
            Baca Selengkapnya
            <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;

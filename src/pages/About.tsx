import { Heart, Users, BookOpen } from "lucide-react";
import gusDurPortrait from "@/assets/gus-dur-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Kemanusiaan",
      description: "Menjunjung tinggi martabat dan hak asasi setiap manusia tanpa memandang latar belakang. Kami percaya bahwa setiap individu memiliki nilai yang sama dan berhak mendapat perlakuan yang adil."
    },
    {
      icon: Users,
      title: "Pluralisme",
      description: "Merayakan keberagaman sebagai kekayaan bangsa dan dunia. Perbedaan agama, budaya, dan pemikiran adalah anugerah yang harus dihargai dan dijaga bersama."
    },
    {
      icon: BookOpen,
      title: "Toleransi",
      description: "Menghormati perbedaan keyakinan dengan dialog yang konstruktif dan saling menghargai. Toleransi bukan berarti menerima begitu saja, tetapi memahami dengan kritis dan penuh empati."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-muted/50">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Tentang Kami
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat Gusdurian Tunisia dan misi kami
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Siapa Kami?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Gusdurian Tunisia</strong> adalah komunitas budaya dan kemanusiaan yang terinspirasi dari pemikiran dan nilai-nilai luhur Abdurrahman Wahid (Gus Dur), tokoh besar Indonesia yang dikenal dengan pembelaannya terhadap pluralisme, toleransi, dan kemanusiaan universal.
                </p>
                <p>
                  Kami hadir di Tunisia untuk meneruskan warisan intelektual dan spiritual Gus Dur, dengan fokus pada dialog antarbudaya, antaragama, dan upaya membangun masyarakat yang lebih inklusif dan harmonis.
                </p>
                <p>
                  Melalui berbagai kegiatan seperti diskusi, seminar, kegiatan sosial, dan publikasi artikel, kami berkomitmen untuk menyebarkan nilai-nilai kebaikan dan kemanusiaan di tengah masyarakat Tunisia dan dunia.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-xl overflow-hidden card-shadow">
                <img 
                  src={gusDurPortrait}
                  alt="Gus Dur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl card-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi komunitas yang menjembatani dialog dan pemahaman antarbudaya serta antaragama di Tunisia, dengan mengedepankan nilai-nilai pluralisme, toleransi, dan kemanusiaan universal yang diajarkan oleh Gus Dur.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl card-shadow">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Misi Kami</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Menyelenggarakan kegiatan edukatif tentang pluralisme dan toleransi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Memfasilitasi dialog antarbudaya dan antaragama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Menerbitkan artikel dan materi edukatif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mengembangkan jaringan komunitas yang inklusif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tiga pilar utama yang menjadi fondasi gerakan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 card-shadow text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-2xl md:text-3xl italic text-foreground mb-6">
              "Perbedaan adalah rahmat, bukan ancaman. Kita harus belajar hidup berdampingan dengan damai."
            </blockquote>
            <p className="text-muted-foreground">— Abdurrahman Wahid (Gus Dur)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

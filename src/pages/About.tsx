import { Building2, Users, Target, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every product meets the highest international standards',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships with our clients',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuous improvement of our production technologies',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'OHSAS 18001 Occupational Safety',
    'GOST Standards Compliance',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-metal relative">
        <div className="absolute inset-0 metal-texture opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-copper-300 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our state-of-the-art facility spans over 10,000 square meters and is equipped with 
                the latest cold rolling mills, annealing furnaces, and quality control equipment 
                from leading European manufacturers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-muted">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
                <div className="p-6 rounded-xl bg-muted">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">{t('about.clients')}</div>
                </div>
                <div className="p-6 rounded-xl bg-muted">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{t('about.products')}</div>
                </div>
                <div className="p-6 rounded-xl bg-muted">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">{t('about.quality')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl gradient-copper p-1 shadow-copper">
                <div className="w-full h-full rounded-xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-shine flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-secondary">Cu</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-2">
                      COPPER METAL
                    </h3>
                    <p className="text-copper-300">Premium Quality Since 2009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-copper transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl gradient-copper flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {t('about.quality')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our commitment to quality is backed by internationally recognized certifications
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

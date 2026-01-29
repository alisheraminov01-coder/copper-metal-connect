import { Users, Target, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import copperProductionImg from '@/assets/copper-production.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Качество прежде всего',
      description: 'Каждый продукт соответствует высочайшим международным стандартам',
    },
    {
      icon: Users,
      title: 'Ориентация на клиента',
      description: 'Построение долгосрочных партнёрских отношений с нашими клиентами',
    },
    {
      icon: Award,
      title: 'Инновации',
      description: 'Постоянное совершенствование наших производственных технологий',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Система менеджмента качества',
    'ISO 14001:2015 Экологический менеджмент',
    'OHSAS 18001 Охрана труда',
    'Соответствие стандартам ГОСТ',
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
                Наше современное производство занимает площадь более 10 000 квадратных метров и оснащено 
                новейшими станами холодной прокатки, отжиговыми печами и оборудованием контроля качества 
                от ведущих европейских производителей.
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
                  <div className="text-4xl font-heading font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">{t('about.products')}</div>
                </div>
                <div className="p-6 rounded-xl bg-muted">
                  <div className="text-lg font-heading font-bold text-primary mb-2">{t('about.hasCertificates')}</div>
                  <div className="text-sm text-muted-foreground">{t('about.quality')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-copper">
                <img 
                  src={copperProductionImg} 
                  alt="Copper production facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Наши ценности
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
              Наша приверженность качеству подтверждена международно признанными сертификатами
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

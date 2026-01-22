import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Vacancies = () => {
  const { t } = useLanguage();

  const vacancies = [
    {
      key: 'engineer',
      salary: '3,000,000 - 5,000,000 UZS',
      type: 'Full-time',
      location: 'Tashkent',
      requirements: [
        'Higher technical education',
        '3+ years of experience',
        'Knowledge of metallurgical processes',
        'English language skills',
      ],
    },
    {
      key: 'operator',
      salary: '2,000,000 - 3,500,000 UZS',
      type: 'Full-time / Shift',
      location: 'Tashkent',
      requirements: [
        'Technical secondary education',
        'Experience with industrial equipment',
        'Physical fitness',
        'Team player',
      ],
    },
    {
      key: 'manager',
      salary: '4,000,000 - 8,000,000 UZS',
      type: 'Full-time',
      location: 'Tashkent',
      requirements: [
        'Higher education (economics/management)',
        '2+ years in B2B sales',
        'Excellent communication skills',
        'Russian and English languages',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-metal relative">
        <div className="absolute inset-0 metal-texture opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {t('vacancies.title')}
            </h1>
            <p className="text-xl text-copper-300 leading-relaxed">
              {t('vacancies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy, index) => (
              <div
                key={vacancy.key}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-copper animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      {t(`vacancies.${vacancy.key}`)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t(`vacancies.${vacancy.key}.desc`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {vacancy.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {t('contacts.workHoursValue')}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {vacancy.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <div className="text-xl font-heading font-bold text-primary mb-4">
                      {vacancy.salary}
                    </div>
                    <Link to="/contacts">
                      <Button className="gradient-copper text-secondary font-semibold">
                        {t('vacancies.apply')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Competitive Salary', desc: 'Above-market compensation packages' },
              { title: 'Career Growth', desc: 'Professional development opportunities' },
              { title: 'Modern Workplace', desc: 'State-of-the-art equipment and facilities' },
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-copper flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacancies;

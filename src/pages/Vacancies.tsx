import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Vacancies = () => {
  const { t } = useLanguage();

  const vacancies = [
    {
      key: 'engineer',
      salary: '3 000 000 - 5 000 000 сум',
      type: 'Полная занятость',
      location: 'Бекабад',
      requirements: [
        'Высшее техническое образование',
        'Опыт работы от 3 лет',
        'Знание металлургических процессов',
        'Знание английского языка',
      ],
    },
    {
      key: 'operator',
      salary: '2 000 000 - 3 500 000 сум',
      type: 'Полная занятость / Сменный график',
      location: 'Бекабад',
      requirements: [
        'Среднее техническое образование',
        'Опыт работы с промышленным оборудованием',
        'Физическая выносливость',
        'Умение работать в команде',
      ],
    },
    {
      key: 'manager',
      salary: '4 000 000 - 8 000 000 сум',
      type: 'Полная занятость',
      location: 'Бекабад',
      requirements: [
        'Высшее образование (экономика/менеджмент)',
        'Опыт в B2B продажах от 2 лет',
        'Отличные коммуникативные навыки',
        'Знание русского и английского языков',
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
                      <h4 className="text-sm font-semibold text-foreground mb-3">Требования:</h4>
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

    </div>
  );
};

export default Vacancies;

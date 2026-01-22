import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Factory, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ApplicationForm } from '@/components/ApplicationForm';
import logo from '@/assets/logo.png';

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t('about.experience') },
    { value: '200+', label: t('about.clients') },
    { value: '20+', label: t('about.products') },
  ];

  const features = [
    {
      icon: Shield,
      title: t('features.iso'),
      description: t('features.isoDesc'),
    },
    {
      icon: Factory,
      title: t('features.modernProduction'),
      description: t('features.modernProductionDesc'),
    },
    {
      icon: Zap,
      title: t('features.fastDelivery'),
      description: t('features.fastDeliveryDesc'),
    },
  ];

  const products = [
    { key: 'sheets', icon: '📄' },
    { key: 'strips', icon: '🔧' },
    { key: 'rods', icon: '⚙️' },
    { key: 'wire', icon: '🔌' },
    { key: 'foil', icon: '🔖' },
    { key: 'alloys', icon: '🏭' },
    { key: 'custom', icon: '✨' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-metal">
        <div className="absolute inset-0 metal-texture opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent" />
        </div>
        
        <div className="absolute top-6 left-6 z-20">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-500/20 border border-copper-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-copper-300">Made in Uzbekistan</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-copper-300 mb-8 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacts">
                <Button size="lg" className="gradient-copper text-secondary font-semibold text-lg px-8 hover:opacity-90 transition-opacity shadow-copper">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-copper-500 text-copper-200 hover:bg-copper-500/20 font-semibold text-lg px-8">
                  {t('hero.catalog')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm border-t border-copper-700/30">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-copper-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('about.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-copper"
              >
                <div className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                {t('products.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('products.subtitle')}
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('hero.catalog')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.key}
                to="/products"
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-copper animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{product.icon}</div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(`products.${product.key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`products.${product.key}.desc`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 gradient-metal relative">
        <div className="absolute inset-0 metal-texture opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                {t('form.title')}
              </h2>
              <p className="text-lg text-copper-300 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-copper-200">{t('about.quality')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-copper-200">{t('contacts.workHoursValue')}</span>
                </div>
              </div>
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-industrial border border-copper-700/30">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

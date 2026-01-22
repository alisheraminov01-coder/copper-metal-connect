import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      key: 'sheets',
      icon: '📄',
      specs: ['Thickness: 0.1 - 10 mm', 'Width: up to 1000 mm', 'M1, M2, M3 grades'],
    },
    {
      key: 'strips',
      icon: '🔧',
      specs: ['Thickness: 0.05 - 3 mm', 'Width: 5 - 400 mm', 'Coil or cut length'],
    },
    {
      key: 'rods',
      icon: '⚙️',
      specs: ['Diameter: 3 - 100 mm', 'Length: up to 6 m', 'Round and hexagonal'],
    },
    {
      key: 'wire',
      icon: '🔌',
      specs: ['Diameter: 0.1 - 12 mm', 'Soft and hard temper', 'Various coatings'],
    },
    {
      key: 'alloys',
      icon: '🏭',
      specs: ['Bronze (CuSn, CuAl)', 'Brass (CuZn)', 'Cupronickel (CuNi)'],
    },
    {
      key: 'custom',
      icon: '✨',
      specs: ['Custom dimensions', 'Special alloys', 'Heat treatment'],
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
              {t('products.title')}
            </h1>
            <p className="text-xl text-copper-300 leading-relaxed">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.key}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-copper animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6">{product.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(`products.${product.key}`)}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t(`products.${product.key}.desc`)}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link to="/contacts">
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
              Production Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Copper Grades
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• M0 - oxygen-free copper (99.99%)</li>
                  <li>• M1 - electrolytic copper (99.9%)</li>
                  <li>• M2 - deoxidized copper (99.7%)</li>
                  <li>• M3 - technical copper (99.5%)</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Quality Control
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Chemical composition analysis</li>
                  <li>• Mechanical properties testing</li>
                  <li>• Dimensional inspection</li>
                  <li>• Surface quality control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-metal relative">
        <div className="absolute inset-0 metal-texture opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            {t('products.custom.desc')}
          </h2>
          <p className="text-lg text-copper-300 mb-8 max-w-2xl mx-auto">
            Contact us for custom orders, special alloys, and specific dimensions
          </p>
          <Link to="/contacts">
            <Button size="lg" className="gradient-copper text-secondary font-semibold text-lg px-8 shadow-copper">
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;

import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Ribbon, ScrollText, Cable, Cog, Wand2, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Products = () => {
  const { t } = useLanguage();

  const products: { key: string; icon: LucideIcon; specs: string[] }[] = [
    {
      key: 'sheets',
      icon: Layers,
      specs: ['Толщина: 0,5 - 16 мм', 'Ширина: до 1000 мм', 'Марки М1, М2, М3'],
    },
    {
      key: 'strips',
      icon: Ribbon,
      specs: ['Толщина: 0,035 - 16 мм', 'Ширина: 10 - 450 мм', 'В рулонах или листах'],
    },
    {
      key: 'foil',
      icon: ScrollText,
      specs: ['Толщина: от 0,01 мм', 'Высокая пластичность', 'Для электроники и упаковки'],
    },
    {
      key: 'copperStrips',
      icon: Cable,
      specs: ['Толщина: 0,1 - 10 мм', 'Ширина: 20 - 600 мм', 'Высокая электропроводность'],
    },
    {
      key: 'alloys',
      icon: Cog,
      specs: ['Латунь (CuZn)', 'Специальные сплавы'],
    },
    {
      key: 'custom',
      icon: Wand2,
      specs: ['Нестандартные размеры', 'Специальные сплавы', 'Термообработка'],
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
                <div className="w-16 h-16 rounded-xl gradient-copper flex items-center justify-center mb-6 shadow-copper group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-secondary" />
                </div>
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
              Стандарты производства
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Марки меди
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• М0 - бескислородная медь (99.99%)</li>
                  <li>• М1 - электролитическая медь (99.9%)</li>
                  <li>• М2 - раскисленная медь (99.7%)</li>
                  <li>• М3 - техническая медь (99.5%)</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Контроль качества
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Анализ химического состава</li>
                  <li>• Испытания механических свойств</li>
                  <li>• Контроль размеров</li>
                  <li>• Контроль качества поверхности</li>
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
            Свяжитесь с нами для заказа нестандартных размеров и специальных сплавов
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

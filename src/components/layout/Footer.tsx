import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-copper-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-copper flex items-center justify-center shadow-copper">
                <span className="text-2xl font-heading font-bold text-secondary">Cu</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground">COPPER METAL</h3>
                <p className="text-xs text-copper-400">Uzbekistan</p>
              </div>
            </div>
            <p className="text-copper-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">
              {t('nav.home')}
            </h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-sm text-copper-300 hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block text-sm text-copper-300 hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/products" className="block text-sm text-copper-300 hover:text-primary transition-colors">
                {t('nav.products')}
              </Link>
              <Link to="/vacancies" className="block text-sm text-copper-300 hover:text-primary transition-colors">
                {t('nav.vacancies')}
              </Link>
              <Link to="/contacts" className="block text-sm text-copper-300 hover:text-primary transition-colors">
                {t('nav.contacts')}
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">
              {t('products.title')}
            </h4>
            <nav className="space-y-3">
              <span className="block text-sm text-copper-300">{t('products.sheets')}</span>
              <span className="block text-sm text-copper-300">{t('products.strips')}</span>
              <span className="block text-sm text-copper-300">{t('products.rods')}</span>
              <span className="block text-sm text-copper-300">{t('products.wire')}</span>
              <span className="block text-sm text-copper-300">{t('products.alloys')}</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-6">
              {t('contacts.title')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-copper-300">{t('contacts.addressValue')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+998712345678" className="text-sm text-copper-300 hover:text-primary transition-colors">
                  +998 71 234 56 78
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@coppermetal.uz" className="text-sm text-copper-300 hover:text-primary transition-colors">
                  info@coppermetal.uz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-copper-300">{t('contacts.workHoursValue')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-copper-700/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-copper-400">
              © {new Date().getFullYear()} Copper Metal. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-copper-400">Made in Uzbekistan 🇺🇿</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

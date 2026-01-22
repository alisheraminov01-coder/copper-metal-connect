import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ApplicationForm } from '@/components/ApplicationForm';

const Contacts = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contacts.address'),
      value: t('contacts.addressValue'),
      link: 'https://maps.google.com/?q=Tashkent,Uzbekistan',
    },
    {
      icon: Phone,
      title: t('contacts.phone'),
      value: '+998 71 234 56 78',
      link: 'tel:+998712345678',
    },
    {
      icon: Mail,
      title: t('contacts.email'),
      value: 'info@coppermetal.uz',
      link: 'mailto:info@coppermetal.uz',
    },
    {
      icon: Clock,
      title: t('contacts.workHours'),
      value: t('contacts.workHoursValue'),
      link: null,
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
              {t('contacts.title')}
            </h1>
            <p className="text-xl text-copper-300 leading-relaxed">
              {t('contacts.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                {t('contacts.subtitle')}
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-copper flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-lg font-medium text-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83998565493!2d69.13928845!3d41.31149435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="sticky top-28">
                <div className="p-8 rounded-2xl bg-card border border-border shadow-industrial">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg gradient-copper flex items-center justify-center">
                      <Send className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">
                      {t('form.title')}
                    </h2>
                  </div>
                  <ApplicationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;

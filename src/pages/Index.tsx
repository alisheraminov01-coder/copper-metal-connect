import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Factory, Zap, Sparkles, Layers, Ribbon, ScrollText, Cable, Cog, Wand2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ApplicationForm } from '@/components/ApplicationForm';

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t('about.experience') },
    { value: '200+', label: t('about.clients') },
    { value: '20+', label: t('about.products') },
    { value: '3600', label: t('about.turnover') },
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
      title: t('features.delivery'),
      description: t('features.deliveryDesc'),
    },
    {
      icon: Shield,
      title: t('features.localCertificate'),
      description: t('features.localCertificateDesc'),
    },
  ];

  const products = [
    { key: 'sheets', icon: Layers },
    { key: 'strips', icon: Ribbon },
    { key: 'foil', icon: ScrollText },
    { key: 'alloys', icon: Cog },
    { key: 'custom', icon: Wand2 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-metal overflow-hidden">
        <div className="absolute inset-0 metal-texture opacity-50" />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-500/20 border border-copper-500/30 mb-6 backdrop-blur-sm"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-copper-300">Сделано в Узбекистане</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-copper-300 mb-8 leading-relaxed max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contacts">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="gradient-copper text-secondary font-semibold text-lg px-8 hover:opacity-90 transition-opacity shadow-copper animate-pulse-glow">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="border-copper-500 text-copper-200 hover:bg-copper-500/20 font-semibold text-lg px-8 backdrop-blur-sm">
                    {t('hero.catalog')}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-md border-t border-copper-700/30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-copper-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Наши преимущества</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('about.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-copper card-shine"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center mb-6 shadow-copper"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-secondary" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-muted relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                {t('products.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('products.subtitle')}
              </p>
            </div>
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                  {t('hero.catalog')}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.key}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link
                  to="/products"
                  className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-copper card-shine"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center shadow-copper shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <product.icon className="w-7 h-7 text-secondary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {t(`products.${product.key}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(`products.${product.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 gradient-metal relative overflow-hidden">
        <div className="absolute inset-0 metal-texture opacity-30" />
        
        {/* Animated particles */}
        <motion.div 
          className="absolute top-20 left-20 w-4 h-4 rounded-full bg-primary/40"
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-40 w-6 h-6 rounded-full bg-accent/30"
          animate={{ 
            y: [0, -80, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                {t('form.title')}
              </h2>
              <p className="text-lg text-copper-300 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center shadow-copper">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-copper-200">{t('about.quality')}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center shadow-copper">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-copper-200">{t('contacts.workHoursValue')}</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={scaleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-industrial border border-copper-700/30"
            >
              <ApplicationForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

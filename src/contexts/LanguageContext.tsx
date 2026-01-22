import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.products': 'Продукция',
    'nav.vacancies': 'Вакансии',
    'nav.contacts': 'Контакты',
    
    // Hero
    'hero.title': 'Холоднокатаный металл высочайшего качества',
    'hero.subtitle': 'Производство медных изделий и сплавов в Узбекистане',
    'hero.cta': 'Оставить заявку',
    'hero.catalog': 'Каталог продукции',
    
    // About
    'about.title': 'О компании',
    'about.subtitle': 'Лидер в производстве цветных металлов',
    'about.description': 'Мы специализируемся на производстве высококачественных холоднокатаных изделий из меди и медных сплавов. Наше современное производство расположено в Узбекистане и оснащено передовым оборудованием.',
    'about.experience': 'Лет опыта',
    'about.clients': 'Клиентов',
    'about.products': 'Видов продукции',
    'about.quality': 'Сертификаты качества',
    
    // Products
    'products.title': 'Наша продукция',
    'products.subtitle': 'Широкий ассортимент медных изделий',
    'products.sheets': 'Медные листы',
    'products.sheets.desc': 'Холоднокатаные листы из меди различной толщины',
    'products.strips': 'Медные ленты',
    'products.strips.desc': 'Ленты из меди и сплавов для промышленности',
    'products.rods': 'Медные прутки',
    'products.rods.desc': 'Прутки круглого и прямоугольного сечения',
    'products.wire': 'Медная проволока',
    'products.wire.desc': 'Проволока различных диаметров',
    'products.alloys': 'Медные сплавы',
    'products.alloys.desc': 'Бронза, латунь и специальные сплавы',
    'products.custom': 'Под заказ',
    'products.custom.desc': 'Изделия по индивидуальным требованиям',
    
    // Vacancies
    'vacancies.title': 'Вакансии',
    'vacancies.subtitle': 'Присоединяйтесь к нашей команде',
    'vacancies.apply': 'Откликнуться',
    'vacancies.noVacancies': 'На данный момент открытых вакансий нет',
    'vacancies.engineer': 'Инженер-технолог',
    'vacancies.engineer.desc': 'Контроль технологических процессов производства',
    'vacancies.operator': 'Оператор станка',
    'vacancies.operator.desc': 'Работа на прокатных станах',
    'vacancies.manager': 'Менеджер по продажам',
    'vacancies.manager.desc': 'Работа с клиентами и заключение договоров',
    
    // Contacts
    'contacts.title': 'Контакты',
    'contacts.subtitle': 'Свяжитесь с нами',
    'contacts.address': 'Адрес',
    'contacts.addressValue': 'Узбекистан, г. Ташкент, ул. Промышленная 25',
    'contacts.phone': 'Телефон',
    'contacts.email': 'Электронная почта',
    'contacts.workHours': 'Режим работы',
    'contacts.workHoursValue': 'Пн-Пт: 9:00 - 18:00',
    
    // Form
    'form.title': 'Оставить заявку',
    'form.name': 'Ваше имя',
    'form.phone': 'Телефон',
    'form.email': 'Email',
    'form.message': 'Сообщение',
    'form.submit': 'Отправить заявку',
    'form.success': 'Заявка успешно отправлена!',
    'form.error': 'Ошибка при отправке. Попробуйте снова.',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.description': 'Производство высококачественных медных изделий',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.vacancies': 'Careers',
    'nav.contacts': 'Contacts',
    
    // Hero
    'hero.title': 'Premium Cold-Rolled Metal',
    'hero.subtitle': 'Copper and alloy production in Uzbekistan',
    'hero.cta': 'Get a Quote',
    'hero.catalog': 'Product Catalog',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Leader in Non-Ferrous Metal Production',
    'about.description': 'We specialize in manufacturing high-quality cold-rolled copper and copper alloy products. Our modern facility is located in Uzbekistan and equipped with cutting-edge technology.',
    'about.experience': 'Years of Experience',
    'about.clients': 'Clients',
    'about.products': 'Product Types',
    'about.quality': 'Quality Certificates',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Wide Range of Copper Products',
    'products.sheets': 'Copper Sheets',
    'products.sheets.desc': 'Cold-rolled copper sheets of various thicknesses',
    'products.strips': 'Copper Strips',
    'products.strips.desc': 'Copper and alloy strips for industry',
    'products.rods': 'Copper Rods',
    'products.rods.desc': 'Round and rectangular section rods',
    'products.wire': 'Copper Wire',
    'products.wire.desc': 'Wire of various diameters',
    'products.alloys': 'Copper Alloys',
    'products.alloys.desc': 'Bronze, brass and special alloys',
    'products.custom': 'Custom Orders',
    'products.custom.desc': 'Products to individual requirements',
    
    // Vacancies
    'vacancies.title': 'Careers',
    'vacancies.subtitle': 'Join Our Team',
    'vacancies.apply': 'Apply',
    'vacancies.noVacancies': 'No open positions at the moment',
    'vacancies.engineer': 'Process Engineer',
    'vacancies.engineer.desc': 'Production process control',
    'vacancies.operator': 'Machine Operator',
    'vacancies.operator.desc': 'Rolling mill operation',
    'vacancies.manager': 'Sales Manager',
    'vacancies.manager.desc': 'Client relations and contracts',
    
    // Contacts
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Get in Touch',
    'contacts.address': 'Address',
    'contacts.addressValue': 'Uzbekistan, Tashkent, Industrial St. 25',
    'contacts.phone': 'Phone',
    'contacts.email': 'Email',
    'contacts.workHours': 'Working Hours',
    'contacts.workHoursValue': 'Mon-Fri: 9:00 AM - 6:00 PM',
    
    // Form
    'form.title': 'Request a Quote',
    'form.name': 'Your Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Submit Request',
    'form.success': 'Request submitted successfully!',
    'form.error': 'Error submitting. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.description': 'Manufacturing high-quality copper products',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.products': 'Mahsulotlar',
    'nav.vacancies': 'Vakansiyalar',
    'nav.contacts': 'Aloqa',
    
    // Hero
    'hero.title': 'Yuqori sifatli sovuq hadlangan metall',
    'hero.subtitle': "O'zbekistonda mis va qotishma mahsulotlari ishlab chiqarish",
    'hero.cta': "Ariza qoldirish",
    'hero.catalog': 'Mahsulotlar katalogi',
    
    // About
    'about.title': 'Kompaniya haqida',
    'about.subtitle': 'Rangli metallar ishlab chiqarishda yetakchi',
    'about.description': "Biz yuqori sifatli sovuq hadlangan mis va mis qotishma mahsulotlarini ishlab chiqarishga ixtisoslashganmiz. Bizning zamonaviy ishlab chiqarishimiz O'zbekistonda joylashgan va ilg'or uskunalar bilan jihozlangan.",
    'about.experience': 'Yillik tajriba',
    'about.clients': 'Mijozlar',
    'about.products': "Mahsulot turlari",
    'about.quality': 'Sifat sertifikatlari',
    
    // Products
    'products.title': 'Bizning mahsulotlar',
    'products.subtitle': 'Mis mahsulotlarining keng assortimenti',
    'products.sheets': 'Mis varaqlar',
    'products.sheets.desc': "Turli qalinlikdagi sovuq hadlangan mis varaqlar",
    'products.strips': 'Mis lentalar',
    'products.strips.desc': "Sanoat uchun mis va qotishma lentalar",
    'products.rods': 'Mis tayoqchalar',
    'products.rods.desc': "Dumaloq va to'rtburchak kesimli tayoqchalar",
    'products.wire': 'Mis sim',
    'products.wire.desc': "Turli diametrli simlar",
    'products.alloys': 'Mis qotishmalari',
    'products.alloys.desc': "Bronza, latun va maxsus qotishmalar",
    'products.custom': 'Buyurtma asosida',
    'products.custom.desc': "Individual talablarga ko'ra mahsulotlar",
    
    // Vacancies
    'vacancies.title': 'Vakansiyalar',
    'vacancies.subtitle': 'Bizning jamoamizga qo\'shiling',
    'vacancies.apply': 'Ariza berish',
    'vacancies.noVacancies': "Hozirda ochiq vakansiyalar yo'q",
    'vacancies.engineer': 'Texnolog-muhandis',
    'vacancies.engineer.desc': "Ishlab chiqarish jarayonlarini nazorat qilish",
    'vacancies.operator': 'Stanok operatori',
    'vacancies.operator.desc': "Prokatlash stanlarida ishlash",
    'vacancies.manager': 'Savdo menejeri',
    'vacancies.manager.desc': "Mijozlar bilan ishlash va shartnomalar tuzish",
    
    // Contacts
    'contacts.title': 'Aloqa',
    'contacts.subtitle': 'Biz bilan bog\'laning',
    'contacts.address': 'Manzil',
    'contacts.addressValue': "O'zbekiston, Toshkent sh., Sanoat ko'chasi 25",
    'contacts.phone': 'Telefon',
    'contacts.email': 'Elektron pochta',
    'contacts.workHours': 'Ish vaqti',
    'contacts.workHoursValue': 'Du-Ju: 9:00 - 18:00',
    
    // Form
    'form.title': 'Ariza qoldirish',
    'form.name': 'Ismingiz',
    'form.phone': 'Telefon',
    'form.email': 'Email',
    'form.message': 'Xabar',
    'form.submit': 'Ariza yuborish',
    'form.success': "Ariza muvaffaqiyatli yuborildi!",
    'form.error': "Yuborishda xatolik. Qaytadan urinib ko'ring.",
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.description': 'Yuqori sifatli mis mahsulotlarini ishlab chiqarish',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(9).max(20),
  email: z.string().email().max(255),
  message: z.string().max(1000).optional(),
  captcha: z.string().min(1, 'Введите ответ'),
});

type FormData = z.infer<typeof formSchema>;

// Simple math captcha generator
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2} = ?`,
    answer: (num1 + num2).toString(),
  };
};

export const ApplicationForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setValue('captcha', '');
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    // Validate captcha
    if (data.captcha !== captcha.answer) {
      toast({
        title: 'Неверный ответ на капчу',
        variant: 'destructive',
      });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
      });

      if (error) throw error;

      toast({
        title: t('form.success'),
        variant: 'default',
      });
      reset();
      refreshCaptcha();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          placeholder={t('form.name')}
          {...register('name')}
          className="bg-background/50 border-copper-300 focus:border-primary h-12"
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder={t('form.phone')}
          {...register('phone')}
          className="bg-background/50 border-copper-300 focus:border-primary h-12"
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder={t('form.email')}
          {...register('email')}
          className="bg-background/50 border-copper-300 focus:border-primary h-12"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder={t('form.message')}
          {...register('message')}
          className="bg-background/50 border-copper-300 focus:border-primary min-h-[120px] resize-none"
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Simple Math Captcha */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-muted rounded-lg font-mono text-lg font-semibold text-foreground">
            {captcha.question}
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={refreshCaptcha}
            className="h-10 w-10"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <Input
          placeholder="Введите ответ"
          {...register('captcha')}
          className="bg-background/50 border-copper-300 focus:border-primary h-12"
        />
        {errors.captcha && (
          <p className="text-destructive text-sm mt-1">{errors.captcha.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-copper text-secondary font-semibold h-12 text-base hover:opacity-90 transition-opacity"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {t('form.submit')}
          </>
        )}
      </Button>
    </form>
  );
};

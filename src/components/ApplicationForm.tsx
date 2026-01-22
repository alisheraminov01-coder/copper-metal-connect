import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
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
});

type FormData = z.infer<typeof formSchema>;

export const ApplicationForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: t('form.success'),
        variant: 'default',
      });
      reset();
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

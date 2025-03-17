import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import ChatPreview from '@/components/ChatPreview';
import Footer from '@/components/Footer';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow relative">
        <section className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-screen-lg px-4">
            <ChatPreview />
          </div>
        </section>
        <section>
          <Hero />
        </section>
      </main>
      <Footer />
    </div>
  );
}

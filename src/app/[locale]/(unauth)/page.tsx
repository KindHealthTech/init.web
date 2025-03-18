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

import HeaderWrapper from '@/components/HeaderWrapper';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper />
      <main className="flex-grow relative pt-16 md:pt-20">
        <section className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
            <ChatPreview />
          </div>
        </section>
        <section className="bg-gray-50">
          <Hero />
        </section>
      </main>
      <Footer />
    </div>
  );
}

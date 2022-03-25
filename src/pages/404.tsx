import React from 'react';
import NextLink from 'next/link';
import { RiAlarmWarningFill } from 'react-icons/ri';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/links/ArrowLink';

export default function NotFound() {
  return (
    <Layout>
      <Seo templateTitle="Not found" />

      <main>
        <section className="bg-white">
          <div className="layout min-h-screen flex flex-col justify-center items-center">
            <RiAlarmWarningFill
              size={60}
              className="text-red-600 animate-flicker drop-shadow-glow"
            />
            <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
            <ArrowLink className="mt-4 md:text-lg" href="/">
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}

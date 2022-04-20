import type { NextPage } from 'next';

//Imports
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import clsx from 'clsx';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Home" />
      <main>
        <section className="bg-gray-100">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <NextImage
              src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"
              alt="next js img"
              width="180"
              height="180"
            />
            <h1 className=" mt-4">
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className="mt-2 text-sm text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <ArrowLink href="https://github.com/itishprasad30/typescript-nextjs-tailwindcss-stater">
                See the repository
              </ArrowLink>
            </p>

            <div className="group relative">
              <div
                className={clsx(
                  'absolute mt-6 -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-indigo-300 to-green-400',
                  'dark:from-yellow-600 dark:via-red-500',
                  'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink
                className="mt-6 relative"
                href="/components"
                variant="light"
              >
                See all components
              </ButtonLink>
            </div>

            <UnstyledLink
              href="https://vercel.com/itishprasad30/typescript-nextjs-tailwindcss-stater/B4ekPMh1i39iAjYGrKk6hn8stp1S"
              className="mt-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="92"
                height="32"
                src="https://vercel.com/button"
                alt="Deploy with Vercel"
              />
            </UnstyledLink>
            <footer className="absolute bottom-2 text-gray-700">
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href="https://itishprasad-in.vercel.app">
                Itish Prasad Sahoo
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;

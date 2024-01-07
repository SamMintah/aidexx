'use client';
import Image from 'next/image';
import {
  ArrowRight,
  Music,
  FacebookIcon,
  LinkedinIcon,
  Code
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-center text-lg font-sm text-white lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          {/* Social network icons */}
          {/* Add your social network links and icons here */}
      
        </div>
      </div>

      {/* Main container div */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Aidexx section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              {/* Aidexx logo */}
              <div className="relative h-8 w-8 mr-4">
                <Image fill alt="Aidexx Logo" src="/logo.png" />
              </div>{' '}
              aidexx
            </h6>
            <p>Aidexx AI offers a comprehensive suite of intelligent tools.</p>
          </div>

          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {/* Add your product links here */}
            <ul className="product-list text-neutral-500">
              <li>Photo Generation</li>
              <li>Code Generation</li>
              <li>Screenshot 2 code</li>
              <li>Music Generation</li>
              <li>Video Generation</li>
              <li>Chatbot</li>
            </ul>
          </div>

          {/* Useful links section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            {/* Add your useful links here */}
            <div className={'p-2 w-fit rounded-md'}>
              <FacebookIcon className={'w-8 h-6'} />
              <LinkedinIcon className={'w-8 h-6'}/>
          </div>
          </div>

          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {/* Add your contact information here */}
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://aidexx.com/"
        >
          aidexx
        </a>
      </div>
    </footer>
  );
};

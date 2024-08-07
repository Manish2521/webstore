import React from 'react';
import logo from '../components/topsection1.jpg';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

// Stats data
const stats = [
  { id: 1, name: 'Career Pages Available', value: '2000+' },
  { id: 2, name: 'Companies Listed', value: '500+' },
  { id: 3, name: 'Jobs Posted Monthly', value: '10,000+' },
];

// People data
const people = [
  {
    name: 'Alice Johnson',
    role: 'Chief Executive Officer',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'Chief Technology Officer',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Catherine Lewis',
    role: 'Chief Marketing Officer',
    imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'David Brown',
    role: 'Head of Partnerships',
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

// Features data
const features = [
  {
    name: 'Comprehensive Listings',
    description: "Explore a diverse range of career pages from top companies around the globe, all in one place.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Advanced Search',
    description: "Find your ideal job by filtering through various criteria like location, industry, and company size.",
    icon: LockClosedIcon,
  },
  {
    name: 'Real-Time Updates',
    description: "Stay up-to-date with the latest job postings and updates from your favorite companies in real time.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalized Recommendations',
    description: "Get tailored job recommendations based on your preferences and career aspirations.",
    icon: FingerPrintIcon,
  },
];

export default function About() {
  return (
    <>
      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Leadership Section */}
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership Team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Driving Innovation and Excellence in Digital Solutions
                </p>
              </div>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trusted by Section */}
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by Leading Digital Solution Providers Worldwide
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
}

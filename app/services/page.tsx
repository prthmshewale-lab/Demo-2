'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sparkles, Stethoscope, Smile, Baby, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: Stethoscope,
    description: 'Comprehensive care to maintain your optimal oral health and prevent future issues.',
    features: [
      'Routine Exams & Cleanings',
      'Digital X-Rays',
      'Fillings & Sealants',
      'Root Canal Therapy',
      'Tooth Extractions',
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: Sparkles,
    description: 'Transform your smile and boost your confidence with our advanced cosmetic treatments.',
    features: [
      'Professional Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Invisalign Clear Aligners',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'restorative',
    title: 'Restorative Care',
    icon: Smile,
    description: 'Restore the function and appearance of your teeth with durable, natural-looking solutions.',
    features: [
      'Dental Implants',
      'Crowns & Bridges',
      'Dentures & Partials',
      'Full Mouth Reconstruction',
      'Inlays & Onlays',
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    icon: Baby,
    description: 'Gentle, fun, and educational dental care tailored specifically for children and teens.',
    features: [
      'First Dental Visits',
      'Fluoride Treatments',
      'Dental Sealants',
      'Cavity Prevention',
      'Orthodontic Evaluations',
    ],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Our <span className="text-emerald-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl"
          >
            From routine cleanings to complete smile makeovers, we offer comprehensive dental care under one roof.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`flex flex-col gap-12 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 lg:px-8"
                  >
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                          <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                            <div className="h-2 w-2 rounded-full bg-emerald-600" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 text-lg"
                    >
                      Book this service <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Schedule a comprehensive consultation. Our experts will evaluate your oral health and create a personalized treatment plan just for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-emerald-500"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

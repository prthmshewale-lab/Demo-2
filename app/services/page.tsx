'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Stethoscope, Sparkles, AlignCenterVertical, Baby, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, fillings, and preventive care to maintain your oral health.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    features: ['Regular Checkups', 'Professional Cleanings', 'Cavity Fillings', 'Root Canal Therapy'],
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic procedures designed for natural-looking results.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    features: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers'],
  },
  {
    icon: AlignCenterVertical,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct your bite with modern orthodontic solutions.',
    image: 'https://images.unsplash.com/photo-1598255436009-0a0288361364?q=80&w=600&auto=format&fit=crop',
    features: ['Invisalign Clear Aligners', 'Traditional Braces', 'Retainers', 'Bite Correction'],
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Gentle, fun dental care for children in a welcoming environment they will love.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    features: ['First Visit Programs', 'Sealants & Fluoride', 'Cavity Prevention', 'Growth Monitoring'],
  },
  {
    icon: Shield,
    title: 'Restorative Dentistry',
    description: 'Rebuild and restore damaged teeth to their full function and appearance.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop',
    features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Full Mouth Rehabilitation'],
  },
  {
    icon: Clock,
    title: 'Emergency Dental Care',
    description: 'Prompt treatment for dental emergencies when you need it most.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    features: ['Same-Day Appointments', 'Toothache Relief', 'Broken Tooth Repair', 'Emergency Extractions'],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-emerald-700 py-20 md:py-32 text-white overflow-hidden">
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-emerald-100 md:text-xl"
          >
            From routine checkups to advanced cosmetic procedures, we offer comprehensive dental care for the whole family.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
                >
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ${isEven ? '' : 'lg:order-2'}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-700">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                    >
                      Book This Service
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
            Schedule a consultation and our team will create a personalized treatment plan tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition-transform hover:scale-105 shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

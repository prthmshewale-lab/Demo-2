'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Lead Dentist & Founder',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    bio: 'With over 15 years of experience, Dr. Jenkins specializes in cosmetic and restorative dentistry.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    bio: 'Dr. Chen is passionate about creating perfect smiles using the latest orthodontic technologies.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'Emily ensures every patient receives thorough, gentle care during their routine cleanings.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'We listen to your concerns and tailor treatments to your specific needs and goals.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Safety',
    description: 'We adhere to the highest standards of sterilization and infection control.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Our team continuously pursues advanced education to provide the best possible care.',
  },
  {
    icon: Users,
    title: 'Family Atmosphere',
    description: 'We treat every patient like a member of our own family, ensuring comfort and trust.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-emerald-700 py-20 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop"
            alt="Clinic Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            About SmileCare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-emerald-100 md:text-xl"
          >
            Redefining the dental experience with compassion, expertise, and state-of-the-art technology.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="SmileCare Clinic Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded in 2010, SmileCare began with a simple mission: to make dental visits something people look forward to, rather than dread.
                </p>
                <p>
                  We recognized that many people avoid the dentist due to fear or past negative experiences. That&apos;s why we built our practice around patient comfort, transparent communication, and gentle techniques.
                </p>
                <p>
                  Today, we are proud to be one of the most trusted dental clinics in the area, serving thousands of families with comprehensive, modern dental care in a relaxing, spa-like environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do, from the moment you walk through our doors to the completion of your treatment.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-slate-600">
              Our highly skilled professionals are passionate about helping you achieve and maintain a healthy, beautiful smile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-6 aspect-square w-full max-w-[280px] overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

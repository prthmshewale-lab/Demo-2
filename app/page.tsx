'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const successStories = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    treatment: 'Invisalign & Whitening',
    quote: "I've always been self-conscious about my smile. The team at SmileCare completely transformed it. The process was smooth, and the results are beyond what I imagined!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    treatment: 'Dental Implants',
    quote: "After losing a tooth, I was hesitant about implants. Dr. Smith explained everything clearly and made the procedure painless. It feels exactly like my natural tooth.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    treatment: 'Routine Care & Cleaning',
    quote: "The most gentle cleaning I've ever had. The hygienists are incredibly thorough but careful. I actually look forward to my dental visits now!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  },
];

const faqs = [
  {
    question: 'Are you accepting new patients?',
    answer: 'Yes! We are always happy to welcome new patients to our dental family. You can easily book your first appointment online or by calling our office.',
  },
  {
    question: 'Do you accept my insurance?',
    answer: 'We accept most major PPO dental insurance plans. Our team will verify your benefits before your appointment to ensure you understand your coverage.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit will include a comprehensive exam, digital X-rays, a professional cleaning (if no gum disease is present), and a consultation with the dentist to discuss your oral health goals.',
  },
  {
    question: 'Do you offer emergency dental care?',
    answer: 'Yes, we reserve time in our daily schedule for dental emergencies. If you are experiencing severe pain or have a broken tooth, please call us immediately.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-emerald-50 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Your Journey to a <span className="text-emerald-600">Brighter Smile</span> Starts Here
              </h1>
              <p className="mb-8 text-lg text-slate-600 md:text-xl leading-relaxed">
                Experience modern, pain-free dentistry in a relaxing environment. Our expert team is dedicated to providing personalized care for your whole family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-emerald-700"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-emerald-200 bg-white px-8 py-4 text-base font-medium text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    '1438761681033-6461ffad8d80',
                    '1500648767791-00dcc994a43e',
                    '1544005313-94ddf0286df2',
                    '1507003211169-0a1dd7228f2d'
                  ].map((id, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative">
                      <Image
                        src={`https://images.unsplash.com/photo-${id}?q=80&w=100&auto=format&fit=crop`}
                        alt="Patient"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-medium text-slate-700 mt-1">Trusted by 2,000+ patients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                  alt="Dentist treating patient"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Top Rated</p>
                    <p className="text-lg font-bold text-slate-900">Dental Clinic 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">Highly qualified professionals dedicated to your smile.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Tech</h3>
              <p className="text-slate-600">State-of-the-art equipment for painless treatments.</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Care</h3>
              <p className="text-slate-600">Convenient scheduling and multiple payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg text-slate-600">
              Don&apos;t just take our word for it. Hear from our patients about their experiences and smile transformations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative"
              >
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-8 relative z-10">
                  &quot;{story.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{story.name}</div>
                    <div className="text-sm text-emerald-600 font-medium">{story.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600 mb-8">
                Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our friendly team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Contact our support team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors hover:border-emerald-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left bg-white"
                  >
                    <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                    <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-slate-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for your best smile?</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of happy patients who trust SmileCare for their dental needs. Book your appointment today and experience the difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 transition-transform hover:scale-105 shadow-lg"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

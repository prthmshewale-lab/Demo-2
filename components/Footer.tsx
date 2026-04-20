import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <span className="font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">SmileCare</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing exceptional dental care with a gentle touch. Your smile is our top priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-emerald-500 transition-colors">General Dentistry</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-500 transition-colors">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-500 transition-colors">Orthodontics</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-500 transition-colors">Pediatric Dentistry</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>123 Smile Avenue, Bandra West<br />Mumbai, Maharashtra 400050</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>hello@smilecare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

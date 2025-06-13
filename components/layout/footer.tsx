import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="neumorphic p-2">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">UN Group</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students to achieve their international education dreams through expert guidance and personalized support.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="neumorphic p-2 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="neumorphic p-2 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="neumorphic p-2 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="neumorphic p-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/universities" className="hover:text-primary transition-colors">Universities</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">University Applications</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Visa Assistance</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Scholarship Guidance</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Test Preparation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Education Street, Knowledge City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ungroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UN Group. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
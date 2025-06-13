"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Users, 
  Award, 
  BookOpen, 
  Star,
  Quote,
  GraduationCap,
  Target,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Target,
    title: "Personalized Guidance",
    description: "Tailored advice based on your academic background, interests, and career goals."
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Over 10 years of experience helping students achieve their international education dreams."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnership with 200+ universities across 25 countries worldwide."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Streamlined application process with quick turnaround times."
  }
];

const universities = [
  {
    name: "Harvard University",
    location: "Cambridge, USA",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    programs: ["Business", "Medicine", "Law", "Engineering"],
    ranking: "#1 Global"
  },
  {
    name: "Oxford University",
    location: "Oxford, UK",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    programs: ["Liberal Arts", "Sciences", "Philosophy", "Literature"],
    ranking: "#2 Global"
  },
  {
    name: "University of Toronto",
    location: "Toronto, Canada",
    image: "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    programs: ["Computer Science", "Business", "Medicine", "Engineering"],
    ranking: "#18 Global"
  },
  {
    name: "Australian National University",
    location: "Canberra, Australia",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    programs: ["International Relations", "Sciences", "Arts", "Economics"],
    ranking: "#27 Global"
  }
];

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Medical Student at Harvard",
    content: "UN Group made my dream of studying medicine at Harvard a reality. Their guidance through the complex application process was invaluable.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Mohammed Ali",
    role: "Engineering Student at MIT",
    content: "The personalized approach and attention to detail from UN Group's team helped me secure admission to my top choice university.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Fatima Hassan",
    role: "Business Student at Oxford",
    content: "Professional, reliable, and incredibly supportive. UN Group exceeded all my expectations in helping me achieve my goals.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const stats = [
  { number: "2000+", label: "Success Stories" },
  { number: "200+", label: "Partner Universities" },
  { number: "25+", label: "Countries" },
  { number: "98%", label: "Success Rate" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="neumorphic px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Trusted by 2000+ Students
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Your Gateway to
                  <span className="text-primary block">Global Education</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Transform your academic dreams into reality with expert guidance for international university applications. 
                  We've helped thousands of students secure admissions to their dream universities worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="neumorphic text-lg px-8 py-6 group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="neumorphic text-lg px-8 py-6">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Universities
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative neumorphic p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                <img
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Students studying together"
                  className="rounded-2xl object-cover w-full h-96 lg:h-[500px]"
                />
                <div className="absolute -bottom-4 -right-4 neumorphic bg-white dark:bg-gray-800 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold">98% Success Rate</p>
                      <p className="text-sm text-muted-foreground">University Admissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="secondary" className="neumorphic px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Why Choose UN Group
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Excellence in Education
              <span className="text-primary block">Consulting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience, we provide comprehensive support to help you navigate 
              the complex world of international education applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="neumorphic h-full border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="neumorphic-inset w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="secondary" className="neumorphic px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Our Partner Universities
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Top-Ranked
              <span className="text-primary block">Universities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with prestigious institutions worldwide to provide you with the best educational opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="neumorphic border-0 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {university.ranking}
                    </Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                      <p className="text-muted-foreground flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        {university.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.slice(0, 2).map((program) => (
                        <Badge key={program} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {university.programs.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{university.programs.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="neumorphic">
              <Link href="/universities">
                View All Universities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="secondary" className="neumorphic px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Student Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Our Students
              <span className="text-primary block">Say About Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="neumorphic border-0 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                  <CardContent className="p-8 space-y-6">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover neumorphic-inset"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="neumorphic bg-white/10 backdrop-blur p-4 w-fit mx-auto rounded-2xl">
              <GraduationCap className="h-16 w-16" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Begin Your
              <span className="block">International Education Journey?</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with UN Group. 
              Let us help you take the first step towards your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="neumorphic text-lg px-8 py-6">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="neumorphic-inset border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
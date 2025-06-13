"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  TrendingUp,
  Star,
  BookOpen
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions and provide honest, transparent guidance to every student."
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "We are passionate about education and committed to helping students achieve their academic dreams through personalized support."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from application guidance to visa assistance and ongoing student support."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We embrace diversity and help students navigate international education opportunities across different cultures and systems."
  }
];

const achievements = [
  { number: "2000+", label: "Students Placed", icon: Users },
  { number: "200+", label: "Partner Universities", icon: BookOpen },
  { number: "25+", label: "Countries", icon: Globe },
  { number: "98%", label: "Success Rate", icon: TrendingUp }
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "UN Group was established with a vision to democratize international education access."
  },
  {
    year: "2016",
    title: "First 100 Students",
    description: "Successfully placed our first 100 students in prestigious universities worldwide."
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded our network to include partnerships with universities across 15 countries."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched our digital platform and virtual counseling services during the pandemic."
  },
  {
    year: "2022",
    title: "1000+ Success Stories",
    description: "Reached the milestone of 1000+ successful university placements."
  },
  {
    year: "2024",
    title: "Leading Excellence",
    description: "Recognized as a leading education consultancy with 2000+ success stories and counting."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="neumorphic px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  About UN Group
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Empowering Students
                  <span className="text-primary block">Since 2014</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  For over a decade, UN Group has been the trusted partner for students seeking 
                  world-class international education. We believe every student deserves the opportunity 
                  to pursue their academic dreams, regardless of their background.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="neumorphic p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                <img
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Students in graduation ceremony"
                  className="rounded-2xl object-cover w-full h-96"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="neumorphic border-0 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                  <CardContent className="p-0 space-y-4">
                    <div className="neumorphic-inset w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl lg:text-4xl font-bold text-primary">{achievement.number}</p>
                      <p className="text-muted-foreground font-medium">{achievement.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic border-0 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="neumorphic-inset w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To democratize access to world-class international education by providing 
                    comprehensive, personalized guidance that empowers students to achieve their 
                    academic aspirations and global career goals.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Personalized guidance for every student</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">End-to-end application support</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Transparent and ethical practices</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic border-0 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="neumorphic-inset w-16 h-16 rounded-2xl flex items-center justify-center">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the global leader in international education consulting, recognized for 
                    our excellence in student success, innovative approach to education guidance, 
                    and commitment to transforming lives through education.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Global recognition and excellence</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Innovation in education consulting</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Transforming lives through education</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <Heart className="w-4 h-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Drives Us
              <span className="text-primary block">Every Day</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our values shape every interaction, decision, and service we provide to ensure 
              the best possible experience for our students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="neumorphic h-full border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="neumorphic-inset w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              A Decade of
              <span className="text-primary block">Growth & Impact</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="neumorphic border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                      <CardContent className="p-6 space-y-3">
                        <Badge variant="secondary" className="neumorphic-inset w-fit">
                          {item.year}
                        </Badge>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 neumorphic w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Start
              <span className="block">Your Journey With Us?</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of successful students who have achieved their international education 
              dreams with UN Group's expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="neumorphic text-lg px-8 py-6">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="neumorphic-inset border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More About Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
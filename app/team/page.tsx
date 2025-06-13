"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Users, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Award, 
  Globe,
  Star,
  BookOpen,
  Phone
} from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Founder & CEO",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "With over 15 years in international education, Dr. Johnson founded UN Group with a vision to democratize access to world-class education. She holds a PhD in Education Policy from Harvard University.",
    expertise: ["Education Policy", "Strategic Planning", "International Relations"],
    languages: ["English", "French", "Spanish"],
    experience: "15+ years",
    email: "sarah.johnson@ungroup.com",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    position: "Director of Student Services",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Ahmed specializes in Middle Eastern and European university applications. He has personally guided over 800 students to their dream universities and speaks five languages fluently.",
    expertise: ["University Applications", "Visa Assistance", "Student Counseling"],
    languages: ["Arabic", "English", "German", "French", "Turkish"],
    experience: "12+ years",
    email: "ahmed.alrashid@ungroup.com",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    position: "Senior Education Consultant",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Maria is our expert for North American universities. She has an MBA from Stanford and has helped hundreds of students secure scholarships worth millions of dollars.",
    expertise: ["MBA Applications", "Scholarship Guidance", "Career Counseling"],
    languages: ["Spanish", "English", "Portuguese"],
    experience: "10+ years",
    email: "maria.rodriguez@ungroup.com",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Dr. James Chen",
    position: "Academic Director",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Dr. Chen oversees our academic partnerships and curriculum development. He has established relationships with over 200 universities worldwide and holds a PhD in International Education.",
    expertise: ["Academic Partnerships", "Program Development", "Quality Assurance"],
    languages: ["English", "Mandarin", "Japanese", "Korean"],
    experience: "18+ years",
    email: "james.chen@ungroup.com",
    linkedin: "#"
  },
  {
    id: 5,
    name: "Priya Patel",
    position: "Technology & Innovation Lead",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Priya leads our digital transformation initiatives and develops innovative solutions to enhance the student experience. She has a Master's in Computer Science from MIT.",
    expertise: ["EdTech Innovation", "Digital Platforms", "Data Analytics"],
    languages: ["English", "Hindi", "Gujarati"],
    experience: "8+ years",
    email: "priya.patel@ungroup.com",
    linkedin: "#"
  },
  {
    id: 6,
    name: "Michael Thompson",
    position: "Operations Manager",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Michael ensures smooth operations across all our services. With his background in business operations and project management, he keeps our processes efficient and student-focused.",
    expertise: ["Operations Management", "Process Optimization", "Team Leadership"],
    languages: ["English", "German"],
    experience: "11+ years",
    email: "michael.thompson@ungroup.com",
    linkedin: "#"
  }
];

const stats = [
  { number: "25+", label: "Team Members", icon: Users },
  { number: "40+", label: "Languages Spoken", icon: Globe },
  { number: "150+", label: "Years Combined Experience", icon: Award },
  { number: "2000+", label: "Students Guided", icon: GraduationCap }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="neumorphic px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Expert Guidance from
              <span className="text-primary block">Education Professionals</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our diverse team of education experts, counselors, and consultants brings together 
              decades of experience to help students achieve their international education goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="neumorphic border-0 p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                  <CardContent className="p-0 space-y-4">
                    <div className="neumorphic-inset w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</p>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
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
              Leadership Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Meet the People Behind
              <span className="text-primary block">Your Success</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="neumorphic border-0 overflow-hidden h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 mb-2">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.position}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Expertise:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {member.expertise.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{member.expertise.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Languages:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.languages.slice(0, 3).map((language) => (
                            <Badge key={language} variant="outline" className="text-xs">
                              {language}
                            </Badge>
                          ))}
                          {member.languages.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{member.languages.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Mail className="w-3 h-3 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="neumorphic px-4 py-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Our Approach
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Student-Centered
                  <span className="text-primary block">Excellence</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every member of our team is dedicated to providing personalized, 
                  comprehensive support that puts student success at the center of everything we do.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="neumorphic-inset w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Knowledge</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team collectively holds advanced degrees from top universities worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neumorphic-inset w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cultural Diversity</h3>
                    <p className="text-muted-foreground text-sm">
                      We represent diverse backgrounds and speak over 40 languages combined.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="neumorphic-inset w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground text-sm">
                      98% success rate with thousands of students placed in top universities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="neumorphic p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
                <img
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team collaboration"
                  className="rounded-2xl object-cover w-full h-96"
                />
              </div>
            </motion.div>
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
              Ready to Work with
              <span className="block">Our Expert Team?</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Schedule a consultation with one of our education experts and take the first step 
              towards your international education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="neumorphic text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="neumorphic-inset border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
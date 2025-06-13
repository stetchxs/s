"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Globe, Star, ArrowRight, Users, BookOpen, Award } from "lucide-react";

const universities = [
  {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, USA",
    country: "USA",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Business", "Medicine", "Law", "Engineering", "Liberal Arts"],
    ranking: "#1 Global",
    students: "23,000",
    acceptance: "3%",
    tuition: "$54,000",
    category: "Ivy League",
    language: "English"
  },
  {
    id: 2,
    name: "Oxford University",
    location: "Oxford, UK",
    country: "UK",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Liberal Arts", "Sciences", "Philosophy", "Literature", "Medicine"],
    ranking: "#2 Global",
    students: "26,000",
    acceptance: "15%",
    tuition: "£28,000",
    category: "Russell Group",
    language: "English"
  },
  {
    id: 3,
    name: "University of Toronto",
    location: "Toronto, Canada",
    country: "Canada",
    image: "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Computer Science", "Business", "Medicine", "Engineering", "Arts"],
    ranking: "#18 Global",
    students: "97,000",
    acceptance: "43%",
    tuition: "CAD $58,000",
    category: "U15",
    language: "English"
  },
  {
    id: 4,
    name: "Australian National University",
    location: "Canberra, Australia",
    country: "Australia",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["International Relations", "Sciences", "Arts", "Economics", "Law"],
    ranking: "#27 Global",
    students: "25,000",
    acceptance: "35%",
    tuition: "AUD $47,000",
    category: "Group of Eight",
    language: "English"
  },
  {
    id: 5,
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    country: "Switzerland",
    image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Engineering", "Technology", "Sciences", "Mathematics", "Architecture"],
    ranking: "#6 Global",
    students: "22,000",
    acceptance: "8%",
    tuition: "CHF 1,460",
    category: "Technical",
    language: "German/English"
  },
  {
    id: 6,
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    country: "Japan",
    image: "https://images.pexels.com/photos/161154/pexels-photo-161154.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Engineering", "Sciences", "Medicine", "Arts", "Economics"],
    ranking: "#23 Global",
    students: "28,000",
    acceptance: "36%",
    tuition: "¥535,800",
    category: "Imperial",
    language: "Japanese/English"
  },
  {
    id: 7,
    name: "Technical University of Munich",
    location: "Munich, Germany",
    country: "Germany",
    image: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Engineering", "Technology", "Sciences", "Medicine", "Business"],
    ranking: "#50 Global",
    students: "45,000",
    acceptance: "8%",
    tuition: "€150",
    category: "TU9",
    language: "German/English"
  },
  {
    id: 8,
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    country: "Australia",
    image: "https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=600",
    programs: ["Arts", "Sciences", "Medicine", "Business", "Engineering"],
    ranking: "#33 Global",
    students: "51,000",
    acceptance: "70%",
    tuition: "AUD $44,000",
    category: "Group of Eight",
    language: "English"
  }
];

const countries = ["All", "USA", "UK", "Canada", "Australia", "Switzerland", "Japan", "Germany"];
const programs = ["All", "Business", "Medicine", "Law", "Engineering", "Computer Science", "Liberal Arts", "Sciences"];

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState("All");

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "All" || university.country === selectedCountry;
    const matchesProgram = selectedProgram === "All" || 
                          university.programs.some(program => program === selectedProgram);
    
    return matchesSearch && matchesCountry && matchesProgram;
  });

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
              <Globe className="w-4 h-4 mr-2" />
              200+ Partner Universities
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Explore World-Class
              <span className="text-primary block">Universities</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover your perfect academic match from our extensive network of prestigious institutions 
              across 25 countries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 neumorphic-inset"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="neumorphic-inset min-w-[150px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="neumorphic-inset min-w-[150px]">
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map(program => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredUniversities.length} of {universities.length} universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="neumorphic border-0 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {university.ranking}
                    </Badge>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {university.country}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold line-clamp-1">{university.name}</h3>
                      <p className="text-muted-foreground flex items-center">
                        <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{university.location}</span>
                      </p>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {university.programs.slice(0, 3).map((program) => (
                          <Badge key={program} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                        {university.programs.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{university.programs.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{university.students} students</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>{university.acceptance} acceptance</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Tuition:</span> {university.tuition}/year
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Language:</span> {university.language}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full mt-4 neumorphic group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredUniversities.length === 0 && (
            <div className="text-center py-20">
              <div className="neumorphic w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">No universities found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
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
              Need Help Choosing
              <span className="block">the Right University?</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Our expert counselors are here to guide you through the selection process 
              and help you find the perfect academic match.
            </p>
            <Button size="lg" variant="secondary" className="neumorphic text-lg px-8 py-6">
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
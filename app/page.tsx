"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Shield,
  Bug,
  Search,
  Lock,
  Terminal,
  Award,
  BookOpen,
} from "lucide-react"

export default function PersonalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Flutter & Dart", level: 88 },
    { name: "HTML & CSS", level: 95 },
    { name: "PHP", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Bash Scripting", level: 75 },
    { name: "Penetration Testing", level: 90 },
    { name: "Bug Bounty Hunting", level: 85 },
    { name: "Web Application Security", level: 82 },
    { name: "Network Security", level: 78 },
    { name: "Vulnerability Assessment", level: 88 },
  ]

  const projects = [
    {
      title: "Arish University Housing",
      description:
        "My graduation project - A Flutter mobile application integrated with Firebase to help university students find and manage dormitory housing. Features include room booking, student profiles, and housing management system.",
      tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Network Vulnerability Scanner",
      description: "Custom network scanner that identifies vulnerabilities and generates detailed security reports.",
      tech: ["Nmap", "Python", "Metasploit", "Wireshark"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Bug Bounty Automation Tools",
      description:
        "Collection of automation tools for bug bounty hunting including subdomain enumeration and vulnerability detection.",
      tech: ["Bash", "Python", "Subfinder", "Nuclei"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  const certifications = [
    { name: "CEH (Certified Ethical Hacker)", issuer: "EC-Council", year: "2024" },
    { name: "OSCP (Offensive Security Certified Professional)", issuer: "Offensive Security", year: "2023" },
    { name: "CompTIA Security+", issuer: "CompTIA", year: "2023" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-800">ibrahim-dev</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-red-600 ${
                      activeSection === item.id ? "text-red-600" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-red-600 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Hi, I'm <span className="text-red-600">Ibrahim Sabry Mahmoud</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8">Cybersecurity Specialist & Penetration Tester</p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Computer Science graduate specializing in Cybersecurity, Penetration Testing, and Bug Bounty Hunting. I
                help organizations identify and fix security vulnerabilities before malicious actors can exploit them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-red-600 hover:bg-red-700">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-red-400 to-orange-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="/images/ibrahim-new-photo.jpg"
                      alt="Ibrahim Sabry Mahmoud"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn about my background and passion for cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cybersecurity Professional</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a Computer Science graduate from the Faculty of Computers and Information at Arish University,
                specializing in Cybersecurity with a focus on Penetration Testing and Bug Bounty Hunting.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                My expertise lies in identifying security vulnerabilities in web applications, networks, and systems.
                I'm passionate about ethical hacking and helping organizations strengthen their security posture through
                comprehensive penetration testing and vulnerability assessments.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-sm text-slate-600">Vulnerabilities Found</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Security Assessments</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-red-600" />
                    Penetration Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Comprehensive security testing of web applications, networks, and infrastructure to identify
                    vulnerabilities
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Bug className="h-5 w-5 text-orange-600" />
                    Bug Bounty Hunting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Active bug bounty hunter on major platforms, helping companies secure their applications
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-blue-600" />
                    Vulnerability Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Research and analysis of emerging threats and zero-day vulnerabilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Education</h3>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Bachelor of Computer Science
                </CardTitle>
                <CardDescription>Faculty of Computers and Information, Arish University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-2">
                  <strong>Specialization:</strong> Cybersecurity, Penetration Testing, and Bug Bounty Hunting
                </p>
                <p className="text-slate-600">
                  Focused on advanced cybersecurity concepts, ethical hacking methodologies, and practical security
                  testing techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-yellow-600" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Technologies and tools I specialize in</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
                  <span className="text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, name: "Cybersecurity", color: "text-red-600" },
              { icon: Bug, name: "Bug Bounty", color: "text-orange-600" },
              { icon: Terminal, name: "Web Development", color: "text-blue-600" },
              { icon: Lock, name: "Mobile Development", color: "text-green-600" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-sm font-medium text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Security tools and projects I've developed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Let's discuss your security needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">ibrahim.sabry.m7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+20 103 267 2914</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">Arish, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <a href="https://github.com/ibrahim-sabri77" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/ibrahim-sabry-99a45b348ibrahim-sabri77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a href="mailto:ibrahim.sabry.m7@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input placeholder="Message subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Write your message here..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ibrahim-dev</h3>
            <p className="text-slate-500 text-sm mb-4">Ibrahim Sabry Mahmoud</p>
            <p className="text-slate-400 mb-6">Cybersecurity Specialist & Penetration Tester</p>
            <div className="flex justify-center gap-6 mb-8">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white" asChild>
                <a href="https://github.com/ibrahim-sabri77" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white" asChild>
                <a
                  href="https://www.linkedin.com/in/ibrahim-sabry-99a45b348ibrahim-sabri77"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white" asChild>
                <a href="mailto:ibrahim.sabry.m7@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400 text-sm">© 2024 Ibrahim Sabry Mahmoud. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

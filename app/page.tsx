"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Shield, Terminal, Zap, Download, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppTerminal } from "./components/whatsapp-terminal"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const skillCategories = [
    {
      title: "Pentesting & Ethical Hacking",
      description: "Pruebas de penetración y hacking ético",
      skills: ["Kali Linux", "Metasploit", "Burp Suite", "OWASP ZAP"],
    },
    {
      title: "Análisis de Vulnerabilidades",
      description: "Identificación y evaluación de vulnerabilidades",
      skills: ["Nessus", "OpenVAS", "Nmap", "Nikto"],
    },
    {
      title: "SIEM & SOC",
      description: "Monitoreo y gestión de eventos de seguridad",
      skills: ["Splunk", "ELK Stack", "QRadar", "Suricata"],
    },
    {
      title: "Forense Digital",
      description: "Análisis forense e investigación digital",
      skills: ["Autopsy", "Volatility", "Wireshark", "FTK Imager"],
    },
    {
      title: "Hardening & Compliance",
      description: "Endurecimiento de sistemas y cumplimiento",
      skills: ["CIS Controls", "NIST Framework", "ISO 27001", "PCI DSS"],
    },
    {
      title: "Criptografía & PKI",
      description: "Criptografía y gestión de infraestructura de clave pública",
      skills: ["OpenSSL", "GPG", "HashiCorp Vault", "Let's Encrypt"],
    },
  ]

  const projects = [
    {
      title: "Análisis de Vulnerabilidades Web",
      description:
        "Evaluación completa de seguridad en aplicaciones web usando herramientas de pentesting y análisis automatizado",
      tech: ["OWASP ZAP", "Burp Suite", "Nmap", "Python"],
      type: "Proyecto Académico",
    },
    {
      title: "Sistema de Monitoreo de Seguridad (SIEM)",
      description:
        "Implementación de solución SIEM para detección y respuesta a incidentes de seguridad en tiempo real",
      tech: ["Splunk", "ELK Stack", "Suricata", "YARA"],
      type: "Proyecto Académico",
    },
    {
      title: "Implementación de Políticas de Seguridad",
      description: "Desarrollo e implementación de framework de seguridad basado en estándares ISO 27001 y NIST",
      tech: ["ISO 27001", "NIST Framework", "PowerShell", "Group Policy"],
      type: "Proyecto Académico",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-green-400 font-bold text-xl">
            <Terminal className="inline-block w-6 h-6 mr-2" />
            Agustín Maldonado
          </div>
          
          {/* Desktop Menu -  */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-green-400 transition-colors">
              Inicio
            </Link>
            <Link href="#about" className="hover:text-green-400 transition-colors">
              Acerca de
            </Link>
            <Link href="#education" className="hover:text-green-400 transition-colors">
              Formación
            </Link>
            <Link href="#skills" className="hover:text-green-400 transition-colors">
              Habilidades
            </Link>
            <Link href="#projects" className="hover:text-green-400 transition-colors">
              Proyectos
            </Link>
            <Link href="#contact" className="hover:text-green-400 transition-colors">
              Contacto
            </Link>
          </div>
          
          {/* Mobile Menu Button - SOLO VISIBLE EN MÓVIL */}
          <button 
            className="md:hidden text-green-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
          
          {/* Mobile Menu - SOLO VISIBLE EN MÓVIL */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-green-500/20">
              <div className="px-4 py-2 space-y-2">
                <Link 
                  href="#home" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  href="#about" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Acerca de
                </Link>
                <Link 
                  href="#education" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Formación
                </Link>
                <Link 
                  href="#skills" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Habilidades
                </Link>
                <Link 
                  href="#projects" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proyectos
                </Link>
                <Link 
                  href="#contact" 
                  className="block py-2 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-green-400 overflow-hidden">
              <Image
                src="/icono3.png"
                alt="Agustín Maldonado"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Título - Solo ajuste móvil */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-md:text-3xl">
              <span className="text-green-400">Agustín</span> Maldonado
            </h1>
            {/* Subtítulo - Solo ajuste móvil */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-md:text-lg">Cybersecurity Specialist</p>
            {/* Descripción - Solo padding móvil */}
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto max-md:px-4 max-md:text-base">
              Protegiendo activos digitales y fortaleciendo la seguridad organizacional. Combinando análisis de
              vulnerabilidades con implementación de controles de seguridad efectivos.
            </p>
            
            {/* Badges - Solo ajuste móvil */}
            <div className="flex justify-center space-x-4 mb-8 max-md:flex-wrap max-md:gap-2 max-md:space-x-0">
              <Badge variant="outline" className="border-green-400 text-green-400 max-md:text-xs">
                <Shield className="w-4 h-4 mr-1 max-md:w-3 max-md:h-3" />
                Pentesting
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400 max-md:text-xs">
                <Zap className="w-4 h-4 mr-1 max-md:w-3 max-md:h-3" />
                SIEM & SOC
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400 max-md:text-xs">
                <Terminal className="w-4 h-4 mr-1 max-md:w-3 max-md:h-3" />
                Forense Digital
              </Badge>
            </div>
            
            {/* Botones - Solo stack móvil */}
            <div className="flex justify-center space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-3 max-md:px-4">
              <Button className="bg-green-500 hover:bg-green-600 text-black">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Sobre</span> Mí
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-green-500/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Estudiante de Ingeniería de Software con una marcada especialización en Ciberseguridad y Protección
                  Digital. Me apasiona identificar vulnerabilidades, implementar controles de seguridad y crear sistemas
                  resilientes que protejan los activos digitales de las organizaciones.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Mi enfoque se centra en el análisis de vulnerabilidades, implementación de sistemas SIEM y desarrollo
                  de políticas de seguridad. Busco activamente una oportunidad para aplicar mis habilidades técnicas en
                  el campo de la ciberseguridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Formación</span> Académica
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500/30"></div>

              <div className="space-y-8">
                {/* Ingeniería de Software */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
                  <div className="ml-16">
                    <Card className="bg-gray-800 border-green-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-green-400 mb-1">Ingeniería de Software</h3>
                            <p className="text-gray-300">Universidad</p>
                          </div>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 ml-4 flex-shrink-0">
                            En Curso
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400">Especialización en Ciberseguridad y Protección Digital</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Técnico Superior */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black"></div>
                  <div className="ml-16">
                    <Card className="bg-gray-800 border-green-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-green-400 mb-1">
                              Técnico Superior en Programación
                            </h3>
                            <p className="text-gray-300">Graduado</p>
                          </div>
                          <Badge className="bg-green-600/20 text-green-300 border-green-600/30 ml-4 flex-shrink-0">
                            Completado
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Especialización */}
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-green-300 rounded-full border-4 border-black"></div>
                  <div className="ml-16">
                    <Card className="bg-gray-800 border-green-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-green-400 mb-1">
                              Especialización en Ciberseguridad
                            </h3>
                            <p className="text-gray-300">Security & Digital Protection Focus</p>
                          </div>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 ml-4 flex-shrink-0">
                            Enfoque Especializado
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400">Pentesting, SIEM, Análisis de Vulnerabilidades</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Habilidades</span> Técnicas
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-green-500/20 hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <CardHeader>
                    <CardTitle className="text-green-400 text-lg">{category.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-green-500/10 text-green-400 border border-green-500/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Proyectos</span> Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-green-500/20 hover:border-green-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-green-400 text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-green-400/50 text-green-400 text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-green-400/50 text-green-400 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">Contacto</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-300 mb-8 max-md:px-4">
                ¿Interesado en colaborar? Me encantaría conocer más sobre tu proyecto y cómo puedo ayudarte.
              </p>
              
              {/* Links - Solo stack móvil */}
              <div className="flex justify-center space-x-8 mb-8 max-md:flex-col max-md:space-x-0 max-md:space-y-4 max-md:px-4">
                <Link
                  href="mailto:agustin.developer.1@gmail.com"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors max-md:justify-center"
                >
                  <Mail className="w-6 h-6 max-md:w-5 max-md:h-5" />
                  <span className="max-md:text-sm">agustin.developer.1@gmail.com</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/agustin-maldonado1"
                  target="_blank"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors max-md:justify-center"
                >
                  <Linkedin className="w-6 h-6 max-md:w-5 max-md:h-5" />
                  <span className="max-md:text-sm">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/Maldonatioinn"
                  target="_blank"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors max-md:justify-center"
                >
                  <Github className="w-6 h-6 max-md:w-5 max-md:h-5" />
                  <span className="max-md:text-sm">GitHub</span>
                </Link>
              </div>
            </div>

            {/* WhatsApp Terminal */}
            <WhatsAppTerminal />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-green-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Agustín Maldonado. Cybersecurity Specialist Portfolio.</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Send, MessageCircle } from "lucide-react"

export function WhatsAppTerminal() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { type: "system", content: "WhatsApp Terminal v1.0.0 - Cybersecurity Contact Interface" },
    { type: "system", content: "Type your message and press ENTER to send via WhatsApp" },
    { type: "prompt", content: "user@cybersec:~$ " },
  ])
  const [currentPrompt, setCurrentPrompt] = useState("user@cybersec:~$ ")
  const [shouldScroll, setShouldScroll] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottom()
      setShouldScroll(false)
    }
  }, [messages, shouldScroll])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user command to messages
    setMessages((prev) => [...prev, { type: "command", content: `${currentPrompt}${input}` }])
    setShouldScroll(true)

    // Process command
    processCommand(input.trim())
    setInput("")
  }

  const processCommand = (command: string) => {
    const lowerCommand = command.toLowerCase()

    if (lowerCommand === "help" || lowerCommand === "--help") {
      setMessages((prev) => [
        ...prev,
        { type: "output", content: "Available commands:" },
        { type: "output", content: "  help          - Show this help message" },
        { type: "output", content: "  send <msg>    - Send message via WhatsApp" },
        { type: "output", content: "  contact       - Show contact information" },
        { type: "output", content: "  clear         - Clear terminal" },
        { type: "prompt", content: currentPrompt },
      ])
      setShouldScroll(true)
    } else if (lowerCommand === "clear") {
      setMessages([
        { type: "system", content: "WhatsApp Terminal v1.0.0 - Cybersecurity Contact Interface" },
        { type: "system", content: "Type your message and press ENTER to send via WhatsApp" },
        { type: "prompt", content: currentPrompt },
      ])
    } else if (lowerCommand === "contact") {
      setMessages((prev) => [
        ...prev,
        { type: "output", content: "Contact Information:" },
        { type: "output", content: "  Name: Agustín Maldonado" },
        { type: "output", content: "  Role: Cybersecurity Specialist" },
        { type: "output", content: "  Email: agustin.developer.1@gmail.com" },
        { type: "output", content: "  GitHub: github.com/Maldonatioinn" },
        { type: "prompt", content: currentPrompt },
      ])
      setShouldScroll(true)
    } else if (lowerCommand.startsWith("send ")) {
      const message = command.substring(5)
      if (message.trim()) {
        const whatsappUrl = `https://wa.me/+5491234567890?text=${encodeURIComponent(message)}`
        setMessages((prev) => [
          ...prev,
          { type: "success", content: `Sending message: "${message}"` },
          { type: "success", content: "Opening WhatsApp..." },
          { type: "prompt", content: currentPrompt },
        ])
        setShouldScroll(true)
        setTimeout(() => {
          window.open(whatsappUrl, "_blank")
        }, 1000)
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "error", content: "Error: Message cannot be empty" },
          { type: "error", content: "Usage: send <your message>" },
          { type: "prompt", content: currentPrompt },
        ])
        setShouldScroll(true)
      }
    } else if (command.trim() && !lowerCommand.startsWith("send ")) {
      // If it's not a command, treat it as a direct message
      const whatsappUrl = `https://wa.me/+5491234567890?text=${encodeURIComponent(command)}`
      setMessages((prev) => [
        ...prev,
        { type: "success", content: `Sending message: "${command}"` },
        { type: "success", content: "Opening WhatsApp..." },
        { type: "prompt", content: currentPrompt },
      ])
      setShouldScroll(true)
      setTimeout(() => {
        window.open(whatsappUrl, "_blank")
      }, 1000)
    } else {
      setMessages((prev) => [
        ...prev,
        { type: "error", content: `Command not found: ${command}` },
        { type: "error", content: 'Type "help" for available commands' },
        { type: "prompt", content: currentPrompt },
      ])
      setShouldScroll(true)
    }
  }

  const getMessageStyle = (type: string) => {
    switch (type) {
      case "system":
        return "text-green-400"
      case "command":
        return "text-white"
      case "output":
        return "text-gray-300"
      case "error":
        return "text-red-400"
      case "success":
        return "text-green-400"
      case "prompt":
        return "text-green-400"
      default:
        return "text-gray-300"
    }
  }

  return (
    <Card className="bg-gray-900 border-green-500/30 max-w-4xl mx-auto">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-green-400">
          <Terminal className="w-5 h-5 mr-2" />
          WhatsApp Contact Terminal
          <MessageCircle className="w-5 h-5 ml-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black rounded-lg p-4 font-mono text-sm">
          <div className="h-64 overflow-y-auto mb-4 space-y-1">
            {messages.map((message, index) => (
              <div key={index} className={getMessageStyle(message.type)}>
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">{currentPrompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white outline-none caret-green-400"
              placeholder="Type your message or 'help' for commands..."
              autoFocus
            />
            <Button type="submit" size="sm" className="ml-2 bg-green-500 hover:bg-green-600 text-black">
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <div className="mt-3 text-xs text-gray-500">
            <p>Commands: help | send &lt;message&gt; | contact | clear</p>
            <p>Or just type your message directly to send via WhatsApp</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

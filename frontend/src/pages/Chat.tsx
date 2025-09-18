import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User, Sparkles, BookOpen, Users, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI Academic Assistant. I can help you with course selection, study planning, academic resources, and campus information. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      text: "Course recommendations",
      action: "What courses should I take this semester?",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Study groups",
      action: "How can I find study groups for my major?",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      text: "Academic planning",
      action: "Help me plan my academic schedule",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: "Campus resources",
      action: "What campus resources are available for students?",
    },
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: "Sorry, I’m having trouble connecting to the server.",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-4 px-4 max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-primary">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Academic Assistant
            </h1>
          </div>
          <p className="text-muted-foreground">
            Your intelligent companion for academic success
          </p>
        </div>

        {/* Quick Actions */}
        {messages.length <= 1 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:bg-accent/10 transition-colors duration-200 border-accent/20 hover:border-accent/40"
                  onClick={() => handleQuickAction(action.action)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium">{action.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <Card className="flex-1 flex flex-col bg-card/50 backdrop-blur-sm border-accent/20">
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="w-8 h-8 border-2 border-accent/20">
                      <AvatarFallback className="bg-gradient-primary text-white">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-primary text-white"
                        : "bg-muted/50 text-foreground border border-accent/20"
                    }`}
                  >
                    <p className="leading-relaxed">{message.content}</p>
                    <span
                      className={`text-xs mt-2 block ${
                        message.role === "user"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="w-8 h-8 border-2 border-accent/20">
                      <AvatarFallback className="bg-secondary">
                        <User className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4">
                  <Avatar className="w-8 h-8 border-2 border-accent/20">
                    <AvatarFallback className="bg-gradient-primary text-white">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted/50 p-4 rounded-2xl border border-accent/20">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        AI is thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t border-accent/20">
            <div className="flex gap-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about courses, study tips, campus resources..."
                className="flex-1 bg-background border-accent/20 focus:border-accent"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4"
                variant="default"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              AI Academic Assistant can make mistakes. Verify important
              information.
            </p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
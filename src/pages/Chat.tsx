import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navbar } from "@/components/Navbar";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Sparkles,
  HelpCircle,
  CreditCard,
  Home,
  Calculator,
  BookOpen,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "bot";
  message: string;
  timestamp: Date;
  isTyping?: boolean;
  quickReplies?: string[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      message:
        "สวัสดีครับ! ผมเป็นผู้ช่วย GHB CreditBuilder ยินดีให้คำปรึกษาเรื่องเครดิตและสินเชื่อครับ 😊",
      timestamp: new Date(),
      quickReplies: [
        "เครดิตคืออะไร?",
        "ขอสินเชื่อบ้านยังไง?",
        "วิธีเพิ่มคะแนนเครดิต",
        "ดูบทเรียน",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    {
      icon: CreditCard,
      title: "เครดิตและคะแนน",
      questions: [
        "เครดิตคืออะไร?",
        "วิธีเพิ่มคะแนนเครดิต",
        "ตรวจสอบคะแนนเครดิตยังไง?",
      ],
    },
    {
      icon: Home,
      title: "สินเชื่อบ้าน",
      questions: [
        "เงื่อนไขสินเชื่อบ้าน",
        "เตรียมเอกสารอะไรบ้าง?",
        "ขั้นตอนการขอสินเชื่อ",
      ],
    },
    {
      icon: Calculator,
      title: "การคำนวณ",
      questions: [
        "คำนวณดอกเบี้ยยังไง?",
        "จำลองการผ่อนชำระ",
        "ประเมินความสามารถชำระ",
      ],
    },
    {
      icon: BookOpen,
      title: "การเรียนรู้",
      questions: [
        "บทเรียนสำหรับมือใหม่",
        "เทคนิคการออมเงิน",
        "การวางแผนการเงิน",
      ],
    },
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      message: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();

    let response = "";
    let quickReplies: string[] = [];

    if (lowerMessage.includes("เครดิต") || lowerMessage.includes("คะแนน")) {
      response = `เครดิตคือการประเมินความน่าเชื่อถือทางการเงินของคุณครับ สิ่งสำคัญที่ช่วยสร้างเครดิตที่ดี ได้แก่:

📌 ชำระหนี้ตรงเวลาทุกครั้ง
📌 ไม่ใช้เครดิตเกินกำลัง  
📌 มีประวัติการออมเงิน
📌 จ่ายค่าสาธารณูปโภคตรงเวลา

คุณต้องการทราบรายละเอียดในส่วนไหนเพิ่มเติมครับ?`;
      quickReplies = ["��ิธีเพิ่มคะแนน", "ตรวจสอบคะแนน", "ดูบทเรียน"];
    } else if (
      lowerMessage.includes("สินเชื่อ") ||
      lowerMessage.includes("บ้าน")
    ) {
      response = `สำหรับสินเชื่อบ้าน เราจะช่วยประเมินโอกาสการอนุมัติและเงื่อนไขที่เหมาะสมครับ

🏠 ขั้นตอนการขอสินเชื่อบ้าน:
1. ประเมินความสามารถทางการเงิน
2. เตรียมเอกสารที่จำเป็น
3. เลือกธนาคารและแผนการชำระ
4. ยื่นคำขอและรอการอนุมัติ

ลองใช้เครื่องมือจำลองสินเชื่อของเราดูครับ!`;
      quickReplies = [
        "จำลองสินเชื่อ",
        "เอกสารที่ต้องใช้",
        "เงื่อนไขการอนุมัติ",
      ];
    } else if (lowerMessage.includes("ออม") || lowerMessage.includes("เงิน")) {
      response = `การออมเงินเป็นพื้นฐานสำคัญของการเงินที่ดีครับ 💰

✨ เทคนิคการออมที่ได้ผล:
- กฎ 50/30/20 (ค่าใช้จ่าย/ความบันเทิง/การออม)
- ออมอัตโนมัติผ่านธนาคาร
- ตั้งเป้าหมายการออมที่ชัดเจน
- ติดตามรายรับ-จ่ายสม่ำเสมอ

อยากเรียนรู้เรื่องการออมเงินเพิ่มเติมไหมครับ?`;
      quickReplies = ["บทเรียนการออม", "ตั้งเป้าหมาย", "คำนวณการออม"];
    } else if (
      lowerMessage.includes("บทเรียน") ||
      lowerMessage.includes("เรียน")
    ) {
      response = `เรามีบทเรียนที่น่าสนใจมากมายครับ! 📚

🎯 หมวดหมู่ที่แนะนำ:
• พื้นฐานการเงิน - เริ่มต้นที่นี่
• สินเชื่อบ้าน - ความรู้เชิงลึก  
• การลงทุน - สร้างความมั่งคั่ง
• วางแผนการเงิน - อนาคตที่มั่นคง

แต่ละบทเรียนใช้เวลาไม่เกิน 20 นาที และได้คะแนนรางวัลด้วยครับ!`;
      quickReplies = ["ดูบทเรียนทั้งหมด", "เริ่มจากพื้นฐาน", "สินเชื่อบ้าน"];
    } else {
      response = `ขอโทษครับ ผมยังไม่เข้าใจคำถามของคุณ 😅 

ลองถามในหัวข้อเหล่านี้ดูครับ:
• เรื่องเครดิตและคะแนนเครดิต
• สินเชื่อและการกู้ยืมเงิน  
• การออมเงินและการลงทุน
• บทเรียนทางการเงิน

หรือเลือกคำถามด่วนด้านล่างได้เลยครับ!`;
      quickReplies = [
        "เครดิตคืออะไร?",
        "สินเชื่อบ้าน",
        "วิธีออมเงิน",
        "ดูบทเรียน",
      ];
    }

    return {
      id: Date.now().toString(),
      sender: "bot",
      message: response,
      timestamp: new Date(),
      quickReplies,
    };
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  const MessageBubble = ({ message }: { message: Message }) => {
    const isBot = message.sender === "bot";

    return (
      <div className={cn("flex gap-3 mb-4", !isBot && "flex-row-reverse")}>
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
            isBot ? "bg-ghb-primary" : "bg-ghb-accent",
          )}
        >
          {isBot ? (
            <Bot className="w-5 h-5 text-white" />
          ) : (
            <User className="w-5 h-5 text-white" />
          )}
        </div>

        <div className={cn("max-w-[80%] space-y-2", !isBot && "items-end")}>
          <div
            className={cn(
              "p-4 rounded-2xl",
              isBot ? "bg-white border shadow-sm" : "bg-ghb-primary text-white",
            )}
          >
            <p
              className={cn(
                "text-sm leading-relaxed thai-text whitespace-pre-line",
                isBot ? "text-ghb-dark" : "text-white",
              )}
            >
              {message.message}
            </p>
          </div>

          {message.quickReplies && message.quickReplies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {message.quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs thai-text rounded-full"
                >
                  {reply}
                </Button>
              ))}
            </div>
          )}

          <div className={cn("text-xs text-ghb-gray", !isBot && "text-right")}>
            {message.timestamp.toLocaleTimeString("th-TH", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghb-light/30 via-white to-ghb-accent/5 flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="pt-20 px-4 pb-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-ghb-dark thai-text mb-2">
            ผู้ช่วย AI
          </h1>
          <p className="text-ghb-gray thai-text">
            ปรึกษาเรื่องเครดิตและสินเชื่อได้ตลอด 24 ชั่วโมง
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-4 pb-4">
        <Card className="h-full border-0 shadow-lg flex flex-col">
          <CardHeader className="border-b bg-gradient-to-r from-ghb-primary/5 to-ghb-accent/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-ghb-primary rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg text-ghb-dark thai-text">
                    ผู้ช่วย GHB
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-ghb-gray thai-text">
                      ออนไลน์
                    </span>
                  </div>
                </div>
              </div>
              <Badge className="bg-ghb-primary/10 text-ghb-primary border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                AI
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}

                {isTyping && (
                  <div className="flex gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-ghb-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white border rounded-2xl p-4 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-ghb-gray rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-ghb-gray rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-ghb-gray rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t bg-ghb-light/20">
                <h3 className="text-sm font-semibold text-ghb-dark thai-text mb-3 flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  คำถามยอดนิยม
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickQuestions.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-ghb-primary" />
                          <span className="text-xs font-medium text-ghb-dark thai-text">
                            {category.title}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {category.questions.map((question, qIndex) => (
                            <button
                              key={qIndex}
                              onClick={() => handleQuickReply(question)}
                              className="block w-full text-left text-xs text-ghb-gray hover:text-ghb-primary transition-colors p-2 rounded-lg hover:bg-ghb-primary/5 thai-text"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="พ��มพ์คำถามของคุณ..."
                    className="pr-12 h-12 thai-text"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => sendMessage(inputMessage)}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-ghb-primary hover:bg-ghb-primary/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-ghb-gray text-center mt-2 thai-text">
                ผู้ช่วย AI อาจให้ข้อมูลที่ไม่ถูกต้อง กรุณาตรวจสอบข้อมูลเพิ่มเติม
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;

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
        "ทำไมคะแนนเครดิตสำคัญ?",
        "ปัจจัยที่ส่งผลต่อคะแนนเครดิต",
        "เครดิตเสียแก้ไขได้ไหม?",
      ],
    },
    {
      icon: Home,
      title: "สินเชื่อบ้าน",
      questions: [
        "เงื่อนไขสินเชื่อบ้าน",
        "เตรียมเอกสารอะไรบ้าง?",
        "ขั้นตอนการขอสินเชื่อ",
        "ดาวน์เบอร์เซ็นต์ขั้นต่ำ",
        "อัตราดอกเบี้ยล่าสุด",
        "ระยะเวลาผ่อนชำระ",
        "ค่าธรรมเนียมต่างๆ",
        "การประกันสินเชื่อ",
      ],
    },
    {
      icon: Calculator,
      title: "การคำนวณ",
      questions: [
        "คำนวณดอกเบี้ยยังไง?",
        "จำลองการผ่อนชำระ",
        "ประเมินความสามารถชำระ",
        "คำนวณรายได้ต่อเดือน",
        "หนี้สินต่อรายได้",
        "เงินดาวน์ที่ต้องเตรียม",
        "ค่าใช้จ่ายเพิ่มเติม",
      ],
    },
    {
      icon: BookOpen,
      title: "การเรียนรู้",
      questions: [
        "บทเรียนสำหรับมือใหม่",
        "เทคนิคการออมเงิน",
        "การวางแผนการเงิน",
        "หลักการลงทุนเบื้องต้น",
        "การบริหารหนี้",
        "ประกันชีวิตและสุขภาพ",
        "เคล็ดลับการเก็บเงิน",
      ],
    },
    {
      icon: Clock,
      title: "คนทำงานอิสระ",
      questions: [
        "ฟรีแลนซ์ขอสินเชื่อได้ไหม?",
        "เอกสารสำหรับคนทำงานอิสระ",
        "พิสูจน์รายได้ยังไง?",
        "ทำบัญชีรายรับ-จ่าย",
        "สร้างประวัติการเงิน",
        "ข้อดีของการทำงานอิสระ",
        "วางแผนเงินเกษียณ",
      ],
    },
    {
      icon: CheckCircle2,
      title: "เทคนิคเฉพาะ",
      questions: [
        "เพิ่มโอกาสอนุมัติสินเชื่อ",
        "ข้อมูลทางเลือกคืออะไร?",
        "ใช้ข้อมูลอีคอมเมิร์ซ",
        "ประวัติการชำระค่าสาธารณูปโภค",
        "สร้างเครดิตแรก",
        "เทคนิคการผ่อนชำระ",
        "หลีกเลี่ยงหนี้เสีย",
        "ปรับปรุงฐานะการเงิน",
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
      response = `เครดิตคือการประเมินความน่าเชื่อถือทางการเงินของคุณครับ 📊

🎯 **ปัจจัยสำคัญที่ส่งผลต่อคะแนนเครดิต:**
📌 ประวัติการชำระหนี้ (35%)
📌 การใช้เครดิต (30%)
📌 อายุของบัญชี (15%)
📌 ประเภทเครดิต (10%)
📌 การสอบถามเครดิต (10%)

💡 **เทคนิคเพิ่มคะแนนเครดิต:**
• ชำระหนี้ตรงเวลาทุกครั้ง
• ใช้เครดิตไม่เกิน 30% ของวงเงิน
• เก็บบัญชีเก่าไว้
• หลีกเลี่ยงการขอเครดิตบ่อยเกินไป`;
      quickReplies = ["วิธีตรวจสอบคะแนน", "เครดิตเสียแก้ไขได้ไหม", "ปรับปรุงคะแนน"];
    } else if (lowerMessage.includes("ฟรีแลนซ์") || lowerMessage.includes("อิสระ") || lowerMessage.includes("ทำงานอิสระ")) {
      response = `สำหรับคนทำงานอิสระ เราเข้าใจดีว่าการขอสินเชื่อยากกว่าพนักงานประจำ 💪

🔥 **ข้อมูลทางเลือกที่ GHB ใช้ประเมิน:**
📱 ประวัติการขายออนไลน์ (Shopee, Lazada)
💡 การชำระค่าไฟ-น้ำตรงเวลา
💰 ยอดเงินฝากและการออมเงิน
📦 การส่งของผ่าน Kerry, Flash Express
🚗 การใช้ Grab, Foodpanda

📝 **เอกสารที่ช่วยได้:**
• สำเนาบัญชีธนาคาร 6 เดือน
• หลักฐานการขายสินค้าออนไลน์
• ใบเสร็จค่าสาธารณูปโภค
• สัญญาเช่าหรือทะเบียนบ้าน`;
      quickReplies = ["ใช้ข้อมูลอีคอมเมิร์ซ", "พิสูจน์รายได้", "สร้างประวัติการเงิน"];
    } else if (
      lowerMessage.includes("สินเชื่อ") ||
      lowerMessage.includes("บ้าน") ||
      lowerMessage.includes("ก่อสร้าง")
    ) {
      response = `🏠 **คู่มือสินเชื่อบ้านฉบับสมบูรณ์**

💰 **เงื่อนไขพื้นฐาน:**
• เงินดาวน์ขั้นต่ำ 10-20%
• อัตราดอกเบี้ย 3.99-7.50% ต่อปี
• ระยะเวลาผ่อน สูงสุด 30 ปี
• รายได้ขั้นต่ำ 15,000 บาท/เดือน

📋 **เอกสารสำคัญ:**
• บัตรประชาชน + ทะเบียนบ้าน
• หลักฐานรายได้ 6 เดือน
• สำเนาโฉนดที่ดิน
• ใบอนุญาตก่อสร้าง (กรณีซื้อบ้านใหม่)

🎯 **เคล็ดลับผ่านอนุมัติ:**
• หนี้สินรวมไม่เกิน 70% ของรายได้
• มีประวัติเครดิตที่ดี
• มีเงินสำรองอย่างน้อย 6 เดือน`;
      quickReplies = [
        "จำลองสินเชื่อ",
        "คำนวณเงินดาวน์",
        "ค่าธรรมเนียม",
        "ขั้นตอนสมัคร",
      ];
    } else if (lowerMessage.includes("ดอกเบี้ย") || lowerMessage.includes("คำนวณ") || lowerMessage.includes("ผ่อน")) {
      response = `🧮 **การคำนวณสินเชื่อบ้าน**

📊 **สูตรคำนวณงวดผ่อน:**
งวดผ่อน = เงินกู้ × [r(1+r)^n] / [(1+r)^n-1]

💡 **ตัวอย่างการคำนวณ:**
เงินกู้: 2,000,000 บาท
ดอกเบี้ย: 5% ต่อปี (0.42% ต่อเดือน)
ระยะเวลา: 20 ปี (240 งวด)
**ผ่อนต่อเดือน: 13,191 บาท**

📈 **ค่าใช้จ่ายเพิ่มเติม:**
• ค่าธรรมเนียมจัดทำสัญญา 3,000-5,000 บาท
• ค่าประเมินหลักทรัพย์ 2,000-3,000 บาท
• ประกันชีวิต 0.5-1% ของเงินกู้ต่อปี
• ประกันอัคคีภัย 0.1-0.2% ต่อปี`;
      quickReplies = ["ใช้เครื่องคำนวณ", "เปรียบเทียบแบงก์", "ประกันที่จำเป็น"];
    } else if (lowerMessage.includes("ออม") || lowerMessage.includes("เงิน") || lowerMessage.includes("ลงทุน")) {
      response = `💰 **คู่มือการออมและลงทุนฉบับครบถ้วน**

📋 **กลยุทธ์การออมเงิน:**
🎯 กฎ 50/30/20
• 50% ค่าใช้จ่ายจำเป็น
• 30% ความบันเทิงและต้องการ
• 20% การออมและลงทุน

💡 **เทคนิคเก็บเงินได้ผล:**
• ออมอัตโนมัติทันทีได้เงินเดือน
• ใช้กระปุกออนไลน์
• ตั้งเป้าหมายระยะสั้น-ยาว
• ลดค่าใช้จ่ายที��ไม่จำเป็น

📈 **การลงทุนเบื้องต้น:**
• เงินฝากประจำ (1-2% ต่อปี)
• กองทุนรวม (3-8% ต่อปี)
• หุ้น (5-15% ต่อปี แต่มีความเสี่ยง)
• อสังหาริมทรัพย์ (การเติบโตระยะยาว)`;
      quickReplies = ["วางแผนออมเงิน", "เริ่มลงทุน", "กองทุนเกษียณ", "ประกันชีวิต"];
    } else if (
      lowerMessage.includes("บทเรียน") ||
      lowerMessage.includes("เรียน") ||
      lowerMessage.includes("การศึกษา")
    ) {
      response = `📚 **ศูนย์การเรียนรู้ GHB CreditBuilder**

🎓 **หลักสูตรแนะนำ:**

📖 **พื้นฐานการเงิน (เริ่มต้น)**
• เข้าใจเงินและการออม
• การทำบัญชีรายรับ-จ่าย
• หลักการลงทุนเบื้องต้น
⏱️ เวลา: 15 นาที | 🎁 รางวัล: 50 คะแนน

🏠 **สินเชื่อบ้าน (ระดับกลาง)**
• ประเภทสินเชื่อที่มี
• การเตรียมเอกสาร
• เทคนิคผ่านอนุมัติ
⏱️ เวลา: 25 นาที | 🎁 รางวัล: 100 คะแนน

💎 **การลงทุนขั้นสูง**
• วิเคราะห์หุ้นและกองทุน
• การกระจายความเสี่ยง
• การวางแผนเกษียณ
⏱️ เวลา: 30 นาที | 🎁 รางวัล: 150 คะแนน`;
      quickReplies = ["เริ่มเรียนเลย", "ดูคะแนนของฉัน", "หลักสูตรแนะนำ"];
    } else if (lowerMessage.includes("เอกสาร") || lowerMessage.includes("อัปโหลด")) {
      response = `📋 **เอกสารสำหรับสินเชื่อบ้าน**

👤 **เอกสารส่วนบุคคล:**
• บัตรประชาชน (หน้า-หลัง)
• ทะเบียนบ้าน
• ใบสำคัญการสมรส (ถ้ามี)
• สำเนาทะเบียนสมรส (ถ้ามี)

💰 **เอกสารทางการเงิน:**
• สลิปเงินเดือน 6 เดือนล่าสุด
• หนังสือรับรองเงินเดือน
• สำเนาบัญชีธนาคาร 6 เดือน
• ใบแสดงรายได้ (สำหรับฟรีแลนซ์)

🏠 **เอกสารอสังหาริมทรัพย์:**
• สำเนาโฉนดที่ดิน
• ใบอนุญาตก่อสร้าง
• แบบแปลนบ้าน
• ใบเสนอราคาจากผู้รับเหมา

📊 **เอกสารเพิ่มเติม (สำหรับคนทำงานอิสระ):**
• สัญญาการขายออนไลน์
• ใบเสร็จค่าสาธารณูปโภค
• หลักฐานการโอนเงิน`;
      quickReplies = ["อัปโหลดเอกสาร", "ตรวจสอบความครบถ้วน", "เอกสารฟรีแลนซ์"];
    } else {
      response = `ขอโทษครับ ผมยังไม่เข้าใจคำถามของคุณ 😅

🤖 **ผมสามารถช่วยเหลือในเรื่องเหล่านี้:**
💳 เครดิตและคะแนนเครดิต
🏠 สินเชื่อบ้านและอสังหาริมทรัพย์
💰 การออมเงินและการลงทุน
📚 บทเรียนทางการเงิน
👨‍💼 คำแนะนำสำหร��บคนทำงานอิสระ
🧮 เครื่องมือคำนวณทางการเงิน

ลองเลือกหัวข้อที่สนใจ หรือถามคำถามใหม่ได้เลยครับ!`;
      quickReplies = [
        "เครดิตคืออะไร?",
        "สินเชื่อบ้าน",
        "ฟรีแลนซ์ขอสินเชื่อ",
        "เรียนรู้การเงิน",
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
                    placeholder="พิมพ์คำถามของคุณ..."
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
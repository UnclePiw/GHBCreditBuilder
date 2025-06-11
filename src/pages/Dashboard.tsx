import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ProgressRing } from "@/components/ui/progress-ring";
import { Layout } from "@/components/Layout";
import {
  TrendingUp,
  Target,
  Award,
  Calendar,
  PiggyBank,
  CreditCard,
  Star,
  ArrowRight,
  Trophy,
  Flame,
  CheckCircle,
  Plus,
  Shield,
  MessageCircle,
} from "lucide-react";

const Dashboard = () => {
  // Mock data - in real app this would come from API
  const creditScore = 650;
  const ghbCreditScore = 725; // New GHB Credit Score using alternative data
  const journeyProgress = 68;
  const currentLevel = 3;
  const totalPoints = 1250;
  const ghbPoints = 850; // GHB Points for rewards
  const currentStreak = 7;
  const monthlySavings = 2500;
  const savingsGoal = 5000;
  const creditLadderProgress = 75; // Credit Ladder progress (3-12 months)
  const monthsInProgram = 8;
  const nextMicroCredit = 15000; // Available micro-credit amount

  const quickActions = [
    {
      title: "ภารกิจใหม่",
      description: "มี 3 ภารกิจรอคุณอยู่",
      icon: Target,
      color: "bg-[rgb(254,80,0)]",
      link: "/missions",
    },
    {
      title: "เครดิตทดลอง",
      description: "จัดการข้อมูลทางเลือกของคุณ",
      icon: Shield,
      color: "bg-green-600",
      link: "/credit-sandbox",
    },
    {
      title: "จำลองสินเชื่อ",
      description: "ดูความเป็นไปได้ในการอนุมัติ",
      icon: CreditCard,
      color: "bg-blue-600",
      link: "/loan-simulator",
    },
    {
      title: "เรียนรู้",
      description: "บทเรียนใหม่เพิ่มแล้ว",
      icon: Award,
      color: "bg-purple-600",
      link: "/education",
    },
    {
      title: "อัปโหลดเอกสาร",
      description: "เตรียมเอกสารสำหรับสินเชื่อ",
      icon: Plus,
      color: "bg-orange-600",
      link: "/document-upload",
    },
    {
      title: "ผู้ช่วย AI",
      description: "ปรึกษาเรื่องเครดิตและสินเชื่อ",
      icon: MessageCircle,
      color: "bg-indigo-600",
      link: "/chat",
    },
  ];

  const recentAchievements = [
    {
      title: "นักออมตัวจริง",
      description: "ออมเงินครบ 30 วัน",
      date: "วันนี้",
      points: 100,
      icon: PiggyBank,
    },
    {
      title: "ผู้เรียนรู้",
      description: "อ่านบทเรียนครบ 5 บท",
      date: "เมื่อวาน",
      points: 50,
      icon: Award,
    },
  ];

  const upcomingMissions = [
    {
      title: "บันทึกรายจ่าย",
<<<<<<< HEAD
      description: "บันทึกรายจ่ายวันนี้",
=======
      description:ั"บันทึกรายจ่ายวันนี้",
>>>>>>> 53de442f23297d994d260ab2bc61fdc34718aaa6
      deadline: "วันนี้",
      points: 10,
      progress: 80,
    },
    {
      title: "เรียนรู้การลงทุน",
      description: "อ่านบทเรียนการลงทุนเบื้องต้น",
      deadline: "พรุ่งนี้",
      points: 25,
      progress: 0,
    },
  ];

  return (
<<<<<<< HEAD
    <Layout className="bg-white">
      {/* Hero Section - GHB Bank Style */}
      <section className="bg-gradient-to-r from-[rgb(240,240,240)] to-white py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Banner */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h1 className="text-3xl lg:text-4xl font-bold text-[rgb(51,51,51)] thai-text mb-3">
                  สวัสดี คุณสมชาย! 👋
                </h1>
                <p className="text-[rgb(85,85,85)] thai-text text-lg">
                  วันนี้เป็นวันที่ดีในการสร้างเครดิต
                </p>
              </div>
              <div className="flex items-center space-x-6 text-[rgb(85,85,85)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[rgb(254,80,0)]">
                    {currentStreak}
=======
    <div className="min-h-screen bg-gradient-to-br from-ghb-light/30 via-white to-ghb-accent/5 pb-24">
      <Navbar notifications={3} />

      {/* Main Content */}
      <div className="pt-20 px-4 space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-ghb-dark thai-text mb-2">
            สวัสดี คุณสมชาย! 👋
          </h2>
          <p className="text-ghb-gray thai-text">
            วันนี้เป็นวันที่ดีในการสร้างเครดิต
          </p>
        </div>

        {/* GHB Credit Score Card with Alternative Data */}
        <Card className="border-0 shadow-lg bg-gradient-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="pb-4 !bg-[rgba(126,211,33,1)]">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white thai-text text-lg">
                  GHB Credit Score
                </CardTitle>
                <CardDescription className="text-white/80 thai-text">
                  คำนวณจากข้อมูลทางเลือก +75 คะแนน
                </CardDescription>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-6 h-6 text-white mb-1" />
                <Badge className="bg-white/20 text-white border-0 text-xs">
                  Alternative Data
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="!bg-[rgba(126,211,33,1)]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-4xl font-bold text-white mb-1">
                  {ghbCreditScore}
                </div>
                <div className="text-sm text-white/70 thai-text">
                  เครดิตแบบดั้งเดิม: {creditScore}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-0 mt-2"
                >
                  เครดิตดีมาก
                </Badge>
              </div>
              <ProgressRing
                progress={((ghbCreditScore - 300) / 550) * 100}
                size={80}
                strokeWidth={6}
                color="#FFFFFF"
                backgroundColor="rgba(255,255,255,0.2)"
              >
                <Star className="w-6 h-6 text-white" />
              </ProgressRing>
            </div>

            {/* Alternative Data Sources */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-white/80 thai-text">
                  ชำระค่าสาธารณูปโภค
                </div>
                <div className="text-white font-semibold">
                  ✓ ตรงเวลา 12 เดือน
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-white/80 thai-text">รายได้ E-commerce</div>
                <div className="text-white font-semibold">✓ สม่ำเสมอ</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-white/80 thai-text">การออมในแอป</div>
                <div className="text-white font-semibold">
                  ✓ ทุกวัน {currentStreak} วัน
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <div className="text-white/80 thai-text">กิจกรรมการเงิน</div>
                <div className="text-white font-semibold">✓ กลุ่มออม</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Ladder Progress */}
        <Card className="border-0 shadow-md border-l-4 border-l-ghb-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-ghb-dark thai-text flex items-center">
                  <Target className="w-5 h-5 mr-2 text-ghb-primary" />
                  บันไดเครดิต GHB
                </CardTitle>
                <CardDescription className="thai-text">
                  สร้างวินัยการเงินเดือนที่ {monthsInProgram}/12 เดือน
                </CardDescription>
              </div>
              <div className="text-center">
                <Badge className="bg-ghb-primary/10 text-ghb-primary border-0">
                  {creditLadderProgress}%
                </Badge>
                <div className="text-xs text-ghb-gray mt-1 thai-text">
                  เกือบจบ!
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={creditLadderProgress} className="h-3 mb-4" />
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-700 thai-text">
                  เสร็จแล้ว
                </div>
                <div className="text-green-600 thai-text">ออมรายวัน</div>
              </div>
              <div className="text-center p-2 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-700 thai-text">
                  เสร็จแล้ว
                </div>
                <div className="text-green-600 thai-text">ชำระตรงเวลา</div>
              </div>
              <div className="text-center p-2 bg-yellow-50 rounded-lg">
                <div className="font-semibold text-yellow-700 thai-text">
                  กำลังทำ
                </div>
                <div className="text-yellow-600 thai-text">วางแผนการเงิน</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-ghb-light/30 rounded-lg">
              <p className="text-sm text-ghb-dark thai-text font-medium">
                🎉 ขั้นต่อไป: ปลดล็อกสินเชื่อจำนวนเล็ก
              </p>
              <p className="text-xs text-ghb-gray thai-text mt-1">
                วงเงินถึง ฿{nextMicroCredit.toLocaleString()} ดอกเบี้ยพิเศษ
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-ghb-warning/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-ghb-warning" />
              </div>
              <div className="text-2xl font-bold text-ghb-dark">
                {ghbPoints.toLocaleString()}
              </div>
              <p className="text-sm text-ghb-gray thai-text">GHB Points</p>
              <Badge variant="outline" className="text-xs mt-1">
                แลกรางวัลได้
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-ghb-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6 text-ghb-primary" />
              </div>
              <div className="text-2xl font-bold text-ghb-dark">
                {currentStreak}
              </div>
              <p className="text-sm text-ghb-gray thai-text">วันต่อเนื่อง</p>
              <Badge variant="outline" className="text-xs mt-1 thai-text">
                บันไดเครดิต
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Savings Progress */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-ghb-dark thai-text flex items-center">
                  <PiggyBank className="w-5 h-5 mr-2 text-ghb-success" />
                  เป้าหมายการออม
                </CardTitle>
                <CardDescription className="thai-text">
                  เดือนมีนาคม 2024
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between mb-3">
              <div>
                <div className="text-2xl font-bold text-ghb-dark">
                  ฿{monthlySavings.toLocaleString()}
                </div>
                <p className="text-sm text-ghb-gray thai-text">
                  จาก ฿{savingsGoal.toLocaleString()}
                </p>
              </div>
              <Badge className="bg-ghb-success/10 text-ghb-success border-0">
                {Math.round((monthlySavings / savingsGoal) * 100)}%
              </Badge>
            </div>
            <Progress
              value={(monthlySavings / savingsGoal) * 100}
              className="h-2"
            />
          </CardContent>
        </Card>

        {/* Micro-Credit Trial & Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Available Micro-Credit */}
          <Card className="border-0 shadow-md bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-ghb-dark thai-text text-lg flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                สินเชื่อจำนวนเล็ก
              </CardTitle>
              <CardDescription className="thai-text">
                ปลดล็อกจากบันไดเครดิต
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 mb-2">
                ฿{nextMicroCredit.toLocaleString()}
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ghb-gray thai-text">
                    อัตราดอกเบี้ย:
                  </span>
                  <span className="font-semibold text-green-600">
                    6.5% ต่อปี
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ghb-gray thai-text">วัตถุประสงค์:</span>
                  <span className="font-semibold thai-text">วางดาวน์บ้าน</span>
                </div>
              </div>
              <Button
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white thai-text"
                onClick={() => (window.location.href = "/document-upload")}
              >
                เตรียมเอกสาร
              </Button>
            </CardContent>
          </Card>

          {/* Partnership Benefits */}
          <Card className="border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-ghb-dark thai-text text-lg flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-600" />
                สิทธิประโยชน์พันธมิตร
              </CardTitle>
              <CardDescription className="thai-text">
                เฉพาะสมาชิก GHB CreditBuilder
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                  <div>
                    <div className="font-semibold text-sm thai-text">
                      วัสดุก่อสร้าง
                    </div>
                    <div className="text-xs text-ghb-gray thai-text">
                      Home Pro
                    </div>
>>>>>>> 53de442f23297d994d260ab2bc61fdc34718aaa6
                  </div>
                  <div className="text-sm thai-text">วันต่อเนื่อง</div>
                </div>
                <div className="w-px h-12 bg-[rgb(238,238,238)]"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[rgb(254,80,0)]">
                    {ghbPoints.toLocaleString()}
                  </div>
                  <div className="text-sm thai-text">GHB Points</div>
                </div>
              </div>
<<<<<<< HEAD
=======
              <Button variant="outline" className="w-full mt-3 thai-text">
                ดูทั้งหมด
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Coach Recommendations */}
        <Card className="border-0 shadow-md bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-ghb-dark thai-text flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-600" />
              คำแนะนำจาก AI Coach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-ghb-dark thai-text">
                    เพิ่มการออมอีก ฿500 ต่อเดือน
                  </p>
                  <p className="text-sm text-ghb-gray thai-text">
                    จะช่วยเพิ่ม GHB Credit Score อีก 15 คะแนน
                  </p>
                </div>
                <Button size="sm" variant="outline" className="thai-text">
                  ทำตาม
                </Button>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-ghb-dark thai-text">
                    เชื่อมต่อบัญชี Food Delivery
                  </p>
                  <p className="text-sm text-ghb-gray thai-text">
                    ข้อมูลรายได้เพิ่มเติมจะช่วยประเมินเครดิต
                  </p>
                </div>
                <Button size="sm" variant="outline" className="thai-text">
                  เชื่อมต่อ
                </Button>
              </div>
>>>>>>> 53de442f23297d994d260ab2bc61fdc34718aaa6
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 space-y-12 mb-20">
        {/* Credit Score Section - GHB Bank Style */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GHB Credit Score Card */}
            <Card className="border border-[rgb(238,238,238)] shadow-lg overflow-hidden">
              <CardHeader className="bg-[rgb(254,80,0)] text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white thai-text text-xl mb-2">
                      GHB Credit Score
                    </CardTitle>
                    <CardDescription className="text-white/90 thai-text">
                      คำนวณจากข้อมูลทางเลือก +75 คะแนน
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="w-8 h-8 text-white mb-2" />
                    <Badge className="bg-white/20 text-white border-0 text-xs">
                      Alternative Data
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="bg-white p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-4xl font-bold text-[rgb(51,51,51)] mb-2">
                      {ghbCreditScore}
                    </div>
                    <div className="text-sm text-[rgb(85,85,85)] thai-text">
                      เครดิตแบบดั้งเดิม: {creditScore}
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0 mt-2">
                      เครดิตดีมาก
                    </Badge>
                  </div>
                  <ProgressRing
                    progress={((ghbCreditScore - 300) / 550) * 100}
                    size={80}
                    strokeWidth={6}
                    color="rgb(254,80,0)"
                    backgroundColor="rgb(238,238,238)"
                  >
                    <Star className="w-6 h-6 text-[rgb(254,80,0)]" />
                  </ProgressRing>
                </div>

                {/* Alternative Data Sources */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[rgb(240,240,240)] rounded-lg p-3">
                    <div className="text-[rgb(85,85,85)] thai-text">
                      ชำระค่าสาธารณูปโภค
                    </div>
                    <div className="text-[rgb(51,51,51)] font-semibold">
                      ✓ ตรงเวลา 12 เดือน
                    </div>
                  </div>
                  <div className="bg-[rgb(240,240,240)] rounded-lg p-3">
                    <div className="text-[rgb(85,85,85)] thai-text">
                      รายได้ E-commerce
                    </div>
                    <div className="text-[rgb(51,51,51)] font-semibold">
                      ✓ สม่ำเสมอ
                    </div>
                  </div>
                  <div className="bg-[rgb(240,240,240)] rounded-lg p-3">
                    <div className="text-[rgb(85,85,85)] thai-text">
                      การออมในแอป
                    </div>
                    <div className="text-[rgb(51,51,51)] font-semibold">
                      ✓ ทุกวัน {currentStreak} วัน
                    </div>
                  </div>
                  <div className="bg-[rgb(240,240,240)] rounded-lg p-3">
                    <div className="text-[rgb(85,85,85)] thai-text">
                      กิจกรรมการเงิน
                    </div>
                    <div className="text-[rgb(51,51,51)] font-semibold">
                      ✓ กลุ่มออม
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit Ladder Progress Card */}
            <Card className="border border-[rgb(238,238,238)] shadow-lg">
              <CardHeader className="border-b border-[rgb(238,238,238)] bg-[rgb(240,240,240)]">
                <CardTitle className="text-[rgb(51,51,51)] thai-text flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[rgb(254,80,0)]" />
                  บันไดเครดิต GHB
                </CardTitle>
                <CardDescription className="thai-text text-[rgb(85,85,85)]">
                  สร้างวินัยการเงินเดือนที่ {monthsInProgram}/12 เดือน
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[rgb(85,85,85)] thai-text">
                      ความคืบหน้า
                    </span>
                    <span className="font-semibold text-[rgb(254,80,0)]">
                      {creditLadderProgress}%
                    </span>
                  </div>
                  <Progress value={creditLadderProgress} className="h-3" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-700 thai-text">
                      เสร็จแล้ว
                    </div>
                    <div className="text-green-600 thai-text">ออมรายวัน</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-700 thai-text">
                      เสร็จแล้ว
                    </div>
                    <div className="text-green-600 thai-text">ชำระตรงเวลา</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-semibold text-yellow-700 thai-text">
                      กำลังทำ
                    </div>
                    <div className="text-yellow-600 thai-text">
                      วางแผนการเงิน
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-[rgb(51,51,51)] thai-text font-medium">
                    🎉 ขั้นต่อไป: ปลดล็อกสินเชื่อจำนวนเล็ก
                  </p>
                  <p className="text-xs text-[rgb(85,85,85)] thai-text mt-1">
                    วงเงินถึง ฿{nextMicroCredit.toLocaleString()} ดอกเบี้ยพิเศษ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section - GHB Bank Style */}
        <section className="bg-[rgb(240,240,240)] py-12 -mx-4">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[rgb(51,51,51)] thai-text mb-8 text-center">
              บริการของเรา
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link key={index} to={action.link}>
                    <Card className="border border-[rgb(238,238,238)] shadow-lg hover:shadow-xl transition-all duration-200 bg-white">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-[rgb(51,51,51)] thai-text text-lg mb-2">
                          {action.title}
                        </h3>
                        <p className="text-[rgb(85,85,85)] thai-text text-sm leading-relaxed">
                          {action.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-[rgb(51,51,51)] thai-text mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-[rgb(254,80,0)]" />
                ความสำเร็จล่าสุด
              </h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <Card
                      key={index}
                      className="border border-[rgb(238,238,238)] shadow-sm"
                    >
                      <CardContent className="flex items-center p-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[rgb(51,51,51)] thai-text">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-[rgb(85,85,85)] thai-text">
                            {achievement.description}
                          </p>
                          <div className="flex items-center mt-2">
                            <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                              +{achievement.points} คะแนน
                            </Badge>
                            <span className="text-xs text-[rgb(119,119,119)] ml-2 thai-text">
                              {achievement.date}
                            </span>
                          </div>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Missions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[rgb(51,51,51)] thai-text flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[rgb(254,80,0)]" />
                  ภารกิจที่กำลังมา
                </h3>
                <Link to="/missions">
                  <Button
                    variant="outline"
                    size="sm"
                    className="thai-text border-[rgb(254,80,0)] text-[rgb(254,80,0)] hover:bg-[rgb(254,80,0)] hover:text-white"
                  >
                    ดูทั้งหมด
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingMissions.map((mission, index) => (
                  <Card
                    key={index}
                    className="border border-[rgb(238,238,238)] shadow-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-[rgb(51,51,51)] thai-text">
                            {mission.title}
                          </h4>
                          <p className="text-sm text-[rgb(85,85,85)] thai-text">
                            {mission.description}
                          </p>
                        </div>
                        <Badge className="bg-orange-100 text-orange-700 border-0 text-xs thai-text">
                          +{mission.points} คะแนน
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Progress
                          value={mission.progress}
                          className="flex-1 h-2 mr-3"
                        />
                        <span className="text-xs text-[rgb(119,119,119)] thai-text">
                          {mission.deadline}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;

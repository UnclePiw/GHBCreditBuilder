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
import { Navbar } from "@/components/Navbar";
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
      color: "bg-ghb-primary",
      link: "/missions",
    },
    {
      title: "เครดิตทดลอง",
      description: "จัดการข้อมูลทางเลือกของคุณ",
      icon: Shield,
      color: "bg-ghb-accent",
      link: "/credit-sandbox",
    },
    {
      title: "จำลองสินเชื่อ",
      description: "ดูความเป็นไปได้ในการอนุมัติ",
      icon: CreditCard,
      color: "bg-purple-500",
      link: "/loan-simulator",
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
      title: "บันทึกร��ยจ่าย",
      description: "บันทึกรายจ่ายวันนี้",
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
          <CardHeader className="pb-4 !bg-[rgba(245,166,35,1)]">
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
          <CardContent className="!bg-[rgba(245,166,35,1)]">
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
                    6.5% ต���อปี
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
                  </div>
                  <Badge className="bg-red-100 text-red-700 border-0">
                    15% OFF
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                  <div>
                    <div className="font-semibold text-sm thai-text">
                      เช็คเครดิตฟรี
                    </div>
                    <div className="text-xs text-ghb-gray thai-text">
                      NCB Credit
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-0 thai-text">
                    ฟรี
                  </Badge>
                </div>
              </div>
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
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-ghb-dark thai-text mb-4">
            การดำเนินการด่วน
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.link}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98">
                    <CardContent className="flex items-center p-4">
                      <div
                        className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mr-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ghb-dark thai-text">
                          {action.title}
                        </h4>
                        <p className="text-sm text-ghb-gray thai-text">
                          {action.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-ghb-gray" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-ghb-dark thai-text mb-4">
            ความสำเร็จล่าสุด
          </h3>
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="flex items-center p-4">
                    <div className="w-12 h-12 bg-ghb-success/10 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-ghb-success" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ghb-dark thai-text">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-ghb-gray thai-text">
                        {achievement.description}
                      </p>
                      <div className="flex items-center mt-1">
                        <Badge variant="secondary" className="text-xs">
                          +{achievement.points} คะแนน
                        </Badge>
                        <span className="text-xs text-ghb-gray ml-2 thai-text">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-ghb-success" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Upcoming Missions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-ghb-dark thai-text">
              ภารกิจที่กำลังมา
            </h3>
            <Link to="/missions">
              <Button variant="ghost" size="sm" className="thai-text">
                ดูทั้งหมด
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingMissions.map((mission, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-ghb-dark thai-text">
                        {mission.title}
                      </h4>
                      <p className="text-sm text-ghb-gray thai-text">
                        {mission.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs thai-text">
                      +{mission.points} คะแนน
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Progress
                      value={mission.progress}
                      className="flex-1 h-2 mr-3"
                    />
                    <span className="text-xs text-ghb-gray thai-text">
                      {mission.deadline}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

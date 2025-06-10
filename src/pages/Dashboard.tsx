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
} from "lucide-react";

const Dashboard = () => {
  // Mock data - in real app this would come from API
  const creditScore = 650;
  const journeyProgress = 68;
  const currentLevel = 3;
  const totalPoints = 1250;
  const currentStreak = 7;
  const monthlySavings = 2500;
  const savingsGoal = 5000;

  const quickActions = [
    {
      title: "ภารกิจใหม่",
      description: "มี 3 ภารกิจรอคุณอยู่",
      icon: Target,
      color: "bg-ghb-primary",
      link: "/missions",
    },
    {
      title: "จำลองสินเชื่อ",
      description: "ดูความเป็นไปได้ในการอนุมัติ",
      icon: CreditCard,
      color: "bg-ghb-accent",
      link: "/loan-simulator",
    },
    {
      title: "เรียนรู้",
      description: "บทเรียนใหม่เพิ่มแล้ว",
      icon: Award,
      color: "bg-ghb-success",
      link: "/education",
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

        {/* Credit Score Card */}
        <Card className="border-0 shadow-lg bg-gradient-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white thai-text text-lg">
                  คะแนนเครดิตของคุณ
                </CardTitle>
                <CardDescription className="text-white/80 thai-text">
                  เพิ่มขึ้น +25 คะแนนในเดือนนี้
                </CardDescription>
              </div>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  {creditScore}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-0"
                >
                  เครดิตดี
                </Badge>
              </div>
              <ProgressRing
                progress={((creditScore - 300) / 550) * 100}
                size={80}
                strokeWidth={6}
                color="#FFFFFF"
                backgroundColor="rgba(255,255,255,0.2)"
              >
                <Star className="w-6 h-6 text-white" />
              </ProgressRing>
            </div>
          </CardContent>
        </Card>

        {/* Journey Progress */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-ghb-dark thai-text">
                  เส้นทางการสร้างเครดิต
                </CardTitle>
                <CardDescription className="thai-text">
                  ขั้นตอนที่ {currentLevel} จาก 5 ขั้นตอน
                </CardDescription>
              </div>
              <Badge className="bg-ghb-primary/10 text-ghb-primary border-0">
                {journeyProgress}%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={journeyProgress} className="h-3 mb-4" />
            <p className="text-sm text-ghb-gray thai-text">
              เป้าหมายถัดไป: เพิ่มคะแนนเครดิต��ีก 50 คะแนน
            </p>
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
                {totalPoints.toLocaleString()}
              </div>
              <p className="text-sm text-ghb-gray thai-text">คะแนนรวม</p>
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

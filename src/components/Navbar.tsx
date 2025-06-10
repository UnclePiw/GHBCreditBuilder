import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Target,
  Calculator,
  BookOpen,
  MessageCircle,
  User,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    path: "/dashboard",
    icon: Home,
    label: "หน้าหลัก",
    labelEn: "Home",
  },
  {
    path: "/missions",
    icon: Target,
    label: "ภารกิจ",
    labelEn: "Missions",
  },
  {
    path: "/loan-simulator",
    icon: Calculator,
    label: "จำลองสินเชื่อ",
    labelEn: "Loan Sim",
  },
  {
    path: "/education",
    icon: BookOpen,
    label: "เรียนรู้",
    labelEn: "Learn",
  },
];

interface NavbarProps {
  notifications?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ notifications = 0 }) => {
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GHB</span>
            </div>
            <div>
              <h1 className="font-semibold text-ghb-dark thai-text">
                CreditBuilder
              </h1>
              <p className="text-xs text-ghb-gray thai-text">
                สร้างเครดิตที่ดี
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-ghb-gray" />
              {notifications > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs"
                >
                  {notifications > 9 ? "9+" : notifications}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm">
              <User className="w-5 h-5 text-ghb-gray" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 touch-target min-w-[60px]",
                  isActive
                    ? "text-ghb-primary bg-ghb-primary/10"
                    : "text-ghb-gray hover:text-ghb-primary hover:bg-ghb-primary/5",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 mb-1 transition-transform duration-200",
                    isActive && "scale-110",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium thai-text leading-tight",
                    isActive && "font-semibold",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Floating Chat Button */}
      <Link
        to="/chat"
        className="fixed bottom-20 right-4 z-50 w-14 h-14 bg-gradient-primary rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Link>
    </>
  );
};

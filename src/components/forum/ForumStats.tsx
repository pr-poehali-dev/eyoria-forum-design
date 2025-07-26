import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Stats {
  users: number;
  posts: number;
  topics: number;
  online: number;
}

interface ForumStatsProps {
  stats: Stats;
}

const ForumStats = ({ stats }: ForumStatsProps) => {
  const statItems = [
    { label: "Участников", value: stats.users.toLocaleString(), icon: "Users" },
    { label: "Сообщений", value: stats.posts.toLocaleString(), icon: "MessageSquare" },
    { label: "Тем", value: stats.topics.toLocaleString(), icon: "FileText" },
    { label: "Онлайн", value: stats.online.toLocaleString(), icon: "Wifi" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {statItems.map((stat, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-full mb-3">
              <Icon name={stat.icon as any} size={20} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-black font-['Montserrat'] animate-pulse">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-['Open_Sans']">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ForumStats;
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ForumSection {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  time: string;
  section: string;
  replies: number;
  content: string;
}

interface RecentActivityProps {
  posts: Post[];
  sections: ForumSection[];
}

const RecentActivity = ({ posts, sections }: RecentActivityProps) => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-black mb-8 font-['Montserrat'] flex items-center">
        <Icon name="Activity" size={32} className="mr-3" />
        Последняя активность
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 4).map((post) => (
          <Card key={post.id} className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-black font-['Montserrat'] hover:underline cursor-pointer">
                  {post.title}
                </h4>
                <span className="text-xs bg-black text-white px-2 py-1 rounded font-['Open_Sans']">
                  {sections.find(s => s.id === post.section)?.title}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 font-['Open_Sans']">
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={14} />
                    <span>{post.replies}</span>
                  </div>
                  <span>{post.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
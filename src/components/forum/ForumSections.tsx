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

interface ForumSectionsProps {
  sections: ForumSection[];
  posts: Post[];
  onSectionClick: (sectionId: string) => void;
  getSectionStats: (sectionId: string) => { posts: number; topics: number };
}

const ForumSections = ({ sections, posts, onSectionClick, getSectionStats }: ForumSectionsProps) => {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-black mb-8 font-['Montserrat'] flex items-center">
        <Icon name="MessageCircle" size={32} className="mr-3" />
        Разделы форума
      </h3>
      <div className="space-y-4">
        {sections.map((section) => {
          const sectionStats = getSectionStats(section.id);
          return (
            <Card 
              key={section.id} 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl group cursor-pointer"
              onClick={() => onSectionClick(section.id)}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={section.icon as any} size={28} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-black mb-2 font-['Montserrat'] group-hover:underline">
                        {section.title}
                      </h4>
                      <p className="text-gray-600 font-['Open_Sans'] leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-black font-['Montserrat']">
                      {sectionStats.posts}
                    </div>
                    <div className="text-sm text-gray-500 font-['Open_Sans']">сообщений</div>
                    <div className="text-xs text-gray-400 mt-2 font-['Open_Sans']">
                      {sectionStats.topics} тем
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ForumSections;
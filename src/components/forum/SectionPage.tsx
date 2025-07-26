import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

interface NewTopic {
  title: string;
  content: string;
}

interface SectionPageProps {
  selectedSection: string;
  sections: ForumSection[];
  posts: Post[];
  isLoggedIn: boolean;
  newTopic: NewTopic;
  onBackClick: () => void;
  onCreateTopic: (sectionId: string) => void;
  onTopicChange: (topic: NewTopic) => void;
  getSectionPosts: (sectionId: string) => Post[];
}

const SectionPage = ({ 
  selectedSection, 
  sections, 
  posts, 
  isLoggedIn, 
  newTopic, 
  onBackClick, 
  onCreateTopic, 
  onTopicChange,
  getSectionPosts 
}: SectionPageProps) => {
  const currentSection = sections.find(s => s.id === selectedSection);
  const sectionPosts = getSectionPosts(selectedSection);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Button 
            variant="ghost" 
            onClick={onBackClick}
            className="mb-4"
          >
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад к разделам
          </Button>
          <h2 className="text-3xl font-bold text-black font-['Montserrat']">
            {currentSection?.title}
          </h2>
          <p className="text-gray-600 font-['Open_Sans']">
            {currentSection?.description}
          </p>
        </div>
        
        {isLoggedIn && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Icon name="Plus" size={18} className="mr-2" />
                Новая тема
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-2xl">
              <DialogHeader>
                <DialogTitle>Создать новую тему</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="topic-title">Заголовок темы</Label>
                  <Input 
                    id="topic-title" 
                    placeholder="Введите заголовок"
                    value={newTopic.title}
                    onChange={(e) => onTopicChange({...newTopic, title: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="topic-content">Содержание</Label>
                  <Textarea 
                    id="topic-content" 
                    placeholder="Опишите вашу тему подробнее..."
                    value={newTopic.content}
                    onChange={(e) => onTopicChange({...newTopic, content: e.target.value})}
                    rows={6}
                  />
                </div>
                <Button 
                  className="w-full"
                  onClick={() => onCreateTopic(selectedSection)}
                  disabled={!newTopic.title || !newTopic.content}
                >
                  Создать тему
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      
      {/* Section topics */}
      <div className="space-y-4">
        {sectionPosts.map((post) => (
          <Card key={post.id} className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2 font-['Montserrat']">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-['Open_Sans'] mb-4">
                    {post.content}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 font-['Open_Sans']">
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageSquare" size={14} />
                      <span>{post.replies} ответов</span>
                    </div>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {sectionPosts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="MessageCircle" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Пока нет тем</h3>
            <p className="text-gray-500">
              {isLoggedIn ? "Создайте первую тему в этом разделе!" : "Войдите, чтобы создать первую тему."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionPage;
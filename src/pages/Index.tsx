import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [stats, setStats] = useState({
    users: 0,
    posts: 0,
    topics: 0,
    online: 0
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [newTopic, setNewTopic] = useState({ title: "", content: "" });

  // Simulated real-time stats
  useEffect(() => {
    const updateStats = () => {
      setStats({
        users: Math.floor(Math.random() * 200) + 1200,
        posts: Math.floor(Math.random() * 1000) + 8000,
        topics: Math.floor(Math.random() * 50) + 200,
        online: Math.floor(Math.random() * 30) + 50
      });
    };

    updateStats();
    const interval = setInterval(updateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initialize posts
  useEffect(() => {
    setPosts([
      {
        id: 1,
        title: "Новый закон о цифровых правах",
        author: "МинистрЦифры",
        time: "30 минут назад",
        section: "politics",
        replies: Math.floor(Math.random() * 20) + 5,
        content: "Обсуждаем новые положения о защите цифровых прав граждан Эйории..."
      },
      {
        id: 2,
        title: "Предложения по развитию туризма",
        author: "ТурИнвест",
        time: "1 час назад", 
        section: "main",
        replies: Math.floor(Math.random() * 15) + 3,
        content: "Какие достопримечательности стоит развивать в первую очередь?"
      },
      {
        id: 3,
        title: "Обновление конституции Эйории",
        author: "Администратор",
        time: "2 часа назад",
        section: "politics", 
        replies: Math.floor(Math.random() * 30) + 10,
        content: "Предлагаем внести изменения в основной закон страны..."
      },
      {
        id: 4,
        title: "Культурные мероприятия месяца",
        author: "КультМин",
        time: "3 часа назад",
        section: "main",
        replies: Math.floor(Math.random() * 10) + 2,
        content: "План культурных событий на ближайший месяц"
      }
    ]);
  }, []);

  const forumSections = [
    {
      id: "main",
      title: "Главная",
      description: "Общие вопросы и новости виртуальной страны Эйория",
      icon: "Home"
    },
    {
      id: "politics",
      title: "Политика виртуальной страны",
      description: "Обсуждение государственного устройства, законов и политических решений",
      icon: "Crown"
    }
  ];

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
  };

  const handleCreateTopic = (sectionId: string) => {
    if (!newTopic.title || !newTopic.content) return;
    
    const topic = {
      id: posts.length + 1,
      title: newTopic.title,
      author: currentUser,
      time: "Только что",
      section: sectionId,
      replies: 0,
      content: newTopic.content
    };
    
    setPosts([topic, ...posts]);
    setNewTopic({ title: "", content: "" });
    setStats(prev => ({ ...prev, posts: prev.posts + 1, topics: prev.topics + 1 }));
  };

  const getSectionPosts = (sectionId: string) => {
    return posts.filter(post => post.section === sectionId);
  };

  const getSectionStats = (sectionId: string) => {
    const sectionPosts = getSectionPosts(sectionId);
    return {
      posts: sectionPosts.reduce((sum, post) => sum + post.replies, sectionPosts.length),
      topics: sectionPosts.length
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-black/5 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-black/5 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-black/5 animate-pulse"></div>
        
        {/* Moving gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-sweep"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setSelectedSection(null)}>
              {/* Coat of Arms */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/ac40326a-106a-4f4f-85e1-7f9063cd8974.png" 
                  alt="Герб Эйории" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white font-['Montserrat']">EYORIA ФОРУМ</h1>
                <p className="text-gray-300 text-sm font-['Open_Sans']">Официальный форум виртуальной страны</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white font-['Open_Sans']">Добро пожаловать, {currentUser}!</span>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Выйти
                  </Button>
                </div>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="text-white hover:bg-white/10">
                        <Icon name="User" size={18} className="mr-2" />
                        Войти
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle>Вход в систему</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="username">Имя пользователя</Label>
                          <Input 
                            id="username" 
                            placeholder="Введите ваше имя"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleLogin((e.target as HTMLInputElement).value);
                              }
                            }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="password">Пароль</Label>
                          <Input id="password" type="password" placeholder="Введите пароль" />
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            const username = (document.getElementById('username') as HTMLInputElement).value;
                            if (username) handleLogin(username);
                          }}
                        >
                          Войти
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-white text-black hover:bg-gray-100">
                        Регистрация
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle>Регистрация</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reg-username">Имя пользователя</Label>
                          <Input id="reg-username" placeholder="Выберите имя пользователя" />
                        </div>
                        <div>
                          <Label htmlFor="reg-email">Email</Label>
                          <Input id="reg-email" type="email" placeholder="Ваш email" />
                        </div>
                        <div>
                          <Label htmlFor="reg-password">Пароль</Label>
                          <Input id="reg-password" type="password" placeholder="Создайте пароль" />
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            const username = (document.getElementById('reg-username') as HTMLInputElement).value;
                            if (username) {
                              handleLogin(username);
                              setStats(prev => ({ ...prev, users: prev.users + 1 }));
                            }
                          }}
                        >
                          Зарегистрироваться
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {!selectedSection ? (
          // Home page
          <>
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/ac40326a-106a-4f4f-85e1-7f9063cd8974.png" 
              alt="Герб Эйории" 
              className="w-12 h-12 object-contain filter invert"
            />
          </div>
          <h2 className="text-5xl font-bold text-black mb-4 font-['Montserrat'] tracking-tight">
            Добро пожаловать в Эйорию
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans'] leading-relaxed">
            Виртуальная страна с богатой историей и активным сообществом. 
            Присоединяйтесь к обсуждениям о политике, культуре и будущем нашего государства.
          </p>
        </div>

            {/* Live Forum Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Участников", value: stats.users.toLocaleString(), icon: "Users" },
                { label: "Сообщений", value: stats.posts.toLocaleString(), icon: "MessageSquare" },
                { label: "Тем", value: stats.topics.toLocaleString(), icon: "FileText" },
                { label: "Онлайн", value: stats.online.toLocaleString(), icon: "Wifi" }
              ].map((stat, index) => (
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

        {/* Forum Sections */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 font-['Montserrat'] flex items-center">
            <Icon name="MessageCircle" size={32} className="mr-3" />
            Разделы форума
          </h3>
            <div className="space-y-4">
              {forumSections.map((section) => {
                const sectionStats = getSectionStats(section.id);
                return (
                  <Card 
                    key={section.id} 
                    className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl group cursor-pointer"
                    onClick={() => setSelectedSection(section.id)}
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

        {/* Recent Activity */}
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
                        {forumSections.find(s => s.id === post.section)?.title}
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
          </>
        ) : (
          // Section page
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedSection(null)}
                  className="mb-4"
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Назад к разделам
                </Button>
                <h2 className="text-3xl font-bold text-black font-['Montserrat']">
                  {forumSections.find(s => s.id === selectedSection)?.title}
                </h2>
                <p className="text-gray-600 font-['Open_Sans']">
                  {forumSections.find(s => s.id === selectedSection)?.description}
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
                          onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="topic-content">Содержание</Label>
                        <Textarea 
                          id="topic-content" 
                          placeholder="Опишите вашу тему подробнее..."
                          value={newTopic.content}
                          onChange={(e) => setNewTopic({...newTopic, content: e.target.value})}
                          rows={6}
                        />
                      </div>
                      <Button 
                        className="w-full"
                        onClick={() => handleCreateTopic(selectedSection)}
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
              {getSectionPosts(selectedSection).map((post) => (
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
              
              {getSectionPosts(selectedSection).length === 0 && (
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
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://cdn.poehali.dev/files/ac40326a-106a-4f4f-85e1-7f9063cd8974.png" 
              alt="Герб Эйории" 
              className="w-16 h-16 object-contain filter invert mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold font-['Montserrat']">Виртуальная страна Эйория</h3>
              <p className="text-gray-400 font-['Open_Sans']">Единство в многообразии</p>
            </div>
          </div>
          <div className="text-center text-gray-400 font-['Open_Sans']">
            © 2024 Эйория. Все права защищены виртуальным законодательством.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;500;600&display=swap');
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-sweep {
          animation: sweep 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
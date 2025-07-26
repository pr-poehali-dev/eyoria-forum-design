import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumSections = [
    {
      id: "main",
      title: "Главная",
      description: "Общие вопросы и новости виртуальной страны Эйория",
      posts: 127,
      lastPost: "2 часа назад",
      icon: "Home"
    },
    {
      id: "politics",
      title: "Политика виртуальной страны",
      description: "Обсуждение государственного устройства, законов и политических решений",
      posts: 89,
      lastPost: "45 минут назад",
      icon: "Crown"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 animate-gradient-shift">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-float"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100">
                Регистрация
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
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

        {/* Forum Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Участников", value: "1,247", icon: "Users" },
            { label: "Сообщений", value: "8,392", icon: "MessageSquare" },
            { label: "Тем", value: "234", icon: "FileText" },
            { label: "Онлайн", value: "67", icon: "Wifi" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-full mb-3">
                  <Icon name={stat.icon as any} size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-black font-['Montserrat']">{stat.value}</div>
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
            {forumSections.map((section) => (
              <Card key={section.id} className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl group">
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
                        {section.posts}
                      </div>
                      <div className="text-sm text-gray-500 font-['Open_Sans']">сообщений</div>
                      <div className="text-xs text-gray-400 mt-2 font-['Open_Sans']">
                        {section.lastPost}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-8 font-['Montserrat'] flex items-center">
            <Icon name="Activity" size={32} className="mr-3" />
            Последняя активность
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Новый закон о цифровых правах",
                author: "МинистрЦифры",
                time: "30 минут назад",
                section: "Политика",
                replies: 12
              },
              {
                title: "Предложения по развитию туризма",
                author: "ТурИнвест",
                time: "1 час назад", 
                section: "Главная",
                replies: 8
              },
              {
                title: "Обновление конституции Эйории",
                author: "Администратор",
                time: "2 часа назад",
                section: "Политика", 
                replies: 23
              },
              {
                title: "Культурные мероприятия месяца",
                author: "КультМин",
                time: "3 часа назад",
                section: "Главная",
                replies: 5
              }
            ].map((post, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-black font-['Montserrat'] hover:underline cursor-pointer">
                      {post.title}
                    </h4>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded font-['Open_Sans']">
                      {post.section}
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
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
import { useState, useEffect } from "react";
import Header from "@/components/forum/Header";
import ForumStats from "@/components/forum/ForumStats";
import ForumSections from "@/components/forum/ForumSections";
import RecentActivity from "@/components/forum/RecentActivity";
import SectionPage from "@/components/forum/SectionPage";
import WelcomeSection from "@/components/forum/WelcomeSection";
import Footer from "@/components/forum/Footer";

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

  const handleRegister = (username: string) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
    setStats(prev => ({ ...prev, users: prev.users + 1 }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
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

      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onHomeClick={() => setSelectedSection(null)}
        onRegister={handleRegister}
      />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {!selectedSection ? (
          // Home page
          <>
            <WelcomeSection />
            <ForumStats stats={stats} />
            <ForumSections 
              sections={forumSections}
              posts={posts}
              onSectionClick={setSelectedSection}
              getSectionStats={getSectionStats}
            />
            <RecentActivity posts={posts} sections={forumSections} />
          </>
        ) : (
          // Section page
          <SectionPage
            selectedSection={selectedSection}
            sections={forumSections}
            posts={posts}
            isLoggedIn={isLoggedIn}
            newTopic={newTopic}
            onBackClick={() => setSelectedSection(null)}
            onCreateTopic={handleCreateTopic}
            onTopicChange={setNewTopic}
            getSectionPosts={getSectionPosts}
          />
        )}
      </main>

      <Footer />

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
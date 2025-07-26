import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  isLoggedIn: boolean;
  currentUser: string;
  onLogin: (username: string) => void;
  onLogout: () => void;
  onHomeClick: () => void;
  onRegister: (username: string) => void;
}

const Header = ({ isLoggedIn, currentUser, onLogin, onLogout, onHomeClick, onRegister }: HeaderProps) => {
  return (
    <header className="relative z-10 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={onHomeClick}>
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
                  onClick={onLogout}
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
                              onLogin((e.target as HTMLInputElement).value);
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
                          if (username) onLogin(username);
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
                            onRegister(username);
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
  );
};

export default Header;
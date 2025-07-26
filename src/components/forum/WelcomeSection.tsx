const WelcomeSection = () => {
  return (
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
  );
};

export default WelcomeSection;
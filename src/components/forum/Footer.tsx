const Footer = () => {
  return (
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
  );
};

export default Footer;
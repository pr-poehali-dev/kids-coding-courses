import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Основы программирования",
      description: "Изучаем основы кодинга через игры и веселые задачки",
      age: "6-8 лет",
      duration: "2 месяца",
      price: "3000₽/мес",
      image: "/img/527c83bc-db45-4b79-a138-d5697e5d94e2.jpg",
      color: "bg-game-orange"
    },
    {
      id: 2,
      title: "Создание игр",
      description: "Разрабатываем собственные видеоигры с нуля",
      age: "8-10 лет", 
      duration: "3 месяца",
      price: "3500₽/мес",
      image: "/img/17ed60bd-55e2-4a30-9bf4-4692b2aaeba4.jpg",
      color: "bg-game-mint"
    },
    {
      id: 3,
      title: "Веб-разработка",
      description: "Создаем свои первые сайты и веб-приложения",
      age: "9-11 лет",
      duration: "4 месяца", 
      price: "4000₽/мес",
      image: "/img/d80e9dc7-1aac-4648-aeef-f6e81b5e4b96.jpg",
      color: "bg-game-purple"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Мой сын влюбился в программирование! Теперь сам создает игры",
      rating: 5,
      child: "Максим, 9 лет"
    },
    {
      name: "Дмитрий Иванов", 
      text: "Отличные преподаватели, ребенок с удовольствием ходит на занятия",
      rating: 5,
      child: "София, 8 лет"
    },
    {
      name: "Елена Сидорова",
      text: "Дочка научилась создавать свои первые программы за месяц!",
      rating: 5,
      child: "Дарья, 7 лет"
    }
  ];

  const directions = [
    {
      title: "Scratch программирование",
      icon: "Puzzle",
      description: "Визуальное программирование для малышей"
    },
    {
      title: "Разработка игр",
      icon: "Gamepad2",
      description: "Создание 2D игр и анимации"
    },
    {
      title: "Робототехника",
      icon: "Bot",
      description: "Программирование роботов и датчиков"
    },
    {
      title: "Веб-дизайн",
      icon: "Monitor",
      description: "Создание красивых сайтов"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 font-rubik">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-game-orange rounded-lg flex items-center justify-center">
                <Icon name="Code" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">КодДетки</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#courses" className="text-gray-600 hover:text-game-orange transition-colors">Курсы</a>
              <a href="#reviews" className="text-gray-600 hover:text-game-orange transition-colors">Отзывы</a>
              <a href="#directions" className="text-gray-600 hover:text-game-orange transition-colors">Направления</a>
              <a href="#gallery" className="text-gray-600 hover:text-game-orange transition-colors">Галерея</a>
            </nav>
            <Button className="bg-game-orange hover:bg-orange-600 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-bounce-gentle">
              Программирование для детей 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Изучаем программирование и создаем видеоигры через игру и веселье!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-game-orange hover:bg-orange-600 text-white px-8 py-3 text-lg animate-pulse-soft">
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-game-mint text-game-mint hover:bg-game-mint hover:text-white px-8 py-3 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Наши курсы программирования
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-float`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${course.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {course.age}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {course.duration}
                    </Badge>
                    <span className="text-2xl font-bold text-game-orange">{course.price}</span>
                  </div>
                  <Button className="w-full bg-game-purple hover:bg-purple-600 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Development Section */}
      <section className="py-16 bg-gradient-to-r from-game-mint to-game-purple">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-8">
            Создание видеоигр для детей
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            На наших курсах дети изучают разработку игр от идеи до готового продукта. 
            Мы используем Scratch, Unity и другие инструменты, подходящие для юных разработчиков.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {['Персонажи', 'Анимация', 'Звуки', 'Уровни'].map((item, index) => (
              <div key={item} className="bg-white/10 backdrop-blur rounded-lg p-6 text-white animate-pulse-soft" style={{animationDelay: `${index * 0.3}s`}}>
                <Icon name="Sparkles" className="mx-auto mb-3 text-game-yellow" size={32} />
                <h4 className="font-semibold text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Направления обучения
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((direction, index) => (
              <Card key={direction.title} className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-game-orange rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{animationDelay: `${index * 0.1}s`}}>
                    <Icon name={direction.icon as any} className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">{direction.title}</h4>
                  <p className="text-gray-600 text-sm">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Отзывы родителей
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-game-yellow fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">родитель {review.child}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Фотографии с занятий
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,1,2,3,1,2].map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={courses[index % 3].image} 
                  alt={`Занятие ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-game-orange rounded-lg flex items-center justify-center">
                  <Icon name="Code" className="text-white" size={16} />
                </div>
                <h4 className="font-bold text-lg">КодДетки</h4>
              </div>
              <p className="text-gray-400">Программирование для детей 1-4 класса</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Курсы</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Основы программирования</li>
                <li>Создание игр</li>
                <li>Веб-разработка</li>
                <li>Робототехника</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@koddetki.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  г. Москва, ул. Детская, 123
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КодДетки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
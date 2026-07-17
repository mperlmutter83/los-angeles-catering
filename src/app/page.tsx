import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: '🍽️',
      title: 'Gourmet Catering',
      description: 'Delight your guests with our customized menus featuring fresh, locally-sourced ingredients prepared by top chefs.',
    },
    {
      icon: '🍸',
      title: 'Signature Bartending',
      description: "Our expert bartenders craft unique cocktails and provide exceptional service to enhance your event's atmosphere.",
    },
    {
      icon: '📋',
      title: 'Event Planning Assistance',
      description: 'From concept to execution, our team ensures every detail of your event is perfectly orchestrated.',
    },
  ];

  const testimonials = [
    {
      quote: "The team at Los Angeles Catering and Bar made our wedding day unforgettable. The food was exquisite, and the bartending service was top-notch. Our guests couldn't stop raving about the cocktails!",
      author: "Emily R.",
    },
    {
      quote: "From start to finish, the service was impeccable. The staff was friendly and professional, and the menu options were diverse and delicious. Highly recommend for any event!",
      author: "Michael T.",
    },
  ];

  const events = [
    {
      title: 'Summer Tasting Extravaganza',
      description: 'Join us for an exclusive tasting event featuring our summer menu. Experience a variety of dishes and signature cocktails crafted by our expert chefs and bartenders.',
      date: 'June 15, 2024',
      price: 'FREE',
      image: '/images/buffet-display.jpg',
      cta: 'Learn More',
    },
    {
      title: 'Holiday Catering Showcase',
      description: 'Explore our holiday catering options with a special showcase event. Sample festive dishes and drinks perfect for your seasonal celebrations.',
      date: 'November 10, 2024',
      price: 'FREE',
      image: '/images/chefs-preparing.jpg',
      cta: 'Reserve Your Spot',
    },
    {
      title: 'Cocktail Crafting Workshop',
      description: 'Discover the art of cocktail making with our hands-on workshop. Learn to mix and shake like a pro with guidance from our skilled bartenders.',
      date: 'August 20, 2024',
      price: 'FREE',
      image: '/images/team-celebrating.jpg',
      cta: 'Sign Up Now',
    },
    {
      title: 'Gourmet Food Festival',
      description: 'Experience the best of gourmet cuisine at our annual food festival. Enjoy live cooking demonstrations and taste our latest culinary creations.',
      date: 'September 12, 2024',
      price: 'FREE',
      image: '/images/consultation-meeting.jpg',
      cta: 'Get Tickets',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/buffet-display.jpg"
            alt="Catering spread"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-orange-400/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 italic">
              Exquisite Catering and Bartending for Unforgettable Events
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Experience the finest in culinary and mixology services tailored to elevate your special occasions.
            </p>
            <Link
              href="#services"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12">
            Our Premier Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcasing Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-8">
            Showcasing Our Expertise
          </h2>
          <p className="text-center text-gray-600">
            Browse our gallery of stunning events and culinary creations.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-gray-900 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="flex gap-6 items-start">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-orange-500 font-medium">{event.date}</span>
                    <span className="text-orange-500 font-bold">{event.price}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    {event.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                Los Angeles Catering and Bar has been serving the community with exceptional catering and bartending services for over a decade. Our mission is to create memorable experiences through exquisite cuisine and personalized service. We value quality, creativity, and customer satisfaction, striving to exceed expectations at every event.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of dedicated professionals is passionate about delivering the finest culinary experiences, making us a trusted partner for weddings, corporate events, and private parties across Los Angeles.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div>
              <Image
                src="/images/buffet-display-2.jpg"
                alt="Catering display"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-orange-500 text-3xl mb-3">📞</div>
              <h3 className="font-serif text-gray-900 mb-2">Phone</h3>
              <a href="tel:+13106517590" className="text-orange-500 hover:text-orange-600">
                (310) 651-7590
              </a>
            </div>
            <div>
              <div className="text-orange-500 text-3xl mb-3">✉️</div>
              <h3 className="font-serif text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@losangelescateringandbar.com" className="text-orange-500 hover:text-orange-600">
                info@losangelescateringandbar.com
              </a>
            </div>
            <div>
              <div className="text-orange-500 text-3xl mb-3">📍</div>
              <h3 className="font-serif text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/catering-table.jpg"
            alt="Event table setup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-orange-500/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Schedule Your Event Consultation
          </h2>
          <p className="text-white/90 mb-8">
            Ready to elevate your event with exceptional catering and bartending services? Contact us today to discuss your needs and receive a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}

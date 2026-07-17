import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Los Angeles Catering and Bar for exceptional catering and bartending services. Call (310) 651-7590.',
};

export default function ContactPage() {
  const faqs = [
    {
      question: "What types of events do you cater?",
      answer: "We cater a wide variety of events including weddings, corporate events, private parties, holiday gatherings, and more.",
    },
    {
      question: "Do you offer custom menu options?",
      answer: "Yes, we specialize in creating custom menus tailored to your event's theme and dietary preferences.",
    },
    {
      question: "Can I schedule a tasting before booking?",
      answer: "Absolutely! We offer tastings to help you select the perfect menu for your event.",
    },
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking at least three months in advance to ensure availability, especially during peak seasons.",
    },
    {
      question: "Do you provide bartending services?",
      answer: "Yes, our professional bartenders are available to craft cocktails and serve beverages at your event.",
    },
    {
      question: "Are there vegan or gluten-free options available?",
      answer: "We offer a variety of vegan and gluten-free dishes to accommodate all dietary needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 30 days prior to the event will receive a full refund. Please contact us for more details.",
    },
    {
      question: "Do you provide tableware and linens?",
      answer: "Yes, we can supply tableware, linens, and other event essentials as part of our service packages.",
    },
    {
      question: "How do you handle food allergies?",
      answer: "We take food allergies seriously and work closely with clients to ensure all dietary restrictions are respected.",
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the Los Angeles area, but can travel to nearby locations upon request.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/catering-table.jpg"
            alt="Catering setup"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-orange-500/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Get in Touch with Los Angeles Catering and Bar
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Reach out to us for exceptional catering and bartending services tailored to your special events. Our team is ready to make your occasion unforgettable.
          </p>
          <Link
            href="#contact-form"
            className="inline-block bg-white text-orange-500 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-orange-500 text-3xl mb-3">📞</div>
              <h3 className="font-serif text-gray-900 mb-2">Phone</h3>
              <a href="tel:+13106517590" className="text-orange-500 hover:text-orange-600 text-lg">
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

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                Schedule Your Catering or Bartending Service
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to book our services for your next event. Whether it&apos;s a wedding, corporate event, or private party, we&apos;re here to help make it a success.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-medium transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
            <div>
              <Image
                src="/images/buffet-display-2.jpg"
                alt="Catering setup"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-orange-500">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-gray-900 mb-6">Connect with Us on Social Media</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/chefs-preparing.jpg"
            alt="Elegant dining"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-orange-500/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Get in Touch Today!</h2>
          <p className="text-white/90 mb-8">
            Ready to plan your next event? Contact us for a consultation and let us make your vision a reality.
          </p>
          <a
            href="tel:+13106517590"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

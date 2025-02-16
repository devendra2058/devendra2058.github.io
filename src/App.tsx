import React, { useState, useEffect } from 'react';
import { Camera, Video, Music, MapPin, Mail, Phone, Menu, X } from 'lucide-react';
import SplashScreen from './components/SplashScreen';

const carouselImages = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80',
];

const galleryImages = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
];

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Photographer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'Videographer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Mike Johnson',
    role: 'Music Producer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Williams',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

const blogPosts = [
  {
    title: 'The Art of Photography',
    description: 'Discover the secrets behind capturing perfect moments through our lens.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
  },
  {
    title: 'Music Production Tips',
    description: 'Learn about the latest trends in music production and recording techniques.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
  },
  {
    title: 'Videography Essentials',
    description: 'Essential tips and tricks for creating stunning video content.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80',
  },
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [loading]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-2xl font-bold text-red-600">Sazarcreation</span>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-4 shadow-md' : 'hidden lg:flex'}`}>
            {['Home', 'About', 'Services', 'Gallery', 'Team', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">We are here to help</h1>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Sazarcreation</h2>
              <p className="text-gray-600 mb-6">
                At Sazarcreation, we are passionate about bringing your creative visions to life. With years of experience
                in photography, videography, and music production, our team of professionals is dedicated to delivering
                exceptional quality and memorable experiences.
              </p>
              <p className="text-gray-600">
                We believe in the power of visual and audio storytelling, and we work closely with our clients to ensure
                their vision is captured perfectly. Whether you need professional photography, engaging video content,
                or high-quality music production, we're here to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Camera className="h-12 w-12" />, title: 'Photography', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80' },
              { icon: <Video className="h-12 w-12" />, title: 'Videography', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80' },
              { icon: <Music className="h-12 w-12" />, title: 'Music Recording', image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-center text-red-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-center">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="md:w-1/3 h-64 object-cover" />
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                  <button className="mt-4 text-red-600 hover:text-red-700">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14269.796632775721!2d87.98333!3d26.64167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5ba7d4220f6d1%3A0x4d88b3541457a72e!2sBirtamode%2C%20Nepal!5e0!3m2!1sen!2sus!4v1709766543276!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-red-600" />
                <p>Birtamode, Jhapa, Nepal</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-red-600" />
                <p>info@sazarcreation.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-red-600" />
                <p>+977 123-456-7890</p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
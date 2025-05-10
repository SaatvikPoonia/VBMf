import React from 'react';
import { Award, Users, Target, TrendingUp, MapPin, History, Star, Building2, Package, Truck } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Company Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Vishnu Building Material</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With over a decade of experience in the construction industry, 
          Vishnu Building Material has established itself as a leading supplier 
          of premium building materials in the region.
        </p>
      </div>

      {/* Legacy Section */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <History className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Legacy</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013 by Vijay Kumar, our company began as a small construction material store in the heart of the city. Through unwavering commitment to quality and customer satisfaction, we've grown into one of the region's most trusted building material suppliers.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous innovation, expansion, and the formation of strong partnerships with leading manufacturers and construction companies. Today, we serve over 1000 active clients and have been part of numerous landmark construction projects.
              </p>
              <div className="flex items-center text-blue-600">
                <Star className="h-5 w-5 mr-2" />
                <span className="font-semibold">Rated 4.8/5 by our customers</span>
              </div>
            </div>
            <div 
              className="h-full min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")'
              }}
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
          <Target className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the most trusted and preferred supplier of building materials, 
            known for quality, reliability, and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
          <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide superior quality construction materials at competitive prices 
            while maintaining the highest standards of customer service and support.
          </p>
        </div>
      </div>

      {/* Market Presence */}
      <div className="mb-16 bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
        <h2 className="text-3xl font-bold text-center mb-8">Our Market Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
            <p className="text-gray-600">
              2 mega warehouses with over 10,000 sq ft of storage capacity
            </p>
          </div>
          <div className="text-center">
            <Package className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Range</h3>
            <p className="text-gray-600">
              Over 500 products from 50+ premium brands
            </p>
          </div>
          <div className="text-center">
            <Truck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Distribution</h3>
            <p className="text-gray-600">
              Serving pan india with doorstep delivery options
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="flex justify-center">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-24 w-24 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold">Vijay Kumar</h3>
            <p className="text-gray-600">Proprietor</p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Our Headquarters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <p className="text-gray-600 mb-2">Hissaria Bazaar</p>
            <p className="text-gray-600 mb-2">Sirsa - 125055</p>
            <p className="text-gray-600 mb-4">Haryana, India</p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <span className="font-semibold mr-2">Main Office:</span> 9970021037
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold mr-2">Email:</span> info@vishnubuilding.com
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold mr-2">Hours:</span> Mon-Fri: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              alt="Company Headquarters"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 text-white rounded-lg p-12 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <Users className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">500+</div>
            <div>Happy Clients</div>
          </div>
          <div>
            <Award className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">10+</div>
            <div>Years Experience</div>
          </div>
          <div>
            <Package className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div>Projects Completed</div>
          </div>
          <div>
            <Truck className="h-12 w-12 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Delivery Vehicles</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
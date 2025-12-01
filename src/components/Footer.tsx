import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span>Wired</span>
              <span className="text-amber-700"> Creations</span>
            </h3>
            <p className="text-gray-400">
              Transforming ideas into stunning web experiences that drive
              business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-amber-700" target="1" />
                <a
                  href="mailto:contact.wiredcreations@gmail.com"
                  className="hover:text-amber-700 transition-colors"
                >
                  contact.wiredcreations@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-amber-700" />
                <span>+91 9355505920</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-amber-700" />
                <span>
                  <a
                    href="https://www.google.com/maps?sca_esv=7575179a13efdb84&output=search&q=noida+uttar+pradesh&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUba76WL62NDKV-tuv6_wPYBCwn1PrrOfPs6OFYogAUA80FYHcjgwjxnZp9Em-qnZn8N88c_ebmPbIi63FSDmv95Pcf_otdXo9FeYCGsvCNv2WI4CnnNZPbkgsxmielkQhjj8RWID-Gg_V2mrX9CBwas9No3GlQ&entry=mc&ved=1t:200715&ictx=111"
                    target="1"
                  >
                    Noida, Uttar Praadesh, India
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {currentYear} Wired Creations. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-700 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-700 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-700 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-700 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

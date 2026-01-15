import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-[#060640] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid gap-4 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl bg-gradient-to-b from-[#F28C28] via-[#FDAE42] to-[#FFB347] bg-clip-text text-transparent font-bold mb-3">
              TECHERA
            </h1>
            <p className="text-gray-400 text-md mb-7">
              Đơn vị cung cấp nền tảng công nghệ booking du lịch, đồng hành cùng
              các đối tác trong hành trình số hoá và phát triển bền vững.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-[#9090A7] hover:border-primary hover:text-primary rounded-full hover:bg-transparent"
              >
                <Facebook className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-[#9090A7] hover:border-primary hover:text-primary rounded-full hover:bg-transparent"
              >
                <Twitter className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-[#9090A7] hover:border-primary hover:text-primary rounded-full hover:bg-transparent"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-[#9090A7] hover:border-primary hover:text-primary rounded-full hover:bg-transparent"
              >
                <Youtube className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 font-bold">Công ty</h3>
            <ul className="space-y-3 text-md text-[#9090A7]">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Giải pháp
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Đối tác
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 font-bold">Thông tin</h3>
            <ul className="space-y-3 text-md text-[#9090A7]">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Chính sách công ty
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Điều khoản & Điều kiện
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.554834101184!2d106.69590267377482!3d10.768751059337855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3feabe5dfb%3A0x3260c5af74c3621d!2zMTI3IMSQLiBDYWxtZXR0ZSwgUGjGsOG7nW5nIE5ndXnhu4VuIFRow6FpIELDrG5oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1768455352870!5m2!1sen!2s"
              height="100%"
              width="110%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Techera Location"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

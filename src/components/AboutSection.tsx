import { motion } from 'framer-motion';
import About1 from '../assets/images/icon/about1.svg';
import About2 from '../assets/images/icon/about2.svg';
import About3 from '../assets/images/icon/about3.png';
import About31 from '../assets/images/icon/about31.png';
import About32 from '../assets/images/icon/about32.png';

const benefits = [
  {
    icon: <img src={About1} alt="About Icon 1" className="w-10 h-10 md:w-auto md:h-auto" />,
    title: 'An toàn & bảo mật',
    description:
      'Hệ thống được thiết kế với tiêu chuẩn bảo mật cao, đảm bảo an toàn dữ liệu và giao dịch.',
  },
  {
    icon: <img src={About2} alt="About Icon 2" className="w-10 h-10 md:w-auto md:h-auto" />,
    title: 'Đội ngũ chuyên môn cao',
    description:
      'Đội ngũ kỹ thuật và vận hành am hiểu ngành du lịch, sẵn sàng hỗ trợ và đồng hành cùng đối tác.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C4D] mb-4 md:mb-6">
                Về TECHERA
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Với đội ngũ giàu kinh nghiệm trong lĩnh vực công nghệ và du
                lịch, Techera tập trung xây dựng các giải pháp booking hiệu quả,
                giúp kết nối doanh nghiệp với khách hàng một cách nhanh chóng và
                minh bạch.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="mb-1 md:mb-2 text-base md:text-lg font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-12 md:-top-24 right-0 md:-right-0 hidden sm:block"
              >
                <img src={About31} alt="Decoration" className="w-20 h-20 md:w-32 md:h-32" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={About3} alt="About Image" className="rounded-lg w-full max-w-md mx-auto lg:max-w-none" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 md:-bottom-10 right-0 md:-right-2 hidden sm:block"
              >
                <img src={About32} alt="Decoration" className="w-12 h-12 md:w-16 md:h-16" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

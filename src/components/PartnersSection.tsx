import { motion } from 'framer-motion';
import Sun from '../assets/images/Sun.png';
import VN from '../assets/images/vn.png';
import Viet from '../assets/images/viet.png';
import Vin from '../assets/images/vin.png';
import Zalo from '../assets/images/zalo.png';

const partners = [
  { image: Sun },
  { image: VN },
  { image: Viet },
  { image: Vin },
  { image: Zalo },
];

export function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="px-4 py-12 overflow-hidden bg-white md:py-16 lg:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="mb-3 text-2xl font-bold md:mb-4 sm:text-3xl md:text-4xl text-foreground">
            Đối tác & khách hàng tiêu biểu
          </h2>
          <p className="max-w-lg px-4 mx-auto text-sm md:text-base text-muted-foreground">
            Techera tự hào đồng hành cùng các đối tác lớn trong lĩnh vực du lịch
            và giải trí.
          </p>
        </motion.div>

        <div className="w-full md:w-[90%] mx-auto rounded-lg bg-background py-6 md:py-8 overflow-hidden">
          <motion.div
            className="flex items-center gap-8 md:gap-16"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={partner.image}
                  alt={`Partner ${index + 1}`}
                  className="object-contain w-auto h-8 transition-all duration-500 sm:h-10 md:h-12 lg:h-16"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

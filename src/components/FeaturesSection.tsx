import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import TicketIcon from '../assets/images/icon/Ticket.svg';
import PartnerIcon from '../assets/images/icon/Partner.svg';
import PaymentIcon from '../assets/images/icon/Payment.svg';

const features = [
  {
    icon: <img src={TicketIcon} alt="Ticket Icon" className="w-full h-full" />,
    title: 'Hỗ trợ thanh toán',
    description: 'Tích hợp đa dạng phương thức thanh toán an toàn và tiện lợi',
  },
  {
    icon: <img src={PartnerIcon} alt="Partner Icon" className="w-full h-full" />,
    title: 'Hợp tác đối tác chiến lược',
    description: 'Kết nối với các đối tác uy tín trong ngành du lịch',
  },
  {
    icon: <img src={PaymentIcon} alt="Payment Icon" className="w-full h-full" />,
    title: 'Thanh toán nhanh chóng',
    description: 'Xử lý giao dịch nhanh chóng, bảo mật tuyệt đối',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Hệ sinh thái giải pháp booking du lịch
          </h2>
          <p className="max-w-[595px] mx-auto text-sm md:text-base text-[#9090A7] px-4">
            Techera cung cấp nền tảng công nghệ toàn diện cho hoạt động đặt vé
            du lịch, kết nối trực tiếp với các khu vui chơi, điểm tham quan và
            đối tác chiến lược.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full p-5 md:p-[30px] transition-shadow hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  {feature.icon}
                </motion.div>
                <CardTitle className="text-lg md:text-xl mb-2">{feature.title}</CardTitle>
                <CardContent className="p-0">
                  <CardDescription className="text-sm md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

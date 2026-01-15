import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Hero from '../assets/images/hero.png';
import StraightQuotes from '../assets/images/icon/straight-quotes.svg';
import Star from '../assets/images/icon/star.svg';
import CircleR from '../assets/images/CircleR.png';
import CircleL from '../assets/images/CircleL.png';
import Vector from '../assets/images/Vector.png';
export function HeroSection() {
  return (
    <section className="relative px-4 pb-12 pt-28 md:pb-16 md:pt-36 lg:pb-20 lg:pt-44 overflow-hidden bg-[#E8F4FC] dark:bg-gray-900/50">
      {/* Circle Right */}
      <div
        className="
      absolute top-0 right-0
      w-[200px] h-[200px]
      md:w-[260px] md:h-[260px]
      lg:w-[320px] lg:h-[320px]
      bg-no-repeat bg-contain
    "
        style={{ backgroundImage: `url(${CircleR})` }}
      />

      {/* Circle Left */}
      <div
        className="
      absolute bottom-0 left-0
      w-[160px] h-[160px]
      md:w-[220px] md:h-[220px]
      lg:w-[260px] lg:h-[260px]
      bg-no-repeat bg-contain
    "
        style={{ backgroundImage: `url(${CircleL})` }}
      />

      {/* Vector */}
      <div
        className="
      absolute right-[20px] top-[85px]
      md:right-[40px] md:top-[160px]
      lg:right-[60px] lg:top-[180px]
      w-[120px] h-[120px]
      md:w-[160px] md:h-[160px]
      bg-no-repeat bg-contain
    "
        style={{ backgroundImage: `url(${Vector})` }}
      />
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-[#060640]">
              <span className="bg-gradient-to-b from-[#F28C28] via-[#FDAE42] to-[#FFB347] bg-clip-text text-transparent font-bold">
                TECHERA
              </span>{' '}
              - Giải pháp công nghệ booking & bán vé du lịch
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed max-w-xl">
              Nền tảng công nghệ kết nối trực tiếp với các khu vui chơi, điểm
              tham quan và đối tác du lịch lớn, giúp doanh nghiệp và khách hàng
              đặt vé nhanh chóng, thuận tiện.
            </p>

            <Button
              size="lg"
              className="text-base md:text-lg rounded-md font-semibold bg-gradient-to-r from-[#0B1C4D] to-[#1E40AF] text-white px-6 py-5 md:px-8 md:py-6"
            >
              Liên hệ ngay
            </Button>

            <Card className="relative border-l-4 border-l-primary bg-gradient-to-r from-gray-50 to-white w-full lg:w-[84%]">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 mb-3 md:gap-4 md:mb-4">
                  <div className="flex flex-shrink-0 gap-1">
                    <img
                      src={StraightQuotes}
                      alt=""
                      className="w-8 md:w-auto"
                    />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 ml-auto bg-white rounded-full shadow-sm md:px-3">
                    <img src={Star} alt="" className="w-4 md:w-auto" />
                    <span className="text-sm font-bold text-gray-900 md:text-base">
                      4.9
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 md:text-base lg:text-lg">
                  Đội ngũ Techera có tư duy công nghệ tốt, quy trình làm việc rõ
                  ràng và khả năng tích hợp hệ thống linh hoạt — Đối tác triển
                  khai.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img
                src={Hero}
                alt="Hero"
                className="w-full max-w-lg mx-auto lg:max-w-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

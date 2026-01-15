import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import PlatformSection1 from '../assets/images/PlatformSection1.png';
import PlatformSection2 from '../assets/images/PlatformSection2.png';
import CirleR from '../assets/images/CircleR.png';
import CirleL from '../assets/images/CircleL.png';
import Avatar from '../assets/images/icon/avatars.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const platforms = [
  {
    image: PlatformSection1,
    title: 'Nền tảng booking apctravel',
    description:
      'Website và ứng dụng cho phép khách hàng tìm kiếm, đặt vé du lịch và khu vui chơi nhanh chóng.',
    users: '200K+ users',
    avatars: Avatar,
  },
  {
    image: PlatformSection2,
    title: 'Hệ thống quản lý & đối soát',
    description:
      'Giải pháp quản trị đơn hàng, doanh thu và đối soát giữa Techera và các đối tác.',
    users: '200K+ users',
    avatars: Avatar,
  },
  {
    image: PlatformSection1,
    title: 'Nền tảng booking apctravel',
    description:
      'Website và ứng dụng cho phép khách hàng tìm kiếm, đặt vé du lịch và khu vui chơi nhanh chóng.',
    users: '200K+ users',
    avatars: Avatar,
  },
  {
    image: PlatformSection2,
    title: 'Nền tảng booking apctravel',
    description:
      'Website và ứng dụng cho phép khách hàng tìm kiếm, đặt vé du lịch và khu vui chơi nhanh chóng.',
    users: '200K+ users',
    avatars: Avatar,
  },
];

export function PlatformSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 bg-[#E8F4FC] bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${CirleR}), url(${CirleL})`,
        backgroundPosition: 'right top, left bottom',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '200px, 200px',
      }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8 sm:flex-row sm:items-start sm:justify-between md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C4D] mb-3 md:mb-4">
              NỀN TẢNG & GIẢI PHÁP
            </h2>
            <p className="max-w-xl text-sm text-gray-600 md:text-base lg:text-lg">
              Các giải pháp công nghệ được Techera phát triển và vận hành trong
              hệ sinh thái booking du lịch.
            </p>
          </motion.div>

          <div className="flex items-center self-start gap-2 p-2 bg-white rounded-md shadow-md">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 hover:border-primary hover:bg-primary/10"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 bg-primary hover:bg-primary/90"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="w-5 h-5 text-white md:w-6 md:h-6" />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={16}
          slidesPerView={1.1}
          freeMode={true}
          grabCursor={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="!overflow-visible"
        >
          {platforms.map((platform, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden transition-shadow bg-white border-0 shadow-lg hover:shadow-xl rounded-2xl">
                  <CardContent className="flex flex-col h-full p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={platform.image}
                        alt={platform.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-4 md:p-6">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#0B1C4D] mb-2 md:mb-3">
                        {platform.title}
                      </h3>
                      <p className="flex-1 text-xs leading-relaxed text-gray-600 md:text-sm line-clamp-3">
                        {platform.description}
                      </p>

                      <div className="flex items-center gap-2 mt-3 md:mt-4">
                        <div className="flex -space-x-2">
                          <img
                            src={platform.avatars}
                            alt="Users"
                            className="w-auto h-6 md:h-8"
                          />
                        </div>
                        <span className="text-xs text-gray-500 md:text-sm">
                          {platform.users}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

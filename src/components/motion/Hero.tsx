import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-br from-light via-white to-primary/40">
      <div className="container grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold md:text-5xl text-dark">
            Đặt vé thông minh
            <br />
            <span className="text-primary">Cùng Techera</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Nền tảng công nghệ giúp bạn kết nối dịch vụ du lịch nhanh chóng,
            tiện lợi và an toàn.
          </p>
          <Button size="lg" className="rounded-xl">
            Bắt đầu ngay
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

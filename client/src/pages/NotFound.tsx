import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-navy">
      <div className="text-center px-4">
        <p className="font-serif text-8xl font-bold text-gold mb-4">404</p>
        <h2 className="font-serif text-2xl font-bold text-white mb-4">
          ไม่พบหน้าที่คุณต้องการ
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          หน้าที่คุณกำลังค้นหาอาจถูกย้ายหรือลบออกแล้ว
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-sm transition-all duration-300 text-sm"
        >
          <Home className="w-4 h-4" />
          กลับหน้าแรก
        </button>
      </div>
    </div>
  );
}

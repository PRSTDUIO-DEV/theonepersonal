import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { MapView } from "@/components/Map";

/*
 * Design: Royal Academy — Location & Map section
 * Ivory background with embedded Google Maps
 * Shows school address, operating hours, and directions
 */

const SCHOOL_LOCATION = { lat: 13.6789068, lng: 100.5976211 };

export default function LocationMapSection() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add marker for school location
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: SCHOOL_LOCATION,
      title: "โรงเรียนวิชาชีพเดอะวันเพอร์โซนา",
    });
  };

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#FFFFF0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Location
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            ที่ตั้งโรงเรียน
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            เดินทางสะดวก ถนนสรรพาวุธ ใกล้สี่แยกบางนา ใกล้ BTS สถานีบางนา
          </p>
        </motion.div>

        {/* Map + Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Map */}
          <div className="lg:col-span-2 rounded-sm overflow-hidden border border-gold/20 shadow-lg">
            <MapView
              initialCenter={SCHOOL_LOCATION}
              initialZoom={16}
              onMapReady={handleMapReady}
              className="w-full h-[350px] lg:h-[450px]"
            />
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white rounded-sm border border-gold/15 p-6 shadow-sm flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-base mb-2">
                    ที่อยู่
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    324/13 ถนนสรรพาวุธ ชั้น 4
                    <br />
                    ห้องเลขที่ 410-412
                    <br />
                    แขวงบางนาเหนือ เขตบางนา
                    <br />
                    กรุงเทพมหานคร 10260
                  </p>
                  <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                    <span className="font-medium" style={{ color: "#B8941F" }}>ใกล้:</span> ไบเทคบางนา, เซ็นทรัลบางนา, บิ๊กซีบางนา, รพ.ไทยนครินทร์
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-sm border border-gold/15 p-6 shadow-sm flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-base mb-2">
                    เวลาทำการ
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    จันทร์ - เสาร์
                    <br />
                    10:00 - 18:00 น.
                  </p>
                  <p className="text-gold text-xs mt-2 font-medium">
                    เปิดรับสมัครตลอดทั้งปี
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-sm border border-gold/15 p-6 shadow-sm flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-base mb-2">
                    โทรสอบถาม
                  </h3>
                  <a
                    href="tel:0924050378"
                    className="text-navy font-bold text-lg hover:text-gold transition-colors"
                  >
                    092-405-0378
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${SCHOOL_LOCATION.lat},${SCHOOL_LOCATION.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-white font-bold px-6 py-4 rounded-sm transition-all duration-300 text-sm shadow-md"
            >
              <Navigation className="w-4 h-4" />
              นำทางด้วย Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

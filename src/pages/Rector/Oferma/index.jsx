import React from "react";

const Oferma = () => {
  return (
    <div className="oferma" data-aos="fade-up">
      <div className="oferma__title">Hurmatli foydalanuvchi!</div>
      <div className="oferma__top">
        Sizga Toshkent davlat transport universiteti rektoriga bevosita elektron
        tarzda murojaatlarni yuborish imkoniyati taqdim etilmoqda. Shu bilan
        birga, sizning yuborayotgan murojaatingiz rasmiy maqomga ega ekanligini
        ham eslatib qo‘ymoqchimiz.
      </div>
      <div className="oferma__start">
        Shu sababli, sizdan quyidagilarni unutmasligingizni so‘raymiz:
      </div>
      <ul>
        <li>
          Jismoniy shaxs sifatida murojaat yo‘llasangiz familiyangiz (ismingiz,
          otangizning ismi), yashash joyingiz to‘g‘risidagi ma’lumotlar
          ko‘rsatilgan va murojaatingiz mohiyati bayon etilgan bo‘lishi shart.{" "}
          <br /> Yuridik shaxs sifatida murojaat yo‘llasangiz yuridik shaxsning
          to‘liq nomi, uning joylashgan joyi (pochta manzili) to‘g‘risidagi
          ma’lumotlar ko‘rsatilgan va murojaatning mohiyati bayon etilishi talab
          etiladi.
        </li>
        <li>
          Alohida e’tibor bering! Tuhmat, haqorat so‘zlar ishlatilgan va yolg‘on
          xabar beruvchi murojaatlarni taqdim etish mumkin emas.
        </li>
        <li>
          Shuningdek, quyidagi holatlarda murojaatlaringiz rad etilishi
          mumkinligini eslatib o‘tmoqchimiz:
        </li>
        <li>
          odobsizlik mazmunidagi murojaatlar (uyatsiz yoxud haqoratli iboralar,
          tahdidlar, mantiq va ma’nosi bo‘lmagan takliflar va shunga o‘xshash
          murojaatlar);
        </li>
        <li>
          murojaat matnida tushunarsiz qisqartirishlar yoki reklama materiallari
          mavjud bo‘lgan, tarkibida aniq arizalar, shikoyatlar yoki takliflar
          bo‘lmagan murojaatlar.
        </li>
        <li>
          Shuningdek, foydalanuvchining bir necha bor bitta masala bo‘yicha
          javob berilgan murojaatini qayta yuborilganda, agar unda yangi vajlar
          yoki holatlar keltirilmagan bo‘lsa, ko‘rib chiqilmaydi.
        </li>
      </ul>
      <div className="oferma__bottom">
        Mazkur shartlarning barchasi O‘zbekiston Respublikasining amaldagi
        qonunchiligidan kelib chiqqan holda belgilangan.
      </div>
    </div>
  );
};

export default Oferma;

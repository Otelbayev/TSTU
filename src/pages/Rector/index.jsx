import React, { useEffect, useState } from "react";
import callCenter from "../../assets/images/callRector.png";
import { Content, Btn, Item } from "./style";
import { Input } from "../../components/Generics";
import useAxios from "../../hooks/useAxios";
import { Select } from "antd";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhZG1pbiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTcxMTE5MDIxNiwiZXhwIjoxNzExMzYzMDE2LCJpYXQiOjE3MTExOTAyMTZ9.fsdTvLZVFjksAIXwAyGgPDxiP9DEht7oCsHyCRKsxf0";

const selectStyle = {
  width: "100%",
  height: "40px",
  borderRadius: "3px",
};

const Rector = () => {
  const { sendRequest } = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [send, setSend] = useState(true);
  const [check, setCheck] = useState(false);
  const [oferma, setOferma] = useState(false);

  const [other, setOther] = useState(null);

  const [country, setCountry] = useState([]);
  const [teretory, setTeretoriy] = useState([]);
  const [district, setDistrict] = useState([]);
  const [neighbor, setNeighbor] = useState([]);
  const [gender, setGender] = useState([]);
  const [employment, setEmployment] = useState([]);

  const [body, setBody] = useState({
    country_id: null,
    territorie_id: null,
    district_id: null,
    neighborhood_id: null,
  });

  const onItemClick = ({ target: { id } }) => {
    switch (id) {
      case "send":
        setSend(true);
        setCheck(false);
        setOferma(false);
        break;
      case "check":
        setSend(false);
        setCheck(true);
        setOferma(false);
        break;
      case "oferma":
        setSend(false);
        setCheck(false);
        setOferma(true);
        break;
    }
  };

  const getCountry = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: "/api/country/getallcountry",
      });
      setCountry(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getGender = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: "/api/gender/getallgender",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGender(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmployment = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: "/api/employment/getallemployment",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployment(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountry();
    getGender();
    getEmployment();
  }, []);

  const def = {
    color: "#A6A6A6",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140%",
  };

  const bandligi = [
    {
      id: 0,
      value: "Band",
      label: "Band",
    },
    {
      id: 2,
      value: "Ishsiz",
      label: "Ishsiz",
    },
    {
      id: 3,
      value: "Nafaqada",
      label: "Nafaqada",
    },
    {
      id: 4,
      value: "Talaba",
      label: "Talaba",
    },
  ];

  const onCountryChange = async (value) => {
    setOther(value);
    try {
      const response = await sendRequest({
        method: "get",
        url: `/api/territorie/getallterritorie?country_id=${value}`,
      });
      setTeretoriy(response?.data);
      setBody({ ...body, country_id: value });
    } catch (err) {
      console.log(err);
      setTeretoriy([]);
    }
  };

  const onTerretoryChange = async (value) => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `/api/district/getalldistrict?territorie_id=${value}`,
      });
      setDistrict(response?.data);
      setBody({ ...body, territorie_id: value });
    } catch (err) {
      console.log(err);
      setDistrict([]);
    }
  };

  const onDistrictChange = async (value) => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `/api/neighborhood/getallneighborhood?district_id=${value}`,
      });
      setNeighbor(response?.data);
      setBody({ ...body, district_id: value });
    } catch (err) {
      console.log(err);
      setNeighbor([]);
    }
  };

  const filterOption = (input, option) =>
    (option?.children ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="content">
            <div className="content__left">
              <div className="content__left__title">
                Toshkent davlat Transport universiteti rektori
                <span className="content__left__title__span">
                  Abduraxmonov Odil Kalandarovich
                </span>
                virtual qabulxonasi
              </div>
              <div className="content__left__img">
                <img src={callCenter} alt="" />
              </div>
            </div>
            <div className="content__right">
              <div className="content__right__top">
                <Item
                  type={send.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"send"}
                >
                  Murojat yuborish
                </Item>
                <Item
                  type={check.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"check"}
                >
                  Murojatni tekshirish
                </Item>
                <Item
                  type={oferma.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"oferma"}
                >
                  Ommaviy offerta
                </Item>
              </div>
              <div className="content__right__desc">
                {send &&
                  "Sizda hal etilmagan masalalar, muammolar, ariza, shikoyat yoki takliflar bormi? U holda murojaatingizni to‘g‘ridan-to‘g‘ri Toshkent davlat transport universiteti rektoriga yuborishingiz mumkin."}
                {check &&
                  "Murojatni tekshirish uchun elektron pochta manjilingizni kiriting"}
                {oferma && ""}
              </div>
              {send && (
                <form className="content__right__form" data-aos="fade-up">
                  <div className="content__right__form__item">
                    <Select
                      showSearch
                      placeholder="Mamlakat"
                      optionFilterProp="children"
                      filterOption={filterOption}
                      style={selectStyle}
                      onChange={onCountryChange}
                    >
                      {country?.length &&
                        country.map((e) => (
                          <Select.Option key={e.id} value={e.id}>
                            {e.title}
                          </Select.Option>
                        ))}
                    </Select>
                    {other !== 2 && (
                      <Select
                        showSearch
                        placeholder="Viloyat"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        disabled={teretory.length ? false : true}
                        onChange={onTerretoryChange}
                        style={selectStyle}
                      >
                        {teretory?.length &&
                          teretory?.map((e) => (
                            <Select.Option key={e.id} value={e.id}>
                              {e.title}
                            </Select.Option>
                          ))}
                      </Select>
                    )}
                  </div>
                  {other !== 2 && (
                    <div className="content__right__form__item">
                      <Select
                        showSearch
                        placeholder="Tuman/Shahar"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        disabled={district.length ? false : true}
                        style={selectStyle}
                        onChange={onDistrictChange}
                      >
                        {district?.length &&
                          district?.map((e) => (
                            <Select.Option key={e.id} value={e.id}>
                              {e.title}
                            </Select.Option>
                          ))}
                      </Select>
                      <Select
                        showSearch
                        placeholder="Mahalla"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        disabled={neighbor.length ? false : true}
                        style={selectStyle}
                        onChange={(value) => {
                          setBody({ ...body, neighborhood_id: value });
                          console.log(body);
                        }}
                      >
                        {neighbor?.length &&
                          neighbor?.map((e) => (
                            <Select.Option key={e.id} value={e.id}>
                              {e.title}
                            </Select.Option>
                          ))}
                      </Select>
                    </div>
                  )}
                  <Input type="text" placeholder={"Manzil:"} />
                  <div className="content__right__form__item">
                    <Input type={"text"} placeholder={"F.I.O"} />
                    <Input type={"date"} style={def} />
                  </div>
                  <div className="content__right__form__item">
                    <Select style={selectStyle} defaultValue={"Jinsi"}>
                      {gender.map((e) => (
                        <Select.Option key={e.id} value={e.id}>
                          {e.gender}
                        </Select.Option>
                      ))}
                    </Select>
                    <Select style={selectStyle} defaultValue={"Bandligi"}>
                      {employment.map((e) => (
                        <Select.Option key={e.id} value={e.id}>
                          {e.title}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <div className="content__right__form__item">
                    <Input
                      type="text"
                      placeholder={"Telefon raqami:+99899 999 99 99"}
                    />
                    <Input
                      type="text"
                      placeholder={"Qo‘shimcha telefon raqami:+99899 999 99 99"}
                    />
                  </div>
                  <div className="content__right__form__item">
                    <Input type={"text"} placeholder={"Email"} />
                    <Input
                      type={"file"}
                      placeholder={"Yuborish uchun faylni tanlang"}
                    />
                  </div>
                  <div className="content__right__form__item">
                    <textarea
                      name=""
                      id=""
                      style={{
                        width: "100%",
                        padding: "12px 19px",
                        color: "black",
                        fontSize: " 16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "140%",
                        outline: "none",
                        border: "1px solid #CECECE",
                        borderRadius: "4px",
                        height: "113px",
                      }}
                      placeholder="Murojat yo‘llash"
                    ></textarea>
                  </div>
                  <Btn type="primary">Yuborish</Btn>
                </form>
              )}
              {check && (
                <div className="content__right__form" data-aos="fade-up">
                  <Input placeholder={"Email"} type="text" />
                  <Btn type="primary">Yuborish</Btn>
                </div>
              )}
              {oferma && (
                <div className="oferma" data-aos="fade-up">
                  <div className="oferma__title">Hurmatli foydalanuvchi!</div>
                  <div className="oferma__top">
                    Sizga Toshkent davlat transport universiteti rektoriga
                    bevosita elektron tarzda murojaatlarni yuborish imkoniyati
                    taqdim etilmoqda. Shu bilan birga, sizning yuborayotgan
                    murojaatingiz rasmiy maqomga ega ekanligini ham eslatib
                    qo‘ymoqchimiz.
                  </div>
                  <div className="oferma__start">
                    Shu sababli, sizdan quyidagilarni unutmasligingizni
                    so‘raymiz:
                  </div>
                  <ul>
                    <li>
                      Jismoniy shaxs sifatida murojaat yo‘llasangiz familiyangiz
                      (ismingiz, otangizning ismi), yashash joyingiz
                      to‘g‘risidagi ma’lumotlar ko‘rsatilgan va murojaatingiz
                      mohiyati bayon etilgan bo‘lishi shart. <br /> Yuridik
                      shaxs sifatida murojaat yo‘llasangiz yuridik shaxsning
                      to‘liq nomi, uning joylashgan joyi (pochta manzili)
                      to‘g‘risidagi ma’lumotlar ko‘rsatilgan va murojaatning
                      mohiyati bayon etilishi talab etiladi.
                    </li>
                    <li>
                      Alohida e’tibor bering! Tuhmat, haqorat so‘zlar
                      ishlatilgan va yolg‘on xabar beruvchi murojaatlarni taqdim
                      etish mumkin emas.
                    </li>
                    <li>
                      Shuningdek, quyidagi holatlarda murojaatlaringiz rad
                      etilishi mumkinligini eslatib o‘tmoqchimiz:
                    </li>
                    <li>
                      odobsizlik mazmunidagi murojaatlar (uyatsiz yoxud
                      haqoratli iboralar, tahdidlar, mantiq va ma’nosi bo‘lmagan
                      takliflar va shunga o‘xshash murojaatlar);
                    </li>
                    <li>
                      murojaat matnida tushunarsiz qisqartirishlar yoki reklama
                      materiallari mavjud bo‘lgan, tarkibida aniq arizalar,
                      shikoyatlar yoki takliflar bo‘lmagan murojaatlar.
                    </li>
                    <li>
                      Shuningdek, foydalanuvchining bir necha bor bitta masala
                      bo‘yicha javob berilgan murojaatini qayta yuborilganda,
                      agar unda yangi vajlar yoki holatlar keltirilmagan bo‘lsa,
                      ko‘rib chiqilmaydi.
                    </li>
                  </ul>
                  <div className="oferma__bottom">
                    Mazkur shartlarning barchasi O‘zbekiston Respublikasining
                    amaldagi qonunchiligidan kelib chiqqan holda belgilangan.
                  </div>
                </div>
              )}
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Rector;

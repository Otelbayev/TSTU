import { Container } from "./style";
import { ChooseFile, Input } from "../../components/Generics";
import { message } from "antd";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Upload = ({ id }) => {
  const fileRef = useRef();
  const commentRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!fileRef?.current?.files[0] || !commentRef) {
      message.error("All files are required");
      return;
    }

    try {
      message.loading({ key: "form", content: "Loading.." });
      const formData = new FormData();
      formData.append("old_year", 2023);
      formData.append("new_year", 2024);
      formData.append("document_id", id);
      formData.append("comment", commentRef?.current?.value);
      formData.append("file_up", fileRef?.current?.files[0]);

      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/documentteacher110setcontroller/createdocumentteacher110set`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );

      if (res.status === 200) {
        message.success({ key: "form", content: "Succesfully uploaded!" });
        commentRef.current.value = "";
        fileRef.current.value = "";
      }
    } catch (err) {
      message.error({ key: "form", content: "Error to Create!" });
    }
  };

  const [data, setData] = useState([]);

  const getDataByID = async (id) => {
    try {
      const res = await axios.get(
        `${
          import.meta.env
        }/documentteacher110setcontroller/getbyiddocumentteacher110set/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("_token")}`,
          },
        }
      );
      res.status === 200 && setData(res.data);
    } catch (err) {
      setData([]);
    }
  };

  useEffect(() => {
    getDataByID(id);
  }, []);

  return (
    <div>
      <Container className="row" onSubmit={handleSubmit}>
        <Input
          ref={commentRef}
          placeholder="Comment"
          className="form-group col-md-5"
        />
        <ChooseFile ref={fileRef} className="form-group col-md-5" />
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Upload
          </button>
        </div>
      </Container>
      <div className="row">{}</div>
    </div>
  );
};

export default Upload;

const arr = [
  {
    id: 9,
    title: "Ochiq mashg‘ulotlar natijalari bo‘yicha",
    parent_id: 8,
    indicator: false,
    max_score: 5,
    description: "Ochiq mashg‘ulotlar natijalari bo‘yicha",
  },
  {
    id: 10,
    title:
      "Fanlaridan resurslarini axborot tizimiga, ta'lim paltformasiga joylashtirganligi",
    parent_id: 8,
    indicator: true,
    max_score: 5,
    description:
      "Fanlaridan resurslarini axborot tizimiga, ta'lim paltformasiga joylashtirganligi",
  },
  {
    id: 11,
    title:
      "O‘qitish sifati darajasi (talabalardan so‘rab chiqish natijalari bo‘yicha)",
    parent_id: 6,
    indicator: true,
    max_score: 5,
    description:
      "O‘qitish sifati darajasi (talabalardan so‘rab chiqish natijalari bo‘yicha)",
  },
  {
    id: 12,
    title:
      "Talabalarning o‘qituvchining yo‘llanmasi (fani) bo‘yicha olimpiadalarda, har xil tanlovlar va ilmiy grantlardagi ishtiroki",
    parent_id: 9,
    indicator: true,
    max_score: 5,
    description:
      "Talabalarning o‘qituvchining yo‘llanmasi (fani) bo‘yicha olimpiadalarda, har xil tanlovlar va ilmiy grantlardagi ishtiroki",
  },
  {
    id: 13,
    title: "xalqaro: sovrinli o‘rin  - 5 ball, ishtiroki - 4 ball;",
    parent_id: 12,
    indicator: true,
    max_score: 0,
    description: "xalqaro: sovrinli o‘rin  - 5 ball, ishtiroki - 4 ball;",
  },
  {
    id: 15,
    title: "otm miqyosida: sovrinli o‘rin-2 ball, iishtiroki -1 ball",
    parent_id: 12,
    indicator: true,
    max_score: null,
    description: "otm miqyosida: sovrinli o‘rin-2 ball, iishtiroki -1 ball",
  },
  {
    id: 14,
    title: "respublika: sovrinli o‘rin -3 ball, ishtiroki- 2 ball;",
    parent_id: 12,
    indicator: true,
    max_score: 0,
    description: "respublika: sovrinli o‘rin -3 ball, ishtiroki- 2 ball;",
  },
  {
    id: 16,
    title:
      "O‘quv yili  mobaynida oliy ta'lim muassasasi o‘qituvchisi tomonidan nashr etilgan darsliklar va o‘quv qo‘llanmalari soni, O‘UM:",
    parent_id: 7,
    indicator: true,
    max_score: 10,
    description:
      "O‘quv yili  mobaynida oliy ta'lim muassasasi o‘qituvchisi tomonidan nashr etilgan darsliklar va o‘quv qo‘llanmalari soni, O‘UM:",
  },
  {
    id: 1,
    title: "O‘quv-metodik faoliyati",
    parent_id: 0,
    indicator: true,
    max_score: 40,
    description: "O‘quv-metodik faoliyati",
  },
  {
    id: 17,
    title:
      "darsliklar - 10 ball, o‘quv qo‘llanmalar -6 ball,  yangi kiritilgan fan uchun yaratilgan O‘UM- 4 ball",
    parent_id: 16,
    indicator: true,
    max_score: null,
    description:
      "darsliklar - 10 ball, o‘quv qo‘llanmalar -6 ball,  yangi kiritilgan fan uchun yaratilgan O‘UM- 4 ball",
  },
  {
    id: 3,
    title: "Ilmiy faoliyati",
    parent_id: 0,
    indicator: true,
    max_score: 30,
    description: "Ilmiy faoliyati",
  },
  {
    id: 4,
    title: "Oliy ta'lim muassasasini rivojlantirishga qo‘shgan ulushi",
    parent_id: 0,
    indicator: true,
    max_score: 10,
    description: "Oliy ta'lim muassasasini rivojlantirishga qo‘shgan ulushi",
  },
  {
    id: 18,
    title:
      "O‘qitishda komp'yuter va axborot texnologiyalaridan foydalanish darajasi, o‘quv kursini va o‘quv-taqdimot materiallarini ishlab chiqish:",
    parent_id: 7,
    indicator: true,
    max_score: 5,
    description:
      "O‘qitishda komp'yuter va axborot texnologiyalaridan foydalanish darajasi, o‘quv kursini va o‘quv-taqdimot materiallarini ishlab chiqish:",
  },
  {
    id: 19,
    title: "texnologiyalardan foydalanishi -1 ball;",
    parent_id: 18,
    indicator: true,
    max_score: null,
    description: "texnologiyalardan foydalanishi -1 ball;",
  },
  {
    id: 20,
    title: "elektron platformada talaba bilan ishlagani - 5 ball",
    parent_id: 18,
    indicator: true,
    max_score: null,
    description: "elektron platformada talaba bilan ishlagani - 5 ball",
  },
  {
    id: 21,
    title:
      "O‘quv jarayonida zamonaviy ta'lim texnologiyalari va talabalar bilimlarini baholashning ilg‘or usullari qo‘llanilishi darajasi",
    parent_id: 7,
    indicator: true,
    max_score: 5,
    description:
      "O‘quv jarayonida zamonaviy ta'lim texnologiyalari va talabalar bilimlarini baholashning ilg‘or usullari qo‘llanilishi darajasi",
  },
  {
    id: 5,
    title: "Shaxsiy fazilatlari",
    parent_id: 0,
    indicator: true,
    max_score: 10,
    description: "Shaxsiy fazilatlari",
  },
  {
    id: 22,
    title: "(o‘qituvchi taqdim etgan materiallar asosida)",
    parent_id: 21,
    indicator: true,
    max_score: null,
    description: "(o‘qituvchi taqdim etgan materiallar asosida)",
  },
  {
    id: 6,
    title: "O‘qituvchilik faoliyati",
    parent_id: 1,
    indicator: true,
    max_score: 20,
    description: "O‘qituvchilik faoliyati",
  },
  {
    id: 2,
    title: "Tarbiyaviy faoliyati",
    parent_id: 0,
    indicator: true,
    max_score: 20,
    description: "Tarbiyaviy faoliyati",
  },
  {
    id: 7,
    title: "Metodik ishlar",
    parent_id: 1,
    indicator: true,
    max_score: 20,
    description: "Metodik ishlar",
  },
  {
    id: 8,
    title:
      "Nazariy bilimlarni, amaliy ko‘nikmalarni va o‘qitiladigan fanning zamonaviy tendensiyalarini egallaganlik darajasi",
    parent_id: 6,
    indicator: true,
    max_score: 10,
    description:
      "Nazariy bilimlarni, amaliy ko‘nikmalarni va o‘qitiladigan fanning zamonaviy tendensiyalarini egallaganlik darajasi",
  },
];
    
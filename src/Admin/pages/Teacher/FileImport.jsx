import React from "react";
import Wrapper from "../../components/Wrapper";
import { Collapse } from "antd";
import { FileOutlined, EditOutlined, ReadOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "Ўқув-методик фаолияти",
    icon: "40 балл",
    content: (
      <Collapse>
        <Panel
          header={
            <Space>
              <div>1 - Ўқитувчилик фаолияти</div>
              <div>20 балл</div>
            </Space>
          }
          key="2-1"
        >
          <Collapse>
            <Panel
              header={
                <Space>
                  <div>
                    1.1 - Назарий билимларни, амалий кўникмаларни ва
                    ўқитиладиган фаннинг замонавий тенденцияларини эгаллаганлик
                    даражаси
                  </div>
                  <div>10 балл</div>
                </Space>
              }
              key="2-1-1"
            ></Panel>
            <Panel
              header={
                <Space>
                  <div>
                    1.2 - Ўқитиш сифати даражаси (талабалардан сўраб чиқиш
                    натижалари бўйича)
                  </div>
                  <div>5 балл</div>
                </Space>
              }
              key="2-1-2"
            ></Panel>
            <Panel
              header={
                <Space>
                  <div>
                    1.3 - Талабаларнинг ўқитувчининг йўлланмаси (фани) бўйича
                    олимпиадаларда, ҳар хил танловлар ва илмий грантлардаги
                    иштироки
                  </div>
                  <div>5 балл</div>
                </Space>
              }
              key="2-1-3"
            ></Panel>
          </Collapse>
        </Panel>
        <Panel
          header={
            <Space>
              <div>2 - Методик ишлар</div>
              <div>20 балл</div>
            </Space>
          }
          key="2-2"
        >
          <Collapse>
            <Panel
              header={
                <Space>
                  <div>
                    2.1 - Ўқув йили мобайнида олий таълим муассасаси ўқитувчиси
                    томонидан нашр этилган дарсликлар ва ўқув қўлланмалари сони,
                    ЎУМ
                  </div>
                  <div>10 балл</div>
                </Space>
              }
              key="2-2-1"
            ></Panel>
            <Panel
              header={
                <Space>
                  <div>
                    2.2 - Ўқитишда компьютер ва ахборот технологияларидан
                    фойдаланиш даражаси, ўқув курсини ва ўқув-тақдимот
                    материалларини ишлаб чиқиш
                  </div>
                  <div>5 балл</div>
                </Space>
              }
              key="2-2-2"
            ></Panel>
            <Panel
              header={
                <Space>
                  <div>
                    2.3 - Ўқув жараёнида замонавий таълим технологиялари ва
                    талабалар билимларини баҳолашнинг илғор усуллари қўлланилиши
                    даражаси
                  </div>
                  <div>5 балл</div>
                </Space>
              }
              key="2-2-3"
            ></Panel>
          </Collapse>
        </Panel>
      </Collapse>
    ),
  },
  // {
  //   key: "2",
  //   label: "Тарбиявий фаолияти",
  //   icon: "20 балл",
  //   content: (
  //     <Collapse>
  //       <Panel header="Ўқитувчилик фаолияти (20 балл):" key="2-1"></Panel>
  //     </Collapse>
  //   ),
  // },
  // {
  //   key: "3",
  //   label: "Илмий фаолияти",
  //   icon: "30 балл",
  //   content: (
  //     <Collapse>
  //       <Panel header="This is panel header 1" key="3-1">
  //         <p>{text}</p>
  //       </Panel>
  //     </Collapse>
  //   ),
  // },
  // {
  //   key: "4",
  //   label: "Олий таълим муассасасини ривожлантиришга қўшган улуши",
  //   icon: "10 балл",
  //   content: (
  //     <Collapse>
  //       <Panel header="This is panel header 1" key="4-1">
  //         <p>{text}</p>
  //       </Panel>
  //     </Collapse>
  //   ),
  // },
  // {
  //   key: "5",
  //   label: "Шахсий фазилатлари",
  //   icon: "10 балл",
  //   content: (
  //     <Collapse>
  //       <Panel header="This is panel header 1" key="5-1">
  //         <p>{text}</p>
  //       </Panel>
  //     </Collapse>
  //   ),
  // },
];

const FileImport = () => {
  const onChange = (key) => {};

  return (
    <Wrapper title="Педагог ходимларнинг ўқув йилидаги фаолиятини баҳолаш">
      <Collapse onChange={onChange}>
        {items.map((item) => (
          <Panel
            header={
              <Space>
                <span>{item.label}</span>
                {item.icon}
              </Space>
            }
            key={item.key}
          >
            {item.content}
          </Panel>
        ))}
      </Collapse>
    </Wrapper>
  );
};

export default FileImport;

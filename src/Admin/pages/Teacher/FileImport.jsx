import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Collapse } from "antd";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const { Panel } = Collapse;

const FileImport = () => {
  const [rawData, setRawData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_URL_API
      }/documentteacher110controller/getalldocumentteacher110`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );

    res.status === 200 && setRawData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const buildPanels = (items) => {
    return items.map((item) => (
      <Collapse>
        <Panel
          key={item.id}
          header={
            <Space>
              <div>{item.title}</div>
              <div>{item.max_score ? `${item.max_score} ball` : ""}</div>
            </Space>
          }
        >
          {item.children && buildPanels(item.children)}
        </Panel>
      </Collapse>
    ));
  };

  const buildNestedItems = (data, parentId) => {
    return data
      .filter((item) => item.parent_id === parentId)
      .map((item) => ({
        ...item,
        children: buildNestedItems(data, item.id),
      }));
  };

  const nestedItems = buildNestedItems(rawData, 0);

  return (
    <Wrapper title="Педагог ходимларнинг ўқув йилидаги фаолиятини баҳолаш">
      {/* <Collapse items={nestedItems} /> */}
      <Collapse>{buildPanels(nestedItems)}</Collapse>
    </Wrapper>
  );
};

export default FileImport;

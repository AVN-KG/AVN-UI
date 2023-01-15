import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TabbarProps from "./types";
import { Flex } from "../../lib";
import { defaultTheme } from "../../Service/defaultTheme";

const Tabbar = (props: TabbarProps) => {
  const { tabs, name, activeId, onChange } = props;
  const [selected, setSelected] = useState<string>(activeId ? activeId : "");
  const [activeTab, setActiveTab] = useState<{ line: number; left: number }>({
    line: 0,
    left: 0,
  });

  useEffect(() => {
    const target = document.querySelector(
      '[aria-selected="true"]'
    ) as HTMLInputElement;
    const left = target.offsetLeft;
    const line = target.clientWidth;
    const { id, name } = target;

    setActiveTab({ line, left });
    setSelected(id);
  }, []);

  const handleTabChange = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const left = target.offsetLeft;
    const line = target.clientWidth;
    const { id, name } = target;

    onChange && onChange({ name, id });
    setActiveTab({ line, left });
    setSelected(id);
  };

  return (
    <Flex padding="2px 0px" align="center">
      <StTabbar>
        <Flex gap="20px">
          {tabs.map((tab, index) => {
            return (
              <StTabWrap key={index}>
                <StTabBtn
                  selected={selected == tab.id ? true : false}
                  onClick={(e) => handleTabChange(e)}
                  role="tab"
                  aria-selected={selected == tab.id ? true : false}
                  aria-controls="tabpanel-id"
                  id={tab.id}
                  name={name}
                >
                  {tab.title}
                  {tab.count && tab.count > 0 ? (
                    <StCounter>{tab.count}</StCounter>
                  ) : null}
                </StTabBtn>
              </StTabWrap>
            );
          })}
        </Flex>
        <StActiveLine
          lineWidth={activeTab.line}
          left={activeTab.left}
        ></StActiveLine>
      </StTabbar>
    </Flex>
  );
};

const StActiveLine = styled.span<{ lineWidth: number; left: number }>`
  width: ${(props) => props.lineWidth + "px"};
  left: ${(props) => props.left + "px"};
  height: 3px;
  bottom: 0;
  position: absolute;
  border-radius: 3px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: var(--main_color);
`;

const StCounter = styled.div`
  width: 24px;
  height: 24px;
  background: var(--blue_gray);
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
`;

const StTabBtn = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  border-radius: 0;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 18px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  color: var(--blue_gray);

  :hover,
  :focus {
    color: var(--main_color);
  }

  :hover ${StCounter}, :focus ${StCounter} {
    background: var(--main_color);
  }
`;

const StTabWrap = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
`;

const StTabbar = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  flex: 1 1 auto;
  white-space: nowrap;
`;

export default Tabbar;

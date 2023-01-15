import React, { useState } from "react";
import {
  AvnLogin,
  AvnTable,
  Button,
  Checkbox,
  FileWrapper,
  Flex,
  Input,
  Navbar,
  RadioBtn,
  Select,
  Sidebar,
  Tabbar,
} from "./lib";
import FileIcon from "./lib/icons/fileTypes";
import { App2x2Icon } from "./lib/icons/icons";

const Menu = [
  {
    name: "Text",
    icon: <App2x2Icon />,
    count: 12,
    subLinks: [
      { name: "Text", path: "#", count: 1 },
      { name: "Text", path: "#", count: 5 },
      { name: "Text", path: "#", count: 0 },
      { name: "Text", path: "#", count: 6 },
    ],
  },
  {
    name: "Text",
    path: "#",
  },
  {
    name: "Text",
    path: "#",
    subLinks: [
      { name: "Text", path: "#" },
      { name: "Text", path: "#" },
    ],
  },
  {
    name: "Text",
    path: "#",
  },
  {
    name: "Text",
    path: "#",
    icon: <App2x2Icon />,
  },
];

function App() {
  const [innerHigth, setInnerHigth] = useState("100vh");

  // useEffect(() => {
  //   const debouncedHandleResize = debounce(function handleResize() {
  //     if (window.innerWidth < 960) {
  //       setInnerHigth(window.innerHeight);
  //     }
  //   }, 0);

  //   window.addEventListener("resize", debouncedHandleResize);

  //   return () => {
  //     window.removeEventListener("resize", debouncedHandleResize);
  //   };
  // });

  const handleChange = (checked: {}) => {
    console.log(checked);
  };

  return (
    <div>
      <Navbar />
      <Flex width="100%">
        <Sidebar
          childLinks={Menu}
          settingsPath={"/"}
          headerHeight={0}
          releaseYear={"2022"}
          appRelease={"App from AVN. v1.0.0"}
        />

        <Flex justify="space-between" direction="column" width="100%">
          <AvnTable
            theadChild={
              <tr>
                <th>#</th>
                <th>123</th>
                <th>123</th>
                <th>123</th>
                <th>123</th>
                <th>123</th>
              </tr>
            }
            tbodyChild={
              <>
                {" "}
                <tr>
                  <td>#</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                </tr>{" "}
                <tr>
                  <td>#</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                </tr>
              </>
            }
            border={{ y: true, x: true }}
          />

          <Flex direction="column" gap="20px" padding="20px">
            <Tabbar
              tabs={[
                { title: "Tab 1", id: "1" },
                { title: "Tab 2", id: "2" },
                { title: "Tab 3", id: "3" },
                { title: "Tab 4", id: "4", count: 12 },
                { title: "Tab 5", id: "5" },
              ]}
              name={"tabs"}
              activeId={"1"}
            />
            <Input
              inputType={"date"}
              inputState={"normal"}
              label={"Пароль"}
              placeholder={"Введите пароль..."}
              name={"password"}
              inputMsgs={{
                warning: "Caption warning message.",
                error: "Caption error message.",
                current: "Caption current message.",
              }}
              // onChange={handleChange}
              // defaultValue={""}
              // icon={<img src="/logo.jpg" />}
            />
            <Select />
            <FileWrapper
              name="adiletasddddddddddddddddddddddddddddddddddasddddddd.crd"
              path="#"
            />
            <Flex justify="space-between">
              <Checkbox
                label="Label"
                size="big"
                name="checkbox"
                labelPosition="right"
                iconType="mistake"
                onChange={handleChange}
                defaultChecked={true}
              />
              <RadioBtn
                label="Label"
                name="radio"
                onChange={handleChange}
                defaultChecked={false}
              />
            </Flex>
            <Button
              text={"Button"}
              func={() => alert("Welcome to the AVN Portal")}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );

  // return (
  //   <AvnLogin
  //     orgName="Жалал-Абадский государственный университет им. Б.Осмонова"
  //     authFunc={() => alert("Welcome to the AVN Portal")}
  //     passwordLength={5}
  //     appVersion="© 2022 App from AVN. v1.0.0"
  //     orgLogoPath="/logo.jpg"
  //   />
  // );
}

export default App;

// -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//     transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

// Index/index.jsx
import React, { useEffect } from "react";
import { Button } from "antd";
import { get } from "@/utils";
import ActionSheet from "@/components/ActionSheet";
console.log("import.meta.env", import.meta.env);
export default function Index() {
  useEffect(() => {
    get("/index-infos").then(() => {});
  }, []);
  return (
    <div>
      <Button type="primary">Index</Button>
      <a
        onClick={(e) => {
          ActionSheet.openActionSheetWithOptions(
            {
              options: ["option1", "option2", "option3"],
              desc: '选择'
            },
            (selectedIndex) => {
              switch (selectedIndex) {
                case 1:
                  //do something
                  console.log(`selectedIndex`, selectedIndex)
                  break;
                case 2:
                  console.log(`selectedIndex`, selectedIndex)
                  break;
                default:
                  console.log(`selectedIndex`, selectedIndex)
                  break;
              }
            }
          );
          e.preventDefault();
        }}
      >
        按钮
      </a>
    </div>
  );
}

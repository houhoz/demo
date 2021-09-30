import React from "react";
import {
  useSetPageTitle,
  useMount,
  useUnmount,
  useOnResize,
} from "@/utils/customHook";
export default function Hook() {
  const [title, setTitle] = useSetPageTitle();
  useMount(() => {
    console.log("componentDidMount");
  });
  useUnmount(() => {
    console.log("unmount");
  });
  useOnResize(() => {
    console.log(document.body.clientWidth);
  });
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <h2>{title}</h2>
      <input type="text" onInput={onTitleChange} name="" id="" />
    </div>
  );
}

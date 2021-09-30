import React from "react";
import styles from "./index.module.scss";
const ChildFC = (): React.ReactNode => {
  return (
    <div className={styles.child}>
      {" "}
      <a
        href="https://procomponents.ant.design/components/layout"
        rel="noopener noreferrer"
        target="__blank"
      >
        欢迎使用
      </a>
    </div>
  );
};

export default ChildFC;

// const NoFoundPage: React.FC = () => (
//   <div>1111</div>
// );

// export default NoFoundPage;

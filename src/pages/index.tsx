import type { NextPage } from "next";
import Button from "components/common/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Button variant="primary" buttonType="close">
        버튼이다
      </Button>
    </div>
  );
};

export default Home;

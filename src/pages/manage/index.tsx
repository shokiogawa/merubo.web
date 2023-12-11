import { NextPage } from "next";
import CategoryListComponent from "../../feature/category/component/CategoryList";

const Manage: NextPage = () => {
  return (
    <section className="category">
      <CategoryListComponent />
    </section>
  );
};

export default Manage;

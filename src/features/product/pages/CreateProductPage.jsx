import React from "react";
import ProductCreateForm from "../components/ProductCreateForm";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";

const CreateProductPage = () => {
  return (
    <ContainerSection>
      <Breadcrumb
        currentPageTitle={"Create Product"}
        links={[{ pageTitle: "Product", pathName: "/dashboard/product" }]}
      />
      <ProductCreateForm />
    </ContainerSection>
  );
};

export default CreateProductPage;

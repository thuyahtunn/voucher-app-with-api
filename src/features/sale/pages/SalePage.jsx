import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import SaleProductForm from "../components/SaleProductForm";
import SaleTable from "../components/SaleTable";
import SaleInfo from "../components/SaleInfo";

const SalePage = () => {
  return (
    <ContainerSection>
      <Breadcrumb currentPageTitle={"Sale"} />
      <section className=" gap-2 grid grid-cols-4 pb-3">
        <div className=" flex flex-col gap-2 col-span-3">
          <SaleProductForm />
          <SaleTable />
        </div>
        <SaleInfo />
      </section>
    </ContainerSection>
  );
};

export default SalePage;

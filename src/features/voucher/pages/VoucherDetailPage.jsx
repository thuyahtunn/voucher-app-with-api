import React from "react";
import ContainerSection from "../../../components/ContainerSection";
import Breadcrumb from "../../../components/Breadcrumb";
import VoucherDetailSection from "../components/VoucherDetailSection";

const VoucherDetailPage = () => {
  return (
    <ContainerSection>
      <Breadcrumb
        currentPageTitle={"Voucher Detail"}
        links={[{ pageTitle: "Voucher", pathName: "/dashboard/voucher" }]}
      />
      <VoucherDetailSection />
    </ContainerSection>
  );
};

export default VoucherDetailPage;

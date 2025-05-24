import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Forms",
  description:
    "",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;

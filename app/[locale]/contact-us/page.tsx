import ContactUs from "@/components/template/contact-us/ContactUs";
import React from "react";
async function getData() {
  const res = await fetch("https://bayan.savvyhost.io/api/settings", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const ContactUsPage = async () => {
  const data = await getData();
  return <ContactUs data={data}/>;
};

export default ContactUsPage;

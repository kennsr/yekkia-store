import { redirect } from "next/navigation";

export default function RootPage() {
  return (
    <>
      <h1 style={{ display: "none" }}>YEKKIA Character Cookies</h1>
      <h2 style={{ display: "none" }}>
        Handcrafted Custom Cookies in Bekasi & Jabodetabek
      </h2>
      {redirect("/id")}
    </>
  );
}

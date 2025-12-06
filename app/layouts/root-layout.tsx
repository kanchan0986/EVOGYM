import { Outlet } from "react-router";

type Props = {};

export default function RootLayout({}: Props) {
  return (
    <>
      <Outlet />
    </>
  );
}

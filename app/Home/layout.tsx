import { ReactNode } from "react";
import PageWrapper from "@/components/Pagewrapper";
interface Props {
  children: ReactNode;
  bgClass: string;
}

export default function HomeLayout({ children }: Props) {
  return <PageWrapper bgClass="home-bg">{children}</PageWrapper>;
}

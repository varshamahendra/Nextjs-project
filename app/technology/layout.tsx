import { ReactNode } from "react";
import PageWrapper from "@/components/Pagewrapper";
interface Props {
  children: ReactNode;
  bgClass: string;
}

export default function TechnologyLayout({ children }: Props) {
  return <PageWrapper bgClass="technology-bg">{children}</PageWrapper>;
}

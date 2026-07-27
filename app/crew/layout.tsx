import { ReactNode } from "react";
import PageWrapper from "@/components/Pagewrapper";
interface Props {
  children: ReactNode;
  bgClass: string;
}

export default function CrewLayout({ children }: Props) {
  return <PageWrapper bgClass="crew-bg">{children}</PageWrapper>;
}

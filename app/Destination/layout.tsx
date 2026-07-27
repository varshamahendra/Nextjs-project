import { ReactNode } from "react";
import PageWrapper from "@/components/Pagewrapper";
interface Props {
  children: ReactNode;
  bgClass: string;
}

export default function DestinationLayout({ children }: Props) {
  return <PageWrapper bgClass="destination-bg">{children}</PageWrapper>;
}

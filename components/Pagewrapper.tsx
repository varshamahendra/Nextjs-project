import Header from "./Header";
import { ReactNode } from "react";
import { Logoicon } from "./Icons";
interface Props {
  bgClass: string;
  children: ReactNode;
}
const PageWrapper = ({ bgClass, children }: Props) => {
  return (
    <div className={`hero ${bgClass}`}>
      <Header />
      <div className="grid lg:grid-cols-[48px_1fr] md:grid-cols-1 gap-x-16 lg:pl-25 p-[30px] md:pt-25 items-center ">
        <main className="lg:col-start-2">{children}</main>
      </div>
    </div>
  );
};
export default PageWrapper;

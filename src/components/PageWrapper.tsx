import { FC } from "react";

type PageWrapper = {
    children: React.ReactNode;
}

const PageWrapper: FC<PageWrapper> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between py-4" >{children}</div>
  )
}

export default PageWrapper
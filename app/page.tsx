import { Suspense } from "react";
import PageClient from "./pageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PageClient />
    </Suspense>
  );
}

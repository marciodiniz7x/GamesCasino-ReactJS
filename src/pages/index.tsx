import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/basicos/interface');
  }, []);

  return (
    <div>
      <h1>Principal</h1>
    </div>
  )
}
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Helloworld</div>
      <Link href="/login">Login</Link>
    </div>
  );
}

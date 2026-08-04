import Image from "next/image";

export default function WingsLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Fly Agency"
      width={160}
      height={160}
      className={`${className} object-contain`}
    />
  );
}

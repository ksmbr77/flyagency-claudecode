import Image from "next/image";

export default function WingsLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Fly Agency"
      width={64}
      height={64}
      className={`${className} object-contain`}
    />
  );
}

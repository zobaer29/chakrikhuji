import Image from "next/image";

export default function Brand({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span className="relative inline-block h-11 w-11 shrink-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/chakrikhuji-logo.png"
          alt=""
          fill
          sizes="72px"
          unoptimized
          className="translate-y-[8%] scale-[1.6] object-contain"
        />
      </span>
      <span className={`${compact ? "text-lg sm:text-2xl" : "text-xl"} whitespace-nowrap font-black tracking-tight text-ink`}>
        Chakri<span className="text-brand">Khuji</span><span className="text-orange">.</span>
      </span>
    </span>
  );
}

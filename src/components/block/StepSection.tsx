import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;     // for future customization
  bg?: boolean;
  flipped?: boolean; // ✅ New prop
}

export default function StepCard({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt = "Step illustration",
  flipped = false, // default: not flipped
  bg = true, // default: true
}: StepCardProps) {
  return (
    <div
    className={`flex flex-col lg:flex-row ${
      flipped ? 'lg:flex-row-reverse' : ''
    } items-center gap-6 md:gap-10 rounded-xl justify-evenly px-4 py-10 md:px-[5rem] md:py-[8rem] ${
      bg ? 'bg-[#F8F8F8]' : ''
    }`}
  >
      {/* Left - Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={544}
        height={600}
        className="w-full max-w-[300px] md:max-w-[544px] h-auto"
      />

      {/* Right - Text */}
      <div className="text-center md:text-left mt-6 md:mt-0 ">
        <p className="text-white text-[16px] md:text-[20px] font-medium mb-2 bg-[#1F1F1F] rounded-[20px] py-[8px] px-[16px] md:py-[10px] md:px-[20px] w-fit mx-auto md:mx-0">
          Step {stepNumber}.
        </p>
        <h3 className="text-[24px] md:text-[50px] font-bold mb-2 text-[#1F1F1F]">
          {title}
        </h3>
        <p className="text-[#545454] text-[16px] md:text-[36px] leading-snug md:leading-[1.4]">
          {description}
        </p>
      </div>
    </div>
  );
}

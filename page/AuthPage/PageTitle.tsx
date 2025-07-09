export default function PageTitle({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<div className={className}>
			<div className="mb-[10px] h-[14px] w-[111px] bg-[#003478]"></div>
			<h2 className="text-2xl md:text-[32px] mb-2 font-bold tracking-tighter leading-[1.46]">
				{title}
			</h2>
		</div>
	);
}

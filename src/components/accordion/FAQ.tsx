import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/components/ui/accordion";
  import { accordionItems } from "@/data/content";
  
  export function FAQ() {
	return (
	  <Accordion
		type="single"
		collapsible
		className="w-full mx-auto border border-[#E5E7EB] p-8 rounded-[20px]"
		defaultValue="item-0"
	  >
		<h5 className="text-[#111827] font-[500] text-3xl sm:text-[48px] md:text-[60px] lg:text-[80px] mb-6 md:mb-10">
		  유니고 AI - 자주 묻는 질문
		</h5>
  
		{accordionItems.map((item, index) => (
		  <AccordionItem key={index} value={`item-${index}`}>
			<AccordionTrigger className="md:text-[24px] text-[#111827] font-[500] md:px-3 text-lg py-5">
			  {item.title}
			</AccordionTrigger>
  
			<AccordionContent>
			  {item.content.split("\n").map((line, i) => (
				<p
				  key={i}
				  className="text-[#6B7280] px-3 md:px-8 md:text-[16px] text-[14px] mb-2"
				>
				  {line.trim()}
				</p>
			  ))}
			</AccordionContent>
		  </AccordionItem>
		))}
	  </Accordion>
	);
  }
  
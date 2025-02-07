import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';

interface AccordionData {
	id: string;
	title: string;
	content: string;
}

interface DynamicAccordionProps {
	items: AccordionData[];
}

export default function DynamicAccordion({ items }: DynamicAccordionProps) {
	return (
		<Accordion type="single" collapsible>
			{items.map((item) => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger className="flex justify-between items-center py-4 text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors duration-300">
						{item.title}
					</AccordionTrigger>
					<AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
						<div className="pb-4 pt-0">{item.content}</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}

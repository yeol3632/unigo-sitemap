import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface ItemsProps<T> {
	currentItems: T[];
	renderItem: (item: T) => React.ReactNode;
}

function Items<T>({ currentItems, renderItem }: ItemsProps<T>) {
	return (
		<>
			{currentItems.map((item, index) => (
				<React.Fragment key={index}>{renderItem(item)}</React.Fragment>
			))}
		</>
	);
}

interface PaginatedItemsProps<T> {
	itemsPerPage: number;
	renderItem: (item: T) => React.ReactNode;
	items: T[];
	colSpan: number;
	className?: string;
	trClassname?: string;
	render?: string;
}

export default function PaginatedItems<T>({
	itemsPerPage,
	renderItem,
	items,
	colSpan,
	className,
	trClassname,
	render = "tr",
}: PaginatedItemsProps<T>) {
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items currentItems={currentItems} renderItem={renderItem} />
			{render === "tr" ? (
				<tr className={trClassname}>
					<td
						colSpan={colSpan || 5}
						className={cn(
							"bg-transparent border-none p-0 m-0",
							className
						)}
					>
						<ReactPaginate
							breakLabel="..."
							nextLabel={<ChevronRight />}
							onPageChange={handlePageClick}
							pageRangeDisplayed={5}
							pageCount={pageCount}
							previousLabel={<ChevronLeft />}
							renderOnZeroPageCount={null}
							containerClassName="flex mt-7 lg:mt-10 justify-center flex-wrap gap-3 w-full pagination"
							pageClassName="w-8 h-8 leading-[32px]"
							activeClassName="active"
						/>
					</td>
				</tr>
			) : (
				<div className={trClassname}>
					<ReactPaginate
						breakLabel="..."
						nextLabel={<ChevronRight />}
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={pageCount}
						previousLabel={<ChevronLeft />}
						renderOnZeroPageCount={null}
						containerClassName="flex mt-7 lg:mt-10 justify-center flex-wrap gap-3 w-full pagination"
						pageClassName="w-8 h-8 leading-[32px]"
						activeClassName="active"
					/>
				</div>
			)}
		</>
	);
}

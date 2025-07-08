"use client";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
	isSidebarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
}>({
	isSidebarOpen: false,
	setIsSidebarOpen: () => {},
});

export const SidebarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
			{children}
		</SidebarContext.Provider>
	);
};
export const useSidebarContext = () => useContext(SidebarContext);

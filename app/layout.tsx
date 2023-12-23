import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Hilink",
	description: "Travel, UI/UX App for Camping, Hiking, and Backpacking.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

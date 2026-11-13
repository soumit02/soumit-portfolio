import "./globals.css";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  title: "Soumit Dey | AI Engineer & Computer Science Graduate",
  description: profile.summary,
  keywords: ["AI Engineer","Generative AI","AI Agents","RAG","Machine Learning","Soumit Dey","Bangladesh"],
  openGraph: { title: "Soumit Dey | AI Engineer & Computer Science Graduate", description: profile.summary, type: "website", images: ["/images/profile/og.png"] },
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230b1020'/><text x='16' y='22' font-size='16' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-weight='700'>SD</text></svg>" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap" /></head><body>{children}</body></html>);
}

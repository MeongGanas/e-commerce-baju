import AppHeader from "@/components/app-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen relative">
            <AppHeader />

            {children}
        </div >
    )
}
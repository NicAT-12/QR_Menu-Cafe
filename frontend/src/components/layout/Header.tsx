import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="border-b border-[#2A1D14] bg-[#0F0A07]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link to='/'>
                <h1 className="text-2xl font-semibold tracking-wide text-[#F5EFE6]">
                    QR Menú Café
                </h1>
                </Link>
            </div>
        </header>
    );
}
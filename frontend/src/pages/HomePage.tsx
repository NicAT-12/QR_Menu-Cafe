import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="flex min-h-[calc(100vh-144px)] items-center justify-center px-6">
            <section className="max-w-3xl text-center">
                <h2 className="mb-6 text-5xl font-bold text-[#F5EFE6]">
                    Descubrí nuestras recetas de café
                </h2>

                <p className="mb-10 text-lg text-[#B8ACA0]">
                    Explorá cada preparación con sus ingredientes y características.
                </p>

                <Link to='/menu'>
                    <button className="cursor-pointer rounded-xl bg-[#B68D5A] px-8 py-4 font-semibold text-[#0F0A07] transition-all duration-300 hover:bg-[#D2AA74]">
                        Ver Menú
                    </button>
                </Link>
            </section>
        </main>
    );
}
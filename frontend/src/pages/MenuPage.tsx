import CoffeeCard from "../components/menu/CoffeeCard";
import { recetasCafeteria } from "../data/coffees";

export default function MenuPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16">
            <section>
                <h2 className="mb-3 text-4xl font-bold text-[#F5EFE6]">
                    Nuestro Menú
                </h2>

                <p className="mb-10 text-[#B8ACA0]">
                    Recetas clásicas y de especialidad.
                </p>

                
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        recetasCafeteria.map((receta) => (
                            <li key={receta.id}>
                                <CoffeeCard receta={receta} />
                            </li>
                        ))
                    }
                    </ul>
                
            </section>
        </main>
    );
}
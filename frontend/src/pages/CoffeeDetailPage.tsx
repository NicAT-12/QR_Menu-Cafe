import { useParams, Link } from "react-router-dom";
import { recetasCafeteria } from "../data/coffees";

export default function CoffeeDetailPage() {
    const { id } = useParams();

    const foundReceta = recetasCafeteria.find(
        (receta) => receta.id === Number(id)
    );

    if (!foundReceta) {
        return (
            <main className="mx-auto max-w-3xl px-6 py-16 text-[#F5EFE6]">
                <p className="text-lg text-[#B8ACA0]">
                    No se encontró la receta
                </p>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-16 text-[#F5EFE6]">
            <Link
                to="/menu"
                className="inline-block mb-6 text-sm font-medium text-[#B68D5A] hover:text-[#F5EFE6] transition-colors"
            >
                ← Volver al menú
            </Link>
            <article className="rounded-2xl border border-[#3B2A1F] bg-[#2A1D14] p-8 space-y-6">
                <img
                    src={foundReceta.imagen}
                    alt={foundReceta.nombre}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl mb-6"
                />
                <h1 className="text-3xl font-bold">
                    {foundReceta.nombre}
                </h1>

                <p className="text-[#B8ACA0]">
                    {foundReceta.descripcion}
                </p>

                <div>
                    <h2 className="text-sm font-semibold text-[#B68D5A] mb-1">
                        Tipo de taza
                    </h2>
                    <p className="text-[#B8ACA0]">
                        {foundReceta.taza}
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-[#B68D5A] mb-2">
                        Ingredientes
                    </h2>

                    <ul className="space-y-1 text-[#B8ACA0]">
                        {foundReceta.ingredientes.map((ingrediente, index) => (
                            <li key={index}>
                                • {ingrediente}
                            </li>
                        ))}
                    </ul>
                </div>

            </article>
        </main>
    );
}
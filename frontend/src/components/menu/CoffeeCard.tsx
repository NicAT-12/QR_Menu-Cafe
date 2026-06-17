import { Link } from "react-router-dom";
import type { Receta } from "../../types/Receta";

interface CoffeeCardProps {
    receta: Receta;
}

export default function CoffeeCard({ receta }: CoffeeCardProps) {
    return (
        <article className="rounded-2xl border border-[#3B2A1F] bg-[#2A1D14] overflow-hidden transition-all duration-300 hover:border-[#B68D5A]">
            <img
                src={receta.imagen}
                alt={receta.nombre}
                className="h-60 w-full object-cover"
            />

            <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-[#F5EFE6]">
                    {receta.nombre}
                </h3>

                <p className="mb-4 text-[#B8ACA0]">
                    {receta.descripcion}
                </p>

                <Link to={`/menu/${receta.id}`}>
                    <span className="underline cursor-pointer text-sm font-medium text-[#B68D5A]">
                        Ver detalles
                    </span>
                </Link>
            </div>
        </article>
    );
}
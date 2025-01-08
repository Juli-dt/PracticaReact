const FilteredList = ({ list }) => {
    if (!list || list.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">No se encontraron películas que coincidan con tu búsqueda.</p>
            </div>
        );
    }

    return (
        <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((movie) => (
                    <article key={movie.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{movie.title}</h2>
                        <div className="space-y-2 text-gray-600">
                            <p><span className="font-medium">Director:</span> {movie.director}</p>
                            <p><span className="font-medium">Año:</span> {movie.year}</p>
                            <p><span className="font-medium">Género:</span> {movie.genre}</p>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
};

export default FilteredList
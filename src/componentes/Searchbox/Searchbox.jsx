import React, { useState } from 'react';

const SearchBox = ({ search, handleSearchChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        handleSearchChange(name, value);
    };

    return (
        <header className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Buscador de Películas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Director</label>
                    <input
                        type="text"
                        name="director"
                        value={search.director}
                        onChange={handleChange}
                        className="p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Buscar por director"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Título</label>
                    <input
                        type="text"
                        name="title"
                        value={search.title}
                        onChange={handleChange}
                        className="p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Buscar por título"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Año</label>
                    <input
                        type="number"
                        name="year"
                        value={search.year}
                        onChange={handleChange}
                        className="p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Buscar por año"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">Género</label>
                    <input
                        type="text"
                        name="genre"
                        value={search.genre}
                        onChange={handleChange}
                        className="p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Buscar por género"
                    />
                </div>
            </div>
        </header>
    );
};



export default SearchBox
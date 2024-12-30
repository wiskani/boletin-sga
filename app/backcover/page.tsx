export default function Page() {
    return (
     <div
            className="
            relative
            w-full
            h-screen
            bg-no-repeat
            bg-cover
            bg-center
            bg-[url('/images/background_initial.jpg')]
            filter
            " // Aplicando blanco y negro y desenfoque
            style={{
                filter: 'grayscale(1)',
            }}
        >
            <p
                className="text-red-50"
            >hola</p>
        </div>
    )
};

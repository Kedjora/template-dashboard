export default function AppLogo() {
    return (
        <div className="flex items-center gap-3">
            <img
                src="/assets/images/logo.png"
                alt="Kedjora"
                className="h-10 w-10 object-contain drop-shadow-sm"
            />
            <span className="text-xl font-bold text-gray-800">Kedjora</span>
        </div>
    );
}

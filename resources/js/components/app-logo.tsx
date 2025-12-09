interface AppLogoProps {
    className?: string;
    textClassName?: string;
    iconOnly?: boolean;
}

export default function AppLogo({
    className = '',
    textClassName = 'text-gray-800',
    iconOnly = false,
}: AppLogoProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src="/assets/images/logo.png"
                alt="Kedjora"
                className="h-10 w-10 object-contain drop-shadow-sm"
            />
            {!iconOnly && (
                <span className={`text-xl font-bold ${textClassName}`}>
                    Kedjora
                </span>
            )}
        </div>
    );
}

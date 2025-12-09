import AppLogo from '@/components/app-logo';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { Quote } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="min-h-screen w-full bg-white lg:grid lg:grid-cols-2">
            {/* Left Panel - Branding & Visuals (Hidden on Mobile) */}
            <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white lg:flex">
                {/* Abstract Patterns */}
                <div className="absolute top-0 left-0 h-full w-full opacity-10">
                    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl"></div>
                </div>

                {/* Logo */}
                <div className="relative z-10">
                    <Link
                        href={home()}
                        className="inline-flex items-center gap-3 text-white"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                            <AppLogo iconOnly />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">
                            Kedjora
                        </span>
                    </Link>
                </div>

                {/* Quote / Testimonial */}
                <div className="relative z-10 max-w-lg">
                    <Quote className="mb-6 h-10 w-10 text-white/50" />
                    <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight">
                        "The perfect platform to manage your business
                        efficiently and scale without limits."
                    </h2>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Sarah Chen"
                            className="h-10 w-10 rounded-full border-2 border-white/20 object-cover"
                        />
                        <div>
                            <p className="font-semibold text-white">
                                Sarah Chen
                            </p>
                            <p className="text-sm text-blue-100">
                                Product Manager at TechFlow
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="relative z-10 flex gap-6 text-sm text-blue-100">
                    <a href="#" className="transition-colors hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="transition-colors hover:text-white">
                        Terms of Service
                    </a>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    {/* Mobile Logo (Visible only on small screens) */}
                    <div className="mb-10 lg:hidden">
                        <Link
                            href={home()}
                            className="inline-flex items-center gap-2"
                        >
                            <AppLogo />
                        </Link>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            {title || 'Welcome back'}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {description || 'Please enter your details.'}
                        </p>
                    </div>

                    <div className="mt-8">{children}</div>
                </div>
            </div>
        </div>
    );
}

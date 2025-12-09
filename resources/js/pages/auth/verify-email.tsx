// Components
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { logout } from '@/routes';
import { send } from '@/routes/verification';
import { Form, Head } from '@inertiajs/react';
import { Mail } from 'lucide-react';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Verify your email"
            description="Thanks for signing up! Please verify your email address by clicking on the link we just emailed to you."
        >
            <Head title="Email verification" />

            <div className="flex flex-col items-center">
                {/* Email Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-center text-sm font-medium text-green-600 w-full">
                        A new verification link has been sent to your email address.
                    </div>
                )}

                <Form {...send.form()} className="space-y-4 w-full text-center">
                    {({ processing }) => (
                        <>
                            <Button
                                disabled={processing}
                                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
                            >
                                {processing && <Spinner />}
                                Resend verification email
                            </Button>

                            <TextLink
                                href={logout()}
                                className="block text-sm text-gray-500 hover:text-gray-700 mt-4"
                            >
                                Sign out
                            </TextLink>
                        </>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}

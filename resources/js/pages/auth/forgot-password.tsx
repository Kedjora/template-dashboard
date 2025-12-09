// Components
import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, ArrowLeft } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password?"
            description="No worries, we'll send you reset instructions"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="space-y-5">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-700 font-medium">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="email@example.com"
                                    className="h-12 px-4 rounded-xl border-gray-200 bg-[#F4F6F9] focus:bg-white focus:border-blue-500 focus:ring-blue-500 transition-all"
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="mt-6">
                                <Button
                                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing && (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    )}
                                    Send reset link
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="text-center pt-2">
                    <TextLink
                        href={login()}
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                    >
                        <ArrowLeft size={16} />
                        Back to sign in
                    </TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}

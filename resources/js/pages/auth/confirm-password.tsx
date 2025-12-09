import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/password/confirm';
import { Form, Head } from '@inertiajs/react';
import { ShieldCheck } from 'lucide-react';

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Security verification"
            description="This is a secure area. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <div className="flex flex-col items-center">
                {/* Shield Icon */}
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-amber-600" />
                </div>

                <Form {...store.form()} resetOnSuccess={['password']} className="w-full">
                    {({ processing, errors }) => (
                        <div className="space-y-5">
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-gray-700 font-medium">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    autoFocus
                                    className="h-12 px-4 rounded-xl border-gray-200 bg-[#F4F6F9] focus:bg-white focus:border-blue-500 focus:ring-blue-500 transition-all"
                                />

                                <InputError message={errors.password} />
                            </div>

                            <Button
                                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
                                disabled={processing}
                                data-test="confirm-password-button"
                            >
                                {processing && <Spinner />}
                                Confirm password
                            </Button>
                        </div>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}

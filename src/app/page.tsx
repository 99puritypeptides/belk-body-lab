import { redirect } from 'next/navigation';

// The middleware handles locale detection and redirects all requests to /[locale].
// This file exists only as a fallback for direct root access without locale prefix.
export default function RootPage() {
  redirect('/en');
}

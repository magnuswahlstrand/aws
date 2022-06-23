// utils/trpc.ts
import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../../../api/functions/lambda';

export const trpc = createReactQueryHooks<AppRouter>();
